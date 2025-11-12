// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDP account url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#account_url Idp#account_url}
  */
  readonly accountUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#api_cred_provided Idp#api_cred_provided}
  */
  readonly apiCredProvided: string;
  /**
  * Authentication type, e.g: oidc, saml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#auth_type Idp#auth_type}
  */
  readonly authType: string;
  /**
  * Identity provider, choose among okta, azure_ad, one_login, ping-one, ping-federate, google, other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#idp_account Idp#idp_account}
  */
  readonly idpAccount: string;
  /**
  * IDP type, e.g: primary, partner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#select_type Idp#select_type}
  */
  readonly selectType: string;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#oidc Idp#oidc}
  */
  readonly oidc?: IdpOidc;
  /**
  * partner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#partner Idp#partner}
  */
  readonly partner?: IdpPartner;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#saml Idp#saml}
  */
  readonly saml?: IdpSaml;
}
export interface IdpOidc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#admin_email Idp#admin_email}
  */
  readonly adminEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#api_client_id Idp#api_client_id}
  */
  readonly apiClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#api_secret_id Idp#api_secret_id}
  */
  readonly apiSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#api_token Idp#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#client_id Idp#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#customer_id Idp#customer_id}
  */
  readonly customerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#domain Idp#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#env_id Idp#env_id}
  */
  readonly envId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#file_path Idp#file_path}
  */
  readonly filePath?: string;
  /**
  * Choose between eu, asia, us, default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#region Idp#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#secret_id Idp#secret_id}
  */
  readonly secretId?: string;
}

export function idpOidcToTerraform(struct?: IdpOidcOutputReference | IdpOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    api_client_id: cdktf.stringToTerraform(struct!.apiClientId),
    api_secret_id: cdktf.stringToTerraform(struct!.apiSecretId),
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    customer_id: cdktf.stringToTerraform(struct!.customerId),
    domain: cdktf.stringToTerraform(struct!.domain),
    env_id: cdktf.stringToTerraform(struct!.envId),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    region: cdktf.stringToTerraform(struct!.region),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


export function idpOidcToHclTerraform(struct?: IdpOidcOutputReference | IdpOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_client_id: {
      value: cdktf.stringToHclTerraform(struct!.apiClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.apiSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
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
    customer_id: {
      value: cdktf.stringToHclTerraform(struct!.customerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_id: {
      value: cdktf.stringToHclTerraform(struct!.envId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdpOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._apiClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiClientId = this._apiClientId;
    }
    if (this._apiSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecretId = this._apiSecretId;
    }
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._customerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerId = this._customerId;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._envId !== undefined) {
      hasAnyValues = true;
      internalValueResult.envId = this._envId;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmail = undefined;
      this._apiClientId = undefined;
      this._apiSecretId = undefined;
      this._apiToken = undefined;
      this._clientId = undefined;
      this._customerId = undefined;
      this._domain = undefined;
      this._envId = undefined;
      this._filePath = undefined;
      this._region = undefined;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmail = value.adminEmail;
      this._apiClientId = value.apiClientId;
      this._apiSecretId = value.apiSecretId;
      this._apiToken = value.apiToken;
      this._clientId = value.clientId;
      this._customerId = value.customerId;
      this._domain = value.domain;
      this._envId = value.envId;
      this._filePath = value.filePath;
      this._region = value.region;
      this._secretId = value.secretId;
    }
  }

  // admin_email - computed: false, optional: true, required: false
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  public resetAdminEmail() {
    this._adminEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // api_client_id - computed: false, optional: true, required: false
  private _apiClientId?: string; 
  public get apiClientId() {
    return this.getStringAttribute('api_client_id');
  }
  public set apiClientId(value: string) {
    this._apiClientId = value;
  }
  public resetApiClientId() {
    this._apiClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiClientIdInput() {
    return this._apiClientId;
  }

  // api_file - computed: true, optional: false, required: false
  public get apiFile() {
    return this.getStringAttribute('api_file');
  }

  // api_secret_id - computed: false, optional: true, required: false
  private _apiSecretId?: string; 
  public get apiSecretId() {
    return this.getStringAttribute('api_secret_id');
  }
  public set apiSecretId(value: string) {
    this._apiSecretId = value;
  }
  public resetApiSecretId() {
    this._apiSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretIdInput() {
    return this._apiSecretId;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
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

  // env_id - computed: false, optional: true, required: false
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  public resetEnvId() {
    this._envId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
}
export interface IdpPartner {
  /**
  * List of apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#apps Idp#apps}
  */
  readonly apps: string[];
  /**
  * List of partner domain urls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#user_domain Idp#user_domain}
  */
  readonly userDomain: string[];
}

export function idpPartnerToTerraform(struct?: IdpPartnerOutputReference | IdpPartner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apps),
    user_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userDomain),
  }
}


export function idpPartnerToHclTerraform(struct?: IdpPartnerOutputReference | IdpPartner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userDomain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpPartnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdpPartner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apps !== undefined) {
      hasAnyValues = true;
      internalValueResult.apps = this._apps;
    }
    if (this._userDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDomain = this._userDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpPartner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apps = undefined;
      this._userDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apps = value.apps;
      this._userDomain = value.userDomain;
    }
  }

  // apps - computed: false, optional: false, required: true
  private _apps?: string[]; 
  public get apps() {
    return this.getListAttribute('apps');
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // user_domain - computed: false, optional: false, required: true
  private _userDomain?: string[]; 
  public get userDomain() {
    return this.getListAttribute('user_domain');
  }
  public set userDomain(value: string[]) {
    this._userDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainInput() {
    return this._userDomain;
  }
}
export interface IdpSaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#admin_email Idp#admin_email}
  */
  readonly adminEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#api_client_id Idp#api_client_id}
  */
  readonly apiClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#api_secret_id Idp#api_secret_id}
  */
  readonly apiSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#api_token Idp#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#customer_id Idp#customer_id}
  */
  readonly customerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#domain Idp#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#env_id Idp#env_id}
  */
  readonly envId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#file_path Idp#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#metadata Idp#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#metadata_url Idp#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * Choose between eu, asia, us, default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#region Idp#region}
  */
  readonly region?: string;
}

export function idpSamlToTerraform(struct?: IdpSamlOutputReference | IdpSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    api_client_id: cdktf.stringToTerraform(struct!.apiClientId),
    api_secret_id: cdktf.stringToTerraform(struct!.apiSecretId),
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    customer_id: cdktf.stringToTerraform(struct!.customerId),
    domain: cdktf.stringToTerraform(struct!.domain),
    env_id: cdktf.stringToTerraform(struct!.envId),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    metadata_url: cdktf.stringToTerraform(struct!.metadataUrl),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function idpSamlToHclTerraform(struct?: IdpSamlOutputReference | IdpSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_client_id: {
      value: cdktf.stringToHclTerraform(struct!.apiClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.apiSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_id: {
      value: cdktf.stringToHclTerraform(struct!.customerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_id: {
      value: cdktf.stringToHclTerraform(struct!.envId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.metadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdpSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._apiClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiClientId = this._apiClientId;
    }
    if (this._apiSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecretId = this._apiSecretId;
    }
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._customerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerId = this._customerId;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._envId !== undefined) {
      hasAnyValues = true;
      internalValueResult.envId = this._envId;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataUrl = this._metadataUrl;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmail = undefined;
      this._apiClientId = undefined;
      this._apiSecretId = undefined;
      this._apiToken = undefined;
      this._customerId = undefined;
      this._domain = undefined;
      this._envId = undefined;
      this._filePath = undefined;
      this._metadata = undefined;
      this._metadataUrl = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmail = value.adminEmail;
      this._apiClientId = value.apiClientId;
      this._apiSecretId = value.apiSecretId;
      this._apiToken = value.apiToken;
      this._customerId = value.customerId;
      this._domain = value.domain;
      this._envId = value.envId;
      this._filePath = value.filePath;
      this._metadata = value.metadata;
      this._metadataUrl = value.metadataUrl;
      this._region = value.region;
    }
  }

  // admin_email - computed: false, optional: true, required: false
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  public resetAdminEmail() {
    this._adminEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // api_client_id - computed: false, optional: true, required: false
  private _apiClientId?: string; 
  public get apiClientId() {
    return this.getStringAttribute('api_client_id');
  }
  public set apiClientId(value: string) {
    this._apiClientId = value;
  }
  public resetApiClientId() {
    this._apiClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiClientIdInput() {
    return this._apiClientId;
  }

  // api_file - computed: true, optional: false, required: false
  public get apiFile() {
    return this.getStringAttribute('api_file');
  }

  // api_secret_id - computed: false, optional: true, required: false
  private _apiSecretId?: string; 
  public get apiSecretId() {
    return this.getStringAttribute('api_secret_id');
  }
  public set apiSecretId(value: string) {
    this._apiSecretId = value;
  }
  public resetApiSecretId() {
    this._apiSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretIdInput() {
    return this._apiSecretId;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
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

  // env_id - computed: false, optional: true, required: false
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  public resetEnvId() {
    this._envId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_url - computed: false, optional: true, required: false
  private _metadataUrl?: string; 
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }
  public resetMetadataUrl() {
    this._metadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp prosimo_idp}
*/
export class Idp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_idp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Idp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Idp to import
  * @param importFromId The id of the existing Idp that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Idp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_idp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/idp prosimo_idp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpConfig
  */
  public constructor(scope: Construct, id: string, config: IdpConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_idp',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUrl = config.accountUrl;
    this._apiCredProvided = config.apiCredProvided;
    this._authType = config.authType;
    this._idpAccount = config.idpAccount;
    this._selectType = config.selectType;
    this._oidc.internalValue = config.oidc;
    this._partner.internalValue = config.partner;
    this._saml.internalValue = config.saml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_url - computed: false, optional: false, required: true
  private _accountUrl?: string; 
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }
  public set accountUrl(value: string) {
    this._accountUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUrlInput() {
    return this._accountUrl;
  }

  // api_cred_provided - computed: false, optional: false, required: true
  private _apiCredProvided?: string; 
  public get apiCredProvided() {
    return this.getStringAttribute('api_cred_provided');
  }
  public set apiCredProvided(value: string) {
    this._apiCredProvided = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCredProvidedInput() {
    return this._apiCredProvided;
  }

  // api_creds_file_name - computed: true, optional: false, required: false
  public get apiCredsFileName() {
    return this.getBooleanAttribute('api_creds_file_name');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_account - computed: false, optional: false, required: true
  private _idpAccount?: string; 
  public get idpAccount() {
    return this.getStringAttribute('idp_account');
  }
  public set idpAccount(value: string) {
    this._idpAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpAccountInput() {
    return this._idpAccount;
  }

  // is_file_updated - computed: true, optional: false, required: false
  public get isFileUpdated() {
    return this.getBooleanAttribute('is_file_updated');
  }

  // select_type - computed: false, optional: false, required: true
  private _selectType?: string; 
  public get selectType() {
    return this.getStringAttribute('select_type');
  }
  public set selectType(value: string) {
    this._selectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectTypeInput() {
    return this._selectType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new IdpOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: IdpOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // partner - computed: false, optional: true, required: false
  private _partner = new IdpPartnerOutputReference(this, "partner");
  public get partner() {
    return this._partner;
  }
  public putPartner(value: IdpPartner) {
    this._partner.internalValue = value;
  }
  public resetPartner() {
    this._partner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerInput() {
    return this._partner.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new IdpSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: IdpSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_url: cdktf.stringToTerraform(this._accountUrl),
      api_cred_provided: cdktf.stringToTerraform(this._apiCredProvided),
      auth_type: cdktf.stringToTerraform(this._authType),
      idp_account: cdktf.stringToTerraform(this._idpAccount),
      select_type: cdktf.stringToTerraform(this._selectType),
      oidc: idpOidcToTerraform(this._oidc.internalValue),
      partner: idpPartnerToTerraform(this._partner.internalValue),
      saml: idpSamlToTerraform(this._saml.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_url: {
        value: cdktf.stringToHclTerraform(this._accountUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_cred_provided: {
        value: cdktf.stringToHclTerraform(this._apiCredProvided),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_account: {
        value: cdktf.stringToHclTerraform(this._idpAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      select_type: {
        value: cdktf.stringToHclTerraform(this._selectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc: {
        value: idpOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdpOidcList",
      },
      partner: {
        value: idpPartnerToHclTerraform(this._partner.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdpPartnerList",
      },
      saml: {
        value: idpSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdpSamlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
