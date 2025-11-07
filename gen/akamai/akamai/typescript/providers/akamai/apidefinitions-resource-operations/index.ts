// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_resource_operations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApidefinitionsResourceOperationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_resource_operations#api_id ApidefinitionsResourceOperations#api_id}
  */
  readonly apiId: number;
  /**
  * JSON-formatted information about the API configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_resource_operations#resource_operations ApidefinitionsResourceOperations#resource_operations}
  */
  readonly resourceOperations: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_resource_operations akamai_apidefinitions_resource_operations}
*/
export class ApidefinitionsResourceOperations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_apidefinitions_resource_operations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApidefinitionsResourceOperations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApidefinitionsResourceOperations to import
  * @param importFromId The id of the existing ApidefinitionsResourceOperations that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_resource_operations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApidefinitionsResourceOperations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_apidefinitions_resource_operations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apidefinitions_resource_operations akamai_apidefinitions_resource_operations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApidefinitionsResourceOperationsConfig
  */
  public constructor(scope: Construct, id: string, config: ApidefinitionsResourceOperationsConfig) {
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
    this._resourceOperations = config.resourceOperations;
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

  // resource_operations - computed: false, optional: false, required: true
  private _resourceOperations?: string; 
  public get resourceOperations() {
    return this.getStringAttribute('resource_operations');
  }
  public set resourceOperations(value: string) {
    this._resourceOperations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOperationsInput() {
    return this._resourceOperations;
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
      resource_operations: cdktf.stringToTerraform(this._resourceOperations),
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
      resource_operations: {
        value: cdktf.stringToHclTerraform(this._resourceOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
