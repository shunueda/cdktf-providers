// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseExadataInfrastructureComputeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#activation_file DatabaseExadataInfrastructureCompute#activation_file}
  */
  readonly activationFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#additional_compute_count_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_count_compute_managed_resource}
  */
  readonly additionalComputeCountComputeManagedResource?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#additional_compute_system_model_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_system_model_compute_managed_resource}
  */
  readonly additionalComputeSystemModelComputeManagedResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#exadata_infrastructure_id DatabaseExadataInfrastructureCompute#exadata_infrastructure_id}
  */
  readonly exadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#id DatabaseExadataInfrastructureCompute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#timeouts DatabaseExadataInfrastructureCompute#timeouts}
  */
  readonly timeouts?: DatabaseExadataInfrastructureComputeTimeouts;
}
export interface DatabaseExadataInfrastructureComputeContacts {
}

export function databaseExadataInfrastructureComputeContactsToTerraform(struct?: DatabaseExadataInfrastructureComputeContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureComputeContactsToHclTerraform(struct?: DatabaseExadataInfrastructureComputeContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureComputeContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureComputeContacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureComputeContacts | undefined) {
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

export class DatabaseExadataInfrastructureComputeContactsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureComputeContactsOutputReference {
    return new DatabaseExadataInfrastructureComputeContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek {
}

export function databaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekToTerraform(struct?: DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek | undefined) {
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

export class DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference {
    return new DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureComputeMaintenanceWindowMonths {
}

export function databaseExadataInfrastructureComputeMaintenanceWindowMonthsToTerraform(struct?: DatabaseExadataInfrastructureComputeMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureComputeMaintenanceWindowMonthsToHclTerraform(struct?: DatabaseExadataInfrastructureComputeMaintenanceWindowMonths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureComputeMaintenanceWindowMonths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureComputeMaintenanceWindowMonths | undefined) {
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

export class DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference {
    return new DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureComputeMaintenanceWindow {
}

export function databaseExadataInfrastructureComputeMaintenanceWindowToTerraform(struct?: DatabaseExadataInfrastructureComputeMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadataInfrastructureComputeMaintenanceWindowToHclTerraform(struct?: DatabaseExadataInfrastructureComputeMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureComputeMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureComputeMaintenanceWindow | undefined) {
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
  private _daysOfWeek = new DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
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
  private _months = new DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList(this, "months", false);
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

  // weeks_of_month - computed: true, optional: false, required: false
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
}

export class DatabaseExadataInfrastructureComputeMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference {
    return new DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureComputeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#create DatabaseExadataInfrastructureCompute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#delete DatabaseExadataInfrastructureCompute#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#update DatabaseExadataInfrastructureCompute#update}
  */
  readonly update?: string;
}

export function databaseExadataInfrastructureComputeTimeoutsToTerraform(struct?: DatabaseExadataInfrastructureComputeTimeouts | cdktf.IResolvable): any {
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


export function databaseExadataInfrastructureComputeTimeoutsToHclTerraform(struct?: DatabaseExadataInfrastructureComputeTimeouts | cdktf.IResolvable): any {
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

export class DatabaseExadataInfrastructureComputeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseExadataInfrastructureComputeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseExadataInfrastructureComputeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute oci_database_exadata_infrastructure_compute}
*/
export class DatabaseExadataInfrastructureCompute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exadata_infrastructure_compute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseExadataInfrastructureCompute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseExadataInfrastructureCompute to import
  * @param importFromId The id of the existing DatabaseExadataInfrastructureCompute that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseExadataInfrastructureCompute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exadata_infrastructure_compute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_exadata_infrastructure_compute oci_database_exadata_infrastructure_compute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseExadataInfrastructureComputeConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseExadataInfrastructureComputeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadata_infrastructure_compute',
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
    this._activationFile = config.activationFile;
    this._additionalComputeCountComputeManagedResource = config.additionalComputeCountComputeManagedResource;
    this._additionalComputeSystemModelComputeManagedResource = config.additionalComputeSystemModelComputeManagedResource;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated_storage_count - computed: true, optional: false, required: false
  public get activatedStorageCount() {
    return this.getNumberAttribute('activated_storage_count');
  }

  // activation_file - computed: false, optional: true, required: false
  private _activationFile?: string; 
  public get activationFile() {
    return this.getStringAttribute('activation_file');
  }
  public set activationFile(value: string) {
    this._activationFile = value;
  }
  public resetActivationFile() {
    this._activationFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationFileInput() {
    return this._activationFile;
  }

  // additional_compute_count - computed: true, optional: false, required: false
  public get additionalComputeCount() {
    return this.getNumberAttribute('additional_compute_count');
  }

  // additional_compute_count_compute_managed_resource - computed: false, optional: true, required: false
  private _additionalComputeCountComputeManagedResource?: number; 
  public get additionalComputeCountComputeManagedResource() {
    return this.getNumberAttribute('additional_compute_count_compute_managed_resource');
  }
  public set additionalComputeCountComputeManagedResource(value: number) {
    this._additionalComputeCountComputeManagedResource = value;
  }
  public resetAdditionalComputeCountComputeManagedResource() {
    this._additionalComputeCountComputeManagedResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalComputeCountComputeManagedResourceInput() {
    return this._additionalComputeCountComputeManagedResource;
  }

  // additional_compute_system_model - computed: true, optional: false, required: false
  public get additionalComputeSystemModel() {
    return this.getStringAttribute('additional_compute_system_model');
  }

  // additional_compute_system_model_compute_managed_resource - computed: false, optional: true, required: false
  private _additionalComputeSystemModelComputeManagedResource?: string; 
  public get additionalComputeSystemModelComputeManagedResource() {
    return this.getStringAttribute('additional_compute_system_model_compute_managed_resource');
  }
  public set additionalComputeSystemModelComputeManagedResource(value: string) {
    this._additionalComputeSystemModelComputeManagedResource = value;
  }
  public resetAdditionalComputeSystemModelComputeManagedResource() {
    this._additionalComputeSystemModelComputeManagedResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalComputeSystemModelComputeManagedResourceInput() {
    return this._additionalComputeSystemModelComputeManagedResource;
  }

  // additional_storage_count - computed: true, optional: false, required: false
  public get additionalStorageCount() {
    return this.getNumberAttribute('additional_storage_count');
  }

  // admin_network_cidr - computed: true, optional: false, required: false
  public get adminNetworkCidr() {
    return this.getStringAttribute('admin_network_cidr');
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
  private _contacts = new DatabaseExadataInfrastructureComputeContactsList(this, "contacts", false);
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

  // create_async - computed: true, optional: false, required: false
  public get createAsync() {
    return this.getBooleanAttribute('create_async');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_slo_status - computed: true, optional: false, required: false
  public get maintenanceSloStatus() {
    return this.getStringAttribute('maintenance_slo_status');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DatabaseExadataInfrastructureComputeMaintenanceWindowList(this, "maintenance_window", false);
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

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // ntp_server - computed: true, optional: false, required: false
  public get ntpServer() {
    return this.getListAttribute('ntp_server');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseExadataInfrastructureComputeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseExadataInfrastructureComputeTimeouts) {
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
      activation_file: cdktf.stringToTerraform(this._activationFile),
      additional_compute_count_compute_managed_resource: cdktf.numberToTerraform(this._additionalComputeCountComputeManagedResource),
      additional_compute_system_model_compute_managed_resource: cdktf.stringToTerraform(this._additionalComputeSystemModelComputeManagedResource),
      exadata_infrastructure_id: cdktf.stringToTerraform(this._exadataInfrastructureId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: databaseExadataInfrastructureComputeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_file: {
        value: cdktf.stringToHclTerraform(this._activationFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_compute_count_compute_managed_resource: {
        value: cdktf.numberToHclTerraform(this._additionalComputeCountComputeManagedResource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      additional_compute_system_model_compute_managed_resource: {
        value: cdktf.stringToHclTerraform(this._additionalComputeSystemModelComputeManagedResource),
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
      timeouts: {
        value: databaseExadataInfrastructureComputeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseExadataInfrastructureComputeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
