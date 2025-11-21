// https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#default_value_list CustomVariable#default_value_list}
  */
  readonly defaultValueList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#default_value_map CustomVariable#default_value_map}
  */
  readonly defaultValueMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#default_value_string CustomVariable#default_value_string}
  */
  readonly defaultValueString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#description CustomVariable#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#id CustomVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#key_validation_message CustomVariable#key_validation_message}
  */
  readonly keyValidationMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#key_validation_regex CustomVariable#key_validation_regex}
  */
  readonly keyValidationRegex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#last_updated CustomVariable#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#name CustomVariable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#owner_user_group_ids CustomVariable#owner_user_group_ids}
  */
  readonly ownerUserGroupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#owner_user_ids CustomVariable#owner_user_ids}
  */
  readonly ownerUserIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#type CustomVariable#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#value_validation_message CustomVariable#value_validation_message}
  */
  readonly valueValidationMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#value_validation_regex CustomVariable#value_validation_regex}
  */
  readonly valueValidationRegex: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable kion_custom_variable}
*/
export class CustomVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_custom_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomVariable to import
  * @param importFromId The id of the existing CustomVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_custom_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/custom_variable kion_custom_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomVariableConfig
  */
  public constructor(scope: Construct, id: string, config: CustomVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_custom_variable',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.30',
        providerVersionConstraint: '0.3.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultValueList = config.defaultValueList;
    this._defaultValueMap = config.defaultValueMap;
    this._defaultValueString = config.defaultValueString;
    this._description = config.description;
    this._id = config.id;
    this._keyValidationMessage = config.keyValidationMessage;
    this._keyValidationRegex = config.keyValidationRegex;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._ownerUserGroupIds = config.ownerUserGroupIds;
    this._ownerUserIds = config.ownerUserIds;
    this._type = config.type;
    this._valueValidationMessage = config.valueValidationMessage;
    this._valueValidationRegex = config.valueValidationRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_value_list - computed: false, optional: true, required: false
  private _defaultValueList?: string[]; 
  public get defaultValueList() {
    return this.getListAttribute('default_value_list');
  }
  public set defaultValueList(value: string[]) {
    this._defaultValueList = value;
  }
  public resetDefaultValueList() {
    this._defaultValueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueListInput() {
    return this._defaultValueList;
  }

  // default_value_map - computed: false, optional: true, required: false
  private _defaultValueMap?: { [key: string]: string }; 
  public get defaultValueMap() {
    return this.getStringMapAttribute('default_value_map');
  }
  public set defaultValueMap(value: { [key: string]: string }) {
    this._defaultValueMap = value;
  }
  public resetDefaultValueMap() {
    this._defaultValueMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueMapInput() {
    return this._defaultValueMap;
  }

  // default_value_string - computed: false, optional: true, required: false
  private _defaultValueString?: string; 
  public get defaultValueString() {
    return this.getStringAttribute('default_value_string');
  }
  public set defaultValueString(value: string) {
    this._defaultValueString = value;
  }
  public resetDefaultValueString() {
    this._defaultValueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueStringInput() {
    return this._defaultValueString;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // key_validation_message - computed: false, optional: false, required: true
  private _keyValidationMessage?: string; 
  public get keyValidationMessage() {
    return this.getStringAttribute('key_validation_message');
  }
  public set keyValidationMessage(value: string) {
    this._keyValidationMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValidationMessageInput() {
    return this._keyValidationMessage;
  }

  // key_validation_regex - computed: false, optional: false, required: true
  private _keyValidationRegex?: string; 
  public get keyValidationRegex() {
    return this.getStringAttribute('key_validation_regex');
  }
  public set keyValidationRegex(value: string) {
    this._keyValidationRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValidationRegexInput() {
    return this._keyValidationRegex;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // owner_user_group_ids - computed: false, optional: true, required: false
  private _ownerUserGroupIds?: number[]; 
  public get ownerUserGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('owner_user_group_ids')));
  }
  public set ownerUserGroupIds(value: number[]) {
    this._ownerUserGroupIds = value;
  }
  public resetOwnerUserGroupIds() {
    this._ownerUserGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserGroupIdsInput() {
    return this._ownerUserGroupIds;
  }

  // owner_user_ids - computed: false, optional: true, required: false
  private _ownerUserIds?: number[]; 
  public get ownerUserIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('owner_user_ids')));
  }
  public set ownerUserIds(value: number[]) {
    this._ownerUserIds = value;
  }
  public resetOwnerUserIds() {
    this._ownerUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserIdsInput() {
    return this._ownerUserIds;
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

  // value_validation_message - computed: false, optional: false, required: true
  private _valueValidationMessage?: string; 
  public get valueValidationMessage() {
    return this.getStringAttribute('value_validation_message');
  }
  public set valueValidationMessage(value: string) {
    this._valueValidationMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueValidationMessageInput() {
    return this._valueValidationMessage;
  }

  // value_validation_regex - computed: false, optional: false, required: true
  private _valueValidationRegex?: string; 
  public get valueValidationRegex() {
    return this.getStringAttribute('value_validation_regex');
  }
  public set valueValidationRegex(value: string) {
    this._valueValidationRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueValidationRegexInput() {
    return this._valueValidationRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultValueList),
      default_value_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultValueMap),
      default_value_string: cdktf.stringToTerraform(this._defaultValueString),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key_validation_message: cdktf.stringToTerraform(this._keyValidationMessage),
      key_validation_regex: cdktf.stringToTerraform(this._keyValidationRegex),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      owner_user_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ownerUserGroupIds),
      owner_user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ownerUserIds),
      type: cdktf.stringToTerraform(this._type),
      value_validation_message: cdktf.stringToTerraform(this._valueValidationMessage),
      value_validation_regex: cdktf.stringToTerraform(this._valueValidationRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_value_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultValueList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_value_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultValueMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      default_value_string: {
        value: cdktf.stringToHclTerraform(this._defaultValueString),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_validation_message: {
        value: cdktf.stringToHclTerraform(this._keyValidationMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_validation_regex: {
        value: cdktf.stringToHclTerraform(this._keyValidationRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
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
      owner_user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ownerUserGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      owner_user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ownerUserIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_validation_message: {
        value: cdktf.stringToHclTerraform(this._valueValidationMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_validation_regex: {
        value: cdktf.stringToHclTerraform(this._valueValidationRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
