// https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CockroachProviderConfig {
  /**
  * The JWT from a JWT Issuer configured for the CockroachDB Cloud Organization.
  * In this case, the vanity name of the organization is required and can be provided using the `COCKROACH_VANITY_NAME` environment variable. If the JWT is mapped to multiple identities, the identity to impersonate should be provided using the `COCKROACH_USERNAME` environment variable, and should contain either a user email address or a service account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs#apijwt CockroachProvider#apijwt}
  */
  readonly apijwt?: string;
  /**
  * The API key to access CockroachDB Cloud.
  * If this field is provided, it is used and `apijwt` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs#apikey CockroachProvider#apikey}
  */
  readonly apikey?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs#alias CockroachProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs cockroach}
*/
export class CockroachProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CockroachProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CockroachProvider to import
  * @param importFromId The id of the existing CockroachProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CockroachProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs cockroach} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CockroachProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CockroachProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cockroach',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      terraformProviderSource: 'cockroachdb/cockroach'
    });
    this._apijwt = config.apijwt;
    this._apikey = config.apikey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apijwt - computed: false, optional: true, required: false
  private _apijwt?: string; 
  public get apijwt() {
    return this._apijwt;
  }
  public set apijwt(value: string | undefined) {
    this._apijwt = value;
  }
  public resetApijwt() {
    this._apijwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apijwtInput() {
    return this._apijwt;
  }

  // apikey - computed: false, optional: true, required: false
  private _apikey?: string; 
  public get apikey() {
    return this._apikey;
  }
  public set apikey(value: string | undefined) {
    this._apikey = value;
  }
  public resetApikey() {
    this._apikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
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
      apijwt: cdktf.stringToTerraform(this._apijwt),
      apikey: cdktf.stringToTerraform(this._apikey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apijwt: {
        value: cdktf.stringToHclTerraform(this._apijwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
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
