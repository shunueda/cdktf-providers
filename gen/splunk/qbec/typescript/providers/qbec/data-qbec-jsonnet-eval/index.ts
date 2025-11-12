// https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataQbecJsonnetEvalConfig extends cdktf.TerraformMetaArguments {
  /**
  * inline jsonnet code to evaluate (one of file or code must be present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#code DataQbecJsonnetEval#code}
  */
  readonly code?: string;
  /**
  * data source URIs to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#data_sources DataQbecJsonnetEval#data_sources}
  */
  readonly dataSources?: string[];
  /**
  * external variables to set as code variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#ext_code_vars DataQbecJsonnetEval#ext_code_vars}
  */
  readonly extCodeVars?: { [key: string]: string };
  /**
  * external variables to set as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#ext_str_vars DataQbecJsonnetEval#ext_str_vars}
  */
  readonly extStrVars?: { [key: string]: string };
  /**
  * jsonnet file to evaluate (one of file or code must be present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#file DataQbecJsonnetEval#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#id DataQbecJsonnetEval#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * library paths to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#lib_paths DataQbecJsonnetEval#lib_paths}
  */
  readonly libPaths?: string[];
  /**
  * TLA variables to set as code variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#tla_code_vars DataQbecJsonnetEval#tla_code_vars}
  */
  readonly tlaCodeVars?: { [key: string]: string };
  /**
  * TLA variables to set as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#tla_str_vars DataQbecJsonnetEval#tla_str_vars}
  */
  readonly tlaStrVars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval qbec_jsonnet_eval}
*/
export class DataQbecJsonnetEval extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "qbec_jsonnet_eval";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataQbecJsonnetEval resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataQbecJsonnetEval to import
  * @param importFromId The id of the existing DataQbecJsonnetEval that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataQbecJsonnetEval to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "qbec_jsonnet_eval", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/qbec/0.0.1/docs/data-sources/jsonnet_eval qbec_jsonnet_eval} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataQbecJsonnetEvalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataQbecJsonnetEvalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'qbec_jsonnet_eval',
      terraformGeneratorMetadata: {
        providerName: 'qbec',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._code = config.code;
    this._dataSources = config.dataSources;
    this._extCodeVars = config.extCodeVars;
    this._extStrVars = config.extStrVars;
    this._file = config.file;
    this._id = config.id;
    this._libPaths = config.libPaths;
    this._tlaCodeVars = config.tlaCodeVars;
    this._tlaStrVars = config.tlaStrVars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources?: string[]; 
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }
  public set dataSources(value: string[]) {
    this._dataSources = value;
  }
  public resetDataSources() {
    this._dataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources;
  }

  // ext_code_vars - computed: false, optional: true, required: false
  private _extCodeVars?: { [key: string]: string }; 
  public get extCodeVars() {
    return this.getStringMapAttribute('ext_code_vars');
  }
  public set extCodeVars(value: { [key: string]: string }) {
    this._extCodeVars = value;
  }
  public resetExtCodeVars() {
    this._extCodeVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extCodeVarsInput() {
    return this._extCodeVars;
  }

  // ext_str_vars - computed: false, optional: true, required: false
  private _extStrVars?: { [key: string]: string }; 
  public get extStrVars() {
    return this.getStringMapAttribute('ext_str_vars');
  }
  public set extStrVars(value: { [key: string]: string }) {
    this._extStrVars = value;
  }
  public resetExtStrVars() {
    this._extStrVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extStrVarsInput() {
    return this._extStrVars;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // lib_paths - computed: false, optional: true, required: false
  private _libPaths?: string[]; 
  public get libPaths() {
    return this.getListAttribute('lib_paths');
  }
  public set libPaths(value: string[]) {
    this._libPaths = value;
  }
  public resetLibPaths() {
    this._libPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libPathsInput() {
    return this._libPaths;
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // tla_code_vars - computed: false, optional: true, required: false
  private _tlaCodeVars?: { [key: string]: string }; 
  public get tlaCodeVars() {
    return this.getStringMapAttribute('tla_code_vars');
  }
  public set tlaCodeVars(value: { [key: string]: string }) {
    this._tlaCodeVars = value;
  }
  public resetTlaCodeVars() {
    this._tlaCodeVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaCodeVarsInput() {
    return this._tlaCodeVars;
  }

  // tla_str_vars - computed: false, optional: true, required: false
  private _tlaStrVars?: { [key: string]: string }; 
  public get tlaStrVars() {
    return this.getStringMapAttribute('tla_str_vars');
  }
  public set tlaStrVars(value: { [key: string]: string }) {
    this._tlaStrVars = value;
  }
  public resetTlaStrVars() {
    this._tlaStrVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaStrVarsInput() {
    return this._tlaStrVars;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code: cdktf.stringToTerraform(this._code),
      data_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataSources),
      ext_code_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._extCodeVars),
      ext_str_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._extStrVars),
      file: cdktf.stringToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      lib_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._libPaths),
      tla_code_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._tlaCodeVars),
      tla_str_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._tlaStrVars),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code: {
        value: cdktf.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ext_code_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extCodeVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ext_str_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extStrVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lib_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._libPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tla_code_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tlaCodeVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tla_str_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tlaStrVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
