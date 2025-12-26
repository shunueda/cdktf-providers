// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#choice_set_id CustomField#choice_set_id}
  */
  readonly choiceSetId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#content_types CustomField#content_types}
  */
  readonly contentTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#default CustomField#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#description CustomField#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#group_name CustomField#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#id CustomField#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#label CustomField#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#name CustomField#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#required CustomField#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#type CustomField#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#validation_maximum CustomField#validation_maximum}
  */
  readonly validationMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#validation_minimum CustomField#validation_minimum}
  */
  readonly validationMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#validation_regex CustomField#validation_regex}
  */
  readonly validationRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#weight CustomField#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field netbox_custom_field}
*/
export class CustomField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_custom_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomField to import
  * @param importFromId The id of the existing CustomField that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_custom_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/custom_field netbox_custom_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFieldConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_custom_field',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._choiceSetId = config.choiceSetId;
    this._contentTypes = config.contentTypes;
    this._default = config.default;
    this._description = config.description;
    this._groupName = config.groupName;
    this._id = config.id;
    this._label = config.label;
    this._name = config.name;
    this._required = config.required;
    this._type = config.type;
    this._validationMaximum = config.validationMaximum;
    this._validationMinimum = config.validationMinimum;
    this._validationRegex = config.validationRegex;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // choice_set_id - computed: false, optional: true, required: false
  private _choiceSetId?: number; 
  public get choiceSetId() {
    return this.getNumberAttribute('choice_set_id');
  }
  public set choiceSetId(value: number) {
    this._choiceSetId = value;
  }
  public resetChoiceSetId() {
    this._choiceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choiceSetIdInput() {
    return this._choiceSetId;
  }

  // content_types - computed: false, optional: false, required: true
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('content_types'));
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
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

  // validation_maximum - computed: false, optional: true, required: false
  private _validationMaximum?: number; 
  public get validationMaximum() {
    return this.getNumberAttribute('validation_maximum');
  }
  public set validationMaximum(value: number) {
    this._validationMaximum = value;
  }
  public resetValidationMaximum() {
    this._validationMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMaximumInput() {
    return this._validationMaximum;
  }

  // validation_minimum - computed: false, optional: true, required: false
  private _validationMinimum?: number; 
  public get validationMinimum() {
    return this.getNumberAttribute('validation_minimum');
  }
  public set validationMinimum(value: number) {
    this._validationMinimum = value;
  }
  public resetValidationMinimum() {
    this._validationMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMinimumInput() {
    return this._validationMinimum;
  }

  // validation_regex - computed: false, optional: true, required: false
  private _validationRegex?: string; 
  public get validationRegex() {
    return this.getStringAttribute('validation_regex');
  }
  public set validationRegex(value: string) {
    this._validationRegex = value;
  }
  public resetValidationRegex() {
    this._validationRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRegexInput() {
    return this._validationRegex;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      choice_set_id: cdktf.numberToTerraform(this._choiceSetId),
      content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contentTypes),
      default: cdktf.stringToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      required: cdktf.booleanToTerraform(this._required),
      type: cdktf.stringToTerraform(this._type),
      validation_maximum: cdktf.numberToTerraform(this._validationMaximum),
      validation_minimum: cdktf.numberToTerraform(this._validationMinimum),
      validation_regex: cdktf.stringToTerraform(this._validationRegex),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      choice_set_id: {
        value: cdktf.numberToHclTerraform(this._choiceSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contentTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default: {
        value: cdktf.stringToHclTerraform(this._default),
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
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_maximum: {
        value: cdktf.numberToHclTerraform(this._validationMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validation_minimum: {
        value: cdktf.numberToHclTerraform(this._validationMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validation_regex: {
        value: cdktf.stringToHclTerraform(this._validationRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
