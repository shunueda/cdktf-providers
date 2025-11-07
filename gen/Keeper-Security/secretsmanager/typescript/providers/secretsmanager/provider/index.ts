// https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsmanagerProviderConfig {
  /**
  * Credential to use for Secrets Manager authentication. Can also be sourced from the `KEEPER_CREDENTIAL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs#credential SecretsmanagerProvider#credential}
  */
  readonly credential?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs#alias SecretsmanagerProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs secretsmanager}
*/
export class SecretsmanagerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secretsmanager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretsmanagerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsmanagerProvider to import
  * @param importFromId The id of the existing SecretsmanagerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsmanagerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secretsmanager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs secretsmanager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsmanagerProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecretsmanagerProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'secretsmanager',
      terraformGeneratorMetadata: {
        providerName: 'secretsmanager',
        providerVersion: '1.1.7'
      },
      terraformProviderSource: 'Keeper-Security/secretsmanager'
    });
    this._credential = config.credential;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential - computed: false, optional: true, required: false
  private _credential?: string; 
  public get credential() {
    return this._credential;
  }
  public set credential(value: string | undefined) {
    this._credential = value;
  }
  public resetCredential() {
    this._credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
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
      credential: cdktf.stringToTerraform(this._credential),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential: {
        value: cdktf.stringToHclTerraform(this._credential),
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
