// https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the context of the variable.  Options are `company`, `flow`, `flowInstance`, `user`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#context Variable#context}
  */
  readonly context: string;
  /**
  * A string that specifies the description of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#description Variable#description}
  */
  readonly description?: string;
  /**
  * A boolean that specifies whether the variable's `value` must be kept as an empty string.  Conflicts with `value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#empty_value Variable#empty_value}
  */
  readonly emptyValue?: boolean | cdktf.IResolvable;
  /**
  * The ID of the PingOne environment to manage the DaVinci variable in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#environment_id Variable#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the ID of the flow to which the variable is assigned.  This field is required when the `context` field is set to `flow`.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#flow_id Variable#flow_id}
  */
  readonly flowId?: string;
  /**
  * An integer that specifies the maximum value of the variable, if the `type` parameter is set as `number`.  Defaults to `2000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#max Variable#max}
  */
  readonly max?: number;
  /**
  * An integer that specifies the minimum value of the variable, if the `type` parameter is set as `number`.  Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#min Variable#min}
  */
  readonly min?: number;
  /**
  * A boolean that specifies whether the variable is mutable.  If `true`, the variable can be modified by the flow. If `false`, the variable is read-only and cannot be modified by the flow.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#mutable Variable#mutable}
  */
  readonly mutable?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the name of the variable.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#name Variable#name}
  */
  readonly name: string;
  /**
  * A string that specifies the variable's data type.  Options are `boolean`, `number`, `object`, `secret`, `string`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#type Variable#type}
  */
  readonly type: string;
  /**
  * A string that specifies the default value of the variable, the type will be inferred from the value specified in the `type` parameter.  If left blank or omitted, the resource will not track the variable's value in state.  If the variable value should be tracked in state as an empty string, use the `empty_value` parameter.  Note that if the `type` is `secret`, the provider will not be able to remediate the value's configuration drift in the DaVinci service.  Conflicts with `empty_value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#value Variable#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable davinci_variable}
*/
export class Variable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "davinci_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Variable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Variable to import
  * @param importFromId The id of the existing Variable that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Variable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "davinci_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/variable davinci_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VariableConfig
  */
  public constructor(scope: Construct, id: string, config: VariableConfig) {
    super(scope, id, {
      terraformResourceType: 'davinci_variable',
      terraformGeneratorMetadata: {
        providerName: 'davinci',
        providerVersion: '0.5.3',
        providerVersionConstraint: '0.5.3'
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
    this._description = config.description;
    this._emptyValue = config.emptyValue;
    this._environmentId = config.environmentId;
    this._flowId = config.flowId;
    this._max = config.max;
    this._min = config.min;
    this._mutable = config.mutable;
    this._name = config.name;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // empty_value - computed: false, optional: true, required: false
  private _emptyValue?: boolean | cdktf.IResolvable; 
  public get emptyValue() {
    return this.getBooleanAttribute('empty_value');
  }
  public set emptyValue(value: boolean | cdktf.IResolvable) {
    this._emptyValue = value;
  }
  public resetEmptyValue() {
    this._emptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyValueInput() {
    return this._emptyValue;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // mutable - computed: true, optional: true, required: false
  private _mutable?: boolean | cdktf.IResolvable; 
  public get mutable() {
    return this.getBooleanAttribute('mutable');
  }
  public set mutable(value: boolean | cdktf.IResolvable) {
    this._mutable = value;
  }
  public resetMutable() {
    this._mutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutableInput() {
    return this._mutable;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_service - computed: true, optional: false, required: false
  public get valueService() {
    return this.getStringAttribute('value_service');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      description: cdktf.stringToTerraform(this._description),
      empty_value: cdktf.booleanToTerraform(this._emptyValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      flow_id: cdktf.stringToTerraform(this._flowId),
      max: cdktf.numberToTerraform(this._max),
      min: cdktf.numberToTerraform(this._min),
      mutable: cdktf.booleanToTerraform(this._mutable),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      empty_value: {
        value: cdktf.booleanToHclTerraform(this._emptyValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_id: {
        value: cdktf.stringToHclTerraform(this._flowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max: {
        value: cdktf.numberToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min: {
        value: cdktf.numberToHclTerraform(this._min),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mutable: {
        value: cdktf.booleanToHclTerraform(this._mutable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
