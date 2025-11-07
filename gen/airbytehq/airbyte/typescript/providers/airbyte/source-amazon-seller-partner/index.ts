// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceAmazonSellerPartnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#configuration SourceAmazonSellerPartner#configuration}
  */
  readonly configuration: SourceAmazonSellerPartnerConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#definition_id SourceAmazonSellerPartner#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#name SourceAmazonSellerPartner#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#secret_id SourceAmazonSellerPartner#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#workspace_id SourceAmazonSellerPartner#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#option_name SourceAmazonSellerPartner#option_name}
  */
  readonly optionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#option_value SourceAmazonSellerPartner#option_value}
  */
  readonly optionValue: string;
}

export function sourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructToTerraform(struct?: SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option_name: cdktf.stringToTerraform(struct!.optionName),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
  }
}


export function sourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructToHclTerraform(struct?: SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option_name: {
      value: cdktf.stringToHclTerraform(struct!.optionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionName = this._optionName;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionName = undefined;
      this._optionValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionName = value.optionName;
      this._optionValue = value.optionValue;
    }
  }

  // option_name - computed: false, optional: false, required: true
  private _optionName?: string; 
  public get optionName() {
    return this.getStringAttribute('option_name');
  }
  public set optionName(value: string) {
    this._optionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameInput() {
    return this._optionName;
  }

  // option_value - computed: false, optional: false, required: true
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }
}

export class SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructList extends cdktf.ComplexList {
  public internalValue? : SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructOutputReference {
    return new SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceAmazonSellerPartnerConfigurationReportOptionsListStruct {
  /**
  * List of options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#options_list SourceAmazonSellerPartner#options_list}
  */
  readonly optionsList: SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStruct[] | cdktf.IResolvable;
  /**
  * must be one of ["GET_AFN_INVENTORY_DATA", "GET_AFN_INVENTORY_DATA_BY_COUNTRY", "GET_AMAZON_FULFILLED_SHIPMENTS_DATA_GENERAL", "GET_FBA_ESTIMATED_FBA_FEES_TXT_DATA", "GET_FBA_FULFILLMENT_CUSTOMER_RETURNS_DATA", "GET_FBA_FULFILLMENT_CUSTOMER_SHIPMENT_PROMOTION_DATA", "GET_FBA_FULFILLMENT_CUSTOMER_SHIPMENT_REPLACEMENT_DATA", "GET_FBA_FULFILLMENT_REMOVAL_ORDER_DETAIL_DATA", "GET_FBA_FULFILLMENT_REMOVAL_SHIPMENT_DETAIL_DATA", "GET_FBA_INVENTORY_PLANNING_DATA", "GET_FBA_MYI_UNSUPPRESSED_INVENTORY_DATA", "GET_FBA_REIMBURSEMENTS_DATA", "GET_FBA_SNS_FORECAST_DATA", "GET_FBA_SNS_PERFORMANCE_DATA", "GET_FBA_STORAGE_FEE_CHARGES_DATA", "GET_FLAT_FILE_ACTIONABLE_ORDER_DATA_SHIPPING", "GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL", "GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL", "GET_FLAT_FILE_ARCHIVED_ORDERS_DATA_BY_ORDER_DATE", "GET_FLAT_FILE_OPEN_LISTINGS_DATA", "GET_FLAT_FILE_RETURNS_DATA_BY_RETURN_DATE", "GET_LEDGER_DETAIL_VIEW_DATA", "GET_LEDGER_SUMMARY_VIEW_DATA", "GET_MERCHANT_CANCELLED_LISTINGS_DATA", "GET_MERCHANT_LISTINGS_ALL_DATA", "GET_MERCHANT_LISTINGS_DATA", "GET_MERCHANT_LISTINGS_DATA_BACK_COMPAT", "GET_MERCHANT_LISTINGS_INACTIVE_DATA", "GET_MERCHANTS_LISTINGS_FYP_REPORT", "GET_ORDER_REPORT_DATA_SHIPPING", "GET_RESTOCK_INVENTORY_RECOMMENDATIONS_REPORT", "GET_SELLER_FEEDBACK_DATA", "GET_STRANDED_INVENTORY_UI_DATA", "GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE", "GET_XML_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL", "GET_XML_BROWSE_TREE_DATA", "GET_VENDOR_REAL_TIME_INVENTORY_REPORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#report_name SourceAmazonSellerPartner#report_name}
  */
  readonly reportName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#stream_name SourceAmazonSellerPartner#stream_name}
  */
  readonly streamName: string;
}

export function sourceAmazonSellerPartnerConfigurationReportOptionsListStructToTerraform(struct?: SourceAmazonSellerPartnerConfigurationReportOptionsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options_list: cdktf.listMapper(sourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructToTerraform, false)(struct!.optionsList),
    report_name: cdktf.stringToTerraform(struct!.reportName),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function sourceAmazonSellerPartnerConfigurationReportOptionsListStructToHclTerraform(struct?: SourceAmazonSellerPartnerConfigurationReportOptionsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options_list: {
      value: cdktf.listMapperHcl(sourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructToHclTerraform, false)(struct!.optionsList),
      isBlock: true,
      type: "list",
      storageClassType: "SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructList",
    },
    report_name: {
      value: cdktf.stringToHclTerraform(struct!.reportName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceAmazonSellerPartnerConfigurationReportOptionsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceAmazonSellerPartnerConfigurationReportOptionsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsList = this._optionsList?.internalValue;
    }
    if (this._reportName !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportName = this._reportName;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAmazonSellerPartnerConfigurationReportOptionsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionsList.internalValue = undefined;
      this._reportName = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionsList.internalValue = value.optionsList;
      this._reportName = value.reportName;
      this._streamName = value.streamName;
    }
  }

  // options_list - computed: false, optional: false, required: true
  private _optionsList = new SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStructList(this, "options_list", false);
  public get optionsList() {
    return this._optionsList;
  }
  public putOptionsList(value: SourceAmazonSellerPartnerConfigurationReportOptionsListOptionsListStruct[] | cdktf.IResolvable) {
    this._optionsList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsListInput() {
    return this._optionsList.internalValue;
  }

  // report_name - computed: false, optional: false, required: true
  private _reportName?: string; 
  public get reportName() {
    return this.getStringAttribute('report_name');
  }
  public set reportName(value: string) {
    this._reportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportNameInput() {
    return this._reportName;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class SourceAmazonSellerPartnerConfigurationReportOptionsListStructList extends cdktf.ComplexList {
  public internalValue? : SourceAmazonSellerPartnerConfigurationReportOptionsListStruct[] | cdktf.IResolvable

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
  public get(index: number): SourceAmazonSellerPartnerConfigurationReportOptionsListStructOutputReference {
    return new SourceAmazonSellerPartnerConfigurationReportOptionsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceAmazonSellerPartnerConfiguration {
  /**
  * Type of the Account you're going to authorize the Airbyte application by. Default: "Seller"; must be one of ["Seller", "Vendor"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#account_type SourceAmazonSellerPartner#account_type}
  */
  readonly accountType?: string;
  /**
  * Your Amazon Application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#app_id SourceAmazonSellerPartner#app_id}
  */
  readonly appId?: string;
  /**
  * Select the AWS Environment. Default: "PRODUCTION"; must be one of ["PRODUCTION", "SANDBOX"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#aws_environment SourceAmazonSellerPartner#aws_environment}
  */
  readonly awsEnvironment?: string;
  /**
  * The time window size (in days) for fetching financial events data in chunks. Options are 1 day, 7 days, 14 days, 30 days, 60 days, and 190 days, based on API limitations.
  * 
  * - **Smaller step sizes (e.g., 1 day)** are better for large data volumes. They fetch smaller chunks per request, reducing the risk of timeouts or overwhelming the API, though more requests may slow syncing and increase the chance of hitting rate limits.
  * - **Larger step sizes (e.g., 14 days)** are better for smaller data volumes. They fetch more data per request, speeding up syncing and reducing the number of API calls, which minimizes strain on rate limits.
  * 
  * Select a step size that matches your data volume to optimize syncing speed and API performance.
  * Default: "180"; must be one of ["1", "7", "14", "30", "60", "90", "180"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#financial_events_step SourceAmazonSellerPartner#financial_events_step}
  */
  readonly financialEventsStep?: string;
  /**
  * Your Login with Amazon Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#lwa_app_id SourceAmazonSellerPartner#lwa_app_id}
  */
  readonly lwaAppId: string;
  /**
  * Your Login with Amazon Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#lwa_client_secret SourceAmazonSellerPartner#lwa_client_secret}
  */
  readonly lwaClientSecret: string;
  /**
  * For syncs spanning a large date range, this option is used to request data in a smaller fixed window to improve sync reliability. This time window can be configured granularly by day. Default: 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#period_in_days SourceAmazonSellerPartner#period_in_days}
  */
  readonly periodInDays?: number;
  /**
  * The Refresh Token obtained via OAuth flow authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#refresh_token SourceAmazonSellerPartner#refresh_token}
  */
  readonly refreshToken: string;
  /**
  * Select the AWS Region. Default: "US"; must be one of ["AE", "AU", "BE", "BR", "CA", "DE", "EG", "ES", "FR", "GB", "IN", "IT", "JP", "MX", "NL", "PL", "SA", "SE", "SG", "TR", "UK", "US"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#region SourceAmazonSellerPartner#region}
  */
  readonly region?: string;
  /**
  * UTC date and time in the format 2017-01-25T00:00:00Z. Any data after this date will not be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#replication_end_date SourceAmazonSellerPartner#replication_end_date}
  */
  readonly replicationEndDate?: string;
  /**
  * UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated. If start date is not provided or older than 2 years ago from today, the date 2 years ago from today will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#replication_start_date SourceAmazonSellerPartner#replication_start_date}
  */
  readonly replicationStartDate?: string;
  /**
  * Additional information passed to reports. This varies by report type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#report_options_list SourceAmazonSellerPartner#report_options_list}
  */
  readonly reportOptionsList?: SourceAmazonSellerPartnerConfigurationReportOptionsListStruct[] | cdktf.IResolvable;
  /**
  * For report based streams with known amount of requests per time period, this option will use waiting time between requests to avoid fatal statuses in reports. See <a href="https://docs.airbyte.com/integrations/sources/amazon-seller-partner#limitations--troubleshooting" target="_blank">Troubleshooting</a> section for more details. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#wait_to_avoid_fatal_errors SourceAmazonSellerPartner#wait_to_avoid_fatal_errors}
  */
  readonly waitToAvoidFatalErrors?: boolean | cdktf.IResolvable;
}

export function sourceAmazonSellerPartnerConfigurationToTerraform(struct?: SourceAmazonSellerPartnerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_type: cdktf.stringToTerraform(struct!.accountType),
    app_id: cdktf.stringToTerraform(struct!.appId),
    aws_environment: cdktf.stringToTerraform(struct!.awsEnvironment),
    financial_events_step: cdktf.stringToTerraform(struct!.financialEventsStep),
    lwa_app_id: cdktf.stringToTerraform(struct!.lwaAppId),
    lwa_client_secret: cdktf.stringToTerraform(struct!.lwaClientSecret),
    period_in_days: cdktf.numberToTerraform(struct!.periodInDays),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    region: cdktf.stringToTerraform(struct!.region),
    replication_end_date: cdktf.stringToTerraform(struct!.replicationEndDate),
    replication_start_date: cdktf.stringToTerraform(struct!.replicationStartDate),
    report_options_list: cdktf.listMapper(sourceAmazonSellerPartnerConfigurationReportOptionsListStructToTerraform, false)(struct!.reportOptionsList),
    wait_to_avoid_fatal_errors: cdktf.booleanToTerraform(struct!.waitToAvoidFatalErrors),
  }
}


export function sourceAmazonSellerPartnerConfigurationToHclTerraform(struct?: SourceAmazonSellerPartnerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_environment: {
      value: cdktf.stringToHclTerraform(struct!.awsEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    financial_events_step: {
      value: cdktf.stringToHclTerraform(struct!.financialEventsStep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lwa_app_id: {
      value: cdktf.stringToHclTerraform(struct!.lwaAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lwa_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.lwaClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.periodInDays),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_end_date: {
      value: cdktf.stringToHclTerraform(struct!.replicationEndDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_start_date: {
      value: cdktf.stringToHclTerraform(struct!.replicationStartDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_options_list: {
      value: cdktf.listMapperHcl(sourceAmazonSellerPartnerConfigurationReportOptionsListStructToHclTerraform, false)(struct!.reportOptionsList),
      isBlock: true,
      type: "list",
      storageClassType: "SourceAmazonSellerPartnerConfigurationReportOptionsListStructList",
    },
    wait_to_avoid_fatal_errors: {
      value: cdktf.booleanToHclTerraform(struct!.waitToAvoidFatalErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceAmazonSellerPartnerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceAmazonSellerPartnerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._awsEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEnvironment = this._awsEnvironment;
    }
    if (this._financialEventsStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.financialEventsStep = this._financialEventsStep;
    }
    if (this._lwaAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lwaAppId = this._lwaAppId;
    }
    if (this._lwaClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.lwaClientSecret = this._lwaClientSecret;
    }
    if (this._periodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodInDays = this._periodInDays;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._replicationEndDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationEndDate = this._replicationEndDate;
    }
    if (this._replicationStartDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationStartDate = this._replicationStartDate;
    }
    if (this._reportOptionsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportOptionsList = this._reportOptionsList?.internalValue;
    }
    if (this._waitToAvoidFatalErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitToAvoidFatalErrors = this._waitToAvoidFatalErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAmazonSellerPartnerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountType = undefined;
      this._appId = undefined;
      this._awsEnvironment = undefined;
      this._financialEventsStep = undefined;
      this._lwaAppId = undefined;
      this._lwaClientSecret = undefined;
      this._periodInDays = undefined;
      this._refreshToken = undefined;
      this._region = undefined;
      this._replicationEndDate = undefined;
      this._replicationStartDate = undefined;
      this._reportOptionsList.internalValue = undefined;
      this._waitToAvoidFatalErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountType = value.accountType;
      this._appId = value.appId;
      this._awsEnvironment = value.awsEnvironment;
      this._financialEventsStep = value.financialEventsStep;
      this._lwaAppId = value.lwaAppId;
      this._lwaClientSecret = value.lwaClientSecret;
      this._periodInDays = value.periodInDays;
      this._refreshToken = value.refreshToken;
      this._region = value.region;
      this._replicationEndDate = value.replicationEndDate;
      this._replicationStartDate = value.replicationStartDate;
      this._reportOptionsList.internalValue = value.reportOptionsList;
      this._waitToAvoidFatalErrors = value.waitToAvoidFatalErrors;
    }
  }

  // account_type - computed: true, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // aws_environment - computed: true, optional: true, required: false
  private _awsEnvironment?: string; 
  public get awsEnvironment() {
    return this.getStringAttribute('aws_environment');
  }
  public set awsEnvironment(value: string) {
    this._awsEnvironment = value;
  }
  public resetAwsEnvironment() {
    this._awsEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEnvironmentInput() {
    return this._awsEnvironment;
  }

  // financial_events_step - computed: true, optional: true, required: false
  private _financialEventsStep?: string; 
  public get financialEventsStep() {
    return this.getStringAttribute('financial_events_step');
  }
  public set financialEventsStep(value: string) {
    this._financialEventsStep = value;
  }
  public resetFinancialEventsStep() {
    this._financialEventsStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialEventsStepInput() {
    return this._financialEventsStep;
  }

  // lwa_app_id - computed: false, optional: false, required: true
  private _lwaAppId?: string; 
  public get lwaAppId() {
    return this.getStringAttribute('lwa_app_id');
  }
  public set lwaAppId(value: string) {
    this._lwaAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lwaAppIdInput() {
    return this._lwaAppId;
  }

  // lwa_client_secret - computed: false, optional: false, required: true
  private _lwaClientSecret?: string; 
  public get lwaClientSecret() {
    return this.getStringAttribute('lwa_client_secret');
  }
  public set lwaClientSecret(value: string) {
    this._lwaClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lwaClientSecretInput() {
    return this._lwaClientSecret;
  }

  // period_in_days - computed: true, optional: true, required: false
  private _periodInDays?: number; 
  public get periodInDays() {
    return this.getNumberAttribute('period_in_days');
  }
  public set periodInDays(value: number) {
    this._periodInDays = value;
  }
  public resetPeriodInDays() {
    this._periodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInDaysInput() {
    return this._periodInDays;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replication_end_date - computed: false, optional: true, required: false
  private _replicationEndDate?: string; 
  public get replicationEndDate() {
    return this.getStringAttribute('replication_end_date');
  }
  public set replicationEndDate(value: string) {
    this._replicationEndDate = value;
  }
  public resetReplicationEndDate() {
    this._replicationEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationEndDateInput() {
    return this._replicationEndDate;
  }

  // replication_start_date - computed: false, optional: true, required: false
  private _replicationStartDate?: string; 
  public get replicationStartDate() {
    return this.getStringAttribute('replication_start_date');
  }
  public set replicationStartDate(value: string) {
    this._replicationStartDate = value;
  }
  public resetReplicationStartDate() {
    this._replicationStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationStartDateInput() {
    return this._replicationStartDate;
  }

  // report_options_list - computed: false, optional: true, required: false
  private _reportOptionsList = new SourceAmazonSellerPartnerConfigurationReportOptionsListStructList(this, "report_options_list", false);
  public get reportOptionsList() {
    return this._reportOptionsList;
  }
  public putReportOptionsList(value: SourceAmazonSellerPartnerConfigurationReportOptionsListStruct[] | cdktf.IResolvable) {
    this._reportOptionsList.internalValue = value;
  }
  public resetReportOptionsList() {
    this._reportOptionsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportOptionsListInput() {
    return this._reportOptionsList.internalValue;
  }

  // wait_to_avoid_fatal_errors - computed: true, optional: true, required: false
  private _waitToAvoidFatalErrors?: boolean | cdktf.IResolvable; 
  public get waitToAvoidFatalErrors() {
    return this.getBooleanAttribute('wait_to_avoid_fatal_errors');
  }
  public set waitToAvoidFatalErrors(value: boolean | cdktf.IResolvable) {
    this._waitToAvoidFatalErrors = value;
  }
  public resetWaitToAvoidFatalErrors() {
    this._waitToAvoidFatalErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitToAvoidFatalErrorsInput() {
    return this._waitToAvoidFatalErrors;
  }
}
export interface SourceAmazonSellerPartnerResourceAllocationDefault {
}

export function sourceAmazonSellerPartnerResourceAllocationDefaultToTerraform(struct?: SourceAmazonSellerPartnerResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceAmazonSellerPartnerResourceAllocationDefaultToHclTerraform(struct?: SourceAmazonSellerPartnerResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceAmazonSellerPartnerResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceAmazonSellerPartnerResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAmazonSellerPartnerResourceAllocationDefault | undefined) {
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
export interface SourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirements {
}

export function sourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceAmazonSellerPartnerResourceAllocationJobSpecific {
}

export function sourceAmazonSellerPartnerResourceAllocationJobSpecificToTerraform(struct?: SourceAmazonSellerPartnerResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceAmazonSellerPartnerResourceAllocationJobSpecificToHclTerraform(struct?: SourceAmazonSellerPartnerResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceAmazonSellerPartnerResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceAmazonSellerPartnerResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAmazonSellerPartnerResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceAmazonSellerPartnerResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceAmazonSellerPartnerResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceAmazonSellerPartnerResourceAllocationJobSpecificOutputReference {
    return new SourceAmazonSellerPartnerResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceAmazonSellerPartnerResourceAllocation {
}

export function sourceAmazonSellerPartnerResourceAllocationToTerraform(struct?: SourceAmazonSellerPartnerResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceAmazonSellerPartnerResourceAllocationToHclTerraform(struct?: SourceAmazonSellerPartnerResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceAmazonSellerPartnerResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceAmazonSellerPartnerResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceAmazonSellerPartnerResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceAmazonSellerPartnerResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceAmazonSellerPartnerResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner airbyte_source_amazon_seller_partner}
*/
export class SourceAmazonSellerPartner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_amazon_seller_partner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceAmazonSellerPartner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceAmazonSellerPartner to import
  * @param importFromId The id of the existing SourceAmazonSellerPartner that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceAmazonSellerPartner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_amazon_seller_partner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_amazon_seller_partner airbyte_source_amazon_seller_partner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceAmazonSellerPartnerConfig
  */
  public constructor(scope: Construct, id: string, config: SourceAmazonSellerPartnerConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_amazon_seller_partner',
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
  private _configuration = new SourceAmazonSellerPartnerConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceAmazonSellerPartnerConfiguration) {
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
  private _resourceAllocation = new SourceAmazonSellerPartnerResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceAmazonSellerPartnerConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceAmazonSellerPartnerConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceAmazonSellerPartnerConfiguration",
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
