// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OktapamProviderConfig {
  /**
  * Okta PAM API Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs#oktapam_api_host OktapamProvider#oktapam_api_host}
  */
  readonly oktapamApiHost?: string;
  /**
  * Okta PAM API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs#oktapam_key OktapamProvider#oktapam_key}
  */
  readonly oktapamKey?: string;
  /**
  * Okta PAM API Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs#oktapam_secret OktapamProvider#oktapam_secret}
  */
  readonly oktapamSecret?: string;
  /**
  * Okta PAM Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs#oktapam_team OktapamProvider#oktapam_team}
  */
  readonly oktapamTeam?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs#alias OktapamProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs oktapam}
*/
export class OktapamProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OktapamProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OktapamProvider to import
  * @param importFromId The id of the existing OktapamProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OktapamProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs oktapam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OktapamProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OktapamProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oktapam',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      terraformProviderSource: 'okta/oktapam'
    });
    this._oktapamApiHost = config.oktapamApiHost;
    this._oktapamKey = config.oktapamKey;
    this._oktapamSecret = config.oktapamSecret;
    this._oktapamTeam = config.oktapamTeam;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // oktapam_api_host - computed: false, optional: true, required: false
  private _oktapamApiHost?: string; 
  public get oktapamApiHost() {
    return this._oktapamApiHost;
  }
  public set oktapamApiHost(value: string | undefined) {
    this._oktapamApiHost = value;
  }
  public resetOktapamApiHost() {
    this._oktapamApiHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktapamApiHostInput() {
    return this._oktapamApiHost;
  }

  // oktapam_key - computed: false, optional: true, required: false
  private _oktapamKey?: string; 
  public get oktapamKey() {
    return this._oktapamKey;
  }
  public set oktapamKey(value: string | undefined) {
    this._oktapamKey = value;
  }
  public resetOktapamKey() {
    this._oktapamKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktapamKeyInput() {
    return this._oktapamKey;
  }

  // oktapam_secret - computed: false, optional: true, required: false
  private _oktapamSecret?: string; 
  public get oktapamSecret() {
    return this._oktapamSecret;
  }
  public set oktapamSecret(value: string | undefined) {
    this._oktapamSecret = value;
  }
  public resetOktapamSecret() {
    this._oktapamSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktapamSecretInput() {
    return this._oktapamSecret;
  }

  // oktapam_team - computed: false, optional: true, required: false
  private _oktapamTeam?: string; 
  public get oktapamTeam() {
    return this._oktapamTeam;
  }
  public set oktapamTeam(value: string | undefined) {
    this._oktapamTeam = value;
  }
  public resetOktapamTeam() {
    this._oktapamTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktapamTeamInput() {
    return this._oktapamTeam;
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
      oktapam_api_host: cdktf.stringToTerraform(this._oktapamApiHost),
      oktapam_key: cdktf.stringToTerraform(this._oktapamKey),
      oktapam_secret: cdktf.stringToTerraform(this._oktapamSecret),
      oktapam_team: cdktf.stringToTerraform(this._oktapamTeam),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oktapam_api_host: {
        value: cdktf.stringToHclTerraform(this._oktapamApiHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oktapam_key: {
        value: cdktf.stringToHclTerraform(this._oktapamKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oktapam_secret: {
        value: cdktf.stringToHclTerraform(this._oktapamSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oktapam_team: {
        value: cdktf.stringToHclTerraform(this._oktapamTeam),
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
