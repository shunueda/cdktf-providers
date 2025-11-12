// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/project#id DataSamsungcloudplatformProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataSamsungcloudplatformProjectBudget {
}

export function dataSamsungcloudplatformProjectBudgetToTerraform(struct?: DataSamsungcloudplatformProjectBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProjectBudgetToHclTerraform(struct?: DataSamsungcloudplatformProjectBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProjectBudgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProjectBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProjectBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_thresholds - computed: true, optional: false, required: false
  public get alarmThresholds() {
    return this.getNumberListAttribute('alarm_thresholds');
  }

  // budget_amount - computed: true, optional: false, required: false
  public get budgetAmount() {
    return this.getNumberAttribute('budget_amount');
  }

  // create_prevent_threshold - computed: true, optional: false, required: false
  public get createPreventThreshold() {
    return this.getNumberAttribute('create_prevent_threshold');
  }

  // is_budget_used - computed: true, optional: false, required: false
  public get isBudgetUsed() {
    return this.getBooleanAttribute('is_budget_used');
  }

  // is_create_prevent - computed: true, optional: false, required: false
  public get isCreatePrevent() {
    return this.getBooleanAttribute('is_create_prevent');
  }

  // request_guide - computed: true, optional: false, required: false
  public get requestGuide() {
    return this.getStringAttribute('request_guide');
  }
}

export class DataSamsungcloudplatformProjectBudgetList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProjectBudgetOutputReference {
    return new DataSamsungcloudplatformProjectBudgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformProjectBusinessCategoryUsers {
}

export function dataSamsungcloudplatformProjectBusinessCategoryUsersToTerraform(struct?: DataSamsungcloudplatformProjectBusinessCategoryUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProjectBusinessCategoryUsersToHclTerraform(struct?: DataSamsungcloudplatformProjectBusinessCategoryUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProjectBusinessCategoryUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProjectBusinessCategoryUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProjectBusinessCategoryUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // business_category_user_email - computed: true, optional: false, required: false
  public get businessCategoryUserEmail() {
    return this.getStringAttribute('business_category_user_email');
  }

  // business_category_user_name - computed: true, optional: false, required: false
  public get businessCategoryUserName() {
    return this.getStringAttribute('business_category_user_name');
  }
}

export class DataSamsungcloudplatformProjectBusinessCategoryUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProjectBusinessCategoryUsersOutputReference {
    return new DataSamsungcloudplatformProjectBusinessCategoryUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformProjectServiceZonesAvailabilityZones {
}

export function dataSamsungcloudplatformProjectServiceZonesAvailabilityZonesToTerraform(struct?: DataSamsungcloudplatformProjectServiceZonesAvailabilityZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProjectServiceZonesAvailabilityZonesToHclTerraform(struct?: DataSamsungcloudplatformProjectServiceZonesAvailabilityZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProjectServiceZonesAvailabilityZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProjectServiceZonesAvailabilityZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProjectServiceZonesAvailabilityZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
}

export class DataSamsungcloudplatformProjectServiceZonesAvailabilityZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProjectServiceZonesAvailabilityZonesOutputReference {
    return new DataSamsungcloudplatformProjectServiceZonesAvailabilityZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformProjectServiceZones {
}

export function dataSamsungcloudplatformProjectServiceZonesToTerraform(struct?: DataSamsungcloudplatformProjectServiceZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProjectServiceZonesToHclTerraform(struct?: DataSamsungcloudplatformProjectServiceZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProjectServiceZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProjectServiceZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProjectServiceZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  private _availabilityZones = new DataSamsungcloudplatformProjectServiceZonesAvailabilityZonesList(this, "availability_zones", false);
  public get availabilityZones() {
    return this._availabilityZones;
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // is_multi_availability_zone - computed: true, optional: false, required: false
  public get isMultiAvailabilityZone() {
    return this.getBooleanAttribute('is_multi_availability_zone');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // service_zone_location - computed: true, optional: false, required: false
  public get serviceZoneLocation() {
    return this.getStringAttribute('service_zone_location');
  }

  // service_zone_name - computed: true, optional: false, required: false
  public get serviceZoneName() {
    return this.getStringAttribute('service_zone_name');
  }
}

export class DataSamsungcloudplatformProjectServiceZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProjectServiceZonesOutputReference {
    return new DataSamsungcloudplatformProjectServiceZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/project samsungcloudplatform_project}
*/
export class DataSamsungcloudplatformProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformProject to import
  * @param importFromId The id of the existing DataSamsungcloudplatformProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/project samsungcloudplatform_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_project',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_admin_email - computed: true, optional: false, required: false
  public get accountAdminEmail() {
    return this.getStringAttribute('account_admin_email');
  }

  // account_admin_name - computed: true, optional: false, required: false
  public get accountAdminName() {
    return this.getStringAttribute('account_admin_name');
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_type - computed: true, optional: false, required: false
  public get accountType() {
    return this.getStringAttribute('account_type');
  }

  // billing_organization_code - computed: true, optional: false, required: false
  public get billingOrganizationCode() {
    return this.getStringAttribute('billing_organization_code');
  }

  // budget - computed: true, optional: false, required: false
  private _budget = new DataSamsungcloudplatformProjectBudgetList(this, "budget", true);
  public get budget() {
    return this._budget;
  }

  // business_category_id - computed: true, optional: false, required: false
  public get businessCategoryId() {
    return this.getStringAttribute('business_category_id');
  }

  // business_category_name - computed: true, optional: false, required: false
  public get businessCategoryName() {
    return this.getStringAttribute('business_category_name');
  }

  // business_category_users - computed: true, optional: false, required: false
  private _businessCategoryUsers = new DataSamsungcloudplatformProjectBusinessCategoryUsersList(this, "business_category_users", false);
  public get businessCategoryUsers() {
    return this._businessCategoryUsers;
  }

  // business_group_id - computed: true, optional: false, required: false
  public get businessGroupId() {
    return this.getStringAttribute('business_group_id');
  }

  // company_id - computed: true, optional: false, required: false
  public get companyId() {
    return this.getStringAttribute('company_id');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // current_month_bill_amount - computed: true, optional: false, required: false
  public get currentMonthBillAmount() {
    return this.getNumberAttribute('current_month_bill_amount');
  }

  // default_zone_id - computed: true, optional: false, required: false
  public get defaultZoneId() {
    return this.getStringAttribute('default_zone_id');
  }

  // estimated_used_amount - computed: true, optional: false, required: false
  public get estimatedUsedAmount() {
    return this.getNumberAttribute('estimated_used_amount');
  }

  // free_trial_expired_date - computed: true, optional: false, required: false
  public get freeTrialExpiredDate() {
    return this.getStringAttribute('free_trial_expired_date');
  }

  // free_trial_expired_dday - computed: true, optional: false, required: false
  public get freeTrialExpiredDday() {
    return this.getStringAttribute('free_trial_expired_dday');
  }

  // free_trial_start_date - computed: true, optional: false, required: false
  public get freeTrialStartDate() {
    return this.getStringAttribute('free_trial_start_date');
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

  // igw_create_yn - computed: true, optional: false, required: false
  public get igwCreateYn() {
    return this.getStringAttribute('igw_create_yn');
  }

  // last_month_bill_amount - computed: true, optional: false, required: false
  public get lastMonthBillAmount() {
    return this.getNumberAttribute('last_month_bill_amount');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_by_email - computed: true, optional: false, required: false
  public get modifiedByEmail() {
    return this.getStringAttribute('modified_by_email');
  }

  // modified_by_name - computed: true, optional: false, required: false
  public get modifiedByName() {
    return this.getStringAttribute('modified_by_name');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // price_system_year - computed: true, optional: false, required: false
  public get priceSystemYear() {
    return this.getStringAttribute('price_system_year');
  }

  // project_description - computed: true, optional: false, required: false
  public get projectDescription() {
    return this.getStringAttribute('project_description');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_member_count - computed: true, optional: false, required: false
  public get projectMemberCount() {
    return this.getNumberAttribute('project_member_count');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_resource_count - computed: true, optional: false, required: false
  public get projectResourceCount() {
    return this.getNumberAttribute('project_resource_count');
  }

  // project_service_count - computed: true, optional: false, required: false
  public get projectServiceCount() {
    return this.getNumberAttribute('project_service_count');
  }

  // project_state - computed: true, optional: false, required: false
  public get projectState() {
    return this.getStringAttribute('project_state');
  }

  // service_zones - computed: true, optional: false, required: false
  private _serviceZones = new DataSamsungcloudplatformProjectServiceZonesList(this, "service_zones", false);
  public get serviceZones() {
    return this._serviceZones;
  }

  // vpc_version - computed: true, optional: false, required: false
  public get vpcVersion() {
    return this.getStringAttribute('vpc_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
