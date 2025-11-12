// https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/yq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDataprocessorYqConfig extends cdktf.TerraformMetaArguments {
  /**
  * The YQ expression to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/yq#expression DataDataprocessorYq#expression}
  */
  readonly expression: string;
  /**
  * The input YAML data that will be processed with YQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/yq#input_data DataDataprocessorYq#input_data}
  */
  readonly inputData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/yq dataprocessor_yq}
*/
export class DataDataprocessorYq extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dataprocessor_yq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDataprocessorYq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDataprocessorYq to import
  * @param importFromId The id of the existing DataDataprocessorYq that should be imported. Refer to the {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/yq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDataprocessorYq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dataprocessor_yq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/slok/dataprocessor/0.4.0/docs/data-sources/yq dataprocessor_yq} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDataprocessorYqConfig
  */
  public constructor(scope: Construct, id: string, config: DataDataprocessorYqConfig) {
    super(scope, id, {
      terraformResourceType: 'dataprocessor_yq',
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

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expression: cdktf.stringToTerraform(this._expression),
      input_data: cdktf.stringToTerraform(this._inputData),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
