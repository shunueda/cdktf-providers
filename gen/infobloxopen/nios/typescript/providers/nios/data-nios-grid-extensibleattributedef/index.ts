// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosGridExtensibleattributedefConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#filters DataNiosGridExtensibleattributedef#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#max_results DataNiosGridExtensibleattributedef#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#paging DataNiosGridExtensibleattributedef#paging}
  */
  readonly paging?: number;
}
export interface DataNiosGridExtensibleattributedefResultDescendantsAction {
}

export function dataNiosGridExtensibleattributedefResultDescendantsActionToTerraform(struct?: DataNiosGridExtensibleattributedefResultDescendantsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosGridExtensibleattributedefResultDescendantsActionToHclTerraform(struct?: DataNiosGridExtensibleattributedefResultDescendantsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosGridExtensibleattributedefResultDescendantsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosGridExtensibleattributedefResultDescendantsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosGridExtensibleattributedefResultDescendantsAction | undefined) {
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
export interface DataNiosGridExtensibleattributedefResultListValues {
  /**
  * Enum value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#value DataNiosGridExtensibleattributedef#value}
  */
  readonly value?: string;
}

export function dataNiosGridExtensibleattributedefResultListValuesToTerraform(struct?: DataNiosGridExtensibleattributedefResultListValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNiosGridExtensibleattributedefResultListValuesToHclTerraform(struct?: DataNiosGridExtensibleattributedefResultListValues | cdktf.IResolvable): any {
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

export class DataNiosGridExtensibleattributedefResultListValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosGridExtensibleattributedefResultListValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosGridExtensibleattributedefResultListValues | cdktf.IResolvable | undefined) {
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

export class DataNiosGridExtensibleattributedefResultListValuesList extends cdktf.ComplexList {
  public internalValue? : DataNiosGridExtensibleattributedefResultListValues[] | cdktf.IResolvable

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
  public get(index: number): DataNiosGridExtensibleattributedefResultListValuesOutputReference {
    return new DataNiosGridExtensibleattributedefResultListValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosGridExtensibleattributedefResult {
  /**
  * The object types this extensible attribute is allowed to associate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#allowed_object_types DataNiosGridExtensibleattributedef#allowed_object_types}
  */
  readonly allowedObjectTypes?: string[];
  /**
  * Comment for the Extensible Attribute Definition; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#comment DataNiosGridExtensibleattributedef#comment}
  */
  readonly comment?: string;
  /**
  * Default value used to pre-populate the attribute value in the GUI. For email, URL, and string types, the value is a string with a maximum of 256 characters. For an integer, the value is an integer from -2147483648 through 2147483647. For a date, the value is the number of seconds that have elapsed since January 1st, 1970 UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#default_value DataNiosGridExtensibleattributedef#default_value}
  */
  readonly defaultValue?: string;
  /**
  * This field contains extensible attribute flags. Possible values: (A)udited, (C)loud API, Cloud (G)master, (I)nheritable, (L)isted, (M)andatory value, MGM (P)rivate, (R)ead Only, (S)ort enum values, Multiple (V)alues If there are two or more flags in the field, you must list them according to the order they are listed above. For example, 'CR' is a valid value for the 'flags' field because C = Cloud API is listed before R = Read only. However, the value 'RC' is invalid because the order for the 'flags' field is broken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#flags DataNiosGridExtensibleattributedef#flags}
  */
  readonly flags?: string;
  /**
  * List of Values. Applicable if the extensible attribute type is ENUM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#list_values DataNiosGridExtensibleattributedef#list_values}
  */
  readonly listValues?: DataNiosGridExtensibleattributedefResultListValues[] | cdktf.IResolvable;
  /**
  * Maximum allowed value of extensible attribute. Applicable if the extensible attribute type is INTEGER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#max DataNiosGridExtensibleattributedef#max}
  */
  readonly max?: number;
  /**
  * Minimum allowed value of extensible attribute. Applicable if the extensible attribute type is INTEGER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#min DataNiosGridExtensibleattributedef#min}
  */
  readonly min?: number;
  /**
  * The name of the Extensible Attribute Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#name DataNiosGridExtensibleattributedef#name}
  */
  readonly name: string;
  /**
  * Type for the Extensible Attribute Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#type DataNiosGridExtensibleattributedef#type}
  */
  readonly type: string;
}

export function dataNiosGridExtensibleattributedefResultToTerraform(struct?: DataNiosGridExtensibleattributedefResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_object_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedObjectTypes),
    comment: cdktf.stringToTerraform(struct!.comment),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    flags: cdktf.stringToTerraform(struct!.flags),
    list_values: cdktf.listMapper(dataNiosGridExtensibleattributedefResultListValuesToTerraform, false)(struct!.listValues),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosGridExtensibleattributedefResultToHclTerraform(struct?: DataNiosGridExtensibleattributedefResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_object_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedObjectTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flags: {
      value: cdktf.stringToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_values: {
      value: cdktf.listMapperHcl(dataNiosGridExtensibleattributedefResultListValuesToHclTerraform, false)(struct!.listValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosGridExtensibleattributedefResultListValuesList",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosGridExtensibleattributedefResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNiosGridExtensibleattributedefResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedObjectTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedObjectTypes = this._allowedObjectTypes;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._listValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listValues = this._listValues?.internalValue;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosGridExtensibleattributedefResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedObjectTypes = undefined;
      this._comment = undefined;
      this._defaultValue = undefined;
      this._flags = undefined;
      this._listValues.internalValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedObjectTypes = value.allowedObjectTypes;
      this._comment = value.comment;
      this._defaultValue = value.defaultValue;
      this._flags = value.flags;
      this._listValues.internalValue = value.listValues;
      this._max = value.max;
      this._min = value.min;
      this._name = value.name;
      this._type = value.type;
    }
  }

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
  private _descendantsAction = new DataNiosGridExtensibleattributedefResultDescendantsActionOutputReference(this, "descendants_action");
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
  private _listValues = new DataNiosGridExtensibleattributedefResultListValuesList(this, "list_values", false);
  public get listValues() {
    return this._listValues;
  }
  public putListValues(value: DataNiosGridExtensibleattributedefResultListValues[] | cdktf.IResolvable) {
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

  // name - computed: true, optional: false, required: true
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

  // type - computed: true, optional: false, required: true
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
}

export class DataNiosGridExtensibleattributedefResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosGridExtensibleattributedefResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosGridExtensibleattributedefResultOutputReference {
    return new DataNiosGridExtensibleattributedefResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef nios_grid_extensibleattributedef}
*/
export class DataNiosGridExtensibleattributedef extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_grid_extensibleattributedef";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosGridExtensibleattributedef resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosGridExtensibleattributedef to import
  * @param importFromId The id of the existing DataNiosGridExtensibleattributedef that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosGridExtensibleattributedef to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_grid_extensibleattributedef", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_extensibleattributedef nios_grid_extensibleattributedef} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosGridExtensibleattributedefConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosGridExtensibleattributedefConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_grid_extensibleattributedef',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosGridExtensibleattributedefResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
