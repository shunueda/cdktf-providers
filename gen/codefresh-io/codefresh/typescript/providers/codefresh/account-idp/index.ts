// https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountIdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for the IDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#display_name AccountIdp#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#id AccountIdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the IDP, will be generated if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#name AccountIdp#name}
  */
  readonly name?: string;
  /**
  * auth0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#auth0 AccountIdp#auth0}
  */
  readonly auth0?: AccountIdpAuth0;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#azure AccountIdp#azure}
  */
  readonly azure?: AccountIdpAzure;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#github AccountIdp#github}
  */
  readonly github?: AccountIdpGithub;
  /**
  * gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#gitlab AccountIdp#gitlab}
  */
  readonly gitlab?: AccountIdpGitlab;
  /**
  * google block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#google AccountIdp#google}
  */
  readonly google?: AccountIdpGoogle;
  /**
  * keycloak block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#keycloak AccountIdp#keycloak}
  */
  readonly keycloak?: AccountIdpKeycloak;
  /**
  * ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#ldap AccountIdp#ldap}
  */
  readonly ldap?: AccountIdpLdap;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#okta AccountIdp#okta}
  */
  readonly okta?: AccountIdpOkta;
  /**
  * onelogin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#onelogin AccountIdp#onelogin}
  */
  readonly onelogin?: AccountIdpOnelogin;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#saml AccountIdp#saml}
  */
  readonly saml?: AccountIdpSaml;
}
export interface AccountIdpAuth0 {
  /**
  * Client ID from Auth0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_id AccountIdp#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from Auth0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_secret AccountIdp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The domain of the Auth0 application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#domain AccountIdp#domain}
  */
  readonly domain: string;
}

export function accountIdpAuth0ToTerraform(struct?: AccountIdpAuth0OutputReference | AccountIdpAuth0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function accountIdpAuth0ToHclTerraform(struct?: AccountIdpAuth0OutputReference | AccountIdpAuth0): any {
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
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpAuth0OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpAuth0 | undefined {
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
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpAuth0 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._domain = value.domain;
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface AccountIdpAzure {
  /**
  * The Application ID from your Enterprise Application Properties in Azure AD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#app_id AccountIdp#app_id}
  */
  readonly appId: string;
  /**
  * Set to true to sync user accounts in Azure AD to your Codefresh account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#autosync_teams_and_users AccountIdp#autosync_teams_and_users}
  */
  readonly autosyncTeamsAndUsers?: boolean | cdktf.IResolvable;
  /**
  * Client secret from Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_secret AccountIdp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The Object ID from your Enterprise Application Properties in Azure AD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#object_id AccountIdp#object_id}
  */
  readonly objectId?: string;
  /**
  * Sync interval in hours for syncing user accounts in Azure AD to your Codefresh account. If not set the sync inteval will be 12 hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#sync_interval AccountIdp#sync_interval}
  */
  readonly syncInterval?: number;
  /**
  * Azure tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#tenant AccountIdp#tenant}
  */
  readonly tenant?: string;
}

export function accountIdpAzureToTerraform(struct?: AccountIdpAzureOutputReference | AccountIdpAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    autosync_teams_and_users: cdktf.booleanToTerraform(struct!.autosyncTeamsAndUsers),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    sync_interval: cdktf.numberToTerraform(struct!.syncInterval),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function accountIdpAzureToHclTerraform(struct?: AccountIdpAzureOutputReference | AccountIdpAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autosync_teams_and_users: {
      value: cdktf.booleanToHclTerraform(struct!.autosyncTeamsAndUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_interval: {
      value: cdktf.numberToHclTerraform(struct!.syncInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._autosyncTeamsAndUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autosyncTeamsAndUsers = this._autosyncTeamsAndUsers;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._syncInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncInterval = this._syncInterval;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._autosyncTeamsAndUsers = undefined;
      this._clientSecret = undefined;
      this._objectId = undefined;
      this._syncInterval = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._autosyncTeamsAndUsers = value.autosyncTeamsAndUsers;
      this._clientSecret = value.clientSecret;
      this._objectId = value.objectId;
      this._syncInterval = value.syncInterval;
      this._tenant = value.tenant;
    }
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // autosync_teams_and_users - computed: false, optional: true, required: false
  private _autosyncTeamsAndUsers?: boolean | cdktf.IResolvable; 
  public get autosyncTeamsAndUsers() {
    return this.getBooleanAttribute('autosync_teams_and_users');
  }
  public set autosyncTeamsAndUsers(value: boolean | cdktf.IResolvable) {
    this._autosyncTeamsAndUsers = value;
  }
  public resetAutosyncTeamsAndUsers() {
    this._autosyncTeamsAndUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autosyncTeamsAndUsersInput() {
    return this._autosyncTeamsAndUsers;
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

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // sync_interval - computed: false, optional: true, required: false
  private _syncInterval?: number; 
  public get syncInterval() {
    return this.getNumberAttribute('sync_interval');
  }
  public set syncInterval(value: number) {
    this._syncInterval = value;
  }
  public resetSyncInterval() {
    this._syncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInput() {
    return this._syncInterval;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AccountIdpGithub {
  /**
  * GitHub API host, Defaults to api.github.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#api_host AccountIdp#api_host}
  */
  readonly apiHost?: string;
  /**
  * GitHub API url path prefix, defaults to /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#api_path_prefix AccountIdp#api_path_prefix}
  */
  readonly apiPathPrefix?: string;
  /**
  * Authentication url, Defaults to https://github.com/login/oauth/authorize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#authentication_url AccountIdp#authentication_url}
  */
  readonly authenticationUrl?: string;
  /**
  * Client ID from Github
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_id AccountIdp#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from GitHub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_secret AccountIdp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * GitHub token endpoint url, Defaults to https://github.com/login/oauth/access_token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#token_url AccountIdp#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * GitHub user profile url, Defaults to https://api.github.com/user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#user_profile_url AccountIdp#user_profile_url}
  */
  readonly userProfileUrl?: string;
}

export function accountIdpGithubToTerraform(struct?: AccountIdpGithubOutputReference | AccountIdpGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_host: cdktf.stringToTerraform(struct!.apiHost),
    api_path_prefix: cdktf.stringToTerraform(struct!.apiPathPrefix),
    authentication_url: cdktf.stringToTerraform(struct!.authenticationUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
    user_profile_url: cdktf.stringToTerraform(struct!.userProfileUrl),
  }
}


export function accountIdpGithubToHclTerraform(struct?: AccountIdpGithubOutputReference | AccountIdpGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_host: {
      value: cdktf.stringToHclTerraform(struct!.apiHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.apiPathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_url: {
      value: cdktf.stringToHclTerraform(struct!.authenticationUrl),
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
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_profile_url: {
      value: cdktf.stringToHclTerraform(struct!.userProfileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiHost = this._apiHost;
    }
    if (this._apiPathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPathPrefix = this._apiPathPrefix;
    }
    if (this._authenticationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationUrl = this._authenticationUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._userProfileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProfileUrl = this._userProfileUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiHost = undefined;
      this._apiPathPrefix = undefined;
      this._authenticationUrl = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenUrl = undefined;
      this._userProfileUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiHost = value.apiHost;
      this._apiPathPrefix = value.apiPathPrefix;
      this._authenticationUrl = value.authenticationUrl;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenUrl = value.tokenUrl;
      this._userProfileUrl = value.userProfileUrl;
    }
  }

  // api_host - computed: false, optional: true, required: false
  private _apiHost?: string; 
  public get apiHost() {
    return this.getStringAttribute('api_host');
  }
  public set apiHost(value: string) {
    this._apiHost = value;
  }
  public resetApiHost() {
    this._apiHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostInput() {
    return this._apiHost;
  }

  // api_path_prefix - computed: false, optional: true, required: false
  private _apiPathPrefix?: string; 
  public get apiPathPrefix() {
    return this.getStringAttribute('api_path_prefix');
  }
  public set apiPathPrefix(value: string) {
    this._apiPathPrefix = value;
  }
  public resetApiPathPrefix() {
    this._apiPathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPathPrefixInput() {
    return this._apiPathPrefix;
  }

  // authentication_url - computed: false, optional: true, required: false
  private _authenticationUrl?: string; 
  public get authenticationUrl() {
    return this.getStringAttribute('authentication_url');
  }
  public set authenticationUrl(value: string) {
    this._authenticationUrl = value;
  }
  public resetAuthenticationUrl() {
    this._authenticationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationUrlInput() {
    return this._authenticationUrl;
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

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // user_profile_url - computed: false, optional: true, required: false
  private _userProfileUrl?: string; 
  public get userProfileUrl() {
    return this.getStringAttribute('user_profile_url');
  }
  public set userProfileUrl(value: string) {
    this._userProfileUrl = value;
  }
  public resetUserProfileUrl() {
    this._userProfileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileUrlInput() {
    return this._userProfileUrl;
  }
}
export interface AccountIdpGitlab {
  /**
  * Base url for Gitlab API, Defaults to https://gitlab.com/api/v4/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#api_url AccountIdp#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Authentication url, Defaults to https://gitlab.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#authentication_url AccountIdp#authentication_url}
  */
  readonly authenticationUrl?: string;
  /**
  * Client ID from Gitlab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_id AccountIdp#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from Gitlab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_secret AccountIdp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * User profile url, Defaults to https://gitlab.com/api/v4/user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#user_profile_url AccountIdp#user_profile_url}
  */
  readonly userProfileUrl?: string;
}

export function accountIdpGitlabToTerraform(struct?: AccountIdpGitlabOutputReference | AccountIdpGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    authentication_url: cdktf.stringToTerraform(struct!.authenticationUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    user_profile_url: cdktf.stringToTerraform(struct!.userProfileUrl),
  }
}


export function accountIdpGitlabToHclTerraform(struct?: AccountIdpGitlabOutputReference | AccountIdpGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_url: {
      value: cdktf.stringToHclTerraform(struct!.authenticationUrl),
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
    user_profile_url: {
      value: cdktf.stringToHclTerraform(struct!.userProfileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._authenticationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationUrl = this._authenticationUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._userProfileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProfileUrl = this._userProfileUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiUrl = undefined;
      this._authenticationUrl = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._userProfileUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiUrl = value.apiUrl;
      this._authenticationUrl = value.authenticationUrl;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._userProfileUrl = value.userProfileUrl;
    }
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // authentication_url - computed: false, optional: true, required: false
  private _authenticationUrl?: string; 
  public get authenticationUrl() {
    return this.getStringAttribute('authentication_url');
  }
  public set authenticationUrl(value: string) {
    this._authenticationUrl = value;
  }
  public resetAuthenticationUrl() {
    this._authenticationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationUrlInput() {
    return this._authenticationUrl;
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

  // user_profile_url - computed: false, optional: true, required: false
  private _userProfileUrl?: string; 
  public get userProfileUrl() {
    return this.getStringAttribute('user_profile_url');
  }
  public set userProfileUrl(value: string) {
    this._userProfileUrl = value;
  }
  public resetUserProfileUrl() {
    this._userProfileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileUrlInput() {
    return this._userProfileUrl;
  }
}
export interface AccountIdpGoogle {
  /**
  * Email of a user with admin permissions on google, relevant only for synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#admin_email AccountIdp#admin_email}
  */
  readonly adminEmail?: string;
  /**
  * Comma separated list of groups to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#allowed_groups_for_sync AccountIdp#allowed_groups_for_sync}
  */
  readonly allowedGroupsForSync?: string;
  /**
  * Client ID in Google, must be unique across all identity providers in Codefresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_id AccountIdp#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret in Google
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_secret AccountIdp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * JSON keyfile for google service account used for synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#json_keyfile AccountIdp#json_keyfile}
  */
  readonly jsonKeyfile?: string;
  /**
  * Relevant for custom schema-based synchronization only. See Codefresh documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#sync_field AccountIdp#sync_field}
  */
  readonly syncField?: string;
}

export function accountIdpGoogleToTerraform(struct?: AccountIdpGoogleOutputReference | AccountIdpGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    allowed_groups_for_sync: cdktf.stringToTerraform(struct!.allowedGroupsForSync),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    json_keyfile: cdktf.stringToTerraform(struct!.jsonKeyfile),
    sync_field: cdktf.stringToTerraform(struct!.syncField),
  }
}


export function accountIdpGoogleToHclTerraform(struct?: AccountIdpGoogleOutputReference | AccountIdpGoogle): any {
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
    allowed_groups_for_sync: {
      value: cdktf.stringToHclTerraform(struct!.allowedGroupsForSync),
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
    json_keyfile: {
      value: cdktf.stringToHclTerraform(struct!.jsonKeyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_field: {
      value: cdktf.stringToHclTerraform(struct!.syncField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpGoogle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._allowedGroupsForSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroupsForSync = this._allowedGroupsForSync;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._jsonKeyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKeyfile = this._jsonKeyfile;
    }
    if (this._syncField !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncField = this._syncField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpGoogle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmail = undefined;
      this._allowedGroupsForSync = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._jsonKeyfile = undefined;
      this._syncField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmail = value.adminEmail;
      this._allowedGroupsForSync = value.allowedGroupsForSync;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._jsonKeyfile = value.jsonKeyfile;
      this._syncField = value.syncField;
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

  // allowed_groups_for_sync - computed: false, optional: true, required: false
  private _allowedGroupsForSync?: string; 
  public get allowedGroupsForSync() {
    return this.getStringAttribute('allowed_groups_for_sync');
  }
  public set allowedGroupsForSync(value: string) {
    this._allowedGroupsForSync = value;
  }
  public resetAllowedGroupsForSync() {
    this._allowedGroupsForSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsForSyncInput() {
    return this._allowedGroupsForSync;
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

  // json_keyfile - computed: false, optional: true, required: false
  private _jsonKeyfile?: string; 
  public get jsonKeyfile() {
    return this.getStringAttribute('json_keyfile');
  }
  public set jsonKeyfile(value: string) {
    this._jsonKeyfile = value;
  }
  public resetJsonKeyfile() {
    this._jsonKeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyfileInput() {
    return this._jsonKeyfile;
  }

  // sync_field - computed: false, optional: true, required: false
  private _syncField?: string; 
  public get syncField() {
    return this.getStringAttribute('sync_field');
  }
  public set syncField(value: string) {
    this._syncField = value;
  }
  public resetSyncField() {
    this._syncField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFieldInput() {
    return this._syncField;
  }
}
export interface AccountIdpKeycloak {
  /**
  * Client ID from Keycloak
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_id AccountIdp#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from Keycloak
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_secret AccountIdp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The Keycloak URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#host AccountIdp#host}
  */
  readonly host: string;
  /**
  * The Realm ID for Codefresh in Keycloak. Defaults to master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#realm AccountIdp#realm}
  */
  readonly realm?: string;
}

export function accountIdpKeycloakToTerraform(struct?: AccountIdpKeycloakOutputReference | AccountIdpKeycloak): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    host: cdktf.stringToTerraform(struct!.host),
    realm: cdktf.stringToTerraform(struct!.realm),
  }
}


export function accountIdpKeycloakToHclTerraform(struct?: AccountIdpKeycloakOutputReference | AccountIdpKeycloak): any {
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpKeycloakOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpKeycloak | undefined {
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
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpKeycloak | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._host = undefined;
      this._realm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._host = value.host;
      this._realm = value.realm;
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface AccountIdpLdap {
  /**
  * To sync only by specified groups - specify a comma separated list of groups, by default all groups will be synced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#allowed_groups_for_sync AccountIdp#allowed_groups_for_sync}
  */
  readonly allowedGroupsForSync?: string;
  /**
  * For ldaps only: The security certificate of the LDAP server. Do not convert to base64 or any other encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#certificate AccountIdp#certificate}
  */
  readonly certificate?: string;
  /**
  * The username to be used to search other users in LDAP notation (combination of cn, ou,dc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#distinguished_name AccountIdp#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * The password of the user defined in Distinguished name that will be used to search other users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#password AccountIdp#password}
  */
  readonly password: string;
  /**
  * The search-user scope in LDAP notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#search_base AccountIdp#search_base}
  */
  readonly searchBase: string;
  /**
  * Synchronize using a custom search base, by deafult seach_base is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#search_base_for_sync AccountIdp#search_base_for_sync}
  */
  readonly searchBaseForSync?: string;
  /**
  * The attribute by which to search for the user on the LDAP server. By default, set to uid. For the Azure LDAP server, set this field to sAMAccountName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#search_filter AccountIdp#search_filter}
  */
  readonly searchFilter?: string;
  /**
  * ldap server url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#url AccountIdp#url}
  */
  readonly url: string;
}

export function accountIdpLdapToTerraform(struct?: AccountIdpLdapOutputReference | AccountIdpLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_groups_for_sync: cdktf.stringToTerraform(struct!.allowedGroupsForSync),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
    password: cdktf.stringToTerraform(struct!.password),
    search_base: cdktf.stringToTerraform(struct!.searchBase),
    search_base_for_sync: cdktf.stringToTerraform(struct!.searchBaseForSync),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function accountIdpLdapToHclTerraform(struct?: AccountIdpLdapOutputReference | AccountIdpLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_groups_for_sync: {
      value: cdktf.stringToHclTerraform(struct!.allowedGroupsForSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_base: {
      value: cdktf.stringToHclTerraform(struct!.searchBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_base_for_sync: {
      value: cdktf.stringToHclTerraform(struct!.searchBaseForSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedGroupsForSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroupsForSync = this._allowedGroupsForSync;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._searchBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBase = this._searchBase;
    }
    if (this._searchBaseForSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBaseForSync = this._searchBaseForSync;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedGroupsForSync = undefined;
      this._certificate = undefined;
      this._distinguishedName = undefined;
      this._password = undefined;
      this._searchBase = undefined;
      this._searchBaseForSync = undefined;
      this._searchFilter = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedGroupsForSync = value.allowedGroupsForSync;
      this._certificate = value.certificate;
      this._distinguishedName = value.distinguishedName;
      this._password = value.password;
      this._searchBase = value.searchBase;
      this._searchBaseForSync = value.searchBaseForSync;
      this._searchFilter = value.searchFilter;
      this._url = value.url;
    }
  }

  // allowed_groups_for_sync - computed: false, optional: true, required: false
  private _allowedGroupsForSync?: string; 
  public get allowedGroupsForSync() {
    return this.getStringAttribute('allowed_groups_for_sync');
  }
  public set allowedGroupsForSync(value: string) {
    this._allowedGroupsForSync = value;
  }
  public resetAllowedGroupsForSync() {
    this._allowedGroupsForSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsForSyncInput() {
    return this._allowedGroupsForSync;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
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

  // search_base - computed: false, optional: false, required: true
  private _searchBase?: string; 
  public get searchBase() {
    return this.getStringAttribute('search_base');
  }
  public set searchBase(value: string) {
    this._searchBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseInput() {
    return this._searchBase;
  }

  // search_base_for_sync - computed: false, optional: true, required: false
  private _searchBaseForSync?: string; 
  public get searchBaseForSync() {
    return this.getStringAttribute('search_base_for_sync');
  }
  public set searchBaseForSync(value: string) {
    this._searchBaseForSync = value;
  }
  public resetSearchBaseForSync() {
    this._searchBaseForSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseForSyncInput() {
    return this._searchBaseForSync;
  }

  // search_filter - computed: false, optional: true, required: false
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  public resetSearchFilter() {
    this._searchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
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
}
export interface AccountIdpOkta {
  /**
  * The Okta API token generated in Okta, used to sync groups and their users from Okta to Codefresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#access_token AccountIdp#access_token}
  */
  readonly accessToken?: string;
  /**
  * The Codefresh application ID in your OKTA organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#app_id AccountIdp#app_id}
  */
  readonly appId?: string;
  /**
  * The OKTA organization URL, for example, https://<company>.okta.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_host AccountIdp#client_host}
  */
  readonly clientHost: string;
  /**
  * Client ID in Okta, must be unique across all identity providers in Codefresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_id AccountIdp#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret in Okta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_secret AccountIdp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The names of the additional Codefresh accounts to be synced from Okta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#sync_mirror_accounts AccountIdp#sync_mirror_accounts}
  */
  readonly syncMirrorAccounts?: string[];
}

export function accountIdpOktaToTerraform(struct?: AccountIdpOktaOutputReference | AccountIdpOkta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    app_id: cdktf.stringToTerraform(struct!.appId),
    client_host: cdktf.stringToTerraform(struct!.clientHost),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    sync_mirror_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncMirrorAccounts),
  }
}


export function accountIdpOktaToHclTerraform(struct?: AccountIdpOktaOutputReference | AccountIdpOkta): any {
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
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_host: {
      value: cdktf.stringToHclTerraform(struct!.clientHost),
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
    sync_mirror_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncMirrorAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpOkta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._clientHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHost = this._clientHost;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._syncMirrorAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMirrorAccounts = this._syncMirrorAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpOkta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._appId = undefined;
      this._clientHost = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._syncMirrorAccounts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._appId = value.appId;
      this._clientHost = value.clientHost;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._syncMirrorAccounts = value.syncMirrorAccounts;
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

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // client_host - computed: false, optional: false, required: true
  private _clientHost?: string; 
  public get clientHost() {
    return this.getStringAttribute('client_host');
  }
  public set clientHost(value: string) {
    this._clientHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHostInput() {
    return this._clientHost;
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

  // sync_mirror_accounts - computed: false, optional: true, required: false
  private _syncMirrorAccounts?: string[]; 
  public get syncMirrorAccounts() {
    return this.getListAttribute('sync_mirror_accounts');
  }
  public set syncMirrorAccounts(value: string[]) {
    this._syncMirrorAccounts = value;
  }
  public resetSyncMirrorAccounts() {
    this._syncMirrorAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMirrorAccountsInput() {
    return this._syncMirrorAccounts;
  }
}
export interface AccountIdpOnelogin {
  /**
  * Client ID for onelogin API, only needed if syncing users and groups from Onelogin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#api_client_id AccountIdp#api_client_id}
  */
  readonly apiClientId?: string;
  /**
  * Client secret for onelogin API, only needed if syncing users and groups from Onelogin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#api_client_secret AccountIdp#api_client_secret}
  */
  readonly apiClientSecret?: string;
  /**
  * The Codefresh application ID in your Onelogin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#app_id AccountIdp#app_id}
  */
  readonly appId?: string;
  /**
  * Client ID from Onelogin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_id AccountIdp#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from Onelogin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_secret AccountIdp#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The domain to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#domain AccountIdp#domain}
  */
  readonly domain: string;
}

export function accountIdpOneloginToTerraform(struct?: AccountIdpOneloginOutputReference | AccountIdpOnelogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_client_id: cdktf.stringToTerraform(struct!.apiClientId),
    api_client_secret: cdktf.stringToTerraform(struct!.apiClientSecret),
    app_id: cdktf.stringToTerraform(struct!.appId),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function accountIdpOneloginToHclTerraform(struct?: AccountIdpOneloginOutputReference | AccountIdpOnelogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_client_id: {
      value: cdktf.stringToHclTerraform(struct!.apiClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.apiClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
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
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpOneloginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpOnelogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiClientId = this._apiClientId;
    }
    if (this._apiClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiClientSecret = this._apiClientSecret;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpOnelogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiClientId = undefined;
      this._apiClientSecret = undefined;
      this._appId = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiClientId = value.apiClientId;
      this._apiClientSecret = value.apiClientSecret;
      this._appId = value.appId;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._domain = value.domain;
    }
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

  // api_client_secret - computed: false, optional: true, required: false
  private _apiClientSecret?: string; 
  public get apiClientSecret() {
    return this.getStringAttribute('api_client_secret');
  }
  public set apiClientSecret(value: string) {
    this._apiClientSecret = value;
  }
  public resetApiClientSecret() {
    this._apiClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiClientSecretInput() {
    return this._apiClientSecret;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface AccountIdpSaml {
  /**
  * Valid for Okta only: The Okta API token generated in Okta, used to sync groups and their users from Okta to Codefresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#access_token AccountIdp#access_token}
  */
  readonly accessToken?: string;
  /**
  * Valid for Okta only: If set to true, Codefresh will automatically invite and activate new users added during the automated sync, without waiting for the users to accept the invitations. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#activate_users_after_sync AccountIdp#activate_users_after_sync}
  */
  readonly activateUsersAfterSync?: boolean | cdktf.IResolvable;
  /**
  * Valid for GSuite only: Email of a user with admin permissions on google, relevant only for synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#admin_email AccountIdp#admin_email}
  */
  readonly adminEmail?: string;
  /**
  * Valid for GSuite only: Comma separated list of groups to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#allowed_groups_for_sync AccountIdp#allowed_groups_for_sync}
  */
  readonly allowedGroupsForSync?: string;
  /**
  * Valid for Okta only: The Codefresh application ID in Okta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#app_id AccountIdp#app_id}
  */
  readonly appId?: string;
  /**
  * The security certificate of your Identity Provider. Paste the value directly on the field. Do not convert to base64 or any other encoding by hand
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#application_certificate AccountIdp#application_certificate}
  */
  readonly applicationCertificate: string;
  /**
  * Valid for Okta/GSuite: Set to true to sync user accounts and teams in okta/gsuite to your Codefresh account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#autosync_teams_and_users AccountIdp#autosync_teams_and_users}
  */
  readonly autosyncTeamsAndUsers?: boolean | cdktf.IResolvable;
  /**
  * Valid for Okta only: OKTA organization URL, for example, https://<company>.okta.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#client_host AccountIdp#client_host}
  */
  readonly clientHost?: string;
  /**
  * The SSO endpoint of your Identity Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#endpoint AccountIdp#endpoint}
  */
  readonly endpoint: string;
  /**
  * Valid for GSuite only: JSON keyfile for google service account used for synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#json_keyfile AccountIdp#json_keyfile}
  */
  readonly jsonKeyfile?: string;
  /**
  * SAML provider. Currently supported values - GSuite, okta or empty string for generic provider. Defaults to empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#provider AccountIdp#provider}
  */
  readonly provider?: string;
  /**
  * Valid for Okta/GSuite: Sync interval in hours for syncing user accounts in okta/gsuite to your Codefresh account. If not set the sync inteval will be 12 hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#sync_interval AccountIdp#sync_interval}
  */
  readonly syncInterval?: number;
}

export function accountIdpSamlToTerraform(struct?: AccountIdpSamlOutputReference | AccountIdpSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    activate_users_after_sync: cdktf.booleanToTerraform(struct!.activateUsersAfterSync),
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    allowed_groups_for_sync: cdktf.stringToTerraform(struct!.allowedGroupsForSync),
    app_id: cdktf.stringToTerraform(struct!.appId),
    application_certificate: cdktf.stringToTerraform(struct!.applicationCertificate),
    autosync_teams_and_users: cdktf.booleanToTerraform(struct!.autosyncTeamsAndUsers),
    client_host: cdktf.stringToTerraform(struct!.clientHost),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    json_keyfile: cdktf.stringToTerraform(struct!.jsonKeyfile),
    provider: cdktf.stringToTerraform(struct!.provider),
    sync_interval: cdktf.numberToTerraform(struct!.syncInterval),
  }
}


export function accountIdpSamlToHclTerraform(struct?: AccountIdpSamlOutputReference | AccountIdpSaml): any {
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
    activate_users_after_sync: {
      value: cdktf.booleanToHclTerraform(struct!.activateUsersAfterSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_groups_for_sync: {
      value: cdktf.stringToHclTerraform(struct!.allowedGroupsForSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_certificate: {
      value: cdktf.stringToHclTerraform(struct!.applicationCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autosync_teams_and_users: {
      value: cdktf.booleanToHclTerraform(struct!.autosyncTeamsAndUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_host: {
      value: cdktf.stringToHclTerraform(struct!.clientHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_keyfile: {
      value: cdktf.stringToHclTerraform(struct!.jsonKeyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_interval: {
      value: cdktf.numberToHclTerraform(struct!.syncInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountIdpSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountIdpSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._activateUsersAfterSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateUsersAfterSync = this._activateUsersAfterSync;
    }
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._allowedGroupsForSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroupsForSync = this._allowedGroupsForSync;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._applicationCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCertificate = this._applicationCertificate;
    }
    if (this._autosyncTeamsAndUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autosyncTeamsAndUsers = this._autosyncTeamsAndUsers;
    }
    if (this._clientHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHost = this._clientHost;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._jsonKeyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKeyfile = this._jsonKeyfile;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._syncInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncInterval = this._syncInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountIdpSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._activateUsersAfterSync = undefined;
      this._adminEmail = undefined;
      this._allowedGroupsForSync = undefined;
      this._appId = undefined;
      this._applicationCertificate = undefined;
      this._autosyncTeamsAndUsers = undefined;
      this._clientHost = undefined;
      this._endpoint = undefined;
      this._jsonKeyfile = undefined;
      this._provider = undefined;
      this._syncInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._activateUsersAfterSync = value.activateUsersAfterSync;
      this._adminEmail = value.adminEmail;
      this._allowedGroupsForSync = value.allowedGroupsForSync;
      this._appId = value.appId;
      this._applicationCertificate = value.applicationCertificate;
      this._autosyncTeamsAndUsers = value.autosyncTeamsAndUsers;
      this._clientHost = value.clientHost;
      this._endpoint = value.endpoint;
      this._jsonKeyfile = value.jsonKeyfile;
      this._provider = value.provider;
      this._syncInterval = value.syncInterval;
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

  // activate_users_after_sync - computed: false, optional: true, required: false
  private _activateUsersAfterSync?: boolean | cdktf.IResolvable; 
  public get activateUsersAfterSync() {
    return this.getBooleanAttribute('activate_users_after_sync');
  }
  public set activateUsersAfterSync(value: boolean | cdktf.IResolvable) {
    this._activateUsersAfterSync = value;
  }
  public resetActivateUsersAfterSync() {
    this._activateUsersAfterSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateUsersAfterSyncInput() {
    return this._activateUsersAfterSync;
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

  // allowed_groups_for_sync - computed: false, optional: true, required: false
  private _allowedGroupsForSync?: string; 
  public get allowedGroupsForSync() {
    return this.getStringAttribute('allowed_groups_for_sync');
  }
  public set allowedGroupsForSync(value: string) {
    this._allowedGroupsForSync = value;
  }
  public resetAllowedGroupsForSync() {
    this._allowedGroupsForSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsForSyncInput() {
    return this._allowedGroupsForSync;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // application_certificate - computed: false, optional: false, required: true
  private _applicationCertificate?: string; 
  public get applicationCertificate() {
    return this.getStringAttribute('application_certificate');
  }
  public set applicationCertificate(value: string) {
    this._applicationCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCertificateInput() {
    return this._applicationCertificate;
  }

  // autosync_teams_and_users - computed: false, optional: true, required: false
  private _autosyncTeamsAndUsers?: boolean | cdktf.IResolvable; 
  public get autosyncTeamsAndUsers() {
    return this.getBooleanAttribute('autosync_teams_and_users');
  }
  public set autosyncTeamsAndUsers(value: boolean | cdktf.IResolvable) {
    this._autosyncTeamsAndUsers = value;
  }
  public resetAutosyncTeamsAndUsers() {
    this._autosyncTeamsAndUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autosyncTeamsAndUsersInput() {
    return this._autosyncTeamsAndUsers;
  }

  // client_host - computed: false, optional: true, required: false
  private _clientHost?: string; 
  public get clientHost() {
    return this.getStringAttribute('client_host');
  }
  public set clientHost(value: string) {
    this._clientHost = value;
  }
  public resetClientHost() {
    this._clientHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHostInput() {
    return this._clientHost;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // json_keyfile - computed: false, optional: true, required: false
  private _jsonKeyfile?: string; 
  public get jsonKeyfile() {
    return this.getStringAttribute('json_keyfile');
  }
  public set jsonKeyfile(value: string) {
    this._jsonKeyfile = value;
  }
  public resetJsonKeyfile() {
    this._jsonKeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyfileInput() {
    return this._jsonKeyfile;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // sync_interval - computed: false, optional: true, required: false
  private _syncInterval?: number; 
  public get syncInterval() {
    return this.getNumberAttribute('sync_interval');
  }
  public set syncInterval(value: number) {
    this._syncInterval = value;
  }
  public resetSyncInterval() {
    this._syncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInput() {
    return this._syncInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp codefresh_account_idp}
*/
export class AccountIdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_account_idp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountIdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountIdp to import
  * @param importFromId The id of the existing AccountIdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountIdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_account_idp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/account_idp codefresh_account_idp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountIdpConfig
  */
  public constructor(scope: Construct, id: string, config: AccountIdpConfig) {
    super(scope, id, {
      terraformResourceType: 'codefresh_account_idp',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._auth0.internalValue = config.auth0;
    this._azure.internalValue = config.azure;
    this._github.internalValue = config.github;
    this._gitlab.internalValue = config.gitlab;
    this._google.internalValue = config.google;
    this._keycloak.internalValue = config.keycloak;
    this._ldap.internalValue = config.ldap;
    this._okta.internalValue = config.okta;
    this._onelogin.internalValue = config.onelogin;
    this._saml.internalValue = config.saml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_type - computed: true, optional: false, required: false
  public get clientType() {
    return this.getStringAttribute('client_type');
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

  // login_url - computed: true, optional: false, required: false
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // redirect_ui_url - computed: true, optional: false, required: false
  public get redirectUiUrl() {
    return this.getStringAttribute('redirect_ui_url');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // auth0 - computed: false, optional: true, required: false
  private _auth0 = new AccountIdpAuth0OutputReference(this, "auth0");
  public get auth0() {
    return this._auth0;
  }
  public putAuth0(value: AccountIdpAuth0) {
    this._auth0.internalValue = value;
  }
  public resetAuth0() {
    this._auth0.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auth0Input() {
    return this._auth0.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new AccountIdpAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: AccountIdpAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new AccountIdpGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: AccountIdpGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new AccountIdpGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: AccountIdpGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new AccountIdpGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: AccountIdpGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // keycloak - computed: false, optional: true, required: false
  private _keycloak = new AccountIdpKeycloakOutputReference(this, "keycloak");
  public get keycloak() {
    return this._keycloak;
  }
  public putKeycloak(value: AccountIdpKeycloak) {
    this._keycloak.internalValue = value;
  }
  public resetKeycloak() {
    this._keycloak.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keycloakInput() {
    return this._keycloak.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new AccountIdpLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: AccountIdpLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new AccountIdpOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: AccountIdpOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // onelogin - computed: false, optional: true, required: false
  private _onelogin = new AccountIdpOneloginOutputReference(this, "onelogin");
  public get onelogin() {
    return this._onelogin;
  }
  public putOnelogin(value: AccountIdpOnelogin) {
    this._onelogin.internalValue = value;
  }
  public resetOnelogin() {
    this._onelogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneloginInput() {
    return this._onelogin.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new AccountIdpSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AccountIdpSaml) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      auth0: accountIdpAuth0ToTerraform(this._auth0.internalValue),
      azure: accountIdpAzureToTerraform(this._azure.internalValue),
      github: accountIdpGithubToTerraform(this._github.internalValue),
      gitlab: accountIdpGitlabToTerraform(this._gitlab.internalValue),
      google: accountIdpGoogleToTerraform(this._google.internalValue),
      keycloak: accountIdpKeycloakToTerraform(this._keycloak.internalValue),
      ldap: accountIdpLdapToTerraform(this._ldap.internalValue),
      okta: accountIdpOktaToTerraform(this._okta.internalValue),
      onelogin: accountIdpOneloginToTerraform(this._onelogin.internalValue),
      saml: accountIdpSamlToTerraform(this._saml.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth0: {
        value: accountIdpAuth0ToHclTerraform(this._auth0.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpAuth0List",
      },
      azure: {
        value: accountIdpAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpAzureList",
      },
      github: {
        value: accountIdpGithubToHclTerraform(this._github.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpGithubList",
      },
      gitlab: {
        value: accountIdpGitlabToHclTerraform(this._gitlab.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpGitlabList",
      },
      google: {
        value: accountIdpGoogleToHclTerraform(this._google.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpGoogleList",
      },
      keycloak: {
        value: accountIdpKeycloakToHclTerraform(this._keycloak.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpKeycloakList",
      },
      ldap: {
        value: accountIdpLdapToHclTerraform(this._ldap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpLdapList",
      },
      okta: {
        value: accountIdpOktaToHclTerraform(this._okta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpOktaList",
      },
      onelogin: {
        value: accountIdpOneloginToHclTerraform(this._onelogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpOneloginList",
      },
      saml: {
        value: accountIdpSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountIdpSamlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
