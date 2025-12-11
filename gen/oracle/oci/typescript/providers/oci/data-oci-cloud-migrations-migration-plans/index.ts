// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudMigrationsMigrationPlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#compartment_id DataOciCloudMigrationsMigrationPlans#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#display_name DataOciCloudMigrationsMigrationPlans#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#id DataOciCloudMigrationsMigrationPlans#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#migration_id DataOciCloudMigrationsMigrationPlans#migration_id}
  */
  readonly migrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#migration_plan_id DataOciCloudMigrationsMigrationPlans#migration_plan_id}
  */
  readonly migrationPlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#state DataOciCloudMigrationsMigrationPlans#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#filter DataOciCloudMigrationsMigrationPlans#filter}
  */
  readonly filter?: DataOciCloudMigrationsMigrationPlansFilter[] | cdktf.IResolvable;
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostCompute | undefined) {
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

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImage | undefined) {
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

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumes | undefined) {
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

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorage | undefined) {
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
  private _volumes = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  private _compute = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // os_image - computed: true, optional: false, required: false
  private _osImage = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOsImageList(this, "os_image", false);
  public get osImage() {
    return this._osImage;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostStorageList(this, "storage", false);
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

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_estimated_cost - computed: true, optional: false, required: false
  private _totalEstimatedCost = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsTotalEstimatedCostList(this, "total_estimated_cost", false);
  public get totalEstimatedCost() {
    return this._totalEstimatedCost;
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adjustment_multiplier - computed: true, optional: false, required: false
  public get adjustmentMultiplier() {
    return this.getNumberAttribute('adjustment_multiplier');
  }

  // metric_time_window - computed: true, optional: false, required: false
  public get metricTimeWindow() {
    return this.getStringAttribute('metric_time_window');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // percentile - computed: true, optional: false, required: false
  public get percentile() {
    return this.getStringAttribute('percentile');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // strategy_type - computed: true, optional: false, required: false
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironments | undefined) {
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

  // dedicated_vm_host - computed: true, optional: false, required: false
  public get dedicatedVmHost() {
    return this.getStringAttribute('dedicated_vm_host');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // ms_license - computed: true, optional: false, required: false
  public get msLicense() {
    return this.getStringAttribute('ms_license');
  }

  // preferred_shape_type - computed: true, optional: false, required: false
  public get preferredShapeType() {
    return this.getStringAttribute('preferred_shape_type');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // target_compartment_id - computed: true, optional: false, required: false
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }

  // target_environment_type - computed: true, optional: false, required: false
  public get targetEnvironmentType() {
    return this.getStringAttribute('target_environment_type');
  }

  // vcn - computed: true, optional: false, required: false
  public get vcn() {
    return this.getStringAttribute('vcn');
  }
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calculated_limits - computed: true, optional: false, required: false
  private _calculatedLimits = new cdktf.StringMap(this, "calculated_limits");
  public get calculatedLimits() {
    return this._calculatedLimits;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // migration_plan_stats - computed: true, optional: false, required: false
  private _migrationPlanStats = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsMigrationPlanStatsList(this, "migration_plan_stats", false);
  public get migrationPlanStats() {
    return this._migrationPlanStats;
  }

  // reference_to_rms_stack - computed: true, optional: false, required: false
  public get referenceToRmsStack() {
    return this.getStringAttribute('reference_to_rms_stack');
  }

  // source_migration_plan_id - computed: true, optional: false, required: false
  public get sourceMigrationPlanId() {
    return this.getStringAttribute('source_migration_plan_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // strategies - computed: true, optional: false, required: false
  private _strategies = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsStrategiesList(this, "strategies", false);
  public get strategies() {
    return this._strategies;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_environments - computed: true, optional: false, required: false
  private _targetEnvironments = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsTargetEnvironmentsList(this, "target_environments", false);
  public get targetEnvironments() {
    return this._targetEnvironments;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansMigrationPlanCollection {
}

export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionToTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlansMigrationPlanCollectionToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansMigrationPlanCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansMigrationPlanCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansMigrationPlanCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference {
    return new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlansFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#name DataOciCloudMigrationsMigrationPlans#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#regex DataOciCloudMigrationsMigrationPlans#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#values DataOciCloudMigrationsMigrationPlans#values}
  */
  readonly values: string[];
}

export function dataOciCloudMigrationsMigrationPlansFilterToTerraform(struct?: DataOciCloudMigrationsMigrationPlansFilter | cdktf.IResolvable): any {
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


export function dataOciCloudMigrationsMigrationPlansFilterToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlansFilter | cdktf.IResolvable): any {
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

export class DataOciCloudMigrationsMigrationPlansFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlansFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCloudMigrationsMigrationPlansFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCloudMigrationsMigrationPlansFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCloudMigrationsMigrationPlansFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCloudMigrationsMigrationPlansFilterOutputReference {
    return new DataOciCloudMigrationsMigrationPlansFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans oci_cloud_migrations_migration_plans}
*/
export class DataOciCloudMigrationsMigrationPlans extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_migration_plans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlans to import
  * @param importFromId The id of the existing DataOciCloudMigrationsMigrationPlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_migrations_migration_plans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_migrations_migration_plans oci_cloud_migrations_migration_plans} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudMigrationsMigrationPlansConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudMigrationsMigrationPlansConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_migration_plans',
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
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._migrationId = config.migrationId;
    this._migrationPlanId = config.migrationPlanId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
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

  // migration_id - computed: false, optional: true, required: false
  private _migrationId?: string; 
  public get migrationId() {
    return this.getStringAttribute('migration_id');
  }
  public set migrationId(value: string) {
    this._migrationId = value;
  }
  public resetMigrationId() {
    this._migrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationIdInput() {
    return this._migrationId;
  }

  // migration_plan_collection - computed: true, optional: false, required: false
  private _migrationPlanCollection = new DataOciCloudMigrationsMigrationPlansMigrationPlanCollectionList(this, "migration_plan_collection", false);
  public get migrationPlanCollection() {
    return this._migrationPlanCollection;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCloudMigrationsMigrationPlansFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCloudMigrationsMigrationPlansFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      migration_id: cdktf.stringToTerraform(this._migrationId),
      migration_plan_id: cdktf.stringToTerraform(this._migrationPlanId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciCloudMigrationsMigrationPlansFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_id: {
        value: cdktf.stringToHclTerraform(this._migrationId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciCloudMigrationsMigrationPlansFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCloudMigrationsMigrationPlansFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
