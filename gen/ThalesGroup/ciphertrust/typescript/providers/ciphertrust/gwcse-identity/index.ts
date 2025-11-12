// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GwcseIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Issuer claim of the identity provider JSON Web Token (JWT). Either the issuer (and optionally the jwks_url) or the open_id_configuration_url need be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_identity#issuer GwcseIdentity#issuer}
  */
  readonly issuer?: string;
  /**
  * JSON Web Key Set (JWKS) URL for the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_identity#jwks_url GwcseIdentity#jwks_url}
  */
  readonly jwksUrl?: string;
  /**
  * Unique name for the Key Access Control List Service (KACLS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_identity#name GwcseIdentity#name}
  */
  readonly name: string;
  /**
  * Identity provider configuration URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_identity#open_id_configuration_url GwcseIdentity#open_id_configuration_url}
  */
  readonly openIdConfigurationUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_identity ciphertrust_gwcse_identity}
*/
export class GwcseIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_gwcse_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GwcseIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GwcseIdentity to import
  * @param importFromId The id of the existing GwcseIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GwcseIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_gwcse_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_identity ciphertrust_gwcse_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GwcseIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: GwcseIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_gwcse_identity',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._issuer = config.issuer;
    this._jwksUrl = config.jwksUrl;
    this._name = config.name;
    this._openIdConfigurationUrl = config.openIdConfigurationUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_url - computed: true, optional: true, required: false
  private _jwksUrl?: string; 
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
  public set jwksUrl(value: string) {
    this._jwksUrl = value;
  }
  public resetJwksUrl() {
    this._jwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUrlInput() {
    return this._jwksUrl;
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

  // open_id_configuration_url - computed: true, optional: true, required: false
  private _openIdConfigurationUrl?: string; 
  public get openIdConfigurationUrl() {
    return this.getStringAttribute('open_id_configuration_url');
  }
  public set openIdConfigurationUrl(value: string) {
    this._openIdConfigurationUrl = value;
  }
  public resetOpenIdConfigurationUrl() {
    this._openIdConfigurationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConfigurationUrlInput() {
    return this._openIdConfigurationUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      issuer: cdktf.stringToTerraform(this._issuer),
      jwks_url: cdktf.stringToTerraform(this._jwksUrl),
      name: cdktf.stringToTerraform(this._name),
      open_id_configuration_url: cdktf.stringToTerraform(this._openIdConfigurationUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_url: {
        value: cdktf.stringToHclTerraform(this._jwksUrl),
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
      open_id_configuration_url: {
        value: cdktf.stringToHclTerraform(this._openIdConfigurationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
