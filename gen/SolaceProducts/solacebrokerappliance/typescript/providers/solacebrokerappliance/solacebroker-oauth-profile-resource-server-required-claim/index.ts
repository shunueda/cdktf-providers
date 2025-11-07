// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_resource_server_required_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerOauthProfileResourceServerRequiredClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the OAuth profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_resource_server_required_claim#oauth_profile_name SolacebrokerOauthProfileResourceServerRequiredClaim#oauth_profile_name}
  */
  readonly oauthProfileName: string;
  /**
  * The name of the access token claim to verify.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_resource_server_required_claim#resource_server_required_claim_name SolacebrokerOauthProfileResourceServerRequiredClaim#resource_server_required_claim_name}
  */
  readonly resourceServerRequiredClaimName: string;
  /**
  * The required claim value, which must be a string containing a valid JSON value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". Note that this attribute requires replacement of the resource when updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_resource_server_required_claim#resource_server_required_claim_value SolacebrokerOauthProfileResourceServerRequiredClaim#resource_server_required_claim_value}
  */
  readonly resourceServerRequiredClaimValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_resource_server_required_claim solacebroker_oauth_profile_resource_server_required_claim}
*/
export class SolacebrokerOauthProfileResourceServerRequiredClaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_oauth_profile_resource_server_required_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerOauthProfileResourceServerRequiredClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerOauthProfileResourceServerRequiredClaim to import
  * @param importFromId The id of the existing SolacebrokerOauthProfileResourceServerRequiredClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_resource_server_required_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerOauthProfileResourceServerRequiredClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_oauth_profile_resource_server_required_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_oauth_profile_resource_server_required_claim solacebroker_oauth_profile_resource_server_required_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerOauthProfileResourceServerRequiredClaimConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerOauthProfileResourceServerRequiredClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_oauth_profile_resource_server_required_claim',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._oauthProfileName = config.oauthProfileName;
    this._resourceServerRequiredClaimName = config.resourceServerRequiredClaimName;
    this._resourceServerRequiredClaimValue = config.resourceServerRequiredClaimValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // oauth_profile_name - computed: false, optional: false, required: true
  private _oauthProfileName?: string; 
  public get oauthProfileName() {
    return this.getStringAttribute('oauth_profile_name');
  }
  public set oauthProfileName(value: string) {
    this._oauthProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileNameInput() {
    return this._oauthProfileName;
  }

  // resource_server_required_claim_name - computed: false, optional: false, required: true
  private _resourceServerRequiredClaimName?: string; 
  public get resourceServerRequiredClaimName() {
    return this.getStringAttribute('resource_server_required_claim_name');
  }
  public set resourceServerRequiredClaimName(value: string) {
    this._resourceServerRequiredClaimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerRequiredClaimNameInput() {
    return this._resourceServerRequiredClaimName;
  }

  // resource_server_required_claim_value - computed: false, optional: false, required: true
  private _resourceServerRequiredClaimValue?: string; 
  public get resourceServerRequiredClaimValue() {
    return this.getStringAttribute('resource_server_required_claim_value');
  }
  public set resourceServerRequiredClaimValue(value: string) {
    this._resourceServerRequiredClaimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerRequiredClaimValueInput() {
    return this._resourceServerRequiredClaimValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      oauth_profile_name: cdktf.stringToTerraform(this._oauthProfileName),
      resource_server_required_claim_name: cdktf.stringToTerraform(this._resourceServerRequiredClaimName),
      resource_server_required_claim_value: cdktf.stringToTerraform(this._resourceServerRequiredClaimValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oauth_profile_name: {
        value: cdktf.stringToHclTerraform(this._oauthProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_required_claim_name: {
        value: cdktf.stringToHclTerraform(this._resourceServerRequiredClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_required_claim_value: {
        value: cdktf.stringToHclTerraform(this._resourceServerRequiredClaimValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
