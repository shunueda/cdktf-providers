// https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/scim_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesScimLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of this SCIM request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/scim_log#id DataFilesScimLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/scim_log files_scim_log}
*/
export class DataFilesScimLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_scim_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesScimLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesScimLog to import
  * @param importFromId The id of the existing DataFilesScimLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/scim_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesScimLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_scim_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/scim_log files_scim_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesScimLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesScimLogConfig) {
    super(scope, id, {
      terraformResourceType: 'files_scim_log',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.388',
        providerVersionConstraint: '0.1.388'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // http_response_code - computed: true, optional: false, required: false
  public get httpResponseCode() {
    return this.getStringAttribute('http_response_code');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // request_json - computed: true, optional: false, required: false
  public get requestJson() {
    return this.getStringAttribute('request_json');
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // request_path - computed: true, optional: false, required: false
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }

  // response_json - computed: true, optional: false, required: false
  public get responseJson() {
    return this.getStringAttribute('response_json');
  }

  // user_agent - computed: true, optional: false, required: false
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
