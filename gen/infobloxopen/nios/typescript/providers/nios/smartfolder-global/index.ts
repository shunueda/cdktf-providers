// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartfolderGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The global Smart Folder descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#comment SmartfolderGlobal#comment}
  */
  readonly comment?: string;
  /**
  * Global Smart Folder grouping rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#group_bys SmartfolderGlobal#group_bys}
  */
  readonly groupBys?: SmartfolderGlobalGroupBys[] | cdktf.IResolvable;
  /**
  * The global Smart Folder name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#name SmartfolderGlobal#name}
  */
  readonly name: string;
  /**
  * The global Smart Folder filter queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#query_items SmartfolderGlobal#query_items}
  */
  readonly queryItems?: SmartfolderGlobalQueryItems[] | cdktf.IResolvable;
}
export interface SmartfolderGlobalGroupBys {
  /**
  * Determines whether the grouping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#enable_grouping SmartfolderGlobal#enable_grouping}
  */
  readonly enableGrouping?: boolean | cdktf.IResolvable;
  /**
  * The name of the Smart Folder grouping attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#value SmartfolderGlobal#value}
  */
  readonly value: string;
  /**
  * The type of the Smart Folder grouping attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#value_type SmartfolderGlobal#value_type}
  */
  readonly valueType?: string;
}

export function smartfolderGlobalGroupBysToTerraform(struct?: SmartfolderGlobalGroupBys | cdktf.IResolvable): any {
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


export function smartfolderGlobalGroupBysToHclTerraform(struct?: SmartfolderGlobalGroupBys | cdktf.IResolvable): any {
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

export class SmartfolderGlobalGroupBysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartfolderGlobalGroupBys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SmartfolderGlobalGroupBys | cdktf.IResolvable | undefined) {
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

export class SmartfolderGlobalGroupBysList extends cdktf.ComplexList {
  public internalValue? : SmartfolderGlobalGroupBys[] | cdktf.IResolvable

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
  public get(index: number): SmartfolderGlobalGroupBysOutputReference {
    return new SmartfolderGlobalGroupBysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmartfolderGlobalQueryItemsValue {
  /**
  * The boolean value of the Smart Folder query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#value_boolean SmartfolderGlobal#value_boolean}
  */
  readonly valueBoolean?: boolean | cdktf.IResolvable;
  /**
  * The timestamp value of the Smart Folder query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#value_date SmartfolderGlobal#value_date}
  */
  readonly valueDate?: string;
  /**
  * The integer value of the Smart Folder query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#value_integer SmartfolderGlobal#value_integer}
  */
  readonly valueInteger?: number;
  /**
  * The string value of the Smart Folder query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#value_string SmartfolderGlobal#value_string}
  */
  readonly valueString?: string;
}

export function smartfolderGlobalQueryItemsValueToTerraform(struct?: SmartfolderGlobalQueryItemsValue | cdktf.IResolvable): any {
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


export function smartfolderGlobalQueryItemsValueToHclTerraform(struct?: SmartfolderGlobalQueryItemsValue | cdktf.IResolvable): any {
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

export class SmartfolderGlobalQueryItemsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmartfolderGlobalQueryItemsValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SmartfolderGlobalQueryItemsValue | cdktf.IResolvable | undefined) {
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
export interface SmartfolderGlobalQueryItems {
  /**
  * The Smart Folder query field type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#field_type SmartfolderGlobal#field_type}
  */
  readonly fieldType?: string;
  /**
  * The Smart Folder query name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#name SmartfolderGlobal#name}
  */
  readonly name?: string;
  /**
  * Determines whether the query operator should match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#op_match SmartfolderGlobal#op_match}
  */
  readonly opMatch?: boolean | cdktf.IResolvable;
  /**
  * The Smart Folder operator used in query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#operator SmartfolderGlobal#operator}
  */
  readonly operator?: string;
  /**
  * The Smart Folder query value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#value SmartfolderGlobal#value}
  */
  readonly value?: SmartfolderGlobalQueryItemsValue;
  /**
  * The Smart Folder query value type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#value_type SmartfolderGlobal#value_type}
  */
  readonly valueType?: string;
}

export function smartfolderGlobalQueryItemsToTerraform(struct?: SmartfolderGlobalQueryItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    name: cdktf.stringToTerraform(struct!.name),
    op_match: cdktf.booleanToTerraform(struct!.opMatch),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: smartfolderGlobalQueryItemsValueToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function smartfolderGlobalQueryItemsToHclTerraform(struct?: SmartfolderGlobalQueryItems | cdktf.IResolvable): any {
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
      value: smartfolderGlobalQueryItemsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SmartfolderGlobalQueryItemsValue",
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

export class SmartfolderGlobalQueryItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmartfolderGlobalQueryItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SmartfolderGlobalQueryItems | cdktf.IResolvable | undefined) {
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
  private _value = new SmartfolderGlobalQueryItemsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SmartfolderGlobalQueryItemsValue) {
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

export class SmartfolderGlobalQueryItemsList extends cdktf.ComplexList {
  public internalValue? : SmartfolderGlobalQueryItems[] | cdktf.IResolvable

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
  public get(index: number): SmartfolderGlobalQueryItemsOutputReference {
    return new SmartfolderGlobalQueryItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global nios_smartfolder_global}
*/
export class SmartfolderGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_smartfolder_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartfolderGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartfolderGlobal to import
  * @param importFromId The id of the existing SmartfolderGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartfolderGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_smartfolder_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/smartfolder_global nios_smartfolder_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartfolderGlobalConfig
  */
  public constructor(scope: Construct, id: string, config: SmartfolderGlobalConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_smartfolder_global',
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
    this._comment = config.comment;
    this._groupBys.internalValue = config.groupBys;
    this._name = config.name;
    this._queryItems.internalValue = config.queryItems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _groupBys = new SmartfolderGlobalGroupBysList(this, "group_bys", false);
  public get groupBys() {
    return this._groupBys;
  }
  public putGroupBys(value: SmartfolderGlobalGroupBys[] | cdktf.IResolvable) {
    this._groupBys.internalValue = value;
  }
  public resetGroupBys() {
    this._groupBys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBysInput() {
    return this._groupBys.internalValue;
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

  // query_items - computed: true, optional: true, required: false
  private _queryItems = new SmartfolderGlobalQueryItemsList(this, "query_items", false);
  public get queryItems() {
    return this._queryItems;
  }
  public putQueryItems(value: SmartfolderGlobalQueryItems[] | cdktf.IResolvable) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      group_bys: cdktf.listMapper(smartfolderGlobalGroupBysToTerraform, false)(this._groupBys.internalValue),
      name: cdktf.stringToTerraform(this._name),
      query_items: cdktf.listMapper(smartfolderGlobalQueryItemsToTerraform, false)(this._queryItems.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_bys: {
        value: cdktf.listMapperHcl(smartfolderGlobalGroupBysToHclTerraform, false)(this._groupBys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmartfolderGlobalGroupBysList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_items: {
        value: cdktf.listMapperHcl(smartfolderGlobalQueryItemsToHclTerraform, false)(this._queryItems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmartfolderGlobalQueryItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
