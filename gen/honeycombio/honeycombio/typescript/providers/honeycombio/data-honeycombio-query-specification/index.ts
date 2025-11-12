// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHoneycombioQuerySpecificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of fields to group results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#breakdowns DataHoneycombioQuerySpecification#breakdowns}
  */
  readonly breakdowns?: string[];
  /**
  * The time offset for comparison queries, in seconds. Used to compare current time range data with data from a previous time period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#compare_time_offset DataHoneycombioQuerySpecification#compare_time_offset}
  */
  readonly compareTimeOffset?: number;
  /**
  * The absolute end time of the query's time range, in seconds since the Unix epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#end_time DataHoneycombioQuerySpecification#end_time}
  */
  readonly endTime?: number;
  /**
  * How to combine multiple filters. Defaults to "AND".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#filter_combination DataHoneycombioQuerySpecification#filter_combination}
  */
  readonly filterCombination?: string;
  /**
  * The time resolution of the query's graph, in seconds. Valid values must be in between the query's time range at maximum, and /1000 at minimum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#granularity DataHoneycombioQuerySpecification#granularity}
  */
  readonly granularity?: number;
  /**
  * The maximum number of results to return. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#limit DataHoneycombioQuerySpecification#limit}
  */
  readonly limit?: number;
  /**
  * The absolute start time of the query's time range, in seconds since the Unix epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#start_time DataHoneycombioQuerySpecification#start_time}
  */
  readonly startTime?: number;
  /**
  * The time range of the query, in seconds. Defaults to 7200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#time_range DataHoneycombioQuerySpecification#time_range}
  */
  readonly timeRange?: number;
  /**
  * calculated_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#calculated_field DataHoneycombioQuerySpecification#calculated_field}
  */
  readonly calculatedField?: DataHoneycombioQuerySpecificationCalculatedField[] | cdktf.IResolvable;
  /**
  * calculation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#calculation DataHoneycombioQuerySpecification#calculation}
  */
  readonly calculation?: DataHoneycombioQuerySpecificationCalculation[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#filter DataHoneycombioQuerySpecification#filter}
  */
  readonly filter?: DataHoneycombioQuerySpecificationFilter[] | cdktf.IResolvable;
  /**
  * having block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#having DataHoneycombioQuerySpecification#having}
  */
  readonly having?: DataHoneycombioQuerySpecificationHaving[] | cdktf.IResolvable;
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#order DataHoneycombioQuerySpecification#order}
  */
  readonly order?: DataHoneycombioQuerySpecificationOrder[] | cdktf.IResolvable;
}
export interface DataHoneycombioQuerySpecificationCalculatedField {
  /**
  * The formula to use for the Calculated Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#expression DataHoneycombioQuerySpecification#expression}
  */
  readonly expression: string;
  /**
  * The name of the Calculated Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#name DataHoneycombioQuerySpecification#name}
  */
  readonly name: string;
}

export function dataHoneycombioQuerySpecificationCalculatedFieldToTerraform(struct?: DataHoneycombioQuerySpecificationCalculatedField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataHoneycombioQuerySpecificationCalculatedFieldToHclTerraform(struct?: DataHoneycombioQuerySpecificationCalculatedField | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHoneycombioQuerySpecificationCalculatedFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHoneycombioQuerySpecificationCalculatedField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioQuerySpecificationCalculatedField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
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
}

export class DataHoneycombioQuerySpecificationCalculatedFieldList extends cdktf.ComplexList {
  public internalValue? : DataHoneycombioQuerySpecificationCalculatedField[] | cdktf.IResolvable

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
  public get(index: number): DataHoneycombioQuerySpecificationCalculatedFieldOutputReference {
    return new DataHoneycombioQuerySpecificationCalculatedFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHoneycombioQuerySpecificationCalculation {
  /**
  * The column to apply the operator on. Not allowed with "COUNT" or "CONCURRENCY", required for all other operators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#column DataHoneycombioQuerySpecification#column}
  */
  readonly column?: string;
  /**
  * The operatior to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#op DataHoneycombioQuerySpecification#op}
  */
  readonly op: string;
}

export function dataHoneycombioQuerySpecificationCalculationToTerraform(struct?: DataHoneycombioQuerySpecificationCalculation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    op: cdktf.stringToTerraform(struct!.op),
  }
}


export function dataHoneycombioQuerySpecificationCalculationToHclTerraform(struct?: DataHoneycombioQuerySpecificationCalculation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHoneycombioQuerySpecificationCalculationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHoneycombioQuerySpecificationCalculation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioQuerySpecificationCalculation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._op = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._op = value.op;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }
}

export class DataHoneycombioQuerySpecificationCalculationList extends cdktf.ComplexList {
  public internalValue? : DataHoneycombioQuerySpecificationCalculation[] | cdktf.IResolvable

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
  public get(index: number): DataHoneycombioQuerySpecificationCalculationOutputReference {
    return new DataHoneycombioQuerySpecificationCalculationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHoneycombioQuerySpecificationFilter {
  /**
  * The column to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#column DataHoneycombioQuerySpecification#column}
  */
  readonly column: string;
  /**
  * The operator to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#op DataHoneycombioQuerySpecification#op}
  */
  readonly op: string;
  /**
  * The value used for the filter. Not needed if op is "exists" or "not-exists".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#value DataHoneycombioQuerySpecification#value}
  */
  readonly value?: string;
}

export function dataHoneycombioQuerySpecificationFilterToTerraform(struct?: DataHoneycombioQuerySpecificationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataHoneycombioQuerySpecificationFilterToHclTerraform(struct?: DataHoneycombioQuerySpecificationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataHoneycombioQuerySpecificationFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHoneycombioQuerySpecificationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioQuerySpecificationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: true, required: false
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

export class DataHoneycombioQuerySpecificationFilterList extends cdktf.ComplexList {
  public internalValue? : DataHoneycombioQuerySpecificationFilter[] | cdktf.IResolvable

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
  public get(index: number): DataHoneycombioQuerySpecificationFilterOutputReference {
    return new DataHoneycombioQuerySpecificationFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHoneycombioQuerySpecificationHaving {
  /**
  * The operator to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#calculate_op DataHoneycombioQuerySpecification#calculate_op}
  */
  readonly calculateOp: string;
  /**
  * The column to filter on. Not allowed with "COUNT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#column DataHoneycombioQuerySpecification#column}
  */
  readonly column?: string;
  /**
  * The operator to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#op DataHoneycombioQuerySpecification#op}
  */
  readonly op: string;
  /**
  * The value used for the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#value DataHoneycombioQuerySpecification#value}
  */
  readonly value: number;
}

export function dataHoneycombioQuerySpecificationHavingToTerraform(struct?: DataHoneycombioQuerySpecificationHaving | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculate_op: cdktf.stringToTerraform(struct!.calculateOp),
    column: cdktf.stringToTerraform(struct!.column),
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataHoneycombioQuerySpecificationHavingToHclTerraform(struct?: DataHoneycombioQuerySpecificationHaving | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calculate_op: {
      value: cdktf.stringToHclTerraform(struct!.calculateOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHoneycombioQuerySpecificationHavingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHoneycombioQuerySpecificationHaving | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calculateOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculateOp = this._calculateOp;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioQuerySpecificationHaving | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calculateOp = undefined;
      this._column = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calculateOp = value.calculateOp;
      this._column = value.column;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // calculate_op - computed: false, optional: false, required: true
  private _calculateOp?: string; 
  public get calculateOp() {
    return this.getStringAttribute('calculate_op');
  }
  public set calculateOp(value: string) {
    this._calculateOp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get calculateOpInput() {
    return this._calculateOp;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataHoneycombioQuerySpecificationHavingList extends cdktf.ComplexList {
  public internalValue? : DataHoneycombioQuerySpecificationHaving[] | cdktf.IResolvable

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
  public get(index: number): DataHoneycombioQuerySpecificationHavingOutputReference {
    return new DataHoneycombioQuerySpecificationHavingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHoneycombioQuerySpecificationOrder {
  /**
  * Either a column present in "breakdown" or a column that "op" applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#column DataHoneycombioQuerySpecification#column}
  */
  readonly column?: string;
  /**
  * The operator to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#op DataHoneycombioQuerySpecification#op}
  */
  readonly op?: string;
  /**
  * The sort order to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#order DataHoneycombioQuerySpecification#order}
  */
  readonly order?: string;
}

export function dataHoneycombioQuerySpecificationOrderToTerraform(struct?: DataHoneycombioQuerySpecificationOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    op: cdktf.stringToTerraform(struct!.op),
    order: cdktf.stringToTerraform(struct!.order),
  }
}


export function dataHoneycombioQuerySpecificationOrderToHclTerraform(struct?: DataHoneycombioQuerySpecificationOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHoneycombioQuerySpecificationOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHoneycombioQuerySpecificationOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHoneycombioQuerySpecificationOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._op = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._op = value.op;
      this._order = value.order;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class DataHoneycombioQuerySpecificationOrderList extends cdktf.ComplexList {
  public internalValue? : DataHoneycombioQuerySpecificationOrder[] | cdktf.IResolvable

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
  public get(index: number): DataHoneycombioQuerySpecificationOrderOutputReference {
    return new DataHoneycombioQuerySpecificationOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification honeycombio_query_specification}
*/
export class DataHoneycombioQuerySpecification extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_query_specification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHoneycombioQuerySpecification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHoneycombioQuerySpecification to import
  * @param importFromId The id of the existing DataHoneycombioQuerySpecification that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHoneycombioQuerySpecification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_query_specification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/data-sources/query_specification honeycombio_query_specification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHoneycombioQuerySpecificationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHoneycombioQuerySpecificationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_query_specification',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0',
        providerVersionConstraint: '0.42.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._breakdowns = config.breakdowns;
    this._compareTimeOffset = config.compareTimeOffset;
    this._endTime = config.endTime;
    this._filterCombination = config.filterCombination;
    this._granularity = config.granularity;
    this._limit = config.limit;
    this._startTime = config.startTime;
    this._timeRange = config.timeRange;
    this._calculatedField.internalValue = config.calculatedField;
    this._calculation.internalValue = config.calculation;
    this._filter.internalValue = config.filter;
    this._having.internalValue = config.having;
    this._order.internalValue = config.order;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // breakdowns - computed: false, optional: true, required: false
  private _breakdowns?: string[]; 
  public get breakdowns() {
    return this.getListAttribute('breakdowns');
  }
  public set breakdowns(value: string[]) {
    this._breakdowns = value;
  }
  public resetBreakdowns() {
    this._breakdowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakdownsInput() {
    return this._breakdowns;
  }

  // compare_time_offset - computed: false, optional: true, required: false
  private _compareTimeOffset?: number; 
  public get compareTimeOffset() {
    return this.getNumberAttribute('compare_time_offset');
  }
  public set compareTimeOffset(value: number) {
    this._compareTimeOffset = value;
  }
  public resetCompareTimeOffset() {
    this._compareTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareTimeOffsetInput() {
    return this._compareTimeOffset;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // filter_combination - computed: false, optional: true, required: false
  private _filterCombination?: string; 
  public get filterCombination() {
    return this.getStringAttribute('filter_combination');
  }
  public set filterCombination(value: string) {
    this._filterCombination = value;
  }
  public resetFilterCombination() {
    this._filterCombination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCombinationInput() {
    return this._filterCombination;
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity?: number; 
  public get granularity() {
    return this.getNumberAttribute('granularity');
  }
  public set granularity(value: number) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: number; 
  public get timeRange() {
    return this.getNumberAttribute('time_range');
  }
  public set timeRange(value: number) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // calculated_field - computed: false, optional: true, required: false
  private _calculatedField = new DataHoneycombioQuerySpecificationCalculatedFieldList(this, "calculated_field", false);
  public get calculatedField() {
    return this._calculatedField;
  }
  public putCalculatedField(value: DataHoneycombioQuerySpecificationCalculatedField[] | cdktf.IResolvable) {
    this._calculatedField.internalValue = value;
  }
  public resetCalculatedField() {
    this._calculatedField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatedFieldInput() {
    return this._calculatedField.internalValue;
  }

  // calculation - computed: false, optional: true, required: false
  private _calculation = new DataHoneycombioQuerySpecificationCalculationList(this, "calculation", false);
  public get calculation() {
    return this._calculation;
  }
  public putCalculation(value: DataHoneycombioQuerySpecificationCalculation[] | cdktf.IResolvable) {
    this._calculation.internalValue = value;
  }
  public resetCalculation() {
    this._calculation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculationInput() {
    return this._calculation.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataHoneycombioQuerySpecificationFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataHoneycombioQuerySpecificationFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // having - computed: false, optional: true, required: false
  private _having = new DataHoneycombioQuerySpecificationHavingList(this, "having", false);
  public get having() {
    return this._having;
  }
  public putHaving(value: DataHoneycombioQuerySpecificationHaving[] | cdktf.IResolvable) {
    this._having.internalValue = value;
  }
  public resetHaving() {
    this._having.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get havingInput() {
    return this._having.internalValue;
  }

  // order - computed: false, optional: true, required: false
  private _order = new DataHoneycombioQuerySpecificationOrderList(this, "order", false);
  public get order() {
    return this._order;
  }
  public putOrder(value: DataHoneycombioQuerySpecificationOrder[] | cdktf.IResolvable) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      breakdowns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._breakdowns),
      compare_time_offset: cdktf.numberToTerraform(this._compareTimeOffset),
      end_time: cdktf.numberToTerraform(this._endTime),
      filter_combination: cdktf.stringToTerraform(this._filterCombination),
      granularity: cdktf.numberToTerraform(this._granularity),
      limit: cdktf.numberToTerraform(this._limit),
      start_time: cdktf.numberToTerraform(this._startTime),
      time_range: cdktf.numberToTerraform(this._timeRange),
      calculated_field: cdktf.listMapper(dataHoneycombioQuerySpecificationCalculatedFieldToTerraform, true)(this._calculatedField.internalValue),
      calculation: cdktf.listMapper(dataHoneycombioQuerySpecificationCalculationToTerraform, true)(this._calculation.internalValue),
      filter: cdktf.listMapper(dataHoneycombioQuerySpecificationFilterToTerraform, true)(this._filter.internalValue),
      having: cdktf.listMapper(dataHoneycombioQuerySpecificationHavingToTerraform, true)(this._having.internalValue),
      order: cdktf.listMapper(dataHoneycombioQuerySpecificationOrderToTerraform, true)(this._order.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      breakdowns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._breakdowns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compare_time_offset: {
        value: cdktf.numberToHclTerraform(this._compareTimeOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter_combination: {
        value: cdktf.stringToHclTerraform(this._filterCombination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granularity: {
        value: cdktf.numberToHclTerraform(this._granularity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_range: {
        value: cdktf.numberToHclTerraform(this._timeRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      calculated_field: {
        value: cdktf.listMapperHcl(dataHoneycombioQuerySpecificationCalculatedFieldToHclTerraform, true)(this._calculatedField.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHoneycombioQuerySpecificationCalculatedFieldList",
      },
      calculation: {
        value: cdktf.listMapperHcl(dataHoneycombioQuerySpecificationCalculationToHclTerraform, true)(this._calculation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHoneycombioQuerySpecificationCalculationList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataHoneycombioQuerySpecificationFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHoneycombioQuerySpecificationFilterList",
      },
      having: {
        value: cdktf.listMapperHcl(dataHoneycombioQuerySpecificationHavingToHclTerraform, true)(this._having.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHoneycombioQuerySpecificationHavingList",
      },
      order: {
        value: cdktf.listMapperHcl(dataHoneycombioQuerySpecificationOrderToHclTerraform, true)(this._order.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHoneycombioQuerySpecificationOrderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
