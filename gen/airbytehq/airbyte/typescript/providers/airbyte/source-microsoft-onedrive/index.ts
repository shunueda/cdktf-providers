// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceMicrosoftOnedriveConfig extends cdktf.TerraformMetaArguments {
  /**
  * SourceMicrosoftOneDriveSpec class for Microsoft OneDrive Source Specification.
  * This class combines the authentication details with additional configuration for the OneDrive API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#configuration SourceMicrosoftOnedrive#configuration}
  */
  readonly configuration: SourceMicrosoftOnedriveConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#definition_id SourceMicrosoftOnedrive#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#name SourceMicrosoftOnedrive#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#secret_id SourceMicrosoftOnedrive#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#workspace_id SourceMicrosoftOnedrive#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth {
  /**
  * Client ID of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#client_id SourceMicrosoftOnedrive#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#client_secret SourceMicrosoftOnedrive#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Refresh Token of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#refresh_token SourceMicrosoftOnedrive#refresh_token}
  */
  readonly refreshToken: string;
  /**
  * Tenant ID of the Microsoft OneDrive user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#tenant_id SourceMicrosoftOnedrive#tenant_id}
  */
  readonly tenantId: string;
}

export function sourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuthToTerraform(struct?: SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function sourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuthToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth | cdktf.IResolvable): any {
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

export class SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth | cdktf.IResolvable | undefined {
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
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._tenantId = undefined;
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
      this._tenantId = value.tenantId;
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication {
  /**
  * Client ID of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#client_id SourceMicrosoftOnedrive#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#client_secret SourceMicrosoftOnedrive#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Tenant ID of the Microsoft OneDrive user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#tenant_id SourceMicrosoftOnedrive#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Special characters such as a period, comma, space, and the at sign (@) are converted to underscores (_). More details: https://learn.microsoft.com/en-us/sharepoint/list-onedrive-urls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#user_principal_name SourceMicrosoftOnedrive#user_principal_name}
  */
  readonly userPrincipalName: string;
}

export function sourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthenticationToTerraform(struct?: SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    user_principal_name: cdktf.stringToTerraform(struct!.userPrincipalName),
  }
}


export function sourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthenticationToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication | cdktf.IResolvable): any {
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_principal_name: {
      value: cdktf.stringToHclTerraform(struct!.userPrincipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication | cdktf.IResolvable | undefined {
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
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._userPrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPrincipalName = this._userPrincipalName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
      this._userPrincipalName = undefined;
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
      this._tenantId = value.tenantId;
      this._userPrincipalName = value.userPrincipalName;
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // user_principal_name - computed: false, optional: false, required: true
  private _userPrincipalName?: string; 
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
  public set userPrincipalName(value: string) {
    this._userPrincipalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrincipalNameInput() {
    return this._userPrincipalName;
  }
}
export interface SourceMicrosoftOnedriveConfigurationCredentials {
  /**
  * OAuthCredentials class to hold authentication details for Microsoft OAuth authentication.
  * This class uses pydantic for data validation and settings management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#authenticate_via_microsoft_o_auth SourceMicrosoftOnedrive#authenticate_via_microsoft_o_auth}
  */
  readonly authenticateViaMicrosoftOAuth?: SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth;
  /**
  * ServiceCredentials class for service key authentication.
  * This class is structured similarly to OAuthCredentials but for a different authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#service_key_authentication SourceMicrosoftOnedrive#service_key_authentication}
  */
  readonly serviceKeyAuthentication?: SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication;
}

export function sourceMicrosoftOnedriveConfigurationCredentialsToTerraform(struct?: SourceMicrosoftOnedriveConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_via_microsoft_o_auth: sourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuthToTerraform(struct!.authenticateViaMicrosoftOAuth),
    service_key_authentication: sourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthenticationToTerraform(struct!.serviceKeyAuthentication),
  }
}


export function sourceMicrosoftOnedriveConfigurationCredentialsToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_via_microsoft_o_auth: {
      value: sourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuthToHclTerraform(struct!.authenticateViaMicrosoftOAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth",
    },
    service_key_authentication: {
      value: sourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthenticationToHclTerraform(struct!.serviceKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftOnedriveConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateViaMicrosoftOAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateViaMicrosoftOAuth = this._authenticateViaMicrosoftOAuth?.internalValue;
    }
    if (this._serviceKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKeyAuthentication = this._serviceKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateViaMicrosoftOAuth.internalValue = undefined;
      this._serviceKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateViaMicrosoftOAuth.internalValue = value.authenticateViaMicrosoftOAuth;
      this._serviceKeyAuthentication.internalValue = value.serviceKeyAuthentication;
    }
  }

  // authenticate_via_microsoft_o_auth - computed: false, optional: true, required: false
  private _authenticateViaMicrosoftOAuth = new SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuthOutputReference(this, "authenticate_via_microsoft_o_auth");
  public get authenticateViaMicrosoftOAuth() {
    return this._authenticateViaMicrosoftOAuth;
  }
  public putAuthenticateViaMicrosoftOAuth(value: SourceMicrosoftOnedriveConfigurationCredentialsAuthenticateViaMicrosoftOAuth) {
    this._authenticateViaMicrosoftOAuth.internalValue = value;
  }
  public resetAuthenticateViaMicrosoftOAuth() {
    this._authenticateViaMicrosoftOAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateViaMicrosoftOAuthInput() {
    return this._authenticateViaMicrosoftOAuth.internalValue;
  }

  // service_key_authentication - computed: false, optional: true, required: false
  private _serviceKeyAuthentication = new SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthenticationOutputReference(this, "service_key_authentication");
  public get serviceKeyAuthentication() {
    return this._serviceKeyAuthentication;
  }
  public putServiceKeyAuthentication(value: SourceMicrosoftOnedriveConfigurationCredentialsServiceKeyAuthentication) {
    this._serviceKeyAuthentication.internalValue = value;
  }
  public resetServiceKeyAuthentication() {
    this._serviceKeyAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyAuthenticationInput() {
    return this._serviceKeyAuthentication.internalValue;
  }
}
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormat {
  /**
  * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#double_as_string SourceMicrosoftOnedrive#double_as_string}
  */
  readonly doubleAsString?: boolean | cdktf.IResolvable;
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormatToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_as_string: cdktf.booleanToTerraform(struct!.doubleAsString),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormatToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
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

export class SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated {
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv {
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided {
  /**
  * The column names that will be used while emitting the CSV records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#column_names SourceMicrosoftOnedrive#column_names}
  */
  readonly columnNames: string[];
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
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

export class SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#autogenerated SourceMicrosoftOnedrive#autogenerated}
  */
  readonly autogenerated?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#from_csv SourceMicrosoftOnedrive#from_csv}
  */
  readonly fromCsv?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#user_provided SourceMicrosoftOnedrive#user_provided}
  */
  readonly userProvided?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided;
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerated: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct!.autogenerated),
    from_csv: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct!.fromCsv),
    user_provided: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct!.userProvided),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autogenerated: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct!.autogenerated),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated",
    },
    from_csv: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct!.fromCsv),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv",
    },
    user_provided: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct!.userProvided),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined) {
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
  private _autogenerated = new SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference(this, "autogenerated");
  public get autogenerated() {
    return this._autogenerated;
  }
  public putAutogenerated(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated) {
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
  private _fromCsv = new SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference(this, "from_csv");
  public get fromCsv() {
    return this._fromCsv;
  }
  public putFromCsv(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv) {
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
  private _userProvided = new SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference(this, "user_provided");
  public get userProvided() {
    return this._userProvided;
  }
  public putUserProvided(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormat {
  /**
  * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#delimiter SourceMicrosoftOnedrive#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#double_quote SourceMicrosoftOnedrive#double_quote}
  */
  readonly doubleQuote?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#encoding SourceMicrosoftOnedrive#encoding}
  */
  readonly encoding?: string;
  /**
  * The character used for escaping special characters. To disallow escaping, leave this field blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#escape_char SourceMicrosoftOnedrive#escape_char}
  */
  readonly escapeChar?: string;
  /**
  * A set of case-sensitive strings that should be interpreted as false values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#false_values SourceMicrosoftOnedrive#false_values}
  */
  readonly falseValues?: string[];
  /**
  * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#header_definition SourceMicrosoftOnedrive#header_definition}
  */
  readonly headerDefinition?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinition;
  /**
  * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#ignore_errors_on_fields_mismatch SourceMicrosoftOnedrive#ignore_errors_on_fields_mismatch}
  */
  readonly ignoreErrorsOnFieldsMismatch?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#null_values SourceMicrosoftOnedrive#null_values}
  */
  readonly nullValues?: string[];
  /**
  * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#quote_char SourceMicrosoftOnedrive#quote_char}
  */
  readonly quoteChar?: string;
  /**
  * The number of rows to skip after the header row. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#skip_rows_after_header SourceMicrosoftOnedrive#skip_rows_after_header}
  */
  readonly skipRowsAfterHeader?: number;
  /**
  * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#skip_rows_before_header SourceMicrosoftOnedrive#skip_rows_before_header}
  */
  readonly skipRowsBeforeHeader?: number;
  /**
  * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#strings_can_be_null SourceMicrosoftOnedrive#strings_can_be_null}
  */
  readonly stringsCanBeNull?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as true values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#true_values SourceMicrosoftOnedrive#true_values}
  */
  readonly trueValues?: string[];
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
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
    header_definition: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct!.headerDefinition),
    ignore_errors_on_fields_mismatch: cdktf.booleanToTerraform(struct!.ignoreErrorsOnFieldsMismatch),
    null_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nullValues),
    quote_char: cdktf.stringToTerraform(struct!.quoteChar),
    skip_rows_after_header: cdktf.numberToTerraform(struct!.skipRowsAfterHeader),
    skip_rows_before_header: cdktf.numberToTerraform(struct!.skipRowsBeforeHeader),
    strings_can_be_null: cdktf.booleanToTerraform(struct!.stringsCanBeNull),
    true_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trueValues),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
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
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct!.headerDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinition",
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

export class SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined) {
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
  private _headerDefinition = new SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference(this, "header_definition");
  public get headerDefinition() {
    return this._headerDefinition;
  }
  public putHeaderDefinition(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatHeaderDefinition) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormat {
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormatToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormatToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormat {
  /**
  * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#decimal_as_float SourceMicrosoftOnedrive#decimal_as_float}
  */
  readonly decimalAsFloat?: boolean | cdktf.IResolvable;
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormatToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_as_float: cdktf.booleanToTerraform(struct!.decimalAsFloat),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormatToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
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

export class SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal {
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing {
  /**
  * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#local SourceMicrosoftOnedrive#local}
  */
  readonly local?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal;
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct!.local),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local.internalValue = value.local;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local = new SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }
}
export interface SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormat {
  /**
  * Processing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#processing SourceMicrosoftOnedrive#processing}
  */
  readonly processing?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing;
  /**
  * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#skip_unprocessable_files SourceMicrosoftOnedrive#skip_unprocessable_files}
  */
  readonly skipUnprocessableFiles?: boolean | cdktf.IResolvable;
  /**
  * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. Default: "auto"; must be one of ["auto", "fast", "ocr_only", "hi_res"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#strategy SourceMicrosoftOnedrive#strategy}
  */
  readonly strategy?: string;
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processing: sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct!.processing),
    skip_unprocessable_files: cdktf.booleanToTerraform(struct!.skipUnprocessableFiles),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processing: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing",
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

export class SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined) {
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
  private _processing = new SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing) {
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
export interface SourceMicrosoftOnedriveConfigurationStreamsFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#avro_format SourceMicrosoftOnedrive#avro_format}
  */
  readonly avroFormat?: SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#csv_format SourceMicrosoftOnedrive#csv_format}
  */
  readonly csvFormat?: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#jsonl_format SourceMicrosoftOnedrive#jsonl_format}
  */
  readonly jsonlFormat?: SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#parquet_format SourceMicrosoftOnedrive#parquet_format}
  */
  readonly parquetFormat?: SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormat;
  /**
  * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#unstructured_document_format SourceMicrosoftOnedrive#unstructured_document_format}
  */
  readonly unstructuredDocumentFormat?: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormat;
}

export function sourceMicrosoftOnedriveConfigurationStreamsFormatToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro_format: sourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormatToTerraform(struct!.avroFormat),
    csv_format: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatToTerraform(struct!.csvFormat),
    jsonl_format: sourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormatToTerraform(struct!.jsonlFormat),
    parquet_format: sourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormatToTerraform(struct!.parquetFormat),
    unstructured_document_format: sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct!.unstructuredDocumentFormat),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsFormatToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro_format: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormatToHclTerraform(struct!.avroFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormat",
    },
    csv_format: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatToHclTerraform(struct!.csvFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormat",
    },
    jsonl_format: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormatToHclTerraform(struct!.jsonlFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormat",
    },
    parquet_format: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormatToHclTerraform(struct!.parquetFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormat",
    },
    unstructured_document_format: {
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct!.unstructuredDocumentFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftOnedriveConfigurationStreamsFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreamsFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreamsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avroFormat.internalValue = undefined;
      this._csvFormat.internalValue = undefined;
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
      this._jsonlFormat.internalValue = value.jsonlFormat;
      this._parquetFormat.internalValue = value.parquetFormat;
      this._unstructuredDocumentFormat.internalValue = value.unstructuredDocumentFormat;
    }
  }

  // avro_format - computed: false, optional: true, required: false
  private _avroFormat = new SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormatOutputReference(this, "avro_format");
  public get avroFormat() {
    return this._avroFormat;
  }
  public putAvroFormat(value: SourceMicrosoftOnedriveConfigurationStreamsFormatAvroFormat) {
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
  private _csvFormat = new SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormatOutputReference(this, "csv_format");
  public get csvFormat() {
    return this._csvFormat;
  }
  public putCsvFormat(value: SourceMicrosoftOnedriveConfigurationStreamsFormatCsvFormat) {
    this._csvFormat.internalValue = value;
  }
  public resetCsvFormat() {
    this._csvFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvFormatInput() {
    return this._csvFormat.internalValue;
  }

  // jsonl_format - computed: false, optional: true, required: false
  private _jsonlFormat = new SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormatOutputReference(this, "jsonl_format");
  public get jsonlFormat() {
    return this._jsonlFormat;
  }
  public putJsonlFormat(value: SourceMicrosoftOnedriveConfigurationStreamsFormatJsonlFormat) {
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
  private _parquetFormat = new SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormatOutputReference(this, "parquet_format");
  public get parquetFormat() {
    return this._parquetFormat;
  }
  public putParquetFormat(value: SourceMicrosoftOnedriveConfigurationStreamsFormatParquetFormat) {
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
  private _unstructuredDocumentFormat = new SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference(this, "unstructured_document_format");
  public get unstructuredDocumentFormat() {
    return this._unstructuredDocumentFormat;
  }
  public putUnstructuredDocumentFormat(value: SourceMicrosoftOnedriveConfigurationStreamsFormatUnstructuredDocumentFormat) {
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
export interface SourceMicrosoftOnedriveConfigurationStreams {
  /**
  * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#days_to_sync_if_history_is_full SourceMicrosoftOnedrive#days_to_sync_if_history_is_full}
  */
  readonly daysToSyncIfHistoryIsFull?: number;
  /**
  * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#format SourceMicrosoftOnedrive#format}
  */
  readonly format: SourceMicrosoftOnedriveConfigurationStreamsFormat;
  /**
  * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#globs SourceMicrosoftOnedrive#globs}
  */
  readonly globs?: string[];
  /**
  * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#input_schema SourceMicrosoftOnedrive#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * The name of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#name SourceMicrosoftOnedrive#name}
  */
  readonly name: string;
  /**
  * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#schemaless SourceMicrosoftOnedrive#schemaless}
  */
  readonly schemaless?: boolean | cdktf.IResolvable;
  /**
  * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. Default: "Emit Record"; must be one of ["Emit Record", "Skip Record", "Wait for Discover"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#validation_policy SourceMicrosoftOnedrive#validation_policy}
  */
  readonly validationPolicy?: string;
}

export function sourceMicrosoftOnedriveConfigurationStreamsToTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_to_sync_if_history_is_full: cdktf.numberToTerraform(struct!.daysToSyncIfHistoryIsFull),
    format: sourceMicrosoftOnedriveConfigurationStreamsFormatToTerraform(struct!.format),
    globs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globs),
    input_schema: cdktf.stringToTerraform(struct!.inputSchema),
    name: cdktf.stringToTerraform(struct!.name),
    schemaless: cdktf.booleanToTerraform(struct!.schemaless),
    validation_policy: cdktf.stringToTerraform(struct!.validationPolicy),
  }
}


export function sourceMicrosoftOnedriveConfigurationStreamsToHclTerraform(struct?: SourceMicrosoftOnedriveConfigurationStreams | cdktf.IResolvable): any {
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
      value: sourceMicrosoftOnedriveConfigurationStreamsFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsFormat",
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

export class SourceMicrosoftOnedriveConfigurationStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceMicrosoftOnedriveConfigurationStreams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftOnedriveConfigurationStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysToSyncIfHistoryIsFull = undefined;
      this._format.internalValue = undefined;
      this._globs = undefined;
      this._inputSchema = undefined;
      this._name = undefined;
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
  private _format = new SourceMicrosoftOnedriveConfigurationStreamsFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: SourceMicrosoftOnedriveConfigurationStreamsFormat) {
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

export class SourceMicrosoftOnedriveConfigurationStreamsList extends cdktf.ComplexList {
  public internalValue? : SourceMicrosoftOnedriveConfigurationStreams[] | cdktf.IResolvable

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
  public get(index: number): SourceMicrosoftOnedriveConfigurationStreamsOutputReference {
    return new SourceMicrosoftOnedriveConfigurationStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceMicrosoftOnedriveConfiguration {
  /**
  * Credentials for connecting to the One Drive API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#credentials SourceMicrosoftOnedrive#credentials}
  */
  readonly credentials: SourceMicrosoftOnedriveConfigurationCredentials;
  /**
  * Name of the Microsoft OneDrive drive where the file(s) exist. Default: "OneDrive"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#drive_name SourceMicrosoftOnedrive#drive_name}
  */
  readonly driveName?: string;
  /**
  * Path to a specific folder within the drives to search for files. Leave empty to search all folders of the drives. This does not apply to shared items. Default: "."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#folder_path SourceMicrosoftOnedrive#folder_path}
  */
  readonly folderPath?: string;
  /**
  * Specifies the location(s) to search for files. Valid options are 'ACCESSIBLE_DRIVES' to search in the selected OneDrive drive, 'SHARED_ITEMS' for shared items the user has access to, and 'ALL' to search both. Default: "ALL"; must be one of ["ACCESSIBLE_DRIVES", "SHARED_ITEMS", "ALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#search_scope SourceMicrosoftOnedrive#search_scope}
  */
  readonly searchScope?: string;
  /**
  * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#start_date SourceMicrosoftOnedrive#start_date}
  */
  readonly startDate?: string;
  /**
  * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#streams SourceMicrosoftOnedrive#streams}
  */
  readonly streams: SourceMicrosoftOnedriveConfigurationStreams[] | cdktf.IResolvable;
}

export function sourceMicrosoftOnedriveConfigurationToTerraform(struct?: SourceMicrosoftOnedriveConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: sourceMicrosoftOnedriveConfigurationCredentialsToTerraform(struct!.credentials),
    drive_name: cdktf.stringToTerraform(struct!.driveName),
    folder_path: cdktf.stringToTerraform(struct!.folderPath),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    streams: cdktf.listMapper(sourceMicrosoftOnedriveConfigurationStreamsToTerraform, false)(struct!.streams),
  }
}


export function sourceMicrosoftOnedriveConfigurationToHclTerraform(struct?: SourceMicrosoftOnedriveConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: sourceMicrosoftOnedriveConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftOnedriveConfigurationCredentials",
    },
    drive_name: {
      value: cdktf.stringToHclTerraform(struct!.driveName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder_path: {
      value: cdktf.stringToHclTerraform(struct!.folderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_scope: {
      value: cdktf.stringToHclTerraform(struct!.searchScope),
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
    streams: {
      value: cdktf.listMapperHcl(sourceMicrosoftOnedriveConfigurationStreamsToHclTerraform, false)(struct!.streams),
      isBlock: true,
      type: "list",
      storageClassType: "SourceMicrosoftOnedriveConfigurationStreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftOnedriveConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._driveName !== undefined) {
      hasAnyValues = true;
      internalValueResult.driveName = this._driveName;
    }
    if (this._folderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderPath = this._folderPath;
    }
    if (this._searchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchScope = this._searchScope;
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

  public set internalValue(value: SourceMicrosoftOnedriveConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._driveName = undefined;
      this._folderPath = undefined;
      this._searchScope = undefined;
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
      this._credentials.internalValue = value.credentials;
      this._driveName = value.driveName;
      this._folderPath = value.folderPath;
      this._searchScope = value.searchScope;
      this._startDate = value.startDate;
      this._streams.internalValue = value.streams;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new SourceMicrosoftOnedriveConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceMicrosoftOnedriveConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // drive_name - computed: true, optional: true, required: false
  private _driveName?: string; 
  public get driveName() {
    return this.getStringAttribute('drive_name');
  }
  public set driveName(value: string) {
    this._driveName = value;
  }
  public resetDriveName() {
    this._driveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveNameInput() {
    return this._driveName;
  }

  // folder_path - computed: true, optional: true, required: false
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  public resetFolderPath() {
    this._folderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
  }

  // search_scope - computed: true, optional: true, required: false
  private _searchScope?: string; 
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }
  public set searchScope(value: string) {
    this._searchScope = value;
  }
  public resetSearchScope() {
    this._searchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchScopeInput() {
    return this._searchScope;
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
  private _streams = new SourceMicrosoftOnedriveConfigurationStreamsList(this, "streams", false);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: SourceMicrosoftOnedriveConfigurationStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }
}
export interface SourceMicrosoftOnedriveResourceAllocationDefault {
}

export function sourceMicrosoftOnedriveResourceAllocationDefaultToTerraform(struct?: SourceMicrosoftOnedriveResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftOnedriveResourceAllocationDefaultToHclTerraform(struct?: SourceMicrosoftOnedriveResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftOnedriveResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveResourceAllocationDefault | undefined) {
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
export interface SourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirements {
}

export function sourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceMicrosoftOnedriveResourceAllocationJobSpecific {
}

export function sourceMicrosoftOnedriveResourceAllocationJobSpecificToTerraform(struct?: SourceMicrosoftOnedriveResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftOnedriveResourceAllocationJobSpecificToHclTerraform(struct?: SourceMicrosoftOnedriveResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftOnedriveResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceMicrosoftOnedriveResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceMicrosoftOnedriveResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceMicrosoftOnedriveResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceMicrosoftOnedriveResourceAllocationJobSpecificOutputReference {
    return new SourceMicrosoftOnedriveResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceMicrosoftOnedriveResourceAllocation {
}

export function sourceMicrosoftOnedriveResourceAllocationToTerraform(struct?: SourceMicrosoftOnedriveResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftOnedriveResourceAllocationToHclTerraform(struct?: SourceMicrosoftOnedriveResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftOnedriveResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftOnedriveResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftOnedriveResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceMicrosoftOnedriveResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceMicrosoftOnedriveResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive airbyte_source_microsoft_onedrive}
*/
export class SourceMicrosoftOnedrive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_microsoft_onedrive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceMicrosoftOnedrive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceMicrosoftOnedrive to import
  * @param importFromId The id of the existing SourceMicrosoftOnedrive that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceMicrosoftOnedrive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_microsoft_onedrive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_onedrive airbyte_source_microsoft_onedrive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceMicrosoftOnedriveConfig
  */
  public constructor(scope: Construct, id: string, config: SourceMicrosoftOnedriveConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_microsoft_onedrive',
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
  private _configuration = new SourceMicrosoftOnedriveConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceMicrosoftOnedriveConfiguration) {
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
  private _resourceAllocation = new SourceMicrosoftOnedriveResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceMicrosoftOnedriveConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceMicrosoftOnedriveConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceMicrosoftOnedriveConfiguration",
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
