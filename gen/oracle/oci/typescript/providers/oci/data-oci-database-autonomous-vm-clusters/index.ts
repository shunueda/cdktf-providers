// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousVmClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#compartment_id DataOciDatabaseAutonomousVmClusters#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#display_name DataOciDatabaseAutonomousVmClusters#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#exadata_infrastructure_id DataOciDatabaseAutonomousVmClusters#exadata_infrastructure_id}
  */
  readonly exadataInfrastructureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#id DataOciDatabaseAutonomousVmClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#state DataOciDatabaseAutonomousVmClusters#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#filter DataOciDatabaseAutonomousVmClusters#filter}
  */
  readonly filter?: DataOciDatabaseAutonomousVmClustersFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeek {
}

export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeekToTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeek | undefined) {
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

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference {
    return new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonths {
}

export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonthsToTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonthsToHclTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonths | undefined) {
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

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonthsOutputReference {
    return new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindow {
}

export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowToTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowToHclTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindow | undefined) {
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
  private _daysOfWeek = new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowMonthsList(this, "months", false);
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

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowOutputReference {
    return new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek {
}

export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekToTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek | undefined) {
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

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference {
    return new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonths {
}

export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonthsToTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonthsToHclTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonths | undefined) {
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

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference {
    return new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetails {
}

export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsToTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetails | undefined) {
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
  private _daysOfWeek = new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsMonthsList(this, "months", false);
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

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsOutputReference {
    return new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousVmClustersAutonomousVmClusters {
}

export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersToTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousVmClustersAutonomousVmClustersToHclTerraform(struct?: DataOciDatabaseAutonomousVmClustersAutonomousVmClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousVmClustersAutonomousVmClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousVmClustersAutonomousVmClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_data_storage_percentage - computed: true, optional: false, required: false
  public get autonomousDataStoragePercentage() {
    return this.getNumberAttribute('autonomous_data_storage_percentage');
  }

  // autonomous_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get autonomousDataStorageSizeInTbs() {
    return this.getNumberAttribute('autonomous_data_storage_size_in_tbs');
  }

  // available_autonomous_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get availableAutonomousDataStorageSizeInTbs() {
    return this.getNumberAttribute('available_autonomous_data_storage_size_in_tbs');
  }

  // available_container_databases - computed: true, optional: false, required: false
  public get availableContainerDatabases() {
    return this.getNumberAttribute('available_container_databases');
  }

  // available_cpus - computed: true, optional: false, required: false
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // available_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get availableDataStorageSizeInTbs() {
    return this.getNumberAttribute('available_data_storage_size_in_tbs');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_core_count_per_node - computed: true, optional: false, required: false
  public get cpuCoreCountPerNode() {
    return this.getNumberAttribute('cpu_core_count_per_node');
  }

  // cpu_percentage - computed: true, optional: false, required: false
  public get cpuPercentage() {
    return this.getNumberAttribute('cpu_percentage');
  }

  // cpus_enabled - computed: true, optional: false, required: false
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // cpus_lowest_scaled_value - computed: true, optional: false, required: false
  public get cpusLowestScaledValue() {
    return this.getNumberAttribute('cpus_lowest_scaled_value');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // db_servers - computed: true, optional: false, required: false
  public get dbServers() {
    return this.getListAttribute('db_servers');
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

  // exadata_infrastructure_id - computed: true, optional: false, required: false
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }

  // exadata_storage_in_tbs_lowest_scaled_value - computed: true, optional: false, required: false
  public get exadataStorageInTbsLowestScaledValue() {
    return this.getNumberAttribute('exadata_storage_in_tbs_lowest_scaled_value');
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

  // is_local_backup_enabled - computed: true, optional: false, required: false
  public get isLocalBackupEnabled() {
    return this.getBooleanAttribute('is_local_backup_enabled');
  }

  // is_mtls_enabled - computed: true, optional: false, required: false
  public get isMtlsEnabled() {
    return this.getBooleanAttribute('is_mtls_enabled');
  }

  // last_maintenance_run_id - computed: true, optional: false, required: false
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // maintenance_window_details - computed: true, optional: false, required: false
  private _maintenanceWindowDetails = new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersMaintenanceWindowDetailsList(this, "maintenance_window_details", false);
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }

  // max_acds_lowest_scaled_value - computed: true, optional: false, required: false
  public get maxAcdsLowestScaledValue() {
    return this.getNumberAttribute('max_acds_lowest_scaled_value');
  }

  // memory_per_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_compute_unit_in_gbs');
  }

  // memory_per_oracle_compute_unit_in_gbs - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitInGbs() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_in_gbs');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // non_provisionable_autonomous_container_databases - computed: true, optional: false, required: false
  public get nonProvisionableAutonomousContainerDatabases() {
    return this.getNumberAttribute('non_provisionable_autonomous_container_databases');
  }

  // ocpus_enabled - computed: true, optional: false, required: false
  public get ocpusEnabled() {
    return this.getNumberAttribute('ocpus_enabled');
  }

  // provisionable_autonomous_container_databases - computed: true, optional: false, required: false
  public get provisionableAutonomousContainerDatabases() {
    return this.getNumberAttribute('provisionable_autonomous_container_databases');
  }

  // provisioned_autonomous_container_databases - computed: true, optional: false, required: false
  public get provisionedAutonomousContainerDatabases() {
    return this.getNumberAttribute('provisioned_autonomous_container_databases');
  }

  // provisioned_cpus - computed: true, optional: false, required: false
  public get provisionedCpus() {
    return this.getNumberAttribute('provisioned_cpus');
  }

  // reclaimable_cpus - computed: true, optional: false, required: false
  public get reclaimableCpus() {
    return this.getNumberAttribute('reclaimable_cpus');
  }

  // reserved_cpus - computed: true, optional: false, required: false
  public get reservedCpus() {
    return this.getNumberAttribute('reserved_cpus');
  }

  // scan_listener_port_non_tls - computed: true, optional: false, required: false
  public get scanListenerPortNonTls() {
    return this.getNumberAttribute('scan_listener_port_non_tls');
  }

  // scan_listener_port_tls - computed: true, optional: false, required: false
  public get scanListenerPortTls() {
    return this.getNumberAttribute('scan_listener_port_tls');
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

  // time_database_ssl_certificate_expires - computed: true, optional: false, required: false
  public get timeDatabaseSslCertificateExpires() {
    return this.getStringAttribute('time_database_ssl_certificate_expires');
  }

  // time_ords_certificate_expires - computed: true, optional: false, required: false
  public get timeOrdsCertificateExpires() {
    return this.getStringAttribute('time_ords_certificate_expires');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // total_autonomous_data_storage_in_tbs - computed: true, optional: false, required: false
  public get totalAutonomousDataStorageInTbs() {
    return this.getNumberAttribute('total_autonomous_data_storage_in_tbs');
  }

  // total_container_databases - computed: true, optional: false, required: false
  public get totalContainerDatabases() {
    return this.getNumberAttribute('total_container_databases');
  }

  // vm_cluster_network_id - computed: true, optional: false, required: false
  public get vmClusterNetworkId() {
    return this.getStringAttribute('vm_cluster_network_id');
  }
}

export class DataOciDatabaseAutonomousVmClustersAutonomousVmClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousVmClustersAutonomousVmClustersOutputReference {
    return new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousVmClustersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#name DataOciDatabaseAutonomousVmClusters#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#regex DataOciDatabaseAutonomousVmClusters#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#values DataOciDatabaseAutonomousVmClusters#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseAutonomousVmClustersFilterToTerraform(struct?: DataOciDatabaseAutonomousVmClustersFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseAutonomousVmClustersFilterToHclTerraform(struct?: DataOciDatabaseAutonomousVmClustersFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseAutonomousVmClustersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousVmClustersFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseAutonomousVmClustersFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseAutonomousVmClustersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseAutonomousVmClustersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseAutonomousVmClustersFilterOutputReference {
    return new DataOciDatabaseAutonomousVmClustersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters oci_database_autonomous_vm_clusters}
*/
export class DataOciDatabaseAutonomousVmClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_vm_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousVmClusters to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousVmClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousVmClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_vm_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_vm_clusters oci_database_autonomous_vm_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousVmClustersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousVmClustersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_vm_clusters',
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
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_vm_clusters - computed: true, optional: false, required: false
  private _autonomousVmClusters = new DataOciDatabaseAutonomousVmClustersAutonomousVmClustersList(this, "autonomous_vm_clusters", false);
  public get autonomousVmClusters() {
    return this._autonomousVmClusters;
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

  // exadata_infrastructure_id - computed: false, optional: true, required: false
  private _exadataInfrastructureId?: string; 
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }
  public resetExadataInfrastructureId() {
    this._exadataInfrastructureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureIdInput() {
    return this._exadataInfrastructureId;
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
  private _filter = new DataOciDatabaseAutonomousVmClustersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseAutonomousVmClustersFilter[] | cdktf.IResolvable) {
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
      exadata_infrastructure_id: cdktf.stringToTerraform(this._exadataInfrastructureId),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDatabaseAutonomousVmClustersFilterToTerraform, true)(this._filter.internalValue),
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
      exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._exadataInfrastructureId),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseAutonomousVmClustersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseAutonomousVmClustersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
