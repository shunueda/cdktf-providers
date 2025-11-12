// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StagePromptFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#field_key StagePromptField#field_key}
  */
  readonly fieldKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#id StagePromptField#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#initial_value StagePromptField#initial_value}
  */
  readonly initialValue?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#initial_value_expression StagePromptField#initial_value_expression}
  */
  readonly initialValueExpression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#label StagePromptField#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#name StagePromptField#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#order StagePromptField#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#placeholder StagePromptField#placeholder}
  */
  readonly placeholder?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#placeholder_expression StagePromptField#placeholder_expression}
  */
  readonly placeholderExpression?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#required StagePromptField#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#sub_text StagePromptField#sub_text}
  */
  readonly subText?: string;
  /**
  * Allowed values:
  *   - `text`
  *   - `text_area`
  *   - `text_read_only`
  *   - `text_area_read_only`
  *   - `username`
  *   - `email`
  *   - `password`
  *   - `number`
  *   - `checkbox`
  *   - `radio-button-group`
  *   - `dropdown`
  *   - `date`
  *   - `date-time`
  *   - `file`
  *   - `separator`
  *   - `hidden`
  *   - `static`
  *   - `ak-locale`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#type StagePromptField#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field authentik_stage_prompt_field}
*/
export class StagePromptField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_prompt_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StagePromptField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StagePromptField to import
  * @param importFromId The id of the existing StagePromptField that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StagePromptField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_prompt_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_prompt_field authentik_stage_prompt_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StagePromptFieldConfig
  */
  public constructor(scope: Construct, id: string, config: StagePromptFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_prompt_field',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fieldKey = config.fieldKey;
    this._id = config.id;
    this._initialValue = config.initialValue;
    this._initialValueExpression = config.initialValueExpression;
    this._label = config.label;
    this._name = config.name;
    this._order = config.order;
    this._placeholder = config.placeholder;
    this._placeholderExpression = config.placeholderExpression;
    this._required = config.required;
    this._subText = config.subText;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // field_key - computed: false, optional: false, required: true
  private _fieldKey?: string; 
  public get fieldKey() {
    return this.getStringAttribute('field_key');
  }
  public set fieldKey(value: string) {
    this._fieldKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldKeyInput() {
    return this._fieldKey;
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

  // initial_value - computed: false, optional: true, required: false
  private _initialValue?: string; 
  public get initialValue() {
    return this.getStringAttribute('initial_value');
  }
  public set initialValue(value: string) {
    this._initialValue = value;
  }
  public resetInitialValue() {
    this._initialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialValueInput() {
    return this._initialValue;
  }

  // initial_value_expression - computed: false, optional: true, required: false
  private _initialValueExpression?: boolean | cdktf.IResolvable; 
  public get initialValueExpression() {
    return this.getBooleanAttribute('initial_value_expression');
  }
  public set initialValueExpression(value: boolean | cdktf.IResolvable) {
    this._initialValueExpression = value;
  }
  public resetInitialValueExpression() {
    this._initialValueExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialValueExpressionInput() {
    return this._initialValueExpression;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // placeholder - computed: false, optional: true, required: false
  private _placeholder?: string; 
  public get placeholder() {
    return this.getStringAttribute('placeholder');
  }
  public set placeholder(value: string) {
    this._placeholder = value;
  }
  public resetPlaceholder() {
    this._placeholder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderInput() {
    return this._placeholder;
  }

  // placeholder_expression - computed: false, optional: true, required: false
  private _placeholderExpression?: boolean | cdktf.IResolvable; 
  public get placeholderExpression() {
    return this.getBooleanAttribute('placeholder_expression');
  }
  public set placeholderExpression(value: boolean | cdktf.IResolvable) {
    this._placeholderExpression = value;
  }
  public resetPlaceholderExpression() {
    this._placeholderExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderExpressionInput() {
    return this._placeholderExpression;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sub_text - computed: false, optional: true, required: false
  private _subText?: string; 
  public get subText() {
    return this.getStringAttribute('sub_text');
  }
  public set subText(value: string) {
    this._subText = value;
  }
  public resetSubText() {
    this._subText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTextInput() {
    return this._subText;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      field_key: cdktf.stringToTerraform(this._fieldKey),
      id: cdktf.stringToTerraform(this._id),
      initial_value: cdktf.stringToTerraform(this._initialValue),
      initial_value_expression: cdktf.booleanToTerraform(this._initialValueExpression),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      placeholder: cdktf.stringToTerraform(this._placeholder),
      placeholder_expression: cdktf.booleanToTerraform(this._placeholderExpression),
      required: cdktf.booleanToTerraform(this._required),
      sub_text: cdktf.stringToTerraform(this._subText),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      field_key: {
        value: cdktf.stringToHclTerraform(this._fieldKey),
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
      initial_value: {
        value: cdktf.stringToHclTerraform(this._initialValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_value_expression: {
        value: cdktf.booleanToHclTerraform(this._initialValueExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      placeholder: {
        value: cdktf.stringToHclTerraform(this._placeholder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placeholder_expression: {
        value: cdktf.booleanToHclTerraform(this._placeholderExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sub_text: {
        value: cdktf.stringToHclTerraform(this._subText),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
