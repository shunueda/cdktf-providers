// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudproviderKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#name CloudproviderKubernetes#name}
  */
  readonly name: string;
  /**
  * Skip validation of Kubernetes configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#skip_validation CloudproviderKubernetes#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#authentication CloudproviderKubernetes#authentication}
  */
  readonly authentication: CloudproviderKubernetesAuthentication;
  /**
  * usage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#usage_scope CloudproviderKubernetes#usage_scope}
  */
  readonly usageScope?: CloudproviderKubernetesUsageScope[] | cdktf.IResolvable;
}
export interface CloudproviderKubernetesAuthenticationOidc {
  /**
  * Name of the Harness secret containing the client ID for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#client_id_secret_name CloudproviderKubernetes#client_id_secret_name}
  */
  readonly clientIdSecretName: string;
  /**
  * Name of the Harness secret containing the client secret for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#client_secret_secret_name CloudproviderKubernetes#client_secret_secret_name}
  */
  readonly clientSecretSecretName?: string;
  /**
  * URL of the identity provider to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#identity_provider_url CloudproviderKubernetes#identity_provider_url}
  */
  readonly identityProviderUrl: string;
  /**
  * URL of the Kubernetes master to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#master_url CloudproviderKubernetes#master_url}
  */
  readonly masterUrl: string;
  /**
  * Name of the Harness secret containing the password for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#password_secret_name CloudproviderKubernetes#password_secret_name}
  */
  readonly passwordSecretName: string;
  /**
  * Scopes to request from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#scopes CloudproviderKubernetes#scopes}
  */
  readonly scopes?: string[];
  /**
  * Username for authentication to the cluster. This can be the username itself or the ID of a harness secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#username CloudproviderKubernetes#username}
  */
  readonly username: string;
}

export function cloudproviderKubernetesAuthenticationOidcToTerraform(struct?: CloudproviderKubernetesAuthenticationOidcOutputReference | CloudproviderKubernetesAuthenticationOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_secret_name: cdktf.stringToTerraform(struct!.clientIdSecretName),
    client_secret_secret_name: cdktf.stringToTerraform(struct!.clientSecretSecretName),
    identity_provider_url: cdktf.stringToTerraform(struct!.identityProviderUrl),
    master_url: cdktf.stringToTerraform(struct!.masterUrl),
    password_secret_name: cdktf.stringToTerraform(struct!.passwordSecretName),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloudproviderKubernetesAuthenticationOidcToHclTerraform(struct?: CloudproviderKubernetesAuthenticationOidcOutputReference | CloudproviderKubernetesAuthenticationOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.clientIdSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_url: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_url: {
      value: cdktf.stringToHclTerraform(struct!.masterUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudproviderKubernetesAuthenticationOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudproviderKubernetesAuthenticationOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdSecretName = this._clientIdSecretName;
    }
    if (this._clientSecretSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSecretName = this._clientSecretSecretName;
    }
    if (this._identityProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderUrl = this._identityProviderUrl;
    }
    if (this._masterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUrl = this._masterUrl;
    }
    if (this._passwordSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretName = this._passwordSecretName;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudproviderKubernetesAuthenticationOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientIdSecretName = undefined;
      this._clientSecretSecretName = undefined;
      this._identityProviderUrl = undefined;
      this._masterUrl = undefined;
      this._passwordSecretName = undefined;
      this._scopes = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientIdSecretName = value.clientIdSecretName;
      this._clientSecretSecretName = value.clientSecretSecretName;
      this._identityProviderUrl = value.identityProviderUrl;
      this._masterUrl = value.masterUrl;
      this._passwordSecretName = value.passwordSecretName;
      this._scopes = value.scopes;
      this._username = value.username;
    }
  }

  // client_id_secret_name - computed: false, optional: false, required: true
  private _clientIdSecretName?: string; 
  public get clientIdSecretName() {
    return this.getStringAttribute('client_id_secret_name');
  }
  public set clientIdSecretName(value: string) {
    this._clientIdSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdSecretNameInput() {
    return this._clientIdSecretName;
  }

  // client_secret_secret_name - computed: false, optional: true, required: false
  private _clientSecretSecretName?: string; 
  public get clientSecretSecretName() {
    return this.getStringAttribute('client_secret_secret_name');
  }
  public set clientSecretSecretName(value: string) {
    this._clientSecretSecretName = value;
  }
  public resetClientSecretSecretName() {
    this._clientSecretSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSecretNameInput() {
    return this._clientSecretSecretName;
  }

  // identity_provider_url - computed: false, optional: false, required: true
  private _identityProviderUrl?: string; 
  public get identityProviderUrl() {
    return this.getStringAttribute('identity_provider_url');
  }
  public set identityProviderUrl(value: string) {
    this._identityProviderUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderUrlInput() {
    return this._identityProviderUrl;
  }

  // master_url - computed: false, optional: false, required: true
  private _masterUrl?: string; 
  public get masterUrl() {
    return this.getStringAttribute('master_url');
  }
  public set masterUrl(value: string) {
    this._masterUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUrlInput() {
    return this._masterUrl;
  }

  // password_secret_name - computed: false, optional: false, required: true
  private _passwordSecretName?: string; 
  public get passwordSecretName() {
    return this.getStringAttribute('password_secret_name');
  }
  public set passwordSecretName(value: string) {
    this._passwordSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretNameInput() {
    return this._passwordSecretName;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CloudproviderKubernetesAuthenticationServiceAccount {
  /**
  * Name of the Harness secret containing the CA certificate for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#ca_certificate_secret_name CloudproviderKubernetes#ca_certificate_secret_name}
  */
  readonly caCertificateSecretName?: string;
  /**
  * URL of the Kubernetes master to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#master_url CloudproviderKubernetes#master_url}
  */
  readonly masterUrl: string;
  /**
  * Name of the Harness secret containing the service account token for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#service_account_token_secret_name CloudproviderKubernetes#service_account_token_secret_name}
  */
  readonly serviceAccountTokenSecretName: string;
}

export function cloudproviderKubernetesAuthenticationServiceAccountToTerraform(struct?: CloudproviderKubernetesAuthenticationServiceAccountOutputReference | CloudproviderKubernetesAuthenticationServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate_secret_name: cdktf.stringToTerraform(struct!.caCertificateSecretName),
    master_url: cdktf.stringToTerraform(struct!.masterUrl),
    service_account_token_secret_name: cdktf.stringToTerraform(struct!.serviceAccountTokenSecretName),
  }
}


export function cloudproviderKubernetesAuthenticationServiceAccountToHclTerraform(struct?: CloudproviderKubernetesAuthenticationServiceAccountOutputReference | CloudproviderKubernetesAuthenticationServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.caCertificateSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_url: {
      value: cdktf.stringToHclTerraform(struct!.masterUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_token_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountTokenSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudproviderKubernetesAuthenticationServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudproviderKubernetesAuthenticationServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificateSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateSecretName = this._caCertificateSecretName;
    }
    if (this._masterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUrl = this._masterUrl;
    }
    if (this._serviceAccountTokenSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountTokenSecretName = this._serviceAccountTokenSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudproviderKubernetesAuthenticationServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificateSecretName = undefined;
      this._masterUrl = undefined;
      this._serviceAccountTokenSecretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificateSecretName = value.caCertificateSecretName;
      this._masterUrl = value.masterUrl;
      this._serviceAccountTokenSecretName = value.serviceAccountTokenSecretName;
    }
  }

  // ca_certificate_secret_name - computed: false, optional: true, required: false
  private _caCertificateSecretName?: string; 
  public get caCertificateSecretName() {
    return this.getStringAttribute('ca_certificate_secret_name');
  }
  public set caCertificateSecretName(value: string) {
    this._caCertificateSecretName = value;
  }
  public resetCaCertificateSecretName() {
    this._caCertificateSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateSecretNameInput() {
    return this._caCertificateSecretName;
  }

  // master_url - computed: false, optional: false, required: true
  private _masterUrl?: string; 
  public get masterUrl() {
    return this.getStringAttribute('master_url');
  }
  public set masterUrl(value: string) {
    this._masterUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUrlInput() {
    return this._masterUrl;
  }

  // service_account_token_secret_name - computed: false, optional: false, required: true
  private _serviceAccountTokenSecretName?: string; 
  public get serviceAccountTokenSecretName() {
    return this.getStringAttribute('service_account_token_secret_name');
  }
  public set serviceAccountTokenSecretName(value: string) {
    this._serviceAccountTokenSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenSecretNameInput() {
    return this._serviceAccountTokenSecretName;
  }
}
export interface CloudproviderKubernetesAuthenticationUsernamePassword {
  /**
  * URL of the Kubernetes master to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#master_url CloudproviderKubernetes#master_url}
  */
  readonly masterUrl: string;
  /**
  * Name of the Harness secret containing the password for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#password_secret_name CloudproviderKubernetes#password_secret_name}
  */
  readonly passwordSecretName: string;
  /**
  * Username for authentication to the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#username CloudproviderKubernetes#username}
  */
  readonly username?: string;
  /**
  * Name of the Harness secret containing the username for authentication to the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#username_secret_name CloudproviderKubernetes#username_secret_name}
  */
  readonly usernameSecretName?: string;
}

export function cloudproviderKubernetesAuthenticationUsernamePasswordToTerraform(struct?: CloudproviderKubernetesAuthenticationUsernamePasswordOutputReference | CloudproviderKubernetesAuthenticationUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_url: cdktf.stringToTerraform(struct!.masterUrl),
    password_secret_name: cdktf.stringToTerraform(struct!.passwordSecretName),
    username: cdktf.stringToTerraform(struct!.username),
    username_secret_name: cdktf.stringToTerraform(struct!.usernameSecretName),
  }
}


export function cloudproviderKubernetesAuthenticationUsernamePasswordToHclTerraform(struct?: CloudproviderKubernetesAuthenticationUsernamePasswordOutputReference | CloudproviderKubernetesAuthenticationUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_url: {
      value: cdktf.stringToHclTerraform(struct!.masterUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretName),
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
    username_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.usernameSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudproviderKubernetesAuthenticationUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudproviderKubernetesAuthenticationUsernamePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUrl = this._masterUrl;
    }
    if (this._passwordSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretName = this._passwordSecretName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameSecretName = this._usernameSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudproviderKubernetesAuthenticationUsernamePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterUrl = undefined;
      this._passwordSecretName = undefined;
      this._username = undefined;
      this._usernameSecretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterUrl = value.masterUrl;
      this._passwordSecretName = value.passwordSecretName;
      this._username = value.username;
      this._usernameSecretName = value.usernameSecretName;
    }
  }

  // master_url - computed: false, optional: false, required: true
  private _masterUrl?: string; 
  public get masterUrl() {
    return this.getStringAttribute('master_url');
  }
  public set masterUrl(value: string) {
    this._masterUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUrlInput() {
    return this._masterUrl;
  }

  // password_secret_name - computed: false, optional: false, required: true
  private _passwordSecretName?: string; 
  public get passwordSecretName() {
    return this.getStringAttribute('password_secret_name');
  }
  public set passwordSecretName(value: string) {
    this._passwordSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretNameInput() {
    return this._passwordSecretName;
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

  // username_secret_name - computed: false, optional: true, required: false
  private _usernameSecretName?: string; 
  public get usernameSecretName() {
    return this.getStringAttribute('username_secret_name');
  }
  public set usernameSecretName(value: string) {
    this._usernameSecretName = value;
  }
  public resetUsernameSecretName() {
    this._usernameSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameSecretNameInput() {
    return this._usernameSecretName;
  }
}
export interface CloudproviderKubernetesAuthentication {
  /**
  * Delegate selectors to inherit the GCP credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#delegate_selectors CloudproviderKubernetes#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#oidc CloudproviderKubernetes#oidc}
  */
  readonly oidc?: CloudproviderKubernetesAuthenticationOidc;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#service_account CloudproviderKubernetes#service_account}
  */
  readonly serviceAccount?: CloudproviderKubernetesAuthenticationServiceAccount;
  /**
  * username_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#username_password CloudproviderKubernetes#username_password}
  */
  readonly usernamePassword?: CloudproviderKubernetesAuthenticationUsernamePassword;
}

export function cloudproviderKubernetesAuthenticationToTerraform(struct?: CloudproviderKubernetesAuthenticationOutputReference | CloudproviderKubernetesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
    oidc: cloudproviderKubernetesAuthenticationOidcToTerraform(struct!.oidc),
    service_account: cloudproviderKubernetesAuthenticationServiceAccountToTerraform(struct!.serviceAccount),
    username_password: cloudproviderKubernetesAuthenticationUsernamePasswordToTerraform(struct!.usernamePassword),
  }
}


export function cloudproviderKubernetesAuthenticationToHclTerraform(struct?: CloudproviderKubernetesAuthenticationOutputReference | CloudproviderKubernetesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oidc: {
      value: cloudproviderKubernetesAuthenticationOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "list",
      storageClassType: "CloudproviderKubernetesAuthenticationOidcList",
    },
    service_account: {
      value: cloudproviderKubernetesAuthenticationServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "CloudproviderKubernetesAuthenticationServiceAccountList",
    },
    username_password: {
      value: cloudproviderKubernetesAuthenticationUsernamePasswordToHclTerraform(struct!.usernamePassword),
      isBlock: true,
      type: "list",
      storageClassType: "CloudproviderKubernetesAuthenticationUsernamePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudproviderKubernetesAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudproviderKubernetesAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._usernamePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePassword = this._usernamePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudproviderKubernetesAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delegateSelectors = undefined;
      this._oidc.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._usernamePassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delegateSelectors = value.delegateSelectors;
      this._oidc.internalValue = value.oidc;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._usernamePassword.internalValue = value.usernamePassword;
    }
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return this.getListAttribute('delegate_selectors');
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

  // oidc - computed: false, optional: true, required: false
  private _oidc = new CloudproviderKubernetesAuthenticationOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: CloudproviderKubernetesAuthenticationOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new CloudproviderKubernetesAuthenticationServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: CloudproviderKubernetesAuthenticationServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // username_password - computed: false, optional: true, required: false
  private _usernamePassword = new CloudproviderKubernetesAuthenticationUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: CloudproviderKubernetesAuthenticationUsernamePassword) {
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
export interface CloudproviderKubernetesUsageScope {
  /**
  * Id of the application to scope to. If empty then this scope applies to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#application_id CloudproviderKubernetes#application_id}
  */
  readonly applicationId?: string;
  /**
  * Type of environment filter applied. Cannot be used with `environment_id`. Valid options are NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#environment_filter_type CloudproviderKubernetes#environment_filter_type}
  */
  readonly environmentFilterType?: string;
  /**
  * Id of the id of the specific environment to scope to. Cannot be used with `environment_filter_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#environment_id CloudproviderKubernetes#environment_id}
  */
  readonly environmentId?: string;
}

export function cloudproviderKubernetesUsageScopeToTerraform(struct?: CloudproviderKubernetesUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    environment_filter_type: cdktf.stringToTerraform(struct!.environmentFilterType),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
  }
}


export function cloudproviderKubernetesUsageScopeToHclTerraform(struct?: CloudproviderKubernetesUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudproviderKubernetesUsageScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudproviderKubernetesUsageScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._environmentFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilterType = this._environmentFilterType;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudproviderKubernetesUsageScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._environmentFilterType = undefined;
      this._environmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._environmentFilterType = value.environmentFilterType;
      this._environmentId = value.environmentId;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_filter_type - computed: false, optional: true, required: false
  private _environmentFilterType?: string; 
  public get environmentFilterType() {
    return this.getStringAttribute('environment_filter_type');
  }
  public set environmentFilterType(value: string) {
    this._environmentFilterType = value;
  }
  public resetEnvironmentFilterType() {
    this._environmentFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterTypeInput() {
    return this._environmentFilterType;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }
}

export class CloudproviderKubernetesUsageScopeList extends cdktf.ComplexList {
  public internalValue? : CloudproviderKubernetesUsageScope[] | cdktf.IResolvable

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
  public get(index: number): CloudproviderKubernetesUsageScopeOutputReference {
    return new CloudproviderKubernetesUsageScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes harness_cloudprovider_kubernetes}
*/
export class CloudproviderKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_cloudprovider_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudproviderKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudproviderKubernetes to import
  * @param importFromId The id of the existing CloudproviderKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudproviderKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_cloudprovider_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_kubernetes harness_cloudprovider_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudproviderKubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: CloudproviderKubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_cloudprovider_kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._skipValidation = config.skipValidation;
    this._authentication.internalValue = config.authentication;
    this._usageScope.internalValue = config.usageScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // skip_validation - computed: false, optional: true, required: false
  private _skipValidation?: boolean | cdktf.IResolvable; 
  public get skipValidation() {
    return this.getBooleanAttribute('skip_validation');
  }
  public set skipValidation(value: boolean | cdktf.IResolvable) {
    this._skipValidation = value;
  }
  public resetSkipValidation() {
    this._skipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationInput() {
    return this._skipValidation;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new CloudproviderKubernetesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: CloudproviderKubernetesAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // usage_scope - computed: false, optional: true, required: false
  private _usageScope = new CloudproviderKubernetesUsageScopeList(this, "usage_scope", true);
  public get usageScope() {
    return this._usageScope;
  }
  public putUsageScope(value: CloudproviderKubernetesUsageScope[] | cdktf.IResolvable) {
    this._usageScope.internalValue = value;
  }
  public resetUsageScope() {
    this._usageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageScopeInput() {
    return this._usageScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      skip_validation: cdktf.booleanToTerraform(this._skipValidation),
      authentication: cloudproviderKubernetesAuthenticationToTerraform(this._authentication.internalValue),
      usage_scope: cdktf.listMapper(cloudproviderKubernetesUsageScopeToTerraform, true)(this._usageScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_validation: {
        value: cdktf.booleanToHclTerraform(this._skipValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication: {
        value: cloudproviderKubernetesAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudproviderKubernetesAuthenticationList",
      },
      usage_scope: {
        value: cdktf.listMapperHcl(cloudproviderKubernetesUsageScopeToHclTerraform, true)(this._usageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudproviderKubernetesUsageScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
