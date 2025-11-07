// https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/value_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ValueListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the list is active. This currently has no effect, please set the value to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/value_list#is_active ValueList#is_active}
  */
  readonly isActive: boolean | cdktf.IResolvable;
  /**
  * The name of the value list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/value_list#name ValueList#name}
  */
  readonly name: string;
  /**
  * A list of number items in the value list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/value_list#value_list_items_numbers ValueList#value_list_items_numbers}
  */
  readonly valueListItemsNumbers?: number[];
  /**
  * A list of string items in the value list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/value_list#value_list_items_strings ValueList#value_list_items_strings}
  */
  readonly valueListItemsStrings?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/value_list authsignal_value_list}
*/
export class ValueList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authsignal_value_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ValueList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ValueList to import
  * @param importFromId The id of the existing ValueList that should be imported. Refer to the {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/value_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ValueList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authsignal_value_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/authsignal/authsignal/1.6.0/docs/resources/value_list authsignal_value_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ValueListConfig
  */
  public constructor(scope: Construct, id: string, config: ValueListConfig) {
    super(scope, id, {
      terraformResourceType: 'authsignal_value_list',
      terraformGeneratorMetadata: {
        providerName: 'authsignal',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isActive = config.isActive;
    this._name = config.name;
    this._valueListItemsNumbers = config.valueListItemsNumbers;
    this._valueListItemsStrings = config.valueListItemsStrings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // is_active - computed: false, optional: false, required: true
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // item_type - computed: true, optional: false, required: false
  public get itemType() {
    return this.getStringAttribute('item_type');
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

  // value_list_items_numbers - computed: false, optional: true, required: false
  private _valueListItemsNumbers?: number[]; 
  public get valueListItemsNumbers() {
    return this.getNumberListAttribute('value_list_items_numbers');
  }
  public set valueListItemsNumbers(value: number[]) {
    this._valueListItemsNumbers = value;
  }
  public resetValueListItemsNumbers() {
    this._valueListItemsNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListItemsNumbersInput() {
    return this._valueListItemsNumbers;
  }

  // value_list_items_strings - computed: false, optional: true, required: false
  private _valueListItemsStrings?: string[]; 
  public get valueListItemsStrings() {
    return this.getListAttribute('value_list_items_strings');
  }
  public set valueListItemsStrings(value: string[]) {
    this._valueListItemsStrings = value;
  }
  public resetValueListItemsStrings() {
    this._valueListItemsStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListItemsStringsInput() {
    return this._valueListItemsStrings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      value_list_items_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._valueListItemsNumbers),
      value_list_items_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valueListItemsStrings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
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
      value_list_items_numbers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._valueListItemsNumbers),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      value_list_items_strings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valueListItemsStrings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
