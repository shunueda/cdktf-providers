// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudMigrationsTargetAssetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#display_name DataOciCloudMigrationsTargetAssets#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#id DataOciCloudMigrationsTargetAssets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#migration_plan_id DataOciCloudMigrationsTargetAssets#migration_plan_id}
  */
  readonly migrationPlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#state DataOciCloudMigrationsTargetAssets#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#target_asset_id DataOciCloudMigrationsTargetAssets#target_asset_id}
  */
  readonly targetAssetId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#filter DataOciCloudMigrationsTargetAssets#filter}
  */
  readonly filter?: DataOciCloudMigrationsTargetAssetsFilter[] | cdktf.IResolvable;
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessages {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessagesToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessagesToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessagesOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostCompute {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostComputeToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostComputeToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gpu_count - computed: true, optional: false, required: false
  public get gpuCount() {
    return this.getNumberAttribute('gpu_count');
  }

  // gpu_per_hour - computed: true, optional: false, required: false
  public get gpuPerHour() {
    return this.getNumberAttribute('gpu_per_hour');
  }

  // gpu_per_hour_by_subscription - computed: true, optional: false, required: false
  public get gpuPerHourBySubscription() {
    return this.getNumberAttribute('gpu_per_hour_by_subscription');
  }

  // memory_amount_gb - computed: true, optional: false, required: false
  public get memoryAmountGb() {
    return this.getNumberAttribute('memory_amount_gb');
  }

  // memory_gb_per_hour - computed: true, optional: false, required: false
  public get memoryGbPerHour() {
    return this.getNumberAttribute('memory_gb_per_hour');
  }

  // memory_gb_per_hour_by_subscription - computed: true, optional: false, required: false
  public get memoryGbPerHourBySubscription() {
    return this.getNumberAttribute('memory_gb_per_hour_by_subscription');
  }

  // ocpu_count - computed: true, optional: false, required: false
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }

  // ocpu_per_hour - computed: true, optional: false, required: false
  public get ocpuPerHour() {
    return this.getNumberAttribute('ocpu_per_hour');
  }

  // ocpu_per_hour_by_subscription - computed: true, optional: false, required: false
  public get ocpuPerHourBySubscription() {
    return this.getNumberAttribute('ocpu_per_hour_by_subscription');
  }

  // total_per_hour - computed: true, optional: false, required: false
  public get totalPerHour() {
    return this.getNumberAttribute('total_per_hour');
  }

  // total_per_hour_by_subscription - computed: true, optional: false, required: false
  public get totalPerHourBySubscription() {
    return this.getNumberAttribute('total_per_hour_by_subscription');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostComputeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostComputeOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImage {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImageToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImageToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total_per_hour - computed: true, optional: false, required: false
  public get totalPerHour() {
    return this.getNumberAttribute('total_per_hour');
  }

  // total_per_hour_by_subscription - computed: true, optional: false, required: false
  public get totalPerHourBySubscription() {
    return this.getNumberAttribute('total_per_hour_by_subscription');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImageOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumes {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumesToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumesToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_gb - computed: true, optional: false, required: false
  public get capacityGb() {
    return this.getNumberAttribute('capacity_gb');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // total_gb_per_month - computed: true, optional: false, required: false
  public get totalGbPerMonth() {
    return this.getNumberAttribute('total_gb_per_month');
  }

  // total_gb_per_month_by_subscription - computed: true, optional: false, required: false
  public get totalGbPerMonthBySubscription() {
    return this.getNumberAttribute('total_gb_per_month_by_subscription');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumesOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorage {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total_gb_per_month - computed: true, optional: false, required: false
  public get totalGbPerMonth() {
    return this.getNumberAttribute('total_gb_per_month');
  }

  // total_gb_per_month_by_subscription - computed: true, optional: false, required: false
  public get totalGbPerMonthBySubscription() {
    return this.getNumberAttribute('total_gb_per_month_by_subscription');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCost {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  private _compute = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // os_image - computed: true, optional: false, required: false
  private _osImage = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOsImageList(this, "os_image", false);
  public get osImage() {
    return this._osImage;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // total_estimation_per_month - computed: true, optional: false, required: false
  public get totalEstimationPerMonth() {
    return this.getNumberAttribute('total_estimation_per_month');
  }

  // total_estimation_per_month_by_subscription - computed: true, optional: false, required: false
  public get totalEstimationPerMonthBySubscription() {
    return this.getNumberAttribute('total_estimation_per_month_by_subscription');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAsset {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAssetToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAsset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAssetToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAsset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAssetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAsset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAsset | undefined) {
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

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // depended_on_by - computed: true, optional: false, required: false
  public get dependedOnBy() {
    return this.getListAttribute('depended_on_by');
  }

  // depends_on - computed: true, optional: false, required: false
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migration_id - computed: true, optional: false, required: false
  public get migrationId() {
    return this.getStringAttribute('migration_id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getListAttribute('notifications');
  }

  // parent_snapshot - computed: true, optional: false, required: false
  public get parentSnapshot() {
    return this.getStringAttribute('parent_snapshot');
  }

  // replication_compartment_id - computed: true, optional: false, required: false
  public get replicationCompartmentId() {
    return this.getStringAttribute('replication_compartment_id');
  }

  // replication_schedule_id - computed: true, optional: false, required: false
  public get replicationScheduleId() {
    return this.getStringAttribute('replication_schedule_id');
  }

  // snap_shot_bucket_name - computed: true, optional: false, required: false
  public get snapShotBucketName() {
    return this.getStringAttribute('snap_shot_bucket_name');
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new cdktf.StringMap(this, "snapshots");
  public get snapshots() {
    return this._snapshots;
  }

  // source_asset_data - computed: true, optional: false, required: false
  private _sourceAssetData = new cdktf.StringMap(this, "source_asset_data");
  public get sourceAssetData() {
    return this._sourceAssetData;
  }

  // source_asset_id - computed: true, optional: false, required: false
  public get sourceAssetId() {
    return this.getStringAttribute('source_asset_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAssetList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAssetOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAssetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: false, required: false
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }

  // is_management_disabled - computed: true, optional: false, required: false
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }

  // is_monitoring_disabled - computed: true, optional: false, required: false
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }

  // plugins_config - computed: true, optional: false, required: false
  private _pluginsConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetails {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetailsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetailsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_private_dns_record - computed: true, optional: false, required: false
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // skip_source_dest_check - computed: true, optional: false, required: false
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetailsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptions {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptionsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptionsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: false, required: false
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptionsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionAction {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preserve_boot_volume - computed: true, optional: false, required: false
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionActionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionActionOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemption_action - computed: true, optional: false, required: false
  private _preemptionAction = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigPreemptionActionList(this, "preemption_action", false);
  public get preemptionAction() {
    return this._preemptionAction;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: false, required: false
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetails {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetailsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetailsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_volume_id - computed: true, optional: false, required: false
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // boot_volume_size_in_gbs - computed: true, optional: false, required: false
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }

  // boot_volume_vpus_per_gb - computed: true, optional: false, required: false
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetailsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpec {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_config - computed: true, optional: false, required: false
  private _agentConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecAgentConfigList(this, "agent_config", false);
  public get agentConfig() {
    return this._agentConfig;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_vnic_details - computed: true, optional: false, required: false
  private _createVnicDetails = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecCreateVnicDetailsList(this, "create_vnic_details", false);
  public get createVnicDetails() {
    return this._createVnicDetails;
  }

  // dedicated_vm_host_id - computed: true, optional: false, required: false
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
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

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // instance_options - computed: true, optional: false, required: false
  private _instanceOptions = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecInstanceOptionsList(this, "instance_options", false);
  public get instanceOptions() {
    return this._instanceOptions;
  }

  // ipxe_script - computed: true, optional: false, required: false
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // preemptible_instance_config - computed: true, optional: false, required: false
  private _preemptibleInstanceConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecPreemptibleInstanceConfigList(this, "preemptible_instance_config", false);
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: false, required: false
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }

  // is_management_disabled - computed: true, optional: false, required: false
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }

  // is_monitoring_disabled - computed: true, optional: false, required: false
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }

  // plugins_config - computed: true, optional: false, required: false
  private _pluginsConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetails {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetailsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetailsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_private_dns_record - computed: true, optional: false, required: false
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // skip_source_dest_check - computed: true, optional: false, required: false
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetailsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptions {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptionsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptionsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: false, required: false
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptionsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionAction {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preserve_boot_volume - computed: true, optional: false, required: false
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionActionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionActionOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemption_action - computed: true, optional: false, required: false
  private _preemptionAction = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigPreemptionActionList(this, "preemption_action", false);
  public get preemptionAction() {
    return this._preemptionAction;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: false, required: false
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetails {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetailsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetailsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_volume_id - computed: true, optional: false, required: false
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // boot_volume_size_in_gbs - computed: true, optional: false, required: false
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }

  // boot_volume_vpus_per_gb - computed: true, optional: false, required: false
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetailsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpec {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_config - computed: true, optional: false, required: false
  private _agentConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecAgentConfigList(this, "agent_config", false);
  public get agentConfig() {
    return this._agentConfig;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_vnic_details - computed: true, optional: false, required: false
  private _createVnicDetails = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecCreateVnicDetailsList(this, "create_vnic_details", false);
  public get createVnicDetails() {
    return this._createVnicDetails;
  }

  // dedicated_vm_host_id - computed: true, optional: false, required: false
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
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

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // instance_options - computed: true, optional: false, required: false
  private _instanceOptions = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecInstanceOptionsList(this, "instance_options", false);
  public get instanceOptions() {
    return this._instanceOptions;
  }

  // ipxe_script - computed: true, optional: false, required: false
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // preemptible_instance_config - computed: true, optional: false, required: false
  private _preemptibleInstanceConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecPreemptibleInstanceConfigList(this, "preemptible_instance_config", false);
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: false, required: false
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }

  // is_management_disabled - computed: true, optional: false, required: false
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }

  // is_monitoring_disabled - computed: true, optional: false, required: false
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }

  // plugins_config - computed: true, optional: false, required: false
  private _pluginsConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetails {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetailsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetailsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_private_dns_record - computed: true, optional: false, required: false
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // skip_source_dest_check - computed: true, optional: false, required: false
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetailsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptions {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptionsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptionsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: false, required: false
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptionsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionAction {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preserve_boot_volume - computed: true, optional: false, required: false
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionActionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionActionOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemption_action - computed: true, optional: false, required: false
  private _preemptionAction = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigPreemptionActionList(this, "preemption_action", false);
  public get preemptionAction() {
    return this._preemptionAction;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfig {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfigToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfigToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: false, required: false
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfigOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetails {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetailsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetailsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_volume_id - computed: true, optional: false, required: false
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // boot_volume_size_in_gbs - computed: true, optional: false, required: false
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }

  // boot_volume_vpus_per_gb - computed: true, optional: false, required: false
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetailsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpec {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_config - computed: true, optional: false, required: false
  private _agentConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecAgentConfigList(this, "agent_config", false);
  public get agentConfig() {
    return this._agentConfig;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_vnic_details - computed: true, optional: false, required: false
  private _createVnicDetails = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecCreateVnicDetailsList(this, "create_vnic_details", false);
  public get createVnicDetails() {
    return this._createVnicDetails;
  }

  // dedicated_vm_host_id - computed: true, optional: false, required: false
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
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

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // instance_options - computed: true, optional: false, required: false
  private _instanceOptions = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecInstanceOptionsList(this, "instance_options", false);
  public get instanceOptions() {
    return this._instanceOptions;
  }

  // ipxe_script - computed: true, optional: false, required: false
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // preemptible_instance_config - computed: true, optional: false, required: false
  private _preemptibleInstanceConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecPreemptibleInstanceConfigList(this, "preemptible_instance_config", false);
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItems {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volumes_performance - computed: true, optional: false, required: false
  public get blockVolumesPerformance() {
    return this.getNumberAttribute('block_volumes_performance');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compatibility_messages - computed: true, optional: false, required: false
  private _compatibilityMessages = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsCompatibilityMessagesList(this, "compatibility_messages", false);
  public get compatibilityMessages() {
    return this._compatibilityMessages;
  }

  // created_resource_id - computed: true, optional: false, required: false
  public get createdResourceId() {
    return this.getStringAttribute('created_resource_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_cost - computed: true, optional: false, required: false
  private _estimatedCost = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsEstimatedCostList(this, "estimated_cost", false);
  public get estimatedCost() {
    return this._estimatedCost;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_excluded_from_execution - computed: true, optional: false, required: false
  public get isExcludedFromExecution() {
    return this.getBooleanAttribute('is_excluded_from_execution');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migration_asset - computed: true, optional: false, required: false
  private _migrationAsset = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsMigrationAssetList(this, "migration_asset", false);
  public get migrationAsset() {
    return this._migrationAsset;
  }

  // migration_plan_id - computed: true, optional: false, required: false
  public get migrationPlanId() {
    return this.getStringAttribute('migration_plan_id');
  }

  // ms_license - computed: true, optional: false, required: false
  public get msLicense() {
    return this.getStringAttribute('ms_license');
  }

  // preferred_shape_type - computed: true, optional: false, required: false
  public get preferredShapeType() {
    return this.getStringAttribute('preferred_shape_type');
  }

  // recommended_spec - computed: true, optional: false, required: false
  private _recommendedSpec = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsRecommendedSpecList(this, "recommended_spec", false);
  public get recommendedSpec() {
    return this._recommendedSpec;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // test_spec - computed: true, optional: false, required: false
  private _testSpec = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsTestSpecList(this, "test_spec", false);
  public get testSpec() {
    return this._testSpec;
  }

  // time_assessed - computed: true, optional: false, required: false
  public get timeAssessed() {
    return this.getStringAttribute('time_assessed');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_spec - computed: true, optional: false, required: false
  private _userSpec = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsUserSpecList(this, "user_spec", false);
  public get userSpec() {
    return this._userSpec;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsTargetAssetCollection {
}

export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionToTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsTargetAssetsTargetAssetCollectionToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsTargetAssetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsTargetAssetCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsTargetAssetCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCloudMigrationsTargetAssetsTargetAssetCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsTargetAssetCollectionOutputReference {
    return new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsTargetAssetsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#name DataOciCloudMigrationsTargetAssets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#regex DataOciCloudMigrationsTargetAssets#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#values DataOciCloudMigrationsTargetAssets#values}
  */
  readonly values: string[];
}

export function dataOciCloudMigrationsTargetAssetsFilterToTerraform(struct?: DataOciCloudMigrationsTargetAssetsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciCloudMigrationsTargetAssetsFilterToHclTerraform(struct?: DataOciCloudMigrationsTargetAssetsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciCloudMigrationsTargetAssetsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsTargetAssetsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsTargetAssetsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciCloudMigrationsTargetAssetsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCloudMigrationsTargetAssetsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCloudMigrationsTargetAssetsFilterOutputReference {
    return new DataOciCloudMigrationsTargetAssetsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets oci_cloud_migrations_target_assets}
*/
export class DataOciCloudMigrationsTargetAssets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_target_assets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudMigrationsTargetAssets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudMigrationsTargetAssets to import
  * @param importFromId The id of the existing DataOciCloudMigrationsTargetAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudMigrationsTargetAssets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_migrations_target_assets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_target_assets oci_cloud_migrations_target_assets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudMigrationsTargetAssetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudMigrationsTargetAssetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_target_assets',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._migrationPlanId = config.migrationPlanId;
    this._state = config.state;
    this._targetAssetId = config.targetAssetId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
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

  // migration_plan_id - computed: false, optional: true, required: false
  private _migrationPlanId?: string; 
  public get migrationPlanId() {
    return this.getStringAttribute('migration_plan_id');
  }
  public set migrationPlanId(value: string) {
    this._migrationPlanId = value;
  }
  public resetMigrationPlanId() {
    this._migrationPlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationPlanIdInput() {
    return this._migrationPlanId;
  }

  // state - computed: false, optional: true, required: false
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

  // target_asset_collection - computed: true, optional: false, required: false
  private _targetAssetCollection = new DataOciCloudMigrationsTargetAssetsTargetAssetCollectionList(this, "target_asset_collection", false);
  public get targetAssetCollection() {
    return this._targetAssetCollection;
  }

  // target_asset_id - computed: false, optional: true, required: false
  private _targetAssetId?: string; 
  public get targetAssetId() {
    return this.getStringAttribute('target_asset_id');
  }
  public set targetAssetId(value: string) {
    this._targetAssetId = value;
  }
  public resetTargetAssetId() {
    this._targetAssetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAssetIdInput() {
    return this._targetAssetId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCloudMigrationsTargetAssetsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCloudMigrationsTargetAssetsFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      migration_plan_id: cdktf.stringToTerraform(this._migrationPlanId),
      state: cdktf.stringToTerraform(this._state),
      target_asset_id: cdktf.stringToTerraform(this._targetAssetId),
      filter: cdktf.listMapper(dataOciCloudMigrationsTargetAssetsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      migration_plan_id: {
        value: cdktf.stringToHclTerraform(this._migrationPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_asset_id: {
        value: cdktf.stringToHclTerraform(this._targetAssetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCloudMigrationsTargetAssetsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCloudMigrationsTargetAssetsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
