// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of external authentication providers such as GitHub and Google.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#auth_providers Sso#auth_providers}
  */
  readonly authProviders?: string[];
  /**
  * A set of domains associated with the SSO configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#domains Sso#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#id Sso#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines the type of SSO authentication. Supported values: none, saml, oidc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#sso_auth_type Sso#sso_auth_type}
  */
  readonly ssoAuthType?: string;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#oidc Sso#oidc}
  */
  readonly oidc?: SsoOidc;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#saml Sso#saml}
  */
  readonly saml?: SsoSaml;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#timeouts Sso#timeouts}
  */
  readonly timeouts?: SsoTimeouts;
}
export interface SsoOidcUserInfoEndpoint {
  /**
  * The name of the claim that returns the user's email address from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#email Sso#email}
  */
  readonly email: string;
  /**
  * The name of the claim that returns the user's first name from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#first_name Sso#first_name}
  */
  readonly firstName: string;
  /**
  * The name of the claim that returns the user's last name from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#last_name Sso#last_name}
  */
  readonly lastName: string;
  /**
  * The name of the claim that returns the user's group memberships from the Identity Provider. The values of this claim will map to SpectroCloud teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#spectro_team Sso#spectro_team}
  */
  readonly spectroTeam: string;
}

export function ssoOidcUserInfoEndpointToTerraform(struct?: SsoOidcUserInfoEndpointOutputReference | SsoOidcUserInfoEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    spectro_team: cdktf.stringToTerraform(struct!.spectroTeam),
  }
}


export function ssoOidcUserInfoEndpointToHclTerraform(struct?: SsoOidcUserInfoEndpointOutputReference | SsoOidcUserInfoEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spectro_team: {
      value: cdktf.stringToHclTerraform(struct!.spectroTeam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoOidcUserInfoEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoOidcUserInfoEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._spectroTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectroTeam = this._spectroTeam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoOidcUserInfoEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._spectroTeam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._spectroTeam = value.spectroTeam;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // spectro_team - computed: false, optional: false, required: true
  private _spectroTeam?: string; 
  public get spectroTeam() {
    return this.getStringAttribute('spectro_team');
  }
  public set spectroTeam(value: string) {
    this._spectroTeam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spectroTeamInput() {
    return this._spectroTeam;
  }
}
export interface SsoOidc {
  /**
  * Client ID for OIDC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#client_id Sso#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret for OIDC authentication (sensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#client_secret Sso#client_secret}
  */
  readonly clientSecret: string;
  /**
  * A set of default team IDs assigned to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#default_team_ids Sso#default_team_ids}
  */
  readonly defaultTeamIds?: string[];
  /**
  * The name of the claim that returns the user's email address from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#email Sso#email}
  */
  readonly email: string;
  /**
  * The name of the claim that returns the user's first name from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#first_name Sso#first_name}
  */
  readonly firstName: string;
  /**
  * Certificate authority (CA) certificate for the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#identity_provider_ca_certificate Sso#identity_provider_ca_certificate}
  */
  readonly identityProviderCaCertificate?: string;
  /**
  * Boolean to skip TLS verification for identity provider communication. ⚠️ WARNING: Setting this to true disables SSL certificate verification and makes connections vulnerable to man-in-the-middle attacks. Only use this when connecting to identity providers with self-signed certificates in trusted networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#insecure_skip_tls_verify Sso#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * URL of the OIDC issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#issuer_url Sso#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * The name of the claim that returns the user's last name from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#last_name Sso#last_name}
  */
  readonly lastName: string;
  /**
  * Scopes requested during OIDC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#scopes Sso#scopes}
  */
  readonly scopes: string[];
  /**
  * The name of the claim that returns the user's group memberships from the Identity Provider. The values of this claim will map to SpectroCloud teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#spectro_team Sso#spectro_team}
  */
  readonly spectroTeam: string;
  /**
  * user_info_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#user_info_endpoint Sso#user_info_endpoint}
  */
  readonly userInfoEndpoint?: SsoOidcUserInfoEndpoint;
}

export function ssoOidcToTerraform(struct?: SsoOidcOutputReference | SsoOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    default_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultTeamIds),
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    identity_provider_ca_certificate: cdktf.stringToTerraform(struct!.identityProviderCaCertificate),
    insecure_skip_tls_verify: cdktf.booleanToTerraform(struct!.insecureSkipTlsVerify),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    spectro_team: cdktf.stringToTerraform(struct!.spectroTeam),
    user_info_endpoint: ssoOidcUserInfoEndpointToTerraform(struct!.userInfoEndpoint),
  }
}


export function ssoOidcToHclTerraform(struct?: SsoOidcOutputReference | SsoOidc): any {
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
    default_team_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultTeamIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
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
    spectro_team: {
      value: cdktf.stringToHclTerraform(struct!.spectroTeam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_endpoint: {
      value: ssoOidcUserInfoEndpointToHclTerraform(struct!.userInfoEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "SsoOidcUserInfoEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoOidc | undefined {
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
    if (this._defaultTeamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTeamIds = this._defaultTeamIds;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._identityProviderCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderCaCertificate = this._identityProviderCaCertificate;
    }
    if (this._insecureSkipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipTlsVerify = this._insecureSkipTlsVerify;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._spectroTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectroTeam = this._spectroTeam;
    }
    if (this._userInfoEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._defaultTeamIds = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._identityProviderCaCertificate = undefined;
      this._insecureSkipTlsVerify = undefined;
      this._issuerUrl = undefined;
      this._lastName = undefined;
      this._scopes = undefined;
      this._spectroTeam = undefined;
      this._userInfoEndpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._defaultTeamIds = value.defaultTeamIds;
      this._email = value.email;
      this._firstName = value.firstName;
      this._identityProviderCaCertificate = value.identityProviderCaCertificate;
      this._insecureSkipTlsVerify = value.insecureSkipTlsVerify;
      this._issuerUrl = value.issuerUrl;
      this._lastName = value.lastName;
      this._scopes = value.scopes;
      this._spectroTeam = value.spectroTeam;
      this._userInfoEndpoint.internalValue = value.userInfoEndpoint;
    }
  }

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
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

  // default_team_ids - computed: false, optional: true, required: false
  private _defaultTeamIds?: string[]; 
  public get defaultTeamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('default_team_ids'));
  }
  public set defaultTeamIds(value: string[]) {
    this._defaultTeamIds = value;
  }
  public resetDefaultTeamIds() {
    this._defaultTeamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamIdsInput() {
    return this._defaultTeamIds;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // identity_provider_ca_certificate - computed: false, optional: true, required: false
  private _identityProviderCaCertificate?: string; 
  public get identityProviderCaCertificate() {
    return this.getStringAttribute('identity_provider_ca_certificate');
  }
  public set identityProviderCaCertificate(value: string) {
    this._identityProviderCaCertificate = value;
  }
  public resetIdentityProviderCaCertificate() {
    this._identityProviderCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderCaCertificateInput() {
    return this._identityProviderCaCertificate;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this.getBooleanAttribute('insecure_skip_tls_verify');
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
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

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // logout_url - computed: true, optional: false, required: false
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
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

  // spectro_team - computed: false, optional: false, required: true
  private _spectroTeam?: string; 
  public get spectroTeam() {
    return this.getStringAttribute('spectro_team');
  }
  public set spectroTeam(value: string) {
    this._spectroTeam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spectroTeamInput() {
    return this._spectroTeam;
  }

  // user_info_endpoint - computed: false, optional: true, required: false
  private _userInfoEndpoint = new SsoOidcUserInfoEndpointOutputReference(this, "user_info_endpoint");
  public get userInfoEndpoint() {
    return this._userInfoEndpoint;
  }
  public putUserInfoEndpoint(value: SsoOidcUserInfoEndpoint) {
    this._userInfoEndpoint.internalValue = value;
  }
  public resetUserInfoEndpoint() {
    this._userInfoEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint.internalValue;
  }
}
export interface SsoSaml {
  /**
  * A set of default team IDs assigned to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#default_team_ids Sso#default_team_ids}
  */
  readonly defaultTeamIds?: string[];
  /**
  * User's email address retrieved from identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#email Sso#email}
  */
  readonly email?: string;
  /**
  * Boolean to enable SAML single logout feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#enable_single_logout Sso#enable_single_logout}
  */
  readonly enableSingleLogout?: boolean | cdktf.IResolvable;
  /**
  * User's first name retrieved from identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#first_name Sso#first_name}
  */
  readonly firstName?: string;
  /**
  * Metadata XML of the SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#identity_provider_metadata Sso#identity_provider_metadata}
  */
  readonly identityProviderMetadata: string;
  /**
  * User's last name retrieved from identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#last_name Sso#last_name}
  */
  readonly lastName?: string;
  /**
  * Format of the NameID attribute in SAML responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#name_id_format Sso#name_id_format}
  */
  readonly nameIdFormat: string;
  /**
  * The identity provider service used for SAML authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#service_provider Sso#service_provider}
  */
  readonly serviceProvider: string;
  /**
  * The SpectroCloud team the user belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#spectro_team Sso#spectro_team}
  */
  readonly spectroTeam?: string;
}

export function ssoSamlToTerraform(struct?: SsoSamlOutputReference | SsoSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultTeamIds),
    email: cdktf.stringToTerraform(struct!.email),
    enable_single_logout: cdktf.booleanToTerraform(struct!.enableSingleLogout),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    identity_provider_metadata: cdktf.stringToTerraform(struct!.identityProviderMetadata),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    name_id_format: cdktf.stringToTerraform(struct!.nameIdFormat),
    service_provider: cdktf.stringToTerraform(struct!.serviceProvider),
    spectro_team: cdktf.stringToTerraform(struct!.spectroTeam),
  }
}


export function ssoSamlToHclTerraform(struct?: SsoSamlOutputReference | SsoSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_team_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultTeamIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_single_logout: {
      value: cdktf.booleanToHclTerraform(struct!.enableSingleLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_metadata: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_id_format: {
      value: cdktf.stringToHclTerraform(struct!.nameIdFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_provider: {
      value: cdktf.stringToHclTerraform(struct!.serviceProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spectro_team: {
      value: cdktf.stringToHclTerraform(struct!.spectroTeam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsoSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTeamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTeamIds = this._defaultTeamIds;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._enableSingleLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSingleLogout = this._enableSingleLogout;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._identityProviderMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderMetadata = this._identityProviderMetadata;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._nameIdFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdFormat = this._nameIdFormat;
    }
    if (this._serviceProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProvider = this._serviceProvider;
    }
    if (this._spectroTeam !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectroTeam = this._spectroTeam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTeamIds = undefined;
      this._email = undefined;
      this._enableSingleLogout = undefined;
      this._firstName = undefined;
      this._identityProviderMetadata = undefined;
      this._lastName = undefined;
      this._nameIdFormat = undefined;
      this._serviceProvider = undefined;
      this._spectroTeam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTeamIds = value.defaultTeamIds;
      this._email = value.email;
      this._enableSingleLogout = value.enableSingleLogout;
      this._firstName = value.firstName;
      this._identityProviderMetadata = value.identityProviderMetadata;
      this._lastName = value.lastName;
      this._nameIdFormat = value.nameIdFormat;
      this._serviceProvider = value.serviceProvider;
      this._spectroTeam = value.spectroTeam;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // default_team_ids - computed: false, optional: true, required: false
  private _defaultTeamIds?: string[]; 
  public get defaultTeamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('default_team_ids'));
  }
  public set defaultTeamIds(value: string[]) {
    this._defaultTeamIds = value;
  }
  public resetDefaultTeamIds() {
    this._defaultTeamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamIdsInput() {
    return this._defaultTeamIds;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enable_single_logout - computed: false, optional: true, required: false
  private _enableSingleLogout?: boolean | cdktf.IResolvable; 
  public get enableSingleLogout() {
    return this.getBooleanAttribute('enable_single_logout');
  }
  public set enableSingleLogout(value: boolean | cdktf.IResolvable) {
    this._enableSingleLogout = value;
  }
  public resetEnableSingleLogout() {
    this._enableSingleLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSingleLogoutInput() {
    return this._enableSingleLogout;
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // identity_provider_metadata - computed: false, optional: false, required: true
  private _identityProviderMetadata?: string; 
  public get identityProviderMetadata() {
    return this.getStringAttribute('identity_provider_metadata');
  }
  public set identityProviderMetadata(value: string) {
    this._identityProviderMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderMetadataInput() {
    return this._identityProviderMetadata;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // login_url - computed: true, optional: false, required: false
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }

  // name_id_format - computed: false, optional: false, required: true
  private _nameIdFormat?: string; 
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }
  public set nameIdFormat(value: string) {
    this._nameIdFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdFormatInput() {
    return this._nameIdFormat;
  }

  // service_provider - computed: false, optional: false, required: true
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // service_provider_metadata - computed: true, optional: false, required: false
  public get serviceProviderMetadata() {
    return this.getStringAttribute('service_provider_metadata');
  }

  // single_logout_url - computed: true, optional: false, required: false
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }

  // spectro_team - computed: false, optional: true, required: false
  private _spectroTeam?: string; 
  public get spectroTeam() {
    return this.getStringAttribute('spectro_team');
  }
  public set spectroTeam(value: string) {
    this._spectroTeam = value;
  }
  public resetSpectroTeam() {
    this._spectroTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectroTeamInput() {
    return this._spectroTeam;
  }
}
export interface SsoTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#create Sso#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#delete Sso#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#update Sso#update}
  */
  readonly update?: string;
}

export function ssoTimeoutsToTerraform(struct?: SsoTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ssoTimeoutsToHclTerraform(struct?: SsoTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class SsoTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso spectrocloud_sso}
*/
export class Sso extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_sso";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sso resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sso to import
  * @param importFromId The id of the existing Sso that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sso to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_sso", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/sso spectrocloud_sso} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SsoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_sso',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.25.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authProviders = config.authProviders;
    this._domains = config.domains;
    this._id = config.id;
    this._ssoAuthType = config.ssoAuthType;
    this._oidc.internalValue = config.oidc;
    this._saml.internalValue = config.saml;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_providers - computed: false, optional: true, required: false
  private _authProviders?: string[]; 
  public get authProviders() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_providers'));
  }
  public set authProviders(value: string[]) {
    this._authProviders = value;
  }
  public resetAuthProviders() {
    this._authProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProvidersInput() {
    return this._authProviders;
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

  // sso_auth_type - computed: false, optional: true, required: false
  private _ssoAuthType?: string; 
  public get ssoAuthType() {
    return this.getStringAttribute('sso_auth_type');
  }
  public set ssoAuthType(value: string) {
    this._ssoAuthType = value;
  }
  public resetSsoAuthType() {
    this._ssoAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAuthTypeInput() {
    return this._ssoAuthType;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new SsoOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: SsoOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new SsoSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: SsoSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SsoTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SsoTimeouts) {
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
      auth_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authProviders),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      id: cdktf.stringToTerraform(this._id),
      sso_auth_type: cdktf.stringToTerraform(this._ssoAuthType),
      oidc: ssoOidcToTerraform(this._oidc.internalValue),
      saml: ssoSamlToTerraform(this._saml.internalValue),
      timeouts: ssoTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authProviders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_auth_type: {
        value: cdktf.stringToHclTerraform(this._ssoAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc: {
        value: ssoOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoOidcList",
      },
      saml: {
        value: ssoSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoSamlList",
      },
      timeouts: {
        value: ssoTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsoTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
