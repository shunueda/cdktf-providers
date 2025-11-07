// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#filter DataPowerflexDevice#filter}
  */
  readonly filter?: DataPowerflexDeviceFilter;
}
export interface DataPowerflexDeviceDeviceModelAccelerationProps {
}

export function dataPowerflexDeviceDeviceModelAccelerationPropsToTerraform(struct?: DataPowerflexDeviceDeviceModelAccelerationProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelAccelerationPropsToHclTerraform(struct?: DataPowerflexDeviceDeviceModelAccelerationProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelAccelerationPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexDeviceDeviceModelAccelerationProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModelAccelerationProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acc_used_capacity_in_kb - computed: true, optional: false, required: false
  public get accUsedCapacityInKb() {
    return this.getStringAttribute('acc_used_capacity_in_kb');
  }
}
export interface DataPowerflexDeviceDeviceModelLinks {
}

export function dataPowerflexDeviceDeviceModelLinksToTerraform(struct?: DataPowerflexDeviceDeviceModelLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelLinksToHclTerraform(struct?: DataPowerflexDeviceDeviceModelLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexDeviceDeviceModelLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModelLinks | undefined) {
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

export class DataPowerflexDeviceDeviceModelLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexDeviceDeviceModelLinksOutputReference {
    return new DataPowerflexDeviceDeviceModelLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindow {
}

export function dataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindowToTerraform(struct?: DataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindowToHclTerraform(struct?: DataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindow {
}

export function dataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindowToTerraform(struct?: DataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindowToHclTerraform(struct?: DataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindow {
}

export function dataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindowToTerraform(struct?: DataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindowToHclTerraform(struct?: DataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexDeviceDeviceModelLongSuccessfulIos {
}

export function dataPowerflexDeviceDeviceModelLongSuccessfulIosToTerraform(struct?: DataPowerflexDeviceDeviceModelLongSuccessfulIos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelLongSuccessfulIosToHclTerraform(struct?: DataPowerflexDeviceDeviceModelLongSuccessfulIos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelLongSuccessfulIosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexDeviceDeviceModelLongSuccessfulIos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModelLongSuccessfulIos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexDeviceDeviceModelLongSuccessfulIosLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexDeviceDeviceModelLongSuccessfulIosMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexDeviceDeviceModelLongSuccessfulIosShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexDeviceDeviceModelRfcacheProps {
}

export function dataPowerflexDeviceDeviceModelRfcachePropsToTerraform(struct?: DataPowerflexDeviceDeviceModelRfcacheProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelRfcachePropsToHclTerraform(struct?: DataPowerflexDeviceDeviceModelRfcacheProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelRfcachePropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexDeviceDeviceModelRfcacheProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModelRfcacheProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_uuid - computed: true, optional: false, required: false
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }

  // rfcache_error_card_io_error - computed: true, optional: false, required: false
  public get rfcacheErrorCardIoError() {
    return this.getBooleanAttribute('rfcache_error_card_io_error');
  }

  // rfcache_error_heavy_load_cache_skip - computed: true, optional: false, required: false
  public get rfcacheErrorHeavyLoadCacheSkip() {
    return this.getBooleanAttribute('rfcache_error_heavy_load_cache_skip');
  }

  // rfcache_error_stuck_io - computed: true, optional: false, required: false
  public get rfcacheErrorStuckIo() {
    return this.getBooleanAttribute('rfcache_error_stuck_io');
  }
}
export interface DataPowerflexDeviceDeviceModelStorageProps {
}

export function dataPowerflexDeviceDeviceModelStoragePropsToTerraform(struct?: DataPowerflexDeviceDeviceModelStorageProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelStoragePropsToHclTerraform(struct?: DataPowerflexDeviceDeviceModelStorageProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelStoragePropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexDeviceDeviceModelStorageProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModelStorageProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checksum_acc_device_id - computed: true, optional: false, required: false
  public get checksumAccDeviceId() {
    return this.getStringAttribute('checksum_acc_device_id');
  }

  // checksum_changelog_acc_device_id - computed: true, optional: false, required: false
  public get checksumChangelogAccDeviceId() {
    return this.getStringAttribute('checksum_changelog_acc_device_id');
  }

  // checksum_changelog_size_mb - computed: true, optional: false, required: false
  public get checksumChangelogSizeMb() {
    return this.getNumberAttribute('checksum_changelog_size_mb');
  }

  // checksum_mode - computed: true, optional: false, required: false
  public get checksumMode() {
    return this.getStringAttribute('checksum_mode');
  }

  // checksum_size_mb - computed: true, optional: false, required: false
  public get checksumSizeMb() {
    return this.getNumberAttribute('checksum_size_mb');
  }

  // dest_checksum_acc_device_id - computed: true, optional: false, required: false
  public get destChecksumAccDeviceId() {
    return this.getStringAttribute('dest_checksum_acc_device_id');
  }

  // dest_checksum_changelog_acc_device_id - computed: true, optional: false, required: false
  public get destChecksumChangelogAccDeviceId() {
    return this.getStringAttribute('dest_checksum_changelog_acc_device_id');
  }

  // dest_checksum_changelog_size_mb - computed: true, optional: false, required: false
  public get destChecksumChangelogSizeMb() {
    return this.getNumberAttribute('dest_checksum_changelog_size_mb');
  }

  // dest_checksum_mode - computed: true, optional: false, required: false
  public get destChecksumMode() {
    return this.getStringAttribute('dest_checksum_mode');
  }

  // dest_fgl_acc_device_id - computed: true, optional: false, required: false
  public get destFglAccDeviceId() {
    return this.getStringAttribute('dest_fgl_acc_device_id');
  }

  // dest_fgl_nvdimm_size_mb - computed: true, optional: false, required: false
  public get destFglNvdimmSizeMb() {
    return this.getNumberAttribute('dest_fgl_nvdimm_size_mb');
  }

  // fgl_acc_device_id - computed: true, optional: false, required: false
  public get fglAccDeviceId() {
    return this.getStringAttribute('fgl_acc_device_id');
  }

  // fgl_nvdimm_size_mb - computed: true, optional: false, required: false
  public get fglNvdimmSizeMb() {
    return this.getNumberAttribute('fgl_nvdimm_size_mb');
  }

  // is_checksum_fully_calculated - computed: true, optional: false, required: false
  public get isChecksumFullyCalculated() {
    return this.getBooleanAttribute('is_checksum_fully_calculated');
  }
}
export interface DataPowerflexDeviceDeviceModel {
}

export function dataPowerflexDeviceDeviceModelToTerraform(struct?: DataPowerflexDeviceDeviceModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexDeviceDeviceModelToHclTerraform(struct?: DataPowerflexDeviceDeviceModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexDeviceDeviceModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexDeviceDeviceModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceDeviceModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acceleration_pool_id - computed: true, optional: false, required: false
  public get accelerationPoolId() {
    return this.getStringAttribute('acceleration_pool_id');
  }

  // acceleration_props - computed: true, optional: false, required: false
  private _accelerationProps = new DataPowerflexDeviceDeviceModelAccelerationPropsOutputReference(this, "acceleration_props");
  public get accelerationProps() {
    return this._accelerationProps;
  }

  // aggregated_state - computed: true, optional: false, required: false
  public get aggregatedState() {
    return this.getStringAttribute('aggregated_state');
  }

  // ata_security_active - computed: true, optional: false, required: false
  public get ataSecurityActive() {
    return this.getBooleanAttribute('ata_security_active');
  }

  // auto_detect_media_type - computed: true, optional: false, required: false
  public get autoDetectMediaType() {
    return this.getStringAttribute('auto_detect_media_type');
  }

  // cache_look_ahead_active - computed: true, optional: false, required: false
  public get cacheLookAheadActive() {
    return this.getBooleanAttribute('cache_look_ahead_active');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // capacity_limit_in_kb - computed: true, optional: false, required: false
  public get capacityLimitInKb() {
    return this.getNumberAttribute('capacity_limit_in_kb');
  }

  // device_current_path_name - computed: true, optional: false, required: false
  public get deviceCurrentPathName() {
    return this.getStringAttribute('device_current_path_name');
  }

  // device_original_path_name - computed: true, optional: false, required: false
  public get deviceOriginalPathName() {
    return this.getStringAttribute('device_original_path_name');
  }

  // device_state - computed: true, optional: false, required: false
  public get deviceState() {
    return this.getStringAttribute('device_state');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // error_state - computed: true, optional: false, required: false
  public get errorState() {
    return this.getStringAttribute('error_state');
  }

  // external_acceleration_type - computed: true, optional: false, required: false
  public get externalAccelerationType() {
    return this.getStringAttribute('external_acceleration_type');
  }

  // fgl_nvdimm_metadata_amortization_x100 - computed: true, optional: false, required: false
  public get fglNvdimmMetadataAmortizationX100() {
    return this.getNumberAttribute('fgl_nvdimm_metadata_amortization_x100');
  }

  // fgl_nvdimm_write_cache_size - computed: true, optional: false, required: false
  public get fglNvdimmWriteCacheSize() {
    return this.getNumberAttribute('fgl_nvdimm_write_cache_size');
  }

  // firmware_version - computed: true, optional: false, required: false
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // led_setting - computed: true, optional: false, required: false
  public get ledSetting() {
    return this.getStringAttribute('led_setting');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexDeviceDeviceModelLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // logical_sector_size_in_bytes - computed: true, optional: false, required: false
  public get logicalSectorSizeInBytes() {
    return this.getNumberAttribute('logical_sector_size_in_bytes');
  }

  // long_successful_ios - computed: true, optional: false, required: false
  private _longSuccessfulIos = new DataPowerflexDeviceDeviceModelLongSuccessfulIosOutputReference(this, "long_successful_ios");
  public get longSuccessfulIos() {
    return this._longSuccessfulIos;
  }

  // max_capacity_in_kb - computed: true, optional: false, required: false
  public get maxCapacityInKb() {
    return this.getNumberAttribute('max_capacity_in_kb');
  }

  // media_failing - computed: true, optional: false, required: false
  public get mediaFailing() {
    return this.getBooleanAttribute('media_failing');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // persistent_checksum_state - computed: true, optional: false, required: false
  public get persistentChecksumState() {
    return this.getStringAttribute('persistent_checksum_state');
  }

  // physical_sector_size_in_bytes - computed: true, optional: false, required: false
  public get physicalSectorSizeInBytes() {
    return this.getNumberAttribute('physical_sector_size_in_bytes');
  }

  // raid_controller_serial_number - computed: true, optional: false, required: false
  public get raidControllerSerialNumber() {
    return this.getStringAttribute('raid_controller_serial_number');
  }

  // rfcache_error_device_does_not_exist - computed: true, optional: false, required: false
  public get rfcacheErrorDeviceDoesNotExist() {
    return this.getBooleanAttribute('rfcache_error_device_does_not_exist');
  }

  // rfcache_props - computed: true, optional: false, required: false
  private _rfcacheProps = new DataPowerflexDeviceDeviceModelRfcachePropsOutputReference(this, "rfcache_props");
  public get rfcacheProps() {
    return this._rfcacheProps;
  }

  // sds_id - computed: true, optional: false, required: false
  public get sdsId() {
    return this.getStringAttribute('sds_id');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // slot_number - computed: true, optional: false, required: false
  public get slotNumber() {
    return this.getStringAttribute('slot_number');
  }

  // sp_sds_id - computed: true, optional: false, required: false
  public get spSdsId() {
    return this.getStringAttribute('sp_sds_id');
  }

  // ssd_end_of_life_state - computed: true, optional: false, required: false
  public get ssdEndOfLifeState() {
    return this.getStringAttribute('ssd_end_of_life_state');
  }

  // storage_pool_id - computed: true, optional: false, required: false
  public get storagePoolId() {
    return this.getStringAttribute('storage_pool_id');
  }

  // storage_props - computed: true, optional: false, required: false
  private _storageProps = new DataPowerflexDeviceDeviceModelStoragePropsOutputReference(this, "storage_props");
  public get storageProps() {
    return this._storageProps;
  }

  // temperature_state - computed: true, optional: false, required: false
  public get temperatureState() {
    return this.getStringAttribute('temperature_state');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }

  // write_cache_active - computed: true, optional: false, required: false
  public get writeCacheActive() {
    return this.getBooleanAttribute('write_cache_active');
  }
}

export class DataPowerflexDeviceDeviceModelList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexDeviceDeviceModelOutputReference {
    return new DataPowerflexDeviceDeviceModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexDeviceFilter {
  /**
  * List of acceleration_pool_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#acceleration_pool_id DataPowerflexDevice#acceleration_pool_id}
  */
  readonly accelerationPoolId?: string[];
  /**
  * List of aggregated_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#aggregated_state DataPowerflexDevice#aggregated_state}
  */
  readonly aggregatedState?: string[];
  /**
  * Value for ata_security_active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#ata_security_active DataPowerflexDevice#ata_security_active}
  */
  readonly ataSecurityActive?: boolean | cdktf.IResolvable;
  /**
  * List of auto_detect_media_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#auto_detect_media_type DataPowerflexDevice#auto_detect_media_type}
  */
  readonly autoDetectMediaType?: string[];
  /**
  * Value for cache_look_ahead_active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#cache_look_ahead_active DataPowerflexDevice#cache_look_ahead_active}
  */
  readonly cacheLookAheadActive?: boolean | cdktf.IResolvable;
  /**
  * List of capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#capacity DataPowerflexDevice#capacity}
  */
  readonly capacity?: number[];
  /**
  * List of capacity_limit_in_kb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#capacity_limit_in_kb DataPowerflexDevice#capacity_limit_in_kb}
  */
  readonly capacityLimitInKb?: number[];
  /**
  * List of device_current_path_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#device_current_path_name DataPowerflexDevice#device_current_path_name}
  */
  readonly deviceCurrentPathName?: string[];
  /**
  * List of device_original_path_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#device_original_path_name DataPowerflexDevice#device_original_path_name}
  */
  readonly deviceOriginalPathName?: string[];
  /**
  * List of device_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#device_state DataPowerflexDevice#device_state}
  */
  readonly deviceState?: string[];
  /**
  * List of device_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#device_type DataPowerflexDevice#device_type}
  */
  readonly deviceType?: string[];
  /**
  * List of error_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#error_state DataPowerflexDevice#error_state}
  */
  readonly errorState?: string[];
  /**
  * List of external_acceleration_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#external_acceleration_type DataPowerflexDevice#external_acceleration_type}
  */
  readonly externalAccelerationType?: string[];
  /**
  * List of fgl_nvdimm_metadata_amortization_x100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#fgl_nvdimm_metadata_amortization_x100 DataPowerflexDevice#fgl_nvdimm_metadata_amortization_x100}
  */
  readonly fglNvdimmMetadataAmortizationX100?: number[];
  /**
  * List of fgl_nvdimm_write_cache_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#fgl_nvdimm_write_cache_size DataPowerflexDevice#fgl_nvdimm_write_cache_size}
  */
  readonly fglNvdimmWriteCacheSize?: number[];
  /**
  * List of firmware_version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#firmware_version DataPowerflexDevice#firmware_version}
  */
  readonly firmwareVersion?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#id DataPowerflexDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of led_setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#led_setting DataPowerflexDevice#led_setting}
  */
  readonly ledSetting?: string[];
  /**
  * List of logical_sector_size_in_bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#logical_sector_size_in_bytes DataPowerflexDevice#logical_sector_size_in_bytes}
  */
  readonly logicalSectorSizeInBytes?: number[];
  /**
  * List of max_capacity_in_kb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#max_capacity_in_kb DataPowerflexDevice#max_capacity_in_kb}
  */
  readonly maxCapacityInKb?: number[];
  /**
  * Value for media_failing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#media_failing DataPowerflexDevice#media_failing}
  */
  readonly mediaFailing?: boolean | cdktf.IResolvable;
  /**
  * List of media_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#media_type DataPowerflexDevice#media_type}
  */
  readonly mediaType?: string[];
  /**
  * List of model_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#model_name DataPowerflexDevice#model_name}
  */
  readonly modelName?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#name DataPowerflexDevice#name}
  */
  readonly name?: string[];
  /**
  * List of persistent_checksum_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#persistent_checksum_state DataPowerflexDevice#persistent_checksum_state}
  */
  readonly persistentChecksumState?: string[];
  /**
  * List of physical_sector_size_in_bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#physical_sector_size_in_bytes DataPowerflexDevice#physical_sector_size_in_bytes}
  */
  readonly physicalSectorSizeInBytes?: number[];
  /**
  * List of raid_controller_serial_number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#raid_controller_serial_number DataPowerflexDevice#raid_controller_serial_number}
  */
  readonly raidControllerSerialNumber?: string[];
  /**
  * Value for rfcache_error_device_does_not_exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#rfcache_error_device_does_not_exist DataPowerflexDevice#rfcache_error_device_does_not_exist}
  */
  readonly rfcacheErrorDeviceDoesNotExist?: boolean | cdktf.IResolvable;
  /**
  * List of sds_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#sds_id DataPowerflexDevice#sds_id}
  */
  readonly sdsId?: string[];
  /**
  * List of serial_number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#serial_number DataPowerflexDevice#serial_number}
  */
  readonly serialNumber?: string[];
  /**
  * List of slot_number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#slot_number DataPowerflexDevice#slot_number}
  */
  readonly slotNumber?: string[];
  /**
  * List of sp_sds_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#sp_sds_id DataPowerflexDevice#sp_sds_id}
  */
  readonly spSdsId?: string[];
  /**
  * List of ssd_end_of_life_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#ssd_end_of_life_state DataPowerflexDevice#ssd_end_of_life_state}
  */
  readonly ssdEndOfLifeState?: string[];
  /**
  * List of storage_pool_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#storage_pool_id DataPowerflexDevice#storage_pool_id}
  */
  readonly storagePoolId?: string[];
  /**
  * List of temperature_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#temperature_state DataPowerflexDevice#temperature_state}
  */
  readonly temperatureState?: string[];
  /**
  * List of vendor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#vendor_name DataPowerflexDevice#vendor_name}
  */
  readonly vendorName?: string[];
  /**
  * Value for write_cache_active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#write_cache_active DataPowerflexDevice#write_cache_active}
  */
  readonly writeCacheActive?: boolean | cdktf.IResolvable;
}

export function dataPowerflexDeviceFilterToTerraform(struct?: DataPowerflexDeviceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceleration_pool_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accelerationPoolId),
    aggregated_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aggregatedState),
    ata_security_active: cdktf.booleanToTerraform(struct!.ataSecurityActive),
    auto_detect_media_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.autoDetectMediaType),
    cache_look_ahead_active: cdktf.booleanToTerraform(struct!.cacheLookAheadActive),
    capacity: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.capacity),
    capacity_limit_in_kb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.capacityLimitInKb),
    device_current_path_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceCurrentPathName),
    device_original_path_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceOriginalPathName),
    device_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceState),
    device_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceType),
    error_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.errorState),
    external_acceleration_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalAccelerationType),
    fgl_nvdimm_metadata_amortization_x100: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglNvdimmMetadataAmortizationX100),
    fgl_nvdimm_write_cache_size: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglNvdimmWriteCacheSize),
    firmware_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.firmwareVersion),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    led_setting: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ledSetting),
    logical_sector_size_in_bytes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.logicalSectorSizeInBytes),
    max_capacity_in_kb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.maxCapacityInKb),
    media_failing: cdktf.booleanToTerraform(struct!.mediaFailing),
    media_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mediaType),
    model_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modelName),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    persistent_checksum_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.persistentChecksumState),
    physical_sector_size_in_bytes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.physicalSectorSizeInBytes),
    raid_controller_serial_number: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.raidControllerSerialNumber),
    rfcache_error_device_does_not_exist: cdktf.booleanToTerraform(struct!.rfcacheErrorDeviceDoesNotExist),
    sds_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sdsId),
    serial_number: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serialNumber),
    slot_number: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slotNumber),
    sp_sds_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spSdsId),
    ssd_end_of_life_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ssdEndOfLifeState),
    storage_pool_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePoolId),
    temperature_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.temperatureState),
    vendor_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vendorName),
    write_cache_active: cdktf.booleanToTerraform(struct!.writeCacheActive),
  }
}


export function dataPowerflexDeviceFilterToHclTerraform(struct?: DataPowerflexDeviceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceleration_pool_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accelerationPoolId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    aggregated_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aggregatedState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ata_security_active: {
      value: cdktf.booleanToHclTerraform(struct!.ataSecurityActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_detect_media_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.autoDetectMediaType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cache_look_ahead_active: {
      value: cdktf.booleanToHclTerraform(struct!.cacheLookAheadActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capacity: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.capacity),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    capacity_limit_in_kb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.capacityLimitInKb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    device_current_path_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceCurrentPathName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    device_original_path_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceOriginalPathName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    device_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    device_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    error_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.errorState),
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
    fgl_nvdimm_metadata_amortization_x100: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglNvdimmMetadataAmortizationX100),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fgl_nvdimm_write_cache_size: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglNvdimmWriteCacheSize),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    firmware_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.firmwareVersion),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    led_setting: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ledSetting),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    logical_sector_size_in_bytes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.logicalSectorSizeInBytes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    max_capacity_in_kb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.maxCapacityInKb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    media_failing: {
      value: cdktf.booleanToHclTerraform(struct!.mediaFailing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mediaType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    model_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modelName),
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
    persistent_checksum_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.persistentChecksumState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    physical_sector_size_in_bytes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.physicalSectorSizeInBytes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    raid_controller_serial_number: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.raidControllerSerialNumber),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rfcache_error_device_does_not_exist: {
      value: cdktf.booleanToHclTerraform(struct!.rfcacheErrorDeviceDoesNotExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sds_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sdsId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    serial_number: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serialNumber),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    slot_number: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slotNumber),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sp_sds_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spSdsId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssd_end_of_life_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ssdEndOfLifeState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    storage_pool_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePoolId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    temperature_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.temperatureState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vendor_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vendorName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    write_cache_active: {
      value: cdktf.booleanToHclTerraform(struct!.writeCacheActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexDeviceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexDeviceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accelerationPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerationPoolId = this._accelerationPoolId;
    }
    if (this._aggregatedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatedState = this._aggregatedState;
    }
    if (this._ataSecurityActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.ataSecurityActive = this._ataSecurityActive;
    }
    if (this._autoDetectMediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDetectMediaType = this._autoDetectMediaType;
    }
    if (this._cacheLookAheadActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheLookAheadActive = this._cacheLookAheadActive;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._capacityLimitInKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityLimitInKb = this._capacityLimitInKb;
    }
    if (this._deviceCurrentPathName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceCurrentPathName = this._deviceCurrentPathName;
    }
    if (this._deviceOriginalPathName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceOriginalPathName = this._deviceOriginalPathName;
    }
    if (this._deviceState !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceState = this._deviceState;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._errorState !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorState = this._errorState;
    }
    if (this._externalAccelerationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccelerationType = this._externalAccelerationType;
    }
    if (this._fglNvdimmMetadataAmortizationX100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglNvdimmMetadataAmortizationX100 = this._fglNvdimmMetadataAmortizationX100;
    }
    if (this._fglNvdimmWriteCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglNvdimmWriteCacheSize = this._fglNvdimmWriteCacheSize;
    }
    if (this._firmwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwareVersion = this._firmwareVersion;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ledSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.ledSetting = this._ledSetting;
    }
    if (this._logicalSectorSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalSectorSizeInBytes = this._logicalSectorSizeInBytes;
    }
    if (this._maxCapacityInKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacityInKb = this._maxCapacityInKb;
    }
    if (this._mediaFailing !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaFailing = this._mediaFailing;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentChecksumState !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentChecksumState = this._persistentChecksumState;
    }
    if (this._physicalSectorSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalSectorSizeInBytes = this._physicalSectorSizeInBytes;
    }
    if (this._raidControllerSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidControllerSerialNumber = this._raidControllerSerialNumber;
    }
    if (this._rfcacheErrorDeviceDoesNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfcacheErrorDeviceDoesNotExist = this._rfcacheErrorDeviceDoesNotExist;
    }
    if (this._sdsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdsId = this._sdsId;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._slotNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotNumber = this._slotNumber;
    }
    if (this._spSdsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSdsId = this._spSdsId;
    }
    if (this._ssdEndOfLifeState !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssdEndOfLifeState = this._ssdEndOfLifeState;
    }
    if (this._storagePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePoolId = this._storagePoolId;
    }
    if (this._temperatureState !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperatureState = this._temperatureState;
    }
    if (this._vendorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorName = this._vendorName;
    }
    if (this._writeCacheActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCacheActive = this._writeCacheActive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexDeviceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accelerationPoolId = undefined;
      this._aggregatedState = undefined;
      this._ataSecurityActive = undefined;
      this._autoDetectMediaType = undefined;
      this._cacheLookAheadActive = undefined;
      this._capacity = undefined;
      this._capacityLimitInKb = undefined;
      this._deviceCurrentPathName = undefined;
      this._deviceOriginalPathName = undefined;
      this._deviceState = undefined;
      this._deviceType = undefined;
      this._errorState = undefined;
      this._externalAccelerationType = undefined;
      this._fglNvdimmMetadataAmortizationX100 = undefined;
      this._fglNvdimmWriteCacheSize = undefined;
      this._firmwareVersion = undefined;
      this._id = undefined;
      this._ledSetting = undefined;
      this._logicalSectorSizeInBytes = undefined;
      this._maxCapacityInKb = undefined;
      this._mediaFailing = undefined;
      this._mediaType = undefined;
      this._modelName = undefined;
      this._name = undefined;
      this._persistentChecksumState = undefined;
      this._physicalSectorSizeInBytes = undefined;
      this._raidControllerSerialNumber = undefined;
      this._rfcacheErrorDeviceDoesNotExist = undefined;
      this._sdsId = undefined;
      this._serialNumber = undefined;
      this._slotNumber = undefined;
      this._spSdsId = undefined;
      this._ssdEndOfLifeState = undefined;
      this._storagePoolId = undefined;
      this._temperatureState = undefined;
      this._vendorName = undefined;
      this._writeCacheActive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accelerationPoolId = value.accelerationPoolId;
      this._aggregatedState = value.aggregatedState;
      this._ataSecurityActive = value.ataSecurityActive;
      this._autoDetectMediaType = value.autoDetectMediaType;
      this._cacheLookAheadActive = value.cacheLookAheadActive;
      this._capacity = value.capacity;
      this._capacityLimitInKb = value.capacityLimitInKb;
      this._deviceCurrentPathName = value.deviceCurrentPathName;
      this._deviceOriginalPathName = value.deviceOriginalPathName;
      this._deviceState = value.deviceState;
      this._deviceType = value.deviceType;
      this._errorState = value.errorState;
      this._externalAccelerationType = value.externalAccelerationType;
      this._fglNvdimmMetadataAmortizationX100 = value.fglNvdimmMetadataAmortizationX100;
      this._fglNvdimmWriteCacheSize = value.fglNvdimmWriteCacheSize;
      this._firmwareVersion = value.firmwareVersion;
      this._id = value.id;
      this._ledSetting = value.ledSetting;
      this._logicalSectorSizeInBytes = value.logicalSectorSizeInBytes;
      this._maxCapacityInKb = value.maxCapacityInKb;
      this._mediaFailing = value.mediaFailing;
      this._mediaType = value.mediaType;
      this._modelName = value.modelName;
      this._name = value.name;
      this._persistentChecksumState = value.persistentChecksumState;
      this._physicalSectorSizeInBytes = value.physicalSectorSizeInBytes;
      this._raidControllerSerialNumber = value.raidControllerSerialNumber;
      this._rfcacheErrorDeviceDoesNotExist = value.rfcacheErrorDeviceDoesNotExist;
      this._sdsId = value.sdsId;
      this._serialNumber = value.serialNumber;
      this._slotNumber = value.slotNumber;
      this._spSdsId = value.spSdsId;
      this._ssdEndOfLifeState = value.ssdEndOfLifeState;
      this._storagePoolId = value.storagePoolId;
      this._temperatureState = value.temperatureState;
      this._vendorName = value.vendorName;
      this._writeCacheActive = value.writeCacheActive;
    }
  }

  // acceleration_pool_id - computed: false, optional: true, required: false
  private _accelerationPoolId?: string[]; 
  public get accelerationPoolId() {
    return cdktf.Fn.tolist(this.getListAttribute('acceleration_pool_id'));
  }
  public set accelerationPoolId(value: string[]) {
    this._accelerationPoolId = value;
  }
  public resetAccelerationPoolId() {
    this._accelerationPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationPoolIdInput() {
    return this._accelerationPoolId;
  }

  // aggregated_state - computed: false, optional: true, required: false
  private _aggregatedState?: string[]; 
  public get aggregatedState() {
    return cdktf.Fn.tolist(this.getListAttribute('aggregated_state'));
  }
  public set aggregatedState(value: string[]) {
    this._aggregatedState = value;
  }
  public resetAggregatedState() {
    this._aggregatedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatedStateInput() {
    return this._aggregatedState;
  }

  // ata_security_active - computed: false, optional: true, required: false
  private _ataSecurityActive?: boolean | cdktf.IResolvable; 
  public get ataSecurityActive() {
    return this.getBooleanAttribute('ata_security_active');
  }
  public set ataSecurityActive(value: boolean | cdktf.IResolvable) {
    this._ataSecurityActive = value;
  }
  public resetAtaSecurityActive() {
    this._ataSecurityActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ataSecurityActiveInput() {
    return this._ataSecurityActive;
  }

  // auto_detect_media_type - computed: false, optional: true, required: false
  private _autoDetectMediaType?: string[]; 
  public get autoDetectMediaType() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_detect_media_type'));
  }
  public set autoDetectMediaType(value: string[]) {
    this._autoDetectMediaType = value;
  }
  public resetAutoDetectMediaType() {
    this._autoDetectMediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectMediaTypeInput() {
    return this._autoDetectMediaType;
  }

  // cache_look_ahead_active - computed: false, optional: true, required: false
  private _cacheLookAheadActive?: boolean | cdktf.IResolvable; 
  public get cacheLookAheadActive() {
    return this.getBooleanAttribute('cache_look_ahead_active');
  }
  public set cacheLookAheadActive(value: boolean | cdktf.IResolvable) {
    this._cacheLookAheadActive = value;
  }
  public resetCacheLookAheadActive() {
    this._cacheLookAheadActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLookAheadActiveInput() {
    return this._cacheLookAheadActive;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number[]; 
  public get capacity() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('capacity')));
  }
  public set capacity(value: number[]) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // capacity_limit_in_kb - computed: false, optional: true, required: false
  private _capacityLimitInKb?: number[]; 
  public get capacityLimitInKb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('capacity_limit_in_kb')));
  }
  public set capacityLimitInKb(value: number[]) {
    this._capacityLimitInKb = value;
  }
  public resetCapacityLimitInKb() {
    this._capacityLimitInKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityLimitInKbInput() {
    return this._capacityLimitInKb;
  }

  // device_current_path_name - computed: false, optional: true, required: false
  private _deviceCurrentPathName?: string[]; 
  public get deviceCurrentPathName() {
    return cdktf.Fn.tolist(this.getListAttribute('device_current_path_name'));
  }
  public set deviceCurrentPathName(value: string[]) {
    this._deviceCurrentPathName = value;
  }
  public resetDeviceCurrentPathName() {
    this._deviceCurrentPathName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCurrentPathNameInput() {
    return this._deviceCurrentPathName;
  }

  // device_original_path_name - computed: false, optional: true, required: false
  private _deviceOriginalPathName?: string[]; 
  public get deviceOriginalPathName() {
    return cdktf.Fn.tolist(this.getListAttribute('device_original_path_name'));
  }
  public set deviceOriginalPathName(value: string[]) {
    this._deviceOriginalPathName = value;
  }
  public resetDeviceOriginalPathName() {
    this._deviceOriginalPathName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOriginalPathNameInput() {
    return this._deviceOriginalPathName;
  }

  // device_state - computed: false, optional: true, required: false
  private _deviceState?: string[]; 
  public get deviceState() {
    return cdktf.Fn.tolist(this.getListAttribute('device_state'));
  }
  public set deviceState(value: string[]) {
    this._deviceState = value;
  }
  public resetDeviceState() {
    this._deviceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceStateInput() {
    return this._deviceState;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string[]; 
  public get deviceType() {
    return cdktf.Fn.tolist(this.getListAttribute('device_type'));
  }
  public set deviceType(value: string[]) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // error_state - computed: false, optional: true, required: false
  private _errorState?: string[]; 
  public get errorState() {
    return cdktf.Fn.tolist(this.getListAttribute('error_state'));
  }
  public set errorState(value: string[]) {
    this._errorState = value;
  }
  public resetErrorState() {
    this._errorState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStateInput() {
    return this._errorState;
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

  // fgl_nvdimm_metadata_amortization_x100 - computed: false, optional: true, required: false
  private _fglNvdimmMetadataAmortizationX100?: number[]; 
  public get fglNvdimmMetadataAmortizationX100() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_nvdimm_metadata_amortization_x100')));
  }
  public set fglNvdimmMetadataAmortizationX100(value: number[]) {
    this._fglNvdimmMetadataAmortizationX100 = value;
  }
  public resetFglNvdimmMetadataAmortizationX100() {
    this._fglNvdimmMetadataAmortizationX100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglNvdimmMetadataAmortizationX100Input() {
    return this._fglNvdimmMetadataAmortizationX100;
  }

  // fgl_nvdimm_write_cache_size - computed: false, optional: true, required: false
  private _fglNvdimmWriteCacheSize?: number[]; 
  public get fglNvdimmWriteCacheSize() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_nvdimm_write_cache_size')));
  }
  public set fglNvdimmWriteCacheSize(value: number[]) {
    this._fglNvdimmWriteCacheSize = value;
  }
  public resetFglNvdimmWriteCacheSize() {
    this._fglNvdimmWriteCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglNvdimmWriteCacheSizeInput() {
    return this._fglNvdimmWriteCacheSize;
  }

  // firmware_version - computed: false, optional: true, required: false
  private _firmwareVersion?: string[]; 
  public get firmwareVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('firmware_version'));
  }
  public set firmwareVersion(value: string[]) {
    this._firmwareVersion = value;
  }
  public resetFirmwareVersion() {
    this._firmwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareVersionInput() {
    return this._firmwareVersion;
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

  // led_setting - computed: false, optional: true, required: false
  private _ledSetting?: string[]; 
  public get ledSetting() {
    return cdktf.Fn.tolist(this.getListAttribute('led_setting'));
  }
  public set ledSetting(value: string[]) {
    this._ledSetting = value;
  }
  public resetLedSetting() {
    this._ledSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledSettingInput() {
    return this._ledSetting;
  }

  // logical_sector_size_in_bytes - computed: false, optional: true, required: false
  private _logicalSectorSizeInBytes?: number[]; 
  public get logicalSectorSizeInBytes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('logical_sector_size_in_bytes')));
  }
  public set logicalSectorSizeInBytes(value: number[]) {
    this._logicalSectorSizeInBytes = value;
  }
  public resetLogicalSectorSizeInBytes() {
    this._logicalSectorSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalSectorSizeInBytesInput() {
    return this._logicalSectorSizeInBytes;
  }

  // max_capacity_in_kb - computed: false, optional: true, required: false
  private _maxCapacityInKb?: number[]; 
  public get maxCapacityInKb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('max_capacity_in_kb')));
  }
  public set maxCapacityInKb(value: number[]) {
    this._maxCapacityInKb = value;
  }
  public resetMaxCapacityInKb() {
    this._maxCapacityInKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInKbInput() {
    return this._maxCapacityInKb;
  }

  // media_failing - computed: false, optional: true, required: false
  private _mediaFailing?: boolean | cdktf.IResolvable; 
  public get mediaFailing() {
    return this.getBooleanAttribute('media_failing');
  }
  public set mediaFailing(value: boolean | cdktf.IResolvable) {
    this._mediaFailing = value;
  }
  public resetMediaFailing() {
    this._mediaFailing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaFailingInput() {
    return this._mediaFailing;
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

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string[]; 
  public get modelName() {
    return cdktf.Fn.tolist(this.getListAttribute('model_name'));
  }
  public set modelName(value: string[]) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
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

  // physical_sector_size_in_bytes - computed: false, optional: true, required: false
  private _physicalSectorSizeInBytes?: number[]; 
  public get physicalSectorSizeInBytes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('physical_sector_size_in_bytes')));
  }
  public set physicalSectorSizeInBytes(value: number[]) {
    this._physicalSectorSizeInBytes = value;
  }
  public resetPhysicalSectorSizeInBytes() {
    this._physicalSectorSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalSectorSizeInBytesInput() {
    return this._physicalSectorSizeInBytes;
  }

  // raid_controller_serial_number - computed: false, optional: true, required: false
  private _raidControllerSerialNumber?: string[]; 
  public get raidControllerSerialNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('raid_controller_serial_number'));
  }
  public set raidControllerSerialNumber(value: string[]) {
    this._raidControllerSerialNumber = value;
  }
  public resetRaidControllerSerialNumber() {
    this._raidControllerSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidControllerSerialNumberInput() {
    return this._raidControllerSerialNumber;
  }

  // rfcache_error_device_does_not_exist - computed: false, optional: true, required: false
  private _rfcacheErrorDeviceDoesNotExist?: boolean | cdktf.IResolvable; 
  public get rfcacheErrorDeviceDoesNotExist() {
    return this.getBooleanAttribute('rfcache_error_device_does_not_exist');
  }
  public set rfcacheErrorDeviceDoesNotExist(value: boolean | cdktf.IResolvable) {
    this._rfcacheErrorDeviceDoesNotExist = value;
  }
  public resetRfcacheErrorDeviceDoesNotExist() {
    this._rfcacheErrorDeviceDoesNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheErrorDeviceDoesNotExistInput() {
    return this._rfcacheErrorDeviceDoesNotExist;
  }

  // sds_id - computed: false, optional: true, required: false
  private _sdsId?: string[]; 
  public get sdsId() {
    return cdktf.Fn.tolist(this.getListAttribute('sds_id'));
  }
  public set sdsId(value: string[]) {
    this._sdsId = value;
  }
  public resetSdsId() {
    this._sdsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsIdInput() {
    return this._sdsId;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string[]; 
  public get serialNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_number'));
  }
  public set serialNumber(value: string[]) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // slot_number - computed: false, optional: true, required: false
  private _slotNumber?: string[]; 
  public get slotNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('slot_number'));
  }
  public set slotNumber(value: string[]) {
    this._slotNumber = value;
  }
  public resetSlotNumber() {
    this._slotNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNumberInput() {
    return this._slotNumber;
  }

  // sp_sds_id - computed: false, optional: true, required: false
  private _spSdsId?: string[]; 
  public get spSdsId() {
    return cdktf.Fn.tolist(this.getListAttribute('sp_sds_id'));
  }
  public set spSdsId(value: string[]) {
    this._spSdsId = value;
  }
  public resetSpSdsId() {
    this._spSdsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSdsIdInput() {
    return this._spSdsId;
  }

  // ssd_end_of_life_state - computed: false, optional: true, required: false
  private _ssdEndOfLifeState?: string[]; 
  public get ssdEndOfLifeState() {
    return cdktf.Fn.tolist(this.getListAttribute('ssd_end_of_life_state'));
  }
  public set ssdEndOfLifeState(value: string[]) {
    this._ssdEndOfLifeState = value;
  }
  public resetSsdEndOfLifeState() {
    this._ssdEndOfLifeState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdEndOfLifeStateInput() {
    return this._ssdEndOfLifeState;
  }

  // storage_pool_id - computed: false, optional: true, required: false
  private _storagePoolId?: string[]; 
  public get storagePoolId() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_pool_id'));
  }
  public set storagePoolId(value: string[]) {
    this._storagePoolId = value;
  }
  public resetStoragePoolId() {
    this._storagePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolIdInput() {
    return this._storagePoolId;
  }

  // temperature_state - computed: false, optional: true, required: false
  private _temperatureState?: string[]; 
  public get temperatureState() {
    return cdktf.Fn.tolist(this.getListAttribute('temperature_state'));
  }
  public set temperatureState(value: string[]) {
    this._temperatureState = value;
  }
  public resetTemperatureState() {
    this._temperatureState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureStateInput() {
    return this._temperatureState;
  }

  // vendor_name - computed: false, optional: true, required: false
  private _vendorName?: string[]; 
  public get vendorName() {
    return cdktf.Fn.tolist(this.getListAttribute('vendor_name'));
  }
  public set vendorName(value: string[]) {
    this._vendorName = value;
  }
  public resetVendorName() {
    this._vendorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorNameInput() {
    return this._vendorName;
  }

  // write_cache_active - computed: false, optional: true, required: false
  private _writeCacheActive?: boolean | cdktf.IResolvable; 
  public get writeCacheActive() {
    return this.getBooleanAttribute('write_cache_active');
  }
  public set writeCacheActive(value: boolean | cdktf.IResolvable) {
    this._writeCacheActive = value;
  }
  public resetWriteCacheActive() {
    this._writeCacheActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCacheActiveInput() {
    return this._writeCacheActive;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device powerflex_device}
*/
export class DataPowerflexDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexDevice to import
  * @param importFromId The id of the existing DataPowerflexDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/device powerflex_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_device',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
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

  // device_model - computed: true, optional: false, required: false
  private _deviceModel = new DataPowerflexDeviceDeviceModelList(this, "device_model", false);
  public get deviceModel() {
    return this._deviceModel;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexDeviceFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexDeviceFilter) {
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
      filter: dataPowerflexDeviceFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexDeviceFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexDeviceFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
