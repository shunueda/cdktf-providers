// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudMigrationsMigrationPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_plan#migration_plan_id DataOciCloudMigrationsMigrationPlan#migration_plan_id}
  */
  readonly migrationPlanId: string;
}
export interface DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute {
}

export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeToTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute | undefined) {
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

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference {
    return new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage {
}

export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageToTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage | undefined) {
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

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference {
    return new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes {
}

export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesToTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes | undefined) {
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

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference {
    return new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage {
}

export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageToTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage | undefined) {
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
  private _volumes = new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference {
    return new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost {
}

export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostToTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  private _compute = new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // os_image - computed: true, optional: false, required: false
  private _osImage = new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList(this, "os_image", false);
  public get osImage() {
    return this._osImage;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList(this, "storage", false);
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

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference {
    return new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanMigrationPlanStats {
}

export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsToTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanMigrationPlanStatsToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanMigrationPlanStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanMigrationPlanStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanMigrationPlanStats | undefined) {
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
  private _totalEstimatedCost = new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList(this, "total_estimated_cost", false);
  public get totalEstimatedCost() {
    return this._totalEstimatedCost;
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}

export class DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference {
    return new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanStrategies {
}

export function dataOciCloudMigrationsMigrationPlanStrategiesToTerraform(struct?: DataOciCloudMigrationsMigrationPlanStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanStrategiesToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanStrategies | undefined) {
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

export class DataOciCloudMigrationsMigrationPlanStrategiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanStrategiesOutputReference {
    return new DataOciCloudMigrationsMigrationPlanStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanTargetEnvironments {
}

export function dataOciCloudMigrationsMigrationPlanTargetEnvironmentsToTerraform(struct?: DataOciCloudMigrationsMigrationPlanTargetEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanTargetEnvironmentsToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanTargetEnvironments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanTargetEnvironments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanTargetEnvironments | undefined) {
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

export class DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference {
    return new DataOciCloudMigrationsMigrationPlanTargetEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan}
*/
export class DataOciCloudMigrationsMigrationPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_migration_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlan to import
  * @param importFromId The id of the existing DataOciCloudMigrationsMigrationPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_migrations_migration_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudMigrationsMigrationPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudMigrationsMigrationPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_migration_plan',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._migrationPlanId = config.migrationPlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // migration_plan_stats - computed: true, optional: false, required: false
  private _migrationPlanStats = new DataOciCloudMigrationsMigrationPlanMigrationPlanStatsList(this, "migration_plan_stats", false);
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
  private _strategies = new DataOciCloudMigrationsMigrationPlanStrategiesList(this, "strategies", false);
  public get strategies() {
    return this._strategies;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_environments - computed: true, optional: false, required: false
  private _targetEnvironments = new DataOciCloudMigrationsMigrationPlanTargetEnvironmentsList(this, "target_environments", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      migration_plan_id: cdktf.stringToTerraform(this._migrationPlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      migration_plan_id: {
        value: cdktf.stringToHclTerraform(this._migrationPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
