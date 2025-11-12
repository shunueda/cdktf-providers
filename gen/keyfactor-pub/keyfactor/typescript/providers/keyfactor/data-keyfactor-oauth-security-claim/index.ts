// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/oauth_security_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyfactorOauthSecurityClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string containing the claim type of the OAuth security claim in Keyfactor. For allowed possible values, please refer to the `Claim Type String` values in ClaimType table in the [Command REST API documentation](https://software.keyfactor.com/Core-OnPrem/Current/Content/WebAPI/KeyfactorAPI/SecurityClaimsPOST.htm).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/oauth_security_claim#claim_type DataKeyfactorOauthSecurityClaim#claim_type}
  */
  readonly claimType: string;
  /**
  * A string containing the claim value of the OAuth security claim in Keyfactor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/oauth_security_claim#claim_value DataKeyfactorOauthSecurityClaim#claim_value}
  */
  readonly claimValue: string;
  /**
  * The identity provider associated with the OAuth security claim. Used only for resource creation. Not returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/oauth_security_claim#provider_authentication_scheme DataKeyfactorOauthSecurityClaim#provider_authentication_scheme}
  */
  readonly providerAuthenticationScheme: string;
}
export interface DataKeyfactorOauthSecurityClaimProvider {
}

export function dataKeyfactorOauthSecurityClaimProviderToTerraform(struct?: DataKeyfactorOauthSecurityClaimProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeyfactorOauthSecurityClaimProviderToHclTerraform(struct?: DataKeyfactorOauthSecurityClaimProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeyfactorOauthSecurityClaimProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeyfactorOauthSecurityClaimProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeyfactorOauthSecurityClaimProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_scheme - computed: true, optional: false, required: false
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/oauth_security_claim keyfactor_oauth_security_claim}
*/
export class DataKeyfactorOauthSecurityClaim extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_oauth_security_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyfactorOauthSecurityClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyfactorOauthSecurityClaim to import
  * @param importFromId The id of the existing DataKeyfactorOauthSecurityClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/oauth_security_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyfactorOauthSecurityClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_oauth_security_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/data-sources/oauth_security_claim keyfactor_oauth_security_claim} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyfactorOauthSecurityClaimConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyfactorOauthSecurityClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_oauth_security_claim',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claimType = config.claimType;
    this._claimValue = config.claimValue;
    this._providerAuthenticationScheme = config.providerAuthenticationScheme;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claim_type - computed: false, optional: false, required: true
  private _claimType?: string; 
  public get claimType() {
    return this.getStringAttribute('claim_type');
  }
  public set claimType(value: string) {
    this._claimType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimTypeInput() {
    return this._claimType;
  }

  // claim_value - computed: false, optional: false, required: true
  private _claimValue?: string; 
  public get claimValue() {
    return this.getStringAttribute('claim_value');
  }
  public set claimValue(value: string) {
    this._claimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValueInput() {
    return this._claimValue;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // provider - computed: true, optional: false, required: false
  private _provider = new DataKeyfactorOauthSecurityClaimProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }

  // provider_authentication_scheme - computed: false, optional: false, required: true
  private _providerAuthenticationScheme?: string; 
  public get providerAuthenticationScheme() {
    return this.getStringAttribute('provider_authentication_scheme');
  }
  public set providerAuthenticationScheme(value: string) {
    this._providerAuthenticationScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAuthenticationSchemeInput() {
    return this._providerAuthenticationScheme;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claim_type: cdktf.stringToTerraform(this._claimType),
      claim_value: cdktf.stringToTerraform(this._claimValue),
      provider_authentication_scheme: cdktf.stringToTerraform(this._providerAuthenticationScheme),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claim_type: {
        value: cdktf.stringToHclTerraform(this._claimType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      claim_value: {
        value: cdktf.stringToHclTerraform(this._claimValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._providerAuthenticationScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
