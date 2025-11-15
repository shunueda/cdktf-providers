// https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/data-sources/workspace_outputs_json
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTharsisWorkspaceOutputsJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID (UUID or TRN) of the workspace to retrieve outputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/data-sources/workspace_outputs_json#id DataTharsisWorkspaceOutputsJson#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path of the workspace to retrieve outputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/data-sources/workspace_outputs_json#path DataTharsisWorkspaceOutputsJson#path}
  */
  readonly path?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/data-sources/workspace_outputs_json tharsis_workspace_outputs_json}
*/
export class DataTharsisWorkspaceOutputsJson extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_workspace_outputs_json";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTharsisWorkspaceOutputsJson resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTharsisWorkspaceOutputsJson to import
  * @param importFromId The id of the existing DataTharsisWorkspaceOutputsJson that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/data-sources/workspace_outputs_json#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTharsisWorkspaceOutputsJson to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_workspace_outputs_json", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/data-sources/workspace_outputs_json tharsis_workspace_outputs_json} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTharsisWorkspaceOutputsJsonConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTharsisWorkspaceOutputsJsonConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tharsis_workspace_outputs_json',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
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
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
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

  // outputs - computed: true, optional: false, required: false
  private _outputs = new cdktf.StringMap(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // state_version_id - computed: true, optional: false, required: false
  public get stateVersionId() {
    return this.getStringAttribute('state_version_id');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
