// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies access level to NSX from the compute manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#access_level_for_oidc ComputeManager#access_level_for_oidc}
  */
  readonly accessLevelForOidc?: string;
  /**
  * Specifies whether service account is created or not on compute manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#create_service_account ComputeManager#create_service_account}
  */
  readonly createServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#description ComputeManager#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#display_name ComputeManager#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#id ComputeManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether multi nsx feature is enabled for compute manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#multi_nsx ComputeManager#multi_nsx}
  */
  readonly multiNsx?: boolean | cdktf.IResolvable;
  /**
  * Compute manager type like vCenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#origin_type ComputeManager#origin_type}
  */
  readonly originType?: string;
  /**
  * Proxy https port of compute manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#reverse_proxy_https_port ComputeManager#reverse_proxy_https_port}
  */
  readonly reverseProxyHttpsPort?: number;
  /**
  * IP address or hostname of compute manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#server ComputeManager#server}
  */
  readonly server: string;
  /**
  * Specifies whether compute manager has been set as OIDC provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#set_as_oidc_provider ComputeManager#set_as_oidc_provider}
  */
  readonly setAsOidcProvider?: boolean | cdktf.IResolvable;
  /**
  * credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#credential ComputeManager#credential}
  */
  readonly credential: ComputeManagerCredential;
  /**
  * extension_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#extension_certificate ComputeManager#extension_certificate}
  */
  readonly extensionCertificate?: ComputeManagerExtensionCertificate;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#tag ComputeManager#tag}
  */
  readonly tag?: ComputeManagerTag[] | cdktf.IResolvable;
}
export interface ComputeManagerCredentialSamlLogin {
  /**
  * Thumbprint of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#thumbprint ComputeManager#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * The saml token to login to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#token ComputeManager#token}
  */
  readonly token: string;
}

export function computeManagerCredentialSamlLoginToTerraform(struct?: ComputeManagerCredentialSamlLoginOutputReference | ComputeManagerCredentialSamlLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function computeManagerCredentialSamlLoginToHclTerraform(struct?: ComputeManagerCredentialSamlLoginOutputReference | ComputeManagerCredentialSamlLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeManagerCredentialSamlLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeManagerCredentialSamlLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeManagerCredentialSamlLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._thumbprint = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._thumbprint = value.thumbprint;
      this._token = value.token;
    }
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface ComputeManagerCredentialSessionLogin {
  /**
  * The session_id to login to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#session_id ComputeManager#session_id}
  */
  readonly sessionId: string;
  /**
  * Thumbprint of the login server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#thumbprint ComputeManager#thumbprint}
  */
  readonly thumbprint: string;
}

export function computeManagerCredentialSessionLoginToTerraform(struct?: ComputeManagerCredentialSessionLoginOutputReference | ComputeManagerCredentialSessionLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_id: cdktf.stringToTerraform(struct!.sessionId),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function computeManagerCredentialSessionLoginToHclTerraform(struct?: ComputeManagerCredentialSessionLoginOutputReference | ComputeManagerCredentialSessionLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_id: {
      value: cdktf.stringToHclTerraform(struct!.sessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeManagerCredentialSessionLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeManagerCredentialSessionLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionId = this._sessionId;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeManagerCredentialSessionLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionId = undefined;
      this._thumbprint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionId = value.sessionId;
      this._thumbprint = value.thumbprint;
    }
  }

  // session_id - computed: false, optional: false, required: true
  private _sessionId?: string; 
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }
  public set sessionId(value: string) {
    this._sessionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId;
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}
export interface ComputeManagerCredentialUsernamePasswordLogin {
  /**
  * The authentication password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#password ComputeManager#password}
  */
  readonly password: string;
  /**
  * Thumbprint of the login server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#thumbprint ComputeManager#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * The username for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#username ComputeManager#username}
  */
  readonly username: string;
}

export function computeManagerCredentialUsernamePasswordLoginToTerraform(struct?: ComputeManagerCredentialUsernamePasswordLoginOutputReference | ComputeManagerCredentialUsernamePasswordLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function computeManagerCredentialUsernamePasswordLoginToHclTerraform(struct?: ComputeManagerCredentialUsernamePasswordLoginOutputReference | ComputeManagerCredentialUsernamePasswordLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeManagerCredentialUsernamePasswordLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeManagerCredentialUsernamePasswordLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeManagerCredentialUsernamePasswordLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._thumbprint = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._thumbprint = value.thumbprint;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
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
export interface ComputeManagerCredentialVerifiableAsymmetricLogin {
  /**
  * Asymmetric login credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#asymmetric_credential ComputeManager#asymmetric_credential}
  */
  readonly asymmetricCredential: string;
  /**
  * Credential key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#credential_key ComputeManager#credential_key}
  */
  readonly credentialKey: string;
  /**
  * Credential verifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#credential_verifier ComputeManager#credential_verifier}
  */
  readonly credentialVerifier: string;
}

export function computeManagerCredentialVerifiableAsymmetricLoginToTerraform(struct?: ComputeManagerCredentialVerifiableAsymmetricLoginOutputReference | ComputeManagerCredentialVerifiableAsymmetricLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asymmetric_credential: cdktf.stringToTerraform(struct!.asymmetricCredential),
    credential_key: cdktf.stringToTerraform(struct!.credentialKey),
    credential_verifier: cdktf.stringToTerraform(struct!.credentialVerifier),
  }
}


export function computeManagerCredentialVerifiableAsymmetricLoginToHclTerraform(struct?: ComputeManagerCredentialVerifiableAsymmetricLoginOutputReference | ComputeManagerCredentialVerifiableAsymmetricLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asymmetric_credential: {
      value: cdktf.stringToHclTerraform(struct!.asymmetricCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_key: {
      value: cdktf.stringToHclTerraform(struct!.credentialKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_verifier: {
      value: cdktf.stringToHclTerraform(struct!.credentialVerifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeManagerCredentialVerifiableAsymmetricLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeManagerCredentialVerifiableAsymmetricLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asymmetricCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricCredential = this._asymmetricCredential;
    }
    if (this._credentialKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialKey = this._credentialKey;
    }
    if (this._credentialVerifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialVerifier = this._credentialVerifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeManagerCredentialVerifiableAsymmetricLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asymmetricCredential = undefined;
      this._credentialKey = undefined;
      this._credentialVerifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asymmetricCredential = value.asymmetricCredential;
      this._credentialKey = value.credentialKey;
      this._credentialVerifier = value.credentialVerifier;
    }
  }

  // asymmetric_credential - computed: false, optional: false, required: true
  private _asymmetricCredential?: string; 
  public get asymmetricCredential() {
    return this.getStringAttribute('asymmetric_credential');
  }
  public set asymmetricCredential(value: string) {
    this._asymmetricCredential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricCredentialInput() {
    return this._asymmetricCredential;
  }

  // credential_key - computed: false, optional: false, required: true
  private _credentialKey?: string; 
  public get credentialKey() {
    return this.getStringAttribute('credential_key');
  }
  public set credentialKey(value: string) {
    this._credentialKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialKeyInput() {
    return this._credentialKey;
  }

  // credential_verifier - computed: false, optional: false, required: true
  private _credentialVerifier?: string; 
  public get credentialVerifier() {
    return this.getStringAttribute('credential_verifier');
  }
  public set credentialVerifier(value: string) {
    this._credentialVerifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialVerifierInput() {
    return this._credentialVerifier;
  }
}
export interface ComputeManagerCredential {
  /**
  * saml_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#saml_login ComputeManager#saml_login}
  */
  readonly samlLogin?: ComputeManagerCredentialSamlLogin;
  /**
  * session_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#session_login ComputeManager#session_login}
  */
  readonly sessionLogin?: ComputeManagerCredentialSessionLogin;
  /**
  * username_password_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#username_password_login ComputeManager#username_password_login}
  */
  readonly usernamePasswordLogin?: ComputeManagerCredentialUsernamePasswordLogin;
  /**
  * verifiable_asymmetric_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#verifiable_asymmetric_login ComputeManager#verifiable_asymmetric_login}
  */
  readonly verifiableAsymmetricLogin?: ComputeManagerCredentialVerifiableAsymmetricLogin;
}

export function computeManagerCredentialToTerraform(struct?: ComputeManagerCredentialOutputReference | ComputeManagerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml_login: computeManagerCredentialSamlLoginToTerraform(struct!.samlLogin),
    session_login: computeManagerCredentialSessionLoginToTerraform(struct!.sessionLogin),
    username_password_login: computeManagerCredentialUsernamePasswordLoginToTerraform(struct!.usernamePasswordLogin),
    verifiable_asymmetric_login: computeManagerCredentialVerifiableAsymmetricLoginToTerraform(struct!.verifiableAsymmetricLogin),
  }
}


export function computeManagerCredentialToHclTerraform(struct?: ComputeManagerCredentialOutputReference | ComputeManagerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saml_login: {
      value: computeManagerCredentialSamlLoginToHclTerraform(struct!.samlLogin),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeManagerCredentialSamlLoginList",
    },
    session_login: {
      value: computeManagerCredentialSessionLoginToHclTerraform(struct!.sessionLogin),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeManagerCredentialSessionLoginList",
    },
    username_password_login: {
      value: computeManagerCredentialUsernamePasswordLoginToHclTerraform(struct!.usernamePasswordLogin),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeManagerCredentialUsernamePasswordLoginList",
    },
    verifiable_asymmetric_login: {
      value: computeManagerCredentialVerifiableAsymmetricLoginToHclTerraform(struct!.verifiableAsymmetricLogin),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeManagerCredentialVerifiableAsymmetricLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeManagerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeManagerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samlLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlLogin = this._samlLogin?.internalValue;
    }
    if (this._sessionLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLogin = this._sessionLogin?.internalValue;
    }
    if (this._usernamePasswordLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePasswordLogin = this._usernamePasswordLogin?.internalValue;
    }
    if (this._verifiableAsymmetricLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifiableAsymmetricLogin = this._verifiableAsymmetricLogin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeManagerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samlLogin.internalValue = undefined;
      this._sessionLogin.internalValue = undefined;
      this._usernamePasswordLogin.internalValue = undefined;
      this._verifiableAsymmetricLogin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samlLogin.internalValue = value.samlLogin;
      this._sessionLogin.internalValue = value.sessionLogin;
      this._usernamePasswordLogin.internalValue = value.usernamePasswordLogin;
      this._verifiableAsymmetricLogin.internalValue = value.verifiableAsymmetricLogin;
    }
  }

  // saml_login - computed: false, optional: true, required: false
  private _samlLogin = new ComputeManagerCredentialSamlLoginOutputReference(this, "saml_login");
  public get samlLogin() {
    return this._samlLogin;
  }
  public putSamlLogin(value: ComputeManagerCredentialSamlLogin) {
    this._samlLogin.internalValue = value;
  }
  public resetSamlLogin() {
    this._samlLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlLoginInput() {
    return this._samlLogin.internalValue;
  }

  // session_login - computed: false, optional: true, required: false
  private _sessionLogin = new ComputeManagerCredentialSessionLoginOutputReference(this, "session_login");
  public get sessionLogin() {
    return this._sessionLogin;
  }
  public putSessionLogin(value: ComputeManagerCredentialSessionLogin) {
    this._sessionLogin.internalValue = value;
  }
  public resetSessionLogin() {
    this._sessionLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLoginInput() {
    return this._sessionLogin.internalValue;
  }

  // username_password_login - computed: false, optional: true, required: false
  private _usernamePasswordLogin = new ComputeManagerCredentialUsernamePasswordLoginOutputReference(this, "username_password_login");
  public get usernamePasswordLogin() {
    return this._usernamePasswordLogin;
  }
  public putUsernamePasswordLogin(value: ComputeManagerCredentialUsernamePasswordLogin) {
    this._usernamePasswordLogin.internalValue = value;
  }
  public resetUsernamePasswordLogin() {
    this._usernamePasswordLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordLoginInput() {
    return this._usernamePasswordLogin.internalValue;
  }

  // verifiable_asymmetric_login - computed: false, optional: true, required: false
  private _verifiableAsymmetricLogin = new ComputeManagerCredentialVerifiableAsymmetricLoginOutputReference(this, "verifiable_asymmetric_login");
  public get verifiableAsymmetricLogin() {
    return this._verifiableAsymmetricLogin;
  }
  public putVerifiableAsymmetricLogin(value: ComputeManagerCredentialVerifiableAsymmetricLogin) {
    this._verifiableAsymmetricLogin.internalValue = value;
  }
  public resetVerifiableAsymmetricLogin() {
    this._verifiableAsymmetricLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiableAsymmetricLoginInput() {
    return this._verifiableAsymmetricLogin.internalValue;
  }
}
export interface ComputeManagerExtensionCertificate {
  /**
  * PEM encoded certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#pem_encoded ComputeManager#pem_encoded}
  */
  readonly pemEncoded: string;
  /**
  * Private key of certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#private_key ComputeManager#private_key}
  */
  readonly privateKey: string;
}

export function computeManagerExtensionCertificateToTerraform(struct?: ComputeManagerExtensionCertificateOutputReference | ComputeManagerExtensionCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pem_encoded: cdktf.stringToTerraform(struct!.pemEncoded),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function computeManagerExtensionCertificateToHclTerraform(struct?: ComputeManagerExtensionCertificateOutputReference | ComputeManagerExtensionCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pem_encoded: {
      value: cdktf.stringToHclTerraform(struct!.pemEncoded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeManagerExtensionCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeManagerExtensionCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemEncoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemEncoded = this._pemEncoded;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeManagerExtensionCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pemEncoded = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pemEncoded = value.pemEncoded;
      this._privateKey = value.privateKey;
    }
  }

  // pem_encoded - computed: false, optional: false, required: true
  private _pemEncoded?: string; 
  public get pemEncoded() {
    return this.getStringAttribute('pem_encoded');
  }
  public set pemEncoded(value: string) {
    this._pemEncoded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemEncodedInput() {
    return this._pemEncoded;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface ComputeManagerTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#scope ComputeManager#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#tag ComputeManager#tag}
  */
  readonly tag?: string;
}

export function computeManagerTagToTerraform(struct?: ComputeManagerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function computeManagerTagToHclTerraform(struct?: ComputeManagerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeManagerTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeManagerTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeManagerTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ComputeManagerTagList extends cdktf.ComplexList {
  public internalValue? : ComputeManagerTag[] | cdktf.IResolvable

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
  public get(index: number): ComputeManagerTagOutputReference {
    return new ComputeManagerTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager nsxt_compute_manager}
*/
export class ComputeManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_compute_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeManager to import
  * @param importFromId The id of the existing ComputeManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_compute_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/compute_manager nsxt_compute_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeManagerConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_compute_manager',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevelForOidc = config.accessLevelForOidc;
    this._createServiceAccount = config.createServiceAccount;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._multiNsx = config.multiNsx;
    this._originType = config.originType;
    this._reverseProxyHttpsPort = config.reverseProxyHttpsPort;
    this._server = config.server;
    this._setAsOidcProvider = config.setAsOidcProvider;
    this._credential.internalValue = config.credential;
    this._extensionCertificate.internalValue = config.extensionCertificate;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level_for_oidc - computed: false, optional: true, required: false
  private _accessLevelForOidc?: string; 
  public get accessLevelForOidc() {
    return this.getStringAttribute('access_level_for_oidc');
  }
  public set accessLevelForOidc(value: string) {
    this._accessLevelForOidc = value;
  }
  public resetAccessLevelForOidc() {
    this._accessLevelForOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelForOidcInput() {
    return this._accessLevelForOidc;
  }

  // create_service_account - computed: true, optional: true, required: false
  private _createServiceAccount?: boolean | cdktf.IResolvable; 
  public get createServiceAccount() {
    return this.getBooleanAttribute('create_service_account');
  }
  public set createServiceAccount(value: boolean | cdktf.IResolvable) {
    this._createServiceAccount = value;
  }
  public resetCreateServiceAccount() {
    this._createServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createServiceAccountInput() {
    return this._createServiceAccount;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // multi_nsx - computed: false, optional: true, required: false
  private _multiNsx?: boolean | cdktf.IResolvable; 
  public get multiNsx() {
    return this.getBooleanAttribute('multi_nsx');
  }
  public set multiNsx(value: boolean | cdktf.IResolvable) {
    this._multiNsx = value;
  }
  public resetMultiNsx() {
    this._multiNsx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiNsxInput() {
    return this._multiNsx;
  }

  // origin_type - computed: false, optional: true, required: false
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  public resetOriginType() {
    this._originType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // reverse_proxy_https_port - computed: false, optional: true, required: false
  private _reverseProxyHttpsPort?: number; 
  public get reverseProxyHttpsPort() {
    return this.getNumberAttribute('reverse_proxy_https_port');
  }
  public set reverseProxyHttpsPort(value: number) {
    this._reverseProxyHttpsPort = value;
  }
  public resetReverseProxyHttpsPort() {
    this._reverseProxyHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseProxyHttpsPortInput() {
    return this._reverseProxyHttpsPort;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // set_as_oidc_provider - computed: true, optional: true, required: false
  private _setAsOidcProvider?: boolean | cdktf.IResolvable; 
  public get setAsOidcProvider() {
    return this.getBooleanAttribute('set_as_oidc_provider');
  }
  public set setAsOidcProvider(value: boolean | cdktf.IResolvable) {
    this._setAsOidcProvider = value;
  }
  public resetSetAsOidcProvider() {
    this._setAsOidcProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsOidcProviderInput() {
    return this._setAsOidcProvider;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new ComputeManagerCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: ComputeManagerCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // extension_certificate - computed: false, optional: true, required: false
  private _extensionCertificate = new ComputeManagerExtensionCertificateOutputReference(this, "extension_certificate");
  public get extensionCertificate() {
    return this._extensionCertificate;
  }
  public putExtensionCertificate(value: ComputeManagerExtensionCertificate) {
    this._extensionCertificate.internalValue = value;
  }
  public resetExtensionCertificate() {
    this._extensionCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionCertificateInput() {
    return this._extensionCertificate.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ComputeManagerTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ComputeManagerTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level_for_oidc: cdktf.stringToTerraform(this._accessLevelForOidc),
      create_service_account: cdktf.booleanToTerraform(this._createServiceAccount),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      multi_nsx: cdktf.booleanToTerraform(this._multiNsx),
      origin_type: cdktf.stringToTerraform(this._originType),
      reverse_proxy_https_port: cdktf.numberToTerraform(this._reverseProxyHttpsPort),
      server: cdktf.stringToTerraform(this._server),
      set_as_oidc_provider: cdktf.booleanToTerraform(this._setAsOidcProvider),
      credential: computeManagerCredentialToTerraform(this._credential.internalValue),
      extension_certificate: computeManagerExtensionCertificateToTerraform(this._extensionCertificate.internalValue),
      tag: cdktf.listMapper(computeManagerTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level_for_oidc: {
        value: cdktf.stringToHclTerraform(this._accessLevelForOidc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_service_account: {
        value: cdktf.booleanToHclTerraform(this._createServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      multi_nsx: {
        value: cdktf.booleanToHclTerraform(this._multiNsx),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origin_type: {
        value: cdktf.stringToHclTerraform(this._originType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_proxy_https_port: {
        value: cdktf.numberToHclTerraform(this._reverseProxyHttpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_as_oidc_provider: {
        value: cdktf.booleanToHclTerraform(this._setAsOidcProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credential: {
        value: computeManagerCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeManagerCredentialList",
      },
      extension_certificate: {
        value: computeManagerExtensionCertificateToHclTerraform(this._extensionCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeManagerExtensionCertificateList",
      },
      tag: {
        value: cdktf.listMapperHcl(computeManagerTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeManagerTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
