// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudMigrationsMigrationPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}
  */
  readonly migrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}
  */
  readonly sourceMigrationPlanId?: string;
  /**
  * strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#strategies CloudMigrationsMigrationPlan#strategies}
  */
  readonly strategies?: CloudMigrationsMigrationPlanStrategies[] | cdktf.IResolvable;
  /**
  * target_environments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#target_environments CloudMigrationsMigrationPlan#target_environments}
  */
  readonly targetEnvironments?: CloudMigrationsMigrationPlanTargetEnvironments[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#timeouts CloudMigrationsMigrationPlan#timeouts}
  */
  readonly timeouts?: CloudMigrationsMigrationPlanTimeouts;
}
export interface CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute {
}

export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeToTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeToHclTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute | undefined) {
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

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference {
    return new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage {
}

export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageToTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageToHclTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage | undefined) {
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

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference {
    return new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes {
}

export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesToTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesToHclTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes | undefined) {
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

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference {
    return new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage {
}

export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageToTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageToHclTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage | undefined) {
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
  private _volumes = new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference {
    return new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost {
}

export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostToTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostToHclTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute - computed: true, optional: false, required: false
  private _compute = new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // os_image - computed: true, optional: false, required: false
  private _osImage = new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList(this, "os_image", false);
  public get osImage() {
    return this._osImage;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList(this, "storage", false);
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

export class CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference {
    return new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsMigrationPlanMigrationPlanStats {
}

export function cloudMigrationsMigrationPlanMigrationPlanStatsToTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudMigrationsMigrationPlanMigrationPlanStatsToHclTerraform(struct?: CloudMigrationsMigrationPlanMigrationPlanStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsMigrationPlanMigrationPlanStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationPlanMigrationPlanStats | undefined) {
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
  private _totalEstimatedCost = new CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList(this, "total_estimated_cost", false);
  public get totalEstimatedCost() {
    return this._totalEstimatedCost;
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}

export class CloudMigrationsMigrationPlanMigrationPlanStatsList extends cdktf.ComplexList {

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
  public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference {
    return new CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsMigrationPlanStrategies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#adjustment_multiplier CloudMigrationsMigrationPlan#adjustment_multiplier}
  */
  readonly adjustmentMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#metric_time_window CloudMigrationsMigrationPlan#metric_time_window}
  */
  readonly metricTimeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#metric_type CloudMigrationsMigrationPlan#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#percentile CloudMigrationsMigrationPlan#percentile}
  */
  readonly percentile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#resource_type CloudMigrationsMigrationPlan#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#strategy_type CloudMigrationsMigrationPlan#strategy_type}
  */
  readonly strategyType: string;
}

export function cloudMigrationsMigrationPlanStrategiesToTerraform(struct?: CloudMigrationsMigrationPlanStrategies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment_multiplier: cdktf.numberToTerraform(struct!.adjustmentMultiplier),
    metric_time_window: cdktf.stringToTerraform(struct!.metricTimeWindow),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    percentile: cdktf.stringToTerraform(struct!.percentile),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    strategy_type: cdktf.stringToTerraform(struct!.strategyType),
  }
}


export function cloudMigrationsMigrationPlanStrategiesToHclTerraform(struct?: CloudMigrationsMigrationPlanStrategies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.adjustmentMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_time_window: {
      value: cdktf.stringToHclTerraform(struct!.metricTimeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentile: {
      value: cdktf.stringToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_type: {
      value: cdktf.stringToHclTerraform(struct!.strategyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsMigrationPlanStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsMigrationPlanStrategies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustmentMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentMultiplier = this._adjustmentMultiplier;
    }
    if (this._metricTimeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTimeWindow = this._metricTimeWindow;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._strategyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyType = this._strategyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationPlanStrategies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adjustmentMultiplier = undefined;
      this._metricTimeWindow = undefined;
      this._metricType = undefined;
      this._percentile = undefined;
      this._resourceType = undefined;
      this._strategyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adjustmentMultiplier = value.adjustmentMultiplier;
      this._metricTimeWindow = value.metricTimeWindow;
      this._metricType = value.metricType;
      this._percentile = value.percentile;
      this._resourceType = value.resourceType;
      this._strategyType = value.strategyType;
    }
  }

  // adjustment_multiplier - computed: true, optional: true, required: false
  private _adjustmentMultiplier?: number; 
  public get adjustmentMultiplier() {
    return this.getNumberAttribute('adjustment_multiplier');
  }
  public set adjustmentMultiplier(value: number) {
    this._adjustmentMultiplier = value;
  }
  public resetAdjustmentMultiplier() {
    this._adjustmentMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentMultiplierInput() {
    return this._adjustmentMultiplier;
  }

  // metric_time_window - computed: true, optional: true, required: false
  private _metricTimeWindow?: string; 
  public get metricTimeWindow() {
    return this.getStringAttribute('metric_time_window');
  }
  public set metricTimeWindow(value: string) {
    this._metricTimeWindow = value;
  }
  public resetMetricTimeWindow() {
    this._metricTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTimeWindowInput() {
    return this._metricTimeWindow;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // percentile - computed: true, optional: true, required: false
  private _percentile?: string; 
  public get percentile() {
    return this.getStringAttribute('percentile');
  }
  public set percentile(value: string) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // strategy_type - computed: false, optional: false, required: true
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }
}

export class CloudMigrationsMigrationPlanStrategiesList extends cdktf.ComplexList {
  public internalValue? : CloudMigrationsMigrationPlanStrategies[] | cdktf.IResolvable

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
  public get(index: number): CloudMigrationsMigrationPlanStrategiesOutputReference {
    return new CloudMigrationsMigrationPlanStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsMigrationPlanTargetEnvironments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#availability_domain CloudMigrationsMigrationPlan#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#dedicated_vm_host CloudMigrationsMigrationPlan#dedicated_vm_host}
  */
  readonly dedicatedVmHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#fault_domain CloudMigrationsMigrationPlan#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#ms_license CloudMigrationsMigrationPlan#ms_license}
  */
  readonly msLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#preferred_shape_type CloudMigrationsMigrationPlan#preferred_shape_type}
  */
  readonly preferredShapeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#subnet CloudMigrationsMigrationPlan#subnet}
  */
  readonly subnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#target_compartment_id CloudMigrationsMigrationPlan#target_compartment_id}
  */
  readonly targetCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#target_environment_type CloudMigrationsMigrationPlan#target_environment_type}
  */
  readonly targetEnvironmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#vcn CloudMigrationsMigrationPlan#vcn}
  */
  readonly vcn: string;
}

export function cloudMigrationsMigrationPlanTargetEnvironmentsToTerraform(struct?: CloudMigrationsMigrationPlanTargetEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    dedicated_vm_host: cdktf.stringToTerraform(struct!.dedicatedVmHost),
    fault_domain: cdktf.stringToTerraform(struct!.faultDomain),
    ms_license: cdktf.stringToTerraform(struct!.msLicense),
    preferred_shape_type: cdktf.stringToTerraform(struct!.preferredShapeType),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    target_compartment_id: cdktf.stringToTerraform(struct!.targetCompartmentId),
    target_environment_type: cdktf.stringToTerraform(struct!.targetEnvironmentType),
    vcn: cdktf.stringToTerraform(struct!.vcn),
  }
}


export function cloudMigrationsMigrationPlanTargetEnvironmentsToHclTerraform(struct?: CloudMigrationsMigrationPlanTargetEnvironments | cdktf.IResolvable): any {
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
    dedicated_vm_host: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedVmHost),
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
    ms_license: {
      value: cdktf.stringToHclTerraform(struct!.msLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_shape_type: {
      value: cdktf.stringToHclTerraform(struct!.preferredShapeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.targetCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_environment_type: {
      value: cdktf.stringToHclTerraform(struct!.targetEnvironmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn: {
      value: cdktf.stringToHclTerraform(struct!.vcn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMigrationsMigrationPlanTargetEnvironments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._dedicatedVmHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedVmHost = this._dedicatedVmHost;
    }
    if (this._faultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomain = this._faultDomain;
    }
    if (this._msLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.msLicense = this._msLicense;
    }
    if (this._preferredShapeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredShapeType = this._preferredShapeType;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._targetCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCompartmentId = this._targetCompartmentId;
    }
    if (this._targetEnvironmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetEnvironmentType = this._targetEnvironmentType;
    }
    if (this._vcn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcn = this._vcn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMigrationsMigrationPlanTargetEnvironments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityDomain = undefined;
      this._dedicatedVmHost = undefined;
      this._faultDomain = undefined;
      this._msLicense = undefined;
      this._preferredShapeType = undefined;
      this._subnet = undefined;
      this._targetCompartmentId = undefined;
      this._targetEnvironmentType = undefined;
      this._vcn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityDomain = value.availabilityDomain;
      this._dedicatedVmHost = value.dedicatedVmHost;
      this._faultDomain = value.faultDomain;
      this._msLicense = value.msLicense;
      this._preferredShapeType = value.preferredShapeType;
      this._subnet = value.subnet;
      this._targetCompartmentId = value.targetCompartmentId;
      this._targetEnvironmentType = value.targetEnvironmentType;
      this._vcn = value.vcn;
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

  // dedicated_vm_host - computed: true, optional: true, required: false
  private _dedicatedVmHost?: string; 
  public get dedicatedVmHost() {
    return this.getStringAttribute('dedicated_vm_host');
  }
  public set dedicatedVmHost(value: string) {
    this._dedicatedVmHost = value;
  }
  public resetDedicatedVmHost() {
    this._dedicatedVmHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostInput() {
    return this._dedicatedVmHost;
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

  // preferred_shape_type - computed: true, optional: true, required: false
  private _preferredShapeType?: string; 
  public get preferredShapeType() {
    return this.getStringAttribute('preferred_shape_type');
  }
  public set preferredShapeType(value: string) {
    this._preferredShapeType = value;
  }
  public resetPreferredShapeType() {
    this._preferredShapeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredShapeTypeInput() {
    return this._preferredShapeType;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // target_compartment_id - computed: true, optional: true, required: false
  private _targetCompartmentId?: string; 
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }
  public set targetCompartmentId(value: string) {
    this._targetCompartmentId = value;
  }
  public resetTargetCompartmentId() {
    this._targetCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCompartmentIdInput() {
    return this._targetCompartmentId;
  }

  // target_environment_type - computed: false, optional: false, required: true
  private _targetEnvironmentType?: string; 
  public get targetEnvironmentType() {
    return this.getStringAttribute('target_environment_type');
  }
  public set targetEnvironmentType(value: string) {
    this._targetEnvironmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEnvironmentTypeInput() {
    return this._targetEnvironmentType;
  }

  // vcn - computed: false, optional: false, required: true
  private _vcn?: string; 
  public get vcn() {
    return this.getStringAttribute('vcn');
  }
  public set vcn(value: string) {
    this._vcn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnInput() {
    return this._vcn;
  }
}

export class CloudMigrationsMigrationPlanTargetEnvironmentsList extends cdktf.ComplexList {
  public internalValue? : CloudMigrationsMigrationPlanTargetEnvironments[] | cdktf.IResolvable

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
  public get(index: number): CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference {
    return new CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMigrationsMigrationPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#create CloudMigrationsMigrationPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#delete CloudMigrationsMigrationPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#update CloudMigrationsMigrationPlan#update}
  */
  readonly update?: string;
}

export function cloudMigrationsMigrationPlanTimeoutsToTerraform(struct?: CloudMigrationsMigrationPlanTimeouts | cdktf.IResolvable): any {
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


export function cloudMigrationsMigrationPlanTimeoutsToHclTerraform(struct?: CloudMigrationsMigrationPlanTimeouts | cdktf.IResolvable): any {
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

export class CloudMigrationsMigrationPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudMigrationsMigrationPlanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudMigrationsMigrationPlanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan}
*/
export class CloudMigrationsMigrationPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_migration_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudMigrationsMigrationPlan to import
  * @param importFromId The id of the existing CloudMigrationsMigrationPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudMigrationsMigrationPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_migrations_migration_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudMigrationsMigrationPlanConfig
  */
  public constructor(scope: Construct, id: string, config: CloudMigrationsMigrationPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_migration_plan',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._migrationId = config.migrationId;
    this._sourceMigrationPlanId = config.sourceMigrationPlanId;
    this._strategies.internalValue = config.strategies;
    this._targetEnvironments.internalValue = config.targetEnvironments;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // calculated_limits - computed: true, optional: false, required: false
  private _calculatedLimits = new cdktf.StringMap(this, "calculated_limits");
  public get calculatedLimits() {
    return this._calculatedLimits;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migration_id - computed: false, optional: false, required: true
  private _migrationId?: string; 
  public get migrationId() {
    return this.getStringAttribute('migration_id');
  }
  public set migrationId(value: string) {
    this._migrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationIdInput() {
    return this._migrationId;
  }

  // migration_plan_stats - computed: true, optional: false, required: false
  private _migrationPlanStats = new CloudMigrationsMigrationPlanMigrationPlanStatsList(this, "migration_plan_stats", false);
  public get migrationPlanStats() {
    return this._migrationPlanStats;
  }

  // reference_to_rms_stack - computed: true, optional: false, required: false
  public get referenceToRmsStack() {
    return this.getStringAttribute('reference_to_rms_stack');
  }

  // source_migration_plan_id - computed: true, optional: true, required: false
  private _sourceMigrationPlanId?: string; 
  public get sourceMigrationPlanId() {
    return this.getStringAttribute('source_migration_plan_id');
  }
  public set sourceMigrationPlanId(value: string) {
    this._sourceMigrationPlanId = value;
  }
  public resetSourceMigrationPlanId() {
    this._sourceMigrationPlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMigrationPlanIdInput() {
    return this._sourceMigrationPlanId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // strategies - computed: false, optional: true, required: false
  private _strategies = new CloudMigrationsMigrationPlanStrategiesList(this, "strategies", false);
  public get strategies() {
    return this._strategies;
  }
  public putStrategies(value: CloudMigrationsMigrationPlanStrategies[] | cdktf.IResolvable) {
    this._strategies.internalValue = value;
  }
  public resetStrategies() {
    this._strategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategiesInput() {
    return this._strategies.internalValue;
  }

  // target_environments - computed: false, optional: true, required: false
  private _targetEnvironments = new CloudMigrationsMigrationPlanTargetEnvironmentsList(this, "target_environments", false);
  public get targetEnvironments() {
    return this._targetEnvironments;
  }
  public putTargetEnvironments(value: CloudMigrationsMigrationPlanTargetEnvironments[] | cdktf.IResolvable) {
    this._targetEnvironments.internalValue = value;
  }
  public resetTargetEnvironments() {
    this._targetEnvironments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEnvironmentsInput() {
    return this._targetEnvironments.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudMigrationsMigrationPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudMigrationsMigrationPlanTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      migration_id: cdktf.stringToTerraform(this._migrationId),
      source_migration_plan_id: cdktf.stringToTerraform(this._sourceMigrationPlanId),
      strategies: cdktf.listMapper(cloudMigrationsMigrationPlanStrategiesToTerraform, true)(this._strategies.internalValue),
      target_environments: cdktf.listMapper(cloudMigrationsMigrationPlanTargetEnvironmentsToTerraform, true)(this._targetEnvironments.internalValue),
      timeouts: cloudMigrationsMigrationPlanTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      source_migration_plan_id: {
        value: cdktf.stringToHclTerraform(this._sourceMigrationPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategies: {
        value: cdktf.listMapperHcl(cloudMigrationsMigrationPlanStrategiesToHclTerraform, true)(this._strategies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudMigrationsMigrationPlanStrategiesList",
      },
      target_environments: {
        value: cdktf.listMapperHcl(cloudMigrationsMigrationPlanTargetEnvironmentsToHclTerraform, true)(this._targetEnvironments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudMigrationsMigrationPlanTargetEnvironmentsList",
      },
      timeouts: {
        value: cloudMigrationsMigrationPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudMigrationsMigrationPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
