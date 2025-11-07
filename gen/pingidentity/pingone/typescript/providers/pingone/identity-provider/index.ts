// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single block that specifies options for connectivity to the Amazon social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#amazon IdentityProvider#amazon}
  */
  readonly amazon?: IdentityProviderAmazon;
  /**
  * A single block that specifies options for connectivity to the Apple social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#apple IdentityProvider#apple}
  */
  readonly apple?: IdentityProviderApple;
  /**
  * A string that specifies the description of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#description IdentityProvider#description}
  */
  readonly description?: string;
  /**
  * A boolean that specifies whether the identity provider is enabled in the environment.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#enabled IdentityProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment to create the identity provider in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#environment_id IdentityProvider#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single block that specifies options for connectivity to the Facebook social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#facebook IdentityProvider#facebook}
  */
  readonly facebook?: IdentityProviderFacebook;
  /**
  * A single block that specifies options for connectivity to the Github social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#github IdentityProvider#github}
  */
  readonly github?: IdentityProviderGithub;
  /**
  * A single block that specifies options for connectivity to the Google social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#google IdentityProvider#google}
  */
  readonly google?: IdentityProviderGoogle;
  /**
  * A single object that specifies the HREF and ID for the identity provider icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#icon IdentityProvider#icon}
  */
  readonly icon?: IdentityProviderIcon;
  /**
  * A single block that specifies options for connectivity to the LinkedIn social identity provider. This block is deprecated and will be removed in a future release. Use the `linkedin_oidc` block instead.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#linkedin IdentityProvider#linkedin}
  */
  readonly linkedin?: IdentityProviderLinkedin;
  /**
  * A single block that specifies options for connectivity to the LinkedIn social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#linkedin_oidc IdentityProvider#linkedin_oidc}
  */
  readonly linkedinOidc?: IdentityProviderLinkedinOidc;
  /**
  * A single object that specifies the HREF and ID for the identity provider icon to use in the login button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#login_button_icon IdentityProvider#login_button_icon}
  */
  readonly loginButtonIcon?: IdentityProviderLoginButtonIcon;
  /**
  * A single block that specifies options for connectivity to the Microsoft social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#microsoft IdentityProvider#microsoft}
  */
  readonly microsoft?: IdentityProviderMicrosoft;
  /**
  * A string that specifies the name of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#name IdentityProvider#name}
  */
  readonly name: string;
  /**
  * A single block that specifies options for connectivity to an OpenID Connect compliant identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#openid_connect IdentityProvider#openid_connect}
  */
  readonly openidConnect?: IdentityProviderOpenidConnect;
  /**
  * A single block that specifies options for connectivity to the Paypal social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#paypal IdentityProvider#paypal}
  */
  readonly paypal?: IdentityProviderPaypal;
  /**
  * A string that specifies the population ID to create users in, when using just-in-time provisioning. Setting this attribute gives management of linked users to the IdP and also triggers just-in-time provisioning of new users to the population ID provided.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#registration_population_id IdentityProvider#registration_population_id}
  */
  readonly registrationPopulationId?: string;
  /**
  * A single block that specifies options for connectivity to a SAML 2.0 compliant identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#saml IdentityProvider#saml}
  */
  readonly saml?: IdentityProviderSaml;
  /**
  * A single block that specifies options for connectivity to the Twitter social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#twitter IdentityProvider#twitter}
  */
  readonly twitter?: IdentityProviderTwitter;
  /**
  * A single block that specifies options for connectivity to the Yahoo social identity provider.  Exactly one of the following must be defined: `facebook`, `google`, `linkedin`, `linkedin_oidc`, `yahoo`, `amazon`, `twitter`, `apple`, `paypal`, `microsoft`, `github`, `openid_connect`, `saml`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#yahoo IdentityProvider#yahoo}
  */
  readonly yahoo?: IdentityProviderYahoo;
}
export interface IdentityProviderAmazon {
  /**
  * A string that specifies the application client ID from Amazon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from Amazon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
}

export function identityProviderAmazonToTerraform(struct?: IdentityProviderAmazon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function identityProviderAmazonToHclTerraform(struct?: IdentityProviderAmazon | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderAmazonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderAmazon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderAmazon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface IdentityProviderApple {
  /**
  * A string that specifies the application ID from Apple. This is the identifier obtained after registering a services ID in the Apple developer portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the private key that is used to generate a client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret_signing_key IdentityProvider#client_secret_signing_key}
  */
  readonly clientSecretSigningKey: string;
  /**
  * A 10-character string that Apple uses to identify an authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#key_id IdentityProvider#key_id}
  */
  readonly keyId: string;
  /**
  * A 10-character string that Apple uses to identify teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#team_id IdentityProvider#team_id}
  */
  readonly teamId: string;
}

export function identityProviderAppleToTerraform(struct?: IdentityProviderApple | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_signing_key: cdktf.stringToTerraform(struct!.clientSecretSigningKey),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    team_id: cdktf.stringToTerraform(struct!.teamId),
  }
}


export function identityProviderAppleToHclTerraform(struct?: IdentityProviderApple | cdktf.IResolvable): any {
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
    client_secret_signing_key: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretSigningKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderAppleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderApple | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretSigningKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSigningKey = this._clientSecretSigningKey;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderApple | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecretSigningKey = undefined;
      this._keyId = undefined;
      this._teamId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecretSigningKey = value.clientSecretSigningKey;
      this._keyId = value.keyId;
      this._teamId = value.teamId;
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

  // client_secret_signing_key - computed: false, optional: false, required: true
  private _clientSecretSigningKey?: string; 
  public get clientSecretSigningKey() {
    return this.getStringAttribute('client_secret_signing_key');
  }
  public set clientSecretSigningKey(value: string) {
    this._clientSecretSigningKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSigningKeyInput() {
    return this._clientSecretSigningKey;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }
}
export interface IdentityProviderFacebook {
  /**
  * A string that specifies the application ID from Facebook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#app_id IdentityProvider#app_id}
  */
  readonly appId: string;
  /**
  * A string that specifies the application secret from Facebook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#app_secret IdentityProvider#app_secret}
  */
  readonly appSecret: string;
}

export function identityProviderFacebookToTerraform(struct?: IdentityProviderFacebook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_secret: cdktf.stringToTerraform(struct!.appSecret),
  }
}


export function identityProviderFacebookToHclTerraform(struct?: IdentityProviderFacebook | cdktf.IResolvable): any {
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
    app_secret: {
      value: cdktf.stringToHclTerraform(struct!.appSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderFacebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderFacebook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecret = this._appSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderFacebook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._appSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._appSecret = value.appSecret;
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

  // app_secret - computed: false, optional: false, required: true
  private _appSecret?: string; 
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }
  public set appSecret(value: string) {
    this._appSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret;
  }
}
export interface IdentityProviderGithub {
  /**
  * A string that specifies the application client ID from Github.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from Github.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
}

export function identityProviderGithubToTerraform(struct?: IdentityProviderGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function identityProviderGithubToHclTerraform(struct?: IdentityProviderGithub | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderGithub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface IdentityProviderGoogle {
  /**
  * A string that specifies the application client ID from Google.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from Google.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
}

export function identityProviderGoogleToTerraform(struct?: IdentityProviderGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function identityProviderGoogleToHclTerraform(struct?: IdentityProviderGoogle | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderGoogle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderGoogle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface IdentityProviderIcon {
  /**
  * The URL or fully qualified path to the identity provider icon to use as the login button.  This can be retrieved from the `uploaded_image.href` parameter of the `pingone_image` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#href IdentityProvider#href}
  */
  readonly href: string;
  /**
  * The ID for the identity provider icon to use as the login button.  This can be retrieved from the `id` parameter of the `pingone_image` resource.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#id IdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function identityProviderIconToTerraform(struct?: IdentityProviderIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function identityProviderIconToHclTerraform(struct?: IdentityProviderIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderIcon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderIcon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._id = value.id;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface IdentityProviderLinkedin {
  /**
  * A string that specifies the application client ID from LinkedIn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from LinkedIn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
}

export function identityProviderLinkedinToTerraform(struct?: IdentityProviderLinkedin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function identityProviderLinkedinToHclTerraform(struct?: IdentityProviderLinkedin | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderLinkedinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderLinkedin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderLinkedin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface IdentityProviderLinkedinOidc {
  /**
  * A string that specifies the application client ID from LinkedIn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from LinkedIn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
}

export function identityProviderLinkedinOidcToTerraform(struct?: IdentityProviderLinkedinOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function identityProviderLinkedinOidcToHclTerraform(struct?: IdentityProviderLinkedinOidc | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderLinkedinOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderLinkedinOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderLinkedinOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface IdentityProviderLoginButtonIcon {
  /**
  * The URL or fully qualified path to the identity provider icon to use as the login button.  This can be retrieved from the `uploaded_image.href` parameter of the `pingone_image` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#href IdentityProvider#href}
  */
  readonly href: string;
  /**
  * The ID for the identity provider icon to use as the login button.  This can be retrieved from the `id` parameter of the `pingone_image` resource.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#id IdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function identityProviderLoginButtonIconToTerraform(struct?: IdentityProviderLoginButtonIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function identityProviderLoginButtonIconToHclTerraform(struct?: IdentityProviderLoginButtonIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderLoginButtonIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderLoginButtonIcon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderLoginButtonIcon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._id = value.id;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface IdentityProviderMicrosoft {
  /**
  * A string that specifies the application client ID from Microsoft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from Microsoft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * A string that specifies the tenant ID from Microsoft Entra ID. This property is required if Entra ID is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#tenant_id IdentityProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function identityProviderMicrosoftToTerraform(struct?: IdentityProviderMicrosoft | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function identityProviderMicrosoftToHclTerraform(struct?: IdentityProviderMicrosoft | cdktf.IResolvable): any {
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

export class IdentityProviderMicrosoftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderMicrosoft | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderMicrosoft | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tenantId = value.tenantId;
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
export interface IdentityProviderOpenidConnect {
  /**
  * A string that specifies the the OIDC identity provider's authorization endpoint. This value must be a URL that uses https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#authorization_endpoint IdentityProvider#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * A string that specifies the application client ID from the OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from the OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * A string that specifies the OIDC identity provider's discovery endpoint. This value must be a URL that uses https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#discovery_endpoint IdentityProvider#discovery_endpoint}
  */
  readonly discoveryEndpoint?: string;
  /**
  * A string that specifies the issuer to which the authentication is sent for the OIDC identity provider. This value must be a URL that uses https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#issuer IdentityProvider#issuer}
  */
  readonly issuer: string;
  /**
  * A string that specifies the OIDC identity provider's jwks endpoint. This value must be a URL that uses https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#jwks_endpoint IdentityProvider#jwks_endpoint}
  */
  readonly jwksEndpoint: string;
  /**
  * A string that specifies the method for PKCE. This value auto-populates from a discovery endpoint if the OpenID Provider includes `S256` in its `code_challenge_methods_supported` claim. The plain method is not currently supported.  Options are `NONE`, `S256`.  Defaults to `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#pkce_method IdentityProvider#pkce_method}
  */
  readonly pkceMethod?: string;
  /**
  * An array that specifies the scopes to include in the authentication request to the OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#scopes IdentityProvider#scopes}
  */
  readonly scopes: string[];
  /**
  * A string that specifies the OIDC identity provider's token endpoint. This value must be a URL that uses https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#token_endpoint IdentityProvider#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * A string that specifies the OIDC identity provider's token endpoint authentication method.  Options are `CLIENT_SECRET_BASIC`, `CLIENT_SECRET_POST`, `NONE`.  Defaults to `CLIENT_SECRET_BASIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#token_endpoint_auth_method IdentityProvider#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod?: string;
  /**
  * A string that specifies the OIDC identity provider's userInfo endpoint. This value must be a URL that uses https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#userinfo_endpoint IdentityProvider#userinfo_endpoint}
  */
  readonly userinfoEndpoint?: string;
}

export function identityProviderOpenidConnectToTerraform(struct?: IdentityProviderOpenidConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    discovery_endpoint: cdktf.stringToTerraform(struct!.discoveryEndpoint),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_endpoint: cdktf.stringToTerraform(struct!.jwksEndpoint),
    pkce_method: cdktf.stringToTerraform(struct!.pkceMethod),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    token_endpoint_auth_method: cdktf.stringToTerraform(struct!.tokenEndpointAuthMethod),
    userinfo_endpoint: cdktf.stringToTerraform(struct!.userinfoEndpoint),
  }
}


export function identityProviderOpenidConnectToHclTerraform(struct?: IdentityProviderOpenidConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
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
    discovery_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.discoveryEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.jwksEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkce_method: {
      value: cdktf.stringToHclTerraform(struct!.pkceMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.userinfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderOpenidConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderOpenidConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._discoveryEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryEndpoint = this._discoveryEndpoint;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksEndpoint = this._jwksEndpoint;
    }
    if (this._pkceMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkceMethod = this._pkceMethod;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._tokenEndpointAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointAuthMethod = this._tokenEndpointAuthMethod;
    }
    if (this._userinfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoEndpoint = this._userinfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderOpenidConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._discoveryEndpoint = undefined;
      this._issuer = undefined;
      this._jwksEndpoint = undefined;
      this._pkceMethod = undefined;
      this._scopes = undefined;
      this._tokenEndpoint = undefined;
      this._tokenEndpointAuthMethod = undefined;
      this._userinfoEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._discoveryEndpoint = value.discoveryEndpoint;
      this._issuer = value.issuer;
      this._jwksEndpoint = value.jwksEndpoint;
      this._pkceMethod = value.pkceMethod;
      this._scopes = value.scopes;
      this._tokenEndpoint = value.tokenEndpoint;
      this._tokenEndpointAuthMethod = value.tokenEndpointAuthMethod;
      this._userinfoEndpoint = value.userinfoEndpoint;
    }
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
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

  // discovery_endpoint - computed: false, optional: true, required: false
  private _discoveryEndpoint?: string; 
  public get discoveryEndpoint() {
    return this.getStringAttribute('discovery_endpoint');
  }
  public set discoveryEndpoint(value: string) {
    this._discoveryEndpoint = value;
  }
  public resetDiscoveryEndpoint() {
    this._discoveryEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryEndpointInput() {
    return this._discoveryEndpoint;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_endpoint - computed: false, optional: false, required: true
  private _jwksEndpoint?: string; 
  public get jwksEndpoint() {
    return this.getStringAttribute('jwks_endpoint');
  }
  public set jwksEndpoint(value: string) {
    this._jwksEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksEndpointInput() {
    return this._jwksEndpoint;
  }

  // pkce_method - computed: true, optional: true, required: false
  private _pkceMethod?: string; 
  public get pkceMethod() {
    return this.getStringAttribute('pkce_method');
  }
  public set pkceMethod(value: string) {
    this._pkceMethod = value;
  }
  public resetPkceMethod() {
    this._pkceMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceMethodInput() {
    return this._pkceMethod;
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

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // token_endpoint_auth_method - computed: true, optional: true, required: false
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

  // userinfo_endpoint - computed: false, optional: true, required: false
  private _userinfoEndpoint?: string; 
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }
  public set userinfoEndpoint(value: string) {
    this._userinfoEndpoint = value;
  }
  public resetUserinfoEndpoint() {
    this._userinfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEndpointInput() {
    return this._userinfoEndpoint;
  }
}
export interface IdentityProviderPaypal {
  /**
  * A string that specifies the PayPal environment.  Options are `live`, `sandbox`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_environment IdentityProvider#client_environment}
  */
  readonly clientEnvironment: string;
  /**
  * A string that specifies the application ID from Paypal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application secret from PayPal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
}

export function identityProviderPaypalToTerraform(struct?: IdentityProviderPaypal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_environment: cdktf.stringToTerraform(struct!.clientEnvironment),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function identityProviderPaypalToHclTerraform(struct?: IdentityProviderPaypal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_environment: {
      value: cdktf.stringToHclTerraform(struct!.clientEnvironment),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderPaypalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderPaypal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEnvironment = this._clientEnvironment;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderPaypal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientEnvironment = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientEnvironment = value.clientEnvironment;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_environment - computed: false, optional: false, required: true
  private _clientEnvironment?: string; 
  public get clientEnvironment() {
    return this.getStringAttribute('client_environment');
  }
  public set clientEnvironment(value: string) {
    this._clientEnvironment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEnvironmentInput() {
    return this._clientEnvironment;
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
}
export interface IdentityProviderSamlIdpVerificationCertificates {
  /**
  * A string that specifies the identity provider's certificate ID used to verify the signature on the signed assertion from the identity provider.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#id IdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function identityProviderSamlIdpVerificationCertificatesToTerraform(struct?: IdentityProviderSamlIdpVerificationCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function identityProviderSamlIdpVerificationCertificatesToHclTerraform(struct?: IdentityProviderSamlIdpVerificationCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderSamlIdpVerificationCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityProviderSamlIdpVerificationCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderSamlIdpVerificationCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class IdentityProviderSamlIdpVerificationCertificatesList extends cdktf.ComplexList {
  public internalValue? : IdentityProviderSamlIdpVerificationCertificates[] | cdktf.IResolvable

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
  public get(index: number): IdentityProviderSamlIdpVerificationCertificatesOutputReference {
    return new IdentityProviderSamlIdpVerificationCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityProviderSamlIdpVerification {
  /**
  * An unordered list that specifies the identity provider's certificate IDs used to verify the signature on the signed assertion from the identity provider. Signing is done with a private key and verified with a public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#certificates IdentityProvider#certificates}
  */
  readonly certificates: IdentityProviderSamlIdpVerificationCertificates[] | cdktf.IResolvable;
}

export function identityProviderSamlIdpVerificationToTerraform(struct?: IdentityProviderSamlIdpVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates: cdktf.listMapper(identityProviderSamlIdpVerificationCertificatesToTerraform, false)(struct!.certificates),
  }
}


export function identityProviderSamlIdpVerificationToHclTerraform(struct?: IdentityProviderSamlIdpVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates: {
      value: cdktf.listMapperHcl(identityProviderSamlIdpVerificationCertificatesToHclTerraform, false)(struct!.certificates),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityProviderSamlIdpVerificationCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderSamlIdpVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderSamlIdpVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderSamlIdpVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificates.internalValue = value.certificates;
    }
  }

  // certificates - computed: false, optional: false, required: true
  private _certificates = new IdentityProviderSamlIdpVerificationCertificatesList(this, "certificates", true);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: IdentityProviderSamlIdpVerificationCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }
}
export interface IdentityProviderSamlSpSigningKey {
  /**
  * A string that specifies the service provider's signing key ID.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#id IdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function identityProviderSamlSpSigningKeyToTerraform(struct?: IdentityProviderSamlSpSigningKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function identityProviderSamlSpSigningKeyToHclTerraform(struct?: IdentityProviderSamlSpSigningKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderSamlSpSigningKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderSamlSpSigningKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderSamlSpSigningKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface IdentityProviderSamlSpSigning {
  /**
  * The signing key algorithm used by PingOne. The value will depend on which key algorithm and signature algorithm you chose when creating your signing key.  Options are `SHA256withECDSA`, `SHA256withRSA`, `SHA384withECDSA`, `SHA384withRSA`, `SHA512eithEDCSA`, `SHA512withRSA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#algorithm IdentityProvider#algorithm}
  */
  readonly algorithm?: string;
  /**
  * A single object that specifies settings for the SAML Sp Signing key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#key IdentityProvider#key}
  */
  readonly key: IdentityProviderSamlSpSigningKey;
}

export function identityProviderSamlSpSigningToTerraform(struct?: IdentityProviderSamlSpSigning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: identityProviderSamlSpSigningKeyToTerraform(struct!.key),
  }
}


export function identityProviderSamlSpSigningToHclTerraform(struct?: IdentityProviderSamlSpSigning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: identityProviderSamlSpSigningKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "struct",
      storageClassType: "IdentityProviderSamlSpSigningKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderSamlSpSigningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderSamlSpSigning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderSamlSpSigning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._key.internalValue = value.key;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key - computed: false, optional: false, required: true
  private _key = new IdentityProviderSamlSpSigningKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: IdentityProviderSamlSpSigningKey) {
    this._key.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}
export interface IdentityProviderSaml {
  /**
  * A boolean that specifies whether the SAML authentication request will be signed when sending to the identity provider. Set this to `true` if the external IDP is included in an authentication policy to be used by applications that are accessed using a mix of default URLS and custom Domains URLs.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#authentication_request_signed IdentityProvider#authentication_request_signed}
  */
  readonly authenticationRequestSigned?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the entity ID URI that is checked against the `issuerId` tag in the incoming response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#idp_entity_id IdentityProvider#idp_entity_id}
  */
  readonly idpEntityId: string;
  /**
  * A single object that specifies settings for SAML IdP verification, including the list of IdP certificates used to verify the signature on the signed assertion of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#idp_verification IdentityProvider#idp_verification}
  */
  readonly idpVerification: IdentityProviderSamlIdpVerification;
  /**
  * A string that specifies the binding protocol to be used for the logout response.  Options are `HTTP_POST`, `HTTP_REDIRECT`.  Defaults to `HTTP_POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#slo_binding IdentityProvider#slo_binding}
  */
  readonly sloBinding?: string;
  /**
  * A string that specifies the logout endpoint URL. This is an optional property. However, if a logout endpoint URL is not defined, logout actions result in an error.  This value must be a URL that uses http or https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#slo_endpoint IdentityProvider#slo_endpoint}
  */
  readonly sloEndpoint?: string;
  /**
  * A string that specifies the endpoint URL to submit the logout response.  If a value is not provided, the `slo_endpoint` property value is used to submit SLO response.  This value must be a URL that uses http or https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#slo_response_endpoint IdentityProvider#slo_response_endpoint}
  */
  readonly sloResponseEndpoint?: string;
  /**
  * An integer that defines how long (hours) PingOne can exchange logout messages with the application, specifically a logout request from the application, since the initial request. The minimum value is `1` hour and the maximum is `24` hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#slo_window IdentityProvider#slo_window}
  */
  readonly sloWindow?: number;
  /**
  * A string that specifies the service provider's entity ID, used to look up the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#sp_entity_id IdentityProvider#sp_entity_id}
  */
  readonly spEntityId: string;
  /**
  * A single object that specifies settings for SAML assertion signing, including the key and the signature algorithm.  Required when `authentication_request_signed` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#sp_signing IdentityProvider#sp_signing}
  */
  readonly spSigning?: IdentityProviderSamlSpSigning;
  /**
  * A string that specifies the binding for the authentication request.  Options are `HTTP_POST`, `HTTP_REDIRECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#sso_binding IdentityProvider#sso_binding}
  */
  readonly ssoBinding: string;
  /**
  * A string that specifies the SSO endpoint for the authentication request.  This value must be a URL that uses http or https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#sso_endpoint IdentityProvider#sso_endpoint}
  */
  readonly ssoEndpoint: string;
}

export function identityProviderSamlToTerraform(struct?: IdentityProviderSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_request_signed: cdktf.booleanToTerraform(struct!.authenticationRequestSigned),
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    idp_verification: identityProviderSamlIdpVerificationToTerraform(struct!.idpVerification),
    slo_binding: cdktf.stringToTerraform(struct!.sloBinding),
    slo_endpoint: cdktf.stringToTerraform(struct!.sloEndpoint),
    slo_response_endpoint: cdktf.stringToTerraform(struct!.sloResponseEndpoint),
    slo_window: cdktf.numberToTerraform(struct!.sloWindow),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    sp_signing: identityProviderSamlSpSigningToTerraform(struct!.spSigning),
    sso_binding: cdktf.stringToTerraform(struct!.ssoBinding),
    sso_endpoint: cdktf.stringToTerraform(struct!.ssoEndpoint),
  }
}


export function identityProviderSamlToHclTerraform(struct?: IdentityProviderSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_request_signed: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationRequestSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.idpEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_verification: {
      value: identityProviderSamlIdpVerificationToHclTerraform(struct!.idpVerification),
      isBlock: true,
      type: "struct",
      storageClassType: "IdentityProviderSamlIdpVerification",
    },
    slo_binding: {
      value: cdktf.stringToHclTerraform(struct!.sloBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.sloEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_response_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.sloResponseEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_window: {
      value: cdktf.numberToHclTerraform(struct!.sloWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_signing: {
      value: identityProviderSamlSpSigningToHclTerraform(struct!.spSigning),
      isBlock: true,
      type: "struct",
      storageClassType: "IdentityProviderSamlSpSigning",
    },
    sso_binding: {
      value: cdktf.stringToHclTerraform(struct!.ssoBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.ssoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestSigned = this._authenticationRequestSigned;
    }
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._idpVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpVerification = this._idpVerification?.internalValue;
    }
    if (this._sloBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloBinding = this._sloBinding;
    }
    if (this._sloEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloEndpoint = this._sloEndpoint;
    }
    if (this._sloResponseEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloResponseEndpoint = this._sloResponseEndpoint;
    }
    if (this._sloWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloWindow = this._sloWindow;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    if (this._spSigning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSigning = this._spSigning?.internalValue;
    }
    if (this._ssoBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoBinding = this._ssoBinding;
    }
    if (this._ssoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoEndpoint = this._ssoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationRequestSigned = undefined;
      this._idpEntityId = undefined;
      this._idpVerification.internalValue = undefined;
      this._sloBinding = undefined;
      this._sloEndpoint = undefined;
      this._sloResponseEndpoint = undefined;
      this._sloWindow = undefined;
      this._spEntityId = undefined;
      this._spSigning.internalValue = undefined;
      this._ssoBinding = undefined;
      this._ssoEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationRequestSigned = value.authenticationRequestSigned;
      this._idpEntityId = value.idpEntityId;
      this._idpVerification.internalValue = value.idpVerification;
      this._sloBinding = value.sloBinding;
      this._sloEndpoint = value.sloEndpoint;
      this._sloResponseEndpoint = value.sloResponseEndpoint;
      this._sloWindow = value.sloWindow;
      this._spEntityId = value.spEntityId;
      this._spSigning.internalValue = value.spSigning;
      this._ssoBinding = value.ssoBinding;
      this._ssoEndpoint = value.ssoEndpoint;
    }
  }

  // authentication_request_signed - computed: true, optional: true, required: false
  private _authenticationRequestSigned?: boolean | cdktf.IResolvable; 
  public get authenticationRequestSigned() {
    return this.getBooleanAttribute('authentication_request_signed');
  }
  public set authenticationRequestSigned(value: boolean | cdktf.IResolvable) {
    this._authenticationRequestSigned = value;
  }
  public resetAuthenticationRequestSigned() {
    this._authenticationRequestSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestSignedInput() {
    return this._authenticationRequestSigned;
  }

  // idp_entity_id - computed: false, optional: false, required: true
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_verification - computed: false, optional: false, required: true
  private _idpVerification = new IdentityProviderSamlIdpVerificationOutputReference(this, "idp_verification");
  public get idpVerification() {
    return this._idpVerification;
  }
  public putIdpVerification(value: IdentityProviderSamlIdpVerification) {
    this._idpVerification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpVerificationInput() {
    return this._idpVerification.internalValue;
  }

  // slo_binding - computed: true, optional: true, required: false
  private _sloBinding?: string; 
  public get sloBinding() {
    return this.getStringAttribute('slo_binding');
  }
  public set sloBinding(value: string) {
    this._sloBinding = value;
  }
  public resetSloBinding() {
    this._sloBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloBindingInput() {
    return this._sloBinding;
  }

  // slo_endpoint - computed: false, optional: true, required: false
  private _sloEndpoint?: string; 
  public get sloEndpoint() {
    return this.getStringAttribute('slo_endpoint');
  }
  public set sloEndpoint(value: string) {
    this._sloEndpoint = value;
  }
  public resetSloEndpoint() {
    this._sloEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloEndpointInput() {
    return this._sloEndpoint;
  }

  // slo_response_endpoint - computed: false, optional: true, required: false
  private _sloResponseEndpoint?: string; 
  public get sloResponseEndpoint() {
    return this.getStringAttribute('slo_response_endpoint');
  }
  public set sloResponseEndpoint(value: string) {
    this._sloResponseEndpoint = value;
  }
  public resetSloResponseEndpoint() {
    this._sloResponseEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloResponseEndpointInput() {
    return this._sloResponseEndpoint;
  }

  // slo_window - computed: false, optional: true, required: false
  private _sloWindow?: number; 
  public get sloWindow() {
    return this.getNumberAttribute('slo_window');
  }
  public set sloWindow(value: number) {
    this._sloWindow = value;
  }
  public resetSloWindow() {
    this._sloWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloWindowInput() {
    return this._sloWindow;
  }

  // sp_entity_id - computed: false, optional: false, required: true
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // sp_signing - computed: false, optional: true, required: false
  private _spSigning = new IdentityProviderSamlSpSigningOutputReference(this, "sp_signing");
  public get spSigning() {
    return this._spSigning;
  }
  public putSpSigning(value: IdentityProviderSamlSpSigning) {
    this._spSigning.internalValue = value;
  }
  public resetSpSigning() {
    this._spSigning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSigningInput() {
    return this._spSigning.internalValue;
  }

  // sso_binding - computed: false, optional: false, required: true
  private _ssoBinding?: string; 
  public get ssoBinding() {
    return this.getStringAttribute('sso_binding');
  }
  public set ssoBinding(value: string) {
    this._ssoBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoBindingInput() {
    return this._ssoBinding;
  }

  // sso_endpoint - computed: false, optional: false, required: true
  private _ssoEndpoint?: string; 
  public get ssoEndpoint() {
    return this.getStringAttribute('sso_endpoint');
  }
  public set ssoEndpoint(value: string) {
    this._ssoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoEndpointInput() {
    return this._ssoEndpoint;
  }
}
export interface IdentityProviderTwitter {
  /**
  * A string that specifies the application client ID from Twitter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from Twitter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
}

export function identityProviderTwitterToTerraform(struct?: IdentityProviderTwitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function identityProviderTwitterToHclTerraform(struct?: IdentityProviderTwitter | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderTwitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderTwitter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderTwitter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}
export interface IdentityProviderYahoo {
  /**
  * A string that specifies the application client ID from Yahoo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_id IdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * A string that specifies the application client secret from Yahoo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#client_secret IdentityProvider#client_secret}
  */
  readonly clientSecret: string;
}

export function identityProviderYahooToTerraform(struct?: IdentityProviderYahoo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function identityProviderYahooToHclTerraform(struct?: IdentityProviderYahoo | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityProviderYahooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityProviderYahoo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityProviderYahoo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider pingone_identity_provider}
*/
export class IdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProvider to import
  * @param importFromId The id of the existing IdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider pingone_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amazon.internalValue = config.amazon;
    this._apple.internalValue = config.apple;
    this._description = config.description;
    this._enabled = config.enabled;
    this._environmentId = config.environmentId;
    this._facebook.internalValue = config.facebook;
    this._github.internalValue = config.github;
    this._google.internalValue = config.google;
    this._icon.internalValue = config.icon;
    this._linkedin.internalValue = config.linkedin;
    this._linkedinOidc.internalValue = config.linkedinOidc;
    this._loginButtonIcon.internalValue = config.loginButtonIcon;
    this._microsoft.internalValue = config.microsoft;
    this._name = config.name;
    this._openidConnect.internalValue = config.openidConnect;
    this._paypal.internalValue = config.paypal;
    this._registrationPopulationId = config.registrationPopulationId;
    this._saml.internalValue = config.saml;
    this._twitter.internalValue = config.twitter;
    this._yahoo.internalValue = config.yahoo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon - computed: false, optional: true, required: false
  private _amazon = new IdentityProviderAmazonOutputReference(this, "amazon");
  public get amazon() {
    return this._amazon;
  }
  public putAmazon(value: IdentityProviderAmazon) {
    this._amazon.internalValue = value;
  }
  public resetAmazon() {
    this._amazon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonInput() {
    return this._amazon.internalValue;
  }

  // apple - computed: false, optional: true, required: false
  private _apple = new IdentityProviderAppleOutputReference(this, "apple");
  public get apple() {
    return this._apple;
  }
  public putApple(value: IdentityProviderApple) {
    this._apple.internalValue = value;
  }
  public resetApple() {
    this._apple.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appleInput() {
    return this._apple.internalValue;
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

  // enabled - computed: true, optional: true, required: false
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // facebook - computed: false, optional: true, required: false
  private _facebook = new IdentityProviderFacebookOutputReference(this, "facebook");
  public get facebook() {
    return this._facebook;
  }
  public putFacebook(value: IdentityProviderFacebook) {
    this._facebook.internalValue = value;
  }
  public resetFacebook() {
    this._facebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookInput() {
    return this._facebook.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new IdentityProviderGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: IdentityProviderGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new IdentityProviderGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: IdentityProviderGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // icon - computed: false, optional: true, required: false
  private _icon = new IdentityProviderIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: IdentityProviderIcon) {
    this._icon.internalValue = value;
  }
  public resetIcon() {
    this._icon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linkedin - computed: false, optional: true, required: false
  private _linkedin = new IdentityProviderLinkedinOutputReference(this, "linkedin");
  public get linkedin() {
    return this._linkedin;
  }
  public putLinkedin(value: IdentityProviderLinkedin) {
    this._linkedin.internalValue = value;
  }
  public resetLinkedin() {
    this._linkedin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedinInput() {
    return this._linkedin.internalValue;
  }

  // linkedin_oidc - computed: false, optional: true, required: false
  private _linkedinOidc = new IdentityProviderLinkedinOidcOutputReference(this, "linkedin_oidc");
  public get linkedinOidc() {
    return this._linkedinOidc;
  }
  public putLinkedinOidc(value: IdentityProviderLinkedinOidc) {
    this._linkedinOidc.internalValue = value;
  }
  public resetLinkedinOidc() {
    this._linkedinOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedinOidcInput() {
    return this._linkedinOidc.internalValue;
  }

  // login_button_icon - computed: false, optional: true, required: false
  private _loginButtonIcon = new IdentityProviderLoginButtonIconOutputReference(this, "login_button_icon");
  public get loginButtonIcon() {
    return this._loginButtonIcon;
  }
  public putLoginButtonIcon(value: IdentityProviderLoginButtonIcon) {
    this._loginButtonIcon.internalValue = value;
  }
  public resetLoginButtonIcon() {
    this._loginButtonIcon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginButtonIconInput() {
    return this._loginButtonIcon.internalValue;
  }

  // microsoft - computed: false, optional: true, required: false
  private _microsoft = new IdentityProviderMicrosoftOutputReference(this, "microsoft");
  public get microsoft() {
    return this._microsoft;
  }
  public putMicrosoft(value: IdentityProviderMicrosoft) {
    this._microsoft.internalValue = value;
  }
  public resetMicrosoft() {
    this._microsoft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftInput() {
    return this._microsoft.internalValue;
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

  // openid_connect - computed: false, optional: true, required: false
  private _openidConnect = new IdentityProviderOpenidConnectOutputReference(this, "openid_connect");
  public get openidConnect() {
    return this._openidConnect;
  }
  public putOpenidConnect(value: IdentityProviderOpenidConnect) {
    this._openidConnect.internalValue = value;
  }
  public resetOpenidConnect() {
    this._openidConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectInput() {
    return this._openidConnect.internalValue;
  }

  // paypal - computed: false, optional: true, required: false
  private _paypal = new IdentityProviderPaypalOutputReference(this, "paypal");
  public get paypal() {
    return this._paypal;
  }
  public putPaypal(value: IdentityProviderPaypal) {
    this._paypal.internalValue = value;
  }
  public resetPaypal() {
    this._paypal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paypalInput() {
    return this._paypal.internalValue;
  }

  // registration_population_id - computed: false, optional: true, required: false
  private _registrationPopulationId?: string; 
  public get registrationPopulationId() {
    return this.getStringAttribute('registration_population_id');
  }
  public set registrationPopulationId(value: string) {
    this._registrationPopulationId = value;
  }
  public resetRegistrationPopulationId() {
    this._registrationPopulationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationPopulationIdInput() {
    return this._registrationPopulationId;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new IdentityProviderSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: IdentityProviderSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // twitter - computed: false, optional: true, required: false
  private _twitter = new IdentityProviderTwitterOutputReference(this, "twitter");
  public get twitter() {
    return this._twitter;
  }
  public putTwitter(value: IdentityProviderTwitter) {
    this._twitter.internalValue = value;
  }
  public resetTwitter() {
    this._twitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterInput() {
    return this._twitter.internalValue;
  }

  // yahoo - computed: false, optional: true, required: false
  private _yahoo = new IdentityProviderYahooOutputReference(this, "yahoo");
  public get yahoo() {
    return this._yahoo;
  }
  public putYahoo(value: IdentityProviderYahoo) {
    this._yahoo.internalValue = value;
  }
  public resetYahoo() {
    this._yahoo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yahooInput() {
    return this._yahoo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon: identityProviderAmazonToTerraform(this._amazon.internalValue),
      apple: identityProviderAppleToTerraform(this._apple.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      facebook: identityProviderFacebookToTerraform(this._facebook.internalValue),
      github: identityProviderGithubToTerraform(this._github.internalValue),
      google: identityProviderGoogleToTerraform(this._google.internalValue),
      icon: identityProviderIconToTerraform(this._icon.internalValue),
      linkedin: identityProviderLinkedinToTerraform(this._linkedin.internalValue),
      linkedin_oidc: identityProviderLinkedinOidcToTerraform(this._linkedinOidc.internalValue),
      login_button_icon: identityProviderLoginButtonIconToTerraform(this._loginButtonIcon.internalValue),
      microsoft: identityProviderMicrosoftToTerraform(this._microsoft.internalValue),
      name: cdktf.stringToTerraform(this._name),
      openid_connect: identityProviderOpenidConnectToTerraform(this._openidConnect.internalValue),
      paypal: identityProviderPaypalToTerraform(this._paypal.internalValue),
      registration_population_id: cdktf.stringToTerraform(this._registrationPopulationId),
      saml: identityProviderSamlToTerraform(this._saml.internalValue),
      twitter: identityProviderTwitterToTerraform(this._twitter.internalValue),
      yahoo: identityProviderYahooToTerraform(this._yahoo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amazon: {
        value: identityProviderAmazonToHclTerraform(this._amazon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderAmazon",
      },
      apple: {
        value: identityProviderAppleToHclTerraform(this._apple.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderApple",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facebook: {
        value: identityProviderFacebookToHclTerraform(this._facebook.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderFacebook",
      },
      github: {
        value: identityProviderGithubToHclTerraform(this._github.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderGithub",
      },
      google: {
        value: identityProviderGoogleToHclTerraform(this._google.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderGoogle",
      },
      icon: {
        value: identityProviderIconToHclTerraform(this._icon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderIcon",
      },
      linkedin: {
        value: identityProviderLinkedinToHclTerraform(this._linkedin.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderLinkedin",
      },
      linkedin_oidc: {
        value: identityProviderLinkedinOidcToHclTerraform(this._linkedinOidc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderLinkedinOidc",
      },
      login_button_icon: {
        value: identityProviderLoginButtonIconToHclTerraform(this._loginButtonIcon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderLoginButtonIcon",
      },
      microsoft: {
        value: identityProviderMicrosoftToHclTerraform(this._microsoft.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderMicrosoft",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openid_connect: {
        value: identityProviderOpenidConnectToHclTerraform(this._openidConnect.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderOpenidConnect",
      },
      paypal: {
        value: identityProviderPaypalToHclTerraform(this._paypal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderPaypal",
      },
      registration_population_id: {
        value: cdktf.stringToHclTerraform(this._registrationPopulationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml: {
        value: identityProviderSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderSaml",
      },
      twitter: {
        value: identityProviderTwitterToHclTerraform(this._twitter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderTwitter",
      },
      yahoo: {
        value: identityProviderYahooToHclTerraform(this._yahoo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityProviderYahoo",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
