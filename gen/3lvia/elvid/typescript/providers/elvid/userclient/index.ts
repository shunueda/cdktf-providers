// https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserclientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds before an access token expires. Default and max is 3600 seconds (1 hour)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#access_token_life_time Userclient#access_token_life_time}
  */
  readonly accessTokenLifeTime?: number;
  /**
  * This will enable the use of refreshtokens, and the scope offline_access. Talk with GlueTeam before using this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#allow_use_of_refresh_tokens Userclient#allow_use_of_refresh_tokens}
  */
  readonly allowUseOfRefreshTokens?: boolean | cdktf.IResolvable;
  /**
  * When requesting both an id token and access token, should the user claims always be added to the id token instead of requiring the client to use the userinfo endpoint?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#always_include_user_claims_in_id_token Userclient#always_include_user_claims_in_id_token}
  */
  readonly alwaysIncludeUserClaimsInIdToken?: boolean | cdktf.IResolvable;
  /**
  * The full name of the client. Note that ClientNameLanguageKey can be used to get a separate language dependent name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#client_name Userclient#client_name}
  */
  readonly clientName: string;
  /**
  * Use this to get a language dependent separate name for the client. That name could be used instead of the client name in places like the BackToClient-button that is showed for an signed in user in elvid. Note that a corresponding key/value for 'ClientName{client_name_language_key}' must also exist in elvid's language files. Eg language.nb.json --> key: 'ClientNameMinSide', value: 'MinSide'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#client_name_language_key Userclient#client_name_language_key}
  */
  readonly clientNameLanguageKey?: string;
  /**
  * The domains the client is found in. Used for Cors AllowedCorsOrigins, RedirectUris and PostLogoutRedirectUris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#domains Userclient#domains}
  */
  readonly domains: string[];
  /**
  * Enable to allow user to log in with Elvia AD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#elvia_ad_login_enabled Userclient#elvia_ad_login_enabled}
  */
  readonly elviaAdLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable to allow user to log in with ID-porten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#idporten_login_enabled Userclient#idporten_login_enabled}
  */
  readonly idportenLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable to allow user to log in with local account e.g. email and password. Note this is not for the work-related ad-email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#local_login_enabled Userclient#local_login_enabled}
  */
  readonly localLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * This has no use if allow_use_of_refresh_tokens = false. When using a OneTime RefreshToken the token endpoint response includes a new RefreshToken that should be used for the next token request. Set this to false to get a reusable RefreshToken. For the field RefreshTokenUsage in the elvid DB 0 means ReUse and 1 means SingleUse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#one_time_usage_for_refresh_tokens Userclient#one_time_usage_for_refresh_tokens}
  */
  readonly oneTimeUsageForRefreshTokens?: boolean | cdktf.IResolvable;
  /**
  * The path part of a PostLogoutRedirectUri, each of these will be combined with each of the domains. After logout ElvID is only allowed to send the user back to the client with one of these uris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#post_logout_redirect_uri_paths Userclient#post_logout_redirect_uri_paths}
  */
  readonly postLogoutRedirectUriPaths: string[];
  /**
  * The path part of a RedirectUri, each of these will be combined with each of the domains. ElvID is only allowed to send the user back to the client with one of these uris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#redirect_uri_paths Userclient#redirect_uri_paths}
  */
  readonly redirectUriPaths: string[];
  /**
  * This has no use if allow_use_of_refresh_tokens = false. Absolute number of seconds before a refresh token expires. Note that a refresh token can also be revoked. Default is 2592000 seconds (30 days), max is 31556926 seconds (1 year).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#refresh_token_life_time Userclient#refresh_token_life_time}
  */
  readonly refreshTokenLifeTime?: number;
  /**
  * ClientSecret are typically not required in userclients, as most of them run on the users hardware and cannot keep a secret. A ClientSecret can be used safely from the backend of a dynamic webpage like ASP.NET Core MVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#require_client_secret Userclient#require_client_secret}
  */
  readonly requireClientSecret?: boolean | cdktf.IResolvable;
  /**
  * A change in value for this field will force recreating the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#resource_taint_version Userclient#resource_taint_version}
  */
  readonly resourceTaintVersion?: string;
  /**
  * The scopes the client can request, note that scopes are auto approved in test and must be approved by an admin in production.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#scopes Userclient#scopes}
  */
  readonly scopes: string[];
  /**
  * When this is enabled it's possible to login with a test user to this client, by using local login when authenticating the user in the gui. See ElvID space on confluence for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#test_user_login_enabled Userclient#test_user_login_enabled}
  */
  readonly testUserLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * client_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#client_properties Userclient#client_properties}
  */
  readonly clientProperties?: UserclientClientProperties[] | cdktf.IResolvable;
}
export interface UserclientClientProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#key Userclient#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#values Userclient#values}
  */
  readonly values: string[];
}

export function userclientClientPropertiesToTerraform(struct?: UserclientClientProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function userclientClientPropertiesToHclTerraform(struct?: UserclientClientProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserclientClientPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserclientClientProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserclientClientProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class UserclientClientPropertiesList extends cdktf.ComplexList {
  public internalValue? : UserclientClientProperties[] | cdktf.IResolvable

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
  public get(index: number): UserclientClientPropertiesOutputReference {
    return new UserclientClientPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient elvid_userclient}
*/
export class Userclient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elvid_userclient";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Userclient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Userclient to import
  * @param importFromId The id of the existing Userclient that should be imported. Refer to the {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Userclient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elvid_userclient", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/3lvia/elvid/2.1.1/docs/resources/userclient elvid_userclient} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserclientConfig
  */
  public constructor(scope: Construct, id: string, config: UserclientConfig) {
    super(scope, id, {
      terraformResourceType: 'elvid_userclient',
      terraformGeneratorMetadata: {
        providerName: 'elvid',
        providerVersion: '2.1.1',
        providerVersionConstraint: '2.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenLifeTime = config.accessTokenLifeTime;
    this._allowUseOfRefreshTokens = config.allowUseOfRefreshTokens;
    this._alwaysIncludeUserClaimsInIdToken = config.alwaysIncludeUserClaimsInIdToken;
    this._clientName = config.clientName;
    this._clientNameLanguageKey = config.clientNameLanguageKey;
    this._domains = config.domains;
    this._elviaAdLoginEnabled = config.elviaAdLoginEnabled;
    this._idportenLoginEnabled = config.idportenLoginEnabled;
    this._localLoginEnabled = config.localLoginEnabled;
    this._oneTimeUsageForRefreshTokens = config.oneTimeUsageForRefreshTokens;
    this._postLogoutRedirectUriPaths = config.postLogoutRedirectUriPaths;
    this._redirectUriPaths = config.redirectUriPaths;
    this._refreshTokenLifeTime = config.refreshTokenLifeTime;
    this._requireClientSecret = config.requireClientSecret;
    this._resourceTaintVersion = config.resourceTaintVersion;
    this._scopes = config.scopes;
    this._testUserLoginEnabled = config.testUserLoginEnabled;
    this._clientProperties.internalValue = config.clientProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_life_time - computed: true, optional: true, required: false
  private _accessTokenLifeTime?: number; 
  public get accessTokenLifeTime() {
    return this.getNumberAttribute('access_token_life_time');
  }
  public set accessTokenLifeTime(value: number) {
    this._accessTokenLifeTime = value;
  }
  public resetAccessTokenLifeTime() {
    this._accessTokenLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifeTimeInput() {
    return this._accessTokenLifeTime;
  }

  // allow_use_of_refresh_tokens - computed: true, optional: true, required: false
  private _allowUseOfRefreshTokens?: boolean | cdktf.IResolvable; 
  public get allowUseOfRefreshTokens() {
    return this.getBooleanAttribute('allow_use_of_refresh_tokens');
  }
  public set allowUseOfRefreshTokens(value: boolean | cdktf.IResolvable) {
    this._allowUseOfRefreshTokens = value;
  }
  public resetAllowUseOfRefreshTokens() {
    this._allowUseOfRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUseOfRefreshTokensInput() {
    return this._allowUseOfRefreshTokens;
  }

  // always_include_user_claims_in_id_token - computed: true, optional: true, required: false
  private _alwaysIncludeUserClaimsInIdToken?: boolean | cdktf.IResolvable; 
  public get alwaysIncludeUserClaimsInIdToken() {
    return this.getBooleanAttribute('always_include_user_claims_in_id_token');
  }
  public set alwaysIncludeUserClaimsInIdToken(value: boolean | cdktf.IResolvable) {
    this._alwaysIncludeUserClaimsInIdToken = value;
  }
  public resetAlwaysIncludeUserClaimsInIdToken() {
    this._alwaysIncludeUserClaimsInIdToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysIncludeUserClaimsInIdTokenInput() {
    return this._alwaysIncludeUserClaimsInIdToken;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: false, optional: false, required: true
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_name_language_key - computed: true, optional: true, required: false
  private _clientNameLanguageKey?: string; 
  public get clientNameLanguageKey() {
    return this.getStringAttribute('client_name_language_key');
  }
  public set clientNameLanguageKey(value: string) {
    this._clientNameLanguageKey = value;
  }
  public resetClientNameLanguageKey() {
    this._clientNameLanguageKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameLanguageKeyInput() {
    return this._clientNameLanguageKey;
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // elvia_ad_login_enabled - computed: true, optional: true, required: false
  private _elviaAdLoginEnabled?: boolean | cdktf.IResolvable; 
  public get elviaAdLoginEnabled() {
    return this.getBooleanAttribute('elvia_ad_login_enabled');
  }
  public set elviaAdLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._elviaAdLoginEnabled = value;
  }
  public resetElviaAdLoginEnabled() {
    this._elviaAdLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elviaAdLoginEnabledInput() {
    return this._elviaAdLoginEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idporten_login_enabled - computed: true, optional: true, required: false
  private _idportenLoginEnabled?: boolean | cdktf.IResolvable; 
  public get idportenLoginEnabled() {
    return this.getBooleanAttribute('idporten_login_enabled');
  }
  public set idportenLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._idportenLoginEnabled = value;
  }
  public resetIdportenLoginEnabled() {
    this._idportenLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idportenLoginEnabledInput() {
    return this._idportenLoginEnabled;
  }

  // local_login_enabled - computed: true, optional: true, required: false
  private _localLoginEnabled?: boolean | cdktf.IResolvable; 
  public get localLoginEnabled() {
    return this.getBooleanAttribute('local_login_enabled');
  }
  public set localLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._localLoginEnabled = value;
  }
  public resetLocalLoginEnabled() {
    this._localLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLoginEnabledInput() {
    return this._localLoginEnabled;
  }

  // one_time_usage_for_refresh_tokens - computed: true, optional: true, required: false
  private _oneTimeUsageForRefreshTokens?: boolean | cdktf.IResolvable; 
  public get oneTimeUsageForRefreshTokens() {
    return this.getBooleanAttribute('one_time_usage_for_refresh_tokens');
  }
  public set oneTimeUsageForRefreshTokens(value: boolean | cdktf.IResolvable) {
    this._oneTimeUsageForRefreshTokens = value;
  }
  public resetOneTimeUsageForRefreshTokens() {
    this._oneTimeUsageForRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeUsageForRefreshTokensInput() {
    return this._oneTimeUsageForRefreshTokens;
  }

  // post_logout_redirect_uri_paths - computed: false, optional: false, required: true
  private _postLogoutRedirectUriPaths?: string[]; 
  public get postLogoutRedirectUriPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uri_paths'));
  }
  public set postLogoutRedirectUriPaths(value: string[]) {
    this._postLogoutRedirectUriPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUriPathsInput() {
    return this._postLogoutRedirectUriPaths;
  }

  // redirect_uri_paths - computed: false, optional: false, required: true
  private _redirectUriPaths?: string[]; 
  public get redirectUriPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uri_paths'));
  }
  public set redirectUriPaths(value: string[]) {
    this._redirectUriPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriPathsInput() {
    return this._redirectUriPaths;
  }

  // refresh_token_life_time - computed: true, optional: true, required: false
  private _refreshTokenLifeTime?: number; 
  public get refreshTokenLifeTime() {
    return this.getNumberAttribute('refresh_token_life_time');
  }
  public set refreshTokenLifeTime(value: number) {
    this._refreshTokenLifeTime = value;
  }
  public resetRefreshTokenLifeTime() {
    this._refreshTokenLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenLifeTimeInput() {
    return this._refreshTokenLifeTime;
  }

  // require_client_secret - computed: true, optional: true, required: false
  private _requireClientSecret?: boolean | cdktf.IResolvable; 
  public get requireClientSecret() {
    return this.getBooleanAttribute('require_client_secret');
  }
  public set requireClientSecret(value: boolean | cdktf.IResolvable) {
    this._requireClientSecret = value;
  }
  public resetRequireClientSecret() {
    this._requireClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireClientSecretInput() {
    return this._requireClientSecret;
  }

  // resource_taint_version - computed: true, optional: true, required: false
  private _resourceTaintVersion?: string; 
  public get resourceTaintVersion() {
    return this.getStringAttribute('resource_taint_version');
  }
  public set resourceTaintVersion(value: string) {
    this._resourceTaintVersion = value;
  }
  public resetResourceTaintVersion() {
    this._resourceTaintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTaintVersionInput() {
    return this._resourceTaintVersion;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // test_user_login_enabled - computed: true, optional: true, required: false
  private _testUserLoginEnabled?: boolean | cdktf.IResolvable; 
  public get testUserLoginEnabled() {
    return this.getBooleanAttribute('test_user_login_enabled');
  }
  public set testUserLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._testUserLoginEnabled = value;
  }
  public resetTestUserLoginEnabled() {
    this._testUserLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testUserLoginEnabledInput() {
    return this._testUserLoginEnabled;
  }

  // client_properties - computed: false, optional: true, required: false
  private _clientProperties = new UserclientClientPropertiesList(this, "client_properties", true);
  public get clientProperties() {
    return this._clientProperties;
  }
  public putClientProperties(value: UserclientClientProperties[] | cdktf.IResolvable) {
    this._clientProperties.internalValue = value;
  }
  public resetClientProperties() {
    this._clientProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPropertiesInput() {
    return this._clientProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_life_time: cdktf.numberToTerraform(this._accessTokenLifeTime),
      allow_use_of_refresh_tokens: cdktf.booleanToTerraform(this._allowUseOfRefreshTokens),
      always_include_user_claims_in_id_token: cdktf.booleanToTerraform(this._alwaysIncludeUserClaimsInIdToken),
      client_name: cdktf.stringToTerraform(this._clientName),
      client_name_language_key: cdktf.stringToTerraform(this._clientNameLanguageKey),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      elvia_ad_login_enabled: cdktf.booleanToTerraform(this._elviaAdLoginEnabled),
      idporten_login_enabled: cdktf.booleanToTerraform(this._idportenLoginEnabled),
      local_login_enabled: cdktf.booleanToTerraform(this._localLoginEnabled),
      one_time_usage_for_refresh_tokens: cdktf.booleanToTerraform(this._oneTimeUsageForRefreshTokens),
      post_logout_redirect_uri_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postLogoutRedirectUriPaths),
      redirect_uri_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUriPaths),
      refresh_token_life_time: cdktf.numberToTerraform(this._refreshTokenLifeTime),
      require_client_secret: cdktf.booleanToTerraform(this._requireClientSecret),
      resource_taint_version: cdktf.stringToTerraform(this._resourceTaintVersion),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      test_user_login_enabled: cdktf.booleanToTerraform(this._testUserLoginEnabled),
      client_properties: cdktf.listMapper(userclientClientPropertiesToTerraform, true)(this._clientProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_life_time: {
        value: cdktf.numberToHclTerraform(this._accessTokenLifeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_use_of_refresh_tokens: {
        value: cdktf.booleanToHclTerraform(this._allowUseOfRefreshTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_include_user_claims_in_id_token: {
        value: cdktf.booleanToHclTerraform(this._alwaysIncludeUserClaimsInIdToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_name: {
        value: cdktf.stringToHclTerraform(this._clientName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_name_language_key: {
        value: cdktf.stringToHclTerraform(this._clientNameLanguageKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      elvia_ad_login_enabled: {
        value: cdktf.booleanToHclTerraform(this._elviaAdLoginEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idporten_login_enabled: {
        value: cdktf.booleanToHclTerraform(this._idportenLoginEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_login_enabled: {
        value: cdktf.booleanToHclTerraform(this._localLoginEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      one_time_usage_for_refresh_tokens: {
        value: cdktf.booleanToHclTerraform(this._oneTimeUsageForRefreshTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      post_logout_redirect_uri_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postLogoutRedirectUriPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redirect_uri_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUriPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_token_life_time: {
        value: cdktf.numberToHclTerraform(this._refreshTokenLifeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_client_secret: {
        value: cdktf.booleanToHclTerraform(this._requireClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_taint_version: {
        value: cdktf.stringToHclTerraform(this._resourceTaintVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      test_user_login_enabled: {
        value: cdktf.booleanToHclTerraform(this._testUserLoginEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_properties: {
        value: cdktf.listMapperHcl(userclientClientPropertiesToHclTerraform, true)(this._clientProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserclientClientPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
