// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_openapi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiApidefinitionsOpenapiConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON-formatted information about the API configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_openapi#api DataAkamaiApidefinitionsOpenapi#api}
  */
  readonly api?: string;
  /**
  * Main API file name in case of zip archive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_openapi#api_file_name DataAkamaiApidefinitionsOpenapi#api_file_name}
  */
  readonly apiFileName?: string;
  /**
  * Path to OpenAPI/Swagger file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_openapi#file_path DataAkamaiApidefinitionsOpenapi#file_path}
  */
  readonly filePath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_openapi akamai_apidefinitions_openapi}
*/
export class DataAkamaiApidefinitionsOpenapi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_apidefinitions_openapi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiApidefinitionsOpenapi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiApidefinitionsOpenapi to import
  * @param importFromId The id of the existing DataAkamaiApidefinitionsOpenapi that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_openapi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiApidefinitionsOpenapi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_apidefinitions_openapi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_openapi akamai_apidefinitions_openapi} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiApidefinitionsOpenapiConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiApidefinitionsOpenapiConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_apidefinitions_openapi',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._api = config.api;
    this._apiFileName = config.apiFileName;
    this._filePath = config.filePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // api_file_name - computed: false, optional: true, required: false
  private _apiFileName?: string; 
  public get apiFileName() {
    return this.getStringAttribute('api_file_name');
  }
  public set apiFileName(value: string) {
    this._apiFileName = value;
  }
  public resetApiFileName() {
    this._apiFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiFileNameInput() {
    return this._apiFileName;
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api: cdktf.stringToTerraform(this._api),
      api_file_name: cdktf.stringToTerraform(this._apiFileName),
      file_path: cdktf.stringToTerraform(this._filePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api: {
        value: cdktf.stringToHclTerraform(this._api),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_file_name: {
        value: cdktf.stringToHclTerraform(this._apiFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
