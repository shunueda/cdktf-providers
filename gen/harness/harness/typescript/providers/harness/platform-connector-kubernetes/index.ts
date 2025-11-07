// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Selectors to use for the delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#delegate_selectors PlatformConnectorKubernetes#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#description PlatformConnectorKubernetes#description}
  */
  readonly description?: string;
  /**
  * Enable this flag for force deletion of connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#force_delete PlatformConnectorKubernetes#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#id PlatformConnectorKubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#identifier PlatformConnectorKubernetes#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#name PlatformConnectorKubernetes#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#org_id PlatformConnectorKubernetes#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#project_id PlatformConnectorKubernetes#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#tags PlatformConnectorKubernetes#tags}
  */
  readonly tags?: string[];
  /**
  * client_key_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#client_key_cert PlatformConnectorKubernetes#client_key_cert}
  */
  readonly clientKeyCert?: PlatformConnectorKubernetesClientKeyCert;
  /**
  * inherit_from_delegate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#inherit_from_delegate PlatformConnectorKubernetes#inherit_from_delegate}
  */
  readonly inheritFromDelegate?: PlatformConnectorKubernetesInheritFromDelegate;
  /**
  * openid_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#openid_connect PlatformConnectorKubernetes#openid_connect}
  */
  readonly openidConnect?: PlatformConnectorKubernetesOpenidConnect;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#service_account PlatformConnectorKubernetes#service_account}
  */
  readonly serviceAccount?: PlatformConnectorKubernetesServiceAccount;
  /**
  * username_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#username_password PlatformConnectorKubernetes#username_password}
  */
  readonly usernamePassword?: PlatformConnectorKubernetesUsernamePassword;
}
export interface PlatformConnectorKubernetesClientKeyCert {
  /**
  * Reference to the secret containing the CA certificate for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#ca_cert_ref PlatformConnectorKubernetes#ca_cert_ref}
  */
  readonly caCertRef?: string;
  /**
  * Reference to the secret containing the client certificate for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#client_cert_ref PlatformConnectorKubernetes#client_cert_ref}
  */
  readonly clientCertRef: string;
  /**
  * The algorithm used to generate the client key for the connector. Valid values are RSA, EC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#client_key_algorithm PlatformConnectorKubernetes#client_key_algorithm}
  */
  readonly clientKeyAlgorithm: string;
  /**
  * Reference to the secret containing the client key passphrase for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#client_key_passphrase_ref PlatformConnectorKubernetes#client_key_passphrase_ref}
  */
  readonly clientKeyPassphraseRef?: string;
  /**
  * Reference to the secret containing the client key for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#client_key_ref PlatformConnectorKubernetes#client_key_ref}
  */
  readonly clientKeyRef: string;
  /**
  * The URL of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#master_url PlatformConnectorKubernetes#master_url}
  */
  readonly masterUrl: string;
}

export function platformConnectorKubernetesClientKeyCertToTerraform(struct?: PlatformConnectorKubernetesClientKeyCertOutputReference | PlatformConnectorKubernetesClientKeyCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_ref: cdktf.stringToTerraform(struct!.caCertRef),
    client_cert_ref: cdktf.stringToTerraform(struct!.clientCertRef),
    client_key_algorithm: cdktf.stringToTerraform(struct!.clientKeyAlgorithm),
    client_key_passphrase_ref: cdktf.stringToTerraform(struct!.clientKeyPassphraseRef),
    client_key_ref: cdktf.stringToTerraform(struct!.clientKeyRef),
    master_url: cdktf.stringToTerraform(struct!.masterUrl),
  }
}


export function platformConnectorKubernetesClientKeyCertToHclTerraform(struct?: PlatformConnectorKubernetesClientKeyCertOutputReference | PlatformConnectorKubernetesClientKeyCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_ref: {
      value: cdktf.stringToHclTerraform(struct!.caCertRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_ref: {
      value: cdktf.stringToHclTerraform(struct!.clientCertRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_passphrase_ref: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPassphraseRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorKubernetesClientKeyCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorKubernetesClientKeyCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertRef = this._caCertRef;
    }
    if (this._clientCertRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertRef = this._clientCertRef;
    }
    if (this._clientKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyAlgorithm = this._clientKeyAlgorithm;
    }
    if (this._clientKeyPassphraseRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPassphraseRef = this._clientKeyPassphraseRef;
    }
    if (this._clientKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyRef = this._clientKeyRef;
    }
    if (this._masterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUrl = this._masterUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorKubernetesClientKeyCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertRef = undefined;
      this._clientCertRef = undefined;
      this._clientKeyAlgorithm = undefined;
      this._clientKeyPassphraseRef = undefined;
      this._clientKeyRef = undefined;
      this._masterUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertRef = value.caCertRef;
      this._clientCertRef = value.clientCertRef;
      this._clientKeyAlgorithm = value.clientKeyAlgorithm;
      this._clientKeyPassphraseRef = value.clientKeyPassphraseRef;
      this._clientKeyRef = value.clientKeyRef;
      this._masterUrl = value.masterUrl;
    }
  }

  // ca_cert_ref - computed: false, optional: true, required: false
  private _caCertRef?: string; 
  public get caCertRef() {
    return this.getStringAttribute('ca_cert_ref');
  }
  public set caCertRef(value: string) {
    this._caCertRef = value;
  }
  public resetCaCertRef() {
    this._caCertRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertRefInput() {
    return this._caCertRef;
  }

  // client_cert_ref - computed: false, optional: false, required: true
  private _clientCertRef?: string; 
  public get clientCertRef() {
    return this.getStringAttribute('client_cert_ref');
  }
  public set clientCertRef(value: string) {
    this._clientCertRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRefInput() {
    return this._clientCertRef;
  }

  // client_key_algorithm - computed: false, optional: false, required: true
  private _clientKeyAlgorithm?: string; 
  public get clientKeyAlgorithm() {
    return this.getStringAttribute('client_key_algorithm');
  }
  public set clientKeyAlgorithm(value: string) {
    this._clientKeyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyAlgorithmInput() {
    return this._clientKeyAlgorithm;
  }

  // client_key_passphrase_ref - computed: false, optional: true, required: false
  private _clientKeyPassphraseRef?: string; 
  public get clientKeyPassphraseRef() {
    return this.getStringAttribute('client_key_passphrase_ref');
  }
  public set clientKeyPassphraseRef(value: string) {
    this._clientKeyPassphraseRef = value;
  }
  public resetClientKeyPassphraseRef() {
    this._clientKeyPassphraseRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPassphraseRefInput() {
    return this._clientKeyPassphraseRef;
  }

  // client_key_ref - computed: false, optional: false, required: true
  private _clientKeyRef?: string; 
  public get clientKeyRef() {
    return this.getStringAttribute('client_key_ref');
  }
  public set clientKeyRef(value: string) {
    this._clientKeyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyRefInput() {
    return this._clientKeyRef;
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
}
export interface PlatformConnectorKubernetesInheritFromDelegate {
  /**
  * Selectors to use for the delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#delegate_selectors PlatformConnectorKubernetes#delegate_selectors}
  */
  readonly delegateSelectors: string[];
}

export function platformConnectorKubernetesInheritFromDelegateToTerraform(struct?: PlatformConnectorKubernetesInheritFromDelegateOutputReference | PlatformConnectorKubernetesInheritFromDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegateSelectors),
  }
}


export function platformConnectorKubernetesInheritFromDelegateToHclTerraform(struct?: PlatformConnectorKubernetesInheritFromDelegateOutputReference | PlatformConnectorKubernetesInheritFromDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegate_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegateSelectors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorKubernetesInheritFromDelegateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorKubernetesInheritFromDelegate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateSelectors = this._delegateSelectors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorKubernetesInheritFromDelegate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delegateSelectors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delegateSelectors = value.delegateSelectors;
    }
  }

  // delegate_selectors - computed: false, optional: false, required: true
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }
}
export interface PlatformConnectorKubernetesOpenidConnect {
  /**
  * Reference to the secret containing the client ID for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#client_id_ref PlatformConnectorKubernetes#client_id_ref}
  */
  readonly clientIdRef: string;
  /**
  * The URL of the OpenID Connect issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#issuer_url PlatformConnectorKubernetes#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * The URL of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#master_url PlatformConnectorKubernetes#master_url}
  */
  readonly masterUrl: string;
  /**
  * Reference to the secret containing the password for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#password_ref PlatformConnectorKubernetes#password_ref}
  */
  readonly passwordRef: string;
  /**
  * Scopes to request for the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#scopes PlatformConnectorKubernetes#scopes}
  */
  readonly scopes?: string[];
  /**
  * Reference to the secret containing the client secret for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#secret_ref PlatformConnectorKubernetes#secret_ref}
  */
  readonly secretRef?: string;
  /**
  * Username for the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#username PlatformConnectorKubernetes#username}
  */
  readonly username?: string;
  /**
  * Reference to the secret containing the username for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#username_ref PlatformConnectorKubernetes#username_ref}
  */
  readonly usernameRef?: string;
}

export function platformConnectorKubernetesOpenidConnectToTerraform(struct?: PlatformConnectorKubernetesOpenidConnectOutputReference | PlatformConnectorKubernetesOpenidConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_ref: cdktf.stringToTerraform(struct!.clientIdRef),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    master_url: cdktf.stringToTerraform(struct!.masterUrl),
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
    username: cdktf.stringToTerraform(struct!.username),
    username_ref: cdktf.stringToTerraform(struct!.usernameRef),
  }
}


export function platformConnectorKubernetesOpenidConnectToHclTerraform(struct?: PlatformConnectorKubernetesOpenidConnectOutputReference | PlatformConnectorKubernetesOpenidConnect): any {
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
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
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
    password_ref: {
      value: cdktf.stringToHclTerraform(struct!.passwordRef),
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
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
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

export class PlatformConnectorKubernetesOpenidConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorKubernetesOpenidConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdRef = this._clientIdRef;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._masterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUrl = this._masterUrl;
    }
    if (this._passwordRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
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

  public set internalValue(value: PlatformConnectorKubernetesOpenidConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientIdRef = undefined;
      this._issuerUrl = undefined;
      this._masterUrl = undefined;
      this._passwordRef = undefined;
      this._scopes = undefined;
      this._secretRef = undefined;
      this._username = undefined;
      this._usernameRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientIdRef = value.clientIdRef;
      this._issuerUrl = value.issuerUrl;
      this._masterUrl = value.masterUrl;
      this._passwordRef = value.passwordRef;
      this._scopes = value.scopes;
      this._secretRef = value.secretRef;
      this._username = value.username;
      this._usernameRef = value.usernameRef;
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

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
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
export interface PlatformConnectorKubernetesServiceAccount {
  /**
  * Reference to the secret containing the CA certificate for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#ca_cert_ref PlatformConnectorKubernetes#ca_cert_ref}
  */
  readonly caCertRef?: string;
  /**
  * The URL of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#master_url PlatformConnectorKubernetes#master_url}
  */
  readonly masterUrl: string;
  /**
  * Reference to the secret containing the service account token for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#service_account_token_ref PlatformConnectorKubernetes#service_account_token_ref}
  */
  readonly serviceAccountTokenRef: string;
}

export function platformConnectorKubernetesServiceAccountToTerraform(struct?: PlatformConnectorKubernetesServiceAccountOutputReference | PlatformConnectorKubernetesServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_ref: cdktf.stringToTerraform(struct!.caCertRef),
    master_url: cdktf.stringToTerraform(struct!.masterUrl),
    service_account_token_ref: cdktf.stringToTerraform(struct!.serviceAccountTokenRef),
  }
}


export function platformConnectorKubernetesServiceAccountToHclTerraform(struct?: PlatformConnectorKubernetesServiceAccountOutputReference | PlatformConnectorKubernetesServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_ref: {
      value: cdktf.stringToHclTerraform(struct!.caCertRef),
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
    service_account_token_ref: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountTokenRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorKubernetesServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorKubernetesServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertRef = this._caCertRef;
    }
    if (this._masterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUrl = this._masterUrl;
    }
    if (this._serviceAccountTokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountTokenRef = this._serviceAccountTokenRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorKubernetesServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertRef = undefined;
      this._masterUrl = undefined;
      this._serviceAccountTokenRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertRef = value.caCertRef;
      this._masterUrl = value.masterUrl;
      this._serviceAccountTokenRef = value.serviceAccountTokenRef;
    }
  }

  // ca_cert_ref - computed: false, optional: true, required: false
  private _caCertRef?: string; 
  public get caCertRef() {
    return this.getStringAttribute('ca_cert_ref');
  }
  public set caCertRef(value: string) {
    this._caCertRef = value;
  }
  public resetCaCertRef() {
    this._caCertRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertRefInput() {
    return this._caCertRef;
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

  // service_account_token_ref - computed: false, optional: false, required: true
  private _serviceAccountTokenRef?: string; 
  public get serviceAccountTokenRef() {
    return this.getStringAttribute('service_account_token_ref');
  }
  public set serviceAccountTokenRef(value: string) {
    this._serviceAccountTokenRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenRefInput() {
    return this._serviceAccountTokenRef;
  }
}
export interface PlatformConnectorKubernetesUsernamePassword {
  /**
  * The URL of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#master_url PlatformConnectorKubernetes#master_url}
  */
  readonly masterUrl: string;
  /**
  * Reference to the secret containing the password for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#password_ref PlatformConnectorKubernetes#password_ref}
  */
  readonly passwordRef: string;
  /**
  * Username for the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#username PlatformConnectorKubernetes#username}
  */
  readonly username?: string;
  /**
  * Reference to the secret containing the username for the connector. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#username_ref PlatformConnectorKubernetes#username_ref}
  */
  readonly usernameRef?: string;
}

export function platformConnectorKubernetesUsernamePasswordToTerraform(struct?: PlatformConnectorKubernetesUsernamePasswordOutputReference | PlatformConnectorKubernetesUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_url: cdktf.stringToTerraform(struct!.masterUrl),
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
    username: cdktf.stringToTerraform(struct!.username),
    username_ref: cdktf.stringToTerraform(struct!.usernameRef),
  }
}


export function platformConnectorKubernetesUsernamePasswordToHclTerraform(struct?: PlatformConnectorKubernetesUsernamePasswordOutputReference | PlatformConnectorKubernetesUsernamePassword): any {
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

export class PlatformConnectorKubernetesUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorKubernetesUsernamePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUrl = this._masterUrl;
    }
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

  public set internalValue(value: PlatformConnectorKubernetesUsernamePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterUrl = undefined;
      this._passwordRef = undefined;
      this._username = undefined;
      this._usernameRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterUrl = value.masterUrl;
      this._passwordRef = value.passwordRef;
      this._username = value.username;
      this._usernameRef = value.usernameRef;
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

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes harness_platform_connector_kubernetes}
*/
export class PlatformConnectorKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorKubernetes to import
  * @param importFromId The id of the existing PlatformConnectorKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_kubernetes harness_platform_connector_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorKubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorKubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_kubernetes',
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
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._clientKeyCert.internalValue = config.clientKeyCert;
    this._inheritFromDelegate.internalValue = config.inheritFromDelegate;
    this._openidConnect.internalValue = config.openidConnect;
    this._serviceAccount.internalValue = config.serviceAccount;
    this._usernamePassword.internalValue = config.usernamePassword;
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

  // force_delete - computed: true, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // client_key_cert - computed: false, optional: true, required: false
  private _clientKeyCert = new PlatformConnectorKubernetesClientKeyCertOutputReference(this, "client_key_cert");
  public get clientKeyCert() {
    return this._clientKeyCert;
  }
  public putClientKeyCert(value: PlatformConnectorKubernetesClientKeyCert) {
    this._clientKeyCert.internalValue = value;
  }
  public resetClientKeyCert() {
    this._clientKeyCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyCertInput() {
    return this._clientKeyCert.internalValue;
  }

  // inherit_from_delegate - computed: false, optional: true, required: false
  private _inheritFromDelegate = new PlatformConnectorKubernetesInheritFromDelegateOutputReference(this, "inherit_from_delegate");
  public get inheritFromDelegate() {
    return this._inheritFromDelegate;
  }
  public putInheritFromDelegate(value: PlatformConnectorKubernetesInheritFromDelegate) {
    this._inheritFromDelegate.internalValue = value;
  }
  public resetInheritFromDelegate() {
    this._inheritFromDelegate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromDelegateInput() {
    return this._inheritFromDelegate.internalValue;
  }

  // openid_connect - computed: false, optional: true, required: false
  private _openidConnect = new PlatformConnectorKubernetesOpenidConnectOutputReference(this, "openid_connect");
  public get openidConnect() {
    return this._openidConnect;
  }
  public putOpenidConnect(value: PlatformConnectorKubernetesOpenidConnect) {
    this._openidConnect.internalValue = value;
  }
  public resetOpenidConnect() {
    this._openidConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectInput() {
    return this._openidConnect.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new PlatformConnectorKubernetesServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: PlatformConnectorKubernetesServiceAccount) {
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
  private _usernamePassword = new PlatformConnectorKubernetesUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: PlatformConnectorKubernetesUsernamePassword) {
    this._usernamePassword.internalValue = value;
  }
  public resetUsernamePassword() {
    this._usernamePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordInput() {
    return this._usernamePassword.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      client_key_cert: platformConnectorKubernetesClientKeyCertToTerraform(this._clientKeyCert.internalValue),
      inherit_from_delegate: platformConnectorKubernetesInheritFromDelegateToTerraform(this._inheritFromDelegate.internalValue),
      openid_connect: platformConnectorKubernetesOpenidConnectToTerraform(this._openidConnect.internalValue),
      service_account: platformConnectorKubernetesServiceAccountToTerraform(this._serviceAccount.internalValue),
      username_password: platformConnectorKubernetesUsernamePasswordToTerraform(this._usernamePassword.internalValue),
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
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      client_key_cert: {
        value: platformConnectorKubernetesClientKeyCertToHclTerraform(this._clientKeyCert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorKubernetesClientKeyCertList",
      },
      inherit_from_delegate: {
        value: platformConnectorKubernetesInheritFromDelegateToHclTerraform(this._inheritFromDelegate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorKubernetesInheritFromDelegateList",
      },
      openid_connect: {
        value: platformConnectorKubernetesOpenidConnectToHclTerraform(this._openidConnect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorKubernetesOpenidConnectList",
      },
      service_account: {
        value: platformConnectorKubernetesServiceAccountToHclTerraform(this._serviceAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorKubernetesServiceAccountList",
      },
      username_password: {
        value: platformConnectorKubernetesUsernamePasswordToHclTerraform(this._usernamePassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorKubernetesUsernamePasswordList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
