// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationOidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access token role assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#access_token_role_assertion ApplicationOidc#access_token_role_assertion}
  */
  readonly accessTokenRoleAssertion?: boolean | cdktf.IResolvable;
  /**
  * Access token type, supported values: OIDC_TOKEN_TYPE_BEARER, OIDC_TOKEN_TYPE_JWT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#access_token_type ApplicationOidc#access_token_type}
  */
  readonly accessTokenType?: string;
  /**
  * Additional origins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#additional_origins ApplicationOidc#additional_origins}
  */
  readonly additionalOrigins?: string[];
  /**
  * App type, supported values: OIDC_APP_TYPE_WEB, OIDC_APP_TYPE_USER_AGENT, OIDC_APP_TYPE_NATIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#app_type ApplicationOidc#app_type}
  */
  readonly appType?: string;
  /**
  * Auth method type, supported values: OIDC_AUTH_METHOD_TYPE_BASIC, OIDC_AUTH_METHOD_TYPE_POST, OIDC_AUTH_METHOD_TYPE_NONE, OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#auth_method_type ApplicationOidc#auth_method_type}
  */
  readonly authMethodType?: string;
  /**
  * Clockskew
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#clock_skew ApplicationOidc#clock_skew}
  */
  readonly clockSkew?: string;
  /**
  * Dev mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#dev_mode ApplicationOidc#dev_mode}
  */
  readonly devMode?: boolean | cdktf.IResolvable;
  /**
  * Grant types, supported values: OIDC_GRANT_TYPE_AUTHORIZATION_CODE, OIDC_GRANT_TYPE_IMPLICIT, OIDC_GRANT_TYPE_REFRESH_TOKEN, OIDC_GRANT_TYPE_DEVICE_CODE, OIDC_GRANT_TYPE_TOKEN_EXCHANGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#grant_types ApplicationOidc#grant_types}
  */
  readonly grantTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#id ApplicationOidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID token role assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#id_token_role_assertion ApplicationOidc#id_token_role_assertion}
  */
  readonly idTokenRoleAssertion?: boolean | cdktf.IResolvable;
  /**
  * Token userinfo assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#id_token_userinfo_assertion ApplicationOidc#id_token_userinfo_assertion}
  */
  readonly idTokenUserinfoAssertion?: boolean | cdktf.IResolvable;
  /**
  * Name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#name ApplicationOidc#name}
  */
  readonly name: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#org_id ApplicationOidc#org_id}
  */
  readonly orgId?: string;
  /**
  * Post logout redirect URIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#post_logout_redirect_uris ApplicationOidc#post_logout_redirect_uris}
  */
  readonly postLogoutRedirectUris?: string[];
  /**
  * ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#project_id ApplicationOidc#project_id}
  */
  readonly projectId: string;
  /**
  * RedirectURIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#redirect_uris ApplicationOidc#redirect_uris}
  */
  readonly redirectUris: string[];
  /**
  * Response type, supported values: OIDC_RESPONSE_TYPE_CODE, OIDC_RESPONSE_TYPE_ID_TOKEN, OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#response_types ApplicationOidc#response_types}
  */
  readonly responseTypes: string[];
  /**
  * Skip the successful login page on native apps and directly redirect the user to the callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#skip_native_app_success_page ApplicationOidc#skip_native_app_success_page}
  */
  readonly skipNativeAppSuccessPage?: boolean | cdktf.IResolvable;
  /**
  * Version, supported values: OIDC_VERSION_1_0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#version ApplicationOidc#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc zitadel_application_oidc}
*/
export class ApplicationOidc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_application_oidc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationOidc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationOidc to import
  * @param importFromId The id of the existing ApplicationOidc that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationOidc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_application_oidc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/application_oidc zitadel_application_oidc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationOidcConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationOidcConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_application_oidc',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenRoleAssertion = config.accessTokenRoleAssertion;
    this._accessTokenType = config.accessTokenType;
    this._additionalOrigins = config.additionalOrigins;
    this._appType = config.appType;
    this._authMethodType = config.authMethodType;
    this._clockSkew = config.clockSkew;
    this._devMode = config.devMode;
    this._grantTypes = config.grantTypes;
    this._id = config.id;
    this._idTokenRoleAssertion = config.idTokenRoleAssertion;
    this._idTokenUserinfoAssertion = config.idTokenUserinfoAssertion;
    this._name = config.name;
    this._orgId = config.orgId;
    this._postLogoutRedirectUris = config.postLogoutRedirectUris;
    this._projectId = config.projectId;
    this._redirectUris = config.redirectUris;
    this._responseTypes = config.responseTypes;
    this._skipNativeAppSuccessPage = config.skipNativeAppSuccessPage;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_role_assertion - computed: false, optional: true, required: false
  private _accessTokenRoleAssertion?: boolean | cdktf.IResolvable; 
  public get accessTokenRoleAssertion() {
    return this.getBooleanAttribute('access_token_role_assertion');
  }
  public set accessTokenRoleAssertion(value: boolean | cdktf.IResolvable) {
    this._accessTokenRoleAssertion = value;
  }
  public resetAccessTokenRoleAssertion() {
    this._accessTokenRoleAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenRoleAssertionInput() {
    return this._accessTokenRoleAssertion;
  }

  // access_token_type - computed: false, optional: true, required: false
  private _accessTokenType?: string; 
  public get accessTokenType() {
    return this.getStringAttribute('access_token_type');
  }
  public set accessTokenType(value: string) {
    this._accessTokenType = value;
  }
  public resetAccessTokenType() {
    this._accessTokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTypeInput() {
    return this._accessTokenType;
  }

  // additional_origins - computed: false, optional: true, required: false
  private _additionalOrigins?: string[]; 
  public get additionalOrigins() {
    return this.getListAttribute('additional_origins');
  }
  public set additionalOrigins(value: string[]) {
    this._additionalOrigins = value;
  }
  public resetAdditionalOrigins() {
    this._additionalOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOriginsInput() {
    return this._additionalOrigins;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // auth_method_type - computed: false, optional: true, required: false
  private _authMethodType?: string; 
  public get authMethodType() {
    return this.getStringAttribute('auth_method_type');
  }
  public set authMethodType(value: string) {
    this._authMethodType = value;
  }
  public resetAuthMethodType() {
    this._authMethodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodTypeInput() {
    return this._authMethodType;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // clock_skew - computed: false, optional: true, required: false
  private _clockSkew?: string; 
  public get clockSkew() {
    return this.getStringAttribute('clock_skew');
  }
  public set clockSkew(value: string) {
    this._clockSkew = value;
  }
  public resetClockSkew() {
    this._clockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewInput() {
    return this._clockSkew;
  }

  // dev_mode - computed: false, optional: true, required: false
  private _devMode?: boolean | cdktf.IResolvable; 
  public get devMode() {
    return this.getBooleanAttribute('dev_mode');
  }
  public set devMode(value: boolean | cdktf.IResolvable) {
    this._devMode = value;
  }
  public resetDevMode() {
    this._devMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devModeInput() {
    return this._devMode;
  }

  // grant_types - computed: false, optional: false, required: true
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
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

  // id_token_role_assertion - computed: false, optional: true, required: false
  private _idTokenRoleAssertion?: boolean | cdktf.IResolvable; 
  public get idTokenRoleAssertion() {
    return this.getBooleanAttribute('id_token_role_assertion');
  }
  public set idTokenRoleAssertion(value: boolean | cdktf.IResolvable) {
    this._idTokenRoleAssertion = value;
  }
  public resetIdTokenRoleAssertion() {
    this._idTokenRoleAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenRoleAssertionInput() {
    return this._idTokenRoleAssertion;
  }

  // id_token_userinfo_assertion - computed: false, optional: true, required: false
  private _idTokenUserinfoAssertion?: boolean | cdktf.IResolvable; 
  public get idTokenUserinfoAssertion() {
    return this.getBooleanAttribute('id_token_userinfo_assertion');
  }
  public set idTokenUserinfoAssertion(value: boolean | cdktf.IResolvable) {
    this._idTokenUserinfoAssertion = value;
  }
  public resetIdTokenUserinfoAssertion() {
    this._idTokenUserinfoAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenUserinfoAssertionInput() {
    return this._idTokenUserinfoAssertion;
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

  // post_logout_redirect_uris - computed: false, optional: true, required: false
  private _postLogoutRedirectUris?: string[]; 
  public get postLogoutRedirectUris() {
    return this.getListAttribute('post_logout_redirect_uris');
  }
  public set postLogoutRedirectUris(value: string[]) {
    this._postLogoutRedirectUris = value;
  }
  public resetPostLogoutRedirectUris() {
    this._postLogoutRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUrisInput() {
    return this._postLogoutRedirectUris;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // redirect_uris - computed: false, optional: false, required: true
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // response_types - computed: false, optional: false, required: true
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // skip_native_app_success_page - computed: false, optional: true, required: false
  private _skipNativeAppSuccessPage?: boolean | cdktf.IResolvable; 
  public get skipNativeAppSuccessPage() {
    return this.getBooleanAttribute('skip_native_app_success_page');
  }
  public set skipNativeAppSuccessPage(value: boolean | cdktf.IResolvable) {
    this._skipNativeAppSuccessPage = value;
  }
  public resetSkipNativeAppSuccessPage() {
    this._skipNativeAppSuccessPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNativeAppSuccessPageInput() {
    return this._skipNativeAppSuccessPage;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_role_assertion: cdktf.booleanToTerraform(this._accessTokenRoleAssertion),
      access_token_type: cdktf.stringToTerraform(this._accessTokenType),
      additional_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalOrigins),
      app_type: cdktf.stringToTerraform(this._appType),
      auth_method_type: cdktf.stringToTerraform(this._authMethodType),
      clock_skew: cdktf.stringToTerraform(this._clockSkew),
      dev_mode: cdktf.booleanToTerraform(this._devMode),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantTypes),
      id: cdktf.stringToTerraform(this._id),
      id_token_role_assertion: cdktf.booleanToTerraform(this._idTokenRoleAssertion),
      id_token_userinfo_assertion: cdktf.booleanToTerraform(this._idTokenUserinfoAssertion),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postLogoutRedirectUris),
      project_id: cdktf.stringToTerraform(this._projectId),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
      response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseTypes),
      skip_native_app_success_page: cdktf.booleanToTerraform(this._skipNativeAppSuccessPage),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_role_assertion: {
        value: cdktf.booleanToHclTerraform(this._accessTokenRoleAssertion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_token_type: {
        value: cdktf.stringToHclTerraform(this._accessTokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalOrigins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_type: {
        value: cdktf.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method_type: {
        value: cdktf.stringToHclTerraform(this._authMethodType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock_skew: {
        value: cdktf.stringToHclTerraform(this._clockSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_mode: {
        value: cdktf.booleanToHclTerraform(this._devMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_token_role_assertion: {
        value: cdktf.booleanToHclTerraform(this._idTokenRoleAssertion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id_token_userinfo_assertion: {
        value: cdktf.booleanToHclTerraform(this._idTokenUserinfoAssertion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      post_logout_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postLogoutRedirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_native_app_success_page: {
        value: cdktf.booleanToHclTerraform(this._skipNativeAppSuccessPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
