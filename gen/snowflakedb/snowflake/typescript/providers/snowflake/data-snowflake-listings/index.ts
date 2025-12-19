// https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeListingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings#id DataSnowflakeListings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings#like DataSnowflakeListings#like}
  */
  readonly like?: string;
  /**
  * Filters the output with **case-sensitive** characters indicating the beginning of the object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings#starts_with DataSnowflakeListings#starts_with}
  */
  readonly startsWith?: string;
  /**
  * (Default: `true`) Runs DESC LISTING for each listing returned by SHOW LISTINGS. The output of describe is saved to the description field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings#with_describe DataSnowflakeListings#with_describe}
  */
  readonly withDescribe?: boolean | cdktf.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings#limit DataSnowflakeListings#limit}
  */
  readonly limit?: DataSnowflakeListingsLimit;
}
export interface DataSnowflakeListingsListingsDescribeOutput {
}

export function dataSnowflakeListingsListingsDescribeOutputToTerraform(struct?: DataSnowflakeListingsListingsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeListingsListingsDescribeOutputToHclTerraform(struct?: DataSnowflakeListingsListingsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeListingsListingsDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeListingsListingsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeListingsListingsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_package - computed: true, optional: false, required: false
  public get applicationPackage() {
    return this.getStringAttribute('application_package');
  }

  // approver_contact - computed: true, optional: false, required: false
  public get approverContact() {
    return this.getStringAttribute('approver_contact');
  }

  // business_needs - computed: true, optional: false, required: false
  public get businessNeeds() {
    return this.getStringAttribute('business_needs');
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getStringAttribute('categories');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // customized_contact_info - computed: true, optional: false, required: false
  public get customizedContactInfo() {
    return this.getStringAttribute('customized_contact_info');
  }

  // data_attributes - computed: true, optional: false, required: false
  public get dataAttributes() {
    return this.getStringAttribute('data_attributes');
  }

  // data_dictionary - computed: true, optional: false, required: false
  public get dataDictionary() {
    return this.getStringAttribute('data_dictionary');
  }

  // data_preview - computed: true, optional: false, required: false
  public get dataPreview() {
    return this.getStringAttribute('data_preview');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribution - computed: true, optional: false, required: false
  public get distribution() {
    return this.getStringAttribute('distribution');
  }

  // global_name - computed: true, optional: false, required: false
  public get globalName() {
    return this.getStringAttribute('global_name');
  }

  // is_application - computed: true, optional: false, required: false
  public get isApplication() {
    return this.getBooleanAttribute('is_application');
  }

  // is_by_request - computed: true, optional: false, required: false
  public get isByRequest() {
    return this.getBooleanAttribute('is_by_request');
  }

  // is_limited_trial - computed: true, optional: false, required: false
  public get isLimitedTrial() {
    return this.getBooleanAttribute('is_limited_trial');
  }

  // is_monetized - computed: true, optional: false, required: false
  public get isMonetized() {
    return this.getBooleanAttribute('is_monetized');
  }

  // is_mountless_queryable - computed: true, optional: false, required: false
  public get isMountlessQueryable() {
    return this.getBooleanAttribute('is_mountless_queryable');
  }

  // is_share - computed: true, optional: false, required: false
  public get isShare() {
    return this.getBooleanAttribute('is_share');
  }

  // is_targeted - computed: true, optional: false, required: false
  public get isTargeted() {
    return this.getBooleanAttribute('is_targeted');
  }

  // last_committed_version_alias - computed: true, optional: false, required: false
  public get lastCommittedVersionAlias() {
    return this.getStringAttribute('last_committed_version_alias');
  }

  // last_committed_version_name - computed: true, optional: false, required: false
  public get lastCommittedVersionName() {
    return this.getStringAttribute('last_committed_version_name');
  }

  // last_committed_version_uri - computed: true, optional: false, required: false
  public get lastCommittedVersionUri() {
    return this.getStringAttribute('last_committed_version_uri');
  }

  // legacy_uniform_listing_locators - computed: true, optional: false, required: false
  public get legacyUniformListingLocators() {
    return this.getStringAttribute('legacy_uniform_listing_locators');
  }

  // limited_trial_plan - computed: true, optional: false, required: false
  public get limitedTrialPlan() {
    return this.getStringAttribute('limited_trial_plan');
  }

  // listing_terms - computed: true, optional: false, required: false
  public get listingTerms() {
    return this.getStringAttribute('listing_terms');
  }

  // live_version_uri - computed: true, optional: false, required: false
  public get liveVersionUri() {
    return this.getStringAttribute('live_version_uri');
  }

  // manifest_yaml - computed: true, optional: false, required: false
  public get manifestYaml() {
    return this.getStringAttribute('manifest_yaml');
  }

  // monetization_display_order - computed: true, optional: false, required: false
  public get monetizationDisplayOrder() {
    return this.getStringAttribute('monetization_display_order');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_profile_name - computed: true, optional: false, required: false
  public get organizationProfileName() {
    return this.getStringAttribute('organization_profile_name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // published_on - computed: true, optional: false, required: false
  public get publishedOn() {
    return this.getStringAttribute('published_on');
  }

  // published_version_alias - computed: true, optional: false, required: false
  public get publishedVersionAlias() {
    return this.getStringAttribute('published_version_alias');
  }

  // published_version_name - computed: true, optional: false, required: false
  public get publishedVersionName() {
    return this.getStringAttribute('published_version_name');
  }

  // published_version_uri - computed: true, optional: false, required: false
  public get publishedVersionUri() {
    return this.getStringAttribute('published_version_uri');
  }

  // refresh_schedule - computed: true, optional: false, required: false
  public get refreshSchedule() {
    return this.getStringAttribute('refresh_schedule');
  }

  // refresh_type - computed: true, optional: false, required: false
  public get refreshType() {
    return this.getStringAttribute('refresh_type');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getStringAttribute('regions');
  }

  // rejection_reason - computed: true, optional: false, required: false
  public get rejectionReason() {
    return this.getStringAttribute('rejection_reason');
  }

  // request_approval_type - computed: true, optional: false, required: false
  public get requestApprovalType() {
    return this.getStringAttribute('request_approval_type');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getStringAttribute('resources');
  }

  // retried_on - computed: true, optional: false, required: false
  public get retriedOn() {
    return this.getStringAttribute('retried_on');
  }

  // review_state - computed: true, optional: false, required: false
  public get reviewState() {
    return this.getStringAttribute('review_state');
  }

  // revisions - computed: true, optional: false, required: false
  public get revisions() {
    return this.getStringAttribute('revisions');
  }

  // scheduled_drop_time - computed: true, optional: false, required: false
  public get scheduledDropTime() {
    return this.getStringAttribute('scheduled_drop_time');
  }

  // share - computed: true, optional: false, required: false
  public get share() {
    return this.getStringAttribute('share');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // support_contact - computed: true, optional: false, required: false
  public get supportContact() {
    return this.getStringAttribute('support_contact');
  }

  // target_accounts - computed: true, optional: false, required: false
  public get targetAccounts() {
    return this.getStringAttribute('target_accounts');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // trial_details - computed: true, optional: false, required: false
  public get trialDetails() {
    return this.getStringAttribute('trial_details');
  }

  // uniform_listing_locator - computed: true, optional: false, required: false
  public get uniformListingLocator() {
    return this.getStringAttribute('uniform_listing_locator');
  }

  // unpublished_by_admin_reasons - computed: true, optional: false, required: false
  public get unpublishedByAdminReasons() {
    return this.getStringAttribute('unpublished_by_admin_reasons');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }

  // usage_examples - computed: true, optional: false, required: false
  public get usageExamples() {
    return this.getStringAttribute('usage_examples');
  }
}

export class DataSnowflakeListingsListingsDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeListingsListingsDescribeOutputOutputReference {
    return new DataSnowflakeListingsListingsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeListingsListingsShowOutput {
}

export function dataSnowflakeListingsListingsShowOutputToTerraform(struct?: DataSnowflakeListingsListingsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeListingsListingsShowOutputToHclTerraform(struct?: DataSnowflakeListingsListingsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeListingsListingsShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeListingsListingsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeListingsListingsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // detailed_target_accounts - computed: true, optional: false, required: false
  public get detailedTargetAccounts() {
    return this.getStringAttribute('detailed_target_accounts');
  }

  // distribution - computed: true, optional: false, required: false
  public get distribution() {
    return this.getStringAttribute('distribution');
  }

  // global_name - computed: true, optional: false, required: false
  public get globalName() {
    return this.getStringAttribute('global_name');
  }

  // is_application - computed: true, optional: false, required: false
  public get isApplication() {
    return this.getBooleanAttribute('is_application');
  }

  // is_by_request - computed: true, optional: false, required: false
  public get isByRequest() {
    return this.getBooleanAttribute('is_by_request');
  }

  // is_limited_trial - computed: true, optional: false, required: false
  public get isLimitedTrial() {
    return this.getBooleanAttribute('is_limited_trial');
  }

  // is_monetized - computed: true, optional: false, required: false
  public get isMonetized() {
    return this.getBooleanAttribute('is_monetized');
  }

  // is_mountless_queryable - computed: true, optional: false, required: false
  public get isMountlessQueryable() {
    return this.getBooleanAttribute('is_mountless_queryable');
  }

  // is_targeted - computed: true, optional: false, required: false
  public get isTargeted() {
    return this.getBooleanAttribute('is_targeted');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_profile_name - computed: true, optional: false, required: false
  public get organizationProfileName() {
    return this.getStringAttribute('organization_profile_name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // published_on - computed: true, optional: false, required: false
  public get publishedOn() {
    return this.getStringAttribute('published_on');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getStringAttribute('regions');
  }

  // rejected_on - computed: true, optional: false, required: false
  public get rejectedOn() {
    return this.getStringAttribute('rejected_on');
  }

  // review_state - computed: true, optional: false, required: false
  public get reviewState() {
    return this.getStringAttribute('review_state');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // target_accounts - computed: true, optional: false, required: false
  public get targetAccounts() {
    return this.getStringAttribute('target_accounts');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // uniform_listing_locator - computed: true, optional: false, required: false
  public get uniformListingLocator() {
    return this.getStringAttribute('uniform_listing_locator');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }
}

export class DataSnowflakeListingsListingsShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeListingsListingsShowOutputOutputReference {
    return new DataSnowflakeListingsListingsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeListingsListings {
}

export function dataSnowflakeListingsListingsToTerraform(struct?: DataSnowflakeListingsListings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeListingsListingsToHclTerraform(struct?: DataSnowflakeListingsListings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeListingsListingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeListingsListings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeListingsListings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeListingsListingsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeListingsListingsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeListingsListingsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeListingsListingsOutputReference {
    return new DataSnowflakeListingsListingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeListingsLimit {
  /**
  * Specifies a **case-sensitive** pattern that is used to match object name. After the first match, the limit on the number of rows will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings#from DataSnowflakeListings#from}
  */
  readonly from?: string;
  /**
  * The maximum number of rows to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings#rows DataSnowflakeListings#rows}
  */
  readonly rows: number;
}

export function dataSnowflakeListingsLimitToTerraform(struct?: DataSnowflakeListingsLimitOutputReference | DataSnowflakeListingsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    rows: cdktf.numberToTerraform(struct!.rows),
  }
}


export function dataSnowflakeListingsLimitToHclTerraform(struct?: DataSnowflakeListingsLimitOutputReference | DataSnowflakeListingsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rows: {
      value: cdktf.numberToHclTerraform(struct!.rows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeListingsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeListingsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._rows !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeListingsLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._rows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._rows = value.rows;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // rows - computed: false, optional: false, required: true
  private _rows?: number; 
  public get rows() {
    return this.getNumberAttribute('rows');
  }
  public set rows(value: number) {
    this._rows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings snowflake_listings}
*/
export class DataSnowflakeListings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_listings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeListings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeListings to import
  * @param importFromId The id of the existing DataSnowflakeListings that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeListings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_listings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.12.0/docs/data-sources/listings snowflake_listings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeListingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeListingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_listings',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
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
    this._like = config.like;
    this._startsWith = config.startsWith;
    this._withDescribe = config.withDescribe;
    this._limit.internalValue = config.limit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // like - computed: false, optional: true, required: false
  private _like?: string; 
  public get like() {
    return this.getStringAttribute('like');
  }
  public set like(value: string) {
    this._like = value;
  }
  public resetLike() {
    this._like = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeInput() {
    return this._like;
  }

  // listings - computed: true, optional: false, required: false
  private _listings = new DataSnowflakeListingsListingsList(this, "listings", false);
  public get listings() {
    return this._listings;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }

  // with_describe - computed: false, optional: true, required: false
  private _withDescribe?: boolean | cdktf.IResolvable; 
  public get withDescribe() {
    return this.getBooleanAttribute('with_describe');
  }
  public set withDescribe(value: boolean | cdktf.IResolvable) {
    this._withDescribe = value;
  }
  public resetWithDescribe() {
    this._withDescribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDescribeInput() {
    return this._withDescribe;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new DataSnowflakeListingsLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DataSnowflakeListingsLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      like: cdktf.stringToTerraform(this._like),
      starts_with: cdktf.stringToTerraform(this._startsWith),
      with_describe: cdktf.booleanToTerraform(this._withDescribe),
      limit: dataSnowflakeListingsLimitToTerraform(this._limit.internalValue),
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
      like: {
        value: cdktf.stringToHclTerraform(this._like),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starts_with: {
        value: cdktf.stringToHclTerraform(this._startsWith),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_describe: {
        value: cdktf.booleanToHclTerraform(this._withDescribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: dataSnowflakeListingsLimitToHclTerraform(this._limit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeListingsLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
