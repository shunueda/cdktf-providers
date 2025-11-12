// https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TokenIntrospectConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClaimsMapping specifies which claims from the token should be mapped to new names and name of property in IKG.
  *     Be aware, that this can override any existing claims, which might not be accessible anymore by internal services.
  *     And with the highest priority, there is mapping of sub claim to 'external_id'. So you shouldn't ever use 'external_id' as a key.
  * 
  *     Key specifies the new name and also the name of the property in IKG.
  *     Value specifies which claim to map and how.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#claims_mapping TokenIntrospect#claims_mapping}
  */
  readonly claimsMapping?: { [key: string]: string };
  /**
  * Your own description of the resource. Must be less than or equal to 256 UTF-8 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#description TokenIntrospect#description}
  */
  readonly description?: string;
  /**
  * The display name for the instance. Can be updated without creating a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#display_name TokenIntrospect#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#id TokenIntrospect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Node type in IKG to which we will try to match sub claim with DT external_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#ikg_node_type TokenIntrospect#ikg_node_type}
  */
  readonly ikgNodeType: string;
  /**
  * Identifier of Location, where to create resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#location TokenIntrospect#location}
  */
  readonly location: string;
  /**
  * Unique client assigned immutable identifier. Can not be updated without creating a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#name TokenIntrospect#name}
  */
  readonly name: string;
  /**
  * Perform Upsert specify, if we should create and/or update DigitalTwin in IKG if it doesn't exist with.
  * 	In future this will perform upsert also on properties that are derived from token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#perform_upsert TokenIntrospect#perform_upsert}
  */
  readonly performUpsert?: boolean | cdktf.IResolvable;
  /**
  * Sub claim is used to match DigitalTwin with external_id. If not specified, standard 'sub' claim will be used. Either 'sub' or specified claim will then also be mapped to 'external_id' claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#sub_claim TokenIntrospect#sub_claim}
  */
  readonly subClaim?: string;
  /**
  * jwt_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#jwt_matcher TokenIntrospect#jwt_matcher}
  */
  readonly jwtMatcher?: TokenIntrospectJwtMatcher;
  /**
  * offline_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#offline_validation TokenIntrospect#offline_validation}
  */
  readonly offlineValidation?: TokenIntrospectOfflineValidation;
  /**
  * online_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#online_validation TokenIntrospect#online_validation}
  */
  readonly onlineValidation?: TokenIntrospectOnlineValidation;
  /**
  * opaque_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#opaque_matcher TokenIntrospect#opaque_matcher}
  */
  readonly opaqueMatcher?: TokenIntrospectOpaqueMatcher;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#timeouts TokenIntrospect#timeouts}
  */
  readonly timeouts?: TokenIntrospectTimeouts;
}
export interface TokenIntrospectJwtMatcher {
  /**
  * Audience is used to exact match based on `aud` claim in JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#audience TokenIntrospect#audience}
  */
  readonly audience: string;
  /**
  * Issuer is used to exact match based on `iss` claim in JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#issuer TokenIntrospect#issuer}
  */
  readonly issuer: string;
}

export function tokenIntrospectJwtMatcherToTerraform(struct?: TokenIntrospectJwtMatcherOutputReference | TokenIntrospectJwtMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function tokenIntrospectJwtMatcherToHclTerraform(struct?: TokenIntrospectJwtMatcherOutputReference | TokenIntrospectJwtMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenIntrospectJwtMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TokenIntrospectJwtMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenIntrospectJwtMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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
}
export interface TokenIntrospectOfflineValidation {
  /**
  * Public JWKs to validate signature of JWT. If there are no public keys specified, they will be fetched and cached from jwks_uri at https://jwt-issuer.tld/.well-known/openid-configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#public_jwks TokenIntrospect#public_jwks}
  */
  readonly publicJwks?: string[];
}

export function tokenIntrospectOfflineValidationToTerraform(struct?: TokenIntrospectOfflineValidationOutputReference | TokenIntrospectOfflineValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_jwks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicJwks),
  }
}


export function tokenIntrospectOfflineValidationToHclTerraform(struct?: TokenIntrospectOfflineValidationOutputReference | TokenIntrospectOfflineValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_jwks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicJwks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenIntrospectOfflineValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TokenIntrospectOfflineValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicJwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicJwks = this._publicJwks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenIntrospectOfflineValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicJwks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicJwks = value.publicJwks;
    }
  }

  // public_jwks - computed: false, optional: true, required: false
  private _publicJwks?: string[]; 
  public get publicJwks() {
    return this.getListAttribute('public_jwks');
  }
  public set publicJwks(value: string[]) {
    this._publicJwks = value;
  }
  public resetPublicJwks() {
    this._publicJwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicJwksInput() {
    return this._publicJwks;
  }
}
export interface TokenIntrospectOnlineValidation {
  /**
  * Cache TTL of token validity can be used to minimize calls to userinfo endpoint.
  *     The final cache TTL will be set to lower limit of this value and exp claim of JWT token.
  *     If not set, token will not be cached and call to userinfo endpoint will be made on every request.
  * 
  *     However, token validity will be checked first if possible (JWT tokens).
  *     If token is expired, userinfo endpoint will not be called, nor cache checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#cache_ttl TokenIntrospect#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * URI of userinfo endpoint which will be used to validate access token.
  *     And also fetch user claims when opaque token is received
  * 
  *     It can remain empty, if JWT token matcher is used.
  *     Then the URI under "userinfo_endpoint" in .well-known/openid-configuration endpoint is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#user_info_endpoint TokenIntrospect#user_info_endpoint}
  */
  readonly userInfoEndpoint?: string;
}

export function tokenIntrospectOnlineValidationToTerraform(struct?: TokenIntrospectOnlineValidationOutputReference | TokenIntrospectOnlineValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
  }
}


export function tokenIntrospectOnlineValidationToHclTerraform(struct?: TokenIntrospectOnlineValidationOutputReference | TokenIntrospectOnlineValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_info_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.userInfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenIntrospectOnlineValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TokenIntrospectOnlineValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._userInfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenIntrospectOnlineValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTtl = undefined;
      this._userInfoEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTtl = value.cacheTtl;
      this._userInfoEndpoint = value.userInfoEndpoint;
    }
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // user_info_endpoint - computed: false, optional: true, required: false
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  public resetUserInfoEndpoint() {
    this._userInfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint;
  }
}
export interface TokenIntrospectOpaqueMatcher {
  /**
  * To differentiate between multiple opaque tokens configurations, hint must be provided. Hint is case sensitive plain text, that is expected to be provided in token introspect request, if there are multiple opaque tokens configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#hint TokenIntrospect#hint}
  */
  readonly hint: string;
}

export function tokenIntrospectOpaqueMatcherToTerraform(struct?: TokenIntrospectOpaqueMatcherOutputReference | TokenIntrospectOpaqueMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hint: cdktf.stringToTerraform(struct!.hint),
  }
}


export function tokenIntrospectOpaqueMatcherToHclTerraform(struct?: TokenIntrospectOpaqueMatcherOutputReference | TokenIntrospectOpaqueMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hint: {
      value: cdktf.stringToHclTerraform(struct!.hint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TokenIntrospectOpaqueMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TokenIntrospectOpaqueMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hint !== undefined) {
      hasAnyValues = true;
      internalValueResult.hint = this._hint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TokenIntrospectOpaqueMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hint = value.hint;
    }
  }

  // hint - computed: false, optional: false, required: true
  private _hint?: string; 
  public get hint() {
    return this.getStringAttribute('hint');
  }
  public set hint(value: string) {
    this._hint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hintInput() {
    return this._hint;
  }
}
export interface TokenIntrospectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#create TokenIntrospect#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#default TokenIntrospect#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#delete TokenIntrospect#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#read TokenIntrospect#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#update TokenIntrospect#update}
  */
  readonly update?: string;
}

export function tokenIntrospectTimeoutsToTerraform(struct?: TokenIntrospectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function tokenIntrospectTimeoutsToHclTerraform(struct?: TokenIntrospectTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class TokenIntrospectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TokenIntrospectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
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

  public set internalValue(value: TokenIntrospectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
* Represents a {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect indykite_token_introspect}
*/
export class TokenIntrospect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "indykite_token_introspect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TokenIntrospect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TokenIntrospect to import
  * @param importFromId The id of the existing TokenIntrospect that should be imported. Refer to the {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TokenIntrospect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "indykite_token_introspect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/indykite/indykite/0.27.0/docs/resources/token_introspect indykite_token_introspect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenIntrospectConfig
  */
  public constructor(scope: Construct, id: string, config: TokenIntrospectConfig) {
    super(scope, id, {
      terraformResourceType: 'indykite_token_introspect',
      terraformGeneratorMetadata: {
        providerName: 'indykite',
        providerVersion: '0.27.0',
        providerVersionConstraint: '0.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claimsMapping = config.claimsMapping;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ikgNodeType = config.ikgNodeType;
    this._location = config.location;
    this._name = config.name;
    this._performUpsert = config.performUpsert;
    this._subClaim = config.subClaim;
    this._jwtMatcher.internalValue = config.jwtMatcher;
    this._offlineValidation.internalValue = config.offlineValidation;
    this._onlineValidation.internalValue = config.onlineValidation;
    this._opaqueMatcher.internalValue = config.opaqueMatcher;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_space_id - computed: true, optional: false, required: false
  public get appSpaceId() {
    return this.getStringAttribute('app_space_id');
  }

  // claims_mapping - computed: false, optional: true, required: false
  private _claimsMapping?: { [key: string]: string }; 
  public get claimsMapping() {
    return this.getStringMapAttribute('claims_mapping');
  }
  public set claimsMapping(value: { [key: string]: string }) {
    this._claimsMapping = value;
  }
  public resetClaimsMapping() {
    this._claimsMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsMappingInput() {
    return this._claimsMapping;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // ikg_node_type - computed: false, optional: false, required: true
  private _ikgNodeType?: string; 
  public get ikgNodeType() {
    return this.getStringAttribute('ikg_node_type');
  }
  public set ikgNodeType(value: string) {
    this._ikgNodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikgNodeTypeInput() {
    return this._ikgNodeType;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // perform_upsert - computed: false, optional: true, required: false
  private _performUpsert?: boolean | cdktf.IResolvable; 
  public get performUpsert() {
    return this.getBooleanAttribute('perform_upsert');
  }
  public set performUpsert(value: boolean | cdktf.IResolvable) {
    this._performUpsert = value;
  }
  public resetPerformUpsert() {
    this._performUpsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performUpsertInput() {
    return this._performUpsert;
  }

  // sub_claim - computed: false, optional: true, required: false
  private _subClaim?: string; 
  public get subClaim() {
    return this.getStringAttribute('sub_claim');
  }
  public set subClaim(value: string) {
    this._subClaim = value;
  }
  public resetSubClaim() {
    this._subClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subClaimInput() {
    return this._subClaim;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // jwt_matcher - computed: false, optional: true, required: false
  private _jwtMatcher = new TokenIntrospectJwtMatcherOutputReference(this, "jwt_matcher");
  public get jwtMatcher() {
    return this._jwtMatcher;
  }
  public putJwtMatcher(value: TokenIntrospectJwtMatcher) {
    this._jwtMatcher.internalValue = value;
  }
  public resetJwtMatcher() {
    this._jwtMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtMatcherInput() {
    return this._jwtMatcher.internalValue;
  }

  // offline_validation - computed: false, optional: true, required: false
  private _offlineValidation = new TokenIntrospectOfflineValidationOutputReference(this, "offline_validation");
  public get offlineValidation() {
    return this._offlineValidation;
  }
  public putOfflineValidation(value: TokenIntrospectOfflineValidation) {
    this._offlineValidation.internalValue = value;
  }
  public resetOfflineValidation() {
    this._offlineValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineValidationInput() {
    return this._offlineValidation.internalValue;
  }

  // online_validation - computed: false, optional: true, required: false
  private _onlineValidation = new TokenIntrospectOnlineValidationOutputReference(this, "online_validation");
  public get onlineValidation() {
    return this._onlineValidation;
  }
  public putOnlineValidation(value: TokenIntrospectOnlineValidation) {
    this._onlineValidation.internalValue = value;
  }
  public resetOnlineValidation() {
    this._onlineValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineValidationInput() {
    return this._onlineValidation.internalValue;
  }

  // opaque_matcher - computed: false, optional: true, required: false
  private _opaqueMatcher = new TokenIntrospectOpaqueMatcherOutputReference(this, "opaque_matcher");
  public get opaqueMatcher() {
    return this._opaqueMatcher;
  }
  public putOpaqueMatcher(value: TokenIntrospectOpaqueMatcher) {
    this._opaqueMatcher.internalValue = value;
  }
  public resetOpaqueMatcher() {
    this._opaqueMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueMatcherInput() {
    return this._opaqueMatcher.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TokenIntrospectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TokenIntrospectTimeouts) {
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
      claims_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._claimsMapping),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ikg_node_type: cdktf.stringToTerraform(this._ikgNodeType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      perform_upsert: cdktf.booleanToTerraform(this._performUpsert),
      sub_claim: cdktf.stringToTerraform(this._subClaim),
      jwt_matcher: tokenIntrospectJwtMatcherToTerraform(this._jwtMatcher.internalValue),
      offline_validation: tokenIntrospectOfflineValidationToTerraform(this._offlineValidation.internalValue),
      online_validation: tokenIntrospectOnlineValidationToTerraform(this._onlineValidation.internalValue),
      opaque_matcher: tokenIntrospectOpaqueMatcherToTerraform(this._opaqueMatcher.internalValue),
      timeouts: tokenIntrospectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claims_mapping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._claimsMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      ikg_node_type: {
        value: cdktf.stringToHclTerraform(this._ikgNodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      perform_upsert: {
        value: cdktf.booleanToHclTerraform(this._performUpsert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sub_claim: {
        value: cdktf.stringToHclTerraform(this._subClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_matcher: {
        value: tokenIntrospectJwtMatcherToHclTerraform(this._jwtMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TokenIntrospectJwtMatcherList",
      },
      offline_validation: {
        value: tokenIntrospectOfflineValidationToHclTerraform(this._offlineValidation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TokenIntrospectOfflineValidationList",
      },
      online_validation: {
        value: tokenIntrospectOnlineValidationToHclTerraform(this._onlineValidation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TokenIntrospectOnlineValidationList",
      },
      opaque_matcher: {
        value: tokenIntrospectOpaqueMatcherToHclTerraform(this._opaqueMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TokenIntrospectOpaqueMatcherList",
      },
      timeouts: {
        value: tokenIntrospectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TokenIntrospectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
