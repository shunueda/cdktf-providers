// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFieldChoiceSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Valid values are `IATA`, `ISO_3166` and `UN_LOCODE`. At least one of `base_choices` or `extra_choices` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set#base_choices CustomFieldChoiceSet#base_choices}
  */
  readonly baseChoices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set#custom_fields CustomFieldChoiceSet#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set#description CustomFieldChoiceSet#description}
  */
  readonly description?: string;
  /**
  * This length of the inner lists must be exactly two, where the first value is the value of a choice and the second value is the label of the choice. At least one of `base_choices` or `extra_choices` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set#extra_choices CustomFieldChoiceSet#extra_choices}
  */
  readonly extraChoices?: string[][] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set#id CustomFieldChoiceSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set#name CustomFieldChoiceSet#name}
  */
  readonly name: string;
  /**
  * experimental. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set#order_alphabetically CustomFieldChoiceSet#order_alphabetically}
  */
  readonly orderAlphabetically?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set netbox_custom_field_choice_set}
*/
export class CustomFieldChoiceSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_custom_field_choice_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomFieldChoiceSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomFieldChoiceSet to import
  * @param importFromId The id of the existing CustomFieldChoiceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomFieldChoiceSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_custom_field_choice_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/custom_field_choice_set netbox_custom_field_choice_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFieldChoiceSetConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFieldChoiceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_custom_field_choice_set',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseChoices = config.baseChoices;
    this._customFields = config.customFields;
    this._description = config.description;
    this._extraChoices = config.extraChoices;
    this._id = config.id;
    this._name = config.name;
    this._orderAlphabetically = config.orderAlphabetically;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_choices - computed: false, optional: true, required: false
  private _baseChoices?: string; 
  public get baseChoices() {
    return this.getStringAttribute('base_choices');
  }
  public set baseChoices(value: string) {
    this._baseChoices = value;
  }
  public resetBaseChoices() {
    this._baseChoices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseChoicesInput() {
    return this._baseChoices;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
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

  // extra_choices - computed: false, optional: true, required: false
  private _extraChoices?: string[][] | cdktf.IResolvable; 
  public get extraChoices() {
    return this.interpolationForAttribute('extra_choices');
  }
  public set extraChoices(value: string[][] | cdktf.IResolvable) {
    this._extraChoices = value;
  }
  public resetExtraChoices() {
    this._extraChoices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraChoicesInput() {
    return this._extraChoices;
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

  // order_alphabetically - computed: false, optional: true, required: false
  private _orderAlphabetically?: boolean | cdktf.IResolvable; 
  public get orderAlphabetically() {
    return this.getBooleanAttribute('order_alphabetically');
  }
  public set orderAlphabetically(value: boolean | cdktf.IResolvable) {
    this._orderAlphabetically = value;
  }
  public resetOrderAlphabetically() {
    this._orderAlphabetically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderAlphabeticallyInput() {
    return this._orderAlphabetically;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_choices: cdktf.stringToTerraform(this._baseChoices),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      extra_choices: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(this._extraChoices),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      order_alphabetically: cdktf.booleanToTerraform(this._orderAlphabetically),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_choices: {
        value: cdktf.stringToHclTerraform(this._baseChoices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_choices: {
        value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(this._extraChoices),
        isBlock: false,
        type: "list",
        storageClassType: "stringListList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      order_alphabetically: {
        value: cdktf.booleanToHclTerraform(this._orderAlphabetically),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
