// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseExadataInfrastructureConfigureExascaleManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management#exadata_infrastructure_id DatabaseExadataInfrastructureConfigureExascaleManagement#exadata_infrastructure_id}
  */
  readonly exadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management#id DatabaseExadataInfrastructureConfigureExascaleManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management#total_storage_in_gbs DatabaseExadataInfrastructureConfigureExascaleManagement#total_storage_in_gbs}
  */
  readonly totalStorageInGbs: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management#timeouts DatabaseExadataInfrastructureConfigureExascaleManagement#timeouts}
  */
  readonly timeouts?: DatabaseExadataInfrastructureConfigureExascaleManagementTimeouts;
}
export interface DatabaseExadataInfrastructureConfigureExascaleManagementContacts {
}

export function databaseExadataInfrastructureConfigureExascaleManagementContactsToTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureConfigureExascaleManagementContactsToHclTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureConfigureExascaleManagementContacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureConfigureExascaleManagementContacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // is_contact_mos_validated - computed: true, optional: false, required: false
  public get isContactMosValidated() {
    return this.getBooleanAttribute('is_contact_mos_validated');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementContactsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureConfigureExascaleManagementContactsOutputReference {
    return new DatabaseExadataInfrastructureConfigureExascaleManagementContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurations {
}

export function databaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurationsToTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurationsToHclTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_backup_partition - computed: true, optional: false, required: false
  public get isBackupPartition() {
    return this.getBooleanAttribute('is_backup_partition');
  }

  // is_resizable - computed: true, optional: false, required: false
  public get isResizable() {
    return this.getBooleanAttribute('is_resizable');
  }

  // min_size_gb - computed: true, optional: false, required: false
  public get minSizeGb() {
    return this.getNumberAttribute('min_size_gb');
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurationsOutputReference {
    return new DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfig {
}

export function databaseExadataInfrastructureConfigureExascaleManagementExascaleConfigToTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureConfigureExascaleManagementExascaleConfigToHclTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_storage_in_gbs - computed: true, optional: false, required: false
  public get availableStorageInGbs() {
    return this.getNumberAttribute('available_storage_in_gbs');
  }

  // total_storage_in_gbs - computed: true, optional: false, required: false
  public get totalStorageInGbs() {
    return this.getNumberAttribute('total_storage_in_gbs');
  }
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfigOutputReference {
    return new DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeek {
}

export function databaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeekToTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeek | undefined) {
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

export class DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeekOutputReference {
    return new DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonths {
}

export function databaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonthsToTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonthsToHclTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonths | undefined) {
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

export class DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonthsOutputReference {
    return new DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindow {
}

export function databaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowToTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowToHclTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindow | undefined) {
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
  private _daysOfWeek = new DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowMonthsList(this, "months", false);
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

export class DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowOutputReference {
    return new DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetails {
}

export function databaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetailsToTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetailsToHclTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_network_bonding_mode - computed: true, optional: false, required: false
  public get backupNetworkBondingMode() {
    return this.getStringAttribute('backup_network_bonding_mode');
  }

  // client_network_bonding_mode - computed: true, optional: false, required: false
  public get clientNetworkBondingMode() {
    return this.getStringAttribute('client_network_bonding_mode');
  }

  // dr_network_bonding_mode - computed: true, optional: false, required: false
  public get drNetworkBondingMode() {
    return this.getStringAttribute('dr_network_bonding_mode');
  }
}

export class DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetailsOutputReference {
    return new DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureConfigureExascaleManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management#create DatabaseExadataInfrastructureConfigureExascaleManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management#delete DatabaseExadataInfrastructureConfigureExascaleManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management#update DatabaseExadataInfrastructureConfigureExascaleManagement#update}
  */
  readonly update?: string;
}

export function databaseExadataInfrastructureConfigureExascaleManagementTimeoutsToTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementTimeouts | cdktf.IResolvable): any {
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


export function databaseExadataInfrastructureConfigureExascaleManagementTimeoutsToHclTerraform(struct?: DatabaseExadataInfrastructureConfigureExascaleManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseExadataInfrastructureConfigureExascaleManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseExadataInfrastructureConfigureExascaleManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseExadataInfrastructureConfigureExascaleManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management oci_database_exadata_infrastructure_configure_exascale_management}
*/
export class DatabaseExadataInfrastructureConfigureExascaleManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exadata_infrastructure_configure_exascale_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseExadataInfrastructureConfigureExascaleManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseExadataInfrastructureConfigureExascaleManagement to import
  * @param importFromId The id of the existing DatabaseExadataInfrastructureConfigureExascaleManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseExadataInfrastructureConfigureExascaleManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exadata_infrastructure_configure_exascale_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadata_infrastructure_configure_exascale_management oci_database_exadata_infrastructure_configure_exascale_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseExadataInfrastructureConfigureExascaleManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseExadataInfrastructureConfigureExascaleManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadata_infrastructure_configure_exascale_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._id = config.id;
    this._totalStorageInGbs = config.totalStorageInGbs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated_storage_count - computed: true, optional: false, required: false
  public get activatedStorageCount() {
    return this.getNumberAttribute('activated_storage_count');
  }

  // additional_compute_count - computed: true, optional: false, required: false
  public get additionalComputeCount() {
    return this.getNumberAttribute('additional_compute_count');
  }

  // additional_compute_system_model - computed: true, optional: false, required: false
  public get additionalComputeSystemModel() {
    return this.getStringAttribute('additional_compute_system_model');
  }

  // additional_storage_count - computed: true, optional: false, required: false
  public get additionalStorageCount() {
    return this.getNumberAttribute('additional_storage_count');
  }

  // admin_network_cidr - computed: true, optional: false, required: false
  public get adminNetworkCidr() {
    return this.getStringAttribute('admin_network_cidr');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // cloud_control_plane_server1 - computed: true, optional: false, required: false
  public get cloudControlPlaneServer1() {
    return this.getStringAttribute('cloud_control_plane_server1');
  }

  // cloud_control_plane_server2 - computed: true, optional: false, required: false
  public get cloudControlPlaneServer2() {
    return this.getStringAttribute('cloud_control_plane_server2');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // contacts - computed: true, optional: false, required: false
  private _contacts = new DatabaseExadataInfrastructureConfigureExascaleManagementContactsList(this, "contacts", false);
  public get contacts() {
    return this._contacts;
  }

  // corporate_proxy - computed: true, optional: false, required: false
  public get corporateProxy() {
    return this.getStringAttribute('corporate_proxy');
  }

  // cpus_enabled - computed: true, optional: false, required: false
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // csi_number - computed: true, optional: false, required: false
  public get csiNumber() {
    return this.getStringAttribute('csi_number');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // db_server_version - computed: true, optional: false, required: false
  public get dbServerVersion() {
    return this.getStringAttribute('db_server_version');
  }

  // defined_file_system_configurations - computed: true, optional: false, required: false
  private _definedFileSystemConfigurations = new DatabaseExadataInfrastructureConfigureExascaleManagementDefinedFileSystemConfigurationsList(this, "defined_file_system_configurations", false);
  public get definedFileSystemConfigurations() {
    return this._definedFileSystemConfigurations;
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

  // dns_server - computed: true, optional: false, required: false
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId?: string; 
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureIdInput() {
    return this._exadataInfrastructureId;
  }

  // exascale_config - computed: true, optional: false, required: false
  private _exascaleConfig = new DatabaseExadataInfrastructureConfigureExascaleManagementExascaleConfigList(this, "exascale_config", false);
  public get exascaleConfig() {
    return this._exascaleConfig;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
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

  // infini_band_network_cidr - computed: true, optional: false, required: false
  public get infiniBandNetworkCidr() {
    return this.getStringAttribute('infini_band_network_cidr');
  }

  // is_cps_offline_report_enabled - computed: true, optional: false, required: false
  public get isCpsOfflineReportEnabled() {
    return this.getBooleanAttribute('is_cps_offline_report_enabled');
  }

  // is_multi_rack_deployment - computed: true, optional: false, required: false
  public get isMultiRackDeployment() {
    return this.getBooleanAttribute('is_multi_rack_deployment');
  }

  // is_scheduling_policy_associated - computed: true, optional: false, required: false
  public get isSchedulingPolicyAssociated() {
    return this.getBooleanAttribute('is_scheduling_policy_associated');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_slo_status - computed: true, optional: false, required: false
  public get maintenanceSloStatus() {
    return this.getStringAttribute('maintenance_slo_status');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DatabaseExadataInfrastructureConfigureExascaleManagementMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // max_cpu_count - computed: true, optional: false, required: false
  public get maxCpuCount() {
    return this.getNumberAttribute('max_cpu_count');
  }

  // max_data_storage_in_tbs - computed: true, optional: false, required: false
  public get maxDataStorageInTbs() {
    return this.getNumberAttribute('max_data_storage_in_tbs');
  }

  // max_db_node_storage_in_gbs - computed: true, optional: false, required: false
  public get maxDbNodeStorageInGbs() {
    return this.getNumberAttribute('max_db_node_storage_in_gbs');
  }

  // max_memory_in_gbs - computed: true, optional: false, required: false
  public get maxMemoryInGbs() {
    return this.getNumberAttribute('max_memory_in_gbs');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // monthly_db_server_version - computed: true, optional: false, required: false
  public get monthlyDbServerVersion() {
    return this.getStringAttribute('monthly_db_server_version');
  }

  // multi_rack_configuration_file - computed: true, optional: false, required: false
  public get multiRackConfigurationFile() {
    return this.getStringAttribute('multi_rack_configuration_file');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // network_bonding_mode_details - computed: true, optional: false, required: false
  private _networkBondingModeDetails = new DatabaseExadataInfrastructureConfigureExascaleManagementNetworkBondingModeDetailsList(this, "network_bonding_mode_details", false);
  public get networkBondingModeDetails() {
    return this._networkBondingModeDetails;
  }

  // ntp_server - computed: true, optional: false, required: false
  public get ntpServer() {
    return this.getListAttribute('ntp_server');
  }

  // rack_serial_number - computed: true, optional: false, required: false
  public get rackSerialNumber() {
    return this.getStringAttribute('rack_serial_number');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_count - computed: true, optional: false, required: false
  public get storageCount() {
    return this.getNumberAttribute('storage_count');
  }

  // storage_server_version - computed: true, optional: false, required: false
  public get storageServerVersion() {
    return this.getStringAttribute('storage_server_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // total_storage_in_gbs - computed: false, optional: false, required: true
  private _totalStorageInGbs?: number; 
  public get totalStorageInGbs() {
    return this.getNumberAttribute('total_storage_in_gbs');
  }
  public set totalStorageInGbs(value: number) {
    this._totalStorageInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalStorageInGbsInput() {
    return this._totalStorageInGbs;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseExadataInfrastructureConfigureExascaleManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseExadataInfrastructureConfigureExascaleManagementTimeouts) {
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
      exadata_infrastructure_id: cdktf.stringToTerraform(this._exadataInfrastructureId),
      id: cdktf.stringToTerraform(this._id),
      total_storage_in_gbs: cdktf.numberToTerraform(this._totalStorageInGbs),
      timeouts: databaseExadataInfrastructureConfigureExascaleManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      total_storage_in_gbs: {
        value: cdktf.numberToHclTerraform(this._totalStorageInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: databaseExadataInfrastructureConfigureExascaleManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseExadataInfrastructureConfigureExascaleManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
