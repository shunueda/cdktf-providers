// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_exadata_infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousExadataInfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_exadata_infrastructure#autonomous_exadata_infrastructure_id DataOciDatabaseAutonomousExadataInfrastructure#autonomous_exadata_infrastructure_id}
  */
  readonly autonomousExadataInfrastructureId: string;
}
export interface DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek {
}

export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekToTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek | undefined) {
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

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference {
    return new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths {
}

export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsToTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsToHclTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths | undefined) {
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

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference {
    return new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindow {
}

export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowToTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowToHclTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindow | undefined) {
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
  private _daysOfWeek = new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList(this, "months", false);
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

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference {
    return new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek {
}

export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekToTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekToHclTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek | undefined) {
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

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference {
    return new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths {
}

export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsToTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsToHclTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths | undefined) {
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

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference {
    return new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails {
}

export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsToTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsToHclTerraform(struct?: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails | undefined) {
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
  private _daysOfWeek = new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList(this, "months", false);
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

export class DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference {
    return new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_exadata_infrastructure oci_database_autonomous_exadata_infrastructure}
*/
export class DataOciDatabaseAutonomousExadataInfrastructure extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_exadata_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousExadataInfrastructure to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousExadataInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_exadata_infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousExadataInfrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_exadata_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_autonomous_exadata_infrastructure oci_database_autonomous_exadata_infrastructure} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousExadataInfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_exadata_infrastructure',
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
    this._autonomousExadataInfrastructureId = config.autonomousExadataInfrastructureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _autonomousExadataInfrastructureId?: string; 
  public get autonomousExadataInfrastructureId() {
    return this.getStringAttribute('autonomous_exadata_infrastructure_id');
  }
  public set autonomousExadataInfrastructureId(value: string) {
    this._autonomousExadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousExadataInfrastructureIdInput() {
    return this._autonomousExadataInfrastructureId;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_async - computed: true, optional: false, required: false
  public get createAsync() {
    return this.getBooleanAttribute('create_async');
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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _maintenanceWindow = new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // maintenance_window_details - computed: true, optional: false, required: false
  private _maintenanceWindowDetails = new DataOciDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsList(this, "maintenance_window_details", false);
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // scan_dns_name - computed: true, optional: false, required: false
  public get scanDnsName() {
    return this.getStringAttribute('scan_dns_name');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_exadata_infrastructure_id: cdktf.stringToTerraform(this._autonomousExadataInfrastructureId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._autonomousExadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
