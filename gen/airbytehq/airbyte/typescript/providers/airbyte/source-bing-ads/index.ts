// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceBingAdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#configuration SourceBingAds#configuration}
  */
  readonly configuration: SourceBingAdsConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#definition_id SourceBingAds#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#name SourceBingAds#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#secret_id SourceBingAds#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#workspace_id SourceBingAds#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceBingAdsConfigurationAccountNames {
  /**
  * Account Name is a string value for comparing with the specified predicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#name SourceBingAds#name}
  */
  readonly name: string;
  /**
  * An Operator that will be used to filter accounts. The Contains predicate has features for matching words, matching inflectional forms of words, searching using wildcard characters, and searching using proximity. The Equals is used to return all rows where account name is equal(=) to the string that you provided. must be one of ["Contains", "Equals"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#operator SourceBingAds#operator}
  */
  readonly operator: string;
}

export function sourceBingAdsConfigurationAccountNamesToTerraform(struct?: SourceBingAdsConfigurationAccountNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function sourceBingAdsConfigurationAccountNamesToHclTerraform(struct?: SourceBingAdsConfigurationAccountNames | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceBingAdsConfigurationAccountNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceBingAdsConfigurationAccountNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceBingAdsConfigurationAccountNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class SourceBingAdsConfigurationAccountNamesList extends cdktf.ComplexList {
  public internalValue? : SourceBingAdsConfigurationAccountNames[] | cdktf.IResolvable

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
  public get(index: number): SourceBingAdsConfigurationAccountNamesOutputReference {
    return new SourceBingAdsConfigurationAccountNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceBingAdsConfigurationCustomReports {
  /**
  * The name of the custom report, this name would be used as stream name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#name SourceBingAds#name}
  */
  readonly name: string;
  /**
  * A list of available aggregations. Default: "[Hourly]"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#report_aggregation SourceBingAds#report_aggregation}
  */
  readonly reportAggregation?: string;
  /**
  * A list of available report object columns. You can find it in description of reporting object that you want to add to custom report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#report_columns SourceBingAds#report_columns}
  */
  readonly reportColumns: string[];
  /**
  * The name of the the object derives from the ReportRequest object. You can find it in Bing Ads Api docs - Reporting API - Reporting Data Objects. must be one of ["AccountPerformanceReportRequest", "AdDynamicTextPerformanceReportRequest", "AdExtensionByAdReportRequest", "AdExtensionByKeywordReportRequest", "AdExtensionDetailReportRequest", "AdGroupPerformanceReportRequest", "AdPerformanceReportRequest", "AgeGenderAudienceReportRequest", "AudiencePerformanceReportRequest", "CallDetailReportRequest", "CampaignPerformanceReportRequest", "ConversionPerformanceReportRequest", "DestinationUrlPerformanceReportRequest", "DSAAutoTargetPerformanceReportRequest", "DSACategoryPerformanceReportRequest", "DSASearchQueryPerformanceReportRequest", "GeographicPerformanceReportRequest", "GoalsAndFunnelsReportRequest", "HotelDimensionPerformanceReportRequest", "HotelGroupPerformanceReportRequest", "KeywordPerformanceReportRequest", "NegativeKeywordConflictReportRequest", "ProductDimensionPerformanceReportRequest", "ProductMatchCountReportRequest", "ProductNegativeKeywordConflictReportRequest", "ProductPartitionPerformanceReportRequest", "ProductPartitionUnitPerformanceReportRequest", "ProductSearchQueryPerformanceReportRequest", "ProfessionalDemographicsAudienceReportRequest", "PublisherUsagePerformanceReportRequest", "SearchCampaignChangeHistoryReportRequest", "SearchQueryPerformanceReportRequest", "ShareOfVoiceReportRequest", "UserLocationPerformanceReportRequest"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#reporting_object SourceBingAds#reporting_object}
  */
  readonly reportingObject: string;
}

export function sourceBingAdsConfigurationCustomReportsToTerraform(struct?: SourceBingAdsConfigurationCustomReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    report_aggregation: cdktf.stringToTerraform(struct!.reportAggregation),
    report_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reportColumns),
    reporting_object: cdktf.stringToTerraform(struct!.reportingObject),
  }
}


export function sourceBingAdsConfigurationCustomReportsToHclTerraform(struct?: SourceBingAdsConfigurationCustomReports | cdktf.IResolvable): any {
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
    report_aggregation: {
      value: cdktf.stringToHclTerraform(struct!.reportAggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reportColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reporting_object: {
      value: cdktf.stringToHclTerraform(struct!.reportingObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceBingAdsConfigurationCustomReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceBingAdsConfigurationCustomReports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reportAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportAggregation = this._reportAggregation;
    }
    if (this._reportColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportColumns = this._reportColumns;
    }
    if (this._reportingObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingObject = this._reportingObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceBingAdsConfigurationCustomReports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._reportAggregation = undefined;
      this._reportColumns = undefined;
      this._reportingObject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._reportAggregation = value.reportAggregation;
      this._reportColumns = value.reportColumns;
      this._reportingObject = value.reportingObject;
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

  // report_aggregation - computed: true, optional: true, required: false
  private _reportAggregation?: string; 
  public get reportAggregation() {
    return this.getStringAttribute('report_aggregation');
  }
  public set reportAggregation(value: string) {
    this._reportAggregation = value;
  }
  public resetReportAggregation() {
    this._reportAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportAggregationInput() {
    return this._reportAggregation;
  }

  // report_columns - computed: false, optional: false, required: true
  private _reportColumns?: string[]; 
  public get reportColumns() {
    return this.getListAttribute('report_columns');
  }
  public set reportColumns(value: string[]) {
    this._reportColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportColumnsInput() {
    return this._reportColumns;
  }

  // reporting_object - computed: false, optional: false, required: true
  private _reportingObject?: string; 
  public get reportingObject() {
    return this.getStringAttribute('reporting_object');
  }
  public set reportingObject(value: string) {
    this._reportingObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingObjectInput() {
    return this._reportingObject;
  }
}

export class SourceBingAdsConfigurationCustomReportsList extends cdktf.ComplexList {
  public internalValue? : SourceBingAdsConfigurationCustomReports[] | cdktf.IResolvable

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
  public get(index: number): SourceBingAdsConfigurationCustomReportsOutputReference {
    return new SourceBingAdsConfigurationCustomReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceBingAdsConfiguration {
  /**
  * Predicates that will be used to sync data by specific accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#account_names SourceBingAds#account_names}
  */
  readonly accountNames?: SourceBingAdsConfigurationAccountNames[] | cdktf.IResolvable;
  /**
  * The Client ID of your Microsoft Advertising developer application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#client_id SourceBingAds#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret of your Microsoft Advertising developer application. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#client_secret SourceBingAds#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * You can add your Custom Bing Ads report by creating one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#custom_reports SourceBingAds#custom_reports}
  */
  readonly customReports?: SourceBingAdsConfigurationCustomReports[] | cdktf.IResolvable;
  /**
  * Developer token associated with user. See more info <a href="https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#get-developer-token"> in the docs</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#developer_token SourceBingAds#developer_token}
  */
  readonly developerToken: string;
  /**
  * Also known as attribution or conversion window. How far into the past to look for records (in days). If your conversion window has an hours/minutes granularity, round it up to the number of days exceeding. Used only for performance report streams in incremental mode without specified Reports Start Date. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#lookback_window SourceBingAds#lookback_window}
  */
  readonly lookbackWindow?: number;
  /**
  * Refresh Token to renew the expired Access Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#refresh_token SourceBingAds#refresh_token}
  */
  readonly refreshToken: string;
  /**
  * The start date from which to begin replicating report data. Any data generated before this date will not be replicated in reports. This is a UTC date in YYYY-MM-DD format. If not set, data from previous and current calendar year will be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#reports_start_date SourceBingAds#reports_start_date}
  */
  readonly reportsStartDate?: string;
  /**
  * The Tenant ID of your Microsoft Advertising developer application. Set this to "common" unless you know you need a different value. Default: "common"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#tenant_id SourceBingAds#tenant_id}
  */
  readonly tenantId?: string;
}

export function sourceBingAdsConfigurationToTerraform(struct?: SourceBingAdsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_names: cdktf.listMapper(sourceBingAdsConfigurationAccountNamesToTerraform, false)(struct!.accountNames),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    custom_reports: cdktf.listMapper(sourceBingAdsConfigurationCustomReportsToTerraform, false)(struct!.customReports),
    developer_token: cdktf.stringToTerraform(struct!.developerToken),
    lookback_window: cdktf.numberToTerraform(struct!.lookbackWindow),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    reports_start_date: cdktf.stringToTerraform(struct!.reportsStartDate),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function sourceBingAdsConfigurationToHclTerraform(struct?: SourceBingAdsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_names: {
      value: cdktf.listMapperHcl(sourceBingAdsConfigurationAccountNamesToHclTerraform, false)(struct!.accountNames),
      isBlock: true,
      type: "list",
      storageClassType: "SourceBingAdsConfigurationAccountNamesList",
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
    custom_reports: {
      value: cdktf.listMapperHcl(sourceBingAdsConfigurationCustomReportsToHclTerraform, false)(struct!.customReports),
      isBlock: true,
      type: "list",
      storageClassType: "SourceBingAdsConfigurationCustomReportsList",
    },
    developer_token: {
      value: cdktf.stringToHclTerraform(struct!.developerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookback_window: {
      value: cdktf.numberToHclTerraform(struct!.lookbackWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reports_start_date: {
      value: cdktf.stringToHclTerraform(struct!.reportsStartDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceBingAdsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceBingAdsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNames = this._accountNames?.internalValue;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._customReports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customReports = this._customReports?.internalValue;
    }
    if (this._developerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerToken = this._developerToken;
    }
    if (this._lookbackWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookbackWindow = this._lookbackWindow;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._reportsStartDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportsStartDate = this._reportsStartDate;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceBingAdsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountNames.internalValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._customReports.internalValue = undefined;
      this._developerToken = undefined;
      this._lookbackWindow = undefined;
      this._refreshToken = undefined;
      this._reportsStartDate = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountNames.internalValue = value.accountNames;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._customReports.internalValue = value.customReports;
      this._developerToken = value.developerToken;
      this._lookbackWindow = value.lookbackWindow;
      this._refreshToken = value.refreshToken;
      this._reportsStartDate = value.reportsStartDate;
      this._tenantId = value.tenantId;
    }
  }

  // account_names - computed: false, optional: true, required: false
  private _accountNames = new SourceBingAdsConfigurationAccountNamesList(this, "account_names", false);
  public get accountNames() {
    return this._accountNames;
  }
  public putAccountNames(value: SourceBingAdsConfigurationAccountNames[] | cdktf.IResolvable) {
    this._accountNames.internalValue = value;
  }
  public resetAccountNames() {
    this._accountNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNamesInput() {
    return this._accountNames.internalValue;
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

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // custom_reports - computed: false, optional: true, required: false
  private _customReports = new SourceBingAdsConfigurationCustomReportsList(this, "custom_reports", false);
  public get customReports() {
    return this._customReports;
  }
  public putCustomReports(value: SourceBingAdsConfigurationCustomReports[] | cdktf.IResolvable) {
    this._customReports.internalValue = value;
  }
  public resetCustomReports() {
    this._customReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReportsInput() {
    return this._customReports.internalValue;
  }

  // developer_token - computed: false, optional: false, required: true
  private _developerToken?: string; 
  public get developerToken() {
    return this.getStringAttribute('developer_token');
  }
  public set developerToken(value: string) {
    this._developerToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developerTokenInput() {
    return this._developerToken;
  }

  // lookback_window - computed: true, optional: true, required: false
  private _lookbackWindow?: number; 
  public get lookbackWindow() {
    return this.getNumberAttribute('lookback_window');
  }
  public set lookbackWindow(value: number) {
    this._lookbackWindow = value;
  }
  public resetLookbackWindow() {
    this._lookbackWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackWindowInput() {
    return this._lookbackWindow;
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

  // reports_start_date - computed: false, optional: true, required: false
  private _reportsStartDate?: string; 
  public get reportsStartDate() {
    return this.getStringAttribute('reports_start_date');
  }
  public set reportsStartDate(value: string) {
    this._reportsStartDate = value;
  }
  public resetReportsStartDate() {
    this._reportsStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportsStartDateInput() {
    return this._reportsStartDate;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface SourceBingAdsResourceAllocationDefault {
}

export function sourceBingAdsResourceAllocationDefaultToTerraform(struct?: SourceBingAdsResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceBingAdsResourceAllocationDefaultToHclTerraform(struct?: SourceBingAdsResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceBingAdsResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceBingAdsResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceBingAdsResourceAllocationDefault | undefined) {
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
export interface SourceBingAdsResourceAllocationJobSpecificResourceRequirements {
}

export function sourceBingAdsResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceBingAdsResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceBingAdsResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceBingAdsResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceBingAdsResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceBingAdsResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceBingAdsResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceBingAdsResourceAllocationJobSpecific {
}

export function sourceBingAdsResourceAllocationJobSpecificToTerraform(struct?: SourceBingAdsResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceBingAdsResourceAllocationJobSpecificToHclTerraform(struct?: SourceBingAdsResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceBingAdsResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceBingAdsResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceBingAdsResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceBingAdsResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceBingAdsResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceBingAdsResourceAllocationJobSpecificOutputReference {
    return new SourceBingAdsResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceBingAdsResourceAllocation {
}

export function sourceBingAdsResourceAllocationToTerraform(struct?: SourceBingAdsResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceBingAdsResourceAllocationToHclTerraform(struct?: SourceBingAdsResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceBingAdsResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceBingAdsResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceBingAdsResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceBingAdsResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceBingAdsResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads airbyte_source_bing_ads}
*/
export class SourceBingAds extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_bing_ads";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceBingAds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceBingAds to import
  * @param importFromId The id of the existing SourceBingAds that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceBingAds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_bing_ads", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_bing_ads airbyte_source_bing_ads} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceBingAdsConfig
  */
  public constructor(scope: Construct, id: string, config: SourceBingAdsConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_bing_ads',
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
  private _configuration = new SourceBingAdsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceBingAdsConfiguration) {
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
  private _resourceAllocation = new SourceBingAdsResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceBingAdsConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceBingAdsConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceBingAdsConfiguration",
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
