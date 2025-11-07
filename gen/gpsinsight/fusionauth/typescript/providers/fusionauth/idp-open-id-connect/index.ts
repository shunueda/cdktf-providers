// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpOpenIdConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The top-level button image (URL) to use on the FusionAuth login page for this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#button_image_url IdpOpenIdConnect#button_image_url}
  */
  readonly buttonImageUrl?: string;
  /**
  * The top-level button text to use on the FusionAuth login page for this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#button_text IdpOpenIdConnect#button_text}
  */
  readonly buttonText: string;
  /**
  * Determines if debug is enabled for this provider. When enabled, each time this provider is invoked to reconcile a login an Event Log will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#debug IdpOpenIdConnect#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * This is an optional list of domains that this OpenID Connect provider should be used for. This converts the FusionAuth login form to a domain-based login form. This type of form first asks the user for their email. FusionAuth then uses their email to determine if an OpenID Connect identity provider should be used. If an OpenID Connect provider should be used, the browser is redirected to the authorization endpoint of that identity provider. Otherwise, the password field is revealed on the form so that the user can login using FusionAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#domains IdpOpenIdConnect#domains}
  */
  readonly domains?: string[];
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#enabled IdpOpenIdConnect#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#id IdpOpenIdConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID to use for the new identity provider. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#idp_id IdpOpenIdConnect#idp_id}
  */
  readonly idpId?: string;
  /**
  * The unique Id of the lambda to used during the user reconcile process to map custom claims from the external identity provider to the FusionAuth user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#lambda_reconcile_id IdpOpenIdConnect#lambda_reconcile_id}
  */
  readonly lambdaReconcileId?: string;
  /**
  * The linking strategy to use when creating the link between the {idp_display_name} Identity Provider and the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#linking_strategy IdpOpenIdConnect#linking_strategy}
  */
  readonly linkingStrategy?: string;
  /**
  * The name of this OpenID Connect identity provider. This is only used for display purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#name IdpOpenIdConnect#name}
  */
  readonly name: string;
  /**
  * The top-level authorization endpoint for the OpenID Connect identity provider. You can leave this blank if you provide the issuer field, which will be used to make a request to the OpenID Connect .well-known endpoint in order to dynamically resolve the authorization endpoint. If you provide an issuer then this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_authorization_endpoint IdpOpenIdConnect#oauth2_authorization_endpoint}
  */
  readonly oauth2AuthorizationEndpoint?: string;
  /**
  * The client authentication method to use with the OpenID Connect identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_client_authentication_method IdpOpenIdConnect#oauth2_client_authentication_method}
  */
  readonly oauth2ClientAuthenticationMethod?: string;
  /**
  * The top-level client id for your Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_client_id IdpOpenIdConnect#oauth2_client_id}
  */
  readonly oauth2ClientId: string;
  /**
  * The top-level client secret to use with the OpenID Connect identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_client_secret IdpOpenIdConnect#oauth2_client_secret}
  */
  readonly oauth2ClientSecret?: string;
  /**
  * An optional configuration to modify the expected name of the claim returned by the IdP that contains the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_email_claim IdpOpenIdConnect#oauth2_email_claim}
  */
  readonly oauth2EmailClaim?: string;
  /**
  * The top-level issuer URI for the OpenID Connect identity provider. If this is provided, the authorization endpoint, token endpoint and userinfo endpoint will all be resolved using the issuer URI plus /.well-known/openid-configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_issuer IdpOpenIdConnect#oauth2_issuer}
  */
  readonly oauth2Issuer?: string;
  /**
  * The top-level scope that you are requesting from the OpenID Connect identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_scope IdpOpenIdConnect#oauth2_scope}
  */
  readonly oauth2Scope?: string;
  /**
  * The top-level token endpoint for the OpenID Connect identity provider. You can leave this blank if you provide the issuer field, which will be used to make a request to the OpenID Connect .well-known endpoint in order to dynamically resolve the token endpoint. If you provide an issuer then this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_token_endpoint IdpOpenIdConnect#oauth2_token_endpoint}
  */
  readonly oauth2TokenEndpoint?: string;
  /**
  * An optional configuration to modify the expected name of the claim returned by the IdP that contains the user Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_unique_id_claim IdpOpenIdConnect#oauth2_unique_id_claim}
  */
  readonly oauth2UniqueIdClaim?: string;
  /**
  * The top-level userinfo endpoint for the OpenID Connect identity provider. You can leave this blank if you provide the issuer field, which will be used to make a request to the OpenID Connect .well-known endpoint in order to dynamically resolve the userinfo endpoint. If you provide an issuer then this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_user_info_endpoint IdpOpenIdConnect#oauth2_user_info_endpoint}
  */
  readonly oauth2UserInfoEndpoint?: string;
  /**
  * An optional configuration to modify the expected name of the claim returned by the IdP that contains the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_username_claim IdpOpenIdConnect#oauth2_username_claim}
  */
  readonly oauth2UsernameClaim?: string;
  /**
  * Set this value equal to true if you wish to use POST bindings with this OpenID Connect identity provider. The default value of false means that a redirect binding which uses a GET request will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#post_request IdpOpenIdConnect#post_request}
  */
  readonly postRequest?: boolean | cdktf.IResolvable;
  /**
  * application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#application_configuration IdpOpenIdConnect#application_configuration}
  */
  readonly applicationConfiguration?: IdpOpenIdConnectApplicationConfiguration[] | cdktf.IResolvable;
  /**
  * tenant_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#tenant_configuration IdpOpenIdConnect#tenant_configuration}
  */
  readonly tenantConfiguration?: IdpOpenIdConnectTenantConfiguration[] | cdktf.IResolvable;
}
export interface IdpOpenIdConnectApplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#application_id IdpOpenIdConnect#application_id}
  */
  readonly applicationId?: string;
  /**
  * This is an optional Application specific override for the top level button image URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#button_image_url IdpOpenIdConnect#button_image_url}
  */
  readonly buttonImageUrl?: string;
  /**
  * This is an optional Application specific override for the top level button text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#button_text IdpOpenIdConnect#button_text}
  */
  readonly buttonText?: string;
  /**
  * Determines if a UserRegistration is created for the User automatically or not. If a user doesn’t exist in FusionAuth and logs in through an identity provider, this boolean controls whether or not FusionAuth creates a registration for the User in the Application they are logging into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#create_registration IdpOpenIdConnect#create_registration}
  */
  readonly createRegistration?: boolean | cdktf.IResolvable;
  /**
  * Determines if this identity provider is enabled for the Application specified by the applicationId key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#enabled IdpOpenIdConnect#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This is an optional Application specific override for the top level client id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_client_id IdpOpenIdConnect#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * This is an optional Application specific override for the top level client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_client_secret IdpOpenIdConnect#oauth2_client_secret}
  */
  readonly oauth2ClientSecret?: string;
  /**
  * This is an optional Application specific override for for the top level scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#oauth2_scope IdpOpenIdConnect#oauth2_scope}
  */
  readonly oauth2Scope?: string;
}

export function idpOpenIdConnectApplicationConfigurationToTerraform(struct?: IdpOpenIdConnectApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    button_image_url: cdktf.stringToTerraform(struct!.buttonImageUrl),
    button_text: cdktf.stringToTerraform(struct!.buttonText),
    create_registration: cdktf.booleanToTerraform(struct!.createRegistration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
    oauth2_scope: cdktf.stringToTerraform(struct!.oauth2Scope),
  }
}


export function idpOpenIdConnectApplicationConfigurationToHclTerraform(struct?: IdpOpenIdConnectApplicationConfiguration | cdktf.IResolvable): any {
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
    button_image_url: {
      value: cdktf.stringToHclTerraform(struct!.buttonImageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_text: {
      value: cdktf.stringToHclTerraform(struct!.buttonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_registration: {
      value: cdktf.booleanToHclTerraform(struct!.createRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth2_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_scope: {
      value: cdktf.stringToHclTerraform(struct!.oauth2Scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpOpenIdConnectApplicationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpOpenIdConnectApplicationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._buttonImageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonImageUrl = this._buttonImageUrl;
    }
    if (this._buttonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonText = this._buttonText;
    }
    if (this._createRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.createRegistration = this._createRegistration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2ClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientSecret = this._oauth2ClientSecret;
    }
    if (this._oauth2Scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Scope = this._oauth2Scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpOpenIdConnectApplicationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._buttonImageUrl = undefined;
      this._buttonText = undefined;
      this._createRegistration = undefined;
      this._enabled = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2ClientSecret = undefined;
      this._oauth2Scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._buttonImageUrl = value.buttonImageUrl;
      this._buttonText = value.buttonText;
      this._createRegistration = value.createRegistration;
      this._enabled = value.enabled;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2ClientSecret = value.oauth2ClientSecret;
      this._oauth2Scope = value.oauth2Scope;
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

  // button_image_url - computed: false, optional: true, required: false
  private _buttonImageUrl?: string; 
  public get buttonImageUrl() {
    return this.getStringAttribute('button_image_url');
  }
  public set buttonImageUrl(value: string) {
    this._buttonImageUrl = value;
  }
  public resetButtonImageUrl() {
    this._buttonImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonImageUrlInput() {
    return this._buttonImageUrl;
  }

  // button_text - computed: false, optional: true, required: false
  private _buttonText?: string; 
  public get buttonText() {
    return this.getStringAttribute('button_text');
  }
  public set buttonText(value: string) {
    this._buttonText = value;
  }
  public resetButtonText() {
    this._buttonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextInput() {
    return this._buttonText;
  }

  // create_registration - computed: false, optional: true, required: false
  private _createRegistration?: boolean | cdktf.IResolvable; 
  public get createRegistration() {
    return this.getBooleanAttribute('create_registration');
  }
  public set createRegistration(value: boolean | cdktf.IResolvable) {
    this._createRegistration = value;
  }
  public resetCreateRegistration() {
    this._createRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createRegistrationInput() {
    return this._createRegistration;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: true, required: false
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
  }
  public resetOauth2ClientSecret() {
    this._oauth2ClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }

  // oauth2_scope - computed: false, optional: true, required: false
  private _oauth2Scope?: string; 
  public get oauth2Scope() {
    return this.getStringAttribute('oauth2_scope');
  }
  public set oauth2Scope(value: string) {
    this._oauth2Scope = value;
  }
  public resetOauth2Scope() {
    this._oauth2Scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ScopeInput() {
    return this._oauth2Scope;
  }
}

export class IdpOpenIdConnectApplicationConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpOpenIdConnectApplicationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpOpenIdConnectApplicationConfigurationOutputReference {
    return new IdpOpenIdConnectApplicationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpOpenIdConnectTenantConfiguration {
  /**
  * When enabled, the number of identity provider links a user may create is enforced by maximumLinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#limit_user_link_count_enabled IdpOpenIdConnect#limit_user_link_count_enabled}
  */
  readonly limitUserLinkCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#limit_user_link_count_maximum_links IdpOpenIdConnect#limit_user_link_count_maximum_links}
  */
  readonly limitUserLinkCountMaximumLinks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#tenant_id IdpOpenIdConnect#tenant_id}
  */
  readonly tenantId?: string;
}

export function idpOpenIdConnectTenantConfigurationToTerraform(struct?: IdpOpenIdConnectTenantConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_user_link_count_enabled: cdktf.booleanToTerraform(struct!.limitUserLinkCountEnabled),
    limit_user_link_count_maximum_links: cdktf.numberToTerraform(struct!.limitUserLinkCountMaximumLinks),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function idpOpenIdConnectTenantConfigurationToHclTerraform(struct?: IdpOpenIdConnectTenantConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_user_link_count_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.limitUserLinkCountEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_user_link_count_maximum_links: {
      value: cdktf.numberToHclTerraform(struct!.limitUserLinkCountMaximumLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpOpenIdConnectTenantConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpOpenIdConnectTenantConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitUserLinkCountEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitUserLinkCountEnabled = this._limitUserLinkCountEnabled;
    }
    if (this._limitUserLinkCountMaximumLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitUserLinkCountMaximumLinks = this._limitUserLinkCountMaximumLinks;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpOpenIdConnectTenantConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitUserLinkCountEnabled = undefined;
      this._limitUserLinkCountMaximumLinks = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitUserLinkCountEnabled = value.limitUserLinkCountEnabled;
      this._limitUserLinkCountMaximumLinks = value.limitUserLinkCountMaximumLinks;
      this._tenantId = value.tenantId;
    }
  }

  // limit_user_link_count_enabled - computed: false, optional: true, required: false
  private _limitUserLinkCountEnabled?: boolean | cdktf.IResolvable; 
  public get limitUserLinkCountEnabled() {
    return this.getBooleanAttribute('limit_user_link_count_enabled');
  }
  public set limitUserLinkCountEnabled(value: boolean | cdktf.IResolvable) {
    this._limitUserLinkCountEnabled = value;
  }
  public resetLimitUserLinkCountEnabled() {
    this._limitUserLinkCountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUserLinkCountEnabledInput() {
    return this._limitUserLinkCountEnabled;
  }

  // limit_user_link_count_maximum_links - computed: false, optional: true, required: false
  private _limitUserLinkCountMaximumLinks?: number; 
  public get limitUserLinkCountMaximumLinks() {
    return this.getNumberAttribute('limit_user_link_count_maximum_links');
  }
  public set limitUserLinkCountMaximumLinks(value: number) {
    this._limitUserLinkCountMaximumLinks = value;
  }
  public resetLimitUserLinkCountMaximumLinks() {
    this._limitUserLinkCountMaximumLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUserLinkCountMaximumLinksInput() {
    return this._limitUserLinkCountMaximumLinks;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class IdpOpenIdConnectTenantConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpOpenIdConnectTenantConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpOpenIdConnectTenantConfigurationOutputReference {
    return new IdpOpenIdConnectTenantConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect fusionauth_idp_open_id_connect}
*/
export class IdpOpenIdConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_idp_open_id_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpOpenIdConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpOpenIdConnect to import
  * @param importFromId The id of the existing IdpOpenIdConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpOpenIdConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_idp_open_id_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_open_id_connect fusionauth_idp_open_id_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpOpenIdConnectConfig
  */
  public constructor(scope: Construct, id: string, config: IdpOpenIdConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_idp_open_id_connect',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buttonImageUrl = config.buttonImageUrl;
    this._buttonText = config.buttonText;
    this._debug = config.debug;
    this._domains = config.domains;
    this._enabled = config.enabled;
    this._id = config.id;
    this._idpId = config.idpId;
    this._lambdaReconcileId = config.lambdaReconcileId;
    this._linkingStrategy = config.linkingStrategy;
    this._name = config.name;
    this._oauth2AuthorizationEndpoint = config.oauth2AuthorizationEndpoint;
    this._oauth2ClientAuthenticationMethod = config.oauth2ClientAuthenticationMethod;
    this._oauth2ClientId = config.oauth2ClientId;
    this._oauth2ClientSecret = config.oauth2ClientSecret;
    this._oauth2EmailClaim = config.oauth2EmailClaim;
    this._oauth2Issuer = config.oauth2Issuer;
    this._oauth2Scope = config.oauth2Scope;
    this._oauth2TokenEndpoint = config.oauth2TokenEndpoint;
    this._oauth2UniqueIdClaim = config.oauth2UniqueIdClaim;
    this._oauth2UserInfoEndpoint = config.oauth2UserInfoEndpoint;
    this._oauth2UsernameClaim = config.oauth2UsernameClaim;
    this._postRequest = config.postRequest;
    this._applicationConfiguration.internalValue = config.applicationConfiguration;
    this._tenantConfiguration.internalValue = config.tenantConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // button_image_url - computed: false, optional: true, required: false
  private _buttonImageUrl?: string; 
  public get buttonImageUrl() {
    return this.getStringAttribute('button_image_url');
  }
  public set buttonImageUrl(value: string) {
    this._buttonImageUrl = value;
  }
  public resetButtonImageUrl() {
    this._buttonImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonImageUrlInput() {
    return this._buttonImageUrl;
  }

  // button_text - computed: false, optional: false, required: true
  private _buttonText?: string; 
  public get buttonText() {
    return this.getStringAttribute('button_text');
  }
  public set buttonText(value: string) {
    this._buttonText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextInput() {
    return this._buttonText;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // lambda_reconcile_id - computed: false, optional: true, required: false
  private _lambdaReconcileId?: string; 
  public get lambdaReconcileId() {
    return this.getStringAttribute('lambda_reconcile_id');
  }
  public set lambdaReconcileId(value: string) {
    this._lambdaReconcileId = value;
  }
  public resetLambdaReconcileId() {
    this._lambdaReconcileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaReconcileIdInput() {
    return this._lambdaReconcileId;
  }

  // linking_strategy - computed: true, optional: true, required: false
  private _linkingStrategy?: string; 
  public get linkingStrategy() {
    return this.getStringAttribute('linking_strategy');
  }
  public set linkingStrategy(value: string) {
    this._linkingStrategy = value;
  }
  public resetLinkingStrategy() {
    this._linkingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingStrategyInput() {
    return this._linkingStrategy;
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

  // oauth2_authorization_endpoint - computed: false, optional: true, required: false
  private _oauth2AuthorizationEndpoint?: string; 
  public get oauth2AuthorizationEndpoint() {
    return this.getStringAttribute('oauth2_authorization_endpoint');
  }
  public set oauth2AuthorizationEndpoint(value: string) {
    this._oauth2AuthorizationEndpoint = value;
  }
  public resetOauth2AuthorizationEndpoint() {
    this._oauth2AuthorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthorizationEndpointInput() {
    return this._oauth2AuthorizationEndpoint;
  }

  // oauth2_client_authentication_method - computed: false, optional: true, required: false
  private _oauth2ClientAuthenticationMethod?: string; 
  public get oauth2ClientAuthenticationMethod() {
    return this.getStringAttribute('oauth2_client_authentication_method');
  }
  public set oauth2ClientAuthenticationMethod(value: string) {
    this._oauth2ClientAuthenticationMethod = value;
  }
  public resetOauth2ClientAuthenticationMethod() {
    this._oauth2ClientAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientAuthenticationMethodInput() {
    return this._oauth2ClientAuthenticationMethod;
  }

  // oauth2_client_id - computed: false, optional: false, required: true
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: true, required: false
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
  }
  public resetOauth2ClientSecret() {
    this._oauth2ClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }

  // oauth2_email_claim - computed: false, optional: true, required: false
  private _oauth2EmailClaim?: string; 
  public get oauth2EmailClaim() {
    return this.getStringAttribute('oauth2_email_claim');
  }
  public set oauth2EmailClaim(value: string) {
    this._oauth2EmailClaim = value;
  }
  public resetOauth2EmailClaim() {
    this._oauth2EmailClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2EmailClaimInput() {
    return this._oauth2EmailClaim;
  }

  // oauth2_issuer - computed: false, optional: true, required: false
  private _oauth2Issuer?: string; 
  public get oauth2Issuer() {
    return this.getStringAttribute('oauth2_issuer');
  }
  public set oauth2Issuer(value: string) {
    this._oauth2Issuer = value;
  }
  public resetOauth2Issuer() {
    this._oauth2Issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2IssuerInput() {
    return this._oauth2Issuer;
  }

  // oauth2_scope - computed: false, optional: true, required: false
  private _oauth2Scope?: string; 
  public get oauth2Scope() {
    return this.getStringAttribute('oauth2_scope');
  }
  public set oauth2Scope(value: string) {
    this._oauth2Scope = value;
  }
  public resetOauth2Scope() {
    this._oauth2Scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ScopeInput() {
    return this._oauth2Scope;
  }

  // oauth2_token_endpoint - computed: false, optional: true, required: false
  private _oauth2TokenEndpoint?: string; 
  public get oauth2TokenEndpoint() {
    return this.getStringAttribute('oauth2_token_endpoint');
  }
  public set oauth2TokenEndpoint(value: string) {
    this._oauth2TokenEndpoint = value;
  }
  public resetOauth2TokenEndpoint() {
    this._oauth2TokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2TokenEndpointInput() {
    return this._oauth2TokenEndpoint;
  }

  // oauth2_unique_id_claim - computed: false, optional: true, required: false
  private _oauth2UniqueIdClaim?: string; 
  public get oauth2UniqueIdClaim() {
    return this.getStringAttribute('oauth2_unique_id_claim');
  }
  public set oauth2UniqueIdClaim(value: string) {
    this._oauth2UniqueIdClaim = value;
  }
  public resetOauth2UniqueIdClaim() {
    this._oauth2UniqueIdClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2UniqueIdClaimInput() {
    return this._oauth2UniqueIdClaim;
  }

  // oauth2_user_info_endpoint - computed: false, optional: true, required: false
  private _oauth2UserInfoEndpoint?: string; 
  public get oauth2UserInfoEndpoint() {
    return this.getStringAttribute('oauth2_user_info_endpoint');
  }
  public set oauth2UserInfoEndpoint(value: string) {
    this._oauth2UserInfoEndpoint = value;
  }
  public resetOauth2UserInfoEndpoint() {
    this._oauth2UserInfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2UserInfoEndpointInput() {
    return this._oauth2UserInfoEndpoint;
  }

  // oauth2_username_claim - computed: false, optional: true, required: false
  private _oauth2UsernameClaim?: string; 
  public get oauth2UsernameClaim() {
    return this.getStringAttribute('oauth2_username_claim');
  }
  public set oauth2UsernameClaim(value: string) {
    this._oauth2UsernameClaim = value;
  }
  public resetOauth2UsernameClaim() {
    this._oauth2UsernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2UsernameClaimInput() {
    return this._oauth2UsernameClaim;
  }

  // post_request - computed: false, optional: true, required: false
  private _postRequest?: boolean | cdktf.IResolvable; 
  public get postRequest() {
    return this.getBooleanAttribute('post_request');
  }
  public set postRequest(value: boolean | cdktf.IResolvable) {
    this._postRequest = value;
  }
  public resetPostRequest() {
    this._postRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRequestInput() {
    return this._postRequest;
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration = new IdpOpenIdConnectApplicationConfigurationList(this, "application_configuration", true);
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: IdpOpenIdConnectApplicationConfiguration[] | cdktf.IResolvable) {
    this._applicationConfiguration.internalValue = value;
  }
  public resetApplicationConfiguration() {
    this._applicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigurationInput() {
    return this._applicationConfiguration.internalValue;
  }

  // tenant_configuration - computed: false, optional: true, required: false
  private _tenantConfiguration = new IdpOpenIdConnectTenantConfigurationList(this, "tenant_configuration", true);
  public get tenantConfiguration() {
    return this._tenantConfiguration;
  }
  public putTenantConfiguration(value: IdpOpenIdConnectTenantConfiguration[] | cdktf.IResolvable) {
    this._tenantConfiguration.internalValue = value;
  }
  public resetTenantConfiguration() {
    this._tenantConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantConfigurationInput() {
    return this._tenantConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      button_image_url: cdktf.stringToTerraform(this._buttonImageUrl),
      button_text: cdktf.stringToTerraform(this._buttonText),
      debug: cdktf.booleanToTerraform(this._debug),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.stringToTerraform(this._idpId),
      lambda_reconcile_id: cdktf.stringToTerraform(this._lambdaReconcileId),
      linking_strategy: cdktf.stringToTerraform(this._linkingStrategy),
      name: cdktf.stringToTerraform(this._name),
      oauth2_authorization_endpoint: cdktf.stringToTerraform(this._oauth2AuthorizationEndpoint),
      oauth2_client_authentication_method: cdktf.stringToTerraform(this._oauth2ClientAuthenticationMethod),
      oauth2_client_id: cdktf.stringToTerraform(this._oauth2ClientId),
      oauth2_client_secret: cdktf.stringToTerraform(this._oauth2ClientSecret),
      oauth2_email_claim: cdktf.stringToTerraform(this._oauth2EmailClaim),
      oauth2_issuer: cdktf.stringToTerraform(this._oauth2Issuer),
      oauth2_scope: cdktf.stringToTerraform(this._oauth2Scope),
      oauth2_token_endpoint: cdktf.stringToTerraform(this._oauth2TokenEndpoint),
      oauth2_unique_id_claim: cdktf.stringToTerraform(this._oauth2UniqueIdClaim),
      oauth2_user_info_endpoint: cdktf.stringToTerraform(this._oauth2UserInfoEndpoint),
      oauth2_username_claim: cdktf.stringToTerraform(this._oauth2UsernameClaim),
      post_request: cdktf.booleanToTerraform(this._postRequest),
      application_configuration: cdktf.listMapper(idpOpenIdConnectApplicationConfigurationToTerraform, true)(this._applicationConfiguration.internalValue),
      tenant_configuration: cdktf.listMapper(idpOpenIdConnectTenantConfigurationToTerraform, true)(this._tenantConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      button_image_url: {
        value: cdktf.stringToHclTerraform(this._buttonImageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      button_text: {
        value: cdktf.stringToHclTerraform(this._buttonText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      idp_id: {
        value: cdktf.stringToHclTerraform(this._idpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_reconcile_id: {
        value: cdktf.stringToHclTerraform(this._lambdaReconcileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linking_strategy: {
        value: cdktf.stringToHclTerraform(this._linkingStrategy),
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
      oauth2_authorization_endpoint: {
        value: cdktf.stringToHclTerraform(this._oauth2AuthorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_authentication_method: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_id: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_email_claim: {
        value: cdktf.stringToHclTerraform(this._oauth2EmailClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_issuer: {
        value: cdktf.stringToHclTerraform(this._oauth2Issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_scope: {
        value: cdktf.stringToHclTerraform(this._oauth2Scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_token_endpoint: {
        value: cdktf.stringToHclTerraform(this._oauth2TokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_unique_id_claim: {
        value: cdktf.stringToHclTerraform(this._oauth2UniqueIdClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_user_info_endpoint: {
        value: cdktf.stringToHclTerraform(this._oauth2UserInfoEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_username_claim: {
        value: cdktf.stringToHclTerraform(this._oauth2UsernameClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_request: {
        value: cdktf.booleanToHclTerraform(this._postRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_configuration: {
        value: cdktf.listMapperHcl(idpOpenIdConnectApplicationConfigurationToHclTerraform, true)(this._applicationConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpOpenIdConnectApplicationConfigurationList",
      },
      tenant_configuration: {
        value: cdktf.listMapperHcl(idpOpenIdConnectTenantConfigurationToHclTerraform, true)(this._tenantConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpOpenIdConnectTenantConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
