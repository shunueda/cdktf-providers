// https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoralogixProviderConfig {
  /**
  * A key for using coralogix APIs (Auto Generated), appropriate for the defined environment. environment variable 'CORALOGIX_API_KEY' can be defined instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs#api_key CoralogixProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The Coralogix domain. Conflict With 'env'. environment variable 'CORALOGIX_DOMAIN' can be defined instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs#domain CoralogixProvider#domain}
  */
  readonly domain?: string;
  /**
  * The Coralogix API environment. can be one of ["AP1" "AP2" "AP3" "APAC1" "APAC2" "APAC3" "EU1" "EU2" "EUROPE1" "EUROPE2" "US1" "US2" "USA1" "USA2"]. environment variable 'CORALOGIX_ENV' can be defined instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs#env CoralogixProvider#env}
  */
  readonly env?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs#alias CoralogixProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs coralogix}
*/
export class CoralogixProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoralogixProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoralogixProvider to import
  * @param importFromId The id of the existing CoralogixProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoralogixProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs coralogix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoralogixProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CoralogixProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
      },
      terraformProviderSource: 'coralogix/coralogix'
    });
    this._apiKey = config.apiKey;
    this._domain = config.domain;
    this._env = config.env;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this._env;
  }
  public set env(value: string | undefined) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      domain: cdktf.stringToTerraform(this._domain),
      env: cdktf.stringToTerraform(this._env),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.stringToHclTerraform(this._env),
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
