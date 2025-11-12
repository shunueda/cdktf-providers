// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GridExtensibleattributedefConfig extends cdktf.TerraformMetaArguments {
  /**
  * The object types this extensible attribute is allowed to associate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#allowed_object_types GridExtensibleattributedef#allowed_object_types}
  */
  readonly allowedObjectTypes?: string[];
  /**
  * Comment for the Extensible Attribute Definition; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#comment GridExtensibleattributedef#comment}
  */
  readonly comment?: string;
  /**
  * Default value used to pre-populate the attribute value in the GUI. For email, URL, and string types, the value is a string with a maximum of 256 characters. For an integer, the value is an integer from -2147483648 through 2147483647. For a date, the value is the number of seconds that have elapsed since January 1st, 1970 UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#default_value GridExtensibleattributedef#default_value}
  */
  readonly defaultValue?: string;
  /**
  * This field contains extensible attribute flags. Possible values: (A)udited, (C)loud API, Cloud (G)master, (I)nheritable, (L)isted, (M)andatory value, MGM (P)rivate, (R)ead Only, (S)ort enum values, Multiple (V)alues If there are two or more flags in the field, you must list them according to the order they are listed above. For example, 'CR' is a valid value for the 'flags' field because C = Cloud API is listed before R = Read only. However, the value 'RC' is invalid because the order for the 'flags' field is broken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#flags GridExtensibleattributedef#flags}
  */
  readonly flags?: string;
  /**
  * List of Values. Applicable if the extensible attribute type is ENUM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#list_values GridExtensibleattributedef#list_values}
  */
  readonly listValues?: GridExtensibleattributedefListValues[] | cdktf.IResolvable;
  /**
  * Maximum allowed value of extensible attribute. Applicable if the extensible attribute type is INTEGER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#max GridExtensibleattributedef#max}
  */
  readonly max?: number;
  /**
  * Minimum allowed value of extensible attribute. Applicable if the extensible attribute type is INTEGER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#min GridExtensibleattributedef#min}
  */
  readonly min?: number;
  /**
  * The name of the Extensible Attribute Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#name GridExtensibleattributedef#name}
  */
  readonly name: string;
  /**
  * Type for the Extensible Attribute Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#type GridExtensibleattributedef#type}
  */
  readonly type: string;
}
export interface GridExtensibleattributedefDescendantsAction {
}

export function gridExtensibleattributedefDescendantsActionToTerraform(struct?: GridExtensibleattributedefDescendantsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gridExtensibleattributedefDescendantsActionToHclTerraform(struct?: GridExtensibleattributedefDescendantsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GridExtensibleattributedefDescendantsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GridExtensibleattributedefDescendantsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GridExtensibleattributedefDescendantsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option_delete_ea - computed: true, optional: false, required: false
  public get optionDeleteEa() {
    return this.getStringAttribute('option_delete_ea');
  }

  // option_with_ea - computed: true, optional: false, required: false
  public get optionWithEa() {
    return this.getStringAttribute('option_with_ea');
  }

  // option_without_ea - computed: true, optional: false, required: false
  public get optionWithoutEa() {
    return this.getStringAttribute('option_without_ea');
  }
}
export interface GridExtensibleattributedefListValues {
  /**
  * Enum value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#value GridExtensibleattributedef#value}
  */
  readonly value?: string;
}

export function gridExtensibleattributedefListValuesToTerraform(struct?: GridExtensibleattributedefListValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gridExtensibleattributedefListValuesToHclTerraform(struct?: GridExtensibleattributedefListValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GridExtensibleattributedefListValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GridExtensibleattributedefListValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GridExtensibleattributedefListValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
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
}

export class GridExtensibleattributedefListValuesList extends cdktf.ComplexList {
  public internalValue? : GridExtensibleattributedefListValues[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GridExtensibleattributedefListValuesOutputReference {
    return new GridExtensibleattributedefListValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef nios_grid_extensibleattributedef}
*/
export class GridExtensibleattributedef extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_grid_extensibleattributedef";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GridExtensibleattributedef resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GridExtensibleattributedef to import
  * @param importFromId The id of the existing GridExtensibleattributedef that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GridExtensibleattributedef to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_grid_extensibleattributedef", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/grid_extensibleattributedef nios_grid_extensibleattributedef} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GridExtensibleattributedefConfig
  */
  public constructor(scope: Construct, id: string, config: GridExtensibleattributedefConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_grid_extensibleattributedef',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedObjectTypes = config.allowedObjectTypes;
    this._comment = config.comment;
    this._defaultValue = config.defaultValue;
    this._flags = config.flags;
    this._listValues.internalValue = config.listValues;
    this._max = config.max;
    this._min = config.min;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_object_types - computed: true, optional: true, required: false
  private _allowedObjectTypes?: string[]; 
  public get allowedObjectTypes() {
    return this.getListAttribute('allowed_object_types');
  }
  public set allowedObjectTypes(value: string[]) {
    this._allowedObjectTypes = value;
  }
  public resetAllowedObjectTypes() {
    this._allowedObjectTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedObjectTypesInput() {
    return this._allowedObjectTypes;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // descendants_action - computed: true, optional: false, required: false
  private _descendantsAction = new GridExtensibleattributedefDescendantsActionOutputReference(this, "descendants_action");
  public get descendantsAction() {
    return this._descendantsAction;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string; 
  public get flags() {
    return this.getStringAttribute('flags');
  }
  public set flags(value: string) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // list_values - computed: true, optional: true, required: false
  private _listValues = new GridExtensibleattributedefListValuesList(this, "list_values", false);
  public get listValues() {
    return this._listValues;
  }
  public putListValues(value: GridExtensibleattributedefListValues[] | cdktf.IResolvable) {
    this._listValues.internalValue = value;
  }
  public resetListValues() {
    this._listValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listValuesInput() {
    return this._listValues.internalValue;
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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
      allowed_object_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedObjectTypes),
      comment: cdktf.stringToTerraform(this._comment),
      default_value: cdktf.stringToTerraform(this._defaultValue),
      flags: cdktf.stringToTerraform(this._flags),
      list_values: cdktf.listMapper(gridExtensibleattributedefListValuesToTerraform, false)(this._listValues.internalValue),
      max: cdktf.numberToTerraform(this._max),
      min: cdktf.numberToTerraform(this._min),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_object_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedObjectTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flags: {
        value: cdktf.stringToHclTerraform(this._flags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_values: {
        value: cdktf.listMapperHcl(gridExtensibleattributedefListValuesToHclTerraform, false)(this._listValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GridExtensibleattributedefListValuesList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
