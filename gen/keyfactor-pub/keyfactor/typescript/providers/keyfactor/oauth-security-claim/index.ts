// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/oauth_security_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthSecurityClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string containing the claim type of the OAuth security claim in Keyfactor. Changing this value forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/oauth_security_claim#claim_type OauthSecurityClaim#claim_type}
  */
  readonly claimType: string;
  /**
  * A string containing the claim value of the OAuth security claim in Keyfactor. For implementations authenticated using Active Directory, this will be in NetBIOS format (`DOMAIN\account-name`). For example, group `KEYEXAMPLE\PKI Administrators` or for a computer, machine account `KEYEXAMPLE\MyServer$`. For implementations authenticated using OAuth, this will be in the format defined by the Name Claim Type. Changing this value forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/oauth_security_claim#claim_value OauthSecurityClaim#claim_value}
  */
  readonly claimValue: string;
  /**
  * A string containing the description of the OAuth security claim in Keyfactor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/oauth_security_claim#description OauthSecurityClaim#description}
  */
  readonly description: string;
  /**
  * The authentication scheme of an Identity Provider to associate with the OAuth security claim. Changing this value forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/oauth_security_claim#provider_authentication_scheme OauthSecurityClaim#provider_authentication_scheme}
  */
  readonly providerAuthenticationScheme: string;
}
export interface OauthSecurityClaimProvider {
}

export function oauthSecurityClaimProviderToTerraform(struct?: OauthSecurityClaimProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthSecurityClaimProviderToHclTerraform(struct?: OauthSecurityClaimProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthSecurityClaimProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthSecurityClaimProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthSecurityClaimProvider | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/oauth_security_claim keyfactor_oauth_security_claim}
*/
export class OauthSecurityClaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_oauth_security_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthSecurityClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthSecurityClaim to import
  * @param importFromId The id of the existing OauthSecurityClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/oauth_security_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthSecurityClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_oauth_security_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/resources/oauth_security_claim keyfactor_oauth_security_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthSecurityClaimConfig
  */
  public constructor(scope: Construct, id: string, config: OauthSecurityClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_oauth_security_claim',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.6.0'
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
    this._description = config.description;
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // provider - computed: true, optional: false, required: false
  private _provider = new OauthSecurityClaimProviderOutputReference(this, "provider");
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
      description: cdktf.stringToTerraform(this._description),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
