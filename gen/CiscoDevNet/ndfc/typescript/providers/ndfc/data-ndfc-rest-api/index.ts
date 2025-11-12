// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/rest_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNdfcRestApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Query parameters for GET API if any; format is key1=value1&key2=value2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/rest_api#query_parameters DataNdfcRestApi#query_parameters}
  */
  readonly queryParameters?: string;
  /**
  * URL to be used for GET - Note: This is prefixed with base_url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/rest_api#url DataNdfcRestApi#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/rest_api ndfc_rest_api}
*/
export class DataNdfcRestApi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_rest_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNdfcRestApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNdfcRestApi to import
  * @param importFromId The id of the existing DataNdfcRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/rest_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNdfcRestApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_rest_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/rest_api ndfc_rest_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNdfcRestApiConfig
  */
  public constructor(scope: Construct, id: string, config: DataNdfcRestApiConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_rest_api',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._queryParameters = config.queryParameters;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters?: string; 
  public get queryParameters() {
    return this.getStringAttribute('query_parameters');
  }
  public set queryParameters(value: string) {
    this._queryParameters = value;
  }
  public resetQueryParameters() {
    this._queryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters;
  }

  // response_message - computed: true, optional: false, required: false
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      query_parameters: cdktf.stringToTerraform(this._queryParameters),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      query_parameters: {
        value: cdktf.stringToHclTerraform(this._queryParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
