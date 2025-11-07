// https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtrasCustomFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the extras_custom_field_choice_setto use for this multiselect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#choice_set_name ExtrasCustomField#choice_set_name}
  */
  readonly choiceSetName?: string;
  /**
  * Array of content types this field should be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#content_types ExtrasCustomField#content_types}
  */
  readonly contentTypes: string[];
  /**
  * ID of the custom field choices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#custom_fied_choices_id ExtrasCustomField#custom_fied_choices_id}
  */
  readonly customFiedChoicesId?: number;
  /**
  * The default value for this custom field. This value must be valid Json. Strings, List and Dicts should be wrapped in jsonencode()
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#default ExtrasCustomField#default}
  */
  readonly default?: string;
  /**
  * The description of this custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#description ExtrasCustomField#description}
  */
  readonly description?: string;
  /**
  * The filter logic for this custom field. Allowed values: "loose" (default), "exact", "disabled"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#filter_logic ExtrasCustomField#filter_logic}
  */
  readonly filterLogic?: string;
  /**
  * Custom fields within the same group will be displayed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#group_name ExtrasCustomField#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#id ExtrasCustomField#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the field as displayed to users (if not provided, the field's name will be used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#label ExtrasCustomField#label}
  */
  readonly label?: string;
  /**
  * The name of this custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#name ExtrasCustomField#name}
  */
  readonly name: string;
  /**
  * The object type for this custom field for object/multiobject fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#object_type ExtrasCustomField#object_type}
  */
  readonly objectType?: string;
  /**
  * If true, this field is required when creating new objects or editing an existing object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#required ExtrasCustomField#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Type of the custom field (text, longtext, integer, boolean, url, json, select, multiselect, object, multiobject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#type ExtrasCustomField#type}
  */
  readonly type: string;
  /**
  * The filter logic for this custom field. Allowed values: "yes" (default), "no", "hidden"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#ui_editable ExtrasCustomField#ui_editable}
  */
  readonly uiEditable?: string;
  /**
  * The filter logic for this custom field. Allowed values: "always" (default), "if-set", "hidden"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#ui_visibility ExtrasCustomField#ui_visibility}
  */
  readonly uiVisibility?: string;
  /**
  * Maximum allowed value (for numeric fields)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#validation_maximum ExtrasCustomField#validation_maximum}
  */
  readonly validationMaximum?: number;
  /**
  * Minimum allowed value (for numeric fields)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#validation_minimum ExtrasCustomField#validation_minimum}
  */
  readonly validationMinimum?: number;
  /**
  * Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#validation_regex ExtrasCustomField#validation_regex}
  */
  readonly validationRegex?: string;
  /**
  * Fields with higher weights appear lower in a form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#weight ExtrasCustomField#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field netbox_extras_custom_field}
*/
export class ExtrasCustomField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_extras_custom_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtrasCustomField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtrasCustomField to import
  * @param importFromId The id of the existing ExtrasCustomField that should be imported. Refer to the {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtrasCustomField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_extras_custom_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/extras_custom_field netbox_extras_custom_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtrasCustomFieldConfig
  */
  public constructor(scope: Construct, id: string, config: ExtrasCustomFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_extras_custom_field',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '8.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._choiceSetName = config.choiceSetName;
    this._contentTypes = config.contentTypes;
    this._customFiedChoicesId = config.customFiedChoicesId;
    this._default = config.default;
    this._description = config.description;
    this._filterLogic = config.filterLogic;
    this._groupName = config.groupName;
    this._id = config.id;
    this._label = config.label;
    this._name = config.name;
    this._objectType = config.objectType;
    this._required = config.required;
    this._type = config.type;
    this._uiEditable = config.uiEditable;
    this._uiVisibility = config.uiVisibility;
    this._validationMaximum = config.validationMaximum;
    this._validationMinimum = config.validationMinimum;
    this._validationRegex = config.validationRegex;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // choice_set_name - computed: false, optional: true, required: false
  private _choiceSetName?: string; 
  public get choiceSetName() {
    return this.getStringAttribute('choice_set_name');
  }
  public set choiceSetName(value: string) {
    this._choiceSetName = value;
  }
  public resetChoiceSetName() {
    this._choiceSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choiceSetNameInput() {
    return this._choiceSetName;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // custom_fied_choices_id - computed: false, optional: true, required: false
  private _customFiedChoicesId?: number; 
  public get customFiedChoicesId() {
    return this.getNumberAttribute('custom_fied_choices_id');
  }
  public set customFiedChoicesId(value: number) {
    this._customFiedChoicesId = value;
  }
  public resetCustomFiedChoicesId() {
    this._customFiedChoicesId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFiedChoicesIdInput() {
    return this._customFiedChoicesId;
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
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

  // filter_logic - computed: false, optional: true, required: false
  private _filterLogic?: string; 
  public get filterLogic() {
    return this.getStringAttribute('filter_logic');
  }
  public set filterLogic(value: string) {
    this._filterLogic = value;
  }
  public resetFilterLogic() {
    this._filterLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLogicInput() {
    return this._filterLogic;
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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

  // ui_editable - computed: false, optional: true, required: false
  private _uiEditable?: string; 
  public get uiEditable() {
    return this.getStringAttribute('ui_editable');
  }
  public set uiEditable(value: string) {
    this._uiEditable = value;
  }
  public resetUiEditable() {
    this._uiEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiEditableInput() {
    return this._uiEditable;
  }

  // ui_visibility - computed: false, optional: true, required: false
  private _uiVisibility?: string; 
  public get uiVisibility() {
    return this.getStringAttribute('ui_visibility');
  }
  public set uiVisibility(value: string) {
    this._uiVisibility = value;
  }
  public resetUiVisibility() {
    this._uiVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiVisibilityInput() {
    return this._uiVisibility;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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
      choice_set_name: cdktf.stringToTerraform(this._choiceSetName),
      content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contentTypes),
      custom_fied_choices_id: cdktf.numberToTerraform(this._customFiedChoicesId),
      default: cdktf.stringToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      filter_logic: cdktf.stringToTerraform(this._filterLogic),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      object_type: cdktf.stringToTerraform(this._objectType),
      required: cdktf.booleanToTerraform(this._required),
      type: cdktf.stringToTerraform(this._type),
      ui_editable: cdktf.stringToTerraform(this._uiEditable),
      ui_visibility: cdktf.stringToTerraform(this._uiVisibility),
      validation_maximum: cdktf.numberToTerraform(this._validationMaximum),
      validation_minimum: cdktf.numberToTerraform(this._validationMinimum),
      validation_regex: cdktf.stringToTerraform(this._validationRegex),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      choice_set_name: {
        value: cdktf.stringToHclTerraform(this._choiceSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contentTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_fied_choices_id: {
        value: cdktf.numberToHclTerraform(this._customFiedChoicesId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      filter_logic: {
        value: cdktf.stringToHclTerraform(this._filterLogic),
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
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
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
      ui_editable: {
        value: cdktf.stringToHclTerraform(this._uiEditable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ui_visibility: {
        value: cdktf.stringToHclTerraform(this._uiVisibility),
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
