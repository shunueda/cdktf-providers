// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosSmartfolderPersonalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#filters DataNiosSmartfolderPersonal#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#max_results DataNiosSmartfolderPersonal#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#paging DataNiosSmartfolderPersonal#paging}
  */
  readonly paging?: number;
}
export interface DataNiosSmartfolderPersonalResultGroupBys {
  /**
  * Determines whether the grouping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#enable_grouping DataNiosSmartfolderPersonal#enable_grouping}
  */
  readonly enableGrouping?: boolean | cdktf.IResolvable;
  /**
  * The name of the Smart Folder grouping attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#value DataNiosSmartfolderPersonal#value}
  */
  readonly value: string;
  /**
  * The type of the Smart Folder grouping attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#value_type DataNiosSmartfolderPersonal#value_type}
  */
  readonly valueType?: string;
}

export function dataNiosSmartfolderPersonalResultGroupBysToTerraform(struct?: DataNiosSmartfolderPersonalResultGroupBys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_grouping: cdktf.booleanToTerraform(struct!.enableGrouping),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function dataNiosSmartfolderPersonalResultGroupBysToHclTerraform(struct?: DataNiosSmartfolderPersonalResultGroupBys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_grouping: {
      value: cdktf.booleanToHclTerraform(struct!.enableGrouping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSmartfolderPersonalResultGroupBysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSmartfolderPersonalResultGroupBys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGrouping !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGrouping = this._enableGrouping;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSmartfolderPersonalResultGroupBys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableGrouping = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableGrouping = value.enableGrouping;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // enable_grouping - computed: true, optional: true, required: false
  private _enableGrouping?: boolean | cdktf.IResolvable; 
  public get enableGrouping() {
    return this.getBooleanAttribute('enable_grouping');
  }
  public set enableGrouping(value: boolean | cdktf.IResolvable) {
    this._enableGrouping = value;
  }
  public resetEnableGrouping() {
    this._enableGrouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGroupingInput() {
    return this._enableGrouping;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: true, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class DataNiosSmartfolderPersonalResultGroupBysList extends cdktf.ComplexList {
  public internalValue? : DataNiosSmartfolderPersonalResultGroupBys[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSmartfolderPersonalResultGroupBysOutputReference {
    return new DataNiosSmartfolderPersonalResultGroupBysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosSmartfolderPersonalResultQueryItemsValue {
  /**
  * The boolean value of the Smart Folder query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#value_boolean DataNiosSmartfolderPersonal#value_boolean}
  */
  readonly valueBoolean?: boolean | cdktf.IResolvable;
  /**
  * The timestamp value of the Smart Folder query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#value_date DataNiosSmartfolderPersonal#value_date}
  */
  readonly valueDate?: string;
  /**
  * The integer value of the Smart Folder query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#value_integer DataNiosSmartfolderPersonal#value_integer}
  */
  readonly valueInteger?: number;
  /**
  * The string value of the Smart Folder query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#value_string DataNiosSmartfolderPersonal#value_string}
  */
  readonly valueString?: string;
}

export function dataNiosSmartfolderPersonalResultQueryItemsValueToTerraform(struct?: DataNiosSmartfolderPersonalResultQueryItemsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_boolean: cdktf.booleanToTerraform(struct!.valueBoolean),
    value_date: cdktf.stringToTerraform(struct!.valueDate),
    value_integer: cdktf.numberToTerraform(struct!.valueInteger),
    value_string: cdktf.stringToTerraform(struct!.valueString),
  }
}


export function dataNiosSmartfolderPersonalResultQueryItemsValueToHclTerraform(struct?: DataNiosSmartfolderPersonalResultQueryItemsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_boolean: {
      value: cdktf.booleanToHclTerraform(struct!.valueBoolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_date: {
      value: cdktf.stringToHclTerraform(struct!.valueDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_integer: {
      value: cdktf.numberToHclTerraform(struct!.valueInteger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value_string: {
      value: cdktf.stringToHclTerraform(struct!.valueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSmartfolderPersonalResultQueryItemsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSmartfolderPersonalResultQueryItemsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueBoolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueBoolean = this._valueBoolean;
    }
    if (this._valueDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueDate = this._valueDate;
    }
    if (this._valueInteger !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueInteger = this._valueInteger;
    }
    if (this._valueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueString = this._valueString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSmartfolderPersonalResultQueryItemsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueBoolean = undefined;
      this._valueDate = undefined;
      this._valueInteger = undefined;
      this._valueString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueBoolean = value.valueBoolean;
      this._valueDate = value.valueDate;
      this._valueInteger = value.valueInteger;
      this._valueString = value.valueString;
    }
  }

  // value_boolean - computed: true, optional: true, required: false
  private _valueBoolean?: boolean | cdktf.IResolvable; 
  public get valueBoolean() {
    return this.getBooleanAttribute('value_boolean');
  }
  public set valueBoolean(value: boolean | cdktf.IResolvable) {
    this._valueBoolean = value;
  }
  public resetValueBoolean() {
    this._valueBoolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueBooleanInput() {
    return this._valueBoolean;
  }

  // value_date - computed: true, optional: true, required: false
  private _valueDate?: string; 
  public get valueDate() {
    return this.getStringAttribute('value_date');
  }
  public set valueDate(value: string) {
    this._valueDate = value;
  }
  public resetValueDate() {
    this._valueDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueDateInput() {
    return this._valueDate;
  }

  // value_integer - computed: true, optional: true, required: false
  private _valueInteger?: number; 
  public get valueInteger() {
    return this.getNumberAttribute('value_integer');
  }
  public set valueInteger(value: number) {
    this._valueInteger = value;
  }
  public resetValueInteger() {
    this._valueInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueIntegerInput() {
    return this._valueInteger;
  }

  // value_string - computed: true, optional: true, required: false
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  public resetValueString() {
    this._valueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }
}
export interface DataNiosSmartfolderPersonalResultQueryItems {
  /**
  * The Smart Folder query field type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#field_type DataNiosSmartfolderPersonal#field_type}
  */
  readonly fieldType?: string;
  /**
  * The Smart Folder query name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#name DataNiosSmartfolderPersonal#name}
  */
  readonly name?: string;
  /**
  * Determines whether the query operator should match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#op_match DataNiosSmartfolderPersonal#op_match}
  */
  readonly opMatch?: boolean | cdktf.IResolvable;
  /**
  * The Smart Folder operator used in query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#operator DataNiosSmartfolderPersonal#operator}
  */
  readonly operator?: string;
  /**
  * The Smart Folder query value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#value DataNiosSmartfolderPersonal#value}
  */
  readonly value?: DataNiosSmartfolderPersonalResultQueryItemsValue;
  /**
  * The Smart Folder query value type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#value_type DataNiosSmartfolderPersonal#value_type}
  */
  readonly valueType?: string;
}

export function dataNiosSmartfolderPersonalResultQueryItemsToTerraform(struct?: DataNiosSmartfolderPersonalResultQueryItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    name: cdktf.stringToTerraform(struct!.name),
    op_match: cdktf.booleanToTerraform(struct!.opMatch),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: dataNiosSmartfolderPersonalResultQueryItemsValueToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function dataNiosSmartfolderPersonalResultQueryItemsToHclTerraform(struct?: DataNiosSmartfolderPersonalResultQueryItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op_match: {
      value: cdktf.booleanToHclTerraform(struct!.opMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: dataNiosSmartfolderPersonalResultQueryItemsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSmartfolderPersonalResultQueryItemsValue",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSmartfolderPersonalResultQueryItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSmartfolderPersonalResultQueryItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._opMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.opMatch = this._opMatch;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSmartfolderPersonalResultQueryItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldType = undefined;
      this._name = undefined;
      this._opMatch = undefined;
      this._operator = undefined;
      this._value.internalValue = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldType = value.fieldType;
      this._name = value.name;
      this._opMatch = value.opMatch;
      this._operator = value.operator;
      this._value.internalValue = value.value;
      this._valueType = value.valueType;
    }
  }

  // field_type - computed: true, optional: true, required: false
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  public resetFieldType() {
    this._fieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // op_match - computed: true, optional: true, required: false
  private _opMatch?: boolean | cdktf.IResolvable; 
  public get opMatch() {
    return this.getBooleanAttribute('op_match');
  }
  public set opMatch(value: boolean | cdktf.IResolvable) {
    this._opMatch = value;
  }
  public resetOpMatch() {
    this._opMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opMatchInput() {
    return this._opMatch;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
  private _value = new DataNiosSmartfolderPersonalResultQueryItemsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataNiosSmartfolderPersonalResultQueryItemsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // value_type - computed: true, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class DataNiosSmartfolderPersonalResultQueryItemsList extends cdktf.ComplexList {
  public internalValue? : DataNiosSmartfolderPersonalResultQueryItems[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSmartfolderPersonalResultQueryItemsOutputReference {
    return new DataNiosSmartfolderPersonalResultQueryItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosSmartfolderPersonalResult {
  /**
  * The personal Smart Folder descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#comment DataNiosSmartfolderPersonal#comment}
  */
  readonly comment?: string;
  /**
  * The personal Smart Folder groupping rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#group_bys DataNiosSmartfolderPersonal#group_bys}
  */
  readonly groupBys?: DataNiosSmartfolderPersonalResultGroupBys[] | cdktf.IResolvable;
  /**
  * The personal Smart Folder name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#name DataNiosSmartfolderPersonal#name}
  */
  readonly name: string;
  /**
  * The personal Smart Folder filter queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#query_items DataNiosSmartfolderPersonal#query_items}
  */
  readonly queryItems?: DataNiosSmartfolderPersonalResultQueryItems[] | cdktf.IResolvable;
}

export function dataNiosSmartfolderPersonalResultToTerraform(struct?: DataNiosSmartfolderPersonalResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    group_bys: cdktf.listMapper(dataNiosSmartfolderPersonalResultGroupBysToTerraform, false)(struct!.groupBys),
    name: cdktf.stringToTerraform(struct!.name),
    query_items: cdktf.listMapper(dataNiosSmartfolderPersonalResultQueryItemsToTerraform, false)(struct!.queryItems),
  }
}


export function dataNiosSmartfolderPersonalResultToHclTerraform(struct?: DataNiosSmartfolderPersonalResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_bys: {
      value: cdktf.listMapperHcl(dataNiosSmartfolderPersonalResultGroupBysToHclTerraform, false)(struct!.groupBys),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosSmartfolderPersonalResultGroupBysList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_items: {
      value: cdktf.listMapperHcl(dataNiosSmartfolderPersonalResultQueryItemsToHclTerraform, false)(struct!.queryItems),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosSmartfolderPersonalResultQueryItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSmartfolderPersonalResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSmartfolderPersonalResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._groupBys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBys = this._groupBys?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryItems = this._queryItems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSmartfolderPersonalResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._groupBys.internalValue = undefined;
      this._name = undefined;
      this._queryItems.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._groupBys.internalValue = value.groupBys;
      this._name = value.name;
      this._queryItems.internalValue = value.queryItems;
    }
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

  // group_bys - computed: true, optional: true, required: false
  private _groupBys = new DataNiosSmartfolderPersonalResultGroupBysList(this, "group_bys", false);
  public get groupBys() {
    return this._groupBys;
  }
  public putGroupBys(value: DataNiosSmartfolderPersonalResultGroupBys[] | cdktf.IResolvable) {
    this._groupBys.internalValue = value;
  }
  public resetGroupBys() {
    this._groupBys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBysInput() {
    return this._groupBys.internalValue;
  }

  // is_shortcut - computed: true, optional: false, required: false
  public get isShortcut() {
    return this.getBooleanAttribute('is_shortcut');
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

  // query_items - computed: true, optional: true, required: false
  private _queryItems = new DataNiosSmartfolderPersonalResultQueryItemsList(this, "query_items", false);
  public get queryItems() {
    return this._queryItems;
  }
  public putQueryItems(value: DataNiosSmartfolderPersonalResultQueryItems[] | cdktf.IResolvable) {
    this._queryItems.internalValue = value;
  }
  public resetQueryItems() {
    this._queryItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryItemsInput() {
    return this._queryItems.internalValue;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }
}

export class DataNiosSmartfolderPersonalResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosSmartfolderPersonalResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSmartfolderPersonalResultOutputReference {
    return new DataNiosSmartfolderPersonalResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal nios_smartfolder_personal}
*/
export class DataNiosSmartfolderPersonal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_smartfolder_personal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosSmartfolderPersonal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosSmartfolderPersonal to import
  * @param importFromId The id of the existing DataNiosSmartfolderPersonal that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosSmartfolderPersonal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_smartfolder_personal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/smartfolder_personal nios_smartfolder_personal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosSmartfolderPersonalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosSmartfolderPersonalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_smartfolder_personal',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
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
  private _result = new DataNiosSmartfolderPersonalResultList(this, "result", false);
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
