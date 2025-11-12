// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JwtIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The intended audience for consuming the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer#audience JwtIssuer#audience}
  */
  readonly audience: string;
  /**
  * Used to identify the user from the external Identity Provider. Defaults to "sub".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer#claim JwtIssuer#claim}
  */
  readonly claim?: string;
  /**
  * A list of mappings to map the external token identity into CockroachDB Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer#identity_map JwtIssuer#identity_map}
  */
  readonly identityMap?: JwtIssuerIdentityMap[] | cdktf.IResolvable;
  /**
  * The URL of the server issuing JWTs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer#issuer_url JwtIssuer#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * A set of public keys (JWKS) used to verify the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer#jwks JwtIssuer#jwks}
  */
  readonly jwks?: string;
}
export interface JwtIssuerIdentityMap {
  /**
  * Specifies how to map the fetched token identity to an identity in CockroachDB Cloud. In case of a regular expression for token_identity, this must contain a \1 placeholder for the matched content. Note that you will need to escape the backslash in the string as in the example usage (\\\1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer#cc_identity JwtIssuer#cc_identity}
  */
  readonly ccIdentity: string;
  /**
  * Specifies how to fetch external identity from the token claim. A regular expression must start with a forward slash. The regular expression must be in RE2 compatible syntax. For further details, please see https://github.com/google/re2/wiki/Syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer#token_identity JwtIssuer#token_identity}
  */
  readonly tokenIdentity: string;
}

export function jwtIssuerIdentityMapToTerraform(struct?: JwtIssuerIdentityMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cc_identity: cdktf.stringToTerraform(struct!.ccIdentity),
    token_identity: cdktf.stringToTerraform(struct!.tokenIdentity),
  }
}


export function jwtIssuerIdentityMapToHclTerraform(struct?: JwtIssuerIdentityMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cc_identity: {
      value: cdktf.stringToHclTerraform(struct!.ccIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_identity: {
      value: cdktf.stringToHclTerraform(struct!.tokenIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JwtIssuerIdentityMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JwtIssuerIdentityMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ccIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccIdentity = this._ccIdentity;
    }
    if (this._tokenIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenIdentity = this._tokenIdentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JwtIssuerIdentityMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ccIdentity = undefined;
      this._tokenIdentity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ccIdentity = value.ccIdentity;
      this._tokenIdentity = value.tokenIdentity;
    }
  }

  // cc_identity - computed: false, optional: false, required: true
  private _ccIdentity?: string; 
  public get ccIdentity() {
    return this.getStringAttribute('cc_identity');
  }
  public set ccIdentity(value: string) {
    this._ccIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ccIdentityInput() {
    return this._ccIdentity;
  }

  // token_identity - computed: false, optional: false, required: true
  private _tokenIdentity?: string; 
  public get tokenIdentity() {
    return this.getStringAttribute('token_identity');
  }
  public set tokenIdentity(value: string) {
    this._tokenIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdentityInput() {
    return this._tokenIdentity;
  }
}

export class JwtIssuerIdentityMapList extends cdktf.ComplexList {
  public internalValue? : JwtIssuerIdentityMap[] | cdktf.IResolvable

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
  public get(index: number): JwtIssuerIdentityMapOutputReference {
    return new JwtIssuerIdentityMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer cockroach_jwt_issuer}
*/
export class JwtIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_jwt_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JwtIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JwtIssuer to import
  * @param importFromId The id of the existing JwtIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JwtIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_jwt_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/jwt_issuer cockroach_jwt_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JwtIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: JwtIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_jwt_issuer',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0',
        providerVersionConstraint: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audience = config.audience;
    this._claim = config.claim;
    this._identityMap.internalValue = config.identityMap;
    this._issuerUrl = config.issuerUrl;
    this._jwks = config.jwks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_map - computed: false, optional: true, required: false
  private _identityMap = new JwtIssuerIdentityMapList(this, "identity_map", false);
  public get identityMap() {
    return this._identityMap;
  }
  public putIdentityMap(value: JwtIssuerIdentityMap[] | cdktf.IResolvable) {
    this._identityMap.internalValue = value;
  }
  public resetIdentityMap() {
    this._identityMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityMapInput() {
    return this._identityMap.internalValue;
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

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audience: cdktf.stringToTerraform(this._audience),
      claim: cdktf.stringToTerraform(this._claim),
      identity_map: cdktf.listMapper(jwtIssuerIdentityMapToTerraform, false)(this._identityMap.internalValue),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      jwks: cdktf.stringToTerraform(this._jwks),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      claim: {
        value: cdktf.stringToHclTerraform(this._claim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_map: {
        value: cdktf.listMapperHcl(jwtIssuerIdentityMapToHclTerraform, false)(this._identityMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JwtIssuerIdentityMapList",
      },
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks: {
        value: cdktf.stringToHclTerraform(this._jwks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
