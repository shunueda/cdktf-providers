// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorServiceNowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#delegate_selectors PlatformConnectorServiceNow#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#description PlatformConnectorServiceNow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#id PlatformConnectorServiceNow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#identifier PlatformConnectorServiceNow#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#name PlatformConnectorServiceNow#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#org_id PlatformConnectorServiceNow#org_id}
  */
  readonly orgId?: string;
  /**
  * Reference to a secret containing the password to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#password_ref PlatformConnectorServiceNow#password_ref}
  */
  readonly passwordRef?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#project_id PlatformConnectorServiceNow#project_id}
  */
  readonly projectId?: string;
  /**
  * URL of service now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#service_now_url PlatformConnectorServiceNow#service_now_url}
  */
  readonly serviceNowUrl: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#tags PlatformConnectorServiceNow#tags}
  */
  readonly tags?: string[];
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#username PlatformConnectorServiceNow#username}
  */
  readonly username?: string;
  /**
  * Reference to a secret containing the username to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#username_ref PlatformConnectorServiceNow#username_ref}
  */
  readonly usernameRef?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#auth PlatformConnectorServiceNow#auth}
  */
  readonly auth: PlatformConnectorServiceNowAuth;
}
export interface PlatformConnectorServiceNowAuthAdfs {
  /**
  * asdf URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#adfs_url PlatformConnectorServiceNow#adfs_url}
  */
  readonly adfsUrl: string;
  /**
  * Reference to a secret containing the certificate to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#certificate_ref PlatformConnectorServiceNow#certificate_ref}
  */
  readonly certificateRef: string;
  /**
  * Reference to a secret containing the clientIdRef to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#client_id_ref PlatformConnectorServiceNow#client_id_ref}
  */
  readonly clientIdRef: string;
  /**
  * Reference to a secret containing the privateKeyRef to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#private_key_ref PlatformConnectorServiceNow#private_key_ref}
  */
  readonly privateKeyRef: string;
  /**
  * Reference to a secret containing the resourceIdRef to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#resource_id_ref PlatformConnectorServiceNow#resource_id_ref}
  */
  readonly resourceIdRef: string;
}

export function platformConnectorServiceNowAuthAdfsToTerraform(struct?: PlatformConnectorServiceNowAuthAdfsOutputReference | PlatformConnectorServiceNowAuthAdfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adfs_url: cdktf.stringToTerraform(struct!.adfsUrl),
    certificate_ref: cdktf.stringToTerraform(struct!.certificateRef),
    client_id_ref: cdktf.stringToTerraform(struct!.clientIdRef),
    private_key_ref: cdktf.stringToTerraform(struct!.privateKeyRef),
    resource_id_ref: cdktf.stringToTerraform(struct!.resourceIdRef),
  }
}


export function platformConnectorServiceNowAuthAdfsToHclTerraform(struct?: PlatformConnectorServiceNowAuthAdfsOutputReference | PlatformConnectorServiceNowAuthAdfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adfs_url: {
      value: cdktf.stringToHclTerraform(struct!.adfsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.certificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id_ref: {
      value: cdktf.stringToHclTerraform(struct!.clientIdRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id_ref: {
      value: cdktf.stringToHclTerraform(struct!.resourceIdRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorServiceNowAuthAdfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorServiceNowAuthAdfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adfsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.adfsUrl = this._adfsUrl;
    }
    if (this._certificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateRef = this._certificateRef;
    }
    if (this._clientIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdRef = this._clientIdRef;
    }
    if (this._privateKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyRef = this._privateKeyRef;
    }
    if (this._resourceIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIdRef = this._resourceIdRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorServiceNowAuthAdfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adfsUrl = undefined;
      this._certificateRef = undefined;
      this._clientIdRef = undefined;
      this._privateKeyRef = undefined;
      this._resourceIdRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adfsUrl = value.adfsUrl;
      this._certificateRef = value.certificateRef;
      this._clientIdRef = value.clientIdRef;
      this._privateKeyRef = value.privateKeyRef;
      this._resourceIdRef = value.resourceIdRef;
    }
  }

  // adfs_url - computed: false, optional: false, required: true
  private _adfsUrl?: string; 
  public get adfsUrl() {
    return this.getStringAttribute('adfs_url');
  }
  public set adfsUrl(value: string) {
    this._adfsUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsUrlInput() {
    return this._adfsUrl;
  }

  // certificate_ref - computed: false, optional: false, required: true
  private _certificateRef?: string; 
  public get certificateRef() {
    return this.getStringAttribute('certificate_ref');
  }
  public set certificateRef(value: string) {
    this._certificateRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRefInput() {
    return this._certificateRef;
  }

  // client_id_ref - computed: false, optional: false, required: true
  private _clientIdRef?: string; 
  public get clientIdRef() {
    return this.getStringAttribute('client_id_ref');
  }
  public set clientIdRef(value: string) {
    this._clientIdRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdRefInput() {
    return this._clientIdRef;
  }

  // private_key_ref - computed: false, optional: false, required: true
  private _privateKeyRef?: string; 
  public get privateKeyRef() {
    return this.getStringAttribute('private_key_ref');
  }
  public set privateKeyRef(value: string) {
    this._privateKeyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyRefInput() {
    return this._privateKeyRef;
  }

  // resource_id_ref - computed: false, optional: false, required: true
  private _resourceIdRef?: string; 
  public get resourceIdRef() {
    return this.getStringAttribute('resource_id_ref');
  }
  public set resourceIdRef(value: string) {
    this._resourceIdRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdRefInput() {
    return this._resourceIdRef;
  }
}
export interface PlatformConnectorServiceNowAuthRefreshToken {
  /**
  * Reference to a secret containing the client id to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#client_id_ref PlatformConnectorServiceNow#client_id_ref}
  */
  readonly clientIdRef: string;
  /**
  * Reference to a secret containing the client secret to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#client_secret_ref PlatformConnectorServiceNow#client_secret_ref}
  */
  readonly clientSecretRef?: string;
  /**
  * Reference to a secret containing the refresh token to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#refresh_token_ref PlatformConnectorServiceNow#refresh_token_ref}
  */
  readonly refreshTokenRef: string;
  /**
  * Scope string to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#scope PlatformConnectorServiceNow#scope}
  */
  readonly scope?: string;
  /**
  * Token url to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#token_url PlatformConnectorServiceNow#token_url}
  */
  readonly tokenUrl: string;
}

export function platformConnectorServiceNowAuthRefreshTokenToTerraform(struct?: PlatformConnectorServiceNowAuthRefreshTokenOutputReference | PlatformConnectorServiceNowAuthRefreshToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_ref: cdktf.stringToTerraform(struct!.clientIdRef),
    client_secret_ref: cdktf.stringToTerraform(struct!.clientSecretRef),
    refresh_token_ref: cdktf.stringToTerraform(struct!.refreshTokenRef),
    scope: cdktf.stringToTerraform(struct!.scope),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function platformConnectorServiceNowAuthRefreshTokenToHclTerraform(struct?: PlatformConnectorServiceNowAuthRefreshTokenOutputReference | PlatformConnectorServiceNowAuthRefreshToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_ref: {
      value: cdktf.stringToHclTerraform(struct!.clientIdRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_ref: {
      value: cdktf.stringToHclTerraform(struct!.refreshTokenRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorServiceNowAuthRefreshTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorServiceNowAuthRefreshToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdRef = this._clientIdRef;
    }
    if (this._clientSecretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRef = this._clientSecretRef;
    }
    if (this._refreshTokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRef = this._refreshTokenRef;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorServiceNowAuthRefreshToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientIdRef = undefined;
      this._clientSecretRef = undefined;
      this._refreshTokenRef = undefined;
      this._scope = undefined;
      this._tokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientIdRef = value.clientIdRef;
      this._clientSecretRef = value.clientSecretRef;
      this._refreshTokenRef = value.refreshTokenRef;
      this._scope = value.scope;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // client_id_ref - computed: false, optional: false, required: true
  private _clientIdRef?: string; 
  public get clientIdRef() {
    return this.getStringAttribute('client_id_ref');
  }
  public set clientIdRef(value: string) {
    this._clientIdRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdRefInput() {
    return this._clientIdRef;
  }

  // client_secret_ref - computed: false, optional: true, required: false
  private _clientSecretRef?: string; 
  public get clientSecretRef() {
    return this.getStringAttribute('client_secret_ref');
  }
  public set clientSecretRef(value: string) {
    this._clientSecretRef = value;
  }
  public resetClientSecretRef() {
    this._clientSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRefInput() {
    return this._clientSecretRef;
  }

  // refresh_token_ref - computed: false, optional: false, required: true
  private _refreshTokenRef?: string; 
  public get refreshTokenRef() {
    return this.getStringAttribute('refresh_token_ref');
  }
  public set refreshTokenRef(value: string) {
    this._refreshTokenRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRefInput() {
    return this._refreshTokenRef;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface PlatformConnectorServiceNowAuthUsernamePassword {
  /**
  * Reference to a secret containing the password to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#password_ref PlatformConnectorServiceNow#password_ref}
  */
  readonly passwordRef: string;
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#username PlatformConnectorServiceNow#username}
  */
  readonly username?: string;
  /**
  * Reference to a secret containing the username to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#username_ref PlatformConnectorServiceNow#username_ref}
  */
  readonly usernameRef?: string;
}

export function platformConnectorServiceNowAuthUsernamePasswordToTerraform(struct?: PlatformConnectorServiceNowAuthUsernamePasswordOutputReference | PlatformConnectorServiceNowAuthUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
    username: cdktf.stringToTerraform(struct!.username),
    username_ref: cdktf.stringToTerraform(struct!.usernameRef),
  }
}


export function platformConnectorServiceNowAuthUsernamePasswordToHclTerraform(struct?: PlatformConnectorServiceNowAuthUsernamePasswordOutputReference | PlatformConnectorServiceNowAuthUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_ref: {
      value: cdktf.stringToHclTerraform(struct!.passwordRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_ref: {
      value: cdktf.stringToHclTerraform(struct!.usernameRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorServiceNowAuthUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorServiceNowAuthUsernamePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameRef = this._usernameRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorServiceNowAuthUsernamePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordRef = undefined;
      this._username = undefined;
      this._usernameRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordRef = value.passwordRef;
      this._username = value.username;
      this._usernameRef = value.usernameRef;
    }
  }

  // password_ref - computed: false, optional: false, required: true
  private _passwordRef?: string; 
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }
  public set passwordRef(value: string) {
    this._passwordRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_ref - computed: false, optional: true, required: false
  private _usernameRef?: string; 
  public get usernameRef() {
    return this.getStringAttribute('username_ref');
  }
  public set usernameRef(value: string) {
    this._usernameRef = value;
  }
  public resetUsernameRef() {
    this._usernameRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameRefInput() {
    return this._usernameRef;
  }
}
export interface PlatformConnectorServiceNowAuth {
  /**
  * Authentication types for Jira connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#auth_type PlatformConnectorServiceNow#auth_type}
  */
  readonly authType: string;
  /**
  * adfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#adfs PlatformConnectorServiceNow#adfs}
  */
  readonly adfs?: PlatformConnectorServiceNowAuthAdfs;
  /**
  * refresh_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#refresh_token PlatformConnectorServiceNow#refresh_token}
  */
  readonly refreshToken?: PlatformConnectorServiceNowAuthRefreshToken;
  /**
  * username_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#username_password PlatformConnectorServiceNow#username_password}
  */
  readonly usernamePassword?: PlatformConnectorServiceNowAuthUsernamePassword;
}

export function platformConnectorServiceNowAuthToTerraform(struct?: PlatformConnectorServiceNowAuthOutputReference | PlatformConnectorServiceNowAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    adfs: platformConnectorServiceNowAuthAdfsToTerraform(struct!.adfs),
    refresh_token: platformConnectorServiceNowAuthRefreshTokenToTerraform(struct!.refreshToken),
    username_password: platformConnectorServiceNowAuthUsernamePasswordToTerraform(struct!.usernamePassword),
  }
}


export function platformConnectorServiceNowAuthToHclTerraform(struct?: PlatformConnectorServiceNowAuthOutputReference | PlatformConnectorServiceNowAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adfs: {
      value: platformConnectorServiceNowAuthAdfsToHclTerraform(struct!.adfs),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorServiceNowAuthAdfsList",
    },
    refresh_token: {
      value: platformConnectorServiceNowAuthRefreshTokenToHclTerraform(struct!.refreshToken),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorServiceNowAuthRefreshTokenList",
    },
    username_password: {
      value: platformConnectorServiceNowAuthUsernamePasswordToHclTerraform(struct!.usernamePassword),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorServiceNowAuthUsernamePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorServiceNowAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorServiceNowAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._adfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adfs = this._adfs?.internalValue;
    }
    if (this._refreshToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken?.internalValue;
    }
    if (this._usernamePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePassword = this._usernamePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorServiceNowAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._adfs.internalValue = undefined;
      this._refreshToken.internalValue = undefined;
      this._usernamePassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._adfs.internalValue = value.adfs;
      this._refreshToken.internalValue = value.refreshToken;
      this._usernamePassword.internalValue = value.usernamePassword;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // adfs - computed: false, optional: true, required: false
  private _adfs = new PlatformConnectorServiceNowAuthAdfsOutputReference(this, "adfs");
  public get adfs() {
    return this._adfs;
  }
  public putAdfs(value: PlatformConnectorServiceNowAuthAdfs) {
    this._adfs.internalValue = value;
  }
  public resetAdfs() {
    this._adfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsInput() {
    return this._adfs.internalValue;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken = new PlatformConnectorServiceNowAuthRefreshTokenOutputReference(this, "refresh_token");
  public get refreshToken() {
    return this._refreshToken;
  }
  public putRefreshToken(value: PlatformConnectorServiceNowAuthRefreshToken) {
    this._refreshToken.internalValue = value;
  }
  public resetRefreshToken() {
    this._refreshToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken.internalValue;
  }

  // username_password - computed: false, optional: true, required: false
  private _usernamePassword = new PlatformConnectorServiceNowAuthUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: PlatformConnectorServiceNowAuthUsernamePassword) {
    this._usernamePassword.internalValue = value;
  }
  public resetUsernamePassword() {
    this._usernamePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordInput() {
    return this._usernamePassword.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now harness_platform_connector_service_now}
*/
export class PlatformConnectorServiceNow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_service_now";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorServiceNow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorServiceNow to import
  * @param importFromId The id of the existing PlatformConnectorServiceNow that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorServiceNow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_service_now", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_service_now harness_platform_connector_service_now} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorServiceNowConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorServiceNowConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_service_now',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._passwordRef = config.passwordRef;
    this._projectId = config.projectId;
    this._serviceNowUrl = config.serviceNowUrl;
    this._tags = config.tags;
    this._username = config.username;
    this._usernameRef = config.usernameRef;
    this._auth.internalValue = config.auth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // password_ref - computed: true, optional: true, required: false
  private _passwordRef?: string; 
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }
  public set passwordRef(value: string) {
    this._passwordRef = value;
  }
  public resetPasswordRef() {
    this._passwordRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_now_url - computed: false, optional: false, required: true
  private _serviceNowUrl?: string; 
  public get serviceNowUrl() {
    return this.getStringAttribute('service_now_url');
  }
  public set serviceNowUrl(value: string) {
    this._serviceNowUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowUrlInput() {
    return this._serviceNowUrl;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_ref - computed: true, optional: true, required: false
  private _usernameRef?: string; 
  public get usernameRef() {
    return this.getStringAttribute('username_ref');
  }
  public set usernameRef(value: string) {
    this._usernameRef = value;
  }
  public resetUsernameRef() {
    this._usernameRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameRefInput() {
    return this._usernameRef;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new PlatformConnectorServiceNowAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: PlatformConnectorServiceNowAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      password_ref: cdktf.stringToTerraform(this._passwordRef),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_now_url: cdktf.stringToTerraform(this._serviceNowUrl),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      username: cdktf.stringToTerraform(this._username),
      username_ref: cdktf.stringToTerraform(this._usernameRef),
      auth: platformConnectorServiceNowAuthToTerraform(this._auth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_ref: {
        value: cdktf.stringToHclTerraform(this._passwordRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_now_url: {
        value: cdktf.stringToHclTerraform(this._serviceNowUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_ref: {
        value: cdktf.stringToHclTerraform(this._usernameRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth: {
        value: platformConnectorServiceNowAuthToHclTerraform(this._auth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorServiceNowAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
