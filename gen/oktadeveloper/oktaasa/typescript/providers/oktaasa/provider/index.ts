// https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OktaasaProviderConfig {
  /**
  * OKTAASA API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs#oktaasa_key OktaasaProvider#oktaasa_key}
  */
  readonly oktaasaKey: string;
  /**
  * OKTAASA API secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs#oktaasa_secret OktaasaProvider#oktaasa_secret}
  */
  readonly oktaasaSecret: string;
  /**
  * OKTAASA Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs#oktaasa_team OktaasaProvider#oktaasa_team}
  */
  readonly oktaasaTeam: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs#alias OktaasaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs oktaasa}
*/
export class OktaasaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktaasa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OktaasaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OktaasaProvider to import
  * @param importFromId The id of the existing OktaasaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OktaasaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktaasa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs oktaasa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OktaasaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: OktaasaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'oktaasa',
      terraformGeneratorMetadata: {
        providerName: 'oktaasa',
        providerVersion: '1.0.1'
      },
      terraformProviderSource: 'oktadeveloper/oktaasa'
    });
    this._oktaasaKey = config.oktaasaKey;
    this._oktaasaSecret = config.oktaasaSecret;
    this._oktaasaTeam = config.oktaasaTeam;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // oktaasa_key - computed: false, optional: false, required: true
  private _oktaasaKey?: string; 
  public get oktaasaKey() {
    return this._oktaasaKey;
  }
  public set oktaasaKey(value: string | undefined) {
    this._oktaasaKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaasaKeyInput() {
    return this._oktaasaKey;
  }

  // oktaasa_secret - computed: false, optional: false, required: true
  private _oktaasaSecret?: string; 
  public get oktaasaSecret() {
    return this._oktaasaSecret;
  }
  public set oktaasaSecret(value: string | undefined) {
    this._oktaasaSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaasaSecretInput() {
    return this._oktaasaSecret;
  }

  // oktaasa_team - computed: false, optional: false, required: true
  private _oktaasaTeam?: string; 
  public get oktaasaTeam() {
    return this._oktaasaTeam;
  }
  public set oktaasaTeam(value: string | undefined) {
    this._oktaasaTeam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaasaTeamInput() {
    return this._oktaasaTeam;
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
      oktaasa_key: cdktf.stringToTerraform(this._oktaasaKey),
      oktaasa_secret: cdktf.stringToTerraform(this._oktaasaSecret),
      oktaasa_team: cdktf.stringToTerraform(this._oktaasaTeam),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oktaasa_key: {
        value: cdktf.stringToHclTerraform(this._oktaasaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oktaasa_secret: {
        value: cdktf.stringToHclTerraform(this._oktaasaSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oktaasa_team: {
        value: cdktf.stringToHclTerraform(this._oktaasaTeam),
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
