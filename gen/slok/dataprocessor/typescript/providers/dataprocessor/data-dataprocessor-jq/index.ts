// https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/jq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDataprocessorJqConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JQ expression to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/jq#expression DataDataprocessorJq#expression}
  */
  readonly expression: string;
  /**
  * The input JSON data that will be processed with JQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/jq#input_data DataDataprocessorJq#input_data}
  */
  readonly inputData: string;
  /**
  * If enabled the JSON result will be rendered in pretty format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/jq#pretty DataDataprocessorJq#pretty}
  */
  readonly pretty?: boolean | cdktf.IResolvable;
  /**
  * Variables that will be passed to JQ execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/jq#vars DataDataprocessorJq#vars}
  */
  readonly vars?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/jq dataprocessor_jq}
*/
export class DataDataprocessorJq extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dataprocessor_jq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDataprocessorJq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDataprocessorJq to import
  * @param importFromId The id of the existing DataDataprocessorJq that should be imported. Refer to the {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/jq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDataprocessorJq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dataprocessor_jq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/jq dataprocessor_jq} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDataprocessorJqConfig
  */
  public constructor(scope: Construct, id: string, config: DataDataprocessorJqConfig) {
    super(scope, id, {
      terraformResourceType: 'dataprocessor_jq',
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
    this._expression = config.expression;
    this._inputData = config.inputData;
    this._pretty = config.pretty;
    this._vars = config.vars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

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

  // pretty - computed: false, optional: true, required: false
  private _pretty?: boolean | cdktf.IResolvable; 
  public get pretty() {
    return this.getBooleanAttribute('pretty');
  }
  public set pretty(value: boolean | cdktf.IResolvable) {
    this._pretty = value;
  }
  public resetPretty() {
    this._pretty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prettyInput() {
    return this._pretty;
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
      expression: cdktf.stringToTerraform(this._expression),
      input_data: cdktf.stringToTerraform(this._inputData),
      pretty: cdktf.booleanToTerraform(this._pretty),
      vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._vars),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_data: {
        value: cdktf.stringToHclTerraform(this._inputData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pretty: {
        value: cdktf.booleanToHclTerraform(this._pretty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
