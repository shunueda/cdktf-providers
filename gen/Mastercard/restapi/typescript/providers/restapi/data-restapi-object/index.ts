// https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRestapiObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to emit verbose debug output while working with the API object on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#debug DataRestapiObject#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#id DataRestapiObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `id_attribute` set on the provider. Allows per-resource override of `id_attribute` (see `id_attribute` provider config documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#id_attribute DataRestapiObject#id_attribute}
  */
  readonly idAttribute?: string;
  /**
  * The API path on top of the base URL set in the provider that represents objects of this type on the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#path DataRestapiObject#path}
  */
  readonly path: string;
  /**
  * An optional query string to send when performing the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#query_string DataRestapiObject#query_string}
  */
  readonly queryString?: string;
  /**
  * Defaults to `query_string` set on data source. This key allows setting a different or empty query string for reading the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#read_query_string DataRestapiObject#read_query_string}
  */
  readonly readQueryString?: string;
  /**
  * When issuing a GET to the path, this JSON key is used to locate the results array. The format is 'field/field/field'. Example: 'results/values'. If omitted, it is assumed the results coming back are already an array and are to be used exactly as-is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#results_key DataRestapiObject#results_key}
  */
  readonly resultsKey?: string;
  /**
  * Valid JSON object to pass to search request as body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#search_data DataRestapiObject#search_data}
  */
  readonly searchData?: string;
  /**
  * When reading search results from the API, this key is used to identify the specific record to read. This should be a unique record such as 'name'. Similar to results_key, the value may be in the format of 'field/field/field' to search for data deeper in the returned object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#search_key DataRestapiObject#search_key}
  */
  readonly searchKey: string;
  /**
  * The API path on top of the base URL set in the provider that represents the location to search for objects of this type on the API server. If not set, defaults to the value of path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#search_path DataRestapiObject#search_path}
  */
  readonly searchPath?: string;
  /**
  * The value of 'search_key' will be compared to this value to determine if the correct object was found. Example: if 'search_key' is 'name' and 'search_value' is 'foo', the record in the array returned by the API with name=foo will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#search_value DataRestapiObject#search_value}
  */
  readonly searchValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object restapi_object}
*/
export class DataRestapiObject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "restapi_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRestapiObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRestapiObject to import
  * @param importFromId The id of the existing DataRestapiObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRestapiObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "restapi_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mastercard/restapi/2.0.1/docs/data-sources/object restapi_object} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRestapiObjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataRestapiObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'restapi_object',
      terraformGeneratorMetadata: {
        providerName: 'restapi',
        providerVersion: '2.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._debug = config.debug;
    this._id = config.id;
    this._idAttribute = config.idAttribute;
    this._path = config.path;
    this._queryString = config.queryString;
    this._readQueryString = config.readQueryString;
    this._resultsKey = config.resultsKey;
    this._searchData = config.searchData;
    this._searchKey = config.searchKey;
    this._searchPath = config.searchPath;
    this._searchValue = config.searchValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_data - computed: true, optional: false, required: false
  private _apiData = new cdktf.StringMap(this, "api_data");
  public get apiData() {
    return this._apiData;
  }

  // api_response - computed: true, optional: false, required: false
  public get apiResponse() {
    return this.getStringAttribute('api_response');
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // id_attribute - computed: false, optional: true, required: false
  private _idAttribute?: string; 
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }
  public set idAttribute(value: string) {
    this._idAttribute = value;
  }
  public resetIdAttribute() {
    this._idAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idAttributeInput() {
    return this._idAttribute;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // read_query_string - computed: false, optional: true, required: false
  private _readQueryString?: string; 
  public get readQueryString() {
    return this.getStringAttribute('read_query_string');
  }
  public set readQueryString(value: string) {
    this._readQueryString = value;
  }
  public resetReadQueryString() {
    this._readQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readQueryStringInput() {
    return this._readQueryString;
  }

  // results_key - computed: false, optional: true, required: false
  private _resultsKey?: string; 
  public get resultsKey() {
    return this.getStringAttribute('results_key');
  }
  public set resultsKey(value: string) {
    this._resultsKey = value;
  }
  public resetResultsKey() {
    this._resultsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsKeyInput() {
    return this._resultsKey;
  }

  // search_data - computed: false, optional: true, required: false
  private _searchData?: string; 
  public get searchData() {
    return this.getStringAttribute('search_data');
  }
  public set searchData(value: string) {
    this._searchData = value;
  }
  public resetSearchData() {
    this._searchData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDataInput() {
    return this._searchData;
  }

  // search_key - computed: false, optional: false, required: true
  private _searchKey?: string; 
  public get searchKey() {
    return this.getStringAttribute('search_key');
  }
  public set searchKey(value: string) {
    this._searchKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyInput() {
    return this._searchKey;
  }

  // search_path - computed: false, optional: true, required: false
  private _searchPath?: string; 
  public get searchPath() {
    return this.getStringAttribute('search_path');
  }
  public set searchPath(value: string) {
    this._searchPath = value;
  }
  public resetSearchPath() {
    this._searchPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathInput() {
    return this._searchPath;
  }

  // search_value - computed: false, optional: false, required: true
  private _searchValue?: string; 
  public get searchValue() {
    return this.getStringAttribute('search_value');
  }
  public set searchValue(value: string) {
    this._searchValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchValueInput() {
    return this._searchValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug: cdktf.booleanToTerraform(this._debug),
      id: cdktf.stringToTerraform(this._id),
      id_attribute: cdktf.stringToTerraform(this._idAttribute),
      path: cdktf.stringToTerraform(this._path),
      query_string: cdktf.stringToTerraform(this._queryString),
      read_query_string: cdktf.stringToTerraform(this._readQueryString),
      results_key: cdktf.stringToTerraform(this._resultsKey),
      search_data: cdktf.stringToTerraform(this._searchData),
      search_key: cdktf.stringToTerraform(this._searchKey),
      search_path: cdktf.stringToTerraform(this._searchPath),
      search_value: cdktf.stringToTerraform(this._searchValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_attribute: {
        value: cdktf.stringToHclTerraform(this._idAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_string: {
        value: cdktf.stringToHclTerraform(this._queryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_query_string: {
        value: cdktf.stringToHclTerraform(this._readQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      results_key: {
        value: cdktf.stringToHclTerraform(this._resultsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_data: {
        value: cdktf.stringToHclTerraform(this._searchData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_key: {
        value: cdktf.stringToHclTerraform(this._searchKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_path: {
        value: cdktf.stringToHclTerraform(this._searchPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_value: {
        value: cdktf.stringToHclTerraform(this._searchValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
