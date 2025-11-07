// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceGoogleSheetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#configuration SourceGoogleSheets#configuration}
  */
  readonly configuration: SourceGoogleSheetsConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#definition_id SourceGoogleSheets#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#name SourceGoogleSheets#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#secret_id SourceGoogleSheets#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#workspace_id SourceGoogleSheets#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth {
  /**
  * Enter your Google application's Client ID. See <a href='https://developers.google.com/identity/protocols/oauth2'>Google's documentation</a> for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#client_id SourceGoogleSheets#client_id}
  */
  readonly clientId: string;
  /**
  * Enter your Google application's Client Secret. See <a href='https://developers.google.com/identity/protocols/oauth2'>Google's documentation</a> for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#client_secret SourceGoogleSheets#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Enter your Google application's refresh token. See <a href='https://developers.google.com/identity/protocols/oauth2'>Google's documentation</a> for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#refresh_token SourceGoogleSheets#refresh_token}
  */
  readonly refreshToken: string;
}

export function sourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuthToTerraform(struct?: SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}


export function sourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuthToHclTerraform(struct?: SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
    }
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
export interface SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication {
  /**
  * The JSON key of the service account to use for authorization. Read more <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#service_account_info SourceGoogleSheets#service_account_info}
  */
  readonly serviceAccountInfo: string;
}

export function sourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthenticationToTerraform(struct?: SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_info: cdktf.stringToTerraform(struct!.serviceAccountInfo),
  }
}


export function sourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthenticationToHclTerraform(struct?: SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_info: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountInfo = this._serviceAccountInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountInfo = value.serviceAccountInfo;
    }
  }

  // service_account_info - computed: false, optional: false, required: true
  private _serviceAccountInfo?: string; 
  public get serviceAccountInfo() {
    return this.getStringAttribute('service_account_info');
  }
  public set serviceAccountInfo(value: string) {
    this._serviceAccountInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInfoInput() {
    return this._serviceAccountInfo;
  }
}
export interface SourceGoogleSheetsConfigurationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#authenticate_via_google_o_auth SourceGoogleSheets#authenticate_via_google_o_auth}
  */
  readonly authenticateViaGoogleOAuth?: SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#service_account_key_authentication SourceGoogleSheets#service_account_key_authentication}
  */
  readonly serviceAccountKeyAuthentication?: SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication;
}

export function sourceGoogleSheetsConfigurationCredentialsToTerraform(struct?: SourceGoogleSheetsConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_via_google_o_auth: sourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuthToTerraform(struct!.authenticateViaGoogleOAuth),
    service_account_key_authentication: sourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthenticationToTerraform(struct!.serviceAccountKeyAuthentication),
  }
}


export function sourceGoogleSheetsConfigurationCredentialsToHclTerraform(struct?: SourceGoogleSheetsConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_via_google_o_auth: {
      value: sourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuthToHclTerraform(struct!.authenticateViaGoogleOAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth",
    },
    service_account_key_authentication: {
      value: sourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthenticationToHclTerraform(struct!.serviceAccountKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleSheetsConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSheetsConfigurationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateViaGoogleOAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateViaGoogleOAuth = this._authenticateViaGoogleOAuth?.internalValue;
    }
    if (this._serviceAccountKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyAuthentication = this._serviceAccountKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSheetsConfigurationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateViaGoogleOAuth.internalValue = undefined;
      this._serviceAccountKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateViaGoogleOAuth.internalValue = value.authenticateViaGoogleOAuth;
      this._serviceAccountKeyAuthentication.internalValue = value.serviceAccountKeyAuthentication;
    }
  }

  // authenticate_via_google_o_auth - computed: false, optional: true, required: false
  private _authenticateViaGoogleOAuth = new SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuthOutputReference(this, "authenticate_via_google_o_auth");
  public get authenticateViaGoogleOAuth() {
    return this._authenticateViaGoogleOAuth;
  }
  public putAuthenticateViaGoogleOAuth(value: SourceGoogleSheetsConfigurationCredentialsAuthenticateViaGoogleOAuth) {
    this._authenticateViaGoogleOAuth.internalValue = value;
  }
  public resetAuthenticateViaGoogleOAuth() {
    this._authenticateViaGoogleOAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateViaGoogleOAuthInput() {
    return this._authenticateViaGoogleOAuth.internalValue;
  }

  // service_account_key_authentication - computed: false, optional: true, required: false
  private _serviceAccountKeyAuthentication = new SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthenticationOutputReference(this, "service_account_key_authentication");
  public get serviceAccountKeyAuthentication() {
    return this._serviceAccountKeyAuthentication;
  }
  public putServiceAccountKeyAuthentication(value: SourceGoogleSheetsConfigurationCredentialsServiceAccountKeyAuthentication) {
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
export interface SourceGoogleSheetsConfigurationStreamNameOverrides {
  /**
  * The name you want this stream to appear as in Airbyte and your destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#custom_stream_name SourceGoogleSheets#custom_stream_name}
  */
  readonly customStreamName: string;
  /**
  * The exact name of the sheet/tab in your Google Spreadsheet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#source_stream_name SourceGoogleSheets#source_stream_name}
  */
  readonly sourceStreamName: string;
}

export function sourceGoogleSheetsConfigurationStreamNameOverridesToTerraform(struct?: SourceGoogleSheetsConfigurationStreamNameOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_stream_name: cdktf.stringToTerraform(struct!.customStreamName),
    source_stream_name: cdktf.stringToTerraform(struct!.sourceStreamName),
  }
}


export function sourceGoogleSheetsConfigurationStreamNameOverridesToHclTerraform(struct?: SourceGoogleSheetsConfigurationStreamNameOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.customStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleSheetsConfigurationStreamNameOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleSheetsConfigurationStreamNameOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStreamName = this._customStreamName;
    }
    if (this._sourceStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceStreamName = this._sourceStreamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSheetsConfigurationStreamNameOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customStreamName = undefined;
      this._sourceStreamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customStreamName = value.customStreamName;
      this._sourceStreamName = value.sourceStreamName;
    }
  }

  // custom_stream_name - computed: false, optional: false, required: true
  private _customStreamName?: string; 
  public get customStreamName() {
    return this.getStringAttribute('custom_stream_name');
  }
  public set customStreamName(value: string) {
    this._customStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customStreamNameInput() {
    return this._customStreamName;
  }

  // source_stream_name - computed: false, optional: false, required: true
  private _sourceStreamName?: string; 
  public get sourceStreamName() {
    return this.getStringAttribute('source_stream_name');
  }
  public set sourceStreamName(value: string) {
    this._sourceStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStreamNameInput() {
    return this._sourceStreamName;
  }
}

export class SourceGoogleSheetsConfigurationStreamNameOverridesList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleSheetsConfigurationStreamNameOverrides[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleSheetsConfigurationStreamNameOverridesOutputReference {
    return new SourceGoogleSheetsConfigurationStreamNameOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleSheetsConfiguration {
  /**
  * Allows column names to start with numbers. Example: "50th Percentile" → "50_th_percentile" This option will only work if "Convert Column Names to SQL-Compliant Format (names_conversion)" is enabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#allow_leading_numbers SourceGoogleSheets#allow_leading_numbers}
  */
  readonly allowLeadingNumbers?: boolean | cdktf.IResolvable;
  /**
  * Default value is 1000000. An integer representing row batch size for each sent request to Google Sheets API. Row batch size means how many rows are processed from the google sheet, for example default value 1000000 would process rows 2-1000002, then 1000003-2000003 and so on. Based on <a href='https://developers.google.com/sheets/api/limits'>Google Sheets API limits documentation</a>, it is possible to send up to 300 requests per minute, but each individual request has to be processed under 180 seconds, otherwise the request returns a timeout error. In regards to this information, consider network speed and number of columns of the google sheet when deciding a batch_size value. Default: 1000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#batch_size SourceGoogleSheets#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Combines adjacent letters and numbers. Example: "Q3 2023" → "q3_2023" This option will only work if "Convert Column Names to SQL-Compliant Format (names_conversion)" is enabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#combine_letter_number_pairs SourceGoogleSheets#combine_letter_number_pairs}
  */
  readonly combineLetterNumberPairs?: boolean | cdktf.IResolvable;
  /**
  * Combines adjacent numbers and words. Example: "50th Percentile?" → "_50th_percentile_" This option will only work if "Convert Column Names to SQL-Compliant Format (names_conversion)" is enabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#combine_number_word_pairs SourceGoogleSheets#combine_number_word_pairs}
  */
  readonly combineNumberWordPairs?: boolean | cdktf.IResolvable;
  /**
  * Credentials for connecting to the Google Sheets API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#credentials SourceGoogleSheets#credentials}
  */
  readonly credentials: SourceGoogleSheetsConfigurationCredentials;
  /**
  * Converts column names to a SQL-compliant format (snake_case, lowercase, etc). If enabled, you can further customize the sanitization using the options below. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#names_conversion SourceGoogleSheets#names_conversion}
  */
  readonly namesConversion?: boolean | cdktf.IResolvable;
  /**
  * Removes leading and trailing underscores from column names. Does not remove leading underscores from column names that start with a number. Example: "50th Percentile? "→ "_50_th_percentile" This option will only work if "Convert Column Names to SQL-Compliant Format (names_conversion)" is enabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#remove_leading_trailing_underscores SourceGoogleSheets#remove_leading_trailing_underscores}
  */
  readonly removeLeadingTrailingUnderscores?: boolean | cdktf.IResolvable;
  /**
  * Removes all special characters from column names. Example: "Example ID*" → "example_id" This option will only work if "Convert Column Names to SQL-Compliant Format (names_conversion)" is enabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#remove_special_characters SourceGoogleSheets#remove_special_characters}
  */
  readonly removeSpecialCharacters?: boolean | cdktf.IResolvable;
  /**
  * Enter the link to the Google spreadsheet you want to sync. To copy the link, click the 'Share' button in the top-right corner of the spreadsheet, then click 'Copy link'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#spreadsheet_id SourceGoogleSheets#spreadsheet_id}
  */
  readonly spreadsheetId: string;
  /**
  * **Overridden streams will default to Sync Mode: Full Refresh (Append), which does not support primary keys. If you want to use primary keys and deduplication, update the sync mode to "Full Refresh | Overwrite + Deduped" in your connection settings.**
  * Allows you to rename streams (Google Sheet tab names) as they appear in Airbyte. 
  * Each item should be an object with a `source_stream_name` (the exact name of the sheet/tab in your spreadsheet)  and a `custom_stream_name` (the name you want it to appear as in Airbyte and the destination).
  * If a `source_stream_name` is not found in your spreadsheet, it will be ignored and the default name will be used. This feature only affects stream (sheet/tab) names, not field/column names.
  * If you want to rename fields or column names, you can do so using the Airbyte Mappings feature after your connection is created. See the Airbyte documentation for more details on how to use Mappings.
  * Examples:
  *   - To rename a sheet called "Sheet1" to "sales_data", and "2024 Q1" to "q1_2024":
  *     [
  *       { "source_stream_name": "Sheet1", "custom_stream_name": "sales_data" },
  *       { "source_stream_name": "2024 Q1", "custom_stream_name": "q1_2024" }
  *     ]
  *   - If you do not wish to rename any streams, leave this blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#stream_name_overrides SourceGoogleSheets#stream_name_overrides}
  */
  readonly streamNameOverrides?: SourceGoogleSheetsConfigurationStreamNameOverrides[] | cdktf.IResolvable;
}

export function sourceGoogleSheetsConfigurationToTerraform(struct?: SourceGoogleSheetsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_leading_numbers: cdktf.booleanToTerraform(struct!.allowLeadingNumbers),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    combine_letter_number_pairs: cdktf.booleanToTerraform(struct!.combineLetterNumberPairs),
    combine_number_word_pairs: cdktf.booleanToTerraform(struct!.combineNumberWordPairs),
    credentials: sourceGoogleSheetsConfigurationCredentialsToTerraform(struct!.credentials),
    names_conversion: cdktf.booleanToTerraform(struct!.namesConversion),
    remove_leading_trailing_underscores: cdktf.booleanToTerraform(struct!.removeLeadingTrailingUnderscores),
    remove_special_characters: cdktf.booleanToTerraform(struct!.removeSpecialCharacters),
    spreadsheet_id: cdktf.stringToTerraform(struct!.spreadsheetId),
    stream_name_overrides: cdktf.listMapper(sourceGoogleSheetsConfigurationStreamNameOverridesToTerraform, false)(struct!.streamNameOverrides),
  }
}


export function sourceGoogleSheetsConfigurationToHclTerraform(struct?: SourceGoogleSheetsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_leading_numbers: {
      value: cdktf.booleanToHclTerraform(struct!.allowLeadingNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    combine_letter_number_pairs: {
      value: cdktf.booleanToHclTerraform(struct!.combineLetterNumberPairs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    combine_number_word_pairs: {
      value: cdktf.booleanToHclTerraform(struct!.combineNumberWordPairs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials: {
      value: sourceGoogleSheetsConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleSheetsConfigurationCredentials",
    },
    names_conversion: {
      value: cdktf.booleanToHclTerraform(struct!.namesConversion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_leading_trailing_underscores: {
      value: cdktf.booleanToHclTerraform(struct!.removeLeadingTrailingUnderscores),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_special_characters: {
      value: cdktf.booleanToHclTerraform(struct!.removeSpecialCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spreadsheet_id: {
      value: cdktf.stringToHclTerraform(struct!.spreadsheetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name_overrides: {
      value: cdktf.listMapperHcl(sourceGoogleSheetsConfigurationStreamNameOverridesToHclTerraform, false)(struct!.streamNameOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleSheetsConfigurationStreamNameOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleSheetsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSheetsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowLeadingNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLeadingNumbers = this._allowLeadingNumbers;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._combineLetterNumberPairs !== undefined) {
      hasAnyValues = true;
      internalValueResult.combineLetterNumberPairs = this._combineLetterNumberPairs;
    }
    if (this._combineNumberWordPairs !== undefined) {
      hasAnyValues = true;
      internalValueResult.combineNumberWordPairs = this._combineNumberWordPairs;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._namesConversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.namesConversion = this._namesConversion;
    }
    if (this._removeLeadingTrailingUnderscores !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeLeadingTrailingUnderscores = this._removeLeadingTrailingUnderscores;
    }
    if (this._removeSpecialCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeSpecialCharacters = this._removeSpecialCharacters;
    }
    if (this._spreadsheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spreadsheetId = this._spreadsheetId;
    }
    if (this._streamNameOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamNameOverrides = this._streamNameOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSheetsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowLeadingNumbers = undefined;
      this._batchSize = undefined;
      this._combineLetterNumberPairs = undefined;
      this._combineNumberWordPairs = undefined;
      this._credentials.internalValue = undefined;
      this._namesConversion = undefined;
      this._removeLeadingTrailingUnderscores = undefined;
      this._removeSpecialCharacters = undefined;
      this._spreadsheetId = undefined;
      this._streamNameOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowLeadingNumbers = value.allowLeadingNumbers;
      this._batchSize = value.batchSize;
      this._combineLetterNumberPairs = value.combineLetterNumberPairs;
      this._combineNumberWordPairs = value.combineNumberWordPairs;
      this._credentials.internalValue = value.credentials;
      this._namesConversion = value.namesConversion;
      this._removeLeadingTrailingUnderscores = value.removeLeadingTrailingUnderscores;
      this._removeSpecialCharacters = value.removeSpecialCharacters;
      this._spreadsheetId = value.spreadsheetId;
      this._streamNameOverrides.internalValue = value.streamNameOverrides;
    }
  }

  // allow_leading_numbers - computed: true, optional: true, required: false
  private _allowLeadingNumbers?: boolean | cdktf.IResolvable; 
  public get allowLeadingNumbers() {
    return this.getBooleanAttribute('allow_leading_numbers');
  }
  public set allowLeadingNumbers(value: boolean | cdktf.IResolvable) {
    this._allowLeadingNumbers = value;
  }
  public resetAllowLeadingNumbers() {
    this._allowLeadingNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLeadingNumbersInput() {
    return this._allowLeadingNumbers;
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // combine_letter_number_pairs - computed: true, optional: true, required: false
  private _combineLetterNumberPairs?: boolean | cdktf.IResolvable; 
  public get combineLetterNumberPairs() {
    return this.getBooleanAttribute('combine_letter_number_pairs');
  }
  public set combineLetterNumberPairs(value: boolean | cdktf.IResolvable) {
    this._combineLetterNumberPairs = value;
  }
  public resetCombineLetterNumberPairs() {
    this._combineLetterNumberPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineLetterNumberPairsInput() {
    return this._combineLetterNumberPairs;
  }

  // combine_number_word_pairs - computed: true, optional: true, required: false
  private _combineNumberWordPairs?: boolean | cdktf.IResolvable; 
  public get combineNumberWordPairs() {
    return this.getBooleanAttribute('combine_number_word_pairs');
  }
  public set combineNumberWordPairs(value: boolean | cdktf.IResolvable) {
    this._combineNumberWordPairs = value;
  }
  public resetCombineNumberWordPairs() {
    this._combineNumberWordPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineNumberWordPairsInput() {
    return this._combineNumberWordPairs;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new SourceGoogleSheetsConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceGoogleSheetsConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // names_conversion - computed: true, optional: true, required: false
  private _namesConversion?: boolean | cdktf.IResolvable; 
  public get namesConversion() {
    return this.getBooleanAttribute('names_conversion');
  }
  public set namesConversion(value: boolean | cdktf.IResolvable) {
    this._namesConversion = value;
  }
  public resetNamesConversion() {
    this._namesConversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesConversionInput() {
    return this._namesConversion;
  }

  // remove_leading_trailing_underscores - computed: true, optional: true, required: false
  private _removeLeadingTrailingUnderscores?: boolean | cdktf.IResolvable; 
  public get removeLeadingTrailingUnderscores() {
    return this.getBooleanAttribute('remove_leading_trailing_underscores');
  }
  public set removeLeadingTrailingUnderscores(value: boolean | cdktf.IResolvable) {
    this._removeLeadingTrailingUnderscores = value;
  }
  public resetRemoveLeadingTrailingUnderscores() {
    this._removeLeadingTrailingUnderscores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLeadingTrailingUnderscoresInput() {
    return this._removeLeadingTrailingUnderscores;
  }

  // remove_special_characters - computed: true, optional: true, required: false
  private _removeSpecialCharacters?: boolean | cdktf.IResolvable; 
  public get removeSpecialCharacters() {
    return this.getBooleanAttribute('remove_special_characters');
  }
  public set removeSpecialCharacters(value: boolean | cdktf.IResolvable) {
    this._removeSpecialCharacters = value;
  }
  public resetRemoveSpecialCharacters() {
    this._removeSpecialCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeSpecialCharactersInput() {
    return this._removeSpecialCharacters;
  }

  // spreadsheet_id - computed: false, optional: false, required: true
  private _spreadsheetId?: string; 
  public get spreadsheetId() {
    return this.getStringAttribute('spreadsheet_id');
  }
  public set spreadsheetId(value: string) {
    this._spreadsheetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadsheetIdInput() {
    return this._spreadsheetId;
  }

  // stream_name_overrides - computed: false, optional: true, required: false
  private _streamNameOverrides = new SourceGoogleSheetsConfigurationStreamNameOverridesList(this, "stream_name_overrides", false);
  public get streamNameOverrides() {
    return this._streamNameOverrides;
  }
  public putStreamNameOverrides(value: SourceGoogleSheetsConfigurationStreamNameOverrides[] | cdktf.IResolvable) {
    this._streamNameOverrides.internalValue = value;
  }
  public resetStreamNameOverrides() {
    this._streamNameOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameOverridesInput() {
    return this._streamNameOverrides.internalValue;
  }
}
export interface SourceGoogleSheetsResourceAllocationDefault {
}

export function sourceGoogleSheetsResourceAllocationDefaultToTerraform(struct?: SourceGoogleSheetsResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleSheetsResourceAllocationDefaultToHclTerraform(struct?: SourceGoogleSheetsResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleSheetsResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSheetsResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSheetsResourceAllocationDefault | undefined) {
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
export interface SourceGoogleSheetsResourceAllocationJobSpecificResourceRequirements {
}

export function sourceGoogleSheetsResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceGoogleSheetsResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleSheetsResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceGoogleSheetsResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleSheetsResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSheetsResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSheetsResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceGoogleSheetsResourceAllocationJobSpecific {
}

export function sourceGoogleSheetsResourceAllocationJobSpecificToTerraform(struct?: SourceGoogleSheetsResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleSheetsResourceAllocationJobSpecificToHclTerraform(struct?: SourceGoogleSheetsResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleSheetsResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleSheetsResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSheetsResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceGoogleSheetsResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceGoogleSheetsResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceGoogleSheetsResourceAllocationJobSpecificOutputReference {
    return new SourceGoogleSheetsResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleSheetsResourceAllocation {
}

export function sourceGoogleSheetsResourceAllocationToTerraform(struct?: SourceGoogleSheetsResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleSheetsResourceAllocationToHclTerraform(struct?: SourceGoogleSheetsResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleSheetsResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSheetsResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSheetsResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceGoogleSheetsResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceGoogleSheetsResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets airbyte_source_google_sheets}
*/
export class SourceGoogleSheets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_google_sheets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceGoogleSheets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceGoogleSheets to import
  * @param importFromId The id of the existing SourceGoogleSheets that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceGoogleSheets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_google_sheets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_sheets airbyte_source_google_sheets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceGoogleSheetsConfig
  */
  public constructor(scope: Construct, id: string, config: SourceGoogleSheetsConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_google_sheets',
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
  private _configuration = new SourceGoogleSheetsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceGoogleSheetsConfiguration) {
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
  private _resourceAllocation = new SourceGoogleSheetsResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceGoogleSheetsConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceGoogleSheetsConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceGoogleSheetsConfiguration",
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
