// https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJsonnetFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Jsonnet template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#content DataJsonnetFile#content}
  */
  readonly content?: string;
  /**
  * Map of string representing a Jsonnet code for passing to the interpreter as external variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#ext_code DataJsonnetFile#ext_code}
  */
  readonly extCode?: { [key: string]: string };
  /**
  * Map of string for passing to the interpreter as external variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#ext_str DataJsonnetFile#ext_str}
  */
  readonly extStr?: { [key: string]: string };
  /**
  * Paths used to search additional Jsonnet libraries. Overrides paths from provider config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#jsonnet_path DataJsonnetFile#jsonnet_path}
  */
  readonly jsonnetPath?: string;
  /**
  * Path to the Jsonnet template file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#source DataJsonnetFile#source}
  */
  readonly source?: string;
  /**
  * When rendering a textual manifest, does not convert to a json string; "false" by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#string_output DataJsonnetFile#string_output}
  */
  readonly stringOutput?: boolean | cdktf.IResolvable;
  /**
  * Map of string representing a Jsonnet code for passing to the interpreter as top-level argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#tla_code DataJsonnetFile#tla_code}
  */
  readonly tlaCode?: { [key: string]: string };
  /**
  * Map of string for passing to the interpreter as top level argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#tla_str DataJsonnetFile#tla_str}
  */
  readonly tlaStr?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file jsonnet_file}
*/
export class DataJsonnetFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jsonnet_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJsonnetFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJsonnetFile to import
  * @param importFromId The id of the existing DataJsonnetFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJsonnetFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jsonnet_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs/data-sources/file jsonnet_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJsonnetFileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJsonnetFileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'jsonnet_file',
      terraformGeneratorMetadata: {
        providerName: 'jsonnet',
        providerVersion: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._extCode = config.extCode;
    this._extStr = config.extStr;
    this._jsonnetPath = config.jsonnetPath;
    this._source = config.source;
    this._stringOutput = config.stringOutput;
    this._tlaCode = config.tlaCode;
    this._tlaStr = config.tlaStr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // ext_code - computed: false, optional: true, required: false
  private _extCode?: { [key: string]: string }; 
  public get extCode() {
    return this.getStringMapAttribute('ext_code');
  }
  public set extCode(value: { [key: string]: string }) {
    this._extCode = value;
  }
  public resetExtCode() {
    this._extCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extCodeInput() {
    return this._extCode;
  }

  // ext_str - computed: false, optional: true, required: false
  private _extStr?: { [key: string]: string }; 
  public get extStr() {
    return this.getStringMapAttribute('ext_str');
  }
  public set extStr(value: { [key: string]: string }) {
    this._extStr = value;
  }
  public resetExtStr() {
    this._extStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extStrInput() {
    return this._extStr;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jsonnet_path - computed: false, optional: true, required: false
  private _jsonnetPath?: string; 
  public get jsonnetPath() {
    return this.getStringAttribute('jsonnet_path');
  }
  public set jsonnetPath(value: string) {
    this._jsonnetPath = value;
  }
  public resetJsonnetPath() {
    this._jsonnetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetPathInput() {
    return this._jsonnetPath;
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // string_output - computed: false, optional: true, required: false
  private _stringOutput?: boolean | cdktf.IResolvable; 
  public get stringOutput() {
    return this.getBooleanAttribute('string_output');
  }
  public set stringOutput(value: boolean | cdktf.IResolvable) {
    this._stringOutput = value;
  }
  public resetStringOutput() {
    this._stringOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringOutputInput() {
    return this._stringOutput;
  }

  // tla_code - computed: false, optional: true, required: false
  private _tlaCode?: { [key: string]: string }; 
  public get tlaCode() {
    return this.getStringMapAttribute('tla_code');
  }
  public set tlaCode(value: { [key: string]: string }) {
    this._tlaCode = value;
  }
  public resetTlaCode() {
    this._tlaCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaCodeInput() {
    return this._tlaCode;
  }

  // tla_str - computed: false, optional: true, required: false
  private _tlaStr?: { [key: string]: string }; 
  public get tlaStr() {
    return this.getStringMapAttribute('tla_str');
  }
  public set tlaStr(value: { [key: string]: string }) {
    this._tlaStr = value;
  }
  public resetTlaStr() {
    this._tlaStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaStrInput() {
    return this._tlaStr;
  }

  // trace - computed: true, optional: false, required: false
  public get trace() {
    return this.getStringAttribute('trace');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      ext_code: cdktf.hashMapper(cdktf.stringToTerraform)(this._extCode),
      ext_str: cdktf.hashMapper(cdktf.stringToTerraform)(this._extStr),
      jsonnet_path: cdktf.stringToTerraform(this._jsonnetPath),
      source: cdktf.stringToTerraform(this._source),
      string_output: cdktf.booleanToTerraform(this._stringOutput),
      tla_code: cdktf.hashMapper(cdktf.stringToTerraform)(this._tlaCode),
      tla_str: cdktf.hashMapper(cdktf.stringToTerraform)(this._tlaStr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_code: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extCode),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ext_str: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extStr),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      jsonnet_path: {
        value: cdktf.stringToHclTerraform(this._jsonnetPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      string_output: {
        value: cdktf.booleanToHclTerraform(this._stringOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tla_code: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tlaCode),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tla_str: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tlaStr),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
