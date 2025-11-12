// https://registry.terraform.io/providers/camptocamp/jwt/1.1.2/docs/resources/hashed_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HashedTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Signing algorithm to use. Defaults to `HS512`. Supported algorithms are `HS256`, `HS384`, `HS512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/jwt/1.1.2/docs/resources/hashed_token#algorithm HashedToken#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The token's claims, as a JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/jwt/1.1.2/docs/resources/hashed_token#claims_json HashedToken#claims_json}
  */
  readonly claimsJson: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/jwt/1.1.2/docs/resources/hashed_token#id HashedToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * HMAC secret to sign the JWT with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/jwt/1.1.2/docs/resources/hashed_token#secret HashedToken#secret}
  */
  readonly secret: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/jwt/1.1.2/docs/resources/hashed_token jwt_hashed_token}
*/
export class HashedToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jwt_hashed_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HashedToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HashedToken to import
  * @param importFromId The id of the existing HashedToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/jwt/1.1.2/docs/resources/hashed_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HashedToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jwt_hashed_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/jwt/1.1.2/docs/resources/hashed_token jwt_hashed_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HashedTokenConfig
  */
  public constructor(scope: Construct, id: string, config: HashedTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'jwt_hashed_token',
      terraformGeneratorMetadata: {
        providerName: 'jwt',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._claimsJson = config.claimsJson;
    this._id = config.id;
    this._secret = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // claims_json - computed: false, optional: false, required: true
  private _claimsJson?: string; 
  public get claimsJson() {
    return this.getStringAttribute('claims_json');
  }
  public set claimsJson(value: string) {
    this._claimsJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsJsonInput() {
    return this._claimsJson;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      claims_json: cdktf.stringToTerraform(this._claimsJson),
      id: cdktf.stringToTerraform(this._id),
      secret: cdktf.stringToTerraform(this._secret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      claims_json: {
        value: cdktf.stringToHclTerraform(this._claimsJson),
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
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
