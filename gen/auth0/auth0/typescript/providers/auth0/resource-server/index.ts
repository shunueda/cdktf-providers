// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether refresh tokens can be issued for this resource server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#allow_offline_access ResourceServer#allow_offline_access}
  */
  readonly allowOfflineAccess?: boolean | cdktf.IResolvable;
  /**
  * Consent policy for this resource server. Options include `transactional-authorization-with-mfa`, or `null` to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#consent_policy ResourceServer#consent_policy}
  */
  readonly consentPolicy?: string;
  /**
  * If this setting is enabled, RBAC authorization policies will be enforced for this API. Role and permission assignments will be evaluated during the login transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#enforce_policies ResourceServer#enforce_policies}
  */
  readonly enforcePolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#id ResourceServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier for the resource server. Used as the audience parameter for authorization calls. Cannot be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#identifier ResourceServer#identifier}
  */
  readonly identifier: string;
  /**
  * Friendly name for the resource server. Cannot include `<` or `>` characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#name ResourceServer#name}
  */
  readonly name?: string;
  /**
  * Algorithm used to sign JWTs. Options include `HS256`, `RS256`, and `PS256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#signing_alg ResourceServer#signing_alg}
  */
  readonly signingAlg?: string;
  /**
  * Secret used to sign tokens when using symmetric algorithms (HS256).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#signing_secret ResourceServer#signing_secret}
  */
  readonly signingSecret?: string;
  /**
  * Indicates whether to skip user consent for applications flagged as first party.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#skip_consent_for_verifiable_first_party_clients ResourceServer#skip_consent_for_verifiable_first_party_clients}
  */
  readonly skipConsentForVerifiableFirstPartyClients?: boolean | cdktf.IResolvable;
  /**
  * Dialect of access tokens that should be issued for this resource server. Options include `access_token`, `rfc9068_profile`, `access_token_authz`, and `rfc9068_profile_authz`. `access_token` is a JWT containing standard Auth0 claims. `rfc9068_profile` is a JWT conforming to the IETF JWT Access Token Profile. `access_token_authz` is a JWT containing standard Auth0 claims, including RBAC permissions claims. `rfc9068_profile_authz` is a JWT conforming to the IETF JWT Access Token Profile, including RBAC permissions claims. RBAC permissions claims are available if RBAC (`enforce_policies`) is enabled for this API. For more details, refer to [Access Token Profiles](https://auth0.com/docs/secure/tokens/access-tokens/access-token-profiles).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#token_dialect ResourceServer#token_dialect}
  */
  readonly tokenDialect?: string;
  /**
  * Number of seconds during which access tokens issued for this resource server from the token endpoint remain valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#token_lifetime ResourceServer#token_lifetime}
  */
  readonly tokenLifetime?: number;
  /**
  * Number of seconds during which access tokens issued for this resource server via implicit or hybrid flows remain valid. Cannot be greater than the `token_lifetime` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#token_lifetime_for_web ResourceServer#token_lifetime_for_web}
  */
  readonly tokenLifetimeForWeb?: number;
  /**
  * URL from which to retrieve JWKs for this resource server. Used for verifying the JWT sent to Auth0 for token introspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#verification_location ResourceServer#verification_location}
  */
  readonly verificationLocation?: string;
  /**
  * authorization_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#authorization_details ResourceServer#authorization_details}
  */
  readonly authorizationDetails?: ResourceServerAuthorizationDetails[] | cdktf.IResolvable;
  /**
  * proof_of_possession block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#proof_of_possession ResourceServer#proof_of_possession}
  */
  readonly proofOfPossession?: ResourceServerProofOfPossession;
  /**
  * subject_type_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#subject_type_authorization ResourceServer#subject_type_authorization}
  */
  readonly subjectTypeAuthorization?: ResourceServerSubjectTypeAuthorization;
  /**
  * token_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#token_encryption ResourceServer#token_encryption}
  */
  readonly tokenEncryption?: ResourceServerTokenEncryption;
}
export interface ResourceServerAuthorizationDetails {
  /**
  * Disable authorization details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#disable ResourceServer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Type of authorization details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#type ResourceServer#type}
  */
  readonly type?: string;
}

export function resourceServerAuthorizationDetailsToTerraform(struct?: ResourceServerAuthorizationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceServerAuthorizationDetailsToHclTerraform(struct?: ResourceServerAuthorizationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceServerAuthorizationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceServerAuthorizationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceServerAuthorizationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._type = value.type;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ResourceServerAuthorizationDetailsList extends cdktf.ComplexList {
  public internalValue? : ResourceServerAuthorizationDetails[] | cdktf.IResolvable

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
  public get(index: number): ResourceServerAuthorizationDetailsOutputReference {
    return new ResourceServerAuthorizationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceServerProofOfPossession {
  /**
  * Disable proof-of-possession.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#disable ResourceServer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Mechanism used for proof-of-possession. `mtls` or `dpop` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#mechanism ResourceServer#mechanism}
  */
  readonly mechanism?: string;
  /**
  * Indicates whether proof-of-possession is required with this resource server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#required ResourceServer#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function resourceServerProofOfPossessionToTerraform(struct?: ResourceServerProofOfPossessionOutputReference | ResourceServerProofOfPossession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function resourceServerProofOfPossessionToHclTerraform(struct?: ResourceServerProofOfPossessionOutputReference | ResourceServerProofOfPossession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceServerProofOfPossessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceServerProofOfPossession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceServerProofOfPossession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._mechanism = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._mechanism = value.mechanism;
      this._required = value.required;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // mechanism - computed: true, optional: true, required: false
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  public resetMechanism() {
    this._mechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface ResourceServerSubjectTypeAuthorizationClient {
  /**
  * Client flows policy. One of `deny_all`, `require_client_grant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#policy ResourceServer#policy}
  */
  readonly policy?: string;
}

export function resourceServerSubjectTypeAuthorizationClientToTerraform(struct?: ResourceServerSubjectTypeAuthorizationClientOutputReference | ResourceServerSubjectTypeAuthorizationClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function resourceServerSubjectTypeAuthorizationClientToHclTerraform(struct?: ResourceServerSubjectTypeAuthorizationClientOutputReference | ResourceServerSubjectTypeAuthorizationClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceServerSubjectTypeAuthorizationClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceServerSubjectTypeAuthorizationClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceServerSubjectTypeAuthorizationClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface ResourceServerSubjectTypeAuthorizationUser {
  /**
  * User flows policy. One of `allow_all`, `deny_all`, `require_client_grant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#policy ResourceServer#policy}
  */
  readonly policy?: string;
}

export function resourceServerSubjectTypeAuthorizationUserToTerraform(struct?: ResourceServerSubjectTypeAuthorizationUserOutputReference | ResourceServerSubjectTypeAuthorizationUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function resourceServerSubjectTypeAuthorizationUserToHclTerraform(struct?: ResourceServerSubjectTypeAuthorizationUserOutputReference | ResourceServerSubjectTypeAuthorizationUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceServerSubjectTypeAuthorizationUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceServerSubjectTypeAuthorizationUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceServerSubjectTypeAuthorizationUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface ResourceServerSubjectTypeAuthorization {
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#client ResourceServer#client}
  */
  readonly client?: ResourceServerSubjectTypeAuthorizationClient;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#user ResourceServer#user}
  */
  readonly user?: ResourceServerSubjectTypeAuthorizationUser;
}

export function resourceServerSubjectTypeAuthorizationToTerraform(struct?: ResourceServerSubjectTypeAuthorizationOutputReference | ResourceServerSubjectTypeAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: resourceServerSubjectTypeAuthorizationClientToTerraform(struct!.client),
    user: resourceServerSubjectTypeAuthorizationUserToTerraform(struct!.user),
  }
}


export function resourceServerSubjectTypeAuthorizationToHclTerraform(struct?: ResourceServerSubjectTypeAuthorizationOutputReference | ResourceServerSubjectTypeAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: resourceServerSubjectTypeAuthorizationClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceServerSubjectTypeAuthorizationClientList",
    },
    user: {
      value: resourceServerSubjectTypeAuthorizationUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceServerSubjectTypeAuthorizationUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceServerSubjectTypeAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceServerSubjectTypeAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceServerSubjectTypeAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._client.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._client.internalValue = value.client;
      this._user.internalValue = value.user;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client = new ResourceServerSubjectTypeAuthorizationClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: ResourceServerSubjectTypeAuthorizationClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new ResourceServerSubjectTypeAuthorizationUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: ResourceServerSubjectTypeAuthorizationUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface ResourceServerTokenEncryptionEncryptionKey {
  /**
  * Algorithm used to encrypt the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#algorithm ResourceServer#algorithm}
  */
  readonly algorithm: string;
  /**
  * Key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#kid ResourceServer#kid}
  */
  readonly kid?: string;
  /**
  * Name of the encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#name ResourceServer#name}
  */
  readonly name?: string;
  /**
  * PEM-formatted public key. Must be JSON escaped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#pem ResourceServer#pem}
  */
  readonly pem: string;
}

export function resourceServerTokenEncryptionEncryptionKeyToTerraform(struct?: ResourceServerTokenEncryptionEncryptionKeyOutputReference | ResourceServerTokenEncryptionEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    kid: cdktf.stringToTerraform(struct!.kid),
    name: cdktf.stringToTerraform(struct!.name),
    pem: cdktf.stringToTerraform(struct!.pem),
  }
}


export function resourceServerTokenEncryptionEncryptionKeyToHclTerraform(struct?: ResourceServerTokenEncryptionEncryptionKeyOutputReference | ResourceServerTokenEncryptionEncryptionKey): any {
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
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
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
    pem: {
      value: cdktf.stringToHclTerraform(struct!.pem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceServerTokenEncryptionEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceServerTokenEncryptionEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.pem = this._pem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceServerTokenEncryptionEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._kid = undefined;
      this._name = undefined;
      this._pem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._kid = value.kid;
      this._name = value.name;
      this._pem = value.pem;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // kid - computed: true, optional: true, required: false
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  public resetKid() {
    this._kid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
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

  // pem - computed: false, optional: false, required: true
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }
}
export interface ResourceServerTokenEncryption {
  /**
  * Disable token encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#disable ResourceServer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Format of the token encryption. Only `compact-nested-jwe` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#format ResourceServer#format}
  */
  readonly format?: string;
  /**
  * encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#encryption_key ResourceServer#encryption_key}
  */
  readonly encryptionKey?: ResourceServerTokenEncryptionEncryptionKey;
}

export function resourceServerTokenEncryptionToTerraform(struct?: ResourceServerTokenEncryptionOutputReference | ResourceServerTokenEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    format: cdktf.stringToTerraform(struct!.format),
    encryption_key: resourceServerTokenEncryptionEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function resourceServerTokenEncryptionToHclTerraform(struct?: ResourceServerTokenEncryptionOutputReference | ResourceServerTokenEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key: {
      value: resourceServerTokenEncryptionEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceServerTokenEncryptionEncryptionKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceServerTokenEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceServerTokenEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceServerTokenEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._format = undefined;
      this._encryptionKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._format = value.format;
      this._encryptionKey.internalValue = value.encryptionKey;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new ResourceServerTokenEncryptionEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: ResourceServerTokenEncryptionEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server auth0_resource_server}
*/
export class ResourceServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_resource_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceServer to import
  * @param importFromId The id of the existing ResourceServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_resource_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/resource_server auth0_resource_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceServerConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceServerConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_resource_server',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOfflineAccess = config.allowOfflineAccess;
    this._consentPolicy = config.consentPolicy;
    this._enforcePolicies = config.enforcePolicies;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._signingAlg = config.signingAlg;
    this._signingSecret = config.signingSecret;
    this._skipConsentForVerifiableFirstPartyClients = config.skipConsentForVerifiableFirstPartyClients;
    this._tokenDialect = config.tokenDialect;
    this._tokenLifetime = config.tokenLifetime;
    this._tokenLifetimeForWeb = config.tokenLifetimeForWeb;
    this._verificationLocation = config.verificationLocation;
    this._authorizationDetails.internalValue = config.authorizationDetails;
    this._proofOfPossession.internalValue = config.proofOfPossession;
    this._subjectTypeAuthorization.internalValue = config.subjectTypeAuthorization;
    this._tokenEncryption.internalValue = config.tokenEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_offline_access - computed: false, optional: true, required: false
  private _allowOfflineAccess?: boolean | cdktf.IResolvable; 
  public get allowOfflineAccess() {
    return this.getBooleanAttribute('allow_offline_access');
  }
  public set allowOfflineAccess(value: boolean | cdktf.IResolvable) {
    this._allowOfflineAccess = value;
  }
  public resetAllowOfflineAccess() {
    this._allowOfflineAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOfflineAccessInput() {
    return this._allowOfflineAccess;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // consent_policy - computed: true, optional: true, required: false
  private _consentPolicy?: string; 
  public get consentPolicy() {
    return this.getStringAttribute('consent_policy');
  }
  public set consentPolicy(value: string) {
    this._consentPolicy = value;
  }
  public resetConsentPolicy() {
    this._consentPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentPolicyInput() {
    return this._consentPolicy;
  }

  // enforce_policies - computed: true, optional: true, required: false
  private _enforcePolicies?: boolean | cdktf.IResolvable; 
  public get enforcePolicies() {
    return this.getBooleanAttribute('enforce_policies');
  }
  public set enforcePolicies(value: boolean | cdktf.IResolvable) {
    this._enforcePolicies = value;
  }
  public resetEnforcePolicies() {
    this._enforcePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcePoliciesInput() {
    return this._enforcePolicies;
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

  // is_system - computed: true, optional: false, required: false
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }

  // name - computed: false, optional: true, required: false
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

  // signing_alg - computed: true, optional: true, required: false
  private _signingAlg?: string; 
  public get signingAlg() {
    return this.getStringAttribute('signing_alg');
  }
  public set signingAlg(value: string) {
    this._signingAlg = value;
  }
  public resetSigningAlg() {
    this._signingAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgInput() {
    return this._signingAlg;
  }

  // signing_secret - computed: true, optional: true, required: false
  private _signingSecret?: string; 
  public get signingSecret() {
    return this.getStringAttribute('signing_secret');
  }
  public set signingSecret(value: string) {
    this._signingSecret = value;
  }
  public resetSigningSecret() {
    this._signingSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingSecretInput() {
    return this._signingSecret;
  }

  // skip_consent_for_verifiable_first_party_clients - computed: true, optional: true, required: false
  private _skipConsentForVerifiableFirstPartyClients?: boolean | cdktf.IResolvable; 
  public get skipConsentForVerifiableFirstPartyClients() {
    return this.getBooleanAttribute('skip_consent_for_verifiable_first_party_clients');
  }
  public set skipConsentForVerifiableFirstPartyClients(value: boolean | cdktf.IResolvable) {
    this._skipConsentForVerifiableFirstPartyClients = value;
  }
  public resetSkipConsentForVerifiableFirstPartyClients() {
    this._skipConsentForVerifiableFirstPartyClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConsentForVerifiableFirstPartyClientsInput() {
    return this._skipConsentForVerifiableFirstPartyClients;
  }

  // token_dialect - computed: true, optional: true, required: false
  private _tokenDialect?: string; 
  public get tokenDialect() {
    return this.getStringAttribute('token_dialect');
  }
  public set tokenDialect(value: string) {
    this._tokenDialect = value;
  }
  public resetTokenDialect() {
    this._tokenDialect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDialectInput() {
    return this._tokenDialect;
  }

  // token_lifetime - computed: true, optional: true, required: false
  private _tokenLifetime?: number; 
  public get tokenLifetime() {
    return this.getNumberAttribute('token_lifetime');
  }
  public set tokenLifetime(value: number) {
    this._tokenLifetime = value;
  }
  public resetTokenLifetime() {
    this._tokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeInput() {
    return this._tokenLifetime;
  }

  // token_lifetime_for_web - computed: true, optional: true, required: false
  private _tokenLifetimeForWeb?: number; 
  public get tokenLifetimeForWeb() {
    return this.getNumberAttribute('token_lifetime_for_web');
  }
  public set tokenLifetimeForWeb(value: number) {
    this._tokenLifetimeForWeb = value;
  }
  public resetTokenLifetimeForWeb() {
    this._tokenLifetimeForWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeForWebInput() {
    return this._tokenLifetimeForWeb;
  }

  // verification_location - computed: false, optional: true, required: false
  private _verificationLocation?: string; 
  public get verificationLocation() {
    return this.getStringAttribute('verification_location');
  }
  public set verificationLocation(value: string) {
    this._verificationLocation = value;
  }
  public resetVerificationLocation() {
    this._verificationLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationLocationInput() {
    return this._verificationLocation;
  }

  // authorization_details - computed: false, optional: true, required: false
  private _authorizationDetails = new ResourceServerAuthorizationDetailsList(this, "authorization_details", false);
  public get authorizationDetails() {
    return this._authorizationDetails;
  }
  public putAuthorizationDetails(value: ResourceServerAuthorizationDetails[] | cdktf.IResolvable) {
    this._authorizationDetails.internalValue = value;
  }
  public resetAuthorizationDetails() {
    this._authorizationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationDetailsInput() {
    return this._authorizationDetails.internalValue;
  }

  // proof_of_possession - computed: false, optional: true, required: false
  private _proofOfPossession = new ResourceServerProofOfPossessionOutputReference(this, "proof_of_possession");
  public get proofOfPossession() {
    return this._proofOfPossession;
  }
  public putProofOfPossession(value: ResourceServerProofOfPossession) {
    this._proofOfPossession.internalValue = value;
  }
  public resetProofOfPossession() {
    this._proofOfPossession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofOfPossessionInput() {
    return this._proofOfPossession.internalValue;
  }

  // subject_type_authorization - computed: false, optional: true, required: false
  private _subjectTypeAuthorization = new ResourceServerSubjectTypeAuthorizationOutputReference(this, "subject_type_authorization");
  public get subjectTypeAuthorization() {
    return this._subjectTypeAuthorization;
  }
  public putSubjectTypeAuthorization(value: ResourceServerSubjectTypeAuthorization) {
    this._subjectTypeAuthorization.internalValue = value;
  }
  public resetSubjectTypeAuthorization() {
    this._subjectTypeAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeAuthorizationInput() {
    return this._subjectTypeAuthorization.internalValue;
  }

  // token_encryption - computed: false, optional: true, required: false
  private _tokenEncryption = new ResourceServerTokenEncryptionOutputReference(this, "token_encryption");
  public get tokenEncryption() {
    return this._tokenEncryption;
  }
  public putTokenEncryption(value: ResourceServerTokenEncryption) {
    this._tokenEncryption.internalValue = value;
  }
  public resetTokenEncryption() {
    this._tokenEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEncryptionInput() {
    return this._tokenEncryption.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_offline_access: cdktf.booleanToTerraform(this._allowOfflineAccess),
      consent_policy: cdktf.stringToTerraform(this._consentPolicy),
      enforce_policies: cdktf.booleanToTerraform(this._enforcePolicies),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      signing_alg: cdktf.stringToTerraform(this._signingAlg),
      signing_secret: cdktf.stringToTerraform(this._signingSecret),
      skip_consent_for_verifiable_first_party_clients: cdktf.booleanToTerraform(this._skipConsentForVerifiableFirstPartyClients),
      token_dialect: cdktf.stringToTerraform(this._tokenDialect),
      token_lifetime: cdktf.numberToTerraform(this._tokenLifetime),
      token_lifetime_for_web: cdktf.numberToTerraform(this._tokenLifetimeForWeb),
      verification_location: cdktf.stringToTerraform(this._verificationLocation),
      authorization_details: cdktf.listMapper(resourceServerAuthorizationDetailsToTerraform, true)(this._authorizationDetails.internalValue),
      proof_of_possession: resourceServerProofOfPossessionToTerraform(this._proofOfPossession.internalValue),
      subject_type_authorization: resourceServerSubjectTypeAuthorizationToTerraform(this._subjectTypeAuthorization.internalValue),
      token_encryption: resourceServerTokenEncryptionToTerraform(this._tokenEncryption.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_offline_access: {
        value: cdktf.booleanToHclTerraform(this._allowOfflineAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consent_policy: {
        value: cdktf.stringToHclTerraform(this._consentPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_policies: {
        value: cdktf.booleanToHclTerraform(this._enforcePolicies),
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
      signing_alg: {
        value: cdktf.stringToHclTerraform(this._signingAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_secret: {
        value: cdktf.stringToHclTerraform(this._signingSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_consent_for_verifiable_first_party_clients: {
        value: cdktf.booleanToHclTerraform(this._skipConsentForVerifiableFirstPartyClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_dialect: {
        value: cdktf.stringToHclTerraform(this._tokenDialect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_lifetime: {
        value: cdktf.numberToHclTerraform(this._tokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_lifetime_for_web: {
        value: cdktf.numberToHclTerraform(this._tokenLifetimeForWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verification_location: {
        value: cdktf.stringToHclTerraform(this._verificationLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_details: {
        value: cdktf.listMapperHcl(resourceServerAuthorizationDetailsToHclTerraform, true)(this._authorizationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceServerAuthorizationDetailsList",
      },
      proof_of_possession: {
        value: resourceServerProofOfPossessionToHclTerraform(this._proofOfPossession.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceServerProofOfPossessionList",
      },
      subject_type_authorization: {
        value: resourceServerSubjectTypeAuthorizationToHclTerraform(this._subjectTypeAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceServerSubjectTypeAuthorizationList",
      },
      token_encryption: {
        value: resourceServerTokenEncryptionToHclTerraform(this._tokenEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceServerTokenEncryptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
