// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceMicrosoftSharepointConfig extends cdktf.TerraformMetaArguments {
  /**
  * SourceMicrosoftSharePointSpec class for Microsoft SharePoint Source Specification.
  * This class combines the authentication details with additional configuration for the SharePoint API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#configuration SourceMicrosoftSharepoint#configuration}
  */
  readonly configuration: SourceMicrosoftSharepointConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#definition_id SourceMicrosoftSharepoint#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#name SourceMicrosoftSharepoint#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#secret_id SourceMicrosoftSharepoint#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#workspace_id SourceMicrosoftSharepoint#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth {
  /**
  * Client ID of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#client_id SourceMicrosoftSharepoint#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#client_secret SourceMicrosoftSharepoint#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Refresh Token of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#refresh_token SourceMicrosoftSharepoint#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Tenant ID of the Microsoft SharePoint user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#tenant_id SourceMicrosoftSharepoint#tenant_id}
  */
  readonly tenantId: string;
}

export function sourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuthToTerraform(struct?: SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth | cdktf.IResolvable): any {
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


export function sourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuthToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth | cdktf.IResolvable): any {
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

export class SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth | cdktf.IResolvable | undefined) {
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

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
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
export interface SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication {
  /**
  * Client ID of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#client_id SourceMicrosoftSharepoint#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret of your Microsoft developer application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#client_secret SourceMicrosoftSharepoint#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Tenant ID of the Microsoft SharePoint user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#tenant_id SourceMicrosoftSharepoint#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Special characters such as a period, comma, space, and the at sign (@) are converted to underscores (_). More details: https://learn.microsoft.com/en-us/sharepoint/list-onedrive-urls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#user_principal_name SourceMicrosoftSharepoint#user_principal_name}
  */
  readonly userPrincipalName: string;
}

export function sourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthenticationToTerraform(struct?: SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication | cdktf.IResolvable): any {
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


export function sourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthenticationToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication | cdktf.IResolvable): any {
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

export class SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationCredentials {
  /**
  * OAuthCredentials class to hold authentication details for Microsoft OAuth authentication.
  * This class uses pydantic for data validation and settings management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#authenticate_via_microsoft_o_auth SourceMicrosoftSharepoint#authenticate_via_microsoft_o_auth}
  */
  readonly authenticateViaMicrosoftOAuth?: SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth;
  /**
  * ServiceCredentials class for service key authentication.
  * This class is structured similarly to OAuthCredentials but for a different authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#service_key_authentication SourceMicrosoftSharepoint#service_key_authentication}
  */
  readonly serviceKeyAuthentication?: SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication;
}

export function sourceMicrosoftSharepointConfigurationCredentialsToTerraform(struct?: SourceMicrosoftSharepointConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_via_microsoft_o_auth: sourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuthToTerraform(struct!.authenticateViaMicrosoftOAuth),
    service_key_authentication: sourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthenticationToTerraform(struct!.serviceKeyAuthentication),
  }
}


export function sourceMicrosoftSharepointConfigurationCredentialsToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_via_microsoft_o_auth: {
      value: sourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuthToHclTerraform(struct!.authenticateViaMicrosoftOAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth",
    },
    service_key_authentication: {
      value: sourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthenticationToHclTerraform(struct!.serviceKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftSharepointConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationCredentials | cdktf.IResolvable | undefined) {
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
  private _authenticateViaMicrosoftOAuth = new SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuthOutputReference(this, "authenticate_via_microsoft_o_auth");
  public get authenticateViaMicrosoftOAuth() {
    return this._authenticateViaMicrosoftOAuth;
  }
  public putAuthenticateViaMicrosoftOAuth(value: SourceMicrosoftSharepointConfigurationCredentialsAuthenticateViaMicrosoftOAuth) {
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
  private _serviceKeyAuthentication = new SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthenticationOutputReference(this, "service_key_authentication");
  public get serviceKeyAuthentication() {
    return this._serviceKeyAuthentication;
  }
  public putServiceKeyAuthentication(value: SourceMicrosoftSharepointConfigurationCredentialsServiceKeyAuthentication) {
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
export interface SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFiles {
  /**
  * If enabled, sends subdirectory folder structure along with source file names to the destination. Otherwise, files will be synced by their names only. This option is ignored when file-based replication is not enabled. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#preserve_directory_structure SourceMicrosoftSharepoint#preserve_directory_structure}
  */
  readonly preserveDirectoryStructure?: boolean | cdktf.IResolvable;
}

export function sourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFilesToTerraform(struct?: SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_directory_structure: cdktf.booleanToTerraform(struct!.preserveDirectoryStructure),
  }
}


export function sourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFilesToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_directory_structure: {
      value: cdktf.booleanToHclTerraform(struct!.preserveDirectoryStructure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveDirectoryStructure !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveDirectoryStructure = this._preserveDirectoryStructure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preserveDirectoryStructure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preserveDirectoryStructure = value.preserveDirectoryStructure;
    }
  }

  // preserve_directory_structure - computed: true, optional: true, required: false
  private _preserveDirectoryStructure?: boolean | cdktf.IResolvable; 
  public get preserveDirectoryStructure() {
    return this.getBooleanAttribute('preserve_directory_structure');
  }
  public set preserveDirectoryStructure(value: boolean | cdktf.IResolvable) {
    this._preserveDirectoryStructure = value;
  }
  public resetPreserveDirectoryStructure() {
    this._preserveDirectoryStructure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDirectoryStructureInput() {
    return this._preserveDirectoryStructure;
  }
}
export interface SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecords {
}

export function sourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecordsToTerraform(struct?: SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecordsToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationDeliveryMethod {
  /**
  * Copy raw files without parsing their contents. Bits are copied into the destination exactly as they appeared in the source. Recommended for use with unstructured text data, non-text and compressed files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#copy_raw_files SourceMicrosoftSharepoint#copy_raw_files}
  */
  readonly copyRawFiles?: SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFiles;
  /**
  * Recommended - Extract and load structured records into your destination of choice. This is the classic method of moving data in Airbyte. It allows for blocking and hashing individual fields or files from a structured schema. Data can be flattened, typed and deduped depending on the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#replicate_records SourceMicrosoftSharepoint#replicate_records}
  */
  readonly replicateRecords?: SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecords;
}

export function sourceMicrosoftSharepointConfigurationDeliveryMethodToTerraform(struct?: SourceMicrosoftSharepointConfigurationDeliveryMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_raw_files: sourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFilesToTerraform(struct!.copyRawFiles),
    replicate_records: sourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecordsToTerraform(struct!.replicateRecords),
  }
}


export function sourceMicrosoftSharepointConfigurationDeliveryMethodToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationDeliveryMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_raw_files: {
      value: sourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFilesToHclTerraform(struct!.copyRawFiles),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFiles",
    },
    replicate_records: {
      value: sourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecordsToHclTerraform(struct!.replicateRecords),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecords",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftSharepointConfigurationDeliveryMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationDeliveryMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyRawFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyRawFiles = this._copyRawFiles?.internalValue;
    }
    if (this._replicateRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicateRecords = this._replicateRecords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointConfigurationDeliveryMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyRawFiles.internalValue = undefined;
      this._replicateRecords.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyRawFiles.internalValue = value.copyRawFiles;
      this._replicateRecords.internalValue = value.replicateRecords;
    }
  }

  // copy_raw_files - computed: false, optional: true, required: false
  private _copyRawFiles = new SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFilesOutputReference(this, "copy_raw_files");
  public get copyRawFiles() {
    return this._copyRawFiles;
  }
  public putCopyRawFiles(value: SourceMicrosoftSharepointConfigurationDeliveryMethodCopyRawFiles) {
    this._copyRawFiles.internalValue = value;
  }
  public resetCopyRawFiles() {
    this._copyRawFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyRawFilesInput() {
    return this._copyRawFiles.internalValue;
  }

  // replicate_records - computed: false, optional: true, required: false
  private _replicateRecords = new SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecordsOutputReference(this, "replicate_records");
  public get replicateRecords() {
    return this._replicateRecords;
  }
  public putReplicateRecords(value: SourceMicrosoftSharepointConfigurationDeliveryMethodReplicateRecords) {
    this._replicateRecords.internalValue = value;
  }
  public resetReplicateRecords() {
    this._replicateRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateRecordsInput() {
    return this._replicateRecords.internalValue;
  }
}
export interface SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormat {
  /**
  * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#double_as_string SourceMicrosoftSharepoint#double_as_string}
  */
  readonly doubleAsString?: boolean | cdktf.IResolvable;
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatAvroFormatToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_as_string: cdktf.booleanToTerraform(struct!.doubleAsString),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatAvroFormatToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
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

export class SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated {
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv {
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided {
  /**
  * The column names that will be used while emitting the CSV records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#column_names SourceMicrosoftSharepoint#column_names}
  */
  readonly columnNames: string[];
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
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

export class SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#autogenerated SourceMicrosoftSharepoint#autogenerated}
  */
  readonly autogenerated?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#from_csv SourceMicrosoftSharepoint#from_csv}
  */
  readonly fromCsv?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#user_provided SourceMicrosoftSharepoint#user_provided}
  */
  readonly userProvided?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided;
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerated: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct!.autogenerated),
    from_csv: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct!.fromCsv),
    user_provided: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct!.userProvided),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autogenerated: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct!.autogenerated),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated",
    },
    from_csv: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct!.fromCsv),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv",
    },
    user_provided: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct!.userProvided),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined) {
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
  private _autogenerated = new SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference(this, "autogenerated");
  public get autogenerated() {
    return this._autogenerated;
  }
  public putAutogenerated(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated) {
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
  private _fromCsv = new SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference(this, "from_csv");
  public get fromCsv() {
    return this._fromCsv;
  }
  public putFromCsv(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv) {
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
  private _userProvided = new SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference(this, "user_provided");
  public get userProvided() {
    return this._userProvided;
  }
  public putUserProvided(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormat {
  /**
  * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#delimiter SourceMicrosoftSharepoint#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#double_quote SourceMicrosoftSharepoint#double_quote}
  */
  readonly doubleQuote?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#encoding SourceMicrosoftSharepoint#encoding}
  */
  readonly encoding?: string;
  /**
  * The character used for escaping special characters. To disallow escaping, leave this field blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#escape_char SourceMicrosoftSharepoint#escape_char}
  */
  readonly escapeChar?: string;
  /**
  * A set of case-sensitive strings that should be interpreted as false values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#false_values SourceMicrosoftSharepoint#false_values}
  */
  readonly falseValues?: string[];
  /**
  * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#header_definition SourceMicrosoftSharepoint#header_definition}
  */
  readonly headerDefinition?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinition;
  /**
  * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#ignore_errors_on_fields_mismatch SourceMicrosoftSharepoint#ignore_errors_on_fields_mismatch}
  */
  readonly ignoreErrorsOnFieldsMismatch?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#null_values SourceMicrosoftSharepoint#null_values}
  */
  readonly nullValues?: string[];
  /**
  * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#quote_char SourceMicrosoftSharepoint#quote_char}
  */
  readonly quoteChar?: string;
  /**
  * The number of rows to skip after the header row. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#skip_rows_after_header SourceMicrosoftSharepoint#skip_rows_after_header}
  */
  readonly skipRowsAfterHeader?: number;
  /**
  * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#skip_rows_before_header SourceMicrosoftSharepoint#skip_rows_before_header}
  */
  readonly skipRowsBeforeHeader?: number;
  /**
  * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#strings_can_be_null SourceMicrosoftSharepoint#strings_can_be_null}
  */
  readonly stringsCanBeNull?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as true values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#true_values SourceMicrosoftSharepoint#true_values}
  */
  readonly trueValues?: string[];
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
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
    header_definition: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct!.headerDefinition),
    ignore_errors_on_fields_mismatch: cdktf.booleanToTerraform(struct!.ignoreErrorsOnFieldsMismatch),
    null_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nullValues),
    quote_char: cdktf.stringToTerraform(struct!.quoteChar),
    skip_rows_after_header: cdktf.numberToTerraform(struct!.skipRowsAfterHeader),
    skip_rows_before_header: cdktf.numberToTerraform(struct!.skipRowsBeforeHeader),
    strings_can_be_null: cdktf.booleanToTerraform(struct!.stringsCanBeNull),
    true_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trueValues),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
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
      value: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct!.headerDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinition",
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

export class SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined) {
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
  private _headerDefinition = new SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference(this, "header_definition");
  public get headerDefinition() {
    return this._headerDefinition;
  }
  public putHeaderDefinition(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatHeaderDefinition) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormat {
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatExcelFormatToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatExcelFormatToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormat | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormat {
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormatToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormatToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormat {
  /**
  * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#decimal_as_float SourceMicrosoftSharepoint#decimal_as_float}
  */
  readonly decimalAsFloat?: boolean | cdktf.IResolvable;
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatParquetFormatToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_as_float: cdktf.booleanToTerraform(struct!.decimalAsFloat),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatParquetFormatToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
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

export class SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal {
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessing {
  /**
  * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#local SourceMicrosoftSharepoint#local}
  */
  readonly local?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal;
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct!.local),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined) {
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
  private _local = new SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormat {
  /**
  * Processing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#processing SourceMicrosoftSharepoint#processing}
  */
  readonly processing?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessing;
  /**
  * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#skip_unprocessable_files SourceMicrosoftSharepoint#skip_unprocessable_files}
  */
  readonly skipUnprocessableFiles?: boolean | cdktf.IResolvable;
  /**
  * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. Default: "auto"; must be one of ["auto", "fast", "ocr_only", "hi_res"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#strategy SourceMicrosoftSharepoint#strategy}
  */
  readonly strategy?: string;
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processing: sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct!.processing),
    skip_unprocessable_files: cdktf.booleanToTerraform(struct!.skipUnprocessableFiles),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processing: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessing",
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

export class SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined) {
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
  private _processing = new SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatProcessing) {
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
export interface SourceMicrosoftSharepointConfigurationStreamsFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#avro_format SourceMicrosoftSharepoint#avro_format}
  */
  readonly avroFormat?: SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#csv_format SourceMicrosoftSharepoint#csv_format}
  */
  readonly csvFormat?: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#excel_format SourceMicrosoftSharepoint#excel_format}
  */
  readonly excelFormat?: SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#jsonl_format SourceMicrosoftSharepoint#jsonl_format}
  */
  readonly jsonlFormat?: SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#parquet_format SourceMicrosoftSharepoint#parquet_format}
  */
  readonly parquetFormat?: SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormat;
  /**
  * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#unstructured_document_format SourceMicrosoftSharepoint#unstructured_document_format}
  */
  readonly unstructuredDocumentFormat?: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormat;
}

export function sourceMicrosoftSharepointConfigurationStreamsFormatToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro_format: sourceMicrosoftSharepointConfigurationStreamsFormatAvroFormatToTerraform(struct!.avroFormat),
    csv_format: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatToTerraform(struct!.csvFormat),
    excel_format: sourceMicrosoftSharepointConfigurationStreamsFormatExcelFormatToTerraform(struct!.excelFormat),
    jsonl_format: sourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormatToTerraform(struct!.jsonlFormat),
    parquet_format: sourceMicrosoftSharepointConfigurationStreamsFormatParquetFormatToTerraform(struct!.parquetFormat),
    unstructured_document_format: sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct!.unstructuredDocumentFormat),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsFormatToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro_format: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatAvroFormatToHclTerraform(struct!.avroFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormat",
    },
    csv_format: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatToHclTerraform(struct!.csvFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormat",
    },
    excel_format: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatExcelFormatToHclTerraform(struct!.excelFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormat",
    },
    jsonl_format: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormatToHclTerraform(struct!.jsonlFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormat",
    },
    parquet_format: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatParquetFormatToHclTerraform(struct!.parquetFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormat",
    },
    unstructured_document_format: {
      value: sourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct!.unstructuredDocumentFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftSharepointConfigurationStreamsFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreamsFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreamsFormat | cdktf.IResolvable | undefined) {
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
  private _avroFormat = new SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormatOutputReference(this, "avro_format");
  public get avroFormat() {
    return this._avroFormat;
  }
  public putAvroFormat(value: SourceMicrosoftSharepointConfigurationStreamsFormatAvroFormat) {
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
  private _csvFormat = new SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormatOutputReference(this, "csv_format");
  public get csvFormat() {
    return this._csvFormat;
  }
  public putCsvFormat(value: SourceMicrosoftSharepointConfigurationStreamsFormatCsvFormat) {
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
  private _excelFormat = new SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormatOutputReference(this, "excel_format");
  public get excelFormat() {
    return this._excelFormat;
  }
  public putExcelFormat(value: SourceMicrosoftSharepointConfigurationStreamsFormatExcelFormat) {
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
  private _jsonlFormat = new SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormatOutputReference(this, "jsonl_format");
  public get jsonlFormat() {
    return this._jsonlFormat;
  }
  public putJsonlFormat(value: SourceMicrosoftSharepointConfigurationStreamsFormatJsonlFormat) {
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
  private _parquetFormat = new SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormatOutputReference(this, "parquet_format");
  public get parquetFormat() {
    return this._parquetFormat;
  }
  public putParquetFormat(value: SourceMicrosoftSharepointConfigurationStreamsFormatParquetFormat) {
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
  private _unstructuredDocumentFormat = new SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference(this, "unstructured_document_format");
  public get unstructuredDocumentFormat() {
    return this._unstructuredDocumentFormat;
  }
  public putUnstructuredDocumentFormat(value: SourceMicrosoftSharepointConfigurationStreamsFormatUnstructuredDocumentFormat) {
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
export interface SourceMicrosoftSharepointConfigurationStreams {
  /**
  * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#days_to_sync_if_history_is_full SourceMicrosoftSharepoint#days_to_sync_if_history_is_full}
  */
  readonly daysToSyncIfHistoryIsFull?: number;
  /**
  * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#format SourceMicrosoftSharepoint#format}
  */
  readonly format: SourceMicrosoftSharepointConfigurationStreamsFormat;
  /**
  * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#globs SourceMicrosoftSharepoint#globs}
  */
  readonly globs?: string[];
  /**
  * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#input_schema SourceMicrosoftSharepoint#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * The name of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#name SourceMicrosoftSharepoint#name}
  */
  readonly name: string;
  /**
  * The number of resent files which will be used to discover the schema for this stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#recent_n_files_to_read_for_schema_discovery SourceMicrosoftSharepoint#recent_n_files_to_read_for_schema_discovery}
  */
  readonly recentNFilesToReadForSchemaDiscovery?: number;
  /**
  * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#schemaless SourceMicrosoftSharepoint#schemaless}
  */
  readonly schemaless?: boolean | cdktf.IResolvable;
  /**
  * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. Default: "Emit Record"; must be one of ["Emit Record", "Skip Record", "Wait for Discover"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#validation_policy SourceMicrosoftSharepoint#validation_policy}
  */
  readonly validationPolicy?: string;
}

export function sourceMicrosoftSharepointConfigurationStreamsToTerraform(struct?: SourceMicrosoftSharepointConfigurationStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_to_sync_if_history_is_full: cdktf.numberToTerraform(struct!.daysToSyncIfHistoryIsFull),
    format: sourceMicrosoftSharepointConfigurationStreamsFormatToTerraform(struct!.format),
    globs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globs),
    input_schema: cdktf.stringToTerraform(struct!.inputSchema),
    name: cdktf.stringToTerraform(struct!.name),
    recent_n_files_to_read_for_schema_discovery: cdktf.numberToTerraform(struct!.recentNFilesToReadForSchemaDiscovery),
    schemaless: cdktf.booleanToTerraform(struct!.schemaless),
    validation_policy: cdktf.stringToTerraform(struct!.validationPolicy),
  }
}


export function sourceMicrosoftSharepointConfigurationStreamsToHclTerraform(struct?: SourceMicrosoftSharepointConfigurationStreams | cdktf.IResolvable): any {
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
      value: sourceMicrosoftSharepointConfigurationStreamsFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsFormat",
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

export class SourceMicrosoftSharepointConfigurationStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceMicrosoftSharepointConfigurationStreams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceMicrosoftSharepointConfigurationStreams | cdktf.IResolvable | undefined) {
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
  private _format = new SourceMicrosoftSharepointConfigurationStreamsFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: SourceMicrosoftSharepointConfigurationStreamsFormat) {
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

export class SourceMicrosoftSharepointConfigurationStreamsList extends cdktf.ComplexList {
  public internalValue? : SourceMicrosoftSharepointConfigurationStreams[] | cdktf.IResolvable

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
  public get(index: number): SourceMicrosoftSharepointConfigurationStreamsOutputReference {
    return new SourceMicrosoftSharepointConfigurationStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceMicrosoftSharepointConfiguration {
  /**
  * Credentials for connecting to the One Drive API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#credentials SourceMicrosoftSharepoint#credentials}
  */
  readonly credentials: SourceMicrosoftSharepointConfigurationCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#delivery_method SourceMicrosoftSharepoint#delivery_method}
  */
  readonly deliveryMethod?: SourceMicrosoftSharepointConfigurationDeliveryMethod;
  /**
  * Path to a specific folder within the drives to search for files. Leave empty to search all folders of the drives. This does not apply to shared items. Default: "."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#folder_path SourceMicrosoftSharepoint#folder_path}
  */
  readonly folderPath?: string;
  /**
  * Specifies the location(s) to search for files. Valid options are 'ACCESSIBLE_DRIVES' for all SharePoint drives the user can access, 'SHARED_ITEMS' for shared items the user has access to, and 'ALL' to search both. Default: "ALL"; must be one of ["ACCESSIBLE_DRIVES", "SHARED_ITEMS", "ALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#search_scope SourceMicrosoftSharepoint#search_scope}
  */
  readonly searchScope?: string;
  /**
  * Url of SharePoint site to search for files. Leave empty to search in the main site. Use 'https://<tenant_name>.sharepoint.com/sites/' to iterate over all sites. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#site_url SourceMicrosoftSharepoint#site_url}
  */
  readonly siteUrl?: string;
  /**
  * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#start_date SourceMicrosoftSharepoint#start_date}
  */
  readonly startDate?: string;
  /**
  * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#streams SourceMicrosoftSharepoint#streams}
  */
  readonly streams: SourceMicrosoftSharepointConfigurationStreams[] | cdktf.IResolvable;
}

export function sourceMicrosoftSharepointConfigurationToTerraform(struct?: SourceMicrosoftSharepointConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: sourceMicrosoftSharepointConfigurationCredentialsToTerraform(struct!.credentials),
    delivery_method: sourceMicrosoftSharepointConfigurationDeliveryMethodToTerraform(struct!.deliveryMethod),
    folder_path: cdktf.stringToTerraform(struct!.folderPath),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    site_url: cdktf.stringToTerraform(struct!.siteUrl),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    streams: cdktf.listMapper(sourceMicrosoftSharepointConfigurationStreamsToTerraform, false)(struct!.streams),
  }
}


export function sourceMicrosoftSharepointConfigurationToHclTerraform(struct?: SourceMicrosoftSharepointConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: sourceMicrosoftSharepointConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationCredentials",
    },
    delivery_method: {
      value: sourceMicrosoftSharepointConfigurationDeliveryMethodToHclTerraform(struct!.deliveryMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMicrosoftSharepointConfigurationDeliveryMethod",
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
    site_url: {
      value: cdktf.stringToHclTerraform(struct!.siteUrl),
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
      value: cdktf.listMapperHcl(sourceMicrosoftSharepointConfigurationStreamsToHclTerraform, false)(struct!.streams),
      isBlock: true,
      type: "list",
      storageClassType: "SourceMicrosoftSharepointConfigurationStreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMicrosoftSharepointConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._deliveryMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethod = this._deliveryMethod?.internalValue;
    }
    if (this._folderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderPath = this._folderPath;
    }
    if (this._searchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchScope = this._searchScope;
    }
    if (this._siteUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUrl = this._siteUrl;
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

  public set internalValue(value: SourceMicrosoftSharepointConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._deliveryMethod.internalValue = undefined;
      this._folderPath = undefined;
      this._searchScope = undefined;
      this._siteUrl = undefined;
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
      this._deliveryMethod.internalValue = value.deliveryMethod;
      this._folderPath = value.folderPath;
      this._searchScope = value.searchScope;
      this._siteUrl = value.siteUrl;
      this._startDate = value.startDate;
      this._streams.internalValue = value.streams;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new SourceMicrosoftSharepointConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceMicrosoftSharepointConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // delivery_method - computed: false, optional: true, required: false
  private _deliveryMethod = new SourceMicrosoftSharepointConfigurationDeliveryMethodOutputReference(this, "delivery_method");
  public get deliveryMethod() {
    return this._deliveryMethod;
  }
  public putDeliveryMethod(value: SourceMicrosoftSharepointConfigurationDeliveryMethod) {
    this._deliveryMethod.internalValue = value;
  }
  public resetDeliveryMethod() {
    this._deliveryMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodInput() {
    return this._deliveryMethod.internalValue;
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

  // site_url - computed: true, optional: true, required: false
  private _siteUrl?: string; 
  public get siteUrl() {
    return this.getStringAttribute('site_url');
  }
  public set siteUrl(value: string) {
    this._siteUrl = value;
  }
  public resetSiteUrl() {
    this._siteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUrlInput() {
    return this._siteUrl;
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
  private _streams = new SourceMicrosoftSharepointConfigurationStreamsList(this, "streams", false);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: SourceMicrosoftSharepointConfigurationStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }
}
export interface SourceMicrosoftSharepointResourceAllocationDefault {
}

export function sourceMicrosoftSharepointResourceAllocationDefaultToTerraform(struct?: SourceMicrosoftSharepointResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointResourceAllocationDefaultToHclTerraform(struct?: SourceMicrosoftSharepointResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointResourceAllocationDefault | undefined) {
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
export interface SourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirements {
}

export function sourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceMicrosoftSharepointResourceAllocationJobSpecific {
}

export function sourceMicrosoftSharepointResourceAllocationJobSpecificToTerraform(struct?: SourceMicrosoftSharepointResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointResourceAllocationJobSpecificToHclTerraform(struct?: SourceMicrosoftSharepointResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceMicrosoftSharepointResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceMicrosoftSharepointResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceMicrosoftSharepointResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceMicrosoftSharepointResourceAllocationJobSpecificOutputReference {
    return new SourceMicrosoftSharepointResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceMicrosoftSharepointResourceAllocation {
}

export function sourceMicrosoftSharepointResourceAllocationToTerraform(struct?: SourceMicrosoftSharepointResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMicrosoftSharepointResourceAllocationToHclTerraform(struct?: SourceMicrosoftSharepointResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMicrosoftSharepointResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMicrosoftSharepointResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMicrosoftSharepointResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceMicrosoftSharepointResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceMicrosoftSharepointResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint airbyte_source_microsoft_sharepoint}
*/
export class SourceMicrosoftSharepoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_microsoft_sharepoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceMicrosoftSharepoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceMicrosoftSharepoint to import
  * @param importFromId The id of the existing SourceMicrosoftSharepoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceMicrosoftSharepoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_microsoft_sharepoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_microsoft_sharepoint airbyte_source_microsoft_sharepoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceMicrosoftSharepointConfig
  */
  public constructor(scope: Construct, id: string, config: SourceMicrosoftSharepointConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_microsoft_sharepoint',
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
  private _configuration = new SourceMicrosoftSharepointConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceMicrosoftSharepointConfiguration) {
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
  private _resourceAllocation = new SourceMicrosoftSharepointResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceMicrosoftSharepointConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceMicrosoftSharepointConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceMicrosoftSharepointConfiguration",
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
