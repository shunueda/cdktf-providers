// https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SymProviderConfig {
  /**
  * Environment variable storing your Sym Bot Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs#jwt_env_var SymProvider#jwt_env_var}
  */
  readonly jwtEnvVar?: string;
  /**
  * Your Sym Org ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs#org SymProvider#org}
  */
  readonly org: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs#alias SymProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs sym}
*/
export class SymProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sym";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SymProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SymProvider to import
  * @param importFromId The id of the existing SymProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SymProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sym", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs sym} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SymProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SymProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'sym',
      terraformGeneratorMetadata: {
        providerName: 'sym',
        providerVersion: '3.6.0'
      },
      terraformProviderSource: 'symopsio/sym'
    });
    this._jwtEnvVar = config.jwtEnvVar;
    this._org = config.org;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // jwt_env_var - computed: false, optional: true, required: false
  private _jwtEnvVar?: string; 
  public get jwtEnvVar() {
    return this._jwtEnvVar;
  }
  public set jwtEnvVar(value: string | undefined) {
    this._jwtEnvVar = value;
  }
  public resetJwtEnvVar() {
    this._jwtEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtEnvVarInput() {
    return this._jwtEnvVar;
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this._org;
  }
  public set org(value: string | undefined) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jwt_env_var: cdktf.stringToTerraform(this._jwtEnvVar),
      org: cdktf.stringToTerraform(this._org),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jwt_env_var: {
        value: cdktf.stringToHclTerraform(this._jwtEnvVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
