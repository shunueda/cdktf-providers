// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_resource_operations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiApidefinitionsResourceOperationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_resource_operations#api_id DataAkamaiApidefinitionsResourceOperations#api_id}
  */
  readonly apiId: number;
  /**
  * Resource name to search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_resource_operations#resource_name DataAkamaiApidefinitionsResourceOperations#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Resource path to search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_resource_operations#resource_path DataAkamaiApidefinitionsResourceOperations#resource_path}
  */
  readonly resourcePath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_resource_operations akamai_apidefinitions_resource_operations}
*/
export class DataAkamaiApidefinitionsResourceOperations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_apidefinitions_resource_operations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiApidefinitionsResourceOperations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiApidefinitionsResourceOperations to import
  * @param importFromId The id of the existing DataAkamaiApidefinitionsResourceOperations that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_resource_operations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiApidefinitionsResourceOperations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_apidefinitions_resource_operations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apidefinitions_resource_operations akamai_apidefinitions_resource_operations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiApidefinitionsResourceOperationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiApidefinitionsResourceOperationsConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_apidefinitions_resource_operations',
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
    this._apiId = config.apiId;
    this._resourceName = config.resourceName;
    this._resourcePath = config.resourcePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: number; 
  public get apiId() {
    return this.getNumberAttribute('api_id');
  }
  public set apiId(value: number) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_operations - computed: true, optional: false, required: false
  public get resourceOperations() {
    return this.getStringAttribute('resource_operations');
  }

  // resource_path - computed: false, optional: true, required: false
  private _resourcePath?: string; 
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }
  public set resourcePath(value: string) {
    this._resourcePath = value;
  }
  public resetResourcePath() {
    this._resourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePathInput() {
    return this._resourcePath;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.numberToTerraform(this._apiId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_path: cdktf.stringToTerraform(this._resourcePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.numberToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_path: {
        value: cdktf.stringToHclTerraform(this._resourcePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
