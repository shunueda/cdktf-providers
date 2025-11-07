// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RqlSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable heuristic search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#heuristic_search RqlSearch#heuristic_search}
  */
  readonly heuristicSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#id RqlSearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Limit results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#limit RqlSearch#limit}
  */
  readonly limit?: number;
  /**
  * The RQL search to perform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#query RqlSearch#query}
  */
  readonly query: string;
  /**
  * The search ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#search_id RqlSearch#search_id}
  */
  readonly searchId?: string;
  /**
  * The search type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#search_type RqlSearch#search_type}
  */
  readonly searchType?: string;
  /**
  * Skip search results in response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#skip_result RqlSearch#skip_result}
  */
  readonly skipResult?: boolean | cdktf.IResolvable;
  /**
  * time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#time_range RqlSearch#time_range}
  */
  readonly timeRange?: RqlSearchTimeRange;
}
export interface RqlSearchAssetDataMatchedSecurityIssues {
}

export function rqlSearchAssetDataMatchedSecurityIssuesToTerraform(struct?: RqlSearchAssetDataMatchedSecurityIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rqlSearchAssetDataMatchedSecurityIssuesToHclTerraform(struct?: RqlSearchAssetDataMatchedSecurityIssues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RqlSearchAssetDataMatchedSecurityIssuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchAssetDataMatchedSecurityIssues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchAssetDataMatchedSecurityIssues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class RqlSearchAssetDataMatchedSecurityIssuesList extends cdktf.ComplexList {

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
  public get(index: number): RqlSearchAssetDataMatchedSecurityIssuesOutputReference {
    return new RqlSearchAssetDataMatchedSecurityIssuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchAssetData {
}

export function rqlSearchAssetDataToTerraform(struct?: RqlSearchAssetData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rqlSearchAssetDataToHclTerraform(struct?: RqlSearchAssetData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RqlSearchAssetDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchAssetData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchAssetData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_category - computed: true, optional: false, required: false
  public get assetCategory() {
    return this.getStringAttribute('asset_category');
  }

  // asset_class - computed: true, optional: false, required: false
  public get assetClass() {
    return this.getStringAttribute('asset_class');
  }

  // asset_name - computed: true, optional: false, required: false
  public get assetName() {
    return this.getStringAttribute('asset_name');
  }

  // asset_type - computed: true, optional: false, required: false
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }

  // cloud_account_id - computed: true, optional: false, required: false
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }

  // cloud_account_name - computed: true, optional: false, required: false
  public get cloudAccountName() {
    return this.getStringAttribute('cloud_account_name');
  }

  // cloud_region - computed: true, optional: false, required: false
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }

  // cloud_service_name - computed: true, optional: false, required: false
  public get cloudServiceName() {
    return this.getStringAttribute('cloud_service_name');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // external_asset_id - computed: true, optional: false, required: false
  public get externalAssetId() {
    return this.getStringAttribute('external_asset_id');
  }

  // finding_count - computed: true, optional: false, required: false
  public get findingCount() {
    return this.getNumberAttribute('finding_count');
  }

  // finding_types_by_severity_order - computed: true, optional: false, required: false
  public get findingTypesBySeverityOrder() {
    return this.getListAttribute('finding_types_by_severity_order');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getNumberAttribute('last_modified_at');
  }

  // matched_security_issues - computed: true, optional: false, required: false
  private _matchedSecurityIssues = new RqlSearchAssetDataMatchedSecurityIssuesList(this, "matched_security_issues", false);
  public get matchedSecurityIssues() {
    return this._matchedSecurityIssues;
  }

  // matching_security_issues_count - computed: true, optional: false, required: false
  public get matchingSecurityIssuesCount() {
    return this.getNumberAttribute('matching_security_issues_count');
  }

  // total_security_issues_count - computed: true, optional: false, required: false
  public get totalSecurityIssuesCount() {
    return this.getNumberAttribute('total_security_issues_count');
  }

  // unified_asset_id - computed: true, optional: false, required: false
  public get unifiedAssetId() {
    return this.getStringAttribute('unified_asset_id');
  }
}

export class RqlSearchAssetDataList extends cdktf.ComplexList {

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
  public get(index: number): RqlSearchAssetDataOutputReference {
    return new RqlSearchAssetDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchConfigData {
}

export function rqlSearchConfigDataToTerraform(struct?: RqlSearchConfigData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rqlSearchConfigDataToHclTerraform(struct?: RqlSearchConfigData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RqlSearchConfigDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchConfigData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchConfigData | undefined) {
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

  // state_id - computed: true, optional: false, required: false
  public get stateId() {
    return this.getStringAttribute('state_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class RqlSearchConfigDataList extends cdktf.ComplexList {

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
  public get(index: number): RqlSearchConfigDataOutputReference {
    return new RqlSearchConfigDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchEventData {
}

export function rqlSearchEventDataToTerraform(struct?: RqlSearchEventData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rqlSearchEventDataToHclTerraform(struct?: RqlSearchEventData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RqlSearchEventDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchEventData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchEventData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // region_api_identifier - computed: true, optional: false, required: false
  public get regionApiIdentifier() {
    return this.getStringAttribute('region_api_identifier');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
}

export class RqlSearchEventDataList extends cdktf.ComplexList {

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
  public get(index: number): RqlSearchEventDataOutputReference {
    return new RqlSearchEventDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchIamDataExceptions {
}

export function rqlSearchIamDataExceptionsToTerraform(struct?: RqlSearchIamDataExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rqlSearchIamDataExceptionsToHclTerraform(struct?: RqlSearchIamDataExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RqlSearchIamDataExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchIamDataExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchIamDataExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_code - computed: true, optional: false, required: false
  public get messageCode() {
    return this.getStringAttribute('message_code');
  }
}

export class RqlSearchIamDataExceptionsList extends cdktf.ComplexList {

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
  public get(index: number): RqlSearchIamDataExceptionsOutputReference {
    return new RqlSearchIamDataExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchIamData {
}

export function rqlSearchIamDataToTerraform(struct?: RqlSearchIamData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rqlSearchIamDataToHclTerraform(struct?: RqlSearchIamData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RqlSearchIamDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchIamData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchIamData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accessed_resources_count - computed: true, optional: false, required: false
  public get accessedResourcesCount() {
    return this.getNumberAttribute('accessed_resources_count');
  }

  // dest_cloud_account - computed: true, optional: false, required: false
  public get destCloudAccount() {
    return this.getStringAttribute('dest_cloud_account');
  }

  // dest_cloud_region - computed: true, optional: false, required: false
  public get destCloudRegion() {
    return this.getStringAttribute('dest_cloud_region');
  }

  // dest_cloud_resource_rrn - computed: true, optional: false, required: false
  public get destCloudResourceRrn() {
    return this.getStringAttribute('dest_cloud_resource_rrn');
  }

  // dest_cloud_service_name - computed: true, optional: false, required: false
  public get destCloudServiceName() {
    return this.getStringAttribute('dest_cloud_service_name');
  }

  // dest_cloud_type - computed: true, optional: false, required: false
  public get destCloudType() {
    return this.getStringAttribute('dest_cloud_type');
  }

  // dest_resource_id - computed: true, optional: false, required: false
  public get destResourceId() {
    return this.getStringAttribute('dest_resource_id');
  }

  // dest_resource_name - computed: true, optional: false, required: false
  public get destResourceName() {
    return this.getStringAttribute('dest_resource_name');
  }

  // dest_resource_type - computed: true, optional: false, required: false
  public get destResourceType() {
    return this.getStringAttribute('dest_resource_type');
  }

  // effective_action_name - computed: true, optional: false, required: false
  public get effectiveActionName() {
    return this.getStringAttribute('effective_action_name');
  }

  // exceptions - computed: true, optional: false, required: false
  private _exceptions = new RqlSearchIamDataExceptionsList(this, "exceptions", false);
  public get exceptions() {
    return this._exceptions;
  }

  // granted_by_cloud_entity_id - computed: true, optional: false, required: false
  public get grantedByCloudEntityId() {
    return this.getStringAttribute('granted_by_cloud_entity_id');
  }

  // granted_by_cloud_entity_name - computed: true, optional: false, required: false
  public get grantedByCloudEntityName() {
    return this.getStringAttribute('granted_by_cloud_entity_name');
  }

  // granted_by_cloud_entity_rrn - computed: true, optional: false, required: false
  public get grantedByCloudEntityRrn() {
    return this.getStringAttribute('granted_by_cloud_entity_rrn');
  }

  // granted_by_cloud_entity_type - computed: true, optional: false, required: false
  public get grantedByCloudEntityType() {
    return this.getStringAttribute('granted_by_cloud_entity_type');
  }

  // granted_by_cloud_policy_id - computed: true, optional: false, required: false
  public get grantedByCloudPolicyId() {
    return this.getStringAttribute('granted_by_cloud_policy_id');
  }

  // granted_by_cloud_policy_name - computed: true, optional: false, required: false
  public get grantedByCloudPolicyName() {
    return this.getStringAttribute('granted_by_cloud_policy_name');
  }

  // granted_by_cloud_policy_rrn - computed: true, optional: false, required: false
  public get grantedByCloudPolicyRrn() {
    return this.getStringAttribute('granted_by_cloud_policy_rrn');
  }

  // granted_by_cloud_policy_type - computed: true, optional: false, required: false
  public get grantedByCloudPolicyType() {
    return this.getStringAttribute('granted_by_cloud_policy_type');
  }

  // granted_by_cloud_type - computed: true, optional: false, required: false
  public get grantedByCloudType() {
    return this.getStringAttribute('granted_by_cloud_type');
  }

  // is_wild_card_dest_cloud_resource_name - computed: true, optional: false, required: false
  public get isWildCardDestCloudResourceName() {
    return this.getBooleanAttribute('is_wild_card_dest_cloud_resource_name');
  }

  // last_access_date - computed: true, optional: false, required: false
  public get lastAccessDate() {
    return this.getStringAttribute('last_access_date');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getStringAttribute('message_id');
  }

  // source_cloud_account - computed: true, optional: false, required: false
  public get sourceCloudAccount() {
    return this.getStringAttribute('source_cloud_account');
  }

  // source_cloud_region - computed: true, optional: false, required: false
  public get sourceCloudRegion() {
    return this.getStringAttribute('source_cloud_region');
  }

  // source_cloud_resource_rrn - computed: true, optional: false, required: false
  public get sourceCloudResourceRrn() {
    return this.getStringAttribute('source_cloud_resource_rrn');
  }

  // source_cloud_service_name - computed: true, optional: false, required: false
  public get sourceCloudServiceName() {
    return this.getStringAttribute('source_cloud_service_name');
  }

  // source_cloud_type - computed: true, optional: false, required: false
  public get sourceCloudType() {
    return this.getStringAttribute('source_cloud_type');
  }

  // source_idp_domain - computed: true, optional: false, required: false
  public get sourceIdpDomain() {
    return this.getStringAttribute('source_idp_domain');
  }

  // source_idp_email - computed: true, optional: false, required: false
  public get sourceIdpEmail() {
    return this.getStringAttribute('source_idp_email');
  }

  // source_idp_group - computed: true, optional: false, required: false
  public get sourceIdpGroup() {
    return this.getStringAttribute('source_idp_group');
  }

  // source_idp_rrn - computed: true, optional: false, required: false
  public get sourceIdpRrn() {
    return this.getStringAttribute('source_idp_rrn');
  }

  // source_idp_service - computed: true, optional: false, required: false
  public get sourceIdpService() {
    return this.getStringAttribute('source_idp_service');
  }

  // source_idp_user_name - computed: true, optional: false, required: false
  public get sourceIdpUserName() {
    return this.getStringAttribute('source_idp_user_name');
  }

  // source_public - computed: true, optional: false, required: false
  public get sourcePublic() {
    return this.getBooleanAttribute('source_public');
  }

  // source_resource_id - computed: true, optional: false, required: false
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }

  // source_resource_name - computed: true, optional: false, required: false
  public get sourceResourceName() {
    return this.getStringAttribute('source_resource_name');
  }

  // source_resource_type - computed: true, optional: false, required: false
  public get sourceResourceType() {
    return this.getStringAttribute('source_resource_type');
  }
}

export class RqlSearchIamDataList extends cdktf.ComplexList {

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
  public get(index: number): RqlSearchIamDataOutputReference {
    return new RqlSearchIamDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchNetworkData {
}

export function rqlSearchNetworkDataToTerraform(struct?: RqlSearchNetworkData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rqlSearchNetworkDataToHclTerraform(struct?: RqlSearchNetworkData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RqlSearchNetworkDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchNetworkData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchNetworkData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
}

export class RqlSearchNetworkDataList extends cdktf.ComplexList {

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
  public get(index: number): RqlSearchNetworkDataOutputReference {
    return new RqlSearchNetworkDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchTimeRangeAbsolute {
  /**
  * End time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#end RqlSearch#end}
  */
  readonly end: number;
  /**
  * Start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#start RqlSearch#start}
  */
  readonly start: number;
}

export function rqlSearchTimeRangeAbsoluteToTerraform(struct?: RqlSearchTimeRangeAbsolute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function rqlSearchTimeRangeAbsoluteToHclTerraform(struct?: RqlSearchTimeRangeAbsolute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RqlSearchTimeRangeAbsoluteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchTimeRangeAbsolute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchTimeRangeAbsolute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class RqlSearchTimeRangeAbsoluteList extends cdktf.ComplexList {
  public internalValue? : RqlSearchTimeRangeAbsolute[] | cdktf.IResolvable

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
  public get(index: number): RqlSearchTimeRangeAbsoluteOutputReference {
    return new RqlSearchTimeRangeAbsoluteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchTimeRangeRelative {
  /**
  * The time number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#amount RqlSearch#amount}
  */
  readonly amount: number;
  /**
  * The time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#unit RqlSearch#unit}
  */
  readonly unit: string;
}

export function rqlSearchTimeRangeRelativeToTerraform(struct?: RqlSearchTimeRangeRelative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function rqlSearchTimeRangeRelativeToHclTerraform(struct?: RqlSearchTimeRangeRelative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RqlSearchTimeRangeRelativeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchTimeRangeRelative | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchTimeRangeRelative | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._unit = value.unit;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class RqlSearchTimeRangeRelativeList extends cdktf.ComplexList {
  public internalValue? : RqlSearchTimeRangeRelative[] | cdktf.IResolvable

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
  public get(index: number): RqlSearchTimeRangeRelativeOutputReference {
    return new RqlSearchTimeRangeRelativeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchTimeRangeToNow {
  /**
  * The time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#unit RqlSearch#unit}
  */
  readonly unit: string;
}

export function rqlSearchTimeRangeToNowToTerraform(struct?: RqlSearchTimeRangeToNow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function rqlSearchTimeRangeToNowToHclTerraform(struct?: RqlSearchTimeRangeToNow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RqlSearchTimeRangeToNowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RqlSearchTimeRangeToNow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchTimeRangeToNow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class RqlSearchTimeRangeToNowList extends cdktf.ComplexList {
  public internalValue? : RqlSearchTimeRangeToNow[] | cdktf.IResolvable

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
  public get(index: number): RqlSearchTimeRangeToNowOutputReference {
    return new RqlSearchTimeRangeToNowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RqlSearchTimeRange {
  /**
  * absolute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#absolute RqlSearch#absolute}
  */
  readonly absolute?: RqlSearchTimeRangeAbsolute[] | cdktf.IResolvable;
  /**
  * relative block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#relative RqlSearch#relative}
  */
  readonly relative?: RqlSearchTimeRangeRelative[] | cdktf.IResolvable;
  /**
  * to_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#to_now RqlSearch#to_now}
  */
  readonly toNow?: RqlSearchTimeRangeToNow[] | cdktf.IResolvable;
}

export function rqlSearchTimeRangeToTerraform(struct?: RqlSearchTimeRangeOutputReference | RqlSearchTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute: cdktf.listMapper(rqlSearchTimeRangeAbsoluteToTerraform, true)(struct!.absolute),
    relative: cdktf.listMapper(rqlSearchTimeRangeRelativeToTerraform, true)(struct!.relative),
    to_now: cdktf.listMapper(rqlSearchTimeRangeToNowToTerraform, true)(struct!.toNow),
  }
}


export function rqlSearchTimeRangeToHclTerraform(struct?: RqlSearchTimeRangeOutputReference | RqlSearchTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute: {
      value: cdktf.listMapperHcl(rqlSearchTimeRangeAbsoluteToHclTerraform, true)(struct!.absolute),
      isBlock: true,
      type: "list",
      storageClassType: "RqlSearchTimeRangeAbsoluteList",
    },
    relative: {
      value: cdktf.listMapperHcl(rqlSearchTimeRangeRelativeToHclTerraform, true)(struct!.relative),
      isBlock: true,
      type: "list",
      storageClassType: "RqlSearchTimeRangeRelativeList",
    },
    to_now: {
      value: cdktf.listMapperHcl(rqlSearchTimeRangeToNowToHclTerraform, true)(struct!.toNow),
      isBlock: true,
      type: "list",
      storageClassType: "RqlSearchTimeRangeToNowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RqlSearchTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RqlSearchTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absolute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute?.internalValue;
    }
    if (this._relative?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative?.internalValue;
    }
    if (this._toNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNow = this._toNow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RqlSearchTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absolute.internalValue = undefined;
      this._relative.internalValue = undefined;
      this._toNow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absolute.internalValue = value.absolute;
      this._relative.internalValue = value.relative;
      this._toNow.internalValue = value.toNow;
    }
  }

  // absolute - computed: false, optional: true, required: false
  private _absolute = new RqlSearchTimeRangeAbsoluteList(this, "absolute", false);
  public get absolute() {
    return this._absolute;
  }
  public putAbsolute(value: RqlSearchTimeRangeAbsolute[] | cdktf.IResolvable) {
    this._absolute.internalValue = value;
  }
  public resetAbsolute() {
    this._absolute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute.internalValue;
  }

  // relative - computed: false, optional: true, required: false
  private _relative = new RqlSearchTimeRangeRelativeList(this, "relative", false);
  public get relative() {
    return this._relative;
  }
  public putRelative(value: RqlSearchTimeRangeRelative[] | cdktf.IResolvable) {
    this._relative.internalValue = value;
  }
  public resetRelative() {
    this._relative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative.internalValue;
  }

  // to_now - computed: false, optional: true, required: false
  private _toNow = new RqlSearchTimeRangeToNowList(this, "to_now", false);
  public get toNow() {
    return this._toNow;
  }
  public putToNow(value: RqlSearchTimeRangeToNow[] | cdktf.IResolvable) {
    this._toNow.internalValue = value;
  }
  public resetToNow() {
    this._toNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNowInput() {
    return this._toNow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search prismacloud_rql_search}
*/
export class RqlSearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_rql_search";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RqlSearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RqlSearch to import
  * @param importFromId The id of the existing RqlSearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RqlSearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_rql_search", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/rql_search prismacloud_rql_search} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RqlSearchConfig
  */
  public constructor(scope: Construct, id: string, config: RqlSearchConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_rql_search',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._heuristicSearch = config.heuristicSearch;
    this._id = config.id;
    this._limit = config.limit;
    this._query = config.query;
    this._searchId = config.searchId;
    this._searchType = config.searchType;
    this._skipResult = config.skipResult;
    this._timeRange.internalValue = config.timeRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_data - computed: true, optional: false, required: false
  private _assetData = new RqlSearchAssetDataList(this, "asset_data", false);
  public get assetData() {
    return this._assetData;
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // config_data - computed: true, optional: false, required: false
  private _configData = new RqlSearchConfigDataList(this, "config_data", false);
  public get configData() {
    return this._configData;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_data - computed: true, optional: false, required: false
  private _eventData = new RqlSearchEventDataList(this, "event_data", false);
  public get eventData() {
    return this._eventData;
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // heuristic_search - computed: false, optional: true, required: false
  private _heuristicSearch?: boolean | cdktf.IResolvable; 
  public get heuristicSearch() {
    return this.getBooleanAttribute('heuristic_search');
  }
  public set heuristicSearch(value: boolean | cdktf.IResolvable) {
    this._heuristicSearch = value;
  }
  public resetHeuristicSearch() {
    this._heuristicSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heuristicSearchInput() {
    return this._heuristicSearch;
  }

  // iam_data - computed: true, optional: false, required: false
  private _iamData = new RqlSearchIamDataList(this, "iam_data", false);
  public get iamData() {
    return this._iamData;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_data - computed: true, optional: false, required: false
  private _networkData = new RqlSearchNetworkDataList(this, "network_data", false);
  public get networkData() {
    return this._networkData;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // saved - computed: true, optional: false, required: false
  public get saved() {
    return this.getBooleanAttribute('saved');
  }

  // search_id - computed: true, optional: true, required: false
  private _searchId?: string; 
  public get searchId() {
    return this.getStringAttribute('search_id');
  }
  public set searchId(value: string) {
    this._searchId = value;
  }
  public resetSearchId() {
    this._searchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchIdInput() {
    return this._searchId;
  }

  // search_type - computed: false, optional: true, required: false
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // skip_result - computed: false, optional: true, required: false
  private _skipResult?: boolean | cdktf.IResolvable; 
  public get skipResult() {
    return this.getBooleanAttribute('skip_result');
  }
  public set skipResult(value: boolean | cdktf.IResolvable) {
    this._skipResult = value;
  }
  public resetSkipResult() {
    this._skipResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipResultInput() {
    return this._skipResult;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange = new RqlSearchTimeRangeOutputReference(this, "time_range");
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: RqlSearchTimeRange) {
    this._timeRange.internalValue = value;
  }
  public resetTimeRange() {
    this._timeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      heuristic_search: cdktf.booleanToTerraform(this._heuristicSearch),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      query: cdktf.stringToTerraform(this._query),
      search_id: cdktf.stringToTerraform(this._searchId),
      search_type: cdktf.stringToTerraform(this._searchType),
      skip_result: cdktf.booleanToTerraform(this._skipResult),
      time_range: rqlSearchTimeRangeToTerraform(this._timeRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      heuristic_search: {
        value: cdktf.booleanToHclTerraform(this._heuristicSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_id: {
        value: cdktf.stringToHclTerraform(this._searchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_type: {
        value: cdktf.stringToHclTerraform(this._searchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_result: {
        value: cdktf.booleanToHclTerraform(this._skipResult),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_range: {
        value: rqlSearchTimeRangeToHclTerraform(this._timeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RqlSearchTimeRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
