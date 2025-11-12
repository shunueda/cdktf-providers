// https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DoitProviderConfig {
  /**
  * API Token to access DoiT API. May also be provided by DOIT_API_TOKEN environment variable. Refer to https://developer.doit.com/docs/start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs#api_token DoitProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Customer context. May also be provided by DOIT_CUSTOMER_CONTEXT environment variable. This field is requiered just for DoiT employees 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs#customer_context DoitProvider#customer_context}
  */
  readonly customerContext?: string;
  /**
  * URI for DoiT API. May also be provided via DOIT_HOST environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs#host DoitProvider#host}
  */
  readonly host?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs#alias DoitProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs doit}
*/
export class DoitProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DoitProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DoitProvider to import
  * @param importFromId The id of the existing DoitProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DoitProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs doit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DoitProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DoitProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'doit',
      terraformGeneratorMetadata: {
        providerName: 'doit',
        providerVersion: '0.25.0',
        providerVersionConstraint: '0.25.0'
      },
      terraformProviderSource: 'doitintl/doit'
    });
    this._apiToken = config.apiToken;
    this._customerContext = config.customerContext;
    this._host = config.host;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // customer_context - computed: false, optional: true, required: false
  private _customerContext?: string; 
  public get customerContext() {
    return this._customerContext;
  }
  public set customerContext(value: string | undefined) {
    this._customerContext = value;
  }
  public resetCustomerContext() {
    this._customerContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContextInput() {
    return this._customerContext;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      customer_context: cdktf.stringToTerraform(this._customerContext),
      host: cdktf.stringToTerraform(this._host),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_context: {
        value: cdktf.stringToHclTerraform(this._customerContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
