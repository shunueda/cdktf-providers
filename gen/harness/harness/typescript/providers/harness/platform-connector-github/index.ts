// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the connection we're making is to a github repository or a github account. Valid values are Account, Repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#connection_type PlatformConnectorGithub#connection_type}
  */
  readonly connectionType: string;
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#delegate_selectors PlatformConnectorGithub#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#description PlatformConnectorGithub#description}
  */
  readonly description?: string;
  /**
  * Execute on delegate or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#execute_on_delegate PlatformConnectorGithub#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Enable this flag for force deletion of service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#force_delete PlatformConnectorGithub#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#id PlatformConnectorGithub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#identifier PlatformConnectorGithub#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#name PlatformConnectorGithub#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#org_id PlatformConnectorGithub#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#project_id PlatformConnectorGithub#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#tags PlatformConnectorGithub#tags}
  */
  readonly tags?: string[];
  /**
  * URL of the Github repository or account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#url PlatformConnectorGithub#url}
  */
  readonly url: string;
  /**
  * Repository to test the connection with. This is only used when `connection_type` is `Account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#validation_repo PlatformConnectorGithub#validation_repo}
  */
  readonly validationRepo?: string;
  /**
  * api_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#api_authentication PlatformConnectorGithub#api_authentication}
  */
  readonly apiAuthentication?: PlatformConnectorGithubApiAuthentication;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#credentials PlatformConnectorGithub#credentials}
  */
  readonly credentials: PlatformConnectorGithubCredentials;
}
export interface PlatformConnectorGithubApiAuthenticationGithubApp {
  /**
  * Enter the GitHub App ID from the GitHub App General tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#application_id PlatformConnectorGithub#application_id}
  */
  readonly applicationId?: string;
  /**
  * Reference to the secret containing application id To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#application_id_ref PlatformConnectorGithub#application_id_ref}
  */
  readonly applicationIdRef?: string;
  /**
  * Enter the Installation ID located in the URL of the installed GitHub App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#installation_id PlatformConnectorGithub#installation_id}
  */
  readonly installationId?: string;
  /**
  * Reference to the secret containing installation id. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#installation_id_ref PlatformConnectorGithub#installation_id_ref}
  */
  readonly installationIdRef?: string;
  /**
  * Reference to the secret containing the private key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#private_key_ref PlatformConnectorGithub#private_key_ref}
  */
  readonly privateKeyRef: string;
}

export function platformConnectorGithubApiAuthenticationGithubAppToTerraform(struct?: PlatformConnectorGithubApiAuthenticationGithubAppOutputReference | PlatformConnectorGithubApiAuthenticationGithubApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    application_id_ref: cdktf.stringToTerraform(struct!.applicationIdRef),
    installation_id: cdktf.stringToTerraform(struct!.installationId),
    installation_id_ref: cdktf.stringToTerraform(struct!.installationIdRef),
    private_key_ref: cdktf.stringToTerraform(struct!.privateKeyRef),
  }
}


export function platformConnectorGithubApiAuthenticationGithubAppToHclTerraform(struct?: PlatformConnectorGithubApiAuthenticationGithubAppOutputReference | PlatformConnectorGithubApiAuthenticationGithubApp): any {
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
    application_id_ref: {
      value: cdktf.stringToHclTerraform(struct!.applicationIdRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    installation_id: {
      value: cdktf.stringToHclTerraform(struct!.installationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    installation_id_ref: {
      value: cdktf.stringToHclTerraform(struct!.installationIdRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGithubApiAuthenticationGithubAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGithubApiAuthenticationGithubApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._applicationIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationIdRef = this._applicationIdRef;
    }
    if (this._installationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationId = this._installationId;
    }
    if (this._installationIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationIdRef = this._installationIdRef;
    }
    if (this._privateKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyRef = this._privateKeyRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGithubApiAuthenticationGithubApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._applicationIdRef = undefined;
      this._installationId = undefined;
      this._installationIdRef = undefined;
      this._privateKeyRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._applicationIdRef = value.applicationIdRef;
      this._installationId = value.installationId;
      this._installationIdRef = value.installationIdRef;
      this._privateKeyRef = value.privateKeyRef;
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

  // application_id_ref - computed: false, optional: true, required: false
  private _applicationIdRef?: string; 
  public get applicationIdRef() {
    return this.getStringAttribute('application_id_ref');
  }
  public set applicationIdRef(value: string) {
    this._applicationIdRef = value;
  }
  public resetApplicationIdRef() {
    this._applicationIdRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdRefInput() {
    return this._applicationIdRef;
  }

  // installation_id - computed: false, optional: true, required: false
  private _installationId?: string; 
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }
  public set installationId(value: string) {
    this._installationId = value;
  }
  public resetInstallationId() {
    this._installationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
  }

  // installation_id_ref - computed: false, optional: true, required: false
  private _installationIdRef?: string; 
  public get installationIdRef() {
    return this.getStringAttribute('installation_id_ref');
  }
  public set installationIdRef(value: string) {
    this._installationIdRef = value;
  }
  public resetInstallationIdRef() {
    this._installationIdRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdRefInput() {
    return this._installationIdRef;
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
}
export interface PlatformConnectorGithubApiAuthentication {
  /**
  * Personal access token for interacting with the github api. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#token_ref PlatformConnectorGithub#token_ref}
  */
  readonly tokenRef?: string;
  /**
  * github_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#github_app PlatformConnectorGithub#github_app}
  */
  readonly githubApp?: PlatformConnectorGithubApiAuthenticationGithubApp;
}

export function platformConnectorGithubApiAuthenticationToTerraform(struct?: PlatformConnectorGithubApiAuthenticationOutputReference | PlatformConnectorGithubApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_ref: cdktf.stringToTerraform(struct!.tokenRef),
    github_app: platformConnectorGithubApiAuthenticationGithubAppToTerraform(struct!.githubApp),
  }
}


export function platformConnectorGithubApiAuthenticationToHclTerraform(struct?: PlatformConnectorGithubApiAuthenticationOutputReference | PlatformConnectorGithubApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_ref: {
      value: cdktf.stringToHclTerraform(struct!.tokenRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app: {
      value: platformConnectorGithubApiAuthenticationGithubAppToHclTerraform(struct!.githubApp),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorGithubApiAuthenticationGithubAppList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGithubApiAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGithubApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef;
    }
    if (this._githubApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubApp = this._githubApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGithubApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenRef = undefined;
      this._githubApp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenRef = value.tokenRef;
      this._githubApp.internalValue = value.githubApp;
    }
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef?: string; 
  public get tokenRef() {
    return this.getStringAttribute('token_ref');
  }
  public set tokenRef(value: string) {
    this._tokenRef = value;
  }
  public resetTokenRef() {
    this._tokenRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef;
  }

  // github_app - computed: false, optional: true, required: false
  private _githubApp = new PlatformConnectorGithubApiAuthenticationGithubAppOutputReference(this, "github_app");
  public get githubApp() {
    return this._githubApp;
  }
  public putGithubApp(value: PlatformConnectorGithubApiAuthenticationGithubApp) {
    this._githubApp.internalValue = value;
  }
  public resetGithubApp() {
    this._githubApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInput() {
    return this._githubApp.internalValue;
  }
}
export interface PlatformConnectorGithubCredentialsHttpAnonymous {
}

export function platformConnectorGithubCredentialsHttpAnonymousToTerraform(struct?: PlatformConnectorGithubCredentialsHttpAnonymous | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function platformConnectorGithubCredentialsHttpAnonymousToHclTerraform(struct?: PlatformConnectorGithubCredentialsHttpAnonymous | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PlatformConnectorGithubCredentialsHttpAnonymousOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformConnectorGithubCredentialsHttpAnonymous | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGithubCredentialsHttpAnonymous | cdktf.IResolvable | undefined) {
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

export class PlatformConnectorGithubCredentialsHttpAnonymousList extends cdktf.ComplexList {
  public internalValue? : PlatformConnectorGithubCredentialsHttpAnonymous[] | cdktf.IResolvable

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
  public get(index: number): PlatformConnectorGithubCredentialsHttpAnonymousOutputReference {
    return new PlatformConnectorGithubCredentialsHttpAnonymousOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformConnectorGithubCredentialsHttpGithubApp {
  /**
  * Enter the GitHub App ID from the GitHub App General tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#application_id PlatformConnectorGithub#application_id}
  */
  readonly applicationId?: string;
  /**
  * Reference to the secret containing application id To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#application_id_ref PlatformConnectorGithub#application_id_ref}
  */
  readonly applicationIdRef?: string;
  /**
  * Enter the Installation ID located in the URL of the installed GitHub App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#installation_id PlatformConnectorGithub#installation_id}
  */
  readonly installationId?: string;
  /**
  * Reference to the secret containing installation id. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#installation_id_ref PlatformConnectorGithub#installation_id_ref}
  */
  readonly installationIdRef?: string;
  /**
  * Reference to the secret containing the private key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#private_key_ref PlatformConnectorGithub#private_key_ref}
  */
  readonly privateKeyRef: string;
}

export function platformConnectorGithubCredentialsHttpGithubAppToTerraform(struct?: PlatformConnectorGithubCredentialsHttpGithubAppOutputReference | PlatformConnectorGithubCredentialsHttpGithubApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    application_id_ref: cdktf.stringToTerraform(struct!.applicationIdRef),
    installation_id: cdktf.stringToTerraform(struct!.installationId),
    installation_id_ref: cdktf.stringToTerraform(struct!.installationIdRef),
    private_key_ref: cdktf.stringToTerraform(struct!.privateKeyRef),
  }
}


export function platformConnectorGithubCredentialsHttpGithubAppToHclTerraform(struct?: PlatformConnectorGithubCredentialsHttpGithubAppOutputReference | PlatformConnectorGithubCredentialsHttpGithubApp): any {
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
    application_id_ref: {
      value: cdktf.stringToHclTerraform(struct!.applicationIdRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    installation_id: {
      value: cdktf.stringToHclTerraform(struct!.installationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    installation_id_ref: {
      value: cdktf.stringToHclTerraform(struct!.installationIdRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGithubCredentialsHttpGithubAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGithubCredentialsHttpGithubApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._applicationIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationIdRef = this._applicationIdRef;
    }
    if (this._installationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationId = this._installationId;
    }
    if (this._installationIdRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationIdRef = this._installationIdRef;
    }
    if (this._privateKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyRef = this._privateKeyRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGithubCredentialsHttpGithubApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._applicationIdRef = undefined;
      this._installationId = undefined;
      this._installationIdRef = undefined;
      this._privateKeyRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._applicationIdRef = value.applicationIdRef;
      this._installationId = value.installationId;
      this._installationIdRef = value.installationIdRef;
      this._privateKeyRef = value.privateKeyRef;
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

  // application_id_ref - computed: false, optional: true, required: false
  private _applicationIdRef?: string; 
  public get applicationIdRef() {
    return this.getStringAttribute('application_id_ref');
  }
  public set applicationIdRef(value: string) {
    this._applicationIdRef = value;
  }
  public resetApplicationIdRef() {
    this._applicationIdRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdRefInput() {
    return this._applicationIdRef;
  }

  // installation_id - computed: false, optional: true, required: false
  private _installationId?: string; 
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }
  public set installationId(value: string) {
    this._installationId = value;
  }
  public resetInstallationId() {
    this._installationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
  }

  // installation_id_ref - computed: false, optional: true, required: false
  private _installationIdRef?: string; 
  public get installationIdRef() {
    return this.getStringAttribute('installation_id_ref');
  }
  public set installationIdRef(value: string) {
    this._installationIdRef = value;
  }
  public resetInstallationIdRef() {
    this._installationIdRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdRefInput() {
    return this._installationIdRef;
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
}
export interface PlatformConnectorGithubCredentialsHttp {
  /**
  * Reference to a secret containing the personal access to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#token_ref PlatformConnectorGithub#token_ref}
  */
  readonly tokenRef?: string;
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#username PlatformConnectorGithub#username}
  */
  readonly username?: string;
  /**
  * Reference to a secret containing the username to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#username_ref PlatformConnectorGithub#username_ref}
  */
  readonly usernameRef?: string;
  /**
  * anonymous block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#anonymous PlatformConnectorGithub#anonymous}
  */
  readonly anonymous?: PlatformConnectorGithubCredentialsHttpAnonymous[] | cdktf.IResolvable;
  /**
  * github_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#github_app PlatformConnectorGithub#github_app}
  */
  readonly githubApp?: PlatformConnectorGithubCredentialsHttpGithubApp;
}

export function platformConnectorGithubCredentialsHttpToTerraform(struct?: PlatformConnectorGithubCredentialsHttpOutputReference | PlatformConnectorGithubCredentialsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_ref: cdktf.stringToTerraform(struct!.tokenRef),
    username: cdktf.stringToTerraform(struct!.username),
    username_ref: cdktf.stringToTerraform(struct!.usernameRef),
    anonymous: cdktf.listMapper(platformConnectorGithubCredentialsHttpAnonymousToTerraform, true)(struct!.anonymous),
    github_app: platformConnectorGithubCredentialsHttpGithubAppToTerraform(struct!.githubApp),
  }
}


export function platformConnectorGithubCredentialsHttpToHclTerraform(struct?: PlatformConnectorGithubCredentialsHttpOutputReference | PlatformConnectorGithubCredentialsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_ref: {
      value: cdktf.stringToHclTerraform(struct!.tokenRef),
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
    anonymous: {
      value: cdktf.listMapperHcl(platformConnectorGithubCredentialsHttpAnonymousToHclTerraform, true)(struct!.anonymous),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorGithubCredentialsHttpAnonymousList",
    },
    github_app: {
      value: platformConnectorGithubCredentialsHttpGithubAppToHclTerraform(struct!.githubApp),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorGithubCredentialsHttpGithubAppList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGithubCredentialsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGithubCredentialsHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameRef = this._usernameRef;
    }
    if (this._anonymous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous?.internalValue;
    }
    if (this._githubApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubApp = this._githubApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGithubCredentialsHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenRef = undefined;
      this._username = undefined;
      this._usernameRef = undefined;
      this._anonymous.internalValue = undefined;
      this._githubApp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenRef = value.tokenRef;
      this._username = value.username;
      this._usernameRef = value.usernameRef;
      this._anonymous.internalValue = value.anonymous;
      this._githubApp.internalValue = value.githubApp;
    }
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef?: string; 
  public get tokenRef() {
    return this.getStringAttribute('token_ref');
  }
  public set tokenRef(value: string) {
    this._tokenRef = value;
  }
  public resetTokenRef() {
    this._tokenRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef;
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

  // anonymous - computed: false, optional: true, required: false
  private _anonymous = new PlatformConnectorGithubCredentialsHttpAnonymousList(this, "anonymous", false);
  public get anonymous() {
    return this._anonymous;
  }
  public putAnonymous(value: PlatformConnectorGithubCredentialsHttpAnonymous[] | cdktf.IResolvable) {
    this._anonymous.internalValue = value;
  }
  public resetAnonymous() {
    this._anonymous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous.internalValue;
  }

  // github_app - computed: false, optional: true, required: false
  private _githubApp = new PlatformConnectorGithubCredentialsHttpGithubAppOutputReference(this, "github_app");
  public get githubApp() {
    return this._githubApp;
  }
  public putGithubApp(value: PlatformConnectorGithubCredentialsHttpGithubApp) {
    this._githubApp.internalValue = value;
  }
  public resetGithubApp() {
    this._githubApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInput() {
    return this._githubApp.internalValue;
  }
}
export interface PlatformConnectorGithubCredentialsSsh {
  /**
  * Reference to the Harness secret containing the ssh key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#ssh_key_ref PlatformConnectorGithub#ssh_key_ref}
  */
  readonly sshKeyRef: string;
}

export function platformConnectorGithubCredentialsSshToTerraform(struct?: PlatformConnectorGithubCredentialsSshOutputReference | PlatformConnectorGithubCredentialsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key_ref: cdktf.stringToTerraform(struct!.sshKeyRef),
  }
}


export function platformConnectorGithubCredentialsSshToHclTerraform(struct?: PlatformConnectorGithubCredentialsSshOutputReference | PlatformConnectorGithubCredentialsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGithubCredentialsSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGithubCredentialsSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyRef = this._sshKeyRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGithubCredentialsSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sshKeyRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sshKeyRef = value.sshKeyRef;
    }
  }

  // ssh_key_ref - computed: false, optional: false, required: true
  private _sshKeyRef?: string; 
  public get sshKeyRef() {
    return this.getStringAttribute('ssh_key_ref');
  }
  public set sshKeyRef(value: string) {
    this._sshKeyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyRefInput() {
    return this._sshKeyRef;
  }
}
export interface PlatformConnectorGithubCredentials {
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#http PlatformConnectorGithub#http}
  */
  readonly http?: PlatformConnectorGithubCredentialsHttp;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#ssh PlatformConnectorGithub#ssh}
  */
  readonly ssh?: PlatformConnectorGithubCredentialsSsh;
}

export function platformConnectorGithubCredentialsToTerraform(struct?: PlatformConnectorGithubCredentialsOutputReference | PlatformConnectorGithubCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: platformConnectorGithubCredentialsHttpToTerraform(struct!.http),
    ssh: platformConnectorGithubCredentialsSshToTerraform(struct!.ssh),
  }
}


export function platformConnectorGithubCredentialsToHclTerraform(struct?: PlatformConnectorGithubCredentialsOutputReference | PlatformConnectorGithubCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: platformConnectorGithubCredentialsHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorGithubCredentialsHttpList",
    },
    ssh: {
      value: platformConnectorGithubCredentialsSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorGithubCredentialsSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGithubCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGithubCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGithubCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._http.internalValue = undefined;
      this._ssh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._http.internalValue = value.http;
      this._ssh.internalValue = value.ssh;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new PlatformConnectorGithubCredentialsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: PlatformConnectorGithubCredentialsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new PlatformConnectorGithubCredentialsSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: PlatformConnectorGithubCredentialsSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github harness_platform_connector_github}
*/
export class PlatformConnectorGithub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorGithub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorGithub to import
  * @param importFromId The id of the existing PlatformConnectorGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorGithub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_github harness_platform_connector_github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorGithubConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_github',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionType = config.connectionType;
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._url = config.url;
    this._validationRepo = config.validationRepo;
    this._apiAuthentication.internalValue = config.apiAuthentication;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

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

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // validation_repo - computed: false, optional: true, required: false
  private _validationRepo?: string; 
  public get validationRepo() {
    return this.getStringAttribute('validation_repo');
  }
  public set validationRepo(value: string) {
    this._validationRepo = value;
  }
  public resetValidationRepo() {
    this._validationRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRepoInput() {
    return this._validationRepo;
  }

  // api_authentication - computed: false, optional: true, required: false
  private _apiAuthentication = new PlatformConnectorGithubApiAuthenticationOutputReference(this, "api_authentication");
  public get apiAuthentication() {
    return this._apiAuthentication;
  }
  public putApiAuthentication(value: PlatformConnectorGithubApiAuthentication) {
    this._apiAuthentication.internalValue = value;
  }
  public resetApiAuthentication() {
    this._apiAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthenticationInput() {
    return this._apiAuthentication.internalValue;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PlatformConnectorGithubCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PlatformConnectorGithubCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_type: cdktf.stringToTerraform(this._connectionType),
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      validation_repo: cdktf.stringToTerraform(this._validationRepo),
      api_authentication: platformConnectorGithubApiAuthenticationToTerraform(this._apiAuthentication.internalValue),
      credentials: platformConnectorGithubCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      execute_on_delegate: {
        value: cdktf.booleanToHclTerraform(this._executeOnDelegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_repo: {
        value: cdktf.stringToHclTerraform(this._validationRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_authentication: {
        value: platformConnectorGithubApiAuthenticationToHclTerraform(this._apiAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGithubApiAuthenticationList",
      },
      credentials: {
        value: platformConnectorGithubCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGithubCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
