// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/compute_script_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeScriptVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/compute_script_variable#default_value ComputeScriptVariable#default_value}
  */
  readonly defaultValue: string;
  /**
  * The name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/compute_script_variable#name ComputeScriptVariable#name}
  */
  readonly name: string;
  /**
  * Indicates whether the environment variable is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/compute_script_variable#required ComputeScriptVariable#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * The ID of the associated compute script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/compute_script_variable#script ComputeScriptVariable#script}
  */
  readonly script: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/compute_script_variable bunnynet_compute_script_variable}
*/
export class ComputeScriptVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_compute_script_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeScriptVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeScriptVariable to import
  * @param importFromId The id of the existing ComputeScriptVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/compute_script_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeScriptVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_compute_script_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/resources/compute_script_variable bunnynet_compute_script_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeScriptVariableConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeScriptVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_compute_script_variable',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultValue = config.defaultValue;
    this._name = config.name;
    this._required = config.required;
    this._script = config.script;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // script - computed: false, optional: false, required: true
  private _script?: number; 
  public get script() {
    return this.getNumberAttribute('script');
  }
  public set script(value: number) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_value: cdktf.stringToTerraform(this._defaultValue),
      name: cdktf.stringToTerraform(this._name),
      required: cdktf.booleanToTerraform(this._required),
      script: cdktf.numberToTerraform(this._script),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      script: {
        value: cdktf.numberToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
