// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/macros
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpectrocloudMacrosConfig extends cdktf.TerraformMetaArguments {
  /**
  * The context to retrieve macros from. Valid values are `project` or `tenant`. Defaults to `tenant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/macros#context DataSpectrocloudMacros#context}
  */
  readonly context?: string;
  /**
  * The name of the macros resource. If specified, the data source will return the macros with this name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/macros#macro_name DataSpectrocloudMacros#macro_name}
  */
  readonly macroName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/macros spectrocloud_macros}
*/
export class DataSpectrocloudMacros extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_macros";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpectrocloudMacros resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpectrocloudMacros to import
  * @param importFromId The id of the existing DataSpectrocloudMacros that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/macros#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpectrocloudMacros to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_macros", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/data-sources/macros spectrocloud_macros} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpectrocloudMacrosConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSpectrocloudMacrosConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_macros',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.25.2',
        providerVersionConstraint: '0.25.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._macroName = config.macroName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // macro_name - computed: false, optional: true, required: false
  private _macroName?: string; 
  public get macroName() {
    return this.getStringAttribute('macro_name');
  }
  public set macroName(value: string) {
    this._macroName = value;
  }
  public resetMacroName() {
    this._macroName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macroNameInput() {
    return this._macroName;
  }

  // macro_value - computed: true, optional: false, required: false
  public get macroValue() {
    return this.getStringAttribute('macro_value');
  }

  // macros_map - computed: true, optional: false, required: false
  private _macrosMap = new cdktf.StringMap(this, "macros_map");
  public get macrosMap() {
    return this._macrosMap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      macro_name: cdktf.stringToTerraform(this._macroName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macro_name: {
        value: cdktf.stringToHclTerraform(this._macroName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
