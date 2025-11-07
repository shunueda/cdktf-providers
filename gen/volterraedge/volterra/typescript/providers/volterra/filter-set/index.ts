// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilterSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#annotations FilterSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#context_key FilterSet#context_key}
  */
  readonly contextKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#description FilterSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#disable FilterSet#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#id FilterSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#labels FilterSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#name FilterSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#namespace FilterSet#namespace}
  */
  readonly namespace: string;
  /**
  * filter_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#filter_fields FilterSet#filter_fields}
  */
  readonly filterFields: FilterSetFilterFields[] | cdktf.IResolvable;
}
export interface FilterSetFilterFieldsDateFieldAbsolute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#end_date FilterSet#end_date}
  */
  readonly endDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#start_date FilterSet#start_date}
  */
  readonly startDate: string;
}

export function filterSetFilterFieldsDateFieldAbsoluteToTerraform(struct?: FilterSetFilterFieldsDateFieldAbsoluteOutputReference | FilterSetFilterFieldsDateFieldAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function filterSetFilterFieldsDateFieldAbsoluteToHclTerraform(struct?: FilterSetFilterFieldsDateFieldAbsoluteOutputReference | FilterSetFilterFieldsDateFieldAbsolute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilterSetFilterFieldsDateFieldAbsoluteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterSetFilterFieldsDateFieldAbsolute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterSetFilterFieldsDateFieldAbsolute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._startDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}
export interface FilterSetFilterFieldsDateField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#relative FilterSet#relative}
  */
  readonly relative?: string;
  /**
  * absolute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#absolute FilterSet#absolute}
  */
  readonly absolute?: FilterSetFilterFieldsDateFieldAbsolute;
}

export function filterSetFilterFieldsDateFieldToTerraform(struct?: FilterSetFilterFieldsDateFieldOutputReference | FilterSetFilterFieldsDateField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
    absolute: filterSetFilterFieldsDateFieldAbsoluteToTerraform(struct!.absolute),
  }
}


export function filterSetFilterFieldsDateFieldToHclTerraform(struct?: FilterSetFilterFieldsDateFieldOutputReference | FilterSetFilterFieldsDateField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative: {
      value: cdktf.stringToHclTerraform(struct!.relative),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    absolute: {
      value: filterSetFilterFieldsDateFieldAbsoluteToHclTerraform(struct!.absolute),
      isBlock: true,
      type: "list",
      storageClassType: "FilterSetFilterFieldsDateFieldAbsoluteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilterSetFilterFieldsDateFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterSetFilterFieldsDateField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    if (this._absolute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.absolute = this._absolute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterSetFilterFieldsDateField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relative = undefined;
      this._absolute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relative = value.relative;
      this._absolute.internalValue = value.absolute;
    }
  }

  // relative - computed: false, optional: true, required: false
  private _relative?: string; 
  public get relative() {
    return this.getStringAttribute('relative');
  }
  public set relative(value: string) {
    this._relative = value;
  }
  public resetRelative() {
    this._relative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeInput() {
    return this._relative;
  }

  // absolute - computed: false, optional: true, required: false
  private _absolute = new FilterSetFilterFieldsDateFieldAbsoluteOutputReference(this, "absolute");
  public get absolute() {
    return this._absolute;
  }
  public putAbsolute(value: FilterSetFilterFieldsDateFieldAbsolute) {
    this._absolute.internalValue = value;
  }
  public resetAbsolute() {
    this._absolute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteInput() {
    return this._absolute.internalValue;
  }
}
export interface FilterSetFilterFieldsFilterExpressionField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#expression FilterSet#expression}
  */
  readonly expression: string;
}

export function filterSetFilterFieldsFilterExpressionFieldToTerraform(struct?: FilterSetFilterFieldsFilterExpressionFieldOutputReference | FilterSetFilterFieldsFilterExpressionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function filterSetFilterFieldsFilterExpressionFieldToHclTerraform(struct?: FilterSetFilterFieldsFilterExpressionFieldOutputReference | FilterSetFilterFieldsFilterExpressionField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilterSetFilterFieldsFilterExpressionFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterSetFilterFieldsFilterExpressionField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterSetFilterFieldsFilterExpressionField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface FilterSetFilterFieldsStringField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#field_values FilterSet#field_values}
  */
  readonly fieldValues: string[];
}

export function filterSetFilterFieldsStringFieldToTerraform(struct?: FilterSetFilterFieldsStringFieldOutputReference | FilterSetFilterFieldsStringField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldValues),
  }
}


export function filterSetFilterFieldsStringFieldToHclTerraform(struct?: FilterSetFilterFieldsStringFieldOutputReference | FilterSetFilterFieldsStringField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilterSetFilterFieldsStringFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FilterSetFilterFieldsStringField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValues = this._fieldValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterSetFilterFieldsStringField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldValues = value.fieldValues;
    }
  }

  // field_values - computed: false, optional: false, required: true
  private _fieldValues?: string[]; 
  public get fieldValues() {
    return this.getListAttribute('field_values');
  }
  public set fieldValues(value: string[]) {
    this._fieldValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValuesInput() {
    return this._fieldValues;
  }
}
export interface FilterSetFilterFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#field_id FilterSet#field_id}
  */
  readonly fieldId: string;
  /**
  * date_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#date_field FilterSet#date_field}
  */
  readonly dateField?: FilterSetFilterFieldsDateField;
  /**
  * filter_expression_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#filter_expression_field FilterSet#filter_expression_field}
  */
  readonly filterExpressionField?: FilterSetFilterFieldsFilterExpressionField;
  /**
  * string_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#string_field FilterSet#string_field}
  */
  readonly stringField?: FilterSetFilterFieldsStringField;
}

export function filterSetFilterFieldsToTerraform(struct?: FilterSetFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    date_field: filterSetFilterFieldsDateFieldToTerraform(struct!.dateField),
    filter_expression_field: filterSetFilterFieldsFilterExpressionFieldToTerraform(struct!.filterExpressionField),
    string_field: filterSetFilterFieldsStringFieldToTerraform(struct!.stringField),
  }
}


export function filterSetFilterFieldsToHclTerraform(struct?: FilterSetFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_id: {
      value: cdktf.stringToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_field: {
      value: filterSetFilterFieldsDateFieldToHclTerraform(struct!.dateField),
      isBlock: true,
      type: "list",
      storageClassType: "FilterSetFilterFieldsDateFieldList",
    },
    filter_expression_field: {
      value: filterSetFilterFieldsFilterExpressionFieldToHclTerraform(struct!.filterExpressionField),
      isBlock: true,
      type: "list",
      storageClassType: "FilterSetFilterFieldsFilterExpressionFieldList",
    },
    string_field: {
      value: filterSetFilterFieldsStringFieldToHclTerraform(struct!.stringField),
      isBlock: true,
      type: "list",
      storageClassType: "FilterSetFilterFieldsStringFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilterSetFilterFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilterSetFilterFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._dateField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateField = this._dateField?.internalValue;
    }
    if (this._filterExpressionField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpressionField = this._filterExpressionField?.internalValue;
    }
    if (this._stringField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringField = this._stringField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilterSetFilterFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
      this._dateField.internalValue = undefined;
      this._filterExpressionField.internalValue = undefined;
      this._stringField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
      this._dateField.internalValue = value.dateField;
      this._filterExpressionField.internalValue = value.filterExpressionField;
      this._stringField.internalValue = value.stringField;
    }
  }

  // field_id - computed: false, optional: false, required: true
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }

  // date_field - computed: false, optional: true, required: false
  private _dateField = new FilterSetFilterFieldsDateFieldOutputReference(this, "date_field");
  public get dateField() {
    return this._dateField;
  }
  public putDateField(value: FilterSetFilterFieldsDateField) {
    this._dateField.internalValue = value;
  }
  public resetDateField() {
    this._dateField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldInput() {
    return this._dateField.internalValue;
  }

  // filter_expression_field - computed: false, optional: true, required: false
  private _filterExpressionField = new FilterSetFilterFieldsFilterExpressionFieldOutputReference(this, "filter_expression_field");
  public get filterExpressionField() {
    return this._filterExpressionField;
  }
  public putFilterExpressionField(value: FilterSetFilterFieldsFilterExpressionField) {
    this._filterExpressionField.internalValue = value;
  }
  public resetFilterExpressionField() {
    this._filterExpressionField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionFieldInput() {
    return this._filterExpressionField.internalValue;
  }

  // string_field - computed: false, optional: true, required: false
  private _stringField = new FilterSetFilterFieldsStringFieldOutputReference(this, "string_field");
  public get stringField() {
    return this._stringField;
  }
  public putStringField(value: FilterSetFilterFieldsStringField) {
    this._stringField.internalValue = value;
  }
  public resetStringField() {
    this._stringField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFieldInput() {
    return this._stringField.internalValue;
  }
}

export class FilterSetFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : FilterSetFilterFields[] | cdktf.IResolvable

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
  public get(index: number): FilterSetFilterFieldsOutputReference {
    return new FilterSetFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set volterra_filter_set}
*/
export class FilterSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_filter_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FilterSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FilterSet to import
  * @param importFromId The id of the existing FilterSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FilterSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_filter_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/filter_set volterra_filter_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilterSetConfig
  */
  public constructor(scope: Construct, id: string, config: FilterSetConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_filter_set',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._contextKey = config.contextKey;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._filterFields.internalValue = config.filterFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // context_key - computed: false, optional: false, required: true
  private _contextKey?: string; 
  public get contextKey() {
    return this.getStringAttribute('context_key');
  }
  public set contextKey(value: string) {
    this._contextKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextKeyInput() {
    return this._contextKey;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // filter_fields - computed: false, optional: false, required: true
  private _filterFields = new FilterSetFilterFieldsList(this, "filter_fields", false);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: FilterSetFilterFields[] | cdktf.IResolvable) {
    this._filterFields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFieldsInput() {
    return this._filterFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      context_key: cdktf.stringToTerraform(this._contextKey),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      filter_fields: cdktf.listMapper(filterSetFilterFieldsToTerraform, true)(this._filterFields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      context_key: {
        value: cdktf.stringToHclTerraform(this._contextKey),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_fields: {
        value: cdktf.listMapperHcl(filterSetFilterFieldsToHclTerraform, true)(this._filterFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FilterSetFilterFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
