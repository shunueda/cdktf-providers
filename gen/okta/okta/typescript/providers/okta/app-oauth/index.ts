// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppOauthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom error page URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#accessibility_error_redirect_url AppOauth#accessibility_error_redirect_url}
  */
  readonly accessibilityErrorRedirectUrl?: string;
  /**
  * Custom login page URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#accessibility_login_redirect_url AppOauth#accessibility_login_redirect_url}
  */
  readonly accessibilityLoginRedirectUrl?: string;
  /**
  * Enable self service. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#accessibility_self_service AppOauth#accessibility_self_service}
  */
  readonly accessibilitySelfService?: boolean | cdktf.IResolvable;
  /**
  * Application notes for admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#admin_note AppOauth#admin_note}
  */
  readonly adminNote?: string;
  /**
  * Displays specific appLinks for the app. The value for each application link should be boolean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#app_links_json AppOauth#app_links_json}
  */
  readonly appLinksJson?: string;
  /**
  * Application settings in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#app_settings_json AppOauth#app_settings_json}
  */
  readonly appSettingsJson?: string;
  /**
  * The ID of the associated app_signon_policy. If this property is removed from the application, the default sign-on-policy will be associated with this application. From now on, there is no need to attach authentication_policy for applications of type SERVICE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#authentication_policy AppOauth#authentication_policy}
  */
  readonly authenticationPolicy?: string;
  /**
  * Requested key rotation mode. If
  * 				auto_key_rotation isn't specified, the client automatically opts in for Okta's
  * 				key rotation. You can update this property via the API or via the administrator
  * 				UI.
  * 				See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#auto_key_rotation AppOauth#auto_key_rotation}
  */
  readonly autoKeyRotation?: boolean | cdktf.IResolvable;
  /**
  * Display auto submit toolbar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#auto_submit_toolbar AppOauth#auto_submit_toolbar}
  */
  readonly autoSubmitToolbar?: boolean | cdktf.IResolvable;
  /**
  * The user provided OAuth client secret key value, this can be set when token_endpoint_auth_method is client_secret_basic. This does nothing when `omit_secret is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#client_basic_secret AppOauth#client_basic_secret}
  */
  readonly clientBasicSecret?: string;
  /**
  * OAuth client ID. If set during creation, app is created with this id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#client_id AppOauth#client_id}
  */
  readonly clientId?: string;
  /**
  * URI to a web page providing information about the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#client_uri AppOauth#client_uri}
  */
  readonly clientUri?: string;
  /**
  * *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#consent_method AppOauth#consent_method}
  */
  readonly consentMethod?: string;
  /**
  * Application notes for end users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#enduser_note AppOauth#enduser_note}
  */
  readonly enduserNote?: string;
  /**
  * *Early Access Property*. Determines whether Okta sends sid and iss in the logout request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#frontchannel_logout_session_required AppOauth#frontchannel_logout_session_required}
  */
  readonly frontchannelLogoutSessionRequired?: boolean | cdktf.IResolvable;
  /**
  * *Early Access Property*. URL where Okta sends the logout request. Required when participate_slo is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#frontchannel_logout_uri AppOauth#frontchannel_logout_uri}
  */
  readonly frontchannelLogoutUri?: string;
  /**
  * List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#grant_types AppOauth#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * Do not display application icon on mobile app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#hide_ios AppOauth#hide_ios}
  */
  readonly hideIos?: boolean | cdktf.IResolvable;
  /**
  * Do not display application icon to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#hide_web AppOauth#hide_web}
  */
  readonly hideWeb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#id AppOauth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * *Early Access Property*. Enable Federation Broker Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#implicit_assignment AppOauth#implicit_assignment}
  */
  readonly implicitAssignment?: boolean | cdktf.IResolvable;
  /**
  * *Early Access Property*. Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#issuer_mode AppOauth#issuer_mode}
  */
  readonly issuerMode?: string;
  /**
  * URL reference to JWKS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#jwks_uri AppOauth#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * The Application's display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#label AppOauth#label}
  */
  readonly label: string;
  /**
  * The type of Idp-Initiated login that the client supports, if any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#login_mode AppOauth#login_mode}
  */
  readonly loginMode?: string;
  /**
  * List of scopes to use for the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#login_scopes AppOauth#login_scopes}
  */
  readonly loginScopes?: string[];
  /**
  * URI that initiates login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#login_uri AppOauth#login_uri}
  */
  readonly loginUri?: string;
  /**
  * Local file path to the logo. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#logo AppOauth#logo}
  */
  readonly logo?: string;
  /**
  * URI that references a logo for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#logo_uri AppOauth#logo_uri}
  */
  readonly logoUri?: string;
  /**
  * This tells the provider not manage the client_secret value in state. When this is false (the default), it will cause the auto-generated client_secret to be persisted in the client_secret attribute in state. This also means that every time an update to this app is run, this value is also set on the API. If this changes from false => true, the `client_secret` is dropped from state and the secret at the time of the apply is what remains. If this is ever changes from true => false your app will be recreated, due to the need to regenerate a secret we can store in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#omit_secret AppOauth#omit_secret}
  */
  readonly omitSecret?: boolean | cdktf.IResolvable;
  /**
  * *Early Access Property*. Allows the app to participate in front-channel Single Logout. Note: You can only enable participate_slo for web and browser application types. When set to true, frontchannel_logout_uri must also be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#participate_slo AppOauth#participate_slo}
  */
  readonly participateSlo?: boolean | cdktf.IResolvable;
  /**
  * Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#pkce_required AppOauth#pkce_required}
  */
  readonly pkceRequired?: boolean | cdktf.IResolvable;
  /**
  * URI to web page providing client policy document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#policy_uri AppOauth#policy_uri}
  */
  readonly policyUri?: string;
  /**
  * List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#post_logout_redirect_uris AppOauth#post_logout_redirect_uris}
  */
  readonly postLogoutRedirectUris?: string[];
  /**
  * Custom JSON that represents an OAuth application's profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#profile AppOauth#profile}
  */
  readonly profile?: string;
  /**
  * List of URIs for use in the redirect-based flow. This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#redirect_uris AppOauth#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * *Early Access Property* Grace period for token rotation, required with grant types refresh_token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#refresh_token_leeway AppOauth#refresh_token_leeway}
  */
  readonly refreshTokenLeeway?: number;
  /**
  * *Early Access Property* Refresh token rotation behavior, required with grant types refresh_token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#refresh_token_rotation AppOauth#refresh_token_rotation}
  */
  readonly refreshTokenRotation?: string;
  /**
  * List of OAuth 2.0 response type strings. Valid values are any combination of: `code`, `token`, and `id_token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#response_types AppOauth#response_types}
  */
  readonly responseTypes?: string[];
  /**
  * Status of application. By default, it is `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#status AppOauth#status}
  */
  readonly status?: string;
  /**
  * Requested authentication method for the token endpoint, valid values include:  'client_secret_basic', 'client_secret_post', 'client_secret_jwt', 'private_key_jwt', 'none', etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#token_endpoint_auth_method AppOauth#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod?: string;
  /**
  * URI to web page providing client tos (terms of service).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#tos_uri AppOauth#tos_uri}
  */
  readonly tosUri?: string;
  /**
  * The type of client application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#type AppOauth#type}
  */
  readonly type: string;
  /**
  * Username template. Default: `${source.login}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#user_name_template AppOauth#user_name_template}
  */
  readonly userNameTemplate?: string;
  /**
  * Push username on update. Valid values: `PUSH` and `DONT_PUSH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#user_name_template_push_status AppOauth#user_name_template_push_status}
  */
  readonly userNameTemplatePushStatus?: string;
  /**
  * Username template suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#user_name_template_suffix AppOauth#user_name_template_suffix}
  */
  readonly userNameTemplateSuffix?: string;
  /**
  * Username template type. Default: `BUILT_IN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#user_name_template_type AppOauth#user_name_template_type}
  */
  readonly userNameTemplateType?: string;
  /**
  * *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#wildcard_redirect AppOauth#wildcard_redirect}
  */
  readonly wildcardRedirect?: string;
  /**
  * groups_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#groups_claim AppOauth#groups_claim}
  */
  readonly groupsClaim?: AppOauthGroupsClaim;
  /**
  * jwks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#jwks AppOauth#jwks}
  */
  readonly jwks?: AppOauthJwks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#timeouts AppOauth#timeouts}
  */
  readonly timeouts?: AppOauthTimeouts;
}
export interface AppOauthGroupsClaim {
  /**
  * Groups claim filter. Can only be set if type is FILTER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#filter_type AppOauth#filter_type}
  */
  readonly filterType?: string;
  /**
  * Name of the claim that will be used in the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#name AppOauth#name}
  */
  readonly name: string;
  /**
  * Groups claim type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#type AppOauth#type}
  */
  readonly type: string;
  /**
  * Value of the claim. Can be an Okta Expression Language statement that evaluates at the time the token is minted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#value AppOauth#value}
  */
  readonly value: string;
}

export function appOauthGroupsClaimToTerraform(struct?: AppOauthGroupsClaimOutputReference | AppOauthGroupsClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appOauthGroupsClaimToHclTerraform(struct?: AppOauthGroupsClaimOutputReference | AppOauthGroupsClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOauthGroupsClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOauthGroupsClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOauthGroupsClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // issuer_mode - computed: true, optional: false, required: false
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface AppOauthJwks {
  /**
  * RSA Exponent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#e AppOauth#e}
  */
  readonly e?: string;
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#kid AppOauth#kid}
  */
  readonly kid: string;
  /**
  * Key type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#kty AppOauth#kty}
  */
  readonly kty: string;
  /**
  * RSA Modulus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#n AppOauth#n}
  */
  readonly n?: string;
  /**
  * X coordinate of the elliptic curve point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#x AppOauth#x}
  */
  readonly x?: string;
  /**
  * Y coordinate of the elliptic curve point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#y AppOauth#y}
  */
  readonly y?: string;
}

export function appOauthJwksToTerraform(struct?: AppOauthJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    e: cdktf.stringToTerraform(struct!.e),
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    x: cdktf.stringToTerraform(struct!.x),
    y: cdktf.stringToTerraform(struct!.y),
  }
}


export function appOauthJwksToHclTerraform(struct?: AppOauthJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    e: {
      value: cdktf.stringToHclTerraform(struct!.e),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kty: {
      value: cdktf.stringToHclTerraform(struct!.kty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n: {
      value: cdktf.stringToHclTerraform(struct!.n),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOauthJwksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppOauthJwks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._e !== undefined) {
      hasAnyValues = true;
      internalValueResult.e = this._e;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._kty !== undefined) {
      hasAnyValues = true;
      internalValueResult.kty = this._kty;
    }
    if (this._n !== undefined) {
      hasAnyValues = true;
      internalValueResult.n = this._n;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOauthJwks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._e = undefined;
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._e = value.e;
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // e - computed: false, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // kty - computed: false, optional: false, required: true
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ktyInput() {
    return this._kty;
  }

  // n - computed: false, optional: true, required: false
  private _n?: string; 
  public get n() {
    return this.getStringAttribute('n');
  }
  public set n(value: string) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

export class AppOauthJwksList extends cdktf.ComplexList {
  public internalValue? : AppOauthJwks[] | cdktf.IResolvable

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
  public get(index: number): AppOauthJwksOutputReference {
    return new AppOauthJwksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppOauthTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#create AppOauth#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#read AppOauth#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#update AppOauth#update}
  */
  readonly update?: string;
}

export function appOauthTimeoutsToTerraform(struct?: AppOauthTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function appOauthTimeoutsToHclTerraform(struct?: AppOauthTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOauthTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppOauthTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOauthTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth okta_app_oauth}
*/
export class AppOauth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_oauth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppOauth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppOauth to import
  * @param importFromId The id of the existing AppOauth that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppOauth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app_oauth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_oauth okta_app_oauth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppOauthConfig
  */
  public constructor(scope: Construct, id: string, config: AppOauthConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_oauth',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessibilityErrorRedirectUrl = config.accessibilityErrorRedirectUrl;
    this._accessibilityLoginRedirectUrl = config.accessibilityLoginRedirectUrl;
    this._accessibilitySelfService = config.accessibilitySelfService;
    this._adminNote = config.adminNote;
    this._appLinksJson = config.appLinksJson;
    this._appSettingsJson = config.appSettingsJson;
    this._authenticationPolicy = config.authenticationPolicy;
    this._autoKeyRotation = config.autoKeyRotation;
    this._autoSubmitToolbar = config.autoSubmitToolbar;
    this._clientBasicSecret = config.clientBasicSecret;
    this._clientId = config.clientId;
    this._clientUri = config.clientUri;
    this._consentMethod = config.consentMethod;
    this._enduserNote = config.enduserNote;
    this._frontchannelLogoutSessionRequired = config.frontchannelLogoutSessionRequired;
    this._frontchannelLogoutUri = config.frontchannelLogoutUri;
    this._grantTypes = config.grantTypes;
    this._hideIos = config.hideIos;
    this._hideWeb = config.hideWeb;
    this._id = config.id;
    this._implicitAssignment = config.implicitAssignment;
    this._issuerMode = config.issuerMode;
    this._jwksUri = config.jwksUri;
    this._label = config.label;
    this._loginMode = config.loginMode;
    this._loginScopes = config.loginScopes;
    this._loginUri = config.loginUri;
    this._logo = config.logo;
    this._logoUri = config.logoUri;
    this._omitSecret = config.omitSecret;
    this._participateSlo = config.participateSlo;
    this._pkceRequired = config.pkceRequired;
    this._policyUri = config.policyUri;
    this._postLogoutRedirectUris = config.postLogoutRedirectUris;
    this._profile = config.profile;
    this._redirectUris = config.redirectUris;
    this._refreshTokenLeeway = config.refreshTokenLeeway;
    this._refreshTokenRotation = config.refreshTokenRotation;
    this._responseTypes = config.responseTypes;
    this._status = config.status;
    this._tokenEndpointAuthMethod = config.tokenEndpointAuthMethod;
    this._tosUri = config.tosUri;
    this._type = config.type;
    this._userNameTemplate = config.userNameTemplate;
    this._userNameTemplatePushStatus = config.userNameTemplatePushStatus;
    this._userNameTemplateSuffix = config.userNameTemplateSuffix;
    this._userNameTemplateType = config.userNameTemplateType;
    this._wildcardRedirect = config.wildcardRedirect;
    this._groupsClaim.internalValue = config.groupsClaim;
    this._jwks.internalValue = config.jwks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessibility_error_redirect_url - computed: false, optional: true, required: false
  private _accessibilityErrorRedirectUrl?: string; 
  public get accessibilityErrorRedirectUrl() {
    return this.getStringAttribute('accessibility_error_redirect_url');
  }
  public set accessibilityErrorRedirectUrl(value: string) {
    this._accessibilityErrorRedirectUrl = value;
  }
  public resetAccessibilityErrorRedirectUrl() {
    this._accessibilityErrorRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityErrorRedirectUrlInput() {
    return this._accessibilityErrorRedirectUrl;
  }

  // accessibility_login_redirect_url - computed: false, optional: true, required: false
  private _accessibilityLoginRedirectUrl?: string; 
  public get accessibilityLoginRedirectUrl() {
    return this.getStringAttribute('accessibility_login_redirect_url');
  }
  public set accessibilityLoginRedirectUrl(value: string) {
    this._accessibilityLoginRedirectUrl = value;
  }
  public resetAccessibilityLoginRedirectUrl() {
    this._accessibilityLoginRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityLoginRedirectUrlInput() {
    return this._accessibilityLoginRedirectUrl;
  }

  // accessibility_self_service - computed: false, optional: true, required: false
  private _accessibilitySelfService?: boolean | cdktf.IResolvable; 
  public get accessibilitySelfService() {
    return this.getBooleanAttribute('accessibility_self_service');
  }
  public set accessibilitySelfService(value: boolean | cdktf.IResolvable) {
    this._accessibilitySelfService = value;
  }
  public resetAccessibilitySelfService() {
    this._accessibilitySelfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilitySelfServiceInput() {
    return this._accessibilitySelfService;
  }

  // admin_note - computed: false, optional: true, required: false
  private _adminNote?: string; 
  public get adminNote() {
    return this.getStringAttribute('admin_note');
  }
  public set adminNote(value: string) {
    this._adminNote = value;
  }
  public resetAdminNote() {
    this._adminNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNoteInput() {
    return this._adminNote;
  }

  // app_links_json - computed: false, optional: true, required: false
  private _appLinksJson?: string; 
  public get appLinksJson() {
    return this.getStringAttribute('app_links_json');
  }
  public set appLinksJson(value: string) {
    this._appLinksJson = value;
  }
  public resetAppLinksJson() {
    this._appLinksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLinksJsonInput() {
    return this._appLinksJson;
  }

  // app_settings_json - computed: false, optional: true, required: false
  private _appSettingsJson?: string; 
  public get appSettingsJson() {
    return this.getStringAttribute('app_settings_json');
  }
  public set appSettingsJson(value: string) {
    this._appSettingsJson = value;
  }
  public resetAppSettingsJson() {
    this._appSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsJsonInput() {
    return this._appSettingsJson;
  }

  // authentication_policy - computed: true, optional: true, required: false
  private _authenticationPolicy?: string; 
  public get authenticationPolicy() {
    return this.getStringAttribute('authentication_policy');
  }
  public set authenticationPolicy(value: string) {
    this._authenticationPolicy = value;
  }
  public resetAuthenticationPolicy() {
    this._authenticationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyInput() {
    return this._authenticationPolicy;
  }

  // auto_key_rotation - computed: false, optional: true, required: false
  private _autoKeyRotation?: boolean | cdktf.IResolvable; 
  public get autoKeyRotation() {
    return this.getBooleanAttribute('auto_key_rotation');
  }
  public set autoKeyRotation(value: boolean | cdktf.IResolvable) {
    this._autoKeyRotation = value;
  }
  public resetAutoKeyRotation() {
    this._autoKeyRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoKeyRotationInput() {
    return this._autoKeyRotation;
  }

  // auto_submit_toolbar - computed: false, optional: true, required: false
  private _autoSubmitToolbar?: boolean | cdktf.IResolvable; 
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar');
  }
  public set autoSubmitToolbar(value: boolean | cdktf.IResolvable) {
    this._autoSubmitToolbar = value;
  }
  public resetAutoSubmitToolbar() {
    this._autoSubmitToolbar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubmitToolbarInput() {
    return this._autoSubmitToolbar;
  }

  // client_basic_secret - computed: false, optional: true, required: false
  private _clientBasicSecret?: string; 
  public get clientBasicSecret() {
    return this.getStringAttribute('client_basic_secret');
  }
  public set clientBasicSecret(value: string) {
    this._clientBasicSecret = value;
  }
  public resetClientBasicSecret() {
    this._clientBasicSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBasicSecretInput() {
    return this._clientBasicSecret;
  }

  // client_id - computed: true, optional: true, required: false
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

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_uri - computed: false, optional: true, required: false
  private _clientUri?: string; 
  public get clientUri() {
    return this.getStringAttribute('client_uri');
  }
  public set clientUri(value: string) {
    this._clientUri = value;
  }
  public resetClientUri() {
    this._clientUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUriInput() {
    return this._clientUri;
  }

  // consent_method - computed: false, optional: true, required: false
  private _consentMethod?: string; 
  public get consentMethod() {
    return this.getStringAttribute('consent_method');
  }
  public set consentMethod(value: string) {
    this._consentMethod = value;
  }
  public resetConsentMethod() {
    this._consentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentMethodInput() {
    return this._consentMethod;
  }

  // enduser_note - computed: false, optional: true, required: false
  private _enduserNote?: string; 
  public get enduserNote() {
    return this.getStringAttribute('enduser_note');
  }
  public set enduserNote(value: string) {
    this._enduserNote = value;
  }
  public resetEnduserNote() {
    this._enduserNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enduserNoteInput() {
    return this._enduserNote;
  }

  // frontchannel_logout_session_required - computed: false, optional: true, required: false
  private _frontchannelLogoutSessionRequired?: boolean | cdktf.IResolvable; 
  public get frontchannelLogoutSessionRequired() {
    return this.getBooleanAttribute('frontchannel_logout_session_required');
  }
  public set frontchannelLogoutSessionRequired(value: boolean | cdktf.IResolvable) {
    this._frontchannelLogoutSessionRequired = value;
  }
  public resetFrontchannelLogoutSessionRequired() {
    this._frontchannelLogoutSessionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontchannelLogoutSessionRequiredInput() {
    return this._frontchannelLogoutSessionRequired;
  }

  // frontchannel_logout_uri - computed: false, optional: true, required: false
  private _frontchannelLogoutUri?: string; 
  public get frontchannelLogoutUri() {
    return this.getStringAttribute('frontchannel_logout_uri');
  }
  public set frontchannelLogoutUri(value: string) {
    this._frontchannelLogoutUri = value;
  }
  public resetFrontchannelLogoutUri() {
    this._frontchannelLogoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontchannelLogoutUriInput() {
    return this._frontchannelLogoutUri;
  }

  // grant_types - computed: true, optional: true, required: false
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  public resetGrantTypes() {
    this._grantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
  }

  // hide_ios - computed: false, optional: true, required: false
  private _hideIos?: boolean | cdktf.IResolvable; 
  public get hideIos() {
    return this.getBooleanAttribute('hide_ios');
  }
  public set hideIos(value: boolean | cdktf.IResolvable) {
    this._hideIos = value;
  }
  public resetHideIos() {
    this._hideIos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIosInput() {
    return this._hideIos;
  }

  // hide_web - computed: false, optional: true, required: false
  private _hideWeb?: boolean | cdktf.IResolvable; 
  public get hideWeb() {
    return this.getBooleanAttribute('hide_web');
  }
  public set hideWeb(value: boolean | cdktf.IResolvable) {
    this._hideWeb = value;
  }
  public resetHideWeb() {
    this._hideWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideWebInput() {
    return this._hideWeb;
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

  // implicit_assignment - computed: false, optional: true, required: false
  private _implicitAssignment?: boolean | cdktf.IResolvable; 
  public get implicitAssignment() {
    return this.getBooleanAttribute('implicit_assignment');
  }
  public set implicitAssignment(value: boolean | cdktf.IResolvable) {
    this._implicitAssignment = value;
  }
  public resetImplicitAssignment() {
    this._implicitAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitAssignmentInput() {
    return this._implicitAssignment;
  }

  // issuer_mode - computed: false, optional: true, required: false
  private _issuerMode?: string; 
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }
  public set issuerMode(value: string) {
    this._issuerMode = value;
  }
  public resetIssuerMode() {
    this._issuerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerModeInput() {
    return this._issuerMode;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // login_mode - computed: false, optional: true, required: false
  private _loginMode?: string; 
  public get loginMode() {
    return this.getStringAttribute('login_mode');
  }
  public set loginMode(value: string) {
    this._loginMode = value;
  }
  public resetLoginMode() {
    this._loginMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginModeInput() {
    return this._loginMode;
  }

  // login_scopes - computed: false, optional: true, required: false
  private _loginScopes?: string[]; 
  public get loginScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('login_scopes'));
  }
  public set loginScopes(value: string[]) {
    this._loginScopes = value;
  }
  public resetLoginScopes() {
    this._loginScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginScopesInput() {
    return this._loginScopes;
  }

  // login_uri - computed: false, optional: true, required: false
  private _loginUri?: string; 
  public get loginUri() {
    return this.getStringAttribute('login_uri');
  }
  public set loginUri(value: string) {
    this._loginUri = value;
  }
  public resetLoginUri() {
    this._loginUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUriInput() {
    return this._loginUri;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // logo_uri - computed: false, optional: true, required: false
  private _logoUri?: string; 
  public get logoUri() {
    return this.getStringAttribute('logo_uri');
  }
  public set logoUri(value: string) {
    this._logoUri = value;
  }
  public resetLogoUri() {
    this._logoUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUriInput() {
    return this._logoUri;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // omit_secret - computed: false, optional: true, required: false
  private _omitSecret?: boolean | cdktf.IResolvable; 
  public get omitSecret() {
    return this.getBooleanAttribute('omit_secret');
  }
  public set omitSecret(value: boolean | cdktf.IResolvable) {
    this._omitSecret = value;
  }
  public resetOmitSecret() {
    this._omitSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitSecretInput() {
    return this._omitSecret;
  }

  // participate_slo - computed: false, optional: true, required: false
  private _participateSlo?: boolean | cdktf.IResolvable; 
  public get participateSlo() {
    return this.getBooleanAttribute('participate_slo');
  }
  public set participateSlo(value: boolean | cdktf.IResolvable) {
    this._participateSlo = value;
  }
  public resetParticipateSlo() {
    this._participateSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get participateSloInput() {
    return this._participateSlo;
  }

  // pkce_required - computed: true, optional: true, required: false
  private _pkceRequired?: boolean | cdktf.IResolvable; 
  public get pkceRequired() {
    return this.getBooleanAttribute('pkce_required');
  }
  public set pkceRequired(value: boolean | cdktf.IResolvable) {
    this._pkceRequired = value;
  }
  public resetPkceRequired() {
    this._pkceRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceRequiredInput() {
    return this._pkceRequired;
  }

  // policy_uri - computed: false, optional: true, required: false
  private _policyUri?: string; 
  public get policyUri() {
    return this.getStringAttribute('policy_uri');
  }
  public set policyUri(value: string) {
    this._policyUri = value;
  }
  public resetPolicyUri() {
    this._policyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriInput() {
    return this._policyUri;
  }

  // post_logout_redirect_uris - computed: false, optional: true, required: false
  private _postLogoutRedirectUris?: string[]; 
  public get postLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uris'));
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // refresh_token_leeway - computed: false, optional: true, required: false
  private _refreshTokenLeeway?: number; 
  public get refreshTokenLeeway() {
    return this.getNumberAttribute('refresh_token_leeway');
  }
  public set refreshTokenLeeway(value: number) {
    this._refreshTokenLeeway = value;
  }
  public resetRefreshTokenLeeway() {
    this._refreshTokenLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenLeewayInput() {
    return this._refreshTokenLeeway;
  }

  // refresh_token_rotation - computed: false, optional: true, required: false
  private _refreshTokenRotation?: string; 
  public get refreshTokenRotation() {
    return this.getStringAttribute('refresh_token_rotation');
  }
  public set refreshTokenRotation(value: string) {
    this._refreshTokenRotation = value;
  }
  public resetRefreshTokenRotation() {
    this._refreshTokenRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRotationInput() {
    return this._refreshTokenRotation;
  }

  // response_types - computed: true, optional: true, required: false
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_types'));
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  public resetResponseTypes() {
    this._responseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // sign_on_mode - computed: true, optional: false, required: false
  public get signOnMode() {
    return this.getStringAttribute('sign_on_mode');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // token_endpoint_auth_method - computed: false, optional: true, required: false
  private _tokenEndpointAuthMethod?: string; 
  public get tokenEndpointAuthMethod() {
    return this.getStringAttribute('token_endpoint_auth_method');
  }
  public set tokenEndpointAuthMethod(value: string) {
    this._tokenEndpointAuthMethod = value;
  }
  public resetTokenEndpointAuthMethod() {
    this._tokenEndpointAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthMethodInput() {
    return this._tokenEndpointAuthMethod;
  }

  // tos_uri - computed: false, optional: true, required: false
  private _tosUri?: string; 
  public get tosUri() {
    return this.getStringAttribute('tos_uri');
  }
  public set tosUri(value: string) {
    this._tosUri = value;
  }
  public resetTosUri() {
    this._tosUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosUriInput() {
    return this._tosUri;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_name_template - computed: false, optional: true, required: false
  private _userNameTemplate?: string; 
  public get userNameTemplate() {
    return this.getStringAttribute('user_name_template');
  }
  public set userNameTemplate(value: string) {
    this._userNameTemplate = value;
  }
  public resetUserNameTemplate() {
    this._userNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateInput() {
    return this._userNameTemplate;
  }

  // user_name_template_push_status - computed: false, optional: true, required: false
  private _userNameTemplatePushStatus?: string; 
  public get userNameTemplatePushStatus() {
    return this.getStringAttribute('user_name_template_push_status');
  }
  public set userNameTemplatePushStatus(value: string) {
    this._userNameTemplatePushStatus = value;
  }
  public resetUserNameTemplatePushStatus() {
    this._userNameTemplatePushStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplatePushStatusInput() {
    return this._userNameTemplatePushStatus;
  }

  // user_name_template_suffix - computed: false, optional: true, required: false
  private _userNameTemplateSuffix?: string; 
  public get userNameTemplateSuffix() {
    return this.getStringAttribute('user_name_template_suffix');
  }
  public set userNameTemplateSuffix(value: string) {
    this._userNameTemplateSuffix = value;
  }
  public resetUserNameTemplateSuffix() {
    this._userNameTemplateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateSuffixInput() {
    return this._userNameTemplateSuffix;
  }

  // user_name_template_type - computed: false, optional: true, required: false
  private _userNameTemplateType?: string; 
  public get userNameTemplateType() {
    return this.getStringAttribute('user_name_template_type');
  }
  public set userNameTemplateType(value: string) {
    this._userNameTemplateType = value;
  }
  public resetUserNameTemplateType() {
    this._userNameTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateTypeInput() {
    return this._userNameTemplateType;
  }

  // wildcard_redirect - computed: false, optional: true, required: false
  private _wildcardRedirect?: string; 
  public get wildcardRedirect() {
    return this.getStringAttribute('wildcard_redirect');
  }
  public set wildcardRedirect(value: string) {
    this._wildcardRedirect = value;
  }
  public resetWildcardRedirect() {
    this._wildcardRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardRedirectInput() {
    return this._wildcardRedirect;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim = new AppOauthGroupsClaimOutputReference(this, "groups_claim");
  public get groupsClaim() {
    return this._groupsClaim;
  }
  public putGroupsClaim(value: AppOauthGroupsClaim) {
    this._groupsClaim.internalValue = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim.internalValue;
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks = new AppOauthJwksList(this, "jwks", false);
  public get jwks() {
    return this._jwks;
  }
  public putJwks(value: AppOauthJwks[] | cdktf.IResolvable) {
    this._jwks.internalValue = value;
  }
  public resetJwks() {
    this._jwks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppOauthTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppOauthTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessibility_error_redirect_url: cdktf.stringToTerraform(this._accessibilityErrorRedirectUrl),
      accessibility_login_redirect_url: cdktf.stringToTerraform(this._accessibilityLoginRedirectUrl),
      accessibility_self_service: cdktf.booleanToTerraform(this._accessibilitySelfService),
      admin_note: cdktf.stringToTerraform(this._adminNote),
      app_links_json: cdktf.stringToTerraform(this._appLinksJson),
      app_settings_json: cdktf.stringToTerraform(this._appSettingsJson),
      authentication_policy: cdktf.stringToTerraform(this._authenticationPolicy),
      auto_key_rotation: cdktf.booleanToTerraform(this._autoKeyRotation),
      auto_submit_toolbar: cdktf.booleanToTerraform(this._autoSubmitToolbar),
      client_basic_secret: cdktf.stringToTerraform(this._clientBasicSecret),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_uri: cdktf.stringToTerraform(this._clientUri),
      consent_method: cdktf.stringToTerraform(this._consentMethod),
      enduser_note: cdktf.stringToTerraform(this._enduserNote),
      frontchannel_logout_session_required: cdktf.booleanToTerraform(this._frontchannelLogoutSessionRequired),
      frontchannel_logout_uri: cdktf.stringToTerraform(this._frontchannelLogoutUri),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantTypes),
      hide_ios: cdktf.booleanToTerraform(this._hideIos),
      hide_web: cdktf.booleanToTerraform(this._hideWeb),
      id: cdktf.stringToTerraform(this._id),
      implicit_assignment: cdktf.booleanToTerraform(this._implicitAssignment),
      issuer_mode: cdktf.stringToTerraform(this._issuerMode),
      jwks_uri: cdktf.stringToTerraform(this._jwksUri),
      label: cdktf.stringToTerraform(this._label),
      login_mode: cdktf.stringToTerraform(this._loginMode),
      login_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loginScopes),
      login_uri: cdktf.stringToTerraform(this._loginUri),
      logo: cdktf.stringToTerraform(this._logo),
      logo_uri: cdktf.stringToTerraform(this._logoUri),
      omit_secret: cdktf.booleanToTerraform(this._omitSecret),
      participate_slo: cdktf.booleanToTerraform(this._participateSlo),
      pkce_required: cdktf.booleanToTerraform(this._pkceRequired),
      policy_uri: cdktf.stringToTerraform(this._policyUri),
      post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postLogoutRedirectUris),
      profile: cdktf.stringToTerraform(this._profile),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
      refresh_token_leeway: cdktf.numberToTerraform(this._refreshTokenLeeway),
      refresh_token_rotation: cdktf.stringToTerraform(this._refreshTokenRotation),
      response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseTypes),
      status: cdktf.stringToTerraform(this._status),
      token_endpoint_auth_method: cdktf.stringToTerraform(this._tokenEndpointAuthMethod),
      tos_uri: cdktf.stringToTerraform(this._tosUri),
      type: cdktf.stringToTerraform(this._type),
      user_name_template: cdktf.stringToTerraform(this._userNameTemplate),
      user_name_template_push_status: cdktf.stringToTerraform(this._userNameTemplatePushStatus),
      user_name_template_suffix: cdktf.stringToTerraform(this._userNameTemplateSuffix),
      user_name_template_type: cdktf.stringToTerraform(this._userNameTemplateType),
      wildcard_redirect: cdktf.stringToTerraform(this._wildcardRedirect),
      groups_claim: appOauthGroupsClaimToTerraform(this._groupsClaim.internalValue),
      jwks: cdktf.listMapper(appOauthJwksToTerraform, true)(this._jwks.internalValue),
      timeouts: appOauthTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessibility_error_redirect_url: {
        value: cdktf.stringToHclTerraform(this._accessibilityErrorRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessibility_login_redirect_url: {
        value: cdktf.stringToHclTerraform(this._accessibilityLoginRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessibility_self_service: {
        value: cdktf.booleanToHclTerraform(this._accessibilitySelfService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_note: {
        value: cdktf.stringToHclTerraform(this._adminNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_links_json: {
        value: cdktf.stringToHclTerraform(this._appLinksJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_settings_json: {
        value: cdktf.stringToHclTerraform(this._appSettingsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_policy: {
        value: cdktf.stringToHclTerraform(this._authenticationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_key_rotation: {
        value: cdktf.booleanToHclTerraform(this._autoKeyRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_submit_toolbar: {
        value: cdktf.booleanToHclTerraform(this._autoSubmitToolbar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_basic_secret: {
        value: cdktf.stringToHclTerraform(this._clientBasicSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_uri: {
        value: cdktf.stringToHclTerraform(this._clientUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consent_method: {
        value: cdktf.stringToHclTerraform(this._consentMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enduser_note: {
        value: cdktf.stringToHclTerraform(this._enduserNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontchannel_logout_session_required: {
        value: cdktf.booleanToHclTerraform(this._frontchannelLogoutSessionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frontchannel_logout_uri: {
        value: cdktf.stringToHclTerraform(this._frontchannelLogoutUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hide_ios: {
        value: cdktf.booleanToHclTerraform(this._hideIos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_web: {
        value: cdktf.booleanToHclTerraform(this._hideWeb),
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
      implicit_assignment: {
        value: cdktf.booleanToHclTerraform(this._implicitAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer_mode: {
        value: cdktf.stringToHclTerraform(this._issuerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_uri: {
        value: cdktf.stringToHclTerraform(this._jwksUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_mode: {
        value: cdktf.stringToHclTerraform(this._loginMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loginScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      login_uri: {
        value: cdktf.stringToHclTerraform(this._loginUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_uri: {
        value: cdktf.stringToHclTerraform(this._logoUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omit_secret: {
        value: cdktf.booleanToHclTerraform(this._omitSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      participate_slo: {
        value: cdktf.booleanToHclTerraform(this._participateSlo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pkce_required: {
        value: cdktf.booleanToHclTerraform(this._pkceRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_uri: {
        value: cdktf.stringToHclTerraform(this._policyUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_logout_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postLogoutRedirectUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
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
      refresh_token_leeway: {
        value: cdktf.numberToHclTerraform(this._refreshTokenLeeway),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh_token_rotation: {
        value: cdktf.stringToHclTerraform(this._refreshTokenRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_endpoint_auth_method: {
        value: cdktf.stringToHclTerraform(this._tokenEndpointAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_uri: {
        value: cdktf.stringToHclTerraform(this._tosUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template: {
        value: cdktf.stringToHclTerraform(this._userNameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_push_status: {
        value: cdktf.stringToHclTerraform(this._userNameTemplatePushStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_suffix: {
        value: cdktf.stringToHclTerraform(this._userNameTemplateSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_type: {
        value: cdktf.stringToHclTerraform(this._userNameTemplateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard_redirect: {
        value: cdktf.stringToHclTerraform(this._wildcardRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_claim: {
        value: appOauthGroupsClaimToHclTerraform(this._groupsClaim.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppOauthGroupsClaimList",
      },
      jwks: {
        value: cdktf.listMapperHcl(appOauthJwksToHclTerraform, true)(this._jwks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppOauthJwksList",
      },
      timeouts: {
        value: appOauthTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppOauthTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
