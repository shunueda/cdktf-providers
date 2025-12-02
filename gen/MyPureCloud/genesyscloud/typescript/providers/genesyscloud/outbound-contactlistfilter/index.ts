// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundContactlistfilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The contact list the filter is based on. Mutually exclusive to 'contact_list_template_id', however, one of the two must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#contact_list_id OutboundContactlistfilter#contact_list_id}
  */
  readonly contactListId?: string;
  /**
  * The contact list template the filter is based on. Mutually exclusive to 'contact_list_id', however, one of the two must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#contact_list_template_id OutboundContactlistfilter#contact_list_template_id}
  */
  readonly contactListTemplateId?: string;
  /**
  * How to join clauses together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#filter_type OutboundContactlistfilter#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#id OutboundContactlistfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#name OutboundContactlistfilter#name}
  */
  readonly name: string;
  /**
  * clauses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#clauses OutboundContactlistfilter#clauses}
  */
  readonly clauses?: OutboundContactlistfilterClauses[] | cdktf.IResolvable;
}
export interface OutboundContactlistfilterClausesPredicatesVarRange {
  /**
  * A set of values that the contact data should be in. Required for the IN operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#in_set OutboundContactlistfilter#in_set}
  */
  readonly inSet?: string[];
  /**
  * The maximum value of the range. Required for the operator BETWEEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#max OutboundContactlistfilter#max}
  */
  readonly max?: string;
  /**
  * Whether or not to include the maximum in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#max_inclusive OutboundContactlistfilter#max_inclusive}
  */
  readonly maxInclusive?: boolean | cdktf.IResolvable;
  /**
  * The minimum value of the range. Required for the operator BETWEEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#min OutboundContactlistfilter#min}
  */
  readonly min?: string;
  /**
  * Whether or not to include the minimum in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#min_inclusive OutboundContactlistfilter#min_inclusive}
  */
  readonly minInclusive?: boolean | cdktf.IResolvable;
}

export function outboundContactlistfilterClausesPredicatesVarRangeToTerraform(struct?: OutboundContactlistfilterClausesPredicatesVarRangeOutputReference | OutboundContactlistfilterClausesPredicatesVarRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inSet),
    max: cdktf.stringToTerraform(struct!.max),
    max_inclusive: cdktf.booleanToTerraform(struct!.maxInclusive),
    min: cdktf.stringToTerraform(struct!.min),
    min_inclusive: cdktf.booleanToTerraform(struct!.minInclusive),
  }
}


export function outboundContactlistfilterClausesPredicatesVarRangeToHclTerraform(struct?: OutboundContactlistfilterClausesPredicatesVarRangeOutputReference | OutboundContactlistfilterClausesPredicatesVarRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inSet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_inclusive: {
      value: cdktf.booleanToHclTerraform(struct!.maxInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_inclusive: {
      value: cdktf.booleanToHclTerraform(struct!.minInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundContactlistfilterClausesPredicatesVarRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundContactlistfilterClausesPredicatesVarRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSet = this._inSet;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._maxInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInclusive = this._maxInclusive;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._minInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInclusive = this._minInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactlistfilterClausesPredicatesVarRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inSet = undefined;
      this._max = undefined;
      this._maxInclusive = undefined;
      this._min = undefined;
      this._minInclusive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inSet = value.inSet;
      this._max = value.max;
      this._maxInclusive = value.maxInclusive;
      this._min = value.min;
      this._minInclusive = value.minInclusive;
    }
  }

  // in_set - computed: false, optional: true, required: false
  private _inSet?: string[]; 
  public get inSet() {
    return this.getListAttribute('in_set');
  }
  public set inSet(value: string[]) {
    this._inSet = value;
  }
  public resetInSet() {
    this._inSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSetInput() {
    return this._inSet;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // max_inclusive - computed: false, optional: true, required: false
  private _maxInclusive?: boolean | cdktf.IResolvable; 
  public get maxInclusive() {
    return this.getBooleanAttribute('max_inclusive');
  }
  public set maxInclusive(value: boolean | cdktf.IResolvable) {
    this._maxInclusive = value;
  }
  public resetMaxInclusive() {
    this._maxInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInclusiveInput() {
    return this._maxInclusive;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // min_inclusive - computed: false, optional: true, required: false
  private _minInclusive?: boolean | cdktf.IResolvable; 
  public get minInclusive() {
    return this.getBooleanAttribute('min_inclusive');
  }
  public set minInclusive(value: boolean | cdktf.IResolvable) {
    this._minInclusive = value;
  }
  public resetMinInclusive() {
    this._minInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInclusiveInput() {
    return this._minInclusive;
  }
}
export interface OutboundContactlistfilterClausesPredicates {
  /**
  * Contact list column from the contact list filter's contact list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#column OutboundContactlistfilter#column}
  */
  readonly column?: string;
  /**
  * The type of data in the contact column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#column_type OutboundContactlistfilter#column_type}
  */
  readonly columnType?: string;
  /**
  * Inverts the result of the predicate (i.e., if the predicate returns true, inverting it will return false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#inverted OutboundContactlistfilter#inverted}
  */
  readonly inverted?: boolean | cdktf.IResolvable;
  /**
  * The operator for this contact list filter predicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#operator OutboundContactlistfilter#operator}
  */
  readonly operator: string;
  /**
  * Value with which to compare the contact's data. This could be text, a number, or a relative time. A value for relative time should follow the format PxxDTyyHzzM, where xx, yy, and zz specify the days, hours and minutes. For example, a value of P01DT08H30M corresponds to 1 day, 8 hours, and 30 minutes from now. To specify a time in the past, include a negative sign before each numeric value. For example, a value of P-01DT-08H-30M corresponds to 1 day, 8 hours, and 30 minutes in the past. You can also do things like P01DT00H-30M, which would correspond to 23 hours and 30 minutes from now (1 day - 30 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#value OutboundContactlistfilter#value}
  */
  readonly value?: string;
  /**
  * var_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#var_range OutboundContactlistfilter#var_range}
  */
  readonly varRange?: OutboundContactlistfilterClausesPredicatesVarRange;
}

export function outboundContactlistfilterClausesPredicatesToTerraform(struct?: OutboundContactlistfilterClausesPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    column_type: cdktf.stringToTerraform(struct!.columnType),
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
    var_range: outboundContactlistfilterClausesPredicatesVarRangeToTerraform(struct!.varRange),
  }
}


export function outboundContactlistfilterClausesPredicatesToHclTerraform(struct?: OutboundContactlistfilterClausesPredicates | cdktf.IResolvable): any {
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
    column_type: {
      value: cdktf.stringToHclTerraform(struct!.columnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverted: {
      value: cdktf.booleanToHclTerraform(struct!.inverted),
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    var_range: {
      value: outboundContactlistfilterClausesPredicatesVarRangeToHclTerraform(struct!.varRange),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundContactlistfilterClausesPredicatesVarRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundContactlistfilterClausesPredicatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundContactlistfilterClausesPredicates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._columnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnType = this._columnType;
    }
    if (this._inverted !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverted = this._inverted;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._varRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.varRange = this._varRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactlistfilterClausesPredicates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._columnType = undefined;
      this._inverted = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._varRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._columnType = value.columnType;
      this._inverted = value.inverted;
      this._operator = value.operator;
      this._value = value.value;
      this._varRange.internalValue = value.varRange;
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

  // column_type - computed: false, optional: true, required: false
  private _columnType?: string; 
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
  public set columnType(value: string) {
    this._columnType = value;
  }
  public resetColumnType() {
    this._columnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypeInput() {
    return this._columnType;
  }

  // inverted - computed: true, optional: true, required: false
  private _inverted?: boolean | cdktf.IResolvable; 
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }
  public set inverted(value: boolean | cdktf.IResolvable) {
    this._inverted = value;
  }
  public resetInverted() {
    this._inverted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertedInput() {
    return this._inverted;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // var_range - computed: false, optional: true, required: false
  private _varRange = new OutboundContactlistfilterClausesPredicatesVarRangeOutputReference(this, "var_range");
  public get varRange() {
    return this._varRange;
  }
  public putVarRange(value: OutboundContactlistfilterClausesPredicatesVarRange) {
    this._varRange.internalValue = value;
  }
  public resetVarRange() {
    this._varRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varRangeInput() {
    return this._varRange.internalValue;
  }
}

export class OutboundContactlistfilterClausesPredicatesList extends cdktf.ComplexList {
  public internalValue? : OutboundContactlistfilterClausesPredicates[] | cdktf.IResolvable

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
  public get(index: number): OutboundContactlistfilterClausesPredicatesOutputReference {
    return new OutboundContactlistfilterClausesPredicatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundContactlistfilterClauses {
  /**
  * How to join predicates together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#filter_type OutboundContactlistfilter#filter_type}
  */
  readonly filterType?: string;
  /**
  * predicates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#predicates OutboundContactlistfilter#predicates}
  */
  readonly predicates?: OutboundContactlistfilterClausesPredicates[] | cdktf.IResolvable;
}

export function outboundContactlistfilterClausesToTerraform(struct?: OutboundContactlistfilterClauses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    predicates: cdktf.listMapper(outboundContactlistfilterClausesPredicatesToTerraform, true)(struct!.predicates),
  }
}


export function outboundContactlistfilterClausesToHclTerraform(struct?: OutboundContactlistfilterClauses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predicates: {
      value: cdktf.listMapperHcl(outboundContactlistfilterClausesPredicatesToHclTerraform, true)(struct!.predicates),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundContactlistfilterClausesPredicatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundContactlistfilterClausesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundContactlistfilterClauses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._predicates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicates = this._predicates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundContactlistfilterClauses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType = undefined;
      this._predicates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType = value.filterType;
      this._predicates.internalValue = value.predicates;
    }
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // predicates - computed: false, optional: true, required: false
  private _predicates = new OutboundContactlistfilterClausesPredicatesList(this, "predicates", false);
  public get predicates() {
    return this._predicates;
  }
  public putPredicates(value: OutboundContactlistfilterClausesPredicates[] | cdktf.IResolvable) {
    this._predicates.internalValue = value;
  }
  public resetPredicates() {
    this._predicates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates.internalValue;
  }
}

export class OutboundContactlistfilterClausesList extends cdktf.ComplexList {
  public internalValue? : OutboundContactlistfilterClauses[] | cdktf.IResolvable

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
  public get(index: number): OutboundContactlistfilterClausesOutputReference {
    return new OutboundContactlistfilterClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter genesyscloud_outbound_contactlistfilter}
*/
export class OutboundContactlistfilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_contactlistfilter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundContactlistfilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundContactlistfilter to import
  * @param importFromId The id of the existing OutboundContactlistfilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundContactlistfilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_contactlistfilter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/outbound_contactlistfilter genesyscloud_outbound_contactlistfilter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundContactlistfilterConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundContactlistfilterConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_contactlistfilter',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactListId = config.contactListId;
    this._contactListTemplateId = config.contactListTemplateId;
    this._filterType = config.filterType;
    this._id = config.id;
    this._name = config.name;
    this._clauses.internalValue = config.clauses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_list_id - computed: false, optional: true, required: false
  private _contactListId?: string; 
  public get contactListId() {
    return this.getStringAttribute('contact_list_id');
  }
  public set contactListId(value: string) {
    this._contactListId = value;
  }
  public resetContactListId() {
    this._contactListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListIdInput() {
    return this._contactListId;
  }

  // contact_list_template_id - computed: false, optional: true, required: false
  private _contactListTemplateId?: string; 
  public get contactListTemplateId() {
    return this.getStringAttribute('contact_list_template_id');
  }
  public set contactListTemplateId(value: string) {
    this._contactListTemplateId = value;
  }
  public resetContactListTemplateId() {
    this._contactListTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListTemplateIdInput() {
    return this._contactListTemplateId;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // clauses - computed: false, optional: true, required: false
  private _clauses = new OutboundContactlistfilterClausesList(this, "clauses", false);
  public get clauses() {
    return this._clauses;
  }
  public putClauses(value: OutboundContactlistfilterClauses[] | cdktf.IResolvable) {
    this._clauses.internalValue = value;
  }
  public resetClauses() {
    this._clauses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clausesInput() {
    return this._clauses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_list_id: cdktf.stringToTerraform(this._contactListId),
      contact_list_template_id: cdktf.stringToTerraform(this._contactListTemplateId),
      filter_type: cdktf.stringToTerraform(this._filterType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      clauses: cdktf.listMapper(outboundContactlistfilterClausesToTerraform, true)(this._clauses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_list_id: {
        value: cdktf.stringToHclTerraform(this._contactListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_list_template_id: {
        value: cdktf.stringToHclTerraform(this._contactListTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clauses: {
        value: cdktf.listMapperHcl(outboundContactlistfilterClausesToHclTerraform, true)(this._clauses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundContactlistfilterClausesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
