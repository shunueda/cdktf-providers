// https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/go_plugin_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDataprocessorGoPluginV1Config extends cdktf.TerraformMetaArguments {
  /**
  * The input raw data that will be processed by the loaded plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/go_plugin_v1#input_data DataDataprocessorGoPluginV1#input_data}
  */
  readonly inputData: string;
  /**
  * The Go plugin v1 source code. Uses the `func ProcessorPluginV1(ctx context.Context, inputData string, vars map[string]string) (string, error)` signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/go_plugin_v1#plugin DataDataprocessorGoPluginV1#plugin}
  */
  readonly plugin: string;
  /**
  * Variables that will be passed to the plugin execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/go_plugin_v1#vars DataDataprocessorGoPluginV1#vars}
  */
  readonly vars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/go_plugin_v1 dataprocessor_go_plugin_v1}
*/
export class DataDataprocessorGoPluginV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dataprocessor_go_plugin_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDataprocessorGoPluginV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDataprocessorGoPluginV1 to import
  * @param importFromId The id of the existing DataDataprocessorGoPluginV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/go_plugin_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDataprocessorGoPluginV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dataprocessor_go_plugin_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/go_plugin_v1 dataprocessor_go_plugin_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDataprocessorGoPluginV1Config
  */
  public constructor(scope: Construct, id: string, config: DataDataprocessorGoPluginV1Config) {
    super(scope, id, {
      terraformResourceType: 'dataprocessor_go_plugin_v1',
      terraformGeneratorMetadata: {
        providerName: 'dataprocessor',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._inputData = config.inputData;
    this._plugin = config.plugin;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_data - computed: false, optional: false, required: true
  private _inputData?: string; 
  public get inputData() {
    return this.getStringAttribute('input_data');
  }
  public set inputData(value: string) {
    this._inputData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataInput() {
    return this._inputData;
  }

  // plugin - computed: false, optional: false, required: true
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input_data: cdktf.stringToTerraform(this._inputData),
      plugin: cdktf.stringToTerraform(this._plugin),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      input_data: {
        value: cdktf.stringToHclTerraform(this._inputData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin: {
        value: cdktf.stringToHclTerraform(this._plugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
