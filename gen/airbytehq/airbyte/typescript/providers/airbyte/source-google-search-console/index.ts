// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceGoogleSearchConsoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#configuration SourceGoogleSearchConsole#configuration}
  */
  readonly configuration: SourceGoogleSearchConsoleConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#definition_id SourceGoogleSearchConsole#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#name SourceGoogleSearchConsole#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#secret_id SourceGoogleSearchConsole#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#workspace_id SourceGoogleSearchConsole#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceGoogleSearchConsoleConfigurationAuthorizationOAuth {
  /**
  * Access token for making authenticated requests. Read more <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#access_token SourceGoogleSearchConsole#access_token}
  */
  readonly accessToken?: string;
  /**
  * The client ID of your Google Search Console developer application. Read more <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#client_id SourceGoogleSearchConsole#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret of your Google Search Console developer application. Read more <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#client_secret SourceGoogleSearchConsole#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The token for obtaining a new access token. Read more <a href="https://developers.google.com/webmaster-tools/v1/how-tos/authorizing">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#refresh_token SourceGoogleSearchConsole#refresh_token}
  */
  readonly refreshToken: string;
}

export function sourceGoogleSearchConsoleConfigurationAuthorizationOAuthToTerraform(struct?: SourceGoogleSearchConsoleConfigurationAuthorizationOAuth | cdktf.IResolvable): any {
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


export function sourceGoogleSearchConsoleConfigurationAuthorizationOAuthToHclTerraform(struct?: SourceGoogleSearchConsoleConfigurationAuthorizationOAuth | cdktf.IResolvable): any {
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

export class SourceGoogleSearchConsoleConfigurationAuthorizationOAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSearchConsoleConfigurationAuthorizationOAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleSearchConsoleConfigurationAuthorizationOAuth | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication {
  /**
  * The email of the user which has permissions to access the Google Workspace Admin APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#email SourceGoogleSearchConsole#email}
  */
  readonly email: string;
  /**
  * The JSON key of the service account to use for authorization. Read more <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#service_account_info SourceGoogleSearchConsole#service_account_info}
  */
  readonly serviceAccountInfo: string;
}

export function sourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthenticationToTerraform(struct?: SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    service_account_info: cdktf.stringToTerraform(struct!.serviceAccountInfo),
  }
}


export function sourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthenticationToHclTerraform(struct?: SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._serviceAccountInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountInfo = this._serviceAccountInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._serviceAccountInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._serviceAccountInfo = value.serviceAccountInfo;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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
export interface SourceGoogleSearchConsoleConfigurationAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#o_auth SourceGoogleSearchConsole#o_auth}
  */
  readonly oAuth?: SourceGoogleSearchConsoleConfigurationAuthorizationOAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#service_account_key_authentication SourceGoogleSearchConsole#service_account_key_authentication}
  */
  readonly serviceAccountKeyAuthentication?: SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication;
}

export function sourceGoogleSearchConsoleConfigurationAuthorizationToTerraform(struct?: SourceGoogleSearchConsoleConfigurationAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    o_auth: sourceGoogleSearchConsoleConfigurationAuthorizationOAuthToTerraform(struct!.oAuth),
    service_account_key_authentication: sourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthenticationToTerraform(struct!.serviceAccountKeyAuthentication),
  }
}


export function sourceGoogleSearchConsoleConfigurationAuthorizationToHclTerraform(struct?: SourceGoogleSearchConsoleConfigurationAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    o_auth: {
      value: sourceGoogleSearchConsoleConfigurationAuthorizationOAuthToHclTerraform(struct!.oAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleSearchConsoleConfigurationAuthorizationOAuth",
    },
    service_account_key_authentication: {
      value: sourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthenticationToHclTerraform(struct!.serviceAccountKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleSearchConsoleConfigurationAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSearchConsoleConfigurationAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuth = this._oAuth?.internalValue;
    }
    if (this._serviceAccountKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKeyAuthentication = this._serviceAccountKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSearchConsoleConfigurationAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oAuth.internalValue = undefined;
      this._serviceAccountKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oAuth.internalValue = value.oAuth;
      this._serviceAccountKeyAuthentication.internalValue = value.serviceAccountKeyAuthentication;
    }
  }

  // o_auth - computed: false, optional: true, required: false
  private _oAuth = new SourceGoogleSearchConsoleConfigurationAuthorizationOAuthOutputReference(this, "o_auth");
  public get oAuth() {
    return this._oAuth;
  }
  public putOAuth(value: SourceGoogleSearchConsoleConfigurationAuthorizationOAuth) {
    this._oAuth.internalValue = value;
  }
  public resetOAuth() {
    this._oAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthInput() {
    return this._oAuth.internalValue;
  }

  // service_account_key_authentication - computed: false, optional: true, required: false
  private _serviceAccountKeyAuthentication = new SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthenticationOutputReference(this, "service_account_key_authentication");
  public get serviceAccountKeyAuthentication() {
    return this._serviceAccountKeyAuthentication;
  }
  public putServiceAccountKeyAuthentication(value: SourceGoogleSearchConsoleConfigurationAuthorizationServiceAccountKeyAuthentication) {
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
export interface SourceGoogleSearchConsoleConfigurationCustomReportsArray {
  /**
  * A list of available dimensions. Please note, that for technical reasons `date` is the default dimension which will be included in your query whether you specify it or not. Primary key will consist of your custom dimensions and the default dimension along with `site_url` and `search_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#dimensions SourceGoogleSearchConsole#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * The name of the custom report, this name would be used as stream name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#name SourceGoogleSearchConsole#name}
  */
  readonly name: string;
}

export function sourceGoogleSearchConsoleConfigurationCustomReportsArrayToTerraform(struct?: SourceGoogleSearchConsoleConfigurationCustomReportsArray | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sourceGoogleSearchConsoleConfigurationCustomReportsArrayToHclTerraform(struct?: SourceGoogleSearchConsoleConfigurationCustomReportsArray | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
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

export class SourceGoogleSearchConsoleConfigurationCustomReportsArrayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleSearchConsoleConfigurationCustomReportsArray | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSearchConsoleConfigurationCustomReportsArray | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._name = value.name;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

export class SourceGoogleSearchConsoleConfigurationCustomReportsArrayList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleSearchConsoleConfigurationCustomReportsArray[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleSearchConsoleConfigurationCustomReportsArrayOutputReference {
    return new SourceGoogleSearchConsoleConfigurationCustomReportsArrayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleSearchConsoleConfiguration {
  /**
  * Some search analytics streams fail with a 400 error if the specified `aggregationType` is not supported. This is customer implementation dependent and if this error is encountered, enable this setting which will override the existing `aggregationType` to use `auto` which should resolve the stream errors. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#always_use_aggregation_type_auto SourceGoogleSearchConsole#always_use_aggregation_type_auto}
  */
  readonly alwaysUseAggregationTypeAuto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#authorization SourceGoogleSearchConsole#authorization}
  */
  readonly authorization: SourceGoogleSearchConsoleConfigurationAuthorization;
  /**
  * You can add your Custom Analytics report by creating one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#custom_reports_array SourceGoogleSearchConsole#custom_reports_array}
  */
  readonly customReportsArray?: SourceGoogleSearchConsoleConfigurationCustomReportsArray[] | cdktf.IResolvable;
  /**
  * If set to 'final', the returned data will include only finalized, stable data. If set to 'all', fresh data will be included. When using Incremental sync mode, we do not recommend setting this parameter to 'all' as it may cause data loss. More information can be found in our <a href='https://docs.airbyte.com/integrations/source/google-search-console'>full documentation</a>. Default: "final"; must be one of ["final", "all"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#data_state SourceGoogleSearchConsole#data_state}
  */
  readonly dataState?: string;
  /**
  * UTC date in the format YYYY-MM-DD. Any data created after this date will not be replicated. Must be greater or equal to the start date field. Leaving this field blank will replicate all data from the start date onward.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#end_date SourceGoogleSearchConsole#end_date}
  */
  readonly endDate?: string;
  /**
  * The number of worker threads to use for the sync. For more details on Google Search Console rate limits, refer to the <a href="https://developers.google.com/webmaster-tools/limits">docs</a>. Default: 40
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#num_workers SourceGoogleSearchConsole#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * The URLs of the website property attached to your GSC account. Learn more about properties <a href="https://support.google.com/webmasters/answer/34592?hl=en">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#site_urls SourceGoogleSearchConsole#site_urls}
  */
  readonly siteUrls: string[];
  /**
  * UTC date in the format YYYY-MM-DD. Any data before this date will not be replicated. Default: "2021-01-01"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#start_date SourceGoogleSearchConsole#start_date}
  */
  readonly startDate?: string;
}

export function sourceGoogleSearchConsoleConfigurationToTerraform(struct?: SourceGoogleSearchConsoleConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_use_aggregation_type_auto: cdktf.booleanToTerraform(struct!.alwaysUseAggregationTypeAuto),
    authorization: sourceGoogleSearchConsoleConfigurationAuthorizationToTerraform(struct!.authorization),
    custom_reports_array: cdktf.listMapper(sourceGoogleSearchConsoleConfigurationCustomReportsArrayToTerraform, false)(struct!.customReportsArray),
    data_state: cdktf.stringToTerraform(struct!.dataState),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    num_workers: cdktf.numberToTerraform(struct!.numWorkers),
    site_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteUrls),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function sourceGoogleSearchConsoleConfigurationToHclTerraform(struct?: SourceGoogleSearchConsoleConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_use_aggregation_type_auto: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysUseAggregationTypeAuto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authorization: {
      value: sourceGoogleSearchConsoleConfigurationAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleSearchConsoleConfigurationAuthorization",
    },
    custom_reports_array: {
      value: cdktf.listMapperHcl(sourceGoogleSearchConsoleConfigurationCustomReportsArrayToHclTerraform, false)(struct!.customReportsArray),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleSearchConsoleConfigurationCustomReportsArrayList",
    },
    data_state: {
      value: cdktf.stringToHclTerraform(struct!.dataState),
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
    num_workers: {
      value: cdktf.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SourceGoogleSearchConsoleConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSearchConsoleConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysUseAggregationTypeAuto !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysUseAggregationTypeAuto = this._alwaysUseAggregationTypeAuto;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._customReportsArray?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customReportsArray = this._customReportsArray?.internalValue;
    }
    if (this._dataState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataState = this._dataState;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._siteUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUrls = this._siteUrls;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSearchConsoleConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysUseAggregationTypeAuto = undefined;
      this._authorization.internalValue = undefined;
      this._customReportsArray.internalValue = undefined;
      this._dataState = undefined;
      this._endDate = undefined;
      this._numWorkers = undefined;
      this._siteUrls = undefined;
      this._startDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysUseAggregationTypeAuto = value.alwaysUseAggregationTypeAuto;
      this._authorization.internalValue = value.authorization;
      this._customReportsArray.internalValue = value.customReportsArray;
      this._dataState = value.dataState;
      this._endDate = value.endDate;
      this._numWorkers = value.numWorkers;
      this._siteUrls = value.siteUrls;
      this._startDate = value.startDate;
    }
  }

  // always_use_aggregation_type_auto - computed: true, optional: true, required: false
  private _alwaysUseAggregationTypeAuto?: boolean | cdktf.IResolvable; 
  public get alwaysUseAggregationTypeAuto() {
    return this.getBooleanAttribute('always_use_aggregation_type_auto');
  }
  public set alwaysUseAggregationTypeAuto(value: boolean | cdktf.IResolvable) {
    this._alwaysUseAggregationTypeAuto = value;
  }
  public resetAlwaysUseAggregationTypeAuto() {
    this._alwaysUseAggregationTypeAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUseAggregationTypeAutoInput() {
    return this._alwaysUseAggregationTypeAuto;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization = new SourceGoogleSearchConsoleConfigurationAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: SourceGoogleSearchConsoleConfigurationAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // custom_reports_array - computed: false, optional: true, required: false
  private _customReportsArray = new SourceGoogleSearchConsoleConfigurationCustomReportsArrayList(this, "custom_reports_array", false);
  public get customReportsArray() {
    return this._customReportsArray;
  }
  public putCustomReportsArray(value: SourceGoogleSearchConsoleConfigurationCustomReportsArray[] | cdktf.IResolvable) {
    this._customReportsArray.internalValue = value;
  }
  public resetCustomReportsArray() {
    this._customReportsArray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReportsArrayInput() {
    return this._customReportsArray.internalValue;
  }

  // data_state - computed: true, optional: true, required: false
  private _dataState?: string; 
  public get dataState() {
    return this.getStringAttribute('data_state');
  }
  public set dataState(value: string) {
    this._dataState = value;
  }
  public resetDataState() {
    this._dataState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStateInput() {
    return this._dataState;
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

  // num_workers - computed: true, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // site_urls - computed: false, optional: false, required: true
  private _siteUrls?: string[]; 
  public get siteUrls() {
    return this.getListAttribute('site_urls');
  }
  public set siteUrls(value: string[]) {
    this._siteUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUrlsInput() {
    return this._siteUrls;
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
export interface SourceGoogleSearchConsoleResourceAllocationDefault {
}

export function sourceGoogleSearchConsoleResourceAllocationDefaultToTerraform(struct?: SourceGoogleSearchConsoleResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleSearchConsoleResourceAllocationDefaultToHclTerraform(struct?: SourceGoogleSearchConsoleResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleSearchConsoleResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSearchConsoleResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSearchConsoleResourceAllocationDefault | undefined) {
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
export interface SourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirements {
}

export function sourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceGoogleSearchConsoleResourceAllocationJobSpecific {
}

export function sourceGoogleSearchConsoleResourceAllocationJobSpecificToTerraform(struct?: SourceGoogleSearchConsoleResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleSearchConsoleResourceAllocationJobSpecificToHclTerraform(struct?: SourceGoogleSearchConsoleResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleSearchConsoleResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleSearchConsoleResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSearchConsoleResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceGoogleSearchConsoleResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceGoogleSearchConsoleResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceGoogleSearchConsoleResourceAllocationJobSpecificOutputReference {
    return new SourceGoogleSearchConsoleResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleSearchConsoleResourceAllocation {
}

export function sourceGoogleSearchConsoleResourceAllocationToTerraform(struct?: SourceGoogleSearchConsoleResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleSearchConsoleResourceAllocationToHclTerraform(struct?: SourceGoogleSearchConsoleResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleSearchConsoleResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleSearchConsoleResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleSearchConsoleResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceGoogleSearchConsoleResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceGoogleSearchConsoleResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console airbyte_source_google_search_console}
*/
export class SourceGoogleSearchConsole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_google_search_console";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceGoogleSearchConsole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceGoogleSearchConsole to import
  * @param importFromId The id of the existing SourceGoogleSearchConsole that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceGoogleSearchConsole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_google_search_console", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_search_console airbyte_source_google_search_console} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceGoogleSearchConsoleConfig
  */
  public constructor(scope: Construct, id: string, config: SourceGoogleSearchConsoleConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_google_search_console',
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
  private _configuration = new SourceGoogleSearchConsoleConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceGoogleSearchConsoleConfiguration) {
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
  private _resourceAllocation = new SourceGoogleSearchConsoleResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceGoogleSearchConsoleConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceGoogleSearchConsoleConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceGoogleSearchConsoleConfiguration",
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
