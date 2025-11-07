// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceGcsConfig extends cdktf.TerraformMetaArguments {
  /**
  * NOTE: When this Spec is changed, legacy_config_transformer.py must also be
  * modified to uptake the changes because it is responsible for converting
  * legacy GCS configs into file based configs using the File-Based CDK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#configuration SourceGcs#configuration}
  */
  readonly configuration: SourceGcsConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#definition_id SourceGcs#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#name SourceGcs#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#secret_id SourceGcs#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#workspace_id SourceGcs#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuth {
  /**
  * Access Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#access_token SourceGcs#access_token}
  */
  readonly accessToken: string;
  /**
  * Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#client_id SourceGcs#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#client_secret SourceGcs#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Access Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#refresh_token SourceGcs#refresh_token}
  */
  readonly refreshToken: string;
}

export function sourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuthToTerraform(struct?: SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable): any {
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


export function sourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuthToHclTerraform(struct?: SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable): any {
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

export class SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable | undefined) {
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
export interface SourceGcsConfigurationCredentialsServiceAccountAuthentication {
  /**
  * Enter your Google Cloud <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys">service account key</a> in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#service_account SourceGcs#service_account}
  */
  readonly serviceAccount: string;
}

export function sourceGcsConfigurationCredentialsServiceAccountAuthenticationToTerraform(struct?: SourceGcsConfigurationCredentialsServiceAccountAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function sourceGcsConfigurationCredentialsServiceAccountAuthenticationToHclTerraform(struct?: SourceGcsConfigurationCredentialsServiceAccountAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationCredentialsServiceAccountAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationCredentialsServiceAccountAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationCredentialsServiceAccountAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface SourceGcsConfigurationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#authenticate_via_google_o_auth SourceGcs#authenticate_via_google_o_auth}
  */
  readonly authenticateViaGoogleOAuth?: SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#service_account_authentication SourceGcs#service_account_authentication}
  */
  readonly serviceAccountAuthentication?: SourceGcsConfigurationCredentialsServiceAccountAuthentication;
}

export function sourceGcsConfigurationCredentialsToTerraform(struct?: SourceGcsConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_via_google_o_auth: sourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuthToTerraform(struct!.authenticateViaGoogleOAuth),
    service_account_authentication: sourceGcsConfigurationCredentialsServiceAccountAuthenticationToTerraform(struct!.serviceAccountAuthentication),
  }
}


export function sourceGcsConfigurationCredentialsToHclTerraform(struct?: SourceGcsConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_via_google_o_auth: {
      value: sourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuthToHclTerraform(struct!.authenticateViaGoogleOAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuth",
    },
    service_account_authentication: {
      value: sourceGcsConfigurationCredentialsServiceAccountAuthenticationToHclTerraform(struct!.serviceAccountAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationCredentialsServiceAccountAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateViaGoogleOAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateViaGoogleOAuth = this._authenticateViaGoogleOAuth?.internalValue;
    }
    if (this._serviceAccountAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountAuthentication = this._serviceAccountAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateViaGoogleOAuth.internalValue = undefined;
      this._serviceAccountAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateViaGoogleOAuth.internalValue = value.authenticateViaGoogleOAuth;
      this._serviceAccountAuthentication.internalValue = value.serviceAccountAuthentication;
    }
  }

  // authenticate_via_google_o_auth - computed: false, optional: true, required: false
  private _authenticateViaGoogleOAuth = new SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuthOutputReference(this, "authenticate_via_google_o_auth");
  public get authenticateViaGoogleOAuth() {
    return this._authenticateViaGoogleOAuth;
  }
  public putAuthenticateViaGoogleOAuth(value: SourceGcsConfigurationCredentialsAuthenticateViaGoogleOAuth) {
    this._authenticateViaGoogleOAuth.internalValue = value;
  }
  public resetAuthenticateViaGoogleOAuth() {
    this._authenticateViaGoogleOAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateViaGoogleOAuthInput() {
    return this._authenticateViaGoogleOAuth.internalValue;
  }

  // service_account_authentication - computed: false, optional: true, required: false
  private _serviceAccountAuthentication = new SourceGcsConfigurationCredentialsServiceAccountAuthenticationOutputReference(this, "service_account_authentication");
  public get serviceAccountAuthentication() {
    return this._serviceAccountAuthentication;
  }
  public putServiceAccountAuthentication(value: SourceGcsConfigurationCredentialsServiceAccountAuthentication) {
    this._serviceAccountAuthentication.internalValue = value;
  }
  public resetServiceAccountAuthentication() {
    this._serviceAccountAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountAuthenticationInput() {
    return this._serviceAccountAuthentication.internalValue;
  }
}
export interface SourceGcsConfigurationStreamsFormatAvroFormat {
  /**
  * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#double_as_string SourceGcs#double_as_string}
  */
  readonly doubleAsString?: boolean | cdktf.IResolvable;
}

export function sourceGcsConfigurationStreamsFormatAvroFormatToTerraform(struct?: SourceGcsConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_as_string: cdktf.booleanToTerraform(struct!.doubleAsString),
  }
}


export function sourceGcsConfigurationStreamsFormatAvroFormatToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_as_string: {
      value: cdktf.booleanToHclTerraform(struct!.doubleAsString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleAsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleAsString = this._doubleAsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleAsString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleAsString = value.doubleAsString;
    }
  }

  // double_as_string - computed: true, optional: true, required: false
  private _doubleAsString?: boolean | cdktf.IResolvable; 
  public get doubleAsString() {
    return this.getBooleanAttribute('double_as_string');
  }
  public set doubleAsString(value: boolean | cdktf.IResolvable) {
    this._doubleAsString = value;
  }
  public resetDoubleAsString() {
    this._doubleAsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleAsStringInput() {
    return this._doubleAsString;
  }
}
export interface SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated {
}

export function sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined) {
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
export interface SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv {
}

export function sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined) {
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
export interface SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided {
  /**
  * The column names that will be used while emitting the CSV records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#column_names SourceGcs#column_names}
  */
  readonly columnNames: string[];
}

export function sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
  }
}


export function sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
    }
  }

  // column_names - computed: false, optional: false, required: true
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }
}
export interface SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#autogenerated SourceGcs#autogenerated}
  */
  readonly autogenerated?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#from_csv SourceGcs#from_csv}
  */
  readonly fromCsv?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#user_provided SourceGcs#user_provided}
  */
  readonly userProvided?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided;
}

export function sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerated: sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct!.autogenerated),
    from_csv: sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct!.fromCsv),
    user_provided: sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct!.userProvided),
  }
}


export function sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autogenerated: {
      value: sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct!.autogenerated),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated",
    },
    from_csv: {
      value: sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct!.fromCsv),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv",
    },
    user_provided: {
      value: sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct!.userProvided),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerated = this._autogenerated?.internalValue;
    }
    if (this._fromCsv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCsv = this._fromCsv?.internalValue;
    }
    if (this._userProvided?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProvided = this._userProvided?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autogenerated.internalValue = undefined;
      this._fromCsv.internalValue = undefined;
      this._userProvided.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autogenerated.internalValue = value.autogenerated;
      this._fromCsv.internalValue = value.fromCsv;
      this._userProvided.internalValue = value.userProvided;
    }
  }

  // autogenerated - computed: false, optional: true, required: false
  private _autogenerated = new SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference(this, "autogenerated");
  public get autogenerated() {
    return this._autogenerated;
  }
  public putAutogenerated(value: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated) {
    this._autogenerated.internalValue = value;
  }
  public resetAutogenerated() {
    this._autogenerated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogeneratedInput() {
    return this._autogenerated.internalValue;
  }

  // from_csv - computed: false, optional: true, required: false
  private _fromCsv = new SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference(this, "from_csv");
  public get fromCsv() {
    return this._fromCsv;
  }
  public putFromCsv(value: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv) {
    this._fromCsv.internalValue = value;
  }
  public resetFromCsv() {
    this._fromCsv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCsvInput() {
    return this._fromCsv.internalValue;
  }

  // user_provided - computed: false, optional: true, required: false
  private _userProvided = new SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference(this, "user_provided");
  public get userProvided() {
    return this._userProvided;
  }
  public putUserProvided(value: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided) {
    this._userProvided.internalValue = value;
  }
  public resetUserProvided() {
    this._userProvided.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProvidedInput() {
    return this._userProvided.internalValue;
  }
}
export interface SourceGcsConfigurationStreamsFormatCsvFormat {
  /**
  * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#delimiter SourceGcs#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#double_quote SourceGcs#double_quote}
  */
  readonly doubleQuote?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#encoding SourceGcs#encoding}
  */
  readonly encoding?: string;
  /**
  * The character used for escaping special characters. To disallow escaping, leave this field blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#escape_char SourceGcs#escape_char}
  */
  readonly escapeChar?: string;
  /**
  * A set of case-sensitive strings that should be interpreted as false values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#false_values SourceGcs#false_values}
  */
  readonly falseValues?: string[];
  /**
  * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#header_definition SourceGcs#header_definition}
  */
  readonly headerDefinition?: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinition;
  /**
  * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#ignore_errors_on_fields_mismatch SourceGcs#ignore_errors_on_fields_mismatch}
  */
  readonly ignoreErrorsOnFieldsMismatch?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#null_values SourceGcs#null_values}
  */
  readonly nullValues?: string[];
  /**
  * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#quote_char SourceGcs#quote_char}
  */
  readonly quoteChar?: string;
  /**
  * The number of rows to skip after the header row. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#skip_rows_after_header SourceGcs#skip_rows_after_header}
  */
  readonly skipRowsAfterHeader?: number;
  /**
  * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#skip_rows_before_header SourceGcs#skip_rows_before_header}
  */
  readonly skipRowsBeforeHeader?: number;
  /**
  * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#strings_can_be_null SourceGcs#strings_can_be_null}
  */
  readonly stringsCanBeNull?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as true values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#true_values SourceGcs#true_values}
  */
  readonly trueValues?: string[];
}

export function sourceGcsConfigurationStreamsFormatCsvFormatToTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    double_quote: cdktf.booleanToTerraform(struct!.doubleQuote),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    escape_char: cdktf.stringToTerraform(struct!.escapeChar),
    false_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.falseValues),
    header_definition: sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct!.headerDefinition),
    ignore_errors_on_fields_mismatch: cdktf.booleanToTerraform(struct!.ignoreErrorsOnFieldsMismatch),
    null_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nullValues),
    quote_char: cdktf.stringToTerraform(struct!.quoteChar),
    skip_rows_after_header: cdktf.numberToTerraform(struct!.skipRowsAfterHeader),
    skip_rows_before_header: cdktf.numberToTerraform(struct!.skipRowsBeforeHeader),
    strings_can_be_null: cdktf.booleanToTerraform(struct!.stringsCanBeNull),
    true_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trueValues),
  }
}


export function sourceGcsConfigurationStreamsFormatCsvFormatToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    double_quote: {
      value: cdktf.booleanToHclTerraform(struct!.doubleQuote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape_char: {
      value: cdktf.stringToHclTerraform(struct!.escapeChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    false_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.falseValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_definition: {
      value: sourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct!.headerDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinition",
    },
    ignore_errors_on_fields_mismatch: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrorsOnFieldsMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nullValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    quote_char: {
      value: cdktf.stringToHclTerraform(struct!.quoteChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_rows_after_header: {
      value: cdktf.numberToHclTerraform(struct!.skipRowsAfterHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_rows_before_header: {
      value: cdktf.numberToHclTerraform(struct!.skipRowsBeforeHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strings_can_be_null: {
      value: cdktf.booleanToHclTerraform(struct!.stringsCanBeNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    true_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trueValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatCsvFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._doubleQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleQuote = this._doubleQuote;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._escapeChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeChar = this._escapeChar;
    }
    if (this._falseValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.falseValues = this._falseValues;
    }
    if (this._headerDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerDefinition = this._headerDefinition?.internalValue;
    }
    if (this._ignoreErrorsOnFieldsMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrorsOnFieldsMismatch = this._ignoreErrorsOnFieldsMismatch;
    }
    if (this._nullValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues;
    }
    if (this._quoteChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteChar = this._quoteChar;
    }
    if (this._skipRowsAfterHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRowsAfterHeader = this._skipRowsAfterHeader;
    }
    if (this._skipRowsBeforeHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRowsBeforeHeader = this._skipRowsBeforeHeader;
    }
    if (this._stringsCanBeNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringsCanBeNull = this._stringsCanBeNull;
    }
    if (this._trueValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.trueValues = this._trueValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._doubleQuote = undefined;
      this._encoding = undefined;
      this._escapeChar = undefined;
      this._falseValues = undefined;
      this._headerDefinition.internalValue = undefined;
      this._ignoreErrorsOnFieldsMismatch = undefined;
      this._nullValues = undefined;
      this._quoteChar = undefined;
      this._skipRowsAfterHeader = undefined;
      this._skipRowsBeforeHeader = undefined;
      this._stringsCanBeNull = undefined;
      this._trueValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._doubleQuote = value.doubleQuote;
      this._encoding = value.encoding;
      this._escapeChar = value.escapeChar;
      this._falseValues = value.falseValues;
      this._headerDefinition.internalValue = value.headerDefinition;
      this._ignoreErrorsOnFieldsMismatch = value.ignoreErrorsOnFieldsMismatch;
      this._nullValues = value.nullValues;
      this._quoteChar = value.quoteChar;
      this._skipRowsAfterHeader = value.skipRowsAfterHeader;
      this._skipRowsBeforeHeader = value.skipRowsBeforeHeader;
      this._stringsCanBeNull = value.stringsCanBeNull;
      this._trueValues = value.trueValues;
    }
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // double_quote - computed: true, optional: true, required: false
  private _doubleQuote?: boolean | cdktf.IResolvable; 
  public get doubleQuote() {
    return this.getBooleanAttribute('double_quote');
  }
  public set doubleQuote(value: boolean | cdktf.IResolvable) {
    this._doubleQuote = value;
  }
  public resetDoubleQuote() {
    this._doubleQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleQuoteInput() {
    return this._doubleQuote;
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // escape_char - computed: false, optional: true, required: false
  private _escapeChar?: string; 
  public get escapeChar() {
    return this.getStringAttribute('escape_char');
  }
  public set escapeChar(value: string) {
    this._escapeChar = value;
  }
  public resetEscapeChar() {
    this._escapeChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharInput() {
    return this._escapeChar;
  }

  // false_values - computed: false, optional: true, required: false
  private _falseValues?: string[]; 
  public get falseValues() {
    return this.getListAttribute('false_values');
  }
  public set falseValues(value: string[]) {
    this._falseValues = value;
  }
  public resetFalseValues() {
    this._falseValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseValuesInput() {
    return this._falseValues;
  }

  // header_definition - computed: false, optional: true, required: false
  private _headerDefinition = new SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference(this, "header_definition");
  public get headerDefinition() {
    return this._headerDefinition;
  }
  public putHeaderDefinition(value: SourceGcsConfigurationStreamsFormatCsvFormatHeaderDefinition) {
    this._headerDefinition.internalValue = value;
  }
  public resetHeaderDefinition() {
    this._headerDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerDefinitionInput() {
    return this._headerDefinition.internalValue;
  }

  // ignore_errors_on_fields_mismatch - computed: true, optional: true, required: false
  private _ignoreErrorsOnFieldsMismatch?: boolean | cdktf.IResolvable; 
  public get ignoreErrorsOnFieldsMismatch() {
    return this.getBooleanAttribute('ignore_errors_on_fields_mismatch');
  }
  public set ignoreErrorsOnFieldsMismatch(value: boolean | cdktf.IResolvable) {
    this._ignoreErrorsOnFieldsMismatch = value;
  }
  public resetIgnoreErrorsOnFieldsMismatch() {
    this._ignoreErrorsOnFieldsMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsOnFieldsMismatchInput() {
    return this._ignoreErrorsOnFieldsMismatch;
  }

  // null_values - computed: true, optional: true, required: false
  private _nullValues?: string[]; 
  public get nullValues() {
    return this.getListAttribute('null_values');
  }
  public set nullValues(value: string[]) {
    this._nullValues = value;
  }
  public resetNullValues() {
    this._nullValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues;
  }

  // quote_char - computed: true, optional: true, required: false
  private _quoteChar?: string; 
  public get quoteChar() {
    return this.getStringAttribute('quote_char');
  }
  public set quoteChar(value: string) {
    this._quoteChar = value;
  }
  public resetQuoteChar() {
    this._quoteChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharInput() {
    return this._quoteChar;
  }

  // skip_rows_after_header - computed: true, optional: true, required: false
  private _skipRowsAfterHeader?: number; 
  public get skipRowsAfterHeader() {
    return this.getNumberAttribute('skip_rows_after_header');
  }
  public set skipRowsAfterHeader(value: number) {
    this._skipRowsAfterHeader = value;
  }
  public resetSkipRowsAfterHeader() {
    this._skipRowsAfterHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRowsAfterHeaderInput() {
    return this._skipRowsAfterHeader;
  }

  // skip_rows_before_header - computed: true, optional: true, required: false
  private _skipRowsBeforeHeader?: number; 
  public get skipRowsBeforeHeader() {
    return this.getNumberAttribute('skip_rows_before_header');
  }
  public set skipRowsBeforeHeader(value: number) {
    this._skipRowsBeforeHeader = value;
  }
  public resetSkipRowsBeforeHeader() {
    this._skipRowsBeforeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRowsBeforeHeaderInput() {
    return this._skipRowsBeforeHeader;
  }

  // strings_can_be_null - computed: true, optional: true, required: false
  private _stringsCanBeNull?: boolean | cdktf.IResolvable; 
  public get stringsCanBeNull() {
    return this.getBooleanAttribute('strings_can_be_null');
  }
  public set stringsCanBeNull(value: boolean | cdktf.IResolvable) {
    this._stringsCanBeNull = value;
  }
  public resetStringsCanBeNull() {
    this._stringsCanBeNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringsCanBeNullInput() {
    return this._stringsCanBeNull;
  }

  // true_values - computed: false, optional: true, required: false
  private _trueValues?: string[]; 
  public get trueValues() {
    return this.getListAttribute('true_values');
  }
  public set trueValues(value: string[]) {
    this._trueValues = value;
  }
  public resetTrueValues() {
    this._trueValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trueValuesInput() {
    return this._trueValues;
  }
}
export interface SourceGcsConfigurationStreamsFormatExcelFormat {
}

export function sourceGcsConfigurationStreamsFormatExcelFormatToTerraform(struct?: SourceGcsConfigurationStreamsFormatExcelFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsConfigurationStreamsFormatExcelFormatToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatExcelFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsConfigurationStreamsFormatExcelFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatExcelFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatExcelFormat | cdktf.IResolvable | undefined) {
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
export interface SourceGcsConfigurationStreamsFormatJsonlFormat {
}

export function sourceGcsConfigurationStreamsFormatJsonlFormatToTerraform(struct?: SourceGcsConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsConfigurationStreamsFormatJsonlFormatToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsConfigurationStreamsFormatJsonlFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined) {
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
export interface SourceGcsConfigurationStreamsFormatParquetFormat {
  /**
  * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#decimal_as_float SourceGcs#decimal_as_float}
  */
  readonly decimalAsFloat?: boolean | cdktf.IResolvable;
}

export function sourceGcsConfigurationStreamsFormatParquetFormatToTerraform(struct?: SourceGcsConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_as_float: cdktf.booleanToTerraform(struct!.decimalAsFloat),
  }
}


export function sourceGcsConfigurationStreamsFormatParquetFormatToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decimal_as_float: {
      value: cdktf.booleanToHclTerraform(struct!.decimalAsFloat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatParquetFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalAsFloat !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalAsFloat = this._decimalAsFloat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decimalAsFloat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decimalAsFloat = value.decimalAsFloat;
    }
  }

  // decimal_as_float - computed: true, optional: true, required: false
  private _decimalAsFloat?: boolean | cdktf.IResolvable; 
  public get decimalAsFloat() {
    return this.getBooleanAttribute('decimal_as_float');
  }
  public set decimalAsFloat(value: boolean | cdktf.IResolvable) {
    this._decimalAsFloat = value;
  }
  public resetDecimalAsFloat() {
    this._decimalAsFloat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalAsFloatInput() {
    return this._decimalAsFloat;
  }
}
export interface SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal {
}

export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined) {
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
export interface SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters {
  /**
  * The name of the unstructured API parameter to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#name SourceGcs#name}
  */
  readonly name: string;
  /**
  * The value of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#value SourceGcs#value}
  */
  readonly value: string;
}

export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersToTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters | cdktf.IResolvable): any {
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

export class SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersList extends cdktf.ComplexList {
  public internalValue? : SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters[] | cdktf.IResolvable

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
  public get(index: number): SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersOutputReference {
    return new SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi {
  /**
  * The API key to use matching the environment. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#api_key SourceGcs#api_key}
  */
  readonly apiKey?: string;
  /**
  * The URL of the unstructured API to use. Default: "https://api.unstructured.io"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#api_url SourceGcs#api_url}
  */
  readonly apiUrl?: string;
  /**
  * List of parameters send to the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#parameters SourceGcs#parameters}
  */
  readonly parameters?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters[] | cdktf.IResolvable;
}

export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiToTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    parameters: cdktf.listMapper(sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersToTerraform, false)(struct!.parameters),
  }
}


export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiUrl = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiUrl = value.apiUrl;
      this._parameters.internalValue = value.parameters;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_url - computed: true, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessing {
  /**
  * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#local SourceGcs#local}
  */
  readonly local?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal;
  /**
  * Process files via an API, using the `hi_res` mode. This option is useful for increased performance and accuracy, but requires an API key and a hosted instance of unstructured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#via_api SourceGcs#via_api}
  */
  readonly viaApi?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi;
}

export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct!.local),
    via_api: sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiToTerraform(struct!.viaApi),
  }
}


export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal",
    },
    via_api: {
      value: sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiToHclTerraform(struct!.viaApi),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._viaApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viaApi = this._viaApi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local.internalValue = undefined;
      this._viaApi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local.internalValue = value.local;
      this._viaApi.internalValue = value.viaApi;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local = new SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // via_api - computed: false, optional: true, required: false
  private _viaApi = new SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiOutputReference(this, "via_api");
  public get viaApi() {
    return this._viaApi;
  }
  public putViaApi(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi) {
    this._viaApi.internalValue = value;
  }
  public resetViaApi() {
    this._viaApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaApiInput() {
    return this._viaApi.internalValue;
  }
}
export interface SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormat {
  /**
  * Processing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#processing SourceGcs#processing}
  */
  readonly processing?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessing;
  /**
  * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#skip_unprocessable_files SourceGcs#skip_unprocessable_files}
  */
  readonly skipUnprocessableFiles?: boolean | cdktf.IResolvable;
  /**
  * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. Default: "auto"; must be one of ["auto", "fast", "ocr_only", "hi_res"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#strategy SourceGcs#strategy}
  */
  readonly strategy?: string;
}

export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processing: sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct!.processing),
    skip_unprocessable_files: cdktf.booleanToTerraform(struct!.skipUnprocessableFiles),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processing: {
      value: sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessing",
    },
    skip_unprocessable_files: {
      value: cdktf.booleanToHclTerraform(struct!.skipUnprocessableFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processing = this._processing?.internalValue;
    }
    if (this._skipUnprocessableFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUnprocessableFiles = this._skipUnprocessableFiles;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processing.internalValue = undefined;
      this._skipUnprocessableFiles = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processing.internalValue = value.processing;
      this._skipUnprocessableFiles = value.skipUnprocessableFiles;
      this._strategy = value.strategy;
    }
  }

  // processing - computed: false, optional: true, required: false
  private _processing = new SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatProcessing) {
    this._processing.internalValue = value;
  }
  public resetProcessing() {
    this._processing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // skip_unprocessable_files - computed: true, optional: true, required: false
  private _skipUnprocessableFiles?: boolean | cdktf.IResolvable; 
  public get skipUnprocessableFiles() {
    return this.getBooleanAttribute('skip_unprocessable_files');
  }
  public set skipUnprocessableFiles(value: boolean | cdktf.IResolvable) {
    this._skipUnprocessableFiles = value;
  }
  public resetSkipUnprocessableFiles() {
    this._skipUnprocessableFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUnprocessableFilesInput() {
    return this._skipUnprocessableFiles;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface SourceGcsConfigurationStreamsFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#avro_format SourceGcs#avro_format}
  */
  readonly avroFormat?: SourceGcsConfigurationStreamsFormatAvroFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#csv_format SourceGcs#csv_format}
  */
  readonly csvFormat?: SourceGcsConfigurationStreamsFormatCsvFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#excel_format SourceGcs#excel_format}
  */
  readonly excelFormat?: SourceGcsConfigurationStreamsFormatExcelFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#jsonl_format SourceGcs#jsonl_format}
  */
  readonly jsonlFormat?: SourceGcsConfigurationStreamsFormatJsonlFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#parquet_format SourceGcs#parquet_format}
  */
  readonly parquetFormat?: SourceGcsConfigurationStreamsFormatParquetFormat;
  /**
  * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#unstructured_document_format SourceGcs#unstructured_document_format}
  */
  readonly unstructuredDocumentFormat?: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormat;
}

export function sourceGcsConfigurationStreamsFormatToTerraform(struct?: SourceGcsConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro_format: sourceGcsConfigurationStreamsFormatAvroFormatToTerraform(struct!.avroFormat),
    csv_format: sourceGcsConfigurationStreamsFormatCsvFormatToTerraform(struct!.csvFormat),
    excel_format: sourceGcsConfigurationStreamsFormatExcelFormatToTerraform(struct!.excelFormat),
    jsonl_format: sourceGcsConfigurationStreamsFormatJsonlFormatToTerraform(struct!.jsonlFormat),
    parquet_format: sourceGcsConfigurationStreamsFormatParquetFormatToTerraform(struct!.parquetFormat),
    unstructured_document_format: sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct!.unstructuredDocumentFormat),
  }
}


export function sourceGcsConfigurationStreamsFormatToHclTerraform(struct?: SourceGcsConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro_format: {
      value: sourceGcsConfigurationStreamsFormatAvroFormatToHclTerraform(struct!.avroFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatAvroFormat",
    },
    csv_format: {
      value: sourceGcsConfigurationStreamsFormatCsvFormatToHclTerraform(struct!.csvFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatCsvFormat",
    },
    excel_format: {
      value: sourceGcsConfigurationStreamsFormatExcelFormatToHclTerraform(struct!.excelFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatExcelFormat",
    },
    jsonl_format: {
      value: sourceGcsConfigurationStreamsFormatJsonlFormatToHclTerraform(struct!.jsonlFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatJsonlFormat",
    },
    parquet_format: {
      value: sourceGcsConfigurationStreamsFormatParquetFormatToHclTerraform(struct!.parquetFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatParquetFormat",
    },
    unstructured_document_format: {
      value: sourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct!.unstructuredDocumentFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfigurationStreamsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avroFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFormat = this._avroFormat?.internalValue;
    }
    if (this._csvFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvFormat = this._csvFormat?.internalValue;
    }
    if (this._excelFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excelFormat = this._excelFormat?.internalValue;
    }
    if (this._jsonlFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonlFormat = this._jsonlFormat?.internalValue;
    }
    if (this._parquetFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetFormat = this._parquetFormat?.internalValue;
    }
    if (this._unstructuredDocumentFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructuredDocumentFormat = this._unstructuredDocumentFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreamsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avroFormat.internalValue = undefined;
      this._csvFormat.internalValue = undefined;
      this._excelFormat.internalValue = undefined;
      this._jsonlFormat.internalValue = undefined;
      this._parquetFormat.internalValue = undefined;
      this._unstructuredDocumentFormat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avroFormat.internalValue = value.avroFormat;
      this._csvFormat.internalValue = value.csvFormat;
      this._excelFormat.internalValue = value.excelFormat;
      this._jsonlFormat.internalValue = value.jsonlFormat;
      this._parquetFormat.internalValue = value.parquetFormat;
      this._unstructuredDocumentFormat.internalValue = value.unstructuredDocumentFormat;
    }
  }

  // avro_format - computed: false, optional: true, required: false
  private _avroFormat = new SourceGcsConfigurationStreamsFormatAvroFormatOutputReference(this, "avro_format");
  public get avroFormat() {
    return this._avroFormat;
  }
  public putAvroFormat(value: SourceGcsConfigurationStreamsFormatAvroFormat) {
    this._avroFormat.internalValue = value;
  }
  public resetAvroFormat() {
    this._avroFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFormatInput() {
    return this._avroFormat.internalValue;
  }

  // csv_format - computed: false, optional: true, required: false
  private _csvFormat = new SourceGcsConfigurationStreamsFormatCsvFormatOutputReference(this, "csv_format");
  public get csvFormat() {
    return this._csvFormat;
  }
  public putCsvFormat(value: SourceGcsConfigurationStreamsFormatCsvFormat) {
    this._csvFormat.internalValue = value;
  }
  public resetCsvFormat() {
    this._csvFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvFormatInput() {
    return this._csvFormat.internalValue;
  }

  // excel_format - computed: false, optional: true, required: false
  private _excelFormat = new SourceGcsConfigurationStreamsFormatExcelFormatOutputReference(this, "excel_format");
  public get excelFormat() {
    return this._excelFormat;
  }
  public putExcelFormat(value: SourceGcsConfigurationStreamsFormatExcelFormat) {
    this._excelFormat.internalValue = value;
  }
  public resetExcelFormat() {
    this._excelFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excelFormatInput() {
    return this._excelFormat.internalValue;
  }

  // jsonl_format - computed: false, optional: true, required: false
  private _jsonlFormat = new SourceGcsConfigurationStreamsFormatJsonlFormatOutputReference(this, "jsonl_format");
  public get jsonlFormat() {
    return this._jsonlFormat;
  }
  public putJsonlFormat(value: SourceGcsConfigurationStreamsFormatJsonlFormat) {
    this._jsonlFormat.internalValue = value;
  }
  public resetJsonlFormat() {
    this._jsonlFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonlFormatInput() {
    return this._jsonlFormat.internalValue;
  }

  // parquet_format - computed: false, optional: true, required: false
  private _parquetFormat = new SourceGcsConfigurationStreamsFormatParquetFormatOutputReference(this, "parquet_format");
  public get parquetFormat() {
    return this._parquetFormat;
  }
  public putParquetFormat(value: SourceGcsConfigurationStreamsFormatParquetFormat) {
    this._parquetFormat.internalValue = value;
  }
  public resetParquetFormat() {
    this._parquetFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetFormatInput() {
    return this._parquetFormat.internalValue;
  }

  // unstructured_document_format - computed: false, optional: true, required: false
  private _unstructuredDocumentFormat = new SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference(this, "unstructured_document_format");
  public get unstructuredDocumentFormat() {
    return this._unstructuredDocumentFormat;
  }
  public putUnstructuredDocumentFormat(value: SourceGcsConfigurationStreamsFormatUnstructuredDocumentFormat) {
    this._unstructuredDocumentFormat.internalValue = value;
  }
  public resetUnstructuredDocumentFormat() {
    this._unstructuredDocumentFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredDocumentFormatInput() {
    return this._unstructuredDocumentFormat.internalValue;
  }
}
export interface SourceGcsConfigurationStreams {
  /**
  * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#days_to_sync_if_history_is_full SourceGcs#days_to_sync_if_history_is_full}
  */
  readonly daysToSyncIfHistoryIsFull?: number;
  /**
  * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#format SourceGcs#format}
  */
  readonly format: SourceGcsConfigurationStreamsFormat;
  /**
  * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#globs SourceGcs#globs}
  */
  readonly globs?: string[];
  /**
  * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#input_schema SourceGcs#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * The name of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#name SourceGcs#name}
  */
  readonly name: string;
  /**
  * The number of resent files which will be used to discover the schema for this stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#recent_n_files_to_read_for_schema_discovery SourceGcs#recent_n_files_to_read_for_schema_discovery}
  */
  readonly recentNFilesToReadForSchemaDiscovery?: number;
  /**
  * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#schemaless SourceGcs#schemaless}
  */
  readonly schemaless?: boolean | cdktf.IResolvable;
  /**
  * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. Default: "Emit Record"; must be one of ["Emit Record", "Skip Record", "Wait for Discover"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#validation_policy SourceGcs#validation_policy}
  */
  readonly validationPolicy?: string;
}

export function sourceGcsConfigurationStreamsToTerraform(struct?: SourceGcsConfigurationStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_to_sync_if_history_is_full: cdktf.numberToTerraform(struct!.daysToSyncIfHistoryIsFull),
    format: sourceGcsConfigurationStreamsFormatToTerraform(struct!.format),
    globs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globs),
    input_schema: cdktf.stringToTerraform(struct!.inputSchema),
    name: cdktf.stringToTerraform(struct!.name),
    recent_n_files_to_read_for_schema_discovery: cdktf.numberToTerraform(struct!.recentNFilesToReadForSchemaDiscovery),
    schemaless: cdktf.booleanToTerraform(struct!.schemaless),
    validation_policy: cdktf.stringToTerraform(struct!.validationPolicy),
  }
}


export function sourceGcsConfigurationStreamsToHclTerraform(struct?: SourceGcsConfigurationStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_to_sync_if_history_is_full: {
      value: cdktf.numberToHclTerraform(struct!.daysToSyncIfHistoryIsFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    format: {
      value: sourceGcsConfigurationStreamsFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationStreamsFormat",
    },
    globs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_schema: {
      value: cdktf.stringToHclTerraform(struct!.inputSchema),
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
    recent_n_files_to_read_for_schema_discovery: {
      value: cdktf.numberToHclTerraform(struct!.recentNFilesToReadForSchemaDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schemaless: {
      value: cdktf.booleanToHclTerraform(struct!.schemaless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_policy: {
      value: cdktf.stringToHclTerraform(struct!.validationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGcsConfigurationStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysToSyncIfHistoryIsFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysToSyncIfHistoryIsFull = this._daysToSyncIfHistoryIsFull;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._globs !== undefined) {
      hasAnyValues = true;
      internalValueResult.globs = this._globs;
    }
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._recentNFilesToReadForSchemaDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.recentNFilesToReadForSchemaDiscovery = this._recentNFilesToReadForSchemaDiscovery;
    }
    if (this._schemaless !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaless = this._schemaless;
    }
    if (this._validationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationPolicy = this._validationPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfigurationStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysToSyncIfHistoryIsFull = undefined;
      this._format.internalValue = undefined;
      this._globs = undefined;
      this._inputSchema = undefined;
      this._name = undefined;
      this._recentNFilesToReadForSchemaDiscovery = undefined;
      this._schemaless = undefined;
      this._validationPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysToSyncIfHistoryIsFull = value.daysToSyncIfHistoryIsFull;
      this._format.internalValue = value.format;
      this._globs = value.globs;
      this._inputSchema = value.inputSchema;
      this._name = value.name;
      this._recentNFilesToReadForSchemaDiscovery = value.recentNFilesToReadForSchemaDiscovery;
      this._schemaless = value.schemaless;
      this._validationPolicy = value.validationPolicy;
    }
  }

  // days_to_sync_if_history_is_full - computed: true, optional: true, required: false
  private _daysToSyncIfHistoryIsFull?: number; 
  public get daysToSyncIfHistoryIsFull() {
    return this.getNumberAttribute('days_to_sync_if_history_is_full');
  }
  public set daysToSyncIfHistoryIsFull(value: number) {
    this._daysToSyncIfHistoryIsFull = value;
  }
  public resetDaysToSyncIfHistoryIsFull() {
    this._daysToSyncIfHistoryIsFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToSyncIfHistoryIsFullInput() {
    return this._daysToSyncIfHistoryIsFull;
  }

  // format - computed: false, optional: false, required: true
  private _format = new SourceGcsConfigurationStreamsFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: SourceGcsConfigurationStreamsFormat) {
    this._format.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // globs - computed: false, optional: true, required: false
  private _globs?: string[]; 
  public get globs() {
    return this.getListAttribute('globs');
  }
  public set globs(value: string[]) {
    this._globs = value;
  }
  public resetGlobs() {
    this._globs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globsInput() {
    return this._globs;
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
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

  // recent_n_files_to_read_for_schema_discovery - computed: false, optional: true, required: false
  private _recentNFilesToReadForSchemaDiscovery?: number; 
  public get recentNFilesToReadForSchemaDiscovery() {
    return this.getNumberAttribute('recent_n_files_to_read_for_schema_discovery');
  }
  public set recentNFilesToReadForSchemaDiscovery(value: number) {
    this._recentNFilesToReadForSchemaDiscovery = value;
  }
  public resetRecentNFilesToReadForSchemaDiscovery() {
    this._recentNFilesToReadForSchemaDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentNFilesToReadForSchemaDiscoveryInput() {
    return this._recentNFilesToReadForSchemaDiscovery;
  }

  // schemaless - computed: true, optional: true, required: false
  private _schemaless?: boolean | cdktf.IResolvable; 
  public get schemaless() {
    return this.getBooleanAttribute('schemaless');
  }
  public set schemaless(value: boolean | cdktf.IResolvable) {
    this._schemaless = value;
  }
  public resetSchemaless() {
    this._schemaless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemalessInput() {
    return this._schemaless;
  }

  // validation_policy - computed: true, optional: true, required: false
  private _validationPolicy?: string; 
  public get validationPolicy() {
    return this.getStringAttribute('validation_policy');
  }
  public set validationPolicy(value: string) {
    this._validationPolicy = value;
  }
  public resetValidationPolicy() {
    this._validationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationPolicyInput() {
    return this._validationPolicy;
  }
}

export class SourceGcsConfigurationStreamsList extends cdktf.ComplexList {
  public internalValue? : SourceGcsConfigurationStreams[] | cdktf.IResolvable

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
  public get(index: number): SourceGcsConfigurationStreamsOutputReference {
    return new SourceGcsConfigurationStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGcsConfiguration {
  /**
  * Name of the GCS bucket where the file(s) exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#bucket SourceGcs#bucket}
  */
  readonly bucket: string;
  /**
  * Credentials for connecting to the Google Cloud Storage API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#credentials SourceGcs#credentials}
  */
  readonly credentials: SourceGcsConfigurationCredentials;
  /**
  * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#start_date SourceGcs#start_date}
  */
  readonly startDate?: string;
  /**
  * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#streams SourceGcs#streams}
  */
  readonly streams: SourceGcsConfigurationStreams[] | cdktf.IResolvable;
}

export function sourceGcsConfigurationToTerraform(struct?: SourceGcsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials: sourceGcsConfigurationCredentialsToTerraform(struct!.credentials),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    streams: cdktf.listMapper(sourceGcsConfigurationStreamsToTerraform, false)(struct!.streams),
  }
}


export function sourceGcsConfigurationToHclTerraform(struct?: SourceGcsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: sourceGcsConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGcsConfigurationCredentials",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streams: {
      value: cdktf.listMapperHcl(sourceGcsConfigurationStreamsToHclTerraform, false)(struct!.streams),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGcsConfigurationStreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGcsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._streams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._credentials.internalValue = undefined;
      this._startDate = undefined;
      this._streams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._credentials.internalValue = value.credentials;
      this._startDate = value.startDate;
      this._streams.internalValue = value.streams;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new SourceGcsConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceGcsConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
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

  // streams - computed: false, optional: false, required: true
  private _streams = new SourceGcsConfigurationStreamsList(this, "streams", false);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: SourceGcsConfigurationStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }
}
export interface SourceGcsResourceAllocationDefault {
}

export function sourceGcsResourceAllocationDefaultToTerraform(struct?: SourceGcsResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsResourceAllocationDefaultToHclTerraform(struct?: SourceGcsResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsResourceAllocationDefault | undefined) {
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
export interface SourceGcsResourceAllocationJobSpecificResourceRequirements {
}

export function sourceGcsResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceGcsResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceGcsResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceGcsResourceAllocationJobSpecific {
}

export function sourceGcsResourceAllocationJobSpecificToTerraform(struct?: SourceGcsResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsResourceAllocationJobSpecificToHclTerraform(struct?: SourceGcsResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGcsResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceGcsResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceGcsResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceGcsResourceAllocationJobSpecificOutputReference {
    return new SourceGcsResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGcsResourceAllocation {
}

export function sourceGcsResourceAllocationToTerraform(struct?: SourceGcsResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGcsResourceAllocationToHclTerraform(struct?: SourceGcsResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGcsResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGcsResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGcsResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceGcsResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceGcsResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs airbyte_source_gcs}
*/
export class SourceGcs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_gcs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceGcs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceGcs to import
  * @param importFromId The id of the existing SourceGcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceGcs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_gcs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_gcs airbyte_source_gcs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceGcsConfig
  */
  public constructor(scope: Construct, id: string, config: SourceGcsConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_gcs',
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
  private _configuration = new SourceGcsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceGcsConfiguration) {
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
  private _resourceAllocation = new SourceGcsResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceGcsConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceGcsConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceGcsConfiguration",
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
