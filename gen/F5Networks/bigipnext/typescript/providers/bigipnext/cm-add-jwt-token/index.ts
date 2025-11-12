// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_add_jwt_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmAddJwtTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * JWT token to be added on Central Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_add_jwt_token#jwt_token CmAddJwtToken#jwt_token}
  */
  readonly jwtToken: string;
  /**
  * Nickname to be used to add the JWT token on Central Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_add_jwt_token#token_name CmAddJwtToken#token_name}
  */
  readonly tokenName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_add_jwt_token bigipnext_cm_add_jwt_token}
*/
export class CmAddJwtToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_add_jwt_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmAddJwtToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmAddJwtToken to import
  * @param importFromId The id of the existing CmAddJwtToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_add_jwt_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmAddJwtToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_add_jwt_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_add_jwt_token bigipnext_cm_add_jwt_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmAddJwtTokenConfig
  */
  public constructor(scope: Construct, id: string, config: CmAddJwtTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_add_jwt_token',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jwtToken = config.jwtToken;
    this._tokenName = config.tokenName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jwt_token - computed: false, optional: false, required: true
  private _jwtToken?: string; 
  public get jwtToken() {
    return this.getStringAttribute('jwt_token');
  }
  public set jwtToken(value: string) {
    this._jwtToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokenInput() {
    return this._jwtToken;
  }

  // order_type - computed: true, optional: false, required: false
  public get orderType() {
    return this.getStringAttribute('order_type');
  }

  // subscription_expiry - computed: true, optional: false, required: false
  public get subscriptionExpiry() {
    return this.getStringAttribute('subscription_expiry');
  }

  // token_name - computed: false, optional: false, required: true
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jwt_token: cdktf.stringToTerraform(this._jwtToken),
      token_name: cdktf.stringToTerraform(this._tokenName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jwt_token: {
        value: cdktf.stringToHclTerraform(this._jwtToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_name: {
        value: cdktf.stringToHclTerraform(this._tokenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
