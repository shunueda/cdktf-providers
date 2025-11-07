// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanaProviderConfig {
  /**
  * API token used to authenticate with the Instana Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs#api_token InstanaProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * The DNS Name of the Instana Endpoint (eg. saas-eu-west-1.instana.io)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs#endpoint InstanaProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * If set to true, TLS verification will be skipped when calling Instana API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs#tls_skip_verify InstanaProvider#tls_skip_verify}
  */
  readonly tlsSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs#alias InstanaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs instana}
*/
export class InstanaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanaProvider to import
  * @param importFromId The id of the existing InstanaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs instana} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: InstanaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'instana',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0'
      },
      terraformProviderSource: 'gessnerfl/instana'
    });
    this._apiToken = config.apiToken;
    this._endpoint = config.endpoint;
    this._tlsSkipVerify = config.tlsSkipVerify;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // tls_skip_verify - computed: false, optional: true, required: false
  private _tlsSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerify() {
    return this._tlsSkipVerify;
  }
  public set tlsSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsSkipVerify = value;
  }
  public resetTlsSkipVerify() {
    this._tlsSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInput() {
    return this._tlsSkipVerify;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      tls_skip_verify: cdktf.booleanToTerraform(this._tlsSkipVerify),
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
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
