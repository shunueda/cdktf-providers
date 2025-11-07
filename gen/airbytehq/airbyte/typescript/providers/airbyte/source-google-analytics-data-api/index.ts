// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceGoogleAnalyticsDataApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#configuration SourceGoogleAnalyticsDataApi#configuration}
  */
  readonly configuration: SourceGoogleAnalyticsDataApiConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#definition_id SourceGoogleAnalyticsDataApi#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#name SourceGoogleAnalyticsDataApi#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#secret_id SourceGoogleAnalyticsDataApi#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#workspace_id SourceGoogleAnalyticsDataApi#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth {
  /**
  * Access Token for making authenticated requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#access_token SourceGoogleAnalyticsDataApi#access_token}
  */
  readonly accessToken?: string;
  /**
  * The Client ID of your Google Analytics developer application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#client_id SourceGoogleAnalyticsDataApi#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret of your Google Analytics developer application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#client_secret SourceGoogleAnalyticsDataApi#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The token for obtaining a new access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#refresh_token SourceGoogleAnalyticsDataApi#refresh_token}
  */
  readonly refreshToken: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauthToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauthToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth | cdktf.IResolvable): any {
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
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth | cdktf.IResolvable | undefined {
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
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
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
      this._refreshToken = value.refreshToken;
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
}
export interface SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication {
  /**
  * The JSON key linked to the service account used for authorization. For steps on obtaining this key, refer to <a href="https://docs.airbyte.com/integrations/sources/google-analytics-data-api/#setup-guide">the setup guide</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#credentials_json SourceGoogleAnalyticsDataApi#credentials_json}
  */
  readonly credentialsJson: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthenticationToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_json: cdktf.stringToTerraform(struct!.credentialsJson),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthenticationToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_json: {
      value: cdktf.stringToHclTerraform(struct!.credentialsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsJson = this._credentialsJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsJson = value.credentialsJson;
    }
  }

  // credentials_json - computed: false, optional: false, required: true
  private _credentialsJson?: string; 
  public get credentialsJson() {
    return this.getStringAttribute('credentials_json');
  }
  public set credentialsJson(value: string) {
    this._credentialsJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsJsonInput() {
    return this._credentialsJson;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#authenticate_via_google_oauth SourceGoogleAnalyticsDataApi#authenticate_via_google_oauth}
  */
  readonly authenticateViaGoogleOauth?: SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#service_account_key_authentication SourceGoogleAnalyticsDataApi#service_account_key_authentication}
  */
  readonly serviceAccountKeyAuthentication?: SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication;
}

export function sourceGoogleAnalyticsDataApiConfigurationCredentialsToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_via_google_oauth: sourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauthToTerraform(struct!.authenticateViaGoogleOauth),
    service_account_key_authentication: sourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthenticationToTerraform(struct!.serviceAccountKeyAuthentication),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCredentialsToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_via_google_oauth: {
      value: sourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauthToHclTerraform(struct!.authenticateViaGoogleOauth),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth",
    },
    service_account_key_authentication: {
      value: sourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthenticationToHclTerraform(struct!.serviceAccountKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateViaGoogleOauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateViaGoogleOauth = this._authenticateViaGoogleOauth?.internalValue;
    }
    if (this._serviceAccountKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyAuthentication = this._serviceAccountKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateViaGoogleOauth.internalValue = undefined;
      this._serviceAccountKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateViaGoogleOauth.internalValue = value.authenticateViaGoogleOauth;
      this._serviceAccountKeyAuthentication.internalValue = value.serviceAccountKeyAuthentication;
    }
  }

  // authenticate_via_google_oauth - computed: false, optional: true, required: false
  private _authenticateViaGoogleOauth = new SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauthOutputReference(this, "authenticate_via_google_oauth");
  public get authenticateViaGoogleOauth() {
    return this._authenticateViaGoogleOauth;
  }
  public putAuthenticateViaGoogleOauth(value: SourceGoogleAnalyticsDataApiConfigurationCredentialsAuthenticateViaGoogleOauth) {
    this._authenticateViaGoogleOauth.internalValue = value;
  }
  public resetAuthenticateViaGoogleOauth() {
    this._authenticateViaGoogleOauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateViaGoogleOauthInput() {
    return this._authenticateViaGoogleOauth.internalValue;
  }

  // service_account_key_authentication - computed: false, optional: true, required: false
  private _serviceAccountKeyAuthentication = new SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthenticationOutputReference(this, "service_account_key_authentication");
  public get serviceAccountKeyAuthentication() {
    return this._serviceAccountKeyAuthentication;
  }
  public putServiceAccountKeyAuthentication(value: SourceGoogleAnalyticsDataApiConfigurationCredentialsServiceAccountKeyAuthentication) {
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
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled {
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabledToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabledToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings {
  /**
  * If true, accumulates the result from first touch day to the end day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#accumulate SourceGoogleAnalyticsDataApi#accumulate}
  */
  readonly accumulate?: boolean | cdktf.IResolvable;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettingsToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accumulate: cdktf.booleanToTerraform(struct!.accumulate),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettingsToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accumulate: {
      value: cdktf.booleanToHclTerraform(struct!.accumulate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accumulate !== undefined) {
      hasAnyValues = true;
      internalValueResult.accumulate = this._accumulate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accumulate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accumulate = value.accumulate;
    }
  }

  // accumulate - computed: false, optional: true, required: false
  private _accumulate?: boolean | cdktf.IResolvable; 
  public get accumulate() {
    return this.getBooleanAttribute('accumulate');
  }
  public set accumulate(value: boolean | cdktf.IResolvable) {
    this._accumulate = value;
  }
  public resetAccumulate() {
    this._accumulate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accumulateInput() {
    return this._accumulate;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#end_date SourceGoogleAnalyticsDataApi#end_date}
  */
  readonly endDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#start_date SourceGoogleAnalyticsDataApi#start_date}
  */
  readonly startDate: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRangeToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRangeToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
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

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDate = undefined;
      this._startDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#date_range SourceGoogleAnalyticsDataApi#date_range}
  */
  readonly dateRange: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRange;
  /**
  * Dimension used by the cohort. Required and only supports `firstSessionDate`. must be "firstSessionDate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#dimension SourceGoogleAnalyticsDataApi#dimension}
  */
  readonly dimension: string;
  /**
  * Assigns a name to this cohort. If not set, cohorts are named by their zero based index cohort_0, cohort_1, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#name SourceGoogleAnalyticsDataApi#name}
  */
  readonly name?: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_range: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRangeToTerraform(struct!.dateRange),
    dimension: cdktf.stringToTerraform(struct!.dimension),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_range: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRange",
    },
    dimension: {
      value: cdktf.stringToHclTerraform(struct!.dimension),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateRange.internalValue = undefined;
      this._dimension = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateRange.internalValue = value.dateRange;
      this._dimension = value.dimension;
      this._name = value.name;
    }
  }

  // date_range - computed: false, optional: false, required: true
  private _dateRange = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsDateRange) {
    this._dateRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohorts[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsOutputReference {
    return new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange {
  /**
  * Specifies the end date of the extended reporting date range for a cohort report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#end_offset SourceGoogleAnalyticsDataApi#end_offset}
  */
  readonly endOffset: number;
  /**
  * The granularity used to interpret the startOffset and endOffset for the extended reporting date range for a cohort report. must be one of ["GRANULARITY_UNSPECIFIED", "DAILY", "WEEKLY", "MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#granularity SourceGoogleAnalyticsDataApi#granularity}
  */
  readonly granularity: string;
  /**
  * Specifies the start date of the extended reporting date range for a cohort report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#start_offset SourceGoogleAnalyticsDataApi#start_offset}
  */
  readonly startOffset?: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRangeToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_offset: cdktf.numberToTerraform(struct!.endOffset),
    granularity: cdktf.stringToTerraform(struct!.granularity),
    start_offset: cdktf.numberToTerraform(struct!.startOffset),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRangeToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_offset: {
      value: cdktf.numberToHclTerraform(struct!.endOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    granularity: {
      value: cdktf.stringToHclTerraform(struct!.granularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_offset: {
      value: cdktf.numberToHclTerraform(struct!.startOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endOffset = this._endOffset;
    }
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._startOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startOffset = this._startOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endOffset = undefined;
      this._granularity = undefined;
      this._startOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endOffset = value.endOffset;
      this._granularity = value.granularity;
      this._startOffset = value.startOffset;
    }
  }

  // end_offset - computed: false, optional: false, required: true
  private _endOffset?: number; 
  public get endOffset() {
    return this.getNumberAttribute('end_offset');
  }
  public set endOffset(value: number) {
    this._endOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endOffsetInput() {
    return this._endOffset;
  }

  // granularity - computed: false, optional: false, required: true
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // start_offset - computed: false, optional: true, required: false
  private _startOffset?: number; 
  public get startOffset() {
    return this.getNumberAttribute('start_offset');
  }
  public set startOffset(value: number) {
    this._startOffset = value;
  }
  public resetStartOffset() {
    this._startOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOffsetInput() {
    return this._startOffset;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled {
  /**
  * Optional settings for a cohort report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#cohort_report_settings SourceGoogleAnalyticsDataApi#cohort_report_settings}
  */
  readonly cohortReportSettings?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#cohorts SourceGoogleAnalyticsDataApi#cohorts}
  */
  readonly cohorts?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#cohorts_range SourceGoogleAnalyticsDataApi#cohorts_range}
  */
  readonly cohortsRange?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cohort_report_settings: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettingsToTerraform(struct!.cohortReportSettings),
    cohorts: cdktf.listMapper(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsToTerraform, false)(struct!.cohorts),
    cohorts_range: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRangeToTerraform(struct!.cohortsRange),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cohort_report_settings: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettingsToHclTerraform(struct!.cohortReportSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings",
    },
    cohorts: {
      value: cdktf.listMapperHcl(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsToHclTerraform, false)(struct!.cohorts),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsList",
    },
    cohorts_range: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRangeToHclTerraform(struct!.cohortsRange),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cohortReportSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohortReportSettings = this._cohortReportSettings?.internalValue;
    }
    if (this._cohorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohorts = this._cohorts?.internalValue;
    }
    if (this._cohortsRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohortsRange = this._cohortsRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cohortReportSettings.internalValue = undefined;
      this._cohorts.internalValue = undefined;
      this._cohortsRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cohortReportSettings.internalValue = value.cohortReportSettings;
      this._cohorts.internalValue = value.cohorts;
      this._cohortsRange.internalValue = value.cohortsRange;
    }
  }

  // cohort_report_settings - computed: false, optional: true, required: false
  private _cohortReportSettings = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettingsOutputReference(this, "cohort_report_settings");
  public get cohortReportSettings() {
    return this._cohortReportSettings;
  }
  public putCohortReportSettings(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortReportSettings) {
    this._cohortReportSettings.internalValue = value;
  }
  public resetCohortReportSettings() {
    this._cohortReportSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortReportSettingsInput() {
    return this._cohortReportSettings.internalValue;
  }

  // cohorts - computed: false, optional: true, required: false
  private _cohorts = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsList(this, "cohorts", false);
  public get cohorts() {
    return this._cohorts;
  }
  public putCohorts(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohorts[] | cdktf.IResolvable) {
    this._cohorts.internalValue = value;
  }
  public resetCohorts() {
    this._cohorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortsInput() {
    return this._cohorts.internalValue;
  }

  // cohorts_range - computed: false, optional: true, required: false
  private _cohortsRange = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRangeOutputReference(this, "cohorts_range");
  public get cohortsRange() {
    return this._cohortsRange;
  }
  public putCohortsRange(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledCohortsRange) {
    this._cohortsRange.internalValue = value;
  }
  public resetCohortsRange() {
    this._cohortsRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortsRangeInput() {
    return this._cohortsRange.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#disabled SourceGoogleAnalyticsDataApi#disabled}
  */
  readonly disabled?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#enabled SourceGoogleAnalyticsDataApi#enabled}
  */
  readonly enabled?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabledToTerraform(struct!.disabled),
    enabled: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledToTerraform(struct!.enabled),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled",
    },
    enabled: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#from_value SourceGoogleAnalyticsDataApi#from_value}
  */
  readonly fromValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#to_value SourceGoogleAnalyticsDataApi#to_value}
  */
  readonly toValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueToTerraform(struct!.fromValue),
    to_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueToTerraform(struct!.toValue),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueToHclTerraform(struct!.fromValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValue",
    },
    to_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueToHclTerraform(struct!.toValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._toValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toValue = this._toValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = undefined;
      this._toValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = value.fromValue;
      this._toValue.internalValue = value.toValue;
    }
  }

  // from_value - computed: false, optional: false, required: true
  private _fromValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterFromValue) {
    this._fromValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // to_value - computed: false, optional: false, required: true
  private _toValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValueOutputReference(this, "to_value");
  public get toValue() {
    return this._toValue;
  }
  public putToValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToValue) {
    this._toValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toValueInput() {
    return this._toValue.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#values SourceGoogleAnalyticsDataApi#values}
  */
  readonly values: string[];
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#operation SourceGoogleAnalyticsDataApi#operation}
  */
  readonly operation: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operation),
    value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string[]; 
  public get operation() {
    return this.getListAttribute('operation');
  }
  public set operation(value: string[]) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#match_type SourceGoogleAnalyticsDataApi#match_type}
  */
  readonly matchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string[]; 
  public get matchType() {
    return this.getListAttribute('match_type');
  }
  public set matchType(value: string[]) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#between_filter SourceGoogleAnalyticsDataApi#between_filter}
  */
  readonly betweenFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#in_list_filter SourceGoogleAnalyticsDataApi#in_list_filter}
  */
  readonly inListFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#numeric_filter SourceGoogleAnalyticsDataApi#numeric_filter}
  */
  readonly numericFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#string_filter SourceGoogleAnalyticsDataApi#string_filter}
  */
  readonly stringFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToTerraform(struct!.betweenFilter),
    in_list_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilterToTerraform(struct!.inListFilter),
    numeric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterToTerraform(struct!.numericFilter),
    string_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilterToTerraform(struct!.stringFilter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterToHclTerraform(struct!.betweenFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilter",
    },
    in_list_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilterToHclTerraform(struct!.inListFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilter",
    },
    numeric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterToHclTerraform(struct!.numericFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilter",
    },
    string_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilterToHclTerraform(struct!.stringFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenFilter = this._betweenFilter?.internalValue;
    }
    if (this._inListFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inListFilter = this._inListFilter?.internalValue;
    }
    if (this._numericFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFilter = this._numericFilter?.internalValue;
    }
    if (this._stringFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = undefined;
      this._inListFilter.internalValue = undefined;
      this._numericFilter.internalValue = undefined;
      this._stringFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = value.betweenFilter;
      this._inListFilter.internalValue = value.inListFilter;
      this._numericFilter.internalValue = value.numericFilter;
      this._stringFilter.internalValue = value.stringFilter;
    }
  }

  // between_filter - computed: false, optional: true, required: false
  private _betweenFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilterOutputReference(this, "between_filter");
  public get betweenFilter() {
    return this._betweenFilter;
  }
  public putBetweenFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterBetweenFilter) {
    this._betweenFilter.internalValue = value;
  }
  public resetBetweenFilter() {
    this._betweenFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenFilterInput() {
    return this._betweenFilter.internalValue;
  }

  // in_list_filter - computed: false, optional: true, required: false
  private _inListFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilterOutputReference(this, "in_list_filter");
  public get inListFilter() {
    return this._inListFilter;
  }
  public putInListFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterInListFilter) {
    this._inListFilter.internalValue = value;
  }
  public resetInListFilter() {
    this._inListFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inListFilterInput() {
    return this._inListFilter.internalValue;
  }

  // numeric_filter - computed: false, optional: true, required: false
  private _numericFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilterOutputReference(this, "numeric_filter");
  public get numericFilter() {
    return this._numericFilter;
  }
  public putNumericFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterNumericFilter) {
    this._numericFilter.internalValue = value;
  }
  public resetNumericFilter() {
    this._numericFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFilterInput() {
    return this._numericFilter.internalValue;
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilterOutputReference(this, "string_filter");
  public get stringFilter() {
    return this._stringFilter;
  }
  public putStringFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterStringFilter) {
    this._stringFilter.internalValue = value;
  }
  public resetStringFilter() {
    this._stringFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#field_name SourceGoogleAnalyticsDataApi#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterToTerraform(struct!.filter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressions[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsOutputReference {
    return new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#expressions SourceGoogleAnalyticsDataApi#expressions}
  */
  readonly expressions: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressions[] | cdktf.IResolvable;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsToTerraform, false)(struct!.expressions),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsToHclTerraform, false)(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressions.internalValue = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressionsList(this, "expressions", false);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupExpressions[] | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#from_value SourceGoogleAnalyticsDataApi#from_value}
  */
  readonly fromValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#to_value SourceGoogleAnalyticsDataApi#to_value}
  */
  readonly toValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueToTerraform(struct!.fromValue),
    to_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueToTerraform(struct!.toValue),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueToHclTerraform(struct!.fromValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue",
    },
    to_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueToHclTerraform(struct!.toValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._toValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toValue = this._toValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = undefined;
      this._toValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = value.fromValue;
      this._toValue.internalValue = value.toValue;
    }
  }

  // from_value - computed: false, optional: false, required: true
  private _fromValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterFromValue) {
    this._fromValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // to_value - computed: false, optional: false, required: true
  private _toValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValueOutputReference(this, "to_value");
  public get toValue() {
    return this._toValue;
  }
  public putToValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToValue) {
    this._toValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toValueInput() {
    return this._toValue.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#values SourceGoogleAnalyticsDataApi#values}
  */
  readonly values: string[];
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#operation SourceGoogleAnalyticsDataApi#operation}
  */
  readonly operation: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operation),
    value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string[]; 
  public get operation() {
    return this.getListAttribute('operation');
  }
  public set operation(value: string[]) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#match_type SourceGoogleAnalyticsDataApi#match_type}
  */
  readonly matchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string[]; 
  public get matchType() {
    return this.getListAttribute('match_type');
  }
  public set matchType(value: string[]) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#between_filter SourceGoogleAnalyticsDataApi#between_filter}
  */
  readonly betweenFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#in_list_filter SourceGoogleAnalyticsDataApi#in_list_filter}
  */
  readonly inListFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#numeric_filter SourceGoogleAnalyticsDataApi#numeric_filter}
  */
  readonly numericFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#string_filter SourceGoogleAnalyticsDataApi#string_filter}
  */
  readonly stringFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToTerraform(struct!.betweenFilter),
    in_list_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilterToTerraform(struct!.inListFilter),
    numeric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterToTerraform(struct!.numericFilter),
    string_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilterToTerraform(struct!.stringFilter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterToHclTerraform(struct!.betweenFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter",
    },
    in_list_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilterToHclTerraform(struct!.inListFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter",
    },
    numeric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterToHclTerraform(struct!.numericFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter",
    },
    string_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilterToHclTerraform(struct!.stringFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenFilter = this._betweenFilter?.internalValue;
    }
    if (this._inListFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inListFilter = this._inListFilter?.internalValue;
    }
    if (this._numericFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFilter = this._numericFilter?.internalValue;
    }
    if (this._stringFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = undefined;
      this._inListFilter.internalValue = undefined;
      this._numericFilter.internalValue = undefined;
      this._stringFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = value.betweenFilter;
      this._inListFilter.internalValue = value.inListFilter;
      this._numericFilter.internalValue = value.numericFilter;
      this._stringFilter.internalValue = value.stringFilter;
    }
  }

  // between_filter - computed: false, optional: true, required: false
  private _betweenFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilterOutputReference(this, "between_filter");
  public get betweenFilter() {
    return this._betweenFilter;
  }
  public putBetweenFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterBetweenFilter) {
    this._betweenFilter.internalValue = value;
  }
  public resetBetweenFilter() {
    this._betweenFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenFilterInput() {
    return this._betweenFilter.internalValue;
  }

  // in_list_filter - computed: false, optional: true, required: false
  private _inListFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilterOutputReference(this, "in_list_filter");
  public get inListFilter() {
    return this._inListFilter;
  }
  public putInListFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterInListFilter) {
    this._inListFilter.internalValue = value;
  }
  public resetInListFilter() {
    this._inListFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inListFilterInput() {
    return this._inListFilter.internalValue;
  }

  // numeric_filter - computed: false, optional: true, required: false
  private _numericFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilterOutputReference(this, "numeric_filter");
  public get numericFilter() {
    return this._numericFilter;
  }
  public putNumericFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterNumericFilter) {
    this._numericFilter.internalValue = value;
  }
  public resetNumericFilter() {
    this._numericFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFilterInput() {
    return this._numericFilter.internalValue;
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilterOutputReference(this, "string_filter");
  public get stringFilter() {
    return this._stringFilter;
  }
  public putStringFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterStringFilter) {
    this._stringFilter.internalValue = value;
  }
  public resetStringFilter() {
    this._stringFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#field_name SourceGoogleAnalyticsDataApi#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterToTerraform(struct!.filter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#from_value SourceGoogleAnalyticsDataApi#from_value}
  */
  readonly fromValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#to_value SourceGoogleAnalyticsDataApi#to_value}
  */
  readonly toValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueToTerraform(struct!.fromValue),
    to_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueToTerraform(struct!.toValue),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueToHclTerraform(struct!.fromValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue",
    },
    to_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueToHclTerraform(struct!.toValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._toValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toValue = this._toValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = undefined;
      this._toValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = value.fromValue;
      this._toValue.internalValue = value.toValue;
    }
  }

  // from_value - computed: false, optional: false, required: true
  private _fromValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterFromValue) {
    this._fromValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // to_value - computed: false, optional: false, required: true
  private _toValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValueOutputReference(this, "to_value");
  public get toValue() {
    return this._toValue;
  }
  public putToValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToValue) {
    this._toValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toValueInput() {
    return this._toValue.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#values SourceGoogleAnalyticsDataApi#values}
  */
  readonly values: string[];
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#operation SourceGoogleAnalyticsDataApi#operation}
  */
  readonly operation: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operation),
    value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string[]; 
  public get operation() {
    return this.getListAttribute('operation');
  }
  public set operation(value: string[]) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#match_type SourceGoogleAnalyticsDataApi#match_type}
  */
  readonly matchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string[]; 
  public get matchType() {
    return this.getListAttribute('match_type');
  }
  public set matchType(value: string[]) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#between_filter SourceGoogleAnalyticsDataApi#between_filter}
  */
  readonly betweenFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#in_list_filter SourceGoogleAnalyticsDataApi#in_list_filter}
  */
  readonly inListFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#numeric_filter SourceGoogleAnalyticsDataApi#numeric_filter}
  */
  readonly numericFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#string_filter SourceGoogleAnalyticsDataApi#string_filter}
  */
  readonly stringFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToTerraform(struct!.betweenFilter),
    in_list_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilterToTerraform(struct!.inListFilter),
    numeric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterToTerraform(struct!.numericFilter),
    string_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilterToTerraform(struct!.stringFilter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterToHclTerraform(struct!.betweenFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter",
    },
    in_list_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilterToHclTerraform(struct!.inListFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter",
    },
    numeric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterToHclTerraform(struct!.numericFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter",
    },
    string_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilterToHclTerraform(struct!.stringFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenFilter = this._betweenFilter?.internalValue;
    }
    if (this._inListFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inListFilter = this._inListFilter?.internalValue;
    }
    if (this._numericFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFilter = this._numericFilter?.internalValue;
    }
    if (this._stringFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = undefined;
      this._inListFilter.internalValue = undefined;
      this._numericFilter.internalValue = undefined;
      this._stringFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = value.betweenFilter;
      this._inListFilter.internalValue = value.inListFilter;
      this._numericFilter.internalValue = value.numericFilter;
      this._stringFilter.internalValue = value.stringFilter;
    }
  }

  // between_filter - computed: false, optional: true, required: false
  private _betweenFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilterOutputReference(this, "between_filter");
  public get betweenFilter() {
    return this._betweenFilter;
  }
  public putBetweenFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterBetweenFilter) {
    this._betweenFilter.internalValue = value;
  }
  public resetBetweenFilter() {
    this._betweenFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenFilterInput() {
    return this._betweenFilter.internalValue;
  }

  // in_list_filter - computed: false, optional: true, required: false
  private _inListFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilterOutputReference(this, "in_list_filter");
  public get inListFilter() {
    return this._inListFilter;
  }
  public putInListFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterInListFilter) {
    this._inListFilter.internalValue = value;
  }
  public resetInListFilter() {
    this._inListFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inListFilterInput() {
    return this._inListFilter.internalValue;
  }

  // numeric_filter - computed: false, optional: true, required: false
  private _numericFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilterOutputReference(this, "numeric_filter");
  public get numericFilter() {
    return this._numericFilter;
  }
  public putNumericFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterNumericFilter) {
    this._numericFilter.internalValue = value;
  }
  public resetNumericFilter() {
    this._numericFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFilterInput() {
    return this._numericFilter.internalValue;
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilterOutputReference(this, "string_filter");
  public get stringFilter() {
    return this._stringFilter;
  }
  public putStringFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterStringFilter) {
    this._stringFilter.internalValue = value;
  }
  public resetStringFilter() {
    this._stringFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#field_name SourceGoogleAnalyticsDataApi#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterToTerraform(struct!.filter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#expression SourceGoogleAnalyticsDataApi#expression}
  */
  readonly expression?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionToTerraform(struct!.expression),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionToHclTerraform(struct!.expression),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression.internalValue = value.expression;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpressionOutputReference(this, "expression");
  public get expression() {
    return this._expression;
  }
  public putExpression(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionExpression) {
    this._expression.internalValue = value;
  }
  public resetExpression() {
    this._expression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#from_value SourceGoogleAnalyticsDataApi#from_value}
  */
  readonly fromValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#to_value SourceGoogleAnalyticsDataApi#to_value}
  */
  readonly toValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueToTerraform(struct!.fromValue),
    to_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueToTerraform(struct!.toValue),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueToHclTerraform(struct!.fromValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValue",
    },
    to_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueToHclTerraform(struct!.toValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._toValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toValue = this._toValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = undefined;
      this._toValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = value.fromValue;
      this._toValue.internalValue = value.toValue;
    }
  }

  // from_value - computed: false, optional: false, required: true
  private _fromValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterFromValue) {
    this._fromValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // to_value - computed: false, optional: false, required: true
  private _toValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValueOutputReference(this, "to_value");
  public get toValue() {
    return this._toValue;
  }
  public putToValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToValue) {
    this._toValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toValueInput() {
    return this._toValue.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#values SourceGoogleAnalyticsDataApi#values}
  */
  readonly values: string[];
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#operation SourceGoogleAnalyticsDataApi#operation}
  */
  readonly operation: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operation),
    value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string[]; 
  public get operation() {
    return this.getListAttribute('operation');
  }
  public set operation(value: string[]) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#match_type SourceGoogleAnalyticsDataApi#match_type}
  */
  readonly matchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string[]; 
  public get matchType() {
    return this.getListAttribute('match_type');
  }
  public set matchType(value: string[]) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#between_filter SourceGoogleAnalyticsDataApi#between_filter}
  */
  readonly betweenFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#in_list_filter SourceGoogleAnalyticsDataApi#in_list_filter}
  */
  readonly inListFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#numeric_filter SourceGoogleAnalyticsDataApi#numeric_filter}
  */
  readonly numericFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#string_filter SourceGoogleAnalyticsDataApi#string_filter}
  */
  readonly stringFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToTerraform(struct!.betweenFilter),
    in_list_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilterToTerraform(struct!.inListFilter),
    numeric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterToTerraform(struct!.numericFilter),
    string_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilterToTerraform(struct!.stringFilter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterToHclTerraform(struct!.betweenFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilter",
    },
    in_list_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilterToHclTerraform(struct!.inListFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilter",
    },
    numeric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterToHclTerraform(struct!.numericFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilter",
    },
    string_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilterToHclTerraform(struct!.stringFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenFilter = this._betweenFilter?.internalValue;
    }
    if (this._inListFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inListFilter = this._inListFilter?.internalValue;
    }
    if (this._numericFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFilter = this._numericFilter?.internalValue;
    }
    if (this._stringFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = undefined;
      this._inListFilter.internalValue = undefined;
      this._numericFilter.internalValue = undefined;
      this._stringFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = value.betweenFilter;
      this._inListFilter.internalValue = value.inListFilter;
      this._numericFilter.internalValue = value.numericFilter;
      this._stringFilter.internalValue = value.stringFilter;
    }
  }

  // between_filter - computed: false, optional: true, required: false
  private _betweenFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilterOutputReference(this, "between_filter");
  public get betweenFilter() {
    return this._betweenFilter;
  }
  public putBetweenFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterBetweenFilter) {
    this._betweenFilter.internalValue = value;
  }
  public resetBetweenFilter() {
    this._betweenFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenFilterInput() {
    return this._betweenFilter.internalValue;
  }

  // in_list_filter - computed: false, optional: true, required: false
  private _inListFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilterOutputReference(this, "in_list_filter");
  public get inListFilter() {
    return this._inListFilter;
  }
  public putInListFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterInListFilter) {
    this._inListFilter.internalValue = value;
  }
  public resetInListFilter() {
    this._inListFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inListFilterInput() {
    return this._inListFilter.internalValue;
  }

  // numeric_filter - computed: false, optional: true, required: false
  private _numericFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilterOutputReference(this, "numeric_filter");
  public get numericFilter() {
    return this._numericFilter;
  }
  public putNumericFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterNumericFilter) {
    this._numericFilter.internalValue = value;
  }
  public resetNumericFilter() {
    this._numericFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFilterInput() {
    return this._numericFilter.internalValue;
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilterOutputReference(this, "string_filter");
  public get stringFilter() {
    return this._stringFilter;
  }
  public putStringFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterStringFilter) {
    this._stringFilter.internalValue = value;
  }
  public resetStringFilter() {
    this._stringFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#field_name SourceGoogleAnalyticsDataApi#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterToTerraform(struct!.filter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressions[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsOutputReference {
    return new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#expressions SourceGoogleAnalyticsDataApi#expressions}
  */
  readonly expressions: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressions[] | cdktf.IResolvable;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsToTerraform, false)(struct!.expressions),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsToHclTerraform, false)(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressions.internalValue = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressionsList(this, "expressions", false);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupExpressions[] | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter {
  /**
  * The FilterExpressions in andGroup have an AND relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#and_group SourceGoogleAnalyticsDataApi#and_group}
  */
  readonly andGroup?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup;
  /**
  * A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter;
  /**
  * The FilterExpression is NOT of notExpression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#not_expression SourceGoogleAnalyticsDataApi#not_expression}
  */
  readonly notExpression?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression;
  /**
  * The FilterExpressions in orGroup have an OR relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#or_group SourceGoogleAnalyticsDataApi#or_group}
  */
  readonly orGroup?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_group: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupToTerraform(struct!.andGroup),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterToTerraform(struct!.filter),
    not_expression: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionToTerraform(struct!.notExpression),
    or_group: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupToTerraform(struct!.orGroup),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_group: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupToHclTerraform(struct!.andGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter",
    },
    not_expression: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionToHclTerraform(struct!.notExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression",
    },
    or_group: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupToHclTerraform(struct!.orGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andGroup = this._andGroup?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._notExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notExpression = this._notExpression?.internalValue;
    }
    if (this._orGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orGroup = this._orGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andGroup.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._notExpression.internalValue = undefined;
      this._orGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andGroup.internalValue = value.andGroup;
      this._filter.internalValue = value.filter;
      this._notExpression.internalValue = value.notExpression;
      this._orGroup.internalValue = value.orGroup;
    }
  }

  // and_group - computed: false, optional: true, required: false
  private _andGroup = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroupOutputReference(this, "and_group");
  public get andGroup() {
    return this._andGroup;
  }
  public putAndGroup(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterAndGroup) {
    this._andGroup.internalValue = value;
  }
  public resetAndGroup() {
    this._andGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andGroupInput() {
    return this._andGroup.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // not_expression - computed: false, optional: true, required: false
  private _notExpression = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpressionOutputReference(this, "not_expression");
  public get notExpression() {
    return this._notExpression;
  }
  public putNotExpression(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterNotExpression) {
    this._notExpression.internalValue = value;
  }
  public resetNotExpression() {
    this._notExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notExpressionInput() {
    return this._notExpression.internalValue;
  }

  // or_group - computed: false, optional: true, required: false
  private _orGroup = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroupOutputReference(this, "or_group");
  public get orGroup() {
    return this._orGroup;
  }
  public putOrGroup(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOrGroup) {
    this._orGroup.internalValue = value;
  }
  public resetOrGroup() {
    this._orGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orGroupInput() {
    return this._orGroup.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#from_value SourceGoogleAnalyticsDataApi#from_value}
  */
  readonly fromValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#to_value SourceGoogleAnalyticsDataApi#to_value}
  */
  readonly toValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueToTerraform(struct!.fromValue),
    to_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueToTerraform(struct!.toValue),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueToHclTerraform(struct!.fromValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValue",
    },
    to_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueToHclTerraform(struct!.toValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._toValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toValue = this._toValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = undefined;
      this._toValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = value.fromValue;
      this._toValue.internalValue = value.toValue;
    }
  }

  // from_value - computed: false, optional: false, required: true
  private _fromValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterFromValue) {
    this._fromValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // to_value - computed: false, optional: false, required: true
  private _toValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValueOutputReference(this, "to_value");
  public get toValue() {
    return this._toValue;
  }
  public putToValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToValue) {
    this._toValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toValueInput() {
    return this._toValue.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#values SourceGoogleAnalyticsDataApi#values}
  */
  readonly values: string[];
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#operation SourceGoogleAnalyticsDataApi#operation}
  */
  readonly operation: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operation),
    value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string[]; 
  public get operation() {
    return this.getListAttribute('operation');
  }
  public set operation(value: string[]) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#match_type SourceGoogleAnalyticsDataApi#match_type}
  */
  readonly matchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string[]; 
  public get matchType() {
    return this.getListAttribute('match_type');
  }
  public set matchType(value: string[]) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#between_filter SourceGoogleAnalyticsDataApi#between_filter}
  */
  readonly betweenFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#in_list_filter SourceGoogleAnalyticsDataApi#in_list_filter}
  */
  readonly inListFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#numeric_filter SourceGoogleAnalyticsDataApi#numeric_filter}
  */
  readonly numericFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#string_filter SourceGoogleAnalyticsDataApi#string_filter}
  */
  readonly stringFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToTerraform(struct!.betweenFilter),
    in_list_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilterToTerraform(struct!.inListFilter),
    numeric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterToTerraform(struct!.numericFilter),
    string_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilterToTerraform(struct!.stringFilter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterToHclTerraform(struct!.betweenFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilter",
    },
    in_list_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilterToHclTerraform(struct!.inListFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilter",
    },
    numeric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterToHclTerraform(struct!.numericFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilter",
    },
    string_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilterToHclTerraform(struct!.stringFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenFilter = this._betweenFilter?.internalValue;
    }
    if (this._inListFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inListFilter = this._inListFilter?.internalValue;
    }
    if (this._numericFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFilter = this._numericFilter?.internalValue;
    }
    if (this._stringFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = undefined;
      this._inListFilter.internalValue = undefined;
      this._numericFilter.internalValue = undefined;
      this._stringFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = value.betweenFilter;
      this._inListFilter.internalValue = value.inListFilter;
      this._numericFilter.internalValue = value.numericFilter;
      this._stringFilter.internalValue = value.stringFilter;
    }
  }

  // between_filter - computed: false, optional: true, required: false
  private _betweenFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilterOutputReference(this, "between_filter");
  public get betweenFilter() {
    return this._betweenFilter;
  }
  public putBetweenFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterBetweenFilter) {
    this._betweenFilter.internalValue = value;
  }
  public resetBetweenFilter() {
    this._betweenFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenFilterInput() {
    return this._betweenFilter.internalValue;
  }

  // in_list_filter - computed: false, optional: true, required: false
  private _inListFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilterOutputReference(this, "in_list_filter");
  public get inListFilter() {
    return this._inListFilter;
  }
  public putInListFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterInListFilter) {
    this._inListFilter.internalValue = value;
  }
  public resetInListFilter() {
    this._inListFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inListFilterInput() {
    return this._inListFilter.internalValue;
  }

  // numeric_filter - computed: false, optional: true, required: false
  private _numericFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilterOutputReference(this, "numeric_filter");
  public get numericFilter() {
    return this._numericFilter;
  }
  public putNumericFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterNumericFilter) {
    this._numericFilter.internalValue = value;
  }
  public resetNumericFilter() {
    this._numericFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFilterInput() {
    return this._numericFilter.internalValue;
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilterOutputReference(this, "string_filter");
  public get stringFilter() {
    return this._stringFilter;
  }
  public putStringFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterStringFilter) {
    this._stringFilter.internalValue = value;
  }
  public resetStringFilter() {
    this._stringFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#field_name SourceGoogleAnalyticsDataApi#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterToTerraform(struct!.filter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressions[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsOutputReference {
    return new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#expressions SourceGoogleAnalyticsDataApi#expressions}
  */
  readonly expressions: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressions[] | cdktf.IResolvable;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsToTerraform, false)(struct!.expressions),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsToHclTerraform, false)(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressions.internalValue = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressionsList(this, "expressions", false);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupExpressions[] | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#from_value SourceGoogleAnalyticsDataApi#from_value}
  */
  readonly fromValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#to_value SourceGoogleAnalyticsDataApi#to_value}
  */
  readonly toValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueToTerraform(struct!.fromValue),
    to_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueToTerraform(struct!.toValue),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueToHclTerraform(struct!.fromValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue",
    },
    to_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueToHclTerraform(struct!.toValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._toValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toValue = this._toValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = undefined;
      this._toValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = value.fromValue;
      this._toValue.internalValue = value.toValue;
    }
  }

  // from_value - computed: false, optional: false, required: true
  private _fromValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterFromValue) {
    this._fromValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // to_value - computed: false, optional: false, required: true
  private _toValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValueOutputReference(this, "to_value");
  public get toValue() {
    return this._toValue;
  }
  public putToValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToValue) {
    this._toValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toValueInput() {
    return this._toValue.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#values SourceGoogleAnalyticsDataApi#values}
  */
  readonly values: string[];
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#operation SourceGoogleAnalyticsDataApi#operation}
  */
  readonly operation: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operation),
    value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string[]; 
  public get operation() {
    return this.getListAttribute('operation');
  }
  public set operation(value: string[]) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#match_type SourceGoogleAnalyticsDataApi#match_type}
  */
  readonly matchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string[]; 
  public get matchType() {
    return this.getListAttribute('match_type');
  }
  public set matchType(value: string[]) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#between_filter SourceGoogleAnalyticsDataApi#between_filter}
  */
  readonly betweenFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#in_list_filter SourceGoogleAnalyticsDataApi#in_list_filter}
  */
  readonly inListFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#numeric_filter SourceGoogleAnalyticsDataApi#numeric_filter}
  */
  readonly numericFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#string_filter SourceGoogleAnalyticsDataApi#string_filter}
  */
  readonly stringFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToTerraform(struct!.betweenFilter),
    in_list_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilterToTerraform(struct!.inListFilter),
    numeric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterToTerraform(struct!.numericFilter),
    string_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilterToTerraform(struct!.stringFilter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterToHclTerraform(struct!.betweenFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter",
    },
    in_list_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilterToHclTerraform(struct!.inListFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter",
    },
    numeric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterToHclTerraform(struct!.numericFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter",
    },
    string_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilterToHclTerraform(struct!.stringFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenFilter = this._betweenFilter?.internalValue;
    }
    if (this._inListFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inListFilter = this._inListFilter?.internalValue;
    }
    if (this._numericFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFilter = this._numericFilter?.internalValue;
    }
    if (this._stringFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = undefined;
      this._inListFilter.internalValue = undefined;
      this._numericFilter.internalValue = undefined;
      this._stringFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = value.betweenFilter;
      this._inListFilter.internalValue = value.inListFilter;
      this._numericFilter.internalValue = value.numericFilter;
      this._stringFilter.internalValue = value.stringFilter;
    }
  }

  // between_filter - computed: false, optional: true, required: false
  private _betweenFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilterOutputReference(this, "between_filter");
  public get betweenFilter() {
    return this._betweenFilter;
  }
  public putBetweenFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterBetweenFilter) {
    this._betweenFilter.internalValue = value;
  }
  public resetBetweenFilter() {
    this._betweenFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenFilterInput() {
    return this._betweenFilter.internalValue;
  }

  // in_list_filter - computed: false, optional: true, required: false
  private _inListFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilterOutputReference(this, "in_list_filter");
  public get inListFilter() {
    return this._inListFilter;
  }
  public putInListFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterInListFilter) {
    this._inListFilter.internalValue = value;
  }
  public resetInListFilter() {
    this._inListFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inListFilterInput() {
    return this._inListFilter.internalValue;
  }

  // numeric_filter - computed: false, optional: true, required: false
  private _numericFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilterOutputReference(this, "numeric_filter");
  public get numericFilter() {
    return this._numericFilter;
  }
  public putNumericFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterNumericFilter) {
    this._numericFilter.internalValue = value;
  }
  public resetNumericFilter() {
    this._numericFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFilterInput() {
    return this._numericFilter.internalValue;
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilterOutputReference(this, "string_filter");
  public get stringFilter() {
    return this._stringFilter;
  }
  public putStringFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterStringFilter) {
    this._stringFilter.internalValue = value;
  }
  public resetStringFilter() {
    this._stringFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#field_name SourceGoogleAnalyticsDataApi#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterToTerraform(struct!.filter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#from_value SourceGoogleAnalyticsDataApi#from_value}
  */
  readonly fromValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#to_value SourceGoogleAnalyticsDataApi#to_value}
  */
  readonly toValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueToTerraform(struct!.fromValue),
    to_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueToTerraform(struct!.toValue),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueToHclTerraform(struct!.fromValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue",
    },
    to_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueToHclTerraform(struct!.toValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._toValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toValue = this._toValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = undefined;
      this._toValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = value.fromValue;
      this._toValue.internalValue = value.toValue;
    }
  }

  // from_value - computed: false, optional: false, required: true
  private _fromValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterFromValue) {
    this._fromValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // to_value - computed: false, optional: false, required: true
  private _toValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValueOutputReference(this, "to_value");
  public get toValue() {
    return this._toValue;
  }
  public putToValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToValue) {
    this._toValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toValueInput() {
    return this._toValue.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#values SourceGoogleAnalyticsDataApi#values}
  */
  readonly values: string[];
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#operation SourceGoogleAnalyticsDataApi#operation}
  */
  readonly operation: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operation),
    value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string[]; 
  public get operation() {
    return this.getListAttribute('operation');
  }
  public set operation(value: string[]) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#match_type SourceGoogleAnalyticsDataApi#match_type}
  */
  readonly matchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string[]; 
  public get matchType() {
    return this.getListAttribute('match_type');
  }
  public set matchType(value: string[]) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#between_filter SourceGoogleAnalyticsDataApi#between_filter}
  */
  readonly betweenFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#in_list_filter SourceGoogleAnalyticsDataApi#in_list_filter}
  */
  readonly inListFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#numeric_filter SourceGoogleAnalyticsDataApi#numeric_filter}
  */
  readonly numericFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#string_filter SourceGoogleAnalyticsDataApi#string_filter}
  */
  readonly stringFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToTerraform(struct!.betweenFilter),
    in_list_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilterToTerraform(struct!.inListFilter),
    numeric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterToTerraform(struct!.numericFilter),
    string_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilterToTerraform(struct!.stringFilter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterToHclTerraform(struct!.betweenFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter",
    },
    in_list_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilterToHclTerraform(struct!.inListFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter",
    },
    numeric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterToHclTerraform(struct!.numericFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter",
    },
    string_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilterToHclTerraform(struct!.stringFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenFilter = this._betweenFilter?.internalValue;
    }
    if (this._inListFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inListFilter = this._inListFilter?.internalValue;
    }
    if (this._numericFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFilter = this._numericFilter?.internalValue;
    }
    if (this._stringFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = undefined;
      this._inListFilter.internalValue = undefined;
      this._numericFilter.internalValue = undefined;
      this._stringFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = value.betweenFilter;
      this._inListFilter.internalValue = value.inListFilter;
      this._numericFilter.internalValue = value.numericFilter;
      this._stringFilter.internalValue = value.stringFilter;
    }
  }

  // between_filter - computed: false, optional: true, required: false
  private _betweenFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilterOutputReference(this, "between_filter");
  public get betweenFilter() {
    return this._betweenFilter;
  }
  public putBetweenFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterBetweenFilter) {
    this._betweenFilter.internalValue = value;
  }
  public resetBetweenFilter() {
    this._betweenFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenFilterInput() {
    return this._betweenFilter.internalValue;
  }

  // in_list_filter - computed: false, optional: true, required: false
  private _inListFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilterOutputReference(this, "in_list_filter");
  public get inListFilter() {
    return this._inListFilter;
  }
  public putInListFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterInListFilter) {
    this._inListFilter.internalValue = value;
  }
  public resetInListFilter() {
    this._inListFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inListFilterInput() {
    return this._inListFilter.internalValue;
  }

  // numeric_filter - computed: false, optional: true, required: false
  private _numericFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilterOutputReference(this, "numeric_filter");
  public get numericFilter() {
    return this._numericFilter;
  }
  public putNumericFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterNumericFilter) {
    this._numericFilter.internalValue = value;
  }
  public resetNumericFilter() {
    this._numericFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFilterInput() {
    return this._numericFilter.internalValue;
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilterOutputReference(this, "string_filter");
  public get stringFilter() {
    return this._stringFilter;
  }
  public putStringFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterStringFilter) {
    this._stringFilter.internalValue = value;
  }
  public resetStringFilter() {
    this._stringFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#field_name SourceGoogleAnalyticsDataApi#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterToTerraform(struct!.filter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#expression SourceGoogleAnalyticsDataApi#expression}
  */
  readonly expression?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionToTerraform(struct!.expression),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionToHclTerraform(struct!.expression),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression.internalValue = value.expression;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpressionOutputReference(this, "expression");
  public get expression() {
    return this._expression;
  }
  public putExpression(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionExpression) {
    this._expression.internalValue = value;
  }
  public resetExpression() {
    this._expression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#from_value SourceGoogleAnalyticsDataApi#from_value}
  */
  readonly fromValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#to_value SourceGoogleAnalyticsDataApi#to_value}
  */
  readonly toValue: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueToTerraform(struct!.fromValue),
    to_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueToTerraform(struct!.toValue),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueToHclTerraform(struct!.fromValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValue",
    },
    to_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueToHclTerraform(struct!.toValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromValue = this._fromValue?.internalValue;
    }
    if (this._toValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toValue = this._toValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = undefined;
      this._toValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromValue.internalValue = value.fromValue;
      this._toValue.internalValue = value.toValue;
    }
  }

  // from_value - computed: false, optional: false, required: true
  private _fromValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValueOutputReference(this, "from_value");
  public get fromValue() {
    return this._fromValue;
  }
  public putFromValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterFromValue) {
    this._fromValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromValueInput() {
    return this._fromValue.internalValue;
  }

  // to_value - computed: false, optional: false, required: true
  private _toValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValueOutputReference(this, "to_value");
  public get toValue() {
    return this._toValue;
  }
  public putToValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToValue) {
    this._toValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toValueInput() {
    return this._toValue.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#values SourceGoogleAnalyticsDataApi#values}
  */
  readonly values: string[];
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64Value {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#double_value SourceGoogleAnalyticsDataApi#double_value}
  */
  readonly doubleValue?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#int64_value SourceGoogleAnalyticsDataApi#int64_value}
  */
  readonly int64Value?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64Value;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueToTerraform(struct!.doubleValue),
    int64_value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueToTerraform(struct!.int64Value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueToHclTerraform(struct!.doubleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue",
    },
    int64_value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueToHclTerraform(struct!.int64Value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64Value",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue?.internalValue;
    }
    if (this._int64Value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.int64Value = this._int64Value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = undefined;
      this._int64Value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue.internalValue = value.doubleValue;
      this._int64Value.internalValue = value.int64Value;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValueOutputReference(this, "double_value");
  public get doubleValue() {
    return this._doubleValue;
  }
  public putDoubleValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueDoubleValue) {
    this._doubleValue.internalValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue.internalValue;
  }

  // int64_value - computed: false, optional: true, required: false
  private _int64Value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64ValueOutputReference(this, "int64_value");
  public get int64Value() {
    return this._int64Value;
  }
  public putInt64Value(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueInt64Value) {
    this._int64Value.internalValue = value;
  }
  public resetInt64Value() {
    this._int64Value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get int64ValueInput() {
    return this._int64Value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#operation SourceGoogleAnalyticsDataApi#operation}
  */
  readonly operation: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValue;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operation),
    value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._value.internalValue = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string[]; 
  public get operation() {
    return this.getListAttribute('operation');
  }
  public set operation(value: string[]) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#case_sensitive SourceGoogleAnalyticsDataApi#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#match_type SourceGoogleAnalyticsDataApi#match_type}
  */
  readonly matchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#value SourceGoogleAnalyticsDataApi#value}
  */
  readonly value: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string[]; 
  public get matchType() {
    return this.getListAttribute('match_type');
  }
  public set matchType(value: string[]) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#between_filter SourceGoogleAnalyticsDataApi#between_filter}
  */
  readonly betweenFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#in_list_filter SourceGoogleAnalyticsDataApi#in_list_filter}
  */
  readonly inListFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#numeric_filter SourceGoogleAnalyticsDataApi#numeric_filter}
  */
  readonly numericFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#string_filter SourceGoogleAnalyticsDataApi#string_filter}
  */
  readonly stringFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToTerraform(struct!.betweenFilter),
    in_list_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilterToTerraform(struct!.inListFilter),
    numeric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterToTerraform(struct!.numericFilter),
    string_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilterToTerraform(struct!.stringFilter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterToHclTerraform(struct!.betweenFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilter",
    },
    in_list_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilterToHclTerraform(struct!.inListFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilter",
    },
    numeric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterToHclTerraform(struct!.numericFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilter",
    },
    string_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilterToHclTerraform(struct!.stringFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenFilter = this._betweenFilter?.internalValue;
    }
    if (this._inListFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inListFilter = this._inListFilter?.internalValue;
    }
    if (this._numericFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFilter = this._numericFilter?.internalValue;
    }
    if (this._stringFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilter = this._stringFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = undefined;
      this._inListFilter.internalValue = undefined;
      this._numericFilter.internalValue = undefined;
      this._stringFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._betweenFilter.internalValue = value.betweenFilter;
      this._inListFilter.internalValue = value.inListFilter;
      this._numericFilter.internalValue = value.numericFilter;
      this._stringFilter.internalValue = value.stringFilter;
    }
  }

  // between_filter - computed: false, optional: true, required: false
  private _betweenFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilterOutputReference(this, "between_filter");
  public get betweenFilter() {
    return this._betweenFilter;
  }
  public putBetweenFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterBetweenFilter) {
    this._betweenFilter.internalValue = value;
  }
  public resetBetweenFilter() {
    this._betweenFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenFilterInput() {
    return this._betweenFilter.internalValue;
  }

  // in_list_filter - computed: false, optional: true, required: false
  private _inListFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilterOutputReference(this, "in_list_filter");
  public get inListFilter() {
    return this._inListFilter;
  }
  public putInListFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterInListFilter) {
    this._inListFilter.internalValue = value;
  }
  public resetInListFilter() {
    this._inListFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inListFilterInput() {
    return this._inListFilter.internalValue;
  }

  // numeric_filter - computed: false, optional: true, required: false
  private _numericFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilterOutputReference(this, "numeric_filter");
  public get numericFilter() {
    return this._numericFilter;
  }
  public putNumericFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterNumericFilter) {
    this._numericFilter.internalValue = value;
  }
  public resetNumericFilter() {
    this._numericFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericFilterInput() {
    return this._numericFilter.internalValue;
  }

  // string_filter - computed: false, optional: true, required: false
  private _stringFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilterOutputReference(this, "string_filter");
  public get stringFilter() {
    return this._stringFilter;
  }
  public putStringFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterStringFilter) {
    this._stringFilter.internalValue = value;
  }
  public resetStringFilter() {
    this._stringFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFilterInput() {
    return this._stringFilter.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#field_name SourceGoogleAnalyticsDataApi#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilter;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterToTerraform(struct!.filter),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressions[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsOutputReference {
    return new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#expressions SourceGoogleAnalyticsDataApi#expressions}
  */
  readonly expressions: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressions[] | cdktf.IResolvable;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsToTerraform, false)(struct!.expressions),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsToHclTerraform, false)(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressions.internalValue = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressionsList(this, "expressions", false);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupExpressions[] | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter {
  /**
  * The FilterExpressions in andGroup have an AND relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#and_group SourceGoogleAnalyticsDataApi#and_group}
  */
  readonly andGroup?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup;
  /**
  * A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#filter SourceGoogleAnalyticsDataApi#filter}
  */
  readonly filter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter;
  /**
  * The FilterExpression is NOT of notExpression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#not_expression SourceGoogleAnalyticsDataApi#not_expression}
  */
  readonly notExpression?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression;
  /**
  * The FilterExpressions in orGroup have an OR relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#or_group SourceGoogleAnalyticsDataApi#or_group}
  */
  readonly orGroup?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_group: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupToTerraform(struct!.andGroup),
    filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterToTerraform(struct!.filter),
    not_expression: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionToTerraform(struct!.notExpression),
    or_group: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupToTerraform(struct!.orGroup),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_group: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupToHclTerraform(struct!.andGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup",
    },
    filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter",
    },
    not_expression: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionToHclTerraform(struct!.notExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression",
    },
    or_group: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupToHclTerraform(struct!.orGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andGroup = this._andGroup?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._notExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notExpression = this._notExpression?.internalValue;
    }
    if (this._orGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orGroup = this._orGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andGroup.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._notExpression.internalValue = undefined;
      this._orGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andGroup.internalValue = value.andGroup;
      this._filter.internalValue = value.filter;
      this._notExpression.internalValue = value.notExpression;
      this._orGroup.internalValue = value.orGroup;
    }
  }

  // and_group - computed: false, optional: true, required: false
  private _andGroup = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroupOutputReference(this, "and_group");
  public get andGroup() {
    return this._andGroup;
  }
  public putAndGroup(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterAndGroup) {
    this._andGroup.internalValue = value;
  }
  public resetAndGroup() {
    this._andGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andGroupInput() {
    return this._andGroup.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // not_expression - computed: false, optional: true, required: false
  private _notExpression = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpressionOutputReference(this, "not_expression");
  public get notExpression() {
    return this._notExpression;
  }
  public putNotExpression(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterNotExpression) {
    this._notExpression.internalValue = value;
  }
  public resetNotExpression() {
    this._notExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notExpressionInput() {
    return this._notExpression.internalValue;
  }

  // or_group - computed: false, optional: true, required: false
  private _orGroup = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroupOutputReference(this, "or_group");
  public get orGroup() {
    return this._orGroup;
  }
  public putOrGroup(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOrGroup) {
    this._orGroup.internalValue = value;
  }
  public resetOrGroup() {
    this._orGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orGroupInput() {
    return this._orGroup.internalValue;
  }
}
export interface SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray {
  /**
  * Cohort reports creates a time series of user retention for the cohort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#cohort_spec SourceGoogleAnalyticsDataApi#cohort_spec}
  */
  readonly cohortSpec?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec;
  /**
  * Dimensions filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#dimension_filter SourceGoogleAnalyticsDataApi#dimension_filter}
  */
  readonly dimensionFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter;
  /**
  * A list of dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#dimensions SourceGoogleAnalyticsDataApi#dimensions}
  */
  readonly dimensions: string[];
  /**
  * Metrics filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#metric_filter SourceGoogleAnalyticsDataApi#metric_filter}
  */
  readonly metricFilter?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter;
  /**
  * A list of metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#metrics SourceGoogleAnalyticsDataApi#metrics}
  */
  readonly metrics: string[];
  /**
  * The name of the custom report, this name would be used as stream name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#name SourceGoogleAnalyticsDataApi#name}
  */
  readonly name: string;
}

export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayToTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cohort_spec: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecToTerraform(struct!.cohortSpec),
    dimension_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterToTerraform(struct!.dimensionFilter),
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    metric_filter: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterToTerraform(struct!.metricFilter),
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cohort_spec: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecToHclTerraform(struct!.cohortSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec",
    },
    dimension_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterToHclTerraform(struct!.dimensionFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter",
    },
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metric_filter: {
      value: sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterToHclTerraform(struct!.metricFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter",
    },
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cohortSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohortSpec = this._cohortSpec?.internalValue;
    }
    if (this._dimensionFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionFilter = this._dimensionFilter?.internalValue;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._metricFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricFilter = this._metricFilter?.internalValue;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cohortSpec.internalValue = undefined;
      this._dimensionFilter.internalValue = undefined;
      this._dimensions = undefined;
      this._metricFilter.internalValue = undefined;
      this._metrics = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cohortSpec.internalValue = value.cohortSpec;
      this._dimensionFilter.internalValue = value.dimensionFilter;
      this._dimensions = value.dimensions;
      this._metricFilter.internalValue = value.metricFilter;
      this._metrics = value.metrics;
      this._name = value.name;
    }
  }

  // cohort_spec - computed: false, optional: true, required: false
  private _cohortSpec = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpecOutputReference(this, "cohort_spec");
  public get cohortSpec() {
    return this._cohortSpec;
  }
  public putCohortSpec(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayCohortSpec) {
    this._cohortSpec.internalValue = value;
  }
  public resetCohortSpec() {
    this._cohortSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohortSpecInput() {
    return this._cohortSpec.internalValue;
  }

  // dimension_filter - computed: false, optional: true, required: false
  private _dimensionFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilterOutputReference(this, "dimension_filter");
  public get dimensionFilter() {
    return this._dimensionFilter;
  }
  public putDimensionFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayDimensionFilter) {
    this._dimensionFilter.internalValue = value;
  }
  public resetDimensionFilter() {
    this._dimensionFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionFilterInput() {
    return this._dimensionFilter.internalValue;
  }

  // dimensions - computed: false, optional: false, required: true
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // metric_filter - computed: false, optional: true, required: false
  private _metricFilter = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilterOutputReference(this, "metric_filter");
  public get metricFilter() {
    return this._metricFilter;
  }
  public putMetricFilter(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayMetricFilter) {
    this._metricFilter.internalValue = value;
  }
  public resetMetricFilter() {
    this._metricFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFilterInput() {
    return this._metricFilter.internalValue;
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
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
}

export class SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayOutputReference {
    return new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleAnalyticsDataApiConfiguration {
  /**
  * Enables conversion of `conversions:*` event metrics from integers to floats. This is beneficial for preventing data rounding when the API returns float values for any `conversions:*` fields. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#convert_conversions_event SourceGoogleAnalyticsDataApi#convert_conversions_event}
  */
  readonly convertConversionsEvent?: boolean | cdktf.IResolvable;
  /**
  * Credentials for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#credentials SourceGoogleAnalyticsDataApi#credentials}
  */
  readonly credentials?: SourceGoogleAnalyticsDataApiConfigurationCredentials;
  /**
  * You can add your Custom Analytics report by creating one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#custom_reports_array SourceGoogleAnalyticsDataApi#custom_reports_array}
  */
  readonly customReportsArray?: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray[] | cdktf.IResolvable;
  /**
  * The end date from which to replicate report data in the format YYYY-MM-DD. Data generated after this date will not be included in the report. Not applied to custom Cohort reports. When no date is provided or the date is in the future, the date from today is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#date_ranges_end_date SourceGoogleAnalyticsDataApi#date_ranges_end_date}
  */
  readonly dateRangesEndDate?: string;
  /**
  * The start date from which to replicate report data in the format YYYY-MM-DD. Data generated before this date will not be included in the report. Not applied to custom Cohort reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#date_ranges_start_date SourceGoogleAnalyticsDataApi#date_ranges_start_date}
  */
  readonly dateRangesStartDate?: string;
  /**
  * If false, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. More information is available in <a href="https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport#request-body">the documentation</a>. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#keep_empty_rows SourceGoogleAnalyticsDataApi#keep_empty_rows}
  */
  readonly keepEmptyRows?: boolean | cdktf.IResolvable;
  /**
  * Since attribution changes after the event date, and Google Analytics has a data processing latency, we should specify how many days in the past we should refresh the data in every run. So if you set it at 5 days, in every sync it will fetch the last bookmark date minus 5 days. Default: 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#lookback_window SourceGoogleAnalyticsDataApi#lookback_window}
  */
  readonly lookbackWindow?: number;
  /**
  * A list of your Property IDs. The Property ID is a unique number assigned to each property in Google Analytics, found in your GA4 property URL. This ID allows the connector to track the specific events associated with your property. Refer to the <a href='https://developers.google.com/analytics/devguides/reporting/data/v1/property-id#what_is_my_property_id'>Google Analytics documentation</a> to locate your property ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#property_ids SourceGoogleAnalyticsDataApi#property_ids}
  */
  readonly propertyIds: string[];
  /**
  * The interval in days for each data request made to the Google Analytics API. A larger value speeds up data sync, but increases the chance of data sampling, which may result in inaccuracies. We recommend a value of 1 to minimize sampling, unless speed is an absolute priority over accuracy. Acceptable values range from 1 to 364. Does not apply to custom Cohort reports. More information is available in <a href="https://docs.airbyte.com/integrations/sources/google-analytics-data-api">the documentation</a>. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#window_in_days SourceGoogleAnalyticsDataApi#window_in_days}
  */
  readonly windowInDays?: number;
}

export function sourceGoogleAnalyticsDataApiConfigurationToTerraform(struct?: SourceGoogleAnalyticsDataApiConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert_conversions_event: cdktf.booleanToTerraform(struct!.convertConversionsEvent),
    credentials: sourceGoogleAnalyticsDataApiConfigurationCredentialsToTerraform(struct!.credentials),
    custom_reports_array: cdktf.listMapper(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayToTerraform, false)(struct!.customReportsArray),
    date_ranges_end_date: cdktf.stringToTerraform(struct!.dateRangesEndDate),
    date_ranges_start_date: cdktf.stringToTerraform(struct!.dateRangesStartDate),
    keep_empty_rows: cdktf.booleanToTerraform(struct!.keepEmptyRows),
    lookback_window: cdktf.numberToTerraform(struct!.lookbackWindow),
    property_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propertyIds),
    window_in_days: cdktf.numberToTerraform(struct!.windowInDays),
  }
}


export function sourceGoogleAnalyticsDataApiConfigurationToHclTerraform(struct?: SourceGoogleAnalyticsDataApiConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    convert_conversions_event: {
      value: cdktf.booleanToHclTerraform(struct!.convertConversionsEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials: {
      value: sourceGoogleAnalyticsDataApiConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCredentials",
    },
    custom_reports_array: {
      value: cdktf.listMapperHcl(sourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayToHclTerraform, false)(struct!.customReportsArray),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayList",
    },
    date_ranges_end_date: {
      value: cdktf.stringToHclTerraform(struct!.dateRangesEndDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_ranges_start_date: {
      value: cdktf.stringToHclTerraform(struct!.dateRangesStartDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_empty_rows: {
      value: cdktf.booleanToHclTerraform(struct!.keepEmptyRows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lookback_window: {
      value: cdktf.numberToHclTerraform(struct!.lookbackWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    property_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.propertyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    window_in_days: {
      value: cdktf.numberToHclTerraform(struct!.windowInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleAnalyticsDataApiConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convertConversionsEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertConversionsEvent = this._convertConversionsEvent;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._customReportsArray?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customReportsArray = this._customReportsArray?.internalValue;
    }
    if (this._dateRangesEndDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRangesEndDate = this._dateRangesEndDate;
    }
    if (this._dateRangesStartDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRangesStartDate = this._dateRangesStartDate;
    }
    if (this._keepEmptyRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepEmptyRows = this._keepEmptyRows;
    }
    if (this._lookbackWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookbackWindow = this._lookbackWindow;
    }
    if (this._propertyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyIds = this._propertyIds;
    }
    if (this._windowInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowInDays = this._windowInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._convertConversionsEvent = undefined;
      this._credentials.internalValue = undefined;
      this._customReportsArray.internalValue = undefined;
      this._dateRangesEndDate = undefined;
      this._dateRangesStartDate = undefined;
      this._keepEmptyRows = undefined;
      this._lookbackWindow = undefined;
      this._propertyIds = undefined;
      this._windowInDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._convertConversionsEvent = value.convertConversionsEvent;
      this._credentials.internalValue = value.credentials;
      this._customReportsArray.internalValue = value.customReportsArray;
      this._dateRangesEndDate = value.dateRangesEndDate;
      this._dateRangesStartDate = value.dateRangesStartDate;
      this._keepEmptyRows = value.keepEmptyRows;
      this._lookbackWindow = value.lookbackWindow;
      this._propertyIds = value.propertyIds;
      this._windowInDays = value.windowInDays;
    }
  }

  // convert_conversions_event - computed: true, optional: true, required: false
  private _convertConversionsEvent?: boolean | cdktf.IResolvable; 
  public get convertConversionsEvent() {
    return this.getBooleanAttribute('convert_conversions_event');
  }
  public set convertConversionsEvent(value: boolean | cdktf.IResolvable) {
    this._convertConversionsEvent = value;
  }
  public resetConvertConversionsEvent() {
    this._convertConversionsEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertConversionsEventInput() {
    return this._convertConversionsEvent;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new SourceGoogleAnalyticsDataApiConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceGoogleAnalyticsDataApiConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // custom_reports_array - computed: false, optional: true, required: false
  private _customReportsArray = new SourceGoogleAnalyticsDataApiConfigurationCustomReportsArrayList(this, "custom_reports_array", false);
  public get customReportsArray() {
    return this._customReportsArray;
  }
  public putCustomReportsArray(value: SourceGoogleAnalyticsDataApiConfigurationCustomReportsArray[] | cdktf.IResolvable) {
    this._customReportsArray.internalValue = value;
  }
  public resetCustomReportsArray() {
    this._customReportsArray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReportsArrayInput() {
    return this._customReportsArray.internalValue;
  }

  // date_ranges_end_date - computed: false, optional: true, required: false
  private _dateRangesEndDate?: string; 
  public get dateRangesEndDate() {
    return this.getStringAttribute('date_ranges_end_date');
  }
  public set dateRangesEndDate(value: string) {
    this._dateRangesEndDate = value;
  }
  public resetDateRangesEndDate() {
    this._dateRangesEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangesEndDateInput() {
    return this._dateRangesEndDate;
  }

  // date_ranges_start_date - computed: false, optional: true, required: false
  private _dateRangesStartDate?: string; 
  public get dateRangesStartDate() {
    return this.getStringAttribute('date_ranges_start_date');
  }
  public set dateRangesStartDate(value: string) {
    this._dateRangesStartDate = value;
  }
  public resetDateRangesStartDate() {
    this._dateRangesStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangesStartDateInput() {
    return this._dateRangesStartDate;
  }

  // keep_empty_rows - computed: true, optional: true, required: false
  private _keepEmptyRows?: boolean | cdktf.IResolvable; 
  public get keepEmptyRows() {
    return this.getBooleanAttribute('keep_empty_rows');
  }
  public set keepEmptyRows(value: boolean | cdktf.IResolvable) {
    this._keepEmptyRows = value;
  }
  public resetKeepEmptyRows() {
    this._keepEmptyRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepEmptyRowsInput() {
    return this._keepEmptyRows;
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

  // property_ids - computed: false, optional: false, required: true
  private _propertyIds?: string[]; 
  public get propertyIds() {
    return this.getListAttribute('property_ids');
  }
  public set propertyIds(value: string[]) {
    this._propertyIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdsInput() {
    return this._propertyIds;
  }

  // window_in_days - computed: true, optional: true, required: false
  private _windowInDays?: number; 
  public get windowInDays() {
    return this.getNumberAttribute('window_in_days');
  }
  public set windowInDays(value: number) {
    this._windowInDays = value;
  }
  public resetWindowInDays() {
    this._windowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInDaysInput() {
    return this._windowInDays;
  }
}
export interface SourceGoogleAnalyticsDataApiResourceAllocationDefault {
}

export function sourceGoogleAnalyticsDataApiResourceAllocationDefaultToTerraform(struct?: SourceGoogleAnalyticsDataApiResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleAnalyticsDataApiResourceAllocationDefaultToHclTerraform(struct?: SourceGoogleAnalyticsDataApiResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleAnalyticsDataApiResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiResourceAllocationDefault | undefined) {
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
export interface SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirements {
}

export function sourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceGoogleAnalyticsDataApiResourceAllocationJobSpecific {
}

export function sourceGoogleAnalyticsDataApiResourceAllocationJobSpecificToTerraform(struct?: SourceGoogleAnalyticsDataApiResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleAnalyticsDataApiResourceAllocationJobSpecificToHclTerraform(struct?: SourceGoogleAnalyticsDataApiResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleAnalyticsDataApiResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificOutputReference {
    return new SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleAnalyticsDataApiResourceAllocation {
}

export function sourceGoogleAnalyticsDataApiResourceAllocationToTerraform(struct?: SourceGoogleAnalyticsDataApiResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleAnalyticsDataApiResourceAllocationToHclTerraform(struct?: SourceGoogleAnalyticsDataApiResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleAnalyticsDataApiResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleAnalyticsDataApiResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleAnalyticsDataApiResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceGoogleAnalyticsDataApiResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceGoogleAnalyticsDataApiResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api airbyte_source_google_analytics_data_api}
*/
export class SourceGoogleAnalyticsDataApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_google_analytics_data_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceGoogleAnalyticsDataApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceGoogleAnalyticsDataApi to import
  * @param importFromId The id of the existing SourceGoogleAnalyticsDataApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceGoogleAnalyticsDataApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_google_analytics_data_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_analytics_data_api airbyte_source_google_analytics_data_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceGoogleAnalyticsDataApiConfig
  */
  public constructor(scope: Construct, id: string, config: SourceGoogleAnalyticsDataApiConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_google_analytics_data_api',
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
  private _configuration = new SourceGoogleAnalyticsDataApiConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceGoogleAnalyticsDataApiConfiguration) {
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
  private _resourceAllocation = new SourceGoogleAnalyticsDataApiResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceGoogleAnalyticsDataApiConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceGoogleAnalyticsDataApiConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceGoogleAnalyticsDataApiConfiguration",
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
