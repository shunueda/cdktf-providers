// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceFacebookMarketingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#configuration SourceFacebookMarketing#configuration}
  */
  readonly configuration: SourceFacebookMarketingConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#definition_id SourceFacebookMarketing#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#name SourceFacebookMarketing#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#secret_id SourceFacebookMarketing#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#workspace_id SourceFacebookMarketing#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth {
  /**
  * The value of the generated access token. From your App’s Dashboard, click on "Marketing API" then "Tools". Select permissions <b>ads_management, ads_read, read_insights, business_management</b>. Then click on "Get token". See the <a href="https://docs.airbyte.com/integrations/sources/facebook-marketing">docs</a> for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#access_token SourceFacebookMarketing#access_token}
  */
  readonly accessToken?: string;
  /**
  * Client ID for the Facebook Marketing API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#client_id SourceFacebookMarketing#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret for the Facebook Marketing API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#client_secret SourceFacebookMarketing#client_secret}
  */
  readonly clientSecret: string;
}

export function sourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauthToTerraform(struct?: SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth | cdktf.IResolvable): any {
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


export function sourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauthToHclTerraform(struct?: SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth | cdktf.IResolvable): any {
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

export class SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth | cdktf.IResolvable | undefined) {
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
}
export interface SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication {
  /**
  * The value of the generated access token. From your App’s Dashboard, click on "Marketing API" then "Tools". Select permissions <b>ads_management, ads_read, read_insights, business_management</b>. Then click on "Get token". See the <a href="https://docs.airbyte.com/integrations/sources/facebook-marketing">docs</a> for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#access_token SourceFacebookMarketing#access_token}
  */
  readonly accessToken: string;
}

export function sourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthenticationToTerraform(struct?: SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
  }
}


export function sourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthenticationToHclTerraform(struct?: SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
    }
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }
}
export interface SourceFacebookMarketingConfigurationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#authenticate_via_facebook_marketing_oauth SourceFacebookMarketing#authenticate_via_facebook_marketing_oauth}
  */
  readonly authenticateViaFacebookMarketingOauth?: SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#service_account_key_authentication SourceFacebookMarketing#service_account_key_authentication}
  */
  readonly serviceAccountKeyAuthentication?: SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication;
}

export function sourceFacebookMarketingConfigurationCredentialsToTerraform(struct?: SourceFacebookMarketingConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_via_facebook_marketing_oauth: sourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauthToTerraform(struct!.authenticateViaFacebookMarketingOauth),
    service_account_key_authentication: sourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthenticationToTerraform(struct!.serviceAccountKeyAuthentication),
  }
}


export function sourceFacebookMarketingConfigurationCredentialsToHclTerraform(struct?: SourceFacebookMarketingConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_via_facebook_marketing_oauth: {
      value: sourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauthToHclTerraform(struct!.authenticateViaFacebookMarketingOauth),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth",
    },
    service_account_key_authentication: {
      value: sourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthenticationToHclTerraform(struct!.serviceAccountKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFacebookMarketingConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFacebookMarketingConfigurationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateViaFacebookMarketingOauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateViaFacebookMarketingOauth = this._authenticateViaFacebookMarketingOauth?.internalValue;
    }
    if (this._serviceAccountKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyAuthentication = this._serviceAccountKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFacebookMarketingConfigurationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateViaFacebookMarketingOauth.internalValue = undefined;
      this._serviceAccountKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateViaFacebookMarketingOauth.internalValue = value.authenticateViaFacebookMarketingOauth;
      this._serviceAccountKeyAuthentication.internalValue = value.serviceAccountKeyAuthentication;
    }
  }

  // authenticate_via_facebook_marketing_oauth - computed: false, optional: true, required: false
  private _authenticateViaFacebookMarketingOauth = new SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauthOutputReference(this, "authenticate_via_facebook_marketing_oauth");
  public get authenticateViaFacebookMarketingOauth() {
    return this._authenticateViaFacebookMarketingOauth;
  }
  public putAuthenticateViaFacebookMarketingOauth(value: SourceFacebookMarketingConfigurationCredentialsAuthenticateViaFacebookMarketingOauth) {
    this._authenticateViaFacebookMarketingOauth.internalValue = value;
  }
  public resetAuthenticateViaFacebookMarketingOauth() {
    this._authenticateViaFacebookMarketingOauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateViaFacebookMarketingOauthInput() {
    return this._authenticateViaFacebookMarketingOauth.internalValue;
  }

  // service_account_key_authentication - computed: false, optional: true, required: false
  private _serviceAccountKeyAuthentication = new SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthenticationOutputReference(this, "service_account_key_authentication");
  public get serviceAccountKeyAuthentication() {
    return this._serviceAccountKeyAuthentication;
  }
  public putServiceAccountKeyAuthentication(value: SourceFacebookMarketingConfigurationCredentialsServiceAccountKeyAuthentication) {
    this._serviceAccountKeyAuthentication.internalValue = value;
  }
  public resetServiceAccountKeyAuthentication() {
    this._serviceAccountKeyAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyAuthenticationInput() {
    return this._serviceAccountKeyAuthentication.internalValue;
  }
}
export interface SourceFacebookMarketingConfigurationCustomInsights {
  /**
  * A list of chosen action_breakdowns for action_breakdowns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#action_breakdowns SourceFacebookMarketing#action_breakdowns}
  */
  readonly actionBreakdowns?: string[];
  /**
  * A list of chosen breakdowns for breakdowns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#breakdowns SourceFacebookMarketing#breakdowns}
  */
  readonly breakdowns?: string[];
  /**
  * The date until which you'd like to replicate data for this stream, in the format YYYY-MM-DDT00:00:00Z. All data generated between the start date and this end date will be replicated. Not setting this option will result in always syncing the latest data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#end_date SourceFacebookMarketing#end_date}
  */
  readonly endDate?: string;
  /**
  * A list of chosen fields for fields parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#fields SourceFacebookMarketing#fields}
  */
  readonly fields?: string[];
  /**
  * The insights job timeout. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#insights_job_timeout SourceFacebookMarketing#insights_job_timeout}
  */
  readonly insightsJobTimeout?: number;
  /**
  * The attribution window. Default: 28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#insights_lookback_window SourceFacebookMarketing#insights_lookback_window}
  */
  readonly insightsLookbackWindow?: number;
  /**
  * Chosen level for API. Default: "ad"; must be one of ["ad", "adset", "campaign", "account"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#level SourceFacebookMarketing#level}
  */
  readonly level?: string;
  /**
  * The name value of insight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#name SourceFacebookMarketing#name}
  */
  readonly name: string;
  /**
  * The date from which you'd like to replicate data for this stream, in the format YYYY-MM-DDT00:00:00Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#start_date SourceFacebookMarketing#start_date}
  */
  readonly startDate?: string;
  /**
  * Time window in days by which to aggregate statistics. The sync will be chunked into N day intervals, where N is the number of days you specified. For example, if you set this value to 7, then all statistics will be reported as 7-day aggregates by starting from the start_date. If the start and end dates are October 1st and October 30th, then the connector will output 5 records: 01 - 06, 07 - 13, 14 - 20, 21 - 27, and 28 - 30 (3 days only). The minimum allowed value for this field is 1, and the maximum is 89. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#time_increment SourceFacebookMarketing#time_increment}
  */
  readonly timeIncrement?: number;
}

export function sourceFacebookMarketingConfigurationCustomInsightsToTerraform(struct?: SourceFacebookMarketingConfigurationCustomInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_breakdowns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionBreakdowns),
    breakdowns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakdowns),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    insights_job_timeout: cdktf.numberToTerraform(struct!.insightsJobTimeout),
    insights_lookback_window: cdktf.numberToTerraform(struct!.insightsLookbackWindow),
    level: cdktf.stringToTerraform(struct!.level),
    name: cdktf.stringToTerraform(struct!.name),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    time_increment: cdktf.numberToTerraform(struct!.timeIncrement),
  }
}


export function sourceFacebookMarketingConfigurationCustomInsightsToHclTerraform(struct?: SourceFacebookMarketingConfigurationCustomInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_breakdowns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionBreakdowns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    breakdowns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakdowns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insights_job_timeout: {
      value: cdktf.numberToHclTerraform(struct!.insightsJobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insights_lookback_window: {
      value: cdktf.numberToHclTerraform(struct!.insightsLookbackWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    time_increment: {
      value: cdktf.numberToHclTerraform(struct!.timeIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFacebookMarketingConfigurationCustomInsightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceFacebookMarketingConfigurationCustomInsights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionBreakdowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBreakdowns = this._actionBreakdowns;
    }
    if (this._breakdowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakdowns = this._breakdowns;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._insightsJobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsJobTimeout = this._insightsJobTimeout;
    }
    if (this._insightsLookbackWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsLookbackWindow = this._insightsLookbackWindow;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._timeIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeIncrement = this._timeIncrement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFacebookMarketingConfigurationCustomInsights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionBreakdowns = undefined;
      this._breakdowns = undefined;
      this._endDate = undefined;
      this._fields = undefined;
      this._insightsJobTimeout = undefined;
      this._insightsLookbackWindow = undefined;
      this._level = undefined;
      this._name = undefined;
      this._startDate = undefined;
      this._timeIncrement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionBreakdowns = value.actionBreakdowns;
      this._breakdowns = value.breakdowns;
      this._endDate = value.endDate;
      this._fields = value.fields;
      this._insightsJobTimeout = value.insightsJobTimeout;
      this._insightsLookbackWindow = value.insightsLookbackWindow;
      this._level = value.level;
      this._name = value.name;
      this._startDate = value.startDate;
      this._timeIncrement = value.timeIncrement;
    }
  }

  // action_breakdowns - computed: true, optional: true, required: false
  private _actionBreakdowns?: string[]; 
  public get actionBreakdowns() {
    return this.getListAttribute('action_breakdowns');
  }
  public set actionBreakdowns(value: string[]) {
    this._actionBreakdowns = value;
  }
  public resetActionBreakdowns() {
    this._actionBreakdowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBreakdownsInput() {
    return this._actionBreakdowns;
  }

  // breakdowns - computed: true, optional: true, required: false
  private _breakdowns?: string[]; 
  public get breakdowns() {
    return this.getListAttribute('breakdowns');
  }
  public set breakdowns(value: string[]) {
    this._breakdowns = value;
  }
  public resetBreakdowns() {
    this._breakdowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakdownsInput() {
    return this._breakdowns;
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

  // fields - computed: true, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // insights_job_timeout - computed: true, optional: true, required: false
  private _insightsJobTimeout?: number; 
  public get insightsJobTimeout() {
    return this.getNumberAttribute('insights_job_timeout');
  }
  public set insightsJobTimeout(value: number) {
    this._insightsJobTimeout = value;
  }
  public resetInsightsJobTimeout() {
    this._insightsJobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsJobTimeoutInput() {
    return this._insightsJobTimeout;
  }

  // insights_lookback_window - computed: true, optional: true, required: false
  private _insightsLookbackWindow?: number; 
  public get insightsLookbackWindow() {
    return this.getNumberAttribute('insights_lookback_window');
  }
  public set insightsLookbackWindow(value: number) {
    this._insightsLookbackWindow = value;
  }
  public resetInsightsLookbackWindow() {
    this._insightsLookbackWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsLookbackWindowInput() {
    return this._insightsLookbackWindow;
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // start_date - computed: false, optional: true, required: false
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

  // time_increment - computed: true, optional: true, required: false
  private _timeIncrement?: number; 
  public get timeIncrement() {
    return this.getNumberAttribute('time_increment');
  }
  public set timeIncrement(value: number) {
    this._timeIncrement = value;
  }
  public resetTimeIncrement() {
    this._timeIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIncrementInput() {
    return this._timeIncrement;
  }
}

export class SourceFacebookMarketingConfigurationCustomInsightsList extends cdktf.ComplexList {
  public internalValue? : SourceFacebookMarketingConfigurationCustomInsights[] | cdktf.IResolvable

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
  public get(index: number): SourceFacebookMarketingConfigurationCustomInsightsOutputReference {
    return new SourceFacebookMarketingConfigurationCustomInsightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceFacebookMarketingConfiguration {
  /**
  * The value of the generated access token. From your App’s Dashboard, click on "Marketing API" then "Tools". Select permissions <b>ads_management, ads_read, read_insights, business_management</b>. Then click on "Get token". See the <a href="https://docs.airbyte.com/integrations/sources/facebook-marketing">docs</a> for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#access_token SourceFacebookMarketing#access_token}
  */
  readonly accessToken?: string;
  /**
  * The Facebook Ad account ID(s) to pull data from. The Ad account ID number is in the account dropdown menu or in your browser's address bar of your <a href="https://adsmanager.facebook.com/adsmanager/">Meta Ads Manager</a>. See the <a href="https://www.facebook.com/business/help/1492627900875762">docs</a> for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#account_ids SourceFacebookMarketing#account_ids}
  */
  readonly accountIds: string[];
  /**
  * Select the statuses you want to be loaded in the stream. If no specific statuses are selected, the API's default behavior applies, and some statuses may be filtered out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#ad_statuses SourceFacebookMarketing#ad_statuses}
  */
  readonly adStatuses?: string[];
  /**
  * Select the statuses you want to be loaded in the stream. If no specific statuses are selected, the API's default behavior applies, and some statuses may be filtered out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#adset_statuses SourceFacebookMarketing#adset_statuses}
  */
  readonly adsetStatuses?: string[];
  /**
  * Select the statuses you want to be loaded in the stream. If no specific statuses are selected, the API's default behavior applies, and some statuses may be filtered out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#campaign_statuses SourceFacebookMarketing#campaign_statuses}
  */
  readonly campaignStatuses?: string[];
  /**
  * Credentials for connecting to the Facebook Marketing API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#credentials SourceFacebookMarketing#credentials}
  */
  readonly credentials: SourceFacebookMarketingConfigurationCredentials;
  /**
  * A list which contains ad statistics entries, each entry must have a name and can contains fields, breakdowns or action_breakdowns. Click on "add" to fill this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#custom_insights SourceFacebookMarketing#custom_insights}
  */
  readonly customInsights?: SourceFacebookMarketingConfigurationCustomInsights[] | cdktf.IResolvable;
  /**
  * The date until which you'd like to replicate data for all incremental streams, in the format YYYY-MM-DDT00:00:00Z. All data generated between the start date and this end date will be replicated. Not setting this option will result in always syncing the latest data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#end_date SourceFacebookMarketing#end_date}
  */
  readonly endDate?: string;
  /**
  * Set to active if you want to fetch the thumbnail_url and store the result in thumbnail_data_url for each Ad Creative. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#fetch_thumbnail_images SourceFacebookMarketing#fetch_thumbnail_images}
  */
  readonly fetchThumbnailImages?: boolean | cdktf.IResolvable;
  /**
  * Insights Job Timeout establishes the maximum amount of time (in minutes) of waiting for the report job to complete. When timeout is reached the job is considered failed and we are trying to request smaller amount of data by breaking the job to few smaller ones. If you definitely know that 60 minutes is not enough for your report to be processed then you can decrease the timeout value, so we start breaking job to smaller parts faster. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#insights_job_timeout SourceFacebookMarketing#insights_job_timeout}
  */
  readonly insightsJobTimeout?: number;
  /**
  * The attribution window. Facebook freezes insight data 28 days after it was generated, which means that all data from the past 28 days may have changed since we last emitted it, so you can retrieve refreshed insights from the past by setting this parameter. If you set a custom lookback window value in Facebook account, please provide the same value here. Default: 28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#insights_lookback_window SourceFacebookMarketing#insights_lookback_window}
  */
  readonly insightsLookbackWindow?: number;
  /**
  * Page size used when sending requests to Facebook API to specify number of records per page when response has pagination. Most users do not need to set this field unless they specifically need to tune the connector to address specific issues or use cases. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#page_size SourceFacebookMarketing#page_size}
  */
  readonly pageSize?: number;
  /**
  * The date from which you'd like to replicate data for all incremental streams, in the format YYYY-MM-DDT00:00:00Z. If not set then all data will be replicated for usual streams and only last 2 years for insight streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#start_date SourceFacebookMarketing#start_date}
  */
  readonly startDate?: string;
}

export function sourceFacebookMarketingConfigurationToTerraform(struct?: SourceFacebookMarketingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    ad_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adStatuses),
    adset_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adsetStatuses),
    campaign_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.campaignStatuses),
    credentials: sourceFacebookMarketingConfigurationCredentialsToTerraform(struct!.credentials),
    custom_insights: cdktf.listMapper(sourceFacebookMarketingConfigurationCustomInsightsToTerraform, false)(struct!.customInsights),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    fetch_thumbnail_images: cdktf.booleanToTerraform(struct!.fetchThumbnailImages),
    insights_job_timeout: cdktf.numberToTerraform(struct!.insightsJobTimeout),
    insights_lookback_window: cdktf.numberToTerraform(struct!.insightsLookbackWindow),
    page_size: cdktf.numberToTerraform(struct!.pageSize),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function sourceFacebookMarketingConfigurationToHclTerraform(struct?: SourceFacebookMarketingConfiguration | cdktf.IResolvable): any {
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
    account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ad_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    adset_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adsetStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    campaign_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.campaignStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    credentials: {
      value: sourceFacebookMarketingConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFacebookMarketingConfigurationCredentials",
    },
    custom_insights: {
      value: cdktf.listMapperHcl(sourceFacebookMarketingConfigurationCustomInsightsToHclTerraform, false)(struct!.customInsights),
      isBlock: true,
      type: "list",
      storageClassType: "SourceFacebookMarketingConfigurationCustomInsightsList",
    },
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fetch_thumbnail_images: {
      value: cdktf.booleanToHclTerraform(struct!.fetchThumbnailImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insights_job_timeout: {
      value: cdktf.numberToHclTerraform(struct!.insightsJobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insights_lookback_window: {
      value: cdktf.numberToHclTerraform(struct!.insightsLookbackWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_size: {
      value: cdktf.numberToHclTerraform(struct!.pageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SourceFacebookMarketingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFacebookMarketingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._adStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.adStatuses = this._adStatuses;
    }
    if (this._adsetStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.adsetStatuses = this._adsetStatuses;
    }
    if (this._campaignStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.campaignStatuses = this._campaignStatuses;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._customInsights?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInsights = this._customInsights?.internalValue;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._fetchThumbnailImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchThumbnailImages = this._fetchThumbnailImages;
    }
    if (this._insightsJobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsJobTimeout = this._insightsJobTimeout;
    }
    if (this._insightsLookbackWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsLookbackWindow = this._insightsLookbackWindow;
    }
    if (this._pageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSize = this._pageSize;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFacebookMarketingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._accountIds = undefined;
      this._adStatuses = undefined;
      this._adsetStatuses = undefined;
      this._campaignStatuses = undefined;
      this._credentials.internalValue = undefined;
      this._customInsights.internalValue = undefined;
      this._endDate = undefined;
      this._fetchThumbnailImages = undefined;
      this._insightsJobTimeout = undefined;
      this._insightsLookbackWindow = undefined;
      this._pageSize = undefined;
      this._startDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._accountIds = value.accountIds;
      this._adStatuses = value.adStatuses;
      this._adsetStatuses = value.adsetStatuses;
      this._campaignStatuses = value.campaignStatuses;
      this._credentials.internalValue = value.credentials;
      this._customInsights.internalValue = value.customInsights;
      this._endDate = value.endDate;
      this._fetchThumbnailImages = value.fetchThumbnailImages;
      this._insightsJobTimeout = value.insightsJobTimeout;
      this._insightsLookbackWindow = value.insightsLookbackWindow;
      this._pageSize = value.pageSize;
      this._startDate = value.startDate;
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

  // account_ids - computed: false, optional: false, required: true
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // ad_statuses - computed: true, optional: true, required: false
  private _adStatuses?: string[]; 
  public get adStatuses() {
    return this.getListAttribute('ad_statuses');
  }
  public set adStatuses(value: string[]) {
    this._adStatuses = value;
  }
  public resetAdStatuses() {
    this._adStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adStatusesInput() {
    return this._adStatuses;
  }

  // adset_statuses - computed: true, optional: true, required: false
  private _adsetStatuses?: string[]; 
  public get adsetStatuses() {
    return this.getListAttribute('adset_statuses');
  }
  public set adsetStatuses(value: string[]) {
    this._adsetStatuses = value;
  }
  public resetAdsetStatuses() {
    this._adsetStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adsetStatusesInput() {
    return this._adsetStatuses;
  }

  // campaign_statuses - computed: true, optional: true, required: false
  private _campaignStatuses?: string[]; 
  public get campaignStatuses() {
    return this.getListAttribute('campaign_statuses');
  }
  public set campaignStatuses(value: string[]) {
    this._campaignStatuses = value;
  }
  public resetCampaignStatuses() {
    this._campaignStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignStatusesInput() {
    return this._campaignStatuses;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new SourceFacebookMarketingConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceFacebookMarketingConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // custom_insights - computed: false, optional: true, required: false
  private _customInsights = new SourceFacebookMarketingConfigurationCustomInsightsList(this, "custom_insights", false);
  public get customInsights() {
    return this._customInsights;
  }
  public putCustomInsights(value: SourceFacebookMarketingConfigurationCustomInsights[] | cdktf.IResolvable) {
    this._customInsights.internalValue = value;
  }
  public resetCustomInsights() {
    this._customInsights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInsightsInput() {
    return this._customInsights.internalValue;
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

  // fetch_thumbnail_images - computed: true, optional: true, required: false
  private _fetchThumbnailImages?: boolean | cdktf.IResolvable; 
  public get fetchThumbnailImages() {
    return this.getBooleanAttribute('fetch_thumbnail_images');
  }
  public set fetchThumbnailImages(value: boolean | cdktf.IResolvable) {
    this._fetchThumbnailImages = value;
  }
  public resetFetchThumbnailImages() {
    this._fetchThumbnailImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchThumbnailImagesInput() {
    return this._fetchThumbnailImages;
  }

  // insights_job_timeout - computed: true, optional: true, required: false
  private _insightsJobTimeout?: number; 
  public get insightsJobTimeout() {
    return this.getNumberAttribute('insights_job_timeout');
  }
  public set insightsJobTimeout(value: number) {
    this._insightsJobTimeout = value;
  }
  public resetInsightsJobTimeout() {
    this._insightsJobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsJobTimeoutInput() {
    return this._insightsJobTimeout;
  }

  // insights_lookback_window - computed: true, optional: true, required: false
  private _insightsLookbackWindow?: number; 
  public get insightsLookbackWindow() {
    return this.getNumberAttribute('insights_lookback_window');
  }
  public set insightsLookbackWindow(value: number) {
    this._insightsLookbackWindow = value;
  }
  public resetInsightsLookbackWindow() {
    this._insightsLookbackWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsLookbackWindowInput() {
    return this._insightsLookbackWindow;
  }

  // page_size - computed: true, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // start_date - computed: false, optional: true, required: false
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
export interface SourceFacebookMarketingResourceAllocationDefault {
}

export function sourceFacebookMarketingResourceAllocationDefaultToTerraform(struct?: SourceFacebookMarketingResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFacebookMarketingResourceAllocationDefaultToHclTerraform(struct?: SourceFacebookMarketingResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFacebookMarketingResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFacebookMarketingResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFacebookMarketingResourceAllocationDefault | undefined) {
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
export interface SourceFacebookMarketingResourceAllocationJobSpecificResourceRequirements {
}

export function sourceFacebookMarketingResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceFacebookMarketingResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFacebookMarketingResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceFacebookMarketingResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFacebookMarketingResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFacebookMarketingResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFacebookMarketingResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceFacebookMarketingResourceAllocationJobSpecific {
}

export function sourceFacebookMarketingResourceAllocationJobSpecificToTerraform(struct?: SourceFacebookMarketingResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFacebookMarketingResourceAllocationJobSpecificToHclTerraform(struct?: SourceFacebookMarketingResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFacebookMarketingResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceFacebookMarketingResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFacebookMarketingResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceFacebookMarketingResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceFacebookMarketingResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceFacebookMarketingResourceAllocationJobSpecificOutputReference {
    return new SourceFacebookMarketingResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceFacebookMarketingResourceAllocation {
}

export function sourceFacebookMarketingResourceAllocationToTerraform(struct?: SourceFacebookMarketingResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFacebookMarketingResourceAllocationToHclTerraform(struct?: SourceFacebookMarketingResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFacebookMarketingResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFacebookMarketingResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFacebookMarketingResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceFacebookMarketingResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceFacebookMarketingResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing airbyte_source_facebook_marketing}
*/
export class SourceFacebookMarketing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_facebook_marketing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceFacebookMarketing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceFacebookMarketing to import
  * @param importFromId The id of the existing SourceFacebookMarketing that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceFacebookMarketing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_facebook_marketing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_facebook_marketing airbyte_source_facebook_marketing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceFacebookMarketingConfig
  */
  public constructor(scope: Construct, id: string, config: SourceFacebookMarketingConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_facebook_marketing',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
  private _configuration = new SourceFacebookMarketingConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceFacebookMarketingConfiguration) {
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
  private _resourceAllocation = new SourceFacebookMarketingResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceFacebookMarketingConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceFacebookMarketingConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceFacebookMarketingConfiguration",
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
