// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceSnapchatMarketingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#configuration SourceSnapchatMarketing#configuration}
  */
  readonly configuration: SourceSnapchatMarketingConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#definition_id SourceSnapchatMarketing#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#name SourceSnapchatMarketing#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#secret_id SourceSnapchatMarketing#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#workspace_id SourceSnapchatMarketing#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceSnapchatMarketingConfiguration {
  /**
  * Specifies the principle for conversion reporting. Default: "conversion"; must be one of ["conversion", "impression"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#action_report_time SourceSnapchatMarketing#action_report_time}
  */
  readonly actionReportTime?: string;
  /**
  * Ad Account IDs of the ad accounts to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#ad_account_ids SourceSnapchatMarketing#ad_account_ids}
  */
  readonly adAccountIds?: string[];
  /**
  * The Client ID of your Snapchat developer application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#client_id SourceSnapchatMarketing#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret of your Snapchat developer application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#client_secret SourceSnapchatMarketing#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Date in the format 2017-01-25. Any data after this date will not be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#end_date SourceSnapchatMarketing#end_date}
  */
  readonly endDate?: string;
  /**
  * The IDs of the organizations to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#organization_ids SourceSnapchatMarketing#organization_ids}
  */
  readonly organizationIds?: string[];
  /**
  * Refresh Token to renew the expired Access Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#refresh_token SourceSnapchatMarketing#refresh_token}
  */
  readonly refreshToken: string;
  /**
  * Date in the format 2022-01-01. Any data before this date will not be replicated. Default: "2022-01-01"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#start_date SourceSnapchatMarketing#start_date}
  */
  readonly startDate?: string;
  /**
  * Attribution window for swipe ups. Default: "28_DAY"; must be one of ["1_DAY", "7_DAY", "28_DAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#swipe_up_attribution_window SourceSnapchatMarketing#swipe_up_attribution_window}
  */
  readonly swipeUpAttributionWindow?: string;
  /**
  * Attribution window for views. Default: "1_DAY"; must be one of ["1_HOUR", "3_HOUR", "6_HOUR", "1_DAY", "7_DAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#view_attribution_window SourceSnapchatMarketing#view_attribution_window}
  */
  readonly viewAttributionWindow?: string;
}

export function sourceSnapchatMarketingConfigurationToTerraform(struct?: SourceSnapchatMarketingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_report_time: cdktf.stringToTerraform(struct!.actionReportTime),
    ad_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adAccountIds),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    organization_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationIds),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    swipe_up_attribution_window: cdktf.stringToTerraform(struct!.swipeUpAttributionWindow),
    view_attribution_window: cdktf.stringToTerraform(struct!.viewAttributionWindow),
  }
}


export function sourceSnapchatMarketingConfigurationToHclTerraform(struct?: SourceSnapchatMarketingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_report_time: {
      value: cdktf.stringToHclTerraform(struct!.actionReportTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ad_account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adAccountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swipe_up_attribution_window: {
      value: cdktf.stringToHclTerraform(struct!.swipeUpAttributionWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_attribution_window: {
      value: cdktf.stringToHclTerraform(struct!.viewAttributionWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSnapchatMarketingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSnapchatMarketingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionReportTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionReportTime = this._actionReportTime;
    }
    if (this._adAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.adAccountIds = this._adAccountIds;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._organizationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationIds = this._organizationIds;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._swipeUpAttributionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.swipeUpAttributionWindow = this._swipeUpAttributionWindow;
    }
    if (this._viewAttributionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewAttributionWindow = this._viewAttributionWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSnapchatMarketingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionReportTime = undefined;
      this._adAccountIds = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._endDate = undefined;
      this._organizationIds = undefined;
      this._refreshToken = undefined;
      this._startDate = undefined;
      this._swipeUpAttributionWindow = undefined;
      this._viewAttributionWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionReportTime = value.actionReportTime;
      this._adAccountIds = value.adAccountIds;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._endDate = value.endDate;
      this._organizationIds = value.organizationIds;
      this._refreshToken = value.refreshToken;
      this._startDate = value.startDate;
      this._swipeUpAttributionWindow = value.swipeUpAttributionWindow;
      this._viewAttributionWindow = value.viewAttributionWindow;
    }
  }

  // action_report_time - computed: true, optional: true, required: false
  private _actionReportTime?: string; 
  public get actionReportTime() {
    return this.getStringAttribute('action_report_time');
  }
  public set actionReportTime(value: string) {
    this._actionReportTime = value;
  }
  public resetActionReportTime() {
    this._actionReportTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionReportTimeInput() {
    return this._actionReportTime;
  }

  // ad_account_ids - computed: false, optional: true, required: false
  private _adAccountIds?: string[]; 
  public get adAccountIds() {
    return this.getListAttribute('ad_account_ids');
  }
  public set adAccountIds(value: string[]) {
    this._adAccountIds = value;
  }
  public resetAdAccountIds() {
    this._adAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adAccountIdsInput() {
    return this._adAccountIds;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // organization_ids - computed: false, optional: true, required: false
  private _organizationIds?: string[]; 
  public get organizationIds() {
    return this.getListAttribute('organization_ids');
  }
  public set organizationIds(value: string[]) {
    this._organizationIds = value;
  }
  public resetOrganizationIds() {
    this._organizationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdsInput() {
    return this._organizationIds;
  }

  // refresh_token - computed: false, optional: false, required: true
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // swipe_up_attribution_window - computed: true, optional: true, required: false
  private _swipeUpAttributionWindow?: string; 
  public get swipeUpAttributionWindow() {
    return this.getStringAttribute('swipe_up_attribution_window');
  }
  public set swipeUpAttributionWindow(value: string) {
    this._swipeUpAttributionWindow = value;
  }
  public resetSwipeUpAttributionWindow() {
    this._swipeUpAttributionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swipeUpAttributionWindowInput() {
    return this._swipeUpAttributionWindow;
  }

  // view_attribution_window - computed: true, optional: true, required: false
  private _viewAttributionWindow?: string; 
  public get viewAttributionWindow() {
    return this.getStringAttribute('view_attribution_window');
  }
  public set viewAttributionWindow(value: string) {
    this._viewAttributionWindow = value;
  }
  public resetViewAttributionWindow() {
    this._viewAttributionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewAttributionWindowInput() {
    return this._viewAttributionWindow;
  }
}
export interface SourceSnapchatMarketingResourceAllocationDefault {
}

export function sourceSnapchatMarketingResourceAllocationDefaultToTerraform(struct?: SourceSnapchatMarketingResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSnapchatMarketingResourceAllocationDefaultToHclTerraform(struct?: SourceSnapchatMarketingResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSnapchatMarketingResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSnapchatMarketingResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSnapchatMarketingResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirements {
}

export function sourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourceSnapchatMarketingResourceAllocationJobSpecific {
}

export function sourceSnapchatMarketingResourceAllocationJobSpecificToTerraform(struct?: SourceSnapchatMarketingResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSnapchatMarketingResourceAllocationJobSpecificToHclTerraform(struct?: SourceSnapchatMarketingResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSnapchatMarketingResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceSnapchatMarketingResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSnapchatMarketingResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new SourceSnapchatMarketingResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceSnapchatMarketingResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceSnapchatMarketingResourceAllocationJobSpecificOutputReference {
    return new SourceSnapchatMarketingResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceSnapchatMarketingResourceAllocation {
}

export function sourceSnapchatMarketingResourceAllocationToTerraform(struct?: SourceSnapchatMarketingResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSnapchatMarketingResourceAllocationToHclTerraform(struct?: SourceSnapchatMarketingResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSnapchatMarketingResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSnapchatMarketingResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSnapchatMarketingResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceSnapchatMarketingResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceSnapchatMarketingResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing airbyte_source_snapchat_marketing}
*/
export class SourceSnapchatMarketing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_snapchat_marketing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceSnapchatMarketing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceSnapchatMarketing to import
  * @param importFromId The id of the existing SourceSnapchatMarketing that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceSnapchatMarketing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_snapchat_marketing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_snapchat_marketing airbyte_source_snapchat_marketing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceSnapchatMarketingConfig
  */
  public constructor(scope: Construct, id: string, config: SourceSnapchatMarketingConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_snapchat_marketing',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._secretId = config.secretId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SourceSnapchatMarketingConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceSnapchatMarketingConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new SourceSnapchatMarketingResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: sourceSnapchatMarketingConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceSnapchatMarketingConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceSnapchatMarketingConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
