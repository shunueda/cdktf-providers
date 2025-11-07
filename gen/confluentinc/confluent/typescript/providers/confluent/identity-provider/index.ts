// https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider#description IdentityProvider#description}
  */
  readonly description: string;
  /**
  * A name for the Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider#display_name IdentityProvider#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider#id IdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A JWT claim to extract the authenticating identity to Confluent resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider#identity_claim IdentityProvider#identity_claim}
  */
  readonly identityClaim?: string;
  /**
  * A publicly reachable issuer URI for the Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider#issuer IdentityProvider#issuer}
  */
  readonly issuer: string;
  /**
  * A publicly reachable JWKS URI for the Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider#jwks_uri IdentityProvider#jwks_uri}
  */
  readonly jwksUri: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider confluent_identity_provider}
*/
export class IdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProvider to import
  * @param importFromId The id of the existing IdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/resources/identity_provider confluent_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.51.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._identityClaim = config.identityClaim;
    this._issuer = config.issuer;
    this._jwksUri = config.jwksUri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // identity_claim - computed: true, optional: true, required: false
  private _identityClaim?: string; 
  public get identityClaim() {
    return this.getStringAttribute('identity_claim');
  }
  public set identityClaim(value: string) {
    this._identityClaim = value;
  }
  public resetIdentityClaim() {
    this._identityClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityClaimInput() {
    return this._identityClaim;
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

  // jwks_uri - computed: false, optional: false, required: true
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      identity_claim: cdktf.stringToTerraform(this._identityClaim),
      issuer: cdktf.stringToTerraform(this._issuer),
      jwks_uri: cdktf.stringToTerraform(this._jwksUri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      identity_claim: {
        value: cdktf.stringToHclTerraform(this._identityClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
