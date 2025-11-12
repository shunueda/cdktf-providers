// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceGoogleDriveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Used during spec; allows the developer to configure the cloud provider specific options
  * that are needed when users configure a file-based source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#configuration SourceGoogleDrive#configuration}
  */
  readonly configuration: SourceGoogleDriveConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#definition_id SourceGoogleDrive#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#name SourceGoogleDrive#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#secret_id SourceGoogleDrive#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#workspace_id SourceGoogleDrive#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth {
  /**
  * Client ID for the Google Drive API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#client_id SourceGoogleDrive#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret for the Google Drive API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#client_secret SourceGoogleDrive#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Refresh Token for the Google Drive API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#refresh_token SourceGoogleDrive#refresh_token}
  */
  readonly refreshToken: string;
}

export function sourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuthToTerraform(struct?: SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable): any {
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


export function sourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuthToHclTerraform(struct?: SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable): any {
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

export class SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication {
  /**
  * The JSON key of the service account to use for authorization. Read more <a href="https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#service_account_info SourceGoogleDrive#service_account_info}
  */
  readonly serviceAccountInfo: string;
}

export function sourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthenticationToTerraform(struct?: SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_info: cdktf.stringToTerraform(struct!.serviceAccountInfo),
  }
}


export function sourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthenticationToHclTerraform(struct?: SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable): any {
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

export class SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#authenticate_via_google_o_auth SourceGoogleDrive#authenticate_via_google_o_auth}
  */
  readonly authenticateViaGoogleOAuth?: SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#service_account_key_authentication SourceGoogleDrive#service_account_key_authentication}
  */
  readonly serviceAccountKeyAuthentication?: SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication;
}

export function sourceGoogleDriveConfigurationCredentialsToTerraform(struct?: SourceGoogleDriveConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_via_google_o_auth: sourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuthToTerraform(struct!.authenticateViaGoogleOAuth),
    service_account_key_authentication: sourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthenticationToTerraform(struct!.serviceAccountKeyAuthentication),
  }
}


export function sourceGoogleDriveConfigurationCredentialsToHclTerraform(struct?: SourceGoogleDriveConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_via_google_o_auth: {
      value: sourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuthToHclTerraform(struct!.authenticateViaGoogleOAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth",
    },
    service_account_key_authentication: {
      value: sourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthenticationToHclTerraform(struct!.serviceAccountKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleDriveConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationCredentials | cdktf.IResolvable | undefined) {
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
  private _authenticateViaGoogleOAuth = new SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuthOutputReference(this, "authenticate_via_google_o_auth");
  public get authenticateViaGoogleOAuth() {
    return this._authenticateViaGoogleOAuth;
  }
  public putAuthenticateViaGoogleOAuth(value: SourceGoogleDriveConfigurationCredentialsAuthenticateViaGoogleOAuth) {
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
  private _serviceAccountKeyAuthentication = new SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthenticationOutputReference(this, "service_account_key_authentication");
  public get serviceAccountKeyAuthentication() {
    return this._serviceAccountKeyAuthentication;
  }
  public putServiceAccountKeyAuthentication(value: SourceGoogleDriveConfigurationCredentialsServiceAccountKeyAuthentication) {
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
export interface SourceGoogleDriveConfigurationDeliveryMethodCopyRawFiles {
  /**
  * If enabled, sends subdirectory folder structure along with source file names to the destination. Otherwise, files will be synced by their names only. This option is ignored when file-based replication is not enabled. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#preserve_directory_structure SourceGoogleDrive#preserve_directory_structure}
  */
  readonly preserveDirectoryStructure?: boolean | cdktf.IResolvable;
}

export function sourceGoogleDriveConfigurationDeliveryMethodCopyRawFilesToTerraform(struct?: SourceGoogleDriveConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_directory_structure: cdktf.booleanToTerraform(struct!.preserveDirectoryStructure),
  }
}


export function sourceGoogleDriveConfigurationDeliveryMethodCopyRawFilesToHclTerraform(struct?: SourceGoogleDriveConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable): any {
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

export class SourceGoogleDriveConfigurationDeliveryMethodCopyRawFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAcl {
  /**
  * The Google domain of the identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#domain SourceGoogleDrive#domain}
  */
  readonly domain?: string;
  /**
  * This data can be used in downstream systems to recreate permission restrictions mirroring the original source. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#include_identities_stream SourceGoogleDrive#include_identities_stream}
  */
  readonly includeIdentitiesStream?: boolean | cdktf.IResolvable;
}

export function sourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAclToTerraform(struct?: SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    include_identities_stream: cdktf.booleanToTerraform(struct!.includeIdentitiesStream),
  }
}


export function sourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAclToHclTerraform(struct?: SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_identities_stream: {
      value: cdktf.booleanToHclTerraform(struct!.includeIdentitiesStream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._includeIdentitiesStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIdentitiesStream = this._includeIdentitiesStream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._includeIdentitiesStream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._includeIdentitiesStream = value.includeIdentitiesStream;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // include_identities_stream - computed: true, optional: true, required: false
  private _includeIdentitiesStream?: boolean | cdktf.IResolvable; 
  public get includeIdentitiesStream() {
    return this.getBooleanAttribute('include_identities_stream');
  }
  public set includeIdentitiesStream(value: boolean | cdktf.IResolvable) {
    this._includeIdentitiesStream = value;
  }
  public resetIncludeIdentitiesStream() {
    this._includeIdentitiesStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIdentitiesStreamInput() {
    return this._includeIdentitiesStream;
  }
}
export interface SourceGoogleDriveConfigurationDeliveryMethodReplicateRecords {
}

export function sourceGoogleDriveConfigurationDeliveryMethodReplicateRecordsToTerraform(struct?: SourceGoogleDriveConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveConfigurationDeliveryMethodReplicateRecordsToHclTerraform(struct?: SourceGoogleDriveConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveConfigurationDeliveryMethodReplicateRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationDeliveryMethod {
  /**
  * Copy raw files without parsing their contents. Bits are copied into the destination exactly as they appeared in the source. Recommended for use with unstructured text data, non-text and compressed files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#copy_raw_files SourceGoogleDrive#copy_raw_files}
  */
  readonly copyRawFiles?: SourceGoogleDriveConfigurationDeliveryMethodCopyRawFiles;
  /**
  * Sends one identity stream and one for more permissions (ACL) streams to the destination. This data can be used in downstream systems to recreate permission restrictions mirroring the original source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#replicate_permissions_acl SourceGoogleDrive#replicate_permissions_acl}
  */
  readonly replicatePermissionsAcl?: SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAcl;
  /**
  * Recommended - Extract and load structured records into your destination of choice. This is the classic method of moving data in Airbyte. It allows for blocking and hashing individual fields or files from a structured schema. Data can be flattened, typed and deduped depending on the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#replicate_records SourceGoogleDrive#replicate_records}
  */
  readonly replicateRecords?: SourceGoogleDriveConfigurationDeliveryMethodReplicateRecords;
}

export function sourceGoogleDriveConfigurationDeliveryMethodToTerraform(struct?: SourceGoogleDriveConfigurationDeliveryMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_raw_files: sourceGoogleDriveConfigurationDeliveryMethodCopyRawFilesToTerraform(struct!.copyRawFiles),
    replicate_permissions_acl: sourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAclToTerraform(struct!.replicatePermissionsAcl),
    replicate_records: sourceGoogleDriveConfigurationDeliveryMethodReplicateRecordsToTerraform(struct!.replicateRecords),
  }
}


export function sourceGoogleDriveConfigurationDeliveryMethodToHclTerraform(struct?: SourceGoogleDriveConfigurationDeliveryMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_raw_files: {
      value: sourceGoogleDriveConfigurationDeliveryMethodCopyRawFilesToHclTerraform(struct!.copyRawFiles),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationDeliveryMethodCopyRawFiles",
    },
    replicate_permissions_acl: {
      value: sourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAclToHclTerraform(struct!.replicatePermissionsAcl),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAcl",
    },
    replicate_records: {
      value: sourceGoogleDriveConfigurationDeliveryMethodReplicateRecordsToHclTerraform(struct!.replicateRecords),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationDeliveryMethodReplicateRecords",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleDriveConfigurationDeliveryMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationDeliveryMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyRawFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyRawFiles = this._copyRawFiles?.internalValue;
    }
    if (this._replicatePermissionsAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicatePermissionsAcl = this._replicatePermissionsAcl?.internalValue;
    }
    if (this._replicateRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicateRecords = this._replicateRecords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveConfigurationDeliveryMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyRawFiles.internalValue = undefined;
      this._replicatePermissionsAcl.internalValue = undefined;
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
      this._replicatePermissionsAcl.internalValue = value.replicatePermissionsAcl;
      this._replicateRecords.internalValue = value.replicateRecords;
    }
  }

  // copy_raw_files - computed: false, optional: true, required: false
  private _copyRawFiles = new SourceGoogleDriveConfigurationDeliveryMethodCopyRawFilesOutputReference(this, "copy_raw_files");
  public get copyRawFiles() {
    return this._copyRawFiles;
  }
  public putCopyRawFiles(value: SourceGoogleDriveConfigurationDeliveryMethodCopyRawFiles) {
    this._copyRawFiles.internalValue = value;
  }
  public resetCopyRawFiles() {
    this._copyRawFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyRawFilesInput() {
    return this._copyRawFiles.internalValue;
  }

  // replicate_permissions_acl - computed: false, optional: true, required: false
  private _replicatePermissionsAcl = new SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAclOutputReference(this, "replicate_permissions_acl");
  public get replicatePermissionsAcl() {
    return this._replicatePermissionsAcl;
  }
  public putReplicatePermissionsAcl(value: SourceGoogleDriveConfigurationDeliveryMethodReplicatePermissionsAcl) {
    this._replicatePermissionsAcl.internalValue = value;
  }
  public resetReplicatePermissionsAcl() {
    this._replicatePermissionsAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatePermissionsAclInput() {
    return this._replicatePermissionsAcl.internalValue;
  }

  // replicate_records - computed: false, optional: true, required: false
  private _replicateRecords = new SourceGoogleDriveConfigurationDeliveryMethodReplicateRecordsOutputReference(this, "replicate_records");
  public get replicateRecords() {
    return this._replicateRecords;
  }
  public putReplicateRecords(value: SourceGoogleDriveConfigurationDeliveryMethodReplicateRecords) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatAvroFormat {
  /**
  * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#double_as_string SourceGoogleDrive#double_as_string}
  */
  readonly doubleAsString?: boolean | cdktf.IResolvable;
}

export function sourceGoogleDriveConfigurationStreamsFormatAvroFormatToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_as_string: cdktf.booleanToTerraform(struct!.doubleAsString),
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatAvroFormatToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
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

export class SourceGoogleDriveConfigurationStreamsFormatAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated {
}

export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv {
}

export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided {
  /**
  * The column names that will be used while emitting the CSV records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#column_names SourceGoogleDrive#column_names}
  */
  readonly columnNames: string[];
}

export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
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

export class SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#autogenerated SourceGoogleDrive#autogenerated}
  */
  readonly autogenerated?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#from_csv SourceGoogleDrive#from_csv}
  */
  readonly fromCsv?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#user_provided SourceGoogleDrive#user_provided}
  */
  readonly userProvided?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided;
}

export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerated: sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct!.autogenerated),
    from_csv: sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct!.fromCsv),
    user_provided: sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct!.userProvided),
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autogenerated: {
      value: sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct!.autogenerated),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated",
    },
    from_csv: {
      value: sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct!.fromCsv),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv",
    },
    user_provided: {
      value: sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct!.userProvided),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined) {
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
  private _autogenerated = new SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference(this, "autogenerated");
  public get autogenerated() {
    return this._autogenerated;
  }
  public putAutogenerated(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated) {
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
  private _fromCsv = new SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference(this, "from_csv");
  public get fromCsv() {
    return this._fromCsv;
  }
  public putFromCsv(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv) {
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
  private _userProvided = new SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference(this, "user_provided");
  public get userProvided() {
    return this._userProvided;
  }
  public putUserProvided(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatCsvFormat {
  /**
  * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#delimiter SourceGoogleDrive#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#double_quote SourceGoogleDrive#double_quote}
  */
  readonly doubleQuote?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#encoding SourceGoogleDrive#encoding}
  */
  readonly encoding?: string;
  /**
  * The character used for escaping special characters. To disallow escaping, leave this field blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#escape_char SourceGoogleDrive#escape_char}
  */
  readonly escapeChar?: string;
  /**
  * A set of case-sensitive strings that should be interpreted as false values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#false_values SourceGoogleDrive#false_values}
  */
  readonly falseValues?: string[];
  /**
  * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#header_definition SourceGoogleDrive#header_definition}
  */
  readonly headerDefinition?: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinition;
  /**
  * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#ignore_errors_on_fields_mismatch SourceGoogleDrive#ignore_errors_on_fields_mismatch}
  */
  readonly ignoreErrorsOnFieldsMismatch?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#null_values SourceGoogleDrive#null_values}
  */
  readonly nullValues?: string[];
  /**
  * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#quote_char SourceGoogleDrive#quote_char}
  */
  readonly quoteChar?: string;
  /**
  * The number of rows to skip after the header row. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#skip_rows_after_header SourceGoogleDrive#skip_rows_after_header}
  */
  readonly skipRowsAfterHeader?: number;
  /**
  * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#skip_rows_before_header SourceGoogleDrive#skip_rows_before_header}
  */
  readonly skipRowsBeforeHeader?: number;
  /**
  * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#strings_can_be_null SourceGoogleDrive#strings_can_be_null}
  */
  readonly stringsCanBeNull?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as true values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#true_values SourceGoogleDrive#true_values}
  */
  readonly trueValues?: string[];
}

export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
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
    header_definition: sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct!.headerDefinition),
    ignore_errors_on_fields_mismatch: cdktf.booleanToTerraform(struct!.ignoreErrorsOnFieldsMismatch),
    null_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nullValues),
    quote_char: cdktf.stringToTerraform(struct!.quoteChar),
    skip_rows_after_header: cdktf.numberToTerraform(struct!.skipRowsAfterHeader),
    skip_rows_before_header: cdktf.numberToTerraform(struct!.skipRowsBeforeHeader),
    strings_can_be_null: cdktf.booleanToTerraform(struct!.stringsCanBeNull),
    true_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trueValues),
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatCsvFormatToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
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
      value: sourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct!.headerDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinition",
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

export class SourceGoogleDriveConfigurationStreamsFormatCsvFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined) {
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
  private _headerDefinition = new SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference(this, "header_definition");
  public get headerDefinition() {
    return this._headerDefinition;
  }
  public putHeaderDefinition(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormatHeaderDefinition) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatExcelFormat {
}

export function sourceGoogleDriveConfigurationStreamsFormatExcelFormatToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatExcelFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatExcelFormatToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatExcelFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveConfigurationStreamsFormatExcelFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatExcelFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatExcelFormat | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatJsonlFormat {
}

export function sourceGoogleDriveConfigurationStreamsFormatJsonlFormatToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatJsonlFormatToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveConfigurationStreamsFormatJsonlFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatParquetFormat {
  /**
  * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#decimal_as_float SourceGoogleDrive#decimal_as_float}
  */
  readonly decimalAsFloat?: boolean | cdktf.IResolvable;
}

export function sourceGoogleDriveConfigurationStreamsFormatParquetFormatToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_as_float: cdktf.booleanToTerraform(struct!.decimalAsFloat),
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatParquetFormatToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
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

export class SourceGoogleDriveConfigurationStreamsFormatParquetFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal {
}

export function sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing {
  /**
  * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#local SourceGoogleDrive#local}
  */
  readonly local?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal;
}

export function sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct!.local),
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined) {
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
  private _local = new SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal) {
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
export interface SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormat {
  /**
  * Processing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#processing SourceGoogleDrive#processing}
  */
  readonly processing?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing;
  /**
  * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#skip_unprocessable_files SourceGoogleDrive#skip_unprocessable_files}
  */
  readonly skipUnprocessableFiles?: boolean | cdktf.IResolvable;
  /**
  * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. Default: "auto"; must be one of ["auto", "fast", "ocr_only", "hi_res"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#strategy SourceGoogleDrive#strategy}
  */
  readonly strategy?: string;
}

export function sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processing: sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct!.processing),
    skip_unprocessable_files: cdktf.booleanToTerraform(struct!.skipUnprocessableFiles),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processing: {
      value: sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing",
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

export class SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined) {
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
  private _processing = new SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatProcessing) {
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
export interface SourceGoogleDriveConfigurationStreamsFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#avro_format SourceGoogleDrive#avro_format}
  */
  readonly avroFormat?: SourceGoogleDriveConfigurationStreamsFormatAvroFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#csv_format SourceGoogleDrive#csv_format}
  */
  readonly csvFormat?: SourceGoogleDriveConfigurationStreamsFormatCsvFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#excel_format SourceGoogleDrive#excel_format}
  */
  readonly excelFormat?: SourceGoogleDriveConfigurationStreamsFormatExcelFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#jsonl_format SourceGoogleDrive#jsonl_format}
  */
  readonly jsonlFormat?: SourceGoogleDriveConfigurationStreamsFormatJsonlFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#parquet_format SourceGoogleDrive#parquet_format}
  */
  readonly parquetFormat?: SourceGoogleDriveConfigurationStreamsFormatParquetFormat;
  /**
  * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#unstructured_document_format SourceGoogleDrive#unstructured_document_format}
  */
  readonly unstructuredDocumentFormat?: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormat;
}

export function sourceGoogleDriveConfigurationStreamsFormatToTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro_format: sourceGoogleDriveConfigurationStreamsFormatAvroFormatToTerraform(struct!.avroFormat),
    csv_format: sourceGoogleDriveConfigurationStreamsFormatCsvFormatToTerraform(struct!.csvFormat),
    excel_format: sourceGoogleDriveConfigurationStreamsFormatExcelFormatToTerraform(struct!.excelFormat),
    jsonl_format: sourceGoogleDriveConfigurationStreamsFormatJsonlFormatToTerraform(struct!.jsonlFormat),
    parquet_format: sourceGoogleDriveConfigurationStreamsFormatParquetFormatToTerraform(struct!.parquetFormat),
    unstructured_document_format: sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct!.unstructuredDocumentFormat),
  }
}


export function sourceGoogleDriveConfigurationStreamsFormatToHclTerraform(struct?: SourceGoogleDriveConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro_format: {
      value: sourceGoogleDriveConfigurationStreamsFormatAvroFormatToHclTerraform(struct!.avroFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatAvroFormat",
    },
    csv_format: {
      value: sourceGoogleDriveConfigurationStreamsFormatCsvFormatToHclTerraform(struct!.csvFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatCsvFormat",
    },
    excel_format: {
      value: sourceGoogleDriveConfigurationStreamsFormatExcelFormatToHclTerraform(struct!.excelFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatExcelFormat",
    },
    jsonl_format: {
      value: sourceGoogleDriveConfigurationStreamsFormatJsonlFormatToHclTerraform(struct!.jsonlFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatJsonlFormat",
    },
    parquet_format: {
      value: sourceGoogleDriveConfigurationStreamsFormatParquetFormatToHclTerraform(struct!.parquetFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatParquetFormat",
    },
    unstructured_document_format: {
      value: sourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct!.unstructuredDocumentFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleDriveConfigurationStreamsFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfigurationStreamsFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreamsFormat | cdktf.IResolvable | undefined) {
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
  private _avroFormat = new SourceGoogleDriveConfigurationStreamsFormatAvroFormatOutputReference(this, "avro_format");
  public get avroFormat() {
    return this._avroFormat;
  }
  public putAvroFormat(value: SourceGoogleDriveConfigurationStreamsFormatAvroFormat) {
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
  private _csvFormat = new SourceGoogleDriveConfigurationStreamsFormatCsvFormatOutputReference(this, "csv_format");
  public get csvFormat() {
    return this._csvFormat;
  }
  public putCsvFormat(value: SourceGoogleDriveConfigurationStreamsFormatCsvFormat) {
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
  private _excelFormat = new SourceGoogleDriveConfigurationStreamsFormatExcelFormatOutputReference(this, "excel_format");
  public get excelFormat() {
    return this._excelFormat;
  }
  public putExcelFormat(value: SourceGoogleDriveConfigurationStreamsFormatExcelFormat) {
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
  private _jsonlFormat = new SourceGoogleDriveConfigurationStreamsFormatJsonlFormatOutputReference(this, "jsonl_format");
  public get jsonlFormat() {
    return this._jsonlFormat;
  }
  public putJsonlFormat(value: SourceGoogleDriveConfigurationStreamsFormatJsonlFormat) {
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
  private _parquetFormat = new SourceGoogleDriveConfigurationStreamsFormatParquetFormatOutputReference(this, "parquet_format");
  public get parquetFormat() {
    return this._parquetFormat;
  }
  public putParquetFormat(value: SourceGoogleDriveConfigurationStreamsFormatParquetFormat) {
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
  private _unstructuredDocumentFormat = new SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference(this, "unstructured_document_format");
  public get unstructuredDocumentFormat() {
    return this._unstructuredDocumentFormat;
  }
  public putUnstructuredDocumentFormat(value: SourceGoogleDriveConfigurationStreamsFormatUnstructuredDocumentFormat) {
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
export interface SourceGoogleDriveConfigurationStreams {
  /**
  * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#days_to_sync_if_history_is_full SourceGoogleDrive#days_to_sync_if_history_is_full}
  */
  readonly daysToSyncIfHistoryIsFull?: number;
  /**
  * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#format SourceGoogleDrive#format}
  */
  readonly format: SourceGoogleDriveConfigurationStreamsFormat;
  /**
  * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#globs SourceGoogleDrive#globs}
  */
  readonly globs?: string[];
  /**
  * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#input_schema SourceGoogleDrive#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * The name of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#name SourceGoogleDrive#name}
  */
  readonly name: string;
  /**
  * The number of resent files which will be used to discover the schema for this stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#recent_n_files_to_read_for_schema_discovery SourceGoogleDrive#recent_n_files_to_read_for_schema_discovery}
  */
  readonly recentNFilesToReadForSchemaDiscovery?: number;
  /**
  * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#schemaless SourceGoogleDrive#schemaless}
  */
  readonly schemaless?: boolean | cdktf.IResolvable;
  /**
  * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. Default: "Emit Record"; must be one of ["Emit Record", "Skip Record", "Wait for Discover"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#validation_policy SourceGoogleDrive#validation_policy}
  */
  readonly validationPolicy?: string;
}

export function sourceGoogleDriveConfigurationStreamsToTerraform(struct?: SourceGoogleDriveConfigurationStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_to_sync_if_history_is_full: cdktf.numberToTerraform(struct!.daysToSyncIfHistoryIsFull),
    format: sourceGoogleDriveConfigurationStreamsFormatToTerraform(struct!.format),
    globs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globs),
    input_schema: cdktf.stringToTerraform(struct!.inputSchema),
    name: cdktf.stringToTerraform(struct!.name),
    recent_n_files_to_read_for_schema_discovery: cdktf.numberToTerraform(struct!.recentNFilesToReadForSchemaDiscovery),
    schemaless: cdktf.booleanToTerraform(struct!.schemaless),
    validation_policy: cdktf.stringToTerraform(struct!.validationPolicy),
  }
}


export function sourceGoogleDriveConfigurationStreamsToHclTerraform(struct?: SourceGoogleDriveConfigurationStreams | cdktf.IResolvable): any {
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
      value: sourceGoogleDriveConfigurationStreamsFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationStreamsFormat",
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

export class SourceGoogleDriveConfigurationStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleDriveConfigurationStreams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceGoogleDriveConfigurationStreams | cdktf.IResolvable | undefined) {
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
  private _format = new SourceGoogleDriveConfigurationStreamsFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: SourceGoogleDriveConfigurationStreamsFormat) {
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

export class SourceGoogleDriveConfigurationStreamsList extends cdktf.ComplexList {
  public internalValue? : SourceGoogleDriveConfigurationStreams[] | cdktf.IResolvable

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
  public get(index: number): SourceGoogleDriveConfigurationStreamsOutputReference {
    return new SourceGoogleDriveConfigurationStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleDriveConfiguration {
  /**
  * Credentials for connecting to the Google Drive API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#credentials SourceGoogleDrive#credentials}
  */
  readonly credentials: SourceGoogleDriveConfigurationCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#delivery_method SourceGoogleDrive#delivery_method}
  */
  readonly deliveryMethod?: SourceGoogleDriveConfigurationDeliveryMethod;
  /**
  * URL for the folder you want to sync. Using individual streams and glob patterns, it's possible to only sync a subset of all files located in the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#folder_url SourceGoogleDrive#folder_url}
  */
  readonly folderUrl: string;
  /**
  * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#start_date SourceGoogleDrive#start_date}
  */
  readonly startDate?: string;
  /**
  * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#streams SourceGoogleDrive#streams}
  */
  readonly streams: SourceGoogleDriveConfigurationStreams[] | cdktf.IResolvable;
}

export function sourceGoogleDriveConfigurationToTerraform(struct?: SourceGoogleDriveConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: sourceGoogleDriveConfigurationCredentialsToTerraform(struct!.credentials),
    delivery_method: sourceGoogleDriveConfigurationDeliveryMethodToTerraform(struct!.deliveryMethod),
    folder_url: cdktf.stringToTerraform(struct!.folderUrl),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    streams: cdktf.listMapper(sourceGoogleDriveConfigurationStreamsToTerraform, false)(struct!.streams),
  }
}


export function sourceGoogleDriveConfigurationToHclTerraform(struct?: SourceGoogleDriveConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: sourceGoogleDriveConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationCredentials",
    },
    delivery_method: {
      value: sourceGoogleDriveConfigurationDeliveryMethodToHclTerraform(struct!.deliveryMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceGoogleDriveConfigurationDeliveryMethod",
    },
    folder_url: {
      value: cdktf.stringToHclTerraform(struct!.folderUrl),
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
      value: cdktf.listMapperHcl(sourceGoogleDriveConfigurationStreamsToHclTerraform, false)(struct!.streams),
      isBlock: true,
      type: "list",
      storageClassType: "SourceGoogleDriveConfigurationStreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceGoogleDriveConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveConfiguration | cdktf.IResolvable | undefined {
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
    if (this._folderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderUrl = this._folderUrl;
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

  public set internalValue(value: SourceGoogleDriveConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._deliveryMethod.internalValue = undefined;
      this._folderUrl = undefined;
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
      this._folderUrl = value.folderUrl;
      this._startDate = value.startDate;
      this._streams.internalValue = value.streams;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new SourceGoogleDriveConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceGoogleDriveConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // delivery_method - computed: false, optional: true, required: false
  private _deliveryMethod = new SourceGoogleDriveConfigurationDeliveryMethodOutputReference(this, "delivery_method");
  public get deliveryMethod() {
    return this._deliveryMethod;
  }
  public putDeliveryMethod(value: SourceGoogleDriveConfigurationDeliveryMethod) {
    this._deliveryMethod.internalValue = value;
  }
  public resetDeliveryMethod() {
    this._deliveryMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodInput() {
    return this._deliveryMethod.internalValue;
  }

  // folder_url - computed: false, optional: false, required: true
  private _folderUrl?: string; 
  public get folderUrl() {
    return this.getStringAttribute('folder_url');
  }
  public set folderUrl(value: string) {
    this._folderUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUrlInput() {
    return this._folderUrl;
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
  private _streams = new SourceGoogleDriveConfigurationStreamsList(this, "streams", false);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: SourceGoogleDriveConfigurationStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }
}
export interface SourceGoogleDriveResourceAllocationDefault {
}

export function sourceGoogleDriveResourceAllocationDefaultToTerraform(struct?: SourceGoogleDriveResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveResourceAllocationDefaultToHclTerraform(struct?: SourceGoogleDriveResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveResourceAllocationDefault | undefined) {
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
export interface SourceGoogleDriveResourceAllocationJobSpecificResourceRequirements {
}

export function sourceGoogleDriveResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceGoogleDriveResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceGoogleDriveResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceGoogleDriveResourceAllocationJobSpecific {
}

export function sourceGoogleDriveResourceAllocationJobSpecificToTerraform(struct?: SourceGoogleDriveResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveResourceAllocationJobSpecificToHclTerraform(struct?: SourceGoogleDriveResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceGoogleDriveResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceGoogleDriveResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceGoogleDriveResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceGoogleDriveResourceAllocationJobSpecificOutputReference {
    return new SourceGoogleDriveResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceGoogleDriveResourceAllocation {
}

export function sourceGoogleDriveResourceAllocationToTerraform(struct?: SourceGoogleDriveResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceGoogleDriveResourceAllocationToHclTerraform(struct?: SourceGoogleDriveResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceGoogleDriveResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceGoogleDriveResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceGoogleDriveResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceGoogleDriveResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceGoogleDriveResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive airbyte_source_google_drive}
*/
export class SourceGoogleDrive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_google_drive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceGoogleDrive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceGoogleDrive to import
  * @param importFromId The id of the existing SourceGoogleDrive that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceGoogleDrive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_google_drive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_google_drive airbyte_source_google_drive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceGoogleDriveConfig
  */
  public constructor(scope: Construct, id: string, config: SourceGoogleDriveConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_google_drive',
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
  private _configuration = new SourceGoogleDriveConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceGoogleDriveConfiguration) {
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
  private _resourceAllocation = new SourceGoogleDriveResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceGoogleDriveConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceGoogleDriveConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceGoogleDriveConfiguration",
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
