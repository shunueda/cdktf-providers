// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#account_name DataSamsungcloudplatformProjects#account_name}
  */
  readonly accountName?: string;
  /**
  * Billing year and month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#bill_year_month DataSamsungcloudplatformProjects#bill_year_month}
  */
  readonly billYearMonth?: string;
  /**
  * Creator's email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#created_by_email DataSamsungcloudplatformProjects#created_by_email}
  */
  readonly createdByEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#id DataSamsungcloudplatformProjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to provide billing information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#is_billing_info_demand DataSamsungcloudplatformProjects#is_billing_info_demand}
  */
  readonly isBillingInfoDemand?: boolean | cdktf.IResolvable;
  /**
  * Whether to provide resource information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#is_resource_info_demand DataSamsungcloudplatformProjects#is_resource_info_demand}
  */
  readonly isResourceInfoDemand?: boolean | cdktf.IResolvable;
  /**
  * Whether to provide user information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#is_user_info_demand DataSamsungcloudplatformProjects#is_user_info_demand}
  */
  readonly isUserInfoDemand?: boolean | cdktf.IResolvable;
  /**
  * Project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#project_name DataSamsungcloudplatformProjects#project_name}
  */
  readonly projectName?: string;
}
export interface DataSamsungcloudplatformProjectsContentsBusinessCategoryUsers {
}

export function dataSamsungcloudplatformProjectsContentsBusinessCategoryUsersToTerraform(struct?: DataSamsungcloudplatformProjectsContentsBusinessCategoryUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProjectsContentsBusinessCategoryUsersToHclTerraform(struct?: DataSamsungcloudplatformProjectsContentsBusinessCategoryUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProjectsContentsBusinessCategoryUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProjectsContentsBusinessCategoryUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProjectsContentsBusinessCategoryUsers | undefined) {
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

export class DataSamsungcloudplatformProjectsContentsBusinessCategoryUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProjectsContentsBusinessCategoryUsersOutputReference {
    return new DataSamsungcloudplatformProjectsContentsBusinessCategoryUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZones {
}

export function dataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZonesToTerraform(struct?: DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZonesToHclTerraform(struct?: DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZones | undefined) {
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

export class DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZonesOutputReference {
    return new DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformProjectsContentsServiceZones {
}

export function dataSamsungcloudplatformProjectsContentsServiceZonesToTerraform(struct?: DataSamsungcloudplatformProjectsContentsServiceZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProjectsContentsServiceZonesToHclTerraform(struct?: DataSamsungcloudplatformProjectsContentsServiceZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProjectsContentsServiceZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProjectsContentsServiceZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProjectsContentsServiceZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  private _availabilityZones = new DataSamsungcloudplatformProjectsContentsServiceZonesAvailabilityZonesList(this, "availability_zones", false);
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

export class DataSamsungcloudplatformProjectsContentsServiceZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProjectsContentsServiceZonesOutputReference {
    return new DataSamsungcloudplatformProjectsContentsServiceZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformProjectsContents {
}

export function dataSamsungcloudplatformProjectsContentsToTerraform(struct?: DataSamsungcloudplatformProjectsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProjectsContentsToHclTerraform(struct?: DataSamsungcloudplatformProjectsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProjectsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProjectsContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProjectsContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // business_category_id - computed: true, optional: false, required: false
  public get businessCategoryId() {
    return this.getStringAttribute('business_category_id');
  }

  // business_category_name - computed: true, optional: false, required: false
  public get businessCategoryName() {
    return this.getStringAttribute('business_category_name');
  }

  // business_category_users - computed: true, optional: false, required: false
  private _businessCategoryUsers = new DataSamsungcloudplatformProjectsContentsBusinessCategoryUsersList(this, "business_category_users", false);
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
  private _serviceZones = new DataSamsungcloudplatformProjectsContentsServiceZonesList(this, "service_zones", false);
  public get serviceZones() {
    return this._serviceZones;
  }

  // vpc_version - computed: true, optional: false, required: false
  public get vpcVersion() {
    return this.getStringAttribute('vpc_version');
  }
}

export class DataSamsungcloudplatformProjectsContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProjectsContentsOutputReference {
    return new DataSamsungcloudplatformProjectsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects samsungcloudplatform_projects}
*/
export class DataSamsungcloudplatformProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformProjects to import
  * @param importFromId The id of the existing DataSamsungcloudplatformProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/projects samsungcloudplatform_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_projects',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._billYearMonth = config.billYearMonth;
    this._createdByEmail = config.createdByEmail;
    this._id = config.id;
    this._isBillingInfoDemand = config.isBillingInfoDemand;
    this._isResourceInfoDemand = config.isResourceInfoDemand;
    this._isUserInfoDemand = config.isUserInfoDemand;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // bill_year_month - computed: false, optional: true, required: false
  private _billYearMonth?: string; 
  public get billYearMonth() {
    return this.getStringAttribute('bill_year_month');
  }
  public set billYearMonth(value: string) {
    this._billYearMonth = value;
  }
  public resetBillYearMonth() {
    this._billYearMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billYearMonthInput() {
    return this._billYearMonth;
  }

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformProjectsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }

  // created_by_email - computed: false, optional: true, required: false
  private _createdByEmail?: string; 
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }
  public set createdByEmail(value: string) {
    this._createdByEmail = value;
  }
  public resetCreatedByEmail() {
    this._createdByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByEmailInput() {
    return this._createdByEmail;
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

  // is_billing_info_demand - computed: false, optional: true, required: false
  private _isBillingInfoDemand?: boolean | cdktf.IResolvable; 
  public get isBillingInfoDemand() {
    return this.getBooleanAttribute('is_billing_info_demand');
  }
  public set isBillingInfoDemand(value: boolean | cdktf.IResolvable) {
    this._isBillingInfoDemand = value;
  }
  public resetIsBillingInfoDemand() {
    this._isBillingInfoDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBillingInfoDemandInput() {
    return this._isBillingInfoDemand;
  }

  // is_resource_info_demand - computed: false, optional: true, required: false
  private _isResourceInfoDemand?: boolean | cdktf.IResolvable; 
  public get isResourceInfoDemand() {
    return this.getBooleanAttribute('is_resource_info_demand');
  }
  public set isResourceInfoDemand(value: boolean | cdktf.IResolvable) {
    this._isResourceInfoDemand = value;
  }
  public resetIsResourceInfoDemand() {
    this._isResourceInfoDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResourceInfoDemandInput() {
    return this._isResourceInfoDemand;
  }

  // is_user_info_demand - computed: false, optional: true, required: false
  private _isUserInfoDemand?: boolean | cdktf.IResolvable; 
  public get isUserInfoDemand() {
    return this.getBooleanAttribute('is_user_info_demand');
  }
  public set isUserInfoDemand(value: boolean | cdktf.IResolvable) {
    this._isUserInfoDemand = value;
  }
  public resetIsUserInfoDemand() {
    this._isUserInfoDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUserInfoDemandInput() {
    return this._isUserInfoDemand;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      bill_year_month: cdktf.stringToTerraform(this._billYearMonth),
      created_by_email: cdktf.stringToTerraform(this._createdByEmail),
      id: cdktf.stringToTerraform(this._id),
      is_billing_info_demand: cdktf.booleanToTerraform(this._isBillingInfoDemand),
      is_resource_info_demand: cdktf.booleanToTerraform(this._isResourceInfoDemand),
      is_user_info_demand: cdktf.booleanToTerraform(this._isUserInfoDemand),
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bill_year_month: {
        value: cdktf.stringToHclTerraform(this._billYearMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by_email: {
        value: cdktf.stringToHclTerraform(this._createdByEmail),
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
      is_billing_info_demand: {
        value: cdktf.booleanToHclTerraform(this._isBillingInfoDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_resource_info_demand: {
        value: cdktf.booleanToHclTerraform(this._isResourceInfoDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_user_info_demand: {
        value: cdktf.booleanToHclTerraform(this._isUserInfoDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
