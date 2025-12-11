// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAutonomousExadataInfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#availability_domain DatabaseAutonomousExadataInfrastructure#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#compartment_id DatabaseAutonomousExadataInfrastructure#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#create_async DatabaseAutonomousExadataInfrastructure#create_async}
  */
  readonly createAsync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#defined_tags DatabaseAutonomousExadataInfrastructure#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#display_name DatabaseAutonomousExadataInfrastructure#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#domain DatabaseAutonomousExadataInfrastructure#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#freeform_tags DatabaseAutonomousExadataInfrastructure#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#id DatabaseAutonomousExadataInfrastructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#license_model DatabaseAutonomousExadataInfrastructure#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#nsg_ids DatabaseAutonomousExadataInfrastructure#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#shape DatabaseAutonomousExadataInfrastructure#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#subnet_id DatabaseAutonomousExadataInfrastructure#subnet_id}
  */
  readonly subnetId: string;
  /**
  * maintenance_window_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#maintenance_window_details DatabaseAutonomousExadataInfrastructure#maintenance_window_details}
  */
  readonly maintenanceWindowDetails?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#timeouts DatabaseAutonomousExadataInfrastructure#timeouts}
  */
  readonly timeouts?: DatabaseAutonomousExadataInfrastructureTimeouts;
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek {
}

export function databaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekToTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek | undefined) {
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

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference {
    return new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths {
}

export function databaseAutonomousExadataInfrastructureMaintenanceWindowMonthsToTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousExadataInfrastructureMaintenanceWindowMonthsToHclTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths | undefined) {
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

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference {
    return new DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindow {
}

export function databaseAutonomousExadataInfrastructureMaintenanceWindowToTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseAutonomousExadataInfrastructureMaintenanceWindowToHclTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousExadataInfrastructureMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindow | undefined) {
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
  private _daysOfWeek = new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonthsList(this, "months", false);
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

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference {
    return new DatabaseAutonomousExadataInfrastructureMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}
  */
  readonly name: string;
}

export function databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekToTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekToHclTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable): any {
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

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek | cdktf.IResolvable | undefined) {
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

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference {
    return new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#name DatabaseAutonomousExadataInfrastructure#name}
  */
  readonly name: string;
}

export function databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsToTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsToHclTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths | cdktf.IResolvable): any {
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

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths | cdktf.IResolvable | undefined) {
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

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList extends cdktf.ComplexList {
  public internalValue? : DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths[] | cdktf.IResolvable

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
  public get(index: number): DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference {
    return new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#custom_action_timeout_in_mins DatabaseAutonomousExadataInfrastructure#custom_action_timeout_in_mins}
  */
  readonly customActionTimeoutInMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#hours_of_day DatabaseAutonomousExadataInfrastructure#hours_of_day}
  */
  readonly hoursOfDay?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseAutonomousExadataInfrastructure#is_custom_action_timeout_enabled}
  */
  readonly isCustomActionTimeoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#is_monthly_patching_enabled DatabaseAutonomousExadataInfrastructure#is_monthly_patching_enabled}
  */
  readonly isMonthlyPatchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#lead_time_in_weeks DatabaseAutonomousExadataInfrastructure#lead_time_in_weeks}
  */
  readonly leadTimeInWeeks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#patching_mode DatabaseAutonomousExadataInfrastructure#patching_mode}
  */
  readonly patchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#preference DatabaseAutonomousExadataInfrastructure#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#skip_ru DatabaseAutonomousExadataInfrastructure#skip_ru}
  */
  readonly skipRu?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#weeks_of_month DatabaseAutonomousExadataInfrastructure#weeks_of_month}
  */
  readonly weeksOfMonth?: number[];
  /**
  * days_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#days_of_week DatabaseAutonomousExadataInfrastructure#days_of_week}
  */
  readonly daysOfWeek?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable;
  /**
  * months block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#months DatabaseAutonomousExadataInfrastructure#months}
  */
  readonly months?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths[] | cdktf.IResolvable;
}

export function databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsToTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference | DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails): any {
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
    days_of_week: cdktf.listMapper(databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekToTerraform, true)(struct!.daysOfWeek),
    months: cdktf.listMapper(databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsToTerraform, true)(struct!.months),
  }
}


export function databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsToHclTerraform(struct?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference | DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails): any {
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
      value: cdktf.listMapperHcl(databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekToHclTerraform, true)(struct!.daysOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList",
    },
    months: {
      value: cdktf.listMapperHcl(databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsToHclTerraform, true)(struct!.months),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails | undefined {
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

  public set internalValue(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails | undefined) {
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
  private _daysOfWeek = new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }
  public putDaysOfWeek(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek[] | cdktf.IResolvable) {
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
  private _months = new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }
  public putMonths(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths[] | cdktf.IResolvable) {
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
export interface DatabaseAutonomousExadataInfrastructureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#create DatabaseAutonomousExadataInfrastructure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#delete DatabaseAutonomousExadataInfrastructure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#update DatabaseAutonomousExadataInfrastructure#update}
  */
  readonly update?: string;
}

export function databaseAutonomousExadataInfrastructureTimeoutsToTerraform(struct?: DatabaseAutonomousExadataInfrastructureTimeouts | cdktf.IResolvable): any {
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


export function databaseAutonomousExadataInfrastructureTimeoutsToHclTerraform(struct?: DatabaseAutonomousExadataInfrastructureTimeouts | cdktf.IResolvable): any {
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

export class DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseAutonomousExadataInfrastructureTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseAutonomousExadataInfrastructureTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure oci_database_autonomous_exadata_infrastructure}
*/
export class DatabaseAutonomousExadataInfrastructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_exadata_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAutonomousExadataInfrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAutonomousExadataInfrastructure to import
  * @param importFromId The id of the existing DatabaseAutonomousExadataInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAutonomousExadataInfrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_exadata_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_exadata_infrastructure oci_database_autonomous_exadata_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAutonomousExadataInfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseAutonomousExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_exadata_infrastructure',
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
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._createAsync = config.createAsync;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._licenseModel = config.licenseModel;
    this._nsgIds = config.nsgIds;
    this._shape = config.shape;
    this._subnetId = config.subnetId;
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

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // last_maintenance_run_id - computed: true, optional: false, required: false
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
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

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DatabaseAutonomousExadataInfrastructureMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
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

  // scan_dns_name - computed: true, optional: false, required: false
  public get scanDnsName() {
    return this.getStringAttribute('scan_dns_name');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // maintenance_window_details - computed: false, optional: true, required: false
  private _maintenanceWindowDetails = new DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsOutputReference(this, "maintenance_window_details");
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }
  public putMaintenanceWindowDetails(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails) {
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
  private _timeouts = new DatabaseAutonomousExadataInfrastructureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseAutonomousExadataInfrastructureTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      create_async: cdktf.booleanToTerraform(this._createAsync),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      shape: cdktf.stringToTerraform(this._shape),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      maintenance_window_details: databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsToTerraform(this._maintenanceWindowDetails.internalValue),
      timeouts: databaseAutonomousExadataInfrastructureTimeoutsToTerraform(this._timeouts.internalValue),
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
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_async: {
        value: cdktf.booleanToHclTerraform(this._createAsync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
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
      maintenance_window_details: {
        value: databaseAutonomousExadataInfrastructureMaintenanceWindowDetailsToHclTerraform(this._maintenanceWindowDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsList",
      },
      timeouts: {
        value: databaseAutonomousExadataInfrastructureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseAutonomousExadataInfrastructureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
