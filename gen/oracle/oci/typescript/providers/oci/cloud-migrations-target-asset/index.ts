// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudMigrationsTargetAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#block_volumes_performance CloudMigrationsTargetAsset#block_volumes_performance}
  */
  readonly blockVolumesPerformance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#id CloudMigrationsTargetAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#is_excluded_from_execution CloudMigrationsTargetAsset#is_excluded_from_execution}
  */
  readonly isExcludedFromExecution: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#migration_plan_id CloudMigrationsTargetAsset#migration_plan_id}
  */
  readonly migrationPlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#ms_license CloudMigrationsTargetAsset#ms_license}
  */
  readonly msLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#preferred_shape_type CloudMigrationsTargetAsset#preferred_shape_type}
  */
  readonly preferredShapeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#type CloudMigrationsTargetAsset#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#timeouts CloudMigrationsTargetAsset#timeouts}
  */
  readonly timeouts?: CloudMigrationsTargetAssetTimeouts;
  /**
  * user_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#user_spec CloudMigrationsTargetAsset#user_spec}
  */
  readonly userSpec: CloudMigrationsTargetAssetUserSpec;
}
export interface CloudMigrationsTargetAssetCompatibilityMessages {
}

export function cloudMigrationsTargetAssetCompatibilityMessagesToTerraform(struct?: CloudMigrationsTargetAssetCompatibilityMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetCompatibilityMessagesToHclTerraform(struct?: CloudMigrationsTargetAssetCompatibilityMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetCompatibilityMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetCompatibilityMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetCompatibilityMessages | undefined) {
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

export class CloudMigrationsTargetAssetCompatibilityMessagesList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetCompatibilityMessagesOutputReference {
    return new CloudMigrationsTargetAssetCompatibilityMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetEstimatedCostCompute {
}

export function cloudMigrationsTargetAssetEstimatedCostComputeToTerraform(struct?: CloudMigrationsTargetAssetEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetEstimatedCostComputeToHclTerraform(struct?: CloudMigrationsTargetAssetEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetEstimatedCostComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetEstimatedCostCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetEstimatedCostCompute | undefined) {
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

export class CloudMigrationsTargetAssetEstimatedCostComputeList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetEstimatedCostComputeOutputReference {
    return new CloudMigrationsTargetAssetEstimatedCostComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetEstimatedCostOsImage {
}

export function cloudMigrationsTargetAssetEstimatedCostOsImageToTerraform(struct?: CloudMigrationsTargetAssetEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetEstimatedCostOsImageToHclTerraform(struct?: CloudMigrationsTargetAssetEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetEstimatedCostOsImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetEstimatedCostOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetEstimatedCostOsImage | undefined) {
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

export class CloudMigrationsTargetAssetEstimatedCostOsImageList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetEstimatedCostOsImageOutputReference {
    return new CloudMigrationsTargetAssetEstimatedCostOsImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetEstimatedCostStorageVolumes {
}

export function cloudMigrationsTargetAssetEstimatedCostStorageVolumesToTerraform(struct?: CloudMigrationsTargetAssetEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetEstimatedCostStorageVolumesToHclTerraform(struct?: CloudMigrationsTargetAssetEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetEstimatedCostStorageVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetEstimatedCostStorageVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetEstimatedCostStorageVolumes | undefined) {
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

export class CloudMigrationsTargetAssetEstimatedCostStorageVolumesList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetEstimatedCostStorageVolumesOutputReference {
    return new CloudMigrationsTargetAssetEstimatedCostStorageVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetEstimatedCostStorage {
}

export function cloudMigrationsTargetAssetEstimatedCostStorageToTerraform(struct?: CloudMigrationsTargetAssetEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetEstimatedCostStorageToHclTerraform(struct?: CloudMigrationsTargetAssetEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetEstimatedCostStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetEstimatedCostStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetEstimatedCostStorage | undefined) {
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
  private _volumes = new CloudMigrationsTargetAssetEstimatedCostStorageVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class CloudMigrationsTargetAssetEstimatedCostStorageList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetEstimatedCostStorageOutputReference {
    return new CloudMigrationsTargetAssetEstimatedCostStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetEstimatedCost {
}

export function cloudMigrationsTargetAssetEstimatedCostToTerraform(struct?: CloudMigrationsTargetAssetEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetEstimatedCostToHclTerraform(struct?: CloudMigrationsTargetAssetEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetEstimatedCostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetEstimatedCost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetEstimatedCost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  private _compute = new CloudMigrationsTargetAssetEstimatedCostComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // os_image - computed: true, optional: false, required: false
  private _osImage = new CloudMigrationsTargetAssetEstimatedCostOsImageList(this, "os_image", false);
  public get osImage() {
    return this._osImage;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new CloudMigrationsTargetAssetEstimatedCostStorageList(this, "storage", false);
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

export class CloudMigrationsTargetAssetEstimatedCostList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetEstimatedCostOutputReference {
    return new CloudMigrationsTargetAssetEstimatedCostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetMigrationAsset {
}

export function cloudMigrationsTargetAssetMigrationAssetToTerraform(struct?: CloudMigrationsTargetAssetMigrationAsset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetMigrationAssetToHclTerraform(struct?: CloudMigrationsTargetAssetMigrationAsset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetMigrationAssetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetMigrationAsset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetMigrationAsset | undefined) {
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

export class CloudMigrationsTargetAssetMigrationAssetList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetMigrationAssetOutputReference {
    return new CloudMigrationsTargetAssetMigrationAssetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfig {
}

export function cloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfigToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfigToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfig | undefined) {
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

export class CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfigOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpecAgentConfig {
}

export function cloudMigrationsTargetAssetRecommendedSpecAgentConfigToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecAgentConfigToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpecAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpecAgentConfig | undefined) {
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
  private _pluginsConfig = new CloudMigrationsTargetAssetRecommendedSpecAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
}

export class CloudMigrationsTargetAssetRecommendedSpecAgentConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecAgentConfigOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetails {
}

export function cloudMigrationsTargetAssetRecommendedSpecCreateVnicDetailsToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecCreateVnicDetailsToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetails | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
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

export class CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetailsOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpecInstanceOptions {
}

export function cloudMigrationsTargetAssetRecommendedSpecInstanceOptionsToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecInstanceOptionsToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecInstanceOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpecInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpecInstanceOptions | undefined) {
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

export class CloudMigrationsTargetAssetRecommendedSpecInstanceOptionsList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecInstanceOptionsOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecInstanceOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionAction {
}

export function cloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionAction | undefined) {
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

export class CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionActionList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionActionOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfig {
}

export function cloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemption_action - computed: true, optional: false, required: false
  private _preemptionAction = new CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigPreemptionActionList(this, "preemption_action", false);
  public get preemptionAction() {
    return this._preemptionAction;
  }
}

export class CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpecShapeConfig {
}

export function cloudMigrationsTargetAssetRecommendedSpecShapeConfigToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecShapeConfigToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpecShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpecShapeConfig | undefined) {
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

export class CloudMigrationsTargetAssetRecommendedSpecShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecShapeConfigOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpecSourceDetails {
}

export function cloudMigrationsTargetAssetRecommendedSpecSourceDetailsToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecSourceDetailsToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpecSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpecSourceDetails | undefined) {
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

export class CloudMigrationsTargetAssetRecommendedSpecSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecSourceDetailsOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetRecommendedSpec {
}

export function cloudMigrationsTargetAssetRecommendedSpecToTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetRecommendedSpecToHclTerraform(struct?: CloudMigrationsTargetAssetRecommendedSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetRecommendedSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetRecommendedSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetRecommendedSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_config - computed: true, optional: false, required: false
  private _agentConfig = new CloudMigrationsTargetAssetRecommendedSpecAgentConfigList(this, "agent_config", false);
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
  private _createVnicDetails = new CloudMigrationsTargetAssetRecommendedSpecCreateVnicDetailsList(this, "create_vnic_details", false);
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
  private _instanceOptions = new CloudMigrationsTargetAssetRecommendedSpecInstanceOptionsList(this, "instance_options", false);
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
  private _preemptibleInstanceConfig = new CloudMigrationsTargetAssetRecommendedSpecPreemptibleInstanceConfigList(this, "preemptible_instance_config", false);
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new CloudMigrationsTargetAssetRecommendedSpecShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new CloudMigrationsTargetAssetRecommendedSpecSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }
}

export class CloudMigrationsTargetAssetRecommendedSpecList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetRecommendedSpecOutputReference {
    return new CloudMigrationsTargetAssetRecommendedSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfig {
}

export function cloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfigToTerraform(struct?: CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfigToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfig | undefined) {
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

export class CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfigOutputReference {
    return new CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpecAgentConfig {
}

export function cloudMigrationsTargetAssetTestSpecAgentConfigToTerraform(struct?: CloudMigrationsTargetAssetTestSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecAgentConfigToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpecAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpecAgentConfig | undefined) {
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
  private _pluginsConfig = new CloudMigrationsTargetAssetTestSpecAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
}

export class CloudMigrationsTargetAssetTestSpecAgentConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecAgentConfigOutputReference {
    return new CloudMigrationsTargetAssetTestSpecAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpecCreateVnicDetails {
}

export function cloudMigrationsTargetAssetTestSpecCreateVnicDetailsToTerraform(struct?: CloudMigrationsTargetAssetTestSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecCreateVnicDetailsToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpecCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpecCreateVnicDetails | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
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

export class CloudMigrationsTargetAssetTestSpecCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecCreateVnicDetailsOutputReference {
    return new CloudMigrationsTargetAssetTestSpecCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpecInstanceOptions {
}

export function cloudMigrationsTargetAssetTestSpecInstanceOptionsToTerraform(struct?: CloudMigrationsTargetAssetTestSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecInstanceOptionsToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecInstanceOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpecInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpecInstanceOptions | undefined) {
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

export class CloudMigrationsTargetAssetTestSpecInstanceOptionsList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecInstanceOptionsOutputReference {
    return new CloudMigrationsTargetAssetTestSpecInstanceOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionAction {
}

export function cloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionAction | undefined) {
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

export class CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionActionList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionActionOutputReference {
    return new CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfig {
}

export function cloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigToTerraform(struct?: CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemption_action - computed: true, optional: false, required: false
  private _preemptionAction = new CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigPreemptionActionList(this, "preemption_action", false);
  public get preemptionAction() {
    return this._preemptionAction;
  }
}

export class CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigOutputReference {
    return new CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpecShapeConfig {
}

export function cloudMigrationsTargetAssetTestSpecShapeConfigToTerraform(struct?: CloudMigrationsTargetAssetTestSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecShapeConfigToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpecShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpecShapeConfig | undefined) {
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

export class CloudMigrationsTargetAssetTestSpecShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecShapeConfigOutputReference {
    return new CloudMigrationsTargetAssetTestSpecShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpecSourceDetails {
}

export function cloudMigrationsTargetAssetTestSpecSourceDetailsToTerraform(struct?: CloudMigrationsTargetAssetTestSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecSourceDetailsToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpecSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpecSourceDetails | undefined) {
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

export class CloudMigrationsTargetAssetTestSpecSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecSourceDetailsOutputReference {
    return new CloudMigrationsTargetAssetTestSpecSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTestSpec {
}

export function cloudMigrationsTargetAssetTestSpecToTerraform(struct?: CloudMigrationsTargetAssetTestSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsTargetAssetTestSpecToHclTerraform(struct?: CloudMigrationsTargetAssetTestSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsTargetAssetTestSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetTestSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetTestSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_config - computed: true, optional: false, required: false
  private _agentConfig = new CloudMigrationsTargetAssetTestSpecAgentConfigList(this, "agent_config", false);
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
  private _createVnicDetails = new CloudMigrationsTargetAssetTestSpecCreateVnicDetailsList(this, "create_vnic_details", false);
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
  private _instanceOptions = new CloudMigrationsTargetAssetTestSpecInstanceOptionsList(this, "instance_options", false);
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
  private _preemptibleInstanceConfig = new CloudMigrationsTargetAssetTestSpecPreemptibleInstanceConfigList(this, "preemptible_instance_config", false);
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new CloudMigrationsTargetAssetTestSpecShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new CloudMigrationsTargetAssetTestSpecSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }
}

export class CloudMigrationsTargetAssetTestSpecList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsTargetAssetTestSpecOutputReference {
    return new CloudMigrationsTargetAssetTestSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#create CloudMigrationsTargetAsset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#delete CloudMigrationsTargetAsset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#update CloudMigrationsTargetAsset#update}
  */
  readonly update?: string;
}

export function cloudMigrationsTargetAssetTimeoutsToTerraform(struct?: CloudMigrationsTargetAssetTimeouts | cdktf.IResolvable): any {
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


export function cloudMigrationsTargetAssetTimeoutsToHclTerraform(struct?: CloudMigrationsTargetAssetTimeouts | cdktf.IResolvable): any {
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

export class CloudMigrationsTargetAssetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudMigrationsTargetAssetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudMigrationsTargetAssetTimeouts | cdktf.IResolvable | undefined) {
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
export interface CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#desired_state CloudMigrationsTargetAsset#desired_state}
  */
  readonly desiredState: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#name CloudMigrationsTargetAsset#name}
  */
  readonly name: string;
}

export function cloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigToTerraform(struct?: CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
      this._name = value.name;
    }
  }

  // desired_state - computed: false, optional: false, required: true
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
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

export class CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigList extends cdktf.ComplexList {
  public internalValue? : CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigOutputReference {
    return new CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsTargetAssetUserSpecAgentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#are_all_plugins_disabled CloudMigrationsTargetAsset#are_all_plugins_disabled}
  */
  readonly areAllPluginsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#is_management_disabled CloudMigrationsTargetAsset#is_management_disabled}
  */
  readonly isManagementDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#is_monitoring_disabled CloudMigrationsTargetAsset#is_monitoring_disabled}
  */
  readonly isMonitoringDisabled?: boolean | cdktf.IResolvable;
  /**
  * plugins_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#plugins_config CloudMigrationsTargetAsset#plugins_config}
  */
  readonly pluginsConfig?: CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfig[] | cdktf.IResolvable;
}

export function cloudMigrationsTargetAssetUserSpecAgentConfigToTerraform(struct?: CloudMigrationsTargetAssetUserSpecAgentConfigOutputReference | CloudMigrationsTargetAssetUserSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_all_plugins_disabled: cdktf.booleanToTerraform(struct!.areAllPluginsDisabled),
    is_management_disabled: cdktf.booleanToTerraform(struct!.isManagementDisabled),
    is_monitoring_disabled: cdktf.booleanToTerraform(struct!.isMonitoringDisabled),
    plugins_config: cdktf.listMapper(cloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigToTerraform, true)(struct!.pluginsConfig),
  }
}


export function cloudMigrationsTargetAssetUserSpecAgentConfigToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecAgentConfigOutputReference | CloudMigrationsTargetAssetUserSpecAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_all_plugins_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.areAllPluginsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_management_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isManagementDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_monitoring_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMonitoringDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plugins_config: {
      value: cdktf.listMapperHcl(cloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigToHclTerraform, true)(struct!.pluginsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsTargetAssetUserSpecAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudMigrationsTargetAssetUserSpecAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areAllPluginsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areAllPluginsDisabled = this._areAllPluginsDisabled;
    }
    if (this._isManagementDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isManagementDisabled = this._isManagementDisabled;
    }
    if (this._isMonitoringDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMonitoringDisabled = this._isMonitoringDisabled;
    }
    if (this._pluginsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginsConfig = this._pluginsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpecAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areAllPluginsDisabled = undefined;
      this._isManagementDisabled = undefined;
      this._isMonitoringDisabled = undefined;
      this._pluginsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areAllPluginsDisabled = value.areAllPluginsDisabled;
      this._isManagementDisabled = value.isManagementDisabled;
      this._isMonitoringDisabled = value.isMonitoringDisabled;
      this._pluginsConfig.internalValue = value.pluginsConfig;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: true, required: false
  private _areAllPluginsDisabled?: boolean | cdktf.IResolvable; 
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }
  public set areAllPluginsDisabled(value: boolean | cdktf.IResolvable) {
    this._areAllPluginsDisabled = value;
  }
  public resetAreAllPluginsDisabled() {
    this._areAllPluginsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areAllPluginsDisabledInput() {
    return this._areAllPluginsDisabled;
  }

  // is_management_disabled - computed: true, optional: true, required: false
  private _isManagementDisabled?: boolean | cdktf.IResolvable; 
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }
  public set isManagementDisabled(value: boolean | cdktf.IResolvable) {
    this._isManagementDisabled = value;
  }
  public resetIsManagementDisabled() {
    this._isManagementDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagementDisabledInput() {
    return this._isManagementDisabled;
  }

  // is_monitoring_disabled - computed: true, optional: true, required: false
  private _isMonitoringDisabled?: boolean | cdktf.IResolvable; 
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }
  public set isMonitoringDisabled(value: boolean | cdktf.IResolvable) {
    this._isMonitoringDisabled = value;
  }
  public resetIsMonitoringDisabled() {
    this._isMonitoringDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMonitoringDisabledInput() {
    return this._isMonitoringDisabled;
  }

  // plugins_config - computed: false, optional: true, required: false
  private _pluginsConfig = new CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
  public putPluginsConfig(value: CloudMigrationsTargetAssetUserSpecAgentConfigPluginsConfig[] | cdktf.IResolvable) {
    this._pluginsConfig.internalValue = value;
  }
  public resetPluginsConfig() {
    this._pluginsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsConfigInput() {
    return this._pluginsConfig.internalValue;
  }
}
export interface CloudMigrationsTargetAssetUserSpecCreateVnicDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#assign_private_dns_record CloudMigrationsTargetAsset#assign_private_dns_record}
  */
  readonly assignPrivateDnsRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#assign_public_ip CloudMigrationsTargetAsset#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#defined_tags CloudMigrationsTargetAsset#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#display_name CloudMigrationsTargetAsset#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#freeform_tags CloudMigrationsTargetAsset#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#hostname_label CloudMigrationsTargetAsset#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#nsg_ids CloudMigrationsTargetAsset#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#private_ip CloudMigrationsTargetAsset#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#skip_source_dest_check CloudMigrationsTargetAsset#skip_source_dest_check}
  */
  readonly skipSourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#subnet_id CloudMigrationsTargetAsset#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#vlan_id CloudMigrationsTargetAsset#vlan_id}
  */
  readonly vlanId?: string;
}

export function cloudMigrationsTargetAssetUserSpecCreateVnicDetailsToTerraform(struct?: CloudMigrationsTargetAssetUserSpecCreateVnicDetailsOutputReference | CloudMigrationsTargetAssetUserSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_private_dns_record: cdktf.booleanToTerraform(struct!.assignPrivateDnsRecord),
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    hostname_label: cdktf.stringToTerraform(struct!.hostnameLabel),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    skip_source_dest_check: cdktf.booleanToTerraform(struct!.skipSourceDestCheck),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function cloudMigrationsTargetAssetUserSpecCreateVnicDetailsToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecCreateVnicDetailsOutputReference | CloudMigrationsTargetAssetUserSpecCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_private_dns_record: {
      value: cdktf.booleanToHclTerraform(struct!.assignPrivateDnsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.hostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_source_dest_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipSourceDestCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsTargetAssetUserSpecCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudMigrationsTargetAssetUserSpecCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPrivateDnsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPrivateDnsRecord = this._assignPrivateDnsRecord;
    }
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
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
    if (this._hostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLabel = this._hostnameLabel;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._skipSourceDestCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSourceDestCheck = this._skipSourceDestCheck;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpecCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPrivateDnsRecord = undefined;
      this._assignPublicIp = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._hostnameLabel = undefined;
      this._nsgIds = undefined;
      this._privateIp = undefined;
      this._skipSourceDestCheck = undefined;
      this._subnetId = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPrivateDnsRecord = value.assignPrivateDnsRecord;
      this._assignPublicIp = value.assignPublicIp;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._hostnameLabel = value.hostnameLabel;
      this._nsgIds = value.nsgIds;
      this._privateIp = value.privateIp;
      this._skipSourceDestCheck = value.skipSourceDestCheck;
      this._subnetId = value.subnetId;
      this._vlanId = value.vlanId;
    }
  }

  // assign_private_dns_record - computed: true, optional: true, required: false
  private _assignPrivateDnsRecord?: boolean | cdktf.IResolvable; 
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }
  public set assignPrivateDnsRecord(value: boolean | cdktf.IResolvable) {
    this._assignPrivateDnsRecord = value;
  }
  public resetAssignPrivateDnsRecord() {
    this._assignPrivateDnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPrivateDnsRecordInput() {
    return this._assignPrivateDnsRecord;
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
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

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
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

  // skip_source_dest_check - computed: true, optional: true, required: false
  private _skipSourceDestCheck?: boolean | cdktf.IResolvable; 
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }
  public set skipSourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._skipSourceDestCheck = value;
  }
  public resetSkipSourceDestCheck() {
    this._skipSourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSourceDestCheckInput() {
    return this._skipSourceDestCheck;
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

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface CloudMigrationsTargetAssetUserSpecInstanceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#are_legacy_imds_endpoints_disabled CloudMigrationsTargetAsset#are_legacy_imds_endpoints_disabled}
  */
  readonly areLegacyImdsEndpointsDisabled?: boolean | cdktf.IResolvable;
}

export function cloudMigrationsTargetAssetUserSpecInstanceOptionsToTerraform(struct?: CloudMigrationsTargetAssetUserSpecInstanceOptionsOutputReference | CloudMigrationsTargetAssetUserSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_legacy_imds_endpoints_disabled: cdktf.booleanToTerraform(struct!.areLegacyImdsEndpointsDisabled),
  }
}


export function cloudMigrationsTargetAssetUserSpecInstanceOptionsToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecInstanceOptionsOutputReference | CloudMigrationsTargetAssetUserSpecInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_legacy_imds_endpoints_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.areLegacyImdsEndpointsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsTargetAssetUserSpecInstanceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudMigrationsTargetAssetUserSpecInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areLegacyImdsEndpointsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areLegacyImdsEndpointsDisabled = this._areLegacyImdsEndpointsDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpecInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areLegacyImdsEndpointsDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areLegacyImdsEndpointsDisabled = value.areLegacyImdsEndpointsDisabled;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: true, required: false
  private _areLegacyImdsEndpointsDisabled?: boolean | cdktf.IResolvable; 
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
  public set areLegacyImdsEndpointsDisabled(value: boolean | cdktf.IResolvable) {
    this._areLegacyImdsEndpointsDisabled = value;
  }
  public resetAreLegacyImdsEndpointsDisabled() {
    this._areLegacyImdsEndpointsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areLegacyImdsEndpointsDisabledInput() {
    return this._areLegacyImdsEndpointsDisabled;
  }
}
export interface CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#preserve_boot_volume CloudMigrationsTargetAsset#preserve_boot_volume}
  */
  readonly preserveBootVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#type CloudMigrationsTargetAsset#type}
  */
  readonly type: string;
}

export function cloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionOutputReference | CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_boot_volume: cdktf.booleanToTerraform(struct!.preserveBootVolume),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionOutputReference | CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_boot_volume: {
      value: cdktf.booleanToHclTerraform(struct!.preserveBootVolume),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveBootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveBootVolume = this._preserveBootVolume;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preserveBootVolume = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preserveBootVolume = value.preserveBootVolume;
      this._type = value.type;
    }
  }

  // preserve_boot_volume - computed: true, optional: true, required: false
  private _preserveBootVolume?: boolean | cdktf.IResolvable; 
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }
  public set preserveBootVolume(value: boolean | cdktf.IResolvable) {
    this._preserveBootVolume = value;
  }
  public resetPreserveBootVolume() {
    this._preserveBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveBootVolumeInput() {
    return this._preserveBootVolume;
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
}
export interface CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfig {
  /**
  * preemption_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#preemption_action CloudMigrationsTargetAsset#preemption_action}
  */
  readonly preemptionAction: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionAction;
}

export function cloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigToTerraform(struct?: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigOutputReference | CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemption_action: cloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionToTerraform(struct!.preemptionAction),
  }
}


export function cloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigOutputReference | CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemption_action: {
      value: cloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct!.preemptionAction),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptionAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionAction = this._preemptionAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptionAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptionAction.internalValue = value.preemptionAction;
    }
  }

  // preemption_action - computed: false, optional: false, required: true
  private _preemptionAction = new CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionActionOutputReference(this, "preemption_action");
  public get preemptionAction() {
    return this._preemptionAction;
  }
  public putPreemptionAction(value: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigPreemptionAction) {
    this._preemptionAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionActionInput() {
    return this._preemptionAction.internalValue;
  }
}
export interface CloudMigrationsTargetAssetUserSpecShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#baseline_ocpu_utilization CloudMigrationsTargetAsset#baseline_ocpu_utilization}
  */
  readonly baselineOcpuUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#memory_in_gbs CloudMigrationsTargetAsset#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#ocpus CloudMigrationsTargetAsset#ocpus}
  */
  readonly ocpus?: number;
}

export function cloudMigrationsTargetAssetUserSpecShapeConfigToTerraform(struct?: CloudMigrationsTargetAssetUserSpecShapeConfigOutputReference | CloudMigrationsTargetAssetUserSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_ocpu_utilization: cdktf.stringToTerraform(struct!.baselineOcpuUtilization),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function cloudMigrationsTargetAssetUserSpecShapeConfigToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecShapeConfigOutputReference | CloudMigrationsTargetAssetUserSpecShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_ocpu_utilization: {
      value: cdktf.stringToHclTerraform(struct!.baselineOcpuUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsTargetAssetUserSpecShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudMigrationsTargetAssetUserSpecShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineOcpuUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineOcpuUtilization = this._baselineOcpuUtilization;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpecShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineOcpuUtilization = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineOcpuUtilization = value.baselineOcpuUtilization;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: true, required: false
  private _baselineOcpuUtilization?: string; 
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }
  public set baselineOcpuUtilization(value: string) {
    this._baselineOcpuUtilization = value;
  }
  public resetBaselineOcpuUtilization() {
    this._baselineOcpuUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineOcpuUtilizationInput() {
    return this._baselineOcpuUtilization;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface CloudMigrationsTargetAssetUserSpecSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#boot_volume_id CloudMigrationsTargetAsset#boot_volume_id}
  */
  readonly bootVolumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#boot_volume_size_in_gbs CloudMigrationsTargetAsset#boot_volume_size_in_gbs}
  */
  readonly bootVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#boot_volume_vpus_per_gb CloudMigrationsTargetAsset#boot_volume_vpus_per_gb}
  */
  readonly bootVolumeVpusPerGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#image_id CloudMigrationsTargetAsset#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#kms_key_id CloudMigrationsTargetAsset#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#source_type CloudMigrationsTargetAsset#source_type}
  */
  readonly sourceType: string;
}

export function cloudMigrationsTargetAssetUserSpecSourceDetailsToTerraform(struct?: CloudMigrationsTargetAssetUserSpecSourceDetailsOutputReference | CloudMigrationsTargetAssetUserSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_id: cdktf.stringToTerraform(struct!.bootVolumeId),
    boot_volume_size_in_gbs: cdktf.stringToTerraform(struct!.bootVolumeSizeInGbs),
    boot_volume_vpus_per_gb: cdktf.stringToTerraform(struct!.bootVolumeVpusPerGb),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function cloudMigrationsTargetAssetUserSpecSourceDetailsToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecSourceDetailsOutputReference | CloudMigrationsTargetAssetUserSpecSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_id: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_volume_vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeVpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
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
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsTargetAssetUserSpecSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudMigrationsTargetAssetUserSpecSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeId = this._bootVolumeId;
    }
    if (this._bootVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeSizeInGbs = this._bootVolumeSizeInGbs;
    }
    if (this._bootVolumeVpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeVpusPerGb = this._bootVolumeVpusPerGb;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpecSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeId = undefined;
      this._bootVolumeSizeInGbs = undefined;
      this._bootVolumeVpusPerGb = undefined;
      this._imageId = undefined;
      this._kmsKeyId = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeId = value.bootVolumeId;
      this._bootVolumeSizeInGbs = value.bootVolumeSizeInGbs;
      this._bootVolumeVpusPerGb = value.bootVolumeVpusPerGb;
      this._imageId = value.imageId;
      this._kmsKeyId = value.kmsKeyId;
      this._sourceType = value.sourceType;
    }
  }

  // boot_volume_id - computed: true, optional: true, required: false
  private _bootVolumeId?: string; 
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }
  public set bootVolumeId(value: string) {
    this._bootVolumeId = value;
  }
  public resetBootVolumeId() {
    this._bootVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeIdInput() {
    return this._bootVolumeId;
  }

  // boot_volume_size_in_gbs - computed: true, optional: true, required: false
  private _bootVolumeSizeInGbs?: string; 
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }
  public set bootVolumeSizeInGbs(value: string) {
    this._bootVolumeSizeInGbs = value;
  }
  public resetBootVolumeSizeInGbs() {
    this._bootVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeSizeInGbsInput() {
    return this._bootVolumeSizeInGbs;
  }

  // boot_volume_vpus_per_gb - computed: true, optional: true, required: false
  private _bootVolumeVpusPerGb?: string; 
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }
  public set bootVolumeVpusPerGb(value: string) {
    this._bootVolumeVpusPerGb = value;
  }
  public resetBootVolumeVpusPerGb() {
    this._bootVolumeVpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeVpusPerGbInput() {
    return this._bootVolumeVpusPerGb;
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface CloudMigrationsTargetAssetUserSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#availability_domain CloudMigrationsTargetAsset#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#capacity_reservation_id CloudMigrationsTargetAsset#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#compartment_id CloudMigrationsTargetAsset#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#dedicated_vm_host_id CloudMigrationsTargetAsset#dedicated_vm_host_id}
  */
  readonly dedicatedVmHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#defined_tags CloudMigrationsTargetAsset#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#display_name CloudMigrationsTargetAsset#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#fault_domain CloudMigrationsTargetAsset#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#freeform_tags CloudMigrationsTargetAsset#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#hostname_label CloudMigrationsTargetAsset#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#ipxe_script CloudMigrationsTargetAsset#ipxe_script}
  */
  readonly ipxeScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#is_pv_encryption_in_transit_enabled CloudMigrationsTargetAsset#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#shape CloudMigrationsTargetAsset#shape}
  */
  readonly shape?: string;
  /**
  * agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#agent_config CloudMigrationsTargetAsset#agent_config}
  */
  readonly agentConfig?: CloudMigrationsTargetAssetUserSpecAgentConfig;
  /**
  * create_vnic_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#create_vnic_details CloudMigrationsTargetAsset#create_vnic_details}
  */
  readonly createVnicDetails?: CloudMigrationsTargetAssetUserSpecCreateVnicDetails;
  /**
  * instance_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#instance_options CloudMigrationsTargetAsset#instance_options}
  */
  readonly instanceOptions?: CloudMigrationsTargetAssetUserSpecInstanceOptions;
  /**
  * preemptible_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#preemptible_instance_config CloudMigrationsTargetAsset#preemptible_instance_config}
  */
  readonly preemptibleInstanceConfig?: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfig;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#shape_config CloudMigrationsTargetAsset#shape_config}
  */
  readonly shapeConfig?: CloudMigrationsTargetAssetUserSpecShapeConfig;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#source_details CloudMigrationsTargetAsset#source_details}
  */
  readonly sourceDetails?: CloudMigrationsTargetAssetUserSpecSourceDetails;
}

export function cloudMigrationsTargetAssetUserSpecToTerraform(struct?: CloudMigrationsTargetAssetUserSpecOutputReference | CloudMigrationsTargetAssetUserSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    dedicated_vm_host_id: cdktf.stringToTerraform(struct!.dedicatedVmHostId),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    fault_domain: cdktf.stringToTerraform(struct!.faultDomain),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    hostname_label: cdktf.stringToTerraform(struct!.hostnameLabel),
    ipxe_script: cdktf.stringToTerraform(struct!.ipxeScript),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    shape: cdktf.stringToTerraform(struct!.shape),
    agent_config: cloudMigrationsTargetAssetUserSpecAgentConfigToTerraform(struct!.agentConfig),
    create_vnic_details: cloudMigrationsTargetAssetUserSpecCreateVnicDetailsToTerraform(struct!.createVnicDetails),
    instance_options: cloudMigrationsTargetAssetUserSpecInstanceOptionsToTerraform(struct!.instanceOptions),
    preemptible_instance_config: cloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigToTerraform(struct!.preemptibleInstanceConfig),
    shape_config: cloudMigrationsTargetAssetUserSpecShapeConfigToTerraform(struct!.shapeConfig),
    source_details: cloudMigrationsTargetAssetUserSpecSourceDetailsToTerraform(struct!.sourceDetails),
  }
}


export function cloudMigrationsTargetAssetUserSpecToHclTerraform(struct?: CloudMigrationsTargetAssetUserSpecOutputReference | CloudMigrationsTargetAssetUserSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dedicated_vm_host_id: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedVmHostId),
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
    fault_domain: {
      value: cdktf.stringToHclTerraform(struct!.faultDomain),
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
    hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.hostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipxe_script: {
      value: cdktf.stringToHclTerraform(struct!.ipxeScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_config: {
      value: cloudMigrationsTargetAssetUserSpecAgentConfigToHclTerraform(struct!.agentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMigrationsTargetAssetUserSpecAgentConfigList",
    },
    create_vnic_details: {
      value: cloudMigrationsTargetAssetUserSpecCreateVnicDetailsToHclTerraform(struct!.createVnicDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMigrationsTargetAssetUserSpecCreateVnicDetailsList",
    },
    instance_options: {
      value: cloudMigrationsTargetAssetUserSpecInstanceOptionsToHclTerraform(struct!.instanceOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMigrationsTargetAssetUserSpecInstanceOptionsList",
    },
    preemptible_instance_config: {
      value: cloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigToHclTerraform(struct!.preemptibleInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigList",
    },
    shape_config: {
      value: cloudMigrationsTargetAssetUserSpecShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMigrationsTargetAssetUserSpecShapeConfigList",
    },
    source_details: {
      value: cloudMigrationsTargetAssetUserSpecSourceDetailsToHclTerraform(struct!.sourceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CloudMigrationsTargetAssetUserSpecSourceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsTargetAssetUserSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudMigrationsTargetAssetUserSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._dedicatedVmHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedVmHostId = this._dedicatedVmHostId;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._faultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomain = this._faultDomain;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._hostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLabel = this._hostnameLabel;
    }
    if (this._ipxeScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxeScript = this._ipxeScript;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._agentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConfig = this._agentConfig?.internalValue;
    }
    if (this._createVnicDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createVnicDetails = this._createVnicDetails?.internalValue;
    }
    if (this._instanceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceOptions = this._instanceOptions?.internalValue;
    }
    if (this._preemptibleInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptibleInstanceConfig = this._preemptibleInstanceConfig?.internalValue;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    if (this._sourceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDetails = this._sourceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsTargetAssetUserSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._capacityReservationId = undefined;
      this._compartmentId = undefined;
      this._dedicatedVmHostId = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._faultDomain = undefined;
      this._freeformTags = undefined;
      this._hostnameLabel = undefined;
      this._ipxeScript = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._shape = undefined;
      this._agentConfig.internalValue = undefined;
      this._createVnicDetails.internalValue = undefined;
      this._instanceOptions.internalValue = undefined;
      this._preemptibleInstanceConfig.internalValue = undefined;
      this._shapeConfig.internalValue = undefined;
      this._sourceDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._capacityReservationId = value.capacityReservationId;
      this._compartmentId = value.compartmentId;
      this._dedicatedVmHostId = value.dedicatedVmHostId;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._faultDomain = value.faultDomain;
      this._freeformTags = value.freeformTags;
      this._hostnameLabel = value.hostnameLabel;
      this._ipxeScript = value.ipxeScript;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._shape = value.shape;
      this._agentConfig.internalValue = value.agentConfig;
      this._createVnicDetails.internalValue = value.createVnicDetails;
      this._instanceOptions.internalValue = value.instanceOptions;
      this._preemptibleInstanceConfig.internalValue = value.preemptibleInstanceConfig;
      this._shapeConfig.internalValue = value.shapeConfig;
      this._sourceDetails.internalValue = value.sourceDetails;
    }
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // capacity_reservation_id - computed: true, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
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

  // dedicated_vm_host_id - computed: true, optional: true, required: false
  private _dedicatedVmHostId?: string; 
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }
  public set dedicatedVmHostId(value: string) {
    this._dedicatedVmHostId = value;
  }
  public resetDedicatedVmHostId() {
    this._dedicatedVmHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostIdInput() {
    return this._dedicatedVmHostId;
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

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
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

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
  }

  // ipxe_script - computed: true, optional: true, required: false
  private _ipxeScript?: string; 
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }
  public set ipxeScript(value: string) {
    this._ipxeScript = value;
  }
  public resetIpxeScript() {
    this._ipxeScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeScriptInput() {
    return this._ipxeScript;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // agent_config - computed: false, optional: true, required: false
  private _agentConfig = new CloudMigrationsTargetAssetUserSpecAgentConfigOutputReference(this, "agent_config");
  public get agentConfig() {
    return this._agentConfig;
  }
  public putAgentConfig(value: CloudMigrationsTargetAssetUserSpecAgentConfig) {
    this._agentConfig.internalValue = value;
  }
  public resetAgentConfig() {
    this._agentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigInput() {
    return this._agentConfig.internalValue;
  }

  // create_vnic_details - computed: false, optional: true, required: false
  private _createVnicDetails = new CloudMigrationsTargetAssetUserSpecCreateVnicDetailsOutputReference(this, "create_vnic_details");
  public get createVnicDetails() {
    return this._createVnicDetails;
  }
  public putCreateVnicDetails(value: CloudMigrationsTargetAssetUserSpecCreateVnicDetails) {
    this._createVnicDetails.internalValue = value;
  }
  public resetCreateVnicDetails() {
    this._createVnicDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVnicDetailsInput() {
    return this._createVnicDetails.internalValue;
  }

  // instance_options - computed: false, optional: true, required: false
  private _instanceOptions = new CloudMigrationsTargetAssetUserSpecInstanceOptionsOutputReference(this, "instance_options");
  public get instanceOptions() {
    return this._instanceOptions;
  }
  public putInstanceOptions(value: CloudMigrationsTargetAssetUserSpecInstanceOptions) {
    this._instanceOptions.internalValue = value;
  }
  public resetInstanceOptions() {
    this._instanceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOptionsInput() {
    return this._instanceOptions.internalValue;
  }

  // preemptible_instance_config - computed: false, optional: true, required: false
  private _preemptibleInstanceConfig = new CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfigOutputReference(this, "preemptible_instance_config");
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }
  public putPreemptibleInstanceConfig(value: CloudMigrationsTargetAssetUserSpecPreemptibleInstanceConfig) {
    this._preemptibleInstanceConfig.internalValue = value;
  }
  public resetPreemptibleInstanceConfig() {
    this._preemptibleInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInstanceConfigInput() {
    return this._preemptibleInstanceConfig.internalValue;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new CloudMigrationsTargetAssetUserSpecShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: CloudMigrationsTargetAssetUserSpecShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new CloudMigrationsTargetAssetUserSpecSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CloudMigrationsTargetAssetUserSpecSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset oci_cloud_migrations_target_asset}
*/
export class CloudMigrationsTargetAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_target_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudMigrationsTargetAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudMigrationsTargetAsset to import
  * @param importFromId The id of the existing CloudMigrationsTargetAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudMigrationsTargetAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_migrations_target_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_migrations_target_asset oci_cloud_migrations_target_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudMigrationsTargetAssetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudMigrationsTargetAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_target_asset',
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
    this._blockVolumesPerformance = config.blockVolumesPerformance;
    this._id = config.id;
    this._isExcludedFromExecution = config.isExcludedFromExecution;
    this._migrationPlanId = config.migrationPlanId;
    this._msLicense = config.msLicense;
    this._preferredShapeType = config.preferredShapeType;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
    this._userSpec.internalValue = config.userSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_volumes_performance - computed: true, optional: true, required: false
  private _blockVolumesPerformance?: number; 
  public get blockVolumesPerformance() {
    return this.getNumberAttribute('block_volumes_performance');
  }
  public set blockVolumesPerformance(value: number) {
    this._blockVolumesPerformance = value;
  }
  public resetBlockVolumesPerformance() {
    this._blockVolumesPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumesPerformanceInput() {
    return this._blockVolumesPerformance;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compatibility_messages - computed: true, optional: false, required: false
  private _compatibilityMessages = new CloudMigrationsTargetAssetCompatibilityMessagesList(this, "compatibility_messages", false);
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
  private _estimatedCost = new CloudMigrationsTargetAssetEstimatedCostList(this, "estimated_cost", false);
  public get estimatedCost() {
    return this._estimatedCost;
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

  // is_excluded_from_execution - computed: false, optional: false, required: true
  private _isExcludedFromExecution?: boolean | cdktf.IResolvable; 
  public get isExcludedFromExecution() {
    return this.getBooleanAttribute('is_excluded_from_execution');
  }
  public set isExcludedFromExecution(value: boolean | cdktf.IResolvable) {
    this._isExcludedFromExecution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isExcludedFromExecutionInput() {
    return this._isExcludedFromExecution;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migration_asset - computed: true, optional: false, required: false
  private _migrationAsset = new CloudMigrationsTargetAssetMigrationAssetList(this, "migration_asset", false);
  public get migrationAsset() {
    return this._migrationAsset;
  }

  // migration_plan_id - computed: false, optional: false, required: true
  private _migrationPlanId?: string; 
  public get migrationPlanId() {
    return this.getStringAttribute('migration_plan_id');
  }
  public set migrationPlanId(value: string) {
    this._migrationPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationPlanIdInput() {
    return this._migrationPlanId;
  }

  // ms_license - computed: true, optional: true, required: false
  private _msLicense?: string; 
  public get msLicense() {
    return this.getStringAttribute('ms_license');
  }
  public set msLicense(value: string) {
    this._msLicense = value;
  }
  public resetMsLicense() {
    this._msLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msLicenseInput() {
    return this._msLicense;
  }

  // preferred_shape_type - computed: false, optional: false, required: true
  private _preferredShapeType?: string; 
  public get preferredShapeType() {
    return this.getStringAttribute('preferred_shape_type');
  }
  public set preferredShapeType(value: string) {
    this._preferredShapeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredShapeTypeInput() {
    return this._preferredShapeType;
  }

  // recommended_spec - computed: true, optional: false, required: false
  private _recommendedSpec = new CloudMigrationsTargetAssetRecommendedSpecList(this, "recommended_spec", false);
  public get recommendedSpec() {
    return this._recommendedSpec;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // test_spec - computed: true, optional: false, required: false
  private _testSpec = new CloudMigrationsTargetAssetTestSpecList(this, "test_spec", false);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudMigrationsTargetAssetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudMigrationsTargetAssetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_spec - computed: false, optional: false, required: true
  private _userSpec = new CloudMigrationsTargetAssetUserSpecOutputReference(this, "user_spec");
  public get userSpec() {
    return this._userSpec;
  }
  public putUserSpec(value: CloudMigrationsTargetAssetUserSpec) {
    this._userSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSpecInput() {
    return this._userSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_volumes_performance: cdktf.numberToTerraform(this._blockVolumesPerformance),
      id: cdktf.stringToTerraform(this._id),
      is_excluded_from_execution: cdktf.booleanToTerraform(this._isExcludedFromExecution),
      migration_plan_id: cdktf.stringToTerraform(this._migrationPlanId),
      ms_license: cdktf.stringToTerraform(this._msLicense),
      preferred_shape_type: cdktf.stringToTerraform(this._preferredShapeType),
      type: cdktf.stringToTerraform(this._type),
      timeouts: cloudMigrationsTargetAssetTimeoutsToTerraform(this._timeouts.internalValue),
      user_spec: cloudMigrationsTargetAssetUserSpecToTerraform(this._userSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_volumes_performance: {
        value: cdktf.numberToHclTerraform(this._blockVolumesPerformance),
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
      is_excluded_from_execution: {
        value: cdktf.booleanToHclTerraform(this._isExcludedFromExecution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      migration_plan_id: {
        value: cdktf.stringToHclTerraform(this._migrationPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ms_license: {
        value: cdktf.stringToHclTerraform(this._msLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_shape_type: {
        value: cdktf.stringToHclTerraform(this._preferredShapeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudMigrationsTargetAssetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudMigrationsTargetAssetTimeouts",
      },
      user_spec: {
        value: cloudMigrationsTargetAssetUserSpecToHclTerraform(this._userSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudMigrationsTargetAssetUserSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
