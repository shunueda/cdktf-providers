// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceShopifyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#configuration SourceShopify#configuration}
  */
  readonly configuration: SourceShopifyConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#definition_id SourceShopify#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#name SourceShopify#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#secret_id SourceShopify#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#workspace_id SourceShopify#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceShopifyConfigurationCredentialsApiPassword {
  /**
  * The API Password for your private application in the `Shopify` store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#api_password SourceShopify#api_password}
  */
  readonly apiPassword: string;
}

export function sourceShopifyConfigurationCredentialsApiPasswordToTerraform(struct?: SourceShopifyConfigurationCredentialsApiPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_password: cdktf.stringToTerraform(struct!.apiPassword),
  }
}


export function sourceShopifyConfigurationCredentialsApiPasswordToHclTerraform(struct?: SourceShopifyConfigurationCredentialsApiPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_password: {
      value: cdktf.stringToHclTerraform(struct!.apiPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceShopifyConfigurationCredentialsApiPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShopifyConfigurationCredentialsApiPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPassword = this._apiPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShopifyConfigurationCredentialsApiPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiPassword = value.apiPassword;
    }
  }

  // api_password - computed: false, optional: false, required: true
  private _apiPassword?: string; 
  public get apiPassword() {
    return this.getStringAttribute('api_password');
  }
  public set apiPassword(value: string) {
    this._apiPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPasswordInput() {
    return this._apiPassword;
  }
}
export interface SourceShopifyConfigurationCredentialsOAuth20 {
  /**
  * The Access Token for making authenticated requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#access_token SourceShopify#access_token}
  */
  readonly accessToken?: string;
  /**
  * The Client ID of the Shopify developer application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#client_id SourceShopify#client_id}
  */
  readonly clientId?: string;
  /**
  * The Client Secret of the Shopify developer application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#client_secret SourceShopify#client_secret}
  */
  readonly clientSecret?: string;
}

export function sourceShopifyConfigurationCredentialsOAuth20ToTerraform(struct?: SourceShopifyConfigurationCredentialsOAuth20 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function sourceShopifyConfigurationCredentialsOAuth20ToHclTerraform(struct?: SourceShopifyConfigurationCredentialsOAuth20 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceShopifyConfigurationCredentialsOAuth20OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShopifyConfigurationCredentialsOAuth20 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShopifyConfigurationCredentialsOAuth20 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
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
}
export interface SourceShopifyConfigurationCredentials {
  /**
  * API Password Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#api_password SourceShopify#api_password}
  */
  readonly apiPassword?: SourceShopifyConfigurationCredentialsApiPassword;
  /**
  * OAuth2.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#o_auth20 SourceShopify#o_auth20}
  */
  readonly oAuth20?: SourceShopifyConfigurationCredentialsOAuth20;
}

export function sourceShopifyConfigurationCredentialsToTerraform(struct?: SourceShopifyConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_password: sourceShopifyConfigurationCredentialsApiPasswordToTerraform(struct!.apiPassword),
    o_auth20: sourceShopifyConfigurationCredentialsOAuth20ToTerraform(struct!.oAuth20),
  }
}


export function sourceShopifyConfigurationCredentialsToHclTerraform(struct?: SourceShopifyConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_password: {
      value: sourceShopifyConfigurationCredentialsApiPasswordToHclTerraform(struct!.apiPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceShopifyConfigurationCredentialsApiPassword",
    },
    o_auth20: {
      value: sourceShopifyConfigurationCredentialsOAuth20ToHclTerraform(struct!.oAuth20),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceShopifyConfigurationCredentialsOAuth20",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceShopifyConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShopifyConfigurationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPassword = this._apiPassword?.internalValue;
    }
    if (this._oAuth20?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuth20 = this._oAuth20?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShopifyConfigurationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiPassword.internalValue = undefined;
      this._oAuth20.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiPassword.internalValue = value.apiPassword;
      this._oAuth20.internalValue = value.oAuth20;
    }
  }

  // api_password - computed: false, optional: true, required: false
  private _apiPassword = new SourceShopifyConfigurationCredentialsApiPasswordOutputReference(this, "api_password");
  public get apiPassword() {
    return this._apiPassword;
  }
  public putApiPassword(value: SourceShopifyConfigurationCredentialsApiPassword) {
    this._apiPassword.internalValue = value;
  }
  public resetApiPassword() {
    this._apiPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPasswordInput() {
    return this._apiPassword.internalValue;
  }

  // o_auth20 - computed: false, optional: true, required: false
  private _oAuth20 = new SourceShopifyConfigurationCredentialsOAuth20OutputReference(this, "o_auth20");
  public get oAuth20() {
    return this._oAuth20;
  }
  public putOAuth20(value: SourceShopifyConfigurationCredentialsOAuth20) {
    this._oAuth20.internalValue = value;
  }
  public resetOAuth20() {
    this._oAuth20.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuth20Input() {
    return this._oAuth20.internalValue;
  }
}
export interface SourceShopifyConfiguration {
  /**
  * Defines what would be a date range per single BULK Job. Default: 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#bulk_window_in_days SourceShopify#bulk_window_in_days}
  */
  readonly bulkWindowInDays?: number;
  /**
  * The authorization method to use to retrieve data from Shopify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#credentials SourceShopify#credentials}
  */
  readonly credentials?: SourceShopifyConfigurationCredentials;
  /**
  * Defines which API type (REST/BULK) to use to fetch `Transactions` data. If you are a `Shopify Plus` user, leave the default value to speed up the fetch. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#fetch_transactions_user_id SourceShopify#fetch_transactions_user_id}
  */
  readonly fetchTransactionsUserId?: boolean | cdktf.IResolvable;
  /**
  * The threshold, after which the single BULK Job should be checkpointed (min: 15k, max: 1M). Default: 100000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#job_checkpoint_interval SourceShopify#job_checkpoint_interval}
  */
  readonly jobCheckpointInterval?: number;
  /**
  * If enabled, the `Product Variants` stream attempts to include `Presentment prices` field (may affect the performance). Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#job_product_variants_include_pres_prices SourceShopify#job_product_variants_include_pres_prices}
  */
  readonly jobProductVariantsIncludePresPrices?: boolean | cdktf.IResolvable;
  /**
  * The max time in seconds, after which the single BULK Job should be `CANCELED` and retried. The bigger the value the longer the BULK Job is allowed to run. Default: 7200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#job_termination_threshold SourceShopify#job_termination_threshold}
  */
  readonly jobTerminationThreshold?: number;
  /**
  * The name of your Shopify store found in the URL. For example, if your URL was https://NAME.myshopify.com, then the name would be 'NAME' or 'NAME.myshopify.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#shop SourceShopify#shop}
  */
  readonly shop: string;
  /**
  * The date you would like to replicate data from. Format: YYYY-MM-DD. Any data before this date will not be replicated. Default: "2020-01-01"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#start_date SourceShopify#start_date}
  */
  readonly startDate?: string;
}

export function sourceShopifyConfigurationToTerraform(struct?: SourceShopifyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bulk_window_in_days: cdktf.numberToTerraform(struct!.bulkWindowInDays),
    credentials: sourceShopifyConfigurationCredentialsToTerraform(struct!.credentials),
    fetch_transactions_user_id: cdktf.booleanToTerraform(struct!.fetchTransactionsUserId),
    job_checkpoint_interval: cdktf.numberToTerraform(struct!.jobCheckpointInterval),
    job_product_variants_include_pres_prices: cdktf.booleanToTerraform(struct!.jobProductVariantsIncludePresPrices),
    job_termination_threshold: cdktf.numberToTerraform(struct!.jobTerminationThreshold),
    shop: cdktf.stringToTerraform(struct!.shop),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function sourceShopifyConfigurationToHclTerraform(struct?: SourceShopifyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bulk_window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.bulkWindowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    credentials: {
      value: sourceShopifyConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceShopifyConfigurationCredentials",
    },
    fetch_transactions_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.fetchTransactionsUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_checkpoint_interval: {
      value: cdktf.numberToHclTerraform(struct!.jobCheckpointInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_product_variants_include_pres_prices: {
      value: cdktf.booleanToHclTerraform(struct!.jobProductVariantsIncludePresPrices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_termination_threshold: {
      value: cdktf.numberToHclTerraform(struct!.jobTerminationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shop: {
      value: cdktf.stringToHclTerraform(struct!.shop),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceShopifyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShopifyConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bulkWindowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkWindowInDays = this._bulkWindowInDays;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._fetchTransactionsUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchTransactionsUserId = this._fetchTransactionsUserId;
    }
    if (this._jobCheckpointInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCheckpointInterval = this._jobCheckpointInterval;
    }
    if (this._jobProductVariantsIncludePresPrices !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobProductVariantsIncludePresPrices = this._jobProductVariantsIncludePresPrices;
    }
    if (this._jobTerminationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTerminationThreshold = this._jobTerminationThreshold;
    }
    if (this._shop !== undefined) {
      hasAnyValues = true;
      internalValueResult.shop = this._shop;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShopifyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bulkWindowInDays = undefined;
      this._credentials.internalValue = undefined;
      this._fetchTransactionsUserId = undefined;
      this._jobCheckpointInterval = undefined;
      this._jobProductVariantsIncludePresPrices = undefined;
      this._jobTerminationThreshold = undefined;
      this._shop = undefined;
      this._startDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bulkWindowInDays = value.bulkWindowInDays;
      this._credentials.internalValue = value.credentials;
      this._fetchTransactionsUserId = value.fetchTransactionsUserId;
      this._jobCheckpointInterval = value.jobCheckpointInterval;
      this._jobProductVariantsIncludePresPrices = value.jobProductVariantsIncludePresPrices;
      this._jobTerminationThreshold = value.jobTerminationThreshold;
      this._shop = value.shop;
      this._startDate = value.startDate;
    }
  }

  // bulk_window_in_days - computed: true, optional: true, required: false
  private _bulkWindowInDays?: number; 
  public get bulkWindowInDays() {
    return this.getNumberAttribute('bulk_window_in_days');
  }
  public set bulkWindowInDays(value: number) {
    this._bulkWindowInDays = value;
  }
  public resetBulkWindowInDays() {
    this._bulkWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkWindowInDaysInput() {
    return this._bulkWindowInDays;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new SourceShopifyConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceShopifyConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // fetch_transactions_user_id - computed: true, optional: true, required: false
  private _fetchTransactionsUserId?: boolean | cdktf.IResolvable; 
  public get fetchTransactionsUserId() {
    return this.getBooleanAttribute('fetch_transactions_user_id');
  }
  public set fetchTransactionsUserId(value: boolean | cdktf.IResolvable) {
    this._fetchTransactionsUserId = value;
  }
  public resetFetchTransactionsUserId() {
    this._fetchTransactionsUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchTransactionsUserIdInput() {
    return this._fetchTransactionsUserId;
  }

  // job_checkpoint_interval - computed: true, optional: true, required: false
  private _jobCheckpointInterval?: number; 
  public get jobCheckpointInterval() {
    return this.getNumberAttribute('job_checkpoint_interval');
  }
  public set jobCheckpointInterval(value: number) {
    this._jobCheckpointInterval = value;
  }
  public resetJobCheckpointInterval() {
    this._jobCheckpointInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCheckpointIntervalInput() {
    return this._jobCheckpointInterval;
  }

  // job_product_variants_include_pres_prices - computed: true, optional: true, required: false
  private _jobProductVariantsIncludePresPrices?: boolean | cdktf.IResolvable; 
  public get jobProductVariantsIncludePresPrices() {
    return this.getBooleanAttribute('job_product_variants_include_pres_prices');
  }
  public set jobProductVariantsIncludePresPrices(value: boolean | cdktf.IResolvable) {
    this._jobProductVariantsIncludePresPrices = value;
  }
  public resetJobProductVariantsIncludePresPrices() {
    this._jobProductVariantsIncludePresPrices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobProductVariantsIncludePresPricesInput() {
    return this._jobProductVariantsIncludePresPrices;
  }

  // job_termination_threshold - computed: true, optional: true, required: false
  private _jobTerminationThreshold?: number; 
  public get jobTerminationThreshold() {
    return this.getNumberAttribute('job_termination_threshold');
  }
  public set jobTerminationThreshold(value: number) {
    this._jobTerminationThreshold = value;
  }
  public resetJobTerminationThreshold() {
    this._jobTerminationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTerminationThresholdInput() {
    return this._jobTerminationThreshold;
  }

  // shop - computed: false, optional: false, required: true
  private _shop?: string; 
  public get shop() {
    return this.getStringAttribute('shop');
  }
  public set shop(value: string) {
    this._shop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shopInput() {
    return this._shop;
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
}
export interface SourceShopifyResourceAllocationDefault {
}

export function sourceShopifyResourceAllocationDefaultToTerraform(struct?: SourceShopifyResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceShopifyResourceAllocationDefaultToHclTerraform(struct?: SourceShopifyResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceShopifyResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShopifyResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShopifyResourceAllocationDefault | undefined) {
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
export interface SourceShopifyResourceAllocationJobSpecificResourceRequirements {
}

export function sourceShopifyResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceShopifyResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceShopifyResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceShopifyResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceShopifyResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShopifyResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShopifyResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceShopifyResourceAllocationJobSpecific {
}

export function sourceShopifyResourceAllocationJobSpecificToTerraform(struct?: SourceShopifyResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceShopifyResourceAllocationJobSpecificToHclTerraform(struct?: SourceShopifyResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceShopifyResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceShopifyResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShopifyResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceShopifyResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceShopifyResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceShopifyResourceAllocationJobSpecificOutputReference {
    return new SourceShopifyResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceShopifyResourceAllocation {
}

export function sourceShopifyResourceAllocationToTerraform(struct?: SourceShopifyResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceShopifyResourceAllocationToHclTerraform(struct?: SourceShopifyResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceShopifyResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShopifyResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShopifyResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceShopifyResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceShopifyResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify airbyte_source_shopify}
*/
export class SourceShopify extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_shopify";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceShopify resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceShopify to import
  * @param importFromId The id of the existing SourceShopify that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceShopify to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_shopify", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shopify airbyte_source_shopify} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceShopifyConfig
  */
  public constructor(scope: Construct, id: string, config: SourceShopifyConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_shopify',
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
  private _configuration = new SourceShopifyConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceShopifyConfiguration) {
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
  private _resourceAllocation = new SourceShopifyResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceShopifyConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceShopifyConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceShopifyConfiguration",
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
