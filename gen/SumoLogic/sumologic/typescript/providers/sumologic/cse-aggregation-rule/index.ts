// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseAggregationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#description_expression CseAggregationRule#description_expression}
  */
  readonly descriptionExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#enabled CseAggregationRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#group_by_entity CseAggregationRule#group_by_entity}
  */
  readonly groupByEntity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#group_by_fields CseAggregationRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#id CseAggregationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#is_prototype CseAggregationRule#is_prototype}
  */
  readonly isPrototype?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#match_expression CseAggregationRule#match_expression}
  */
  readonly matchExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#name CseAggregationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#name_expression CseAggregationRule#name_expression}
  */
  readonly nameExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#summary_expression CseAggregationRule#summary_expression}
  */
  readonly summaryExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#suppression_window_size CseAggregationRule#suppression_window_size}
  */
  readonly suppressionWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#tags CseAggregationRule#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#trigger_expression CseAggregationRule#trigger_expression}
  */
  readonly triggerExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#window_size CseAggregationRule#window_size}
  */
  readonly windowSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#window_size_millis CseAggregationRule#window_size_millis}
  */
  readonly windowSizeMillis?: string;
  /**
  * aggregation_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#aggregation_functions CseAggregationRule#aggregation_functions}
  */
  readonly aggregationFunctions: CseAggregationRuleAggregationFunctions[] | cdktf.IResolvable;
  /**
  * entity_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#entity_selectors CseAggregationRule#entity_selectors}
  */
  readonly entitySelectors: CseAggregationRuleEntitySelectors[] | cdktf.IResolvable;
  /**
  * severity_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#severity_mapping CseAggregationRule#severity_mapping}
  */
  readonly severityMapping: CseAggregationRuleSeverityMapping;
}
export interface CseAggregationRuleAggregationFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#arguments CseAggregationRule#arguments}
  */
  readonly arguments: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#function CseAggregationRule#function}
  */
  readonly function: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#name CseAggregationRule#name}
  */
  readonly name: string;
}

export function cseAggregationRuleAggregationFunctionsToTerraform(struct?: CseAggregationRuleAggregationFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    function: cdktf.stringToTerraform(struct!.function),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cseAggregationRuleAggregationFunctionsToHclTerraform(struct?: CseAggregationRuleAggregationFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
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

export class CseAggregationRuleAggregationFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseAggregationRuleAggregationFunctions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseAggregationRuleAggregationFunctions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._function = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._function = value.function;
      this._name = value.name;
    }
  }

  // arguments - computed: false, optional: false, required: true
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
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

export class CseAggregationRuleAggregationFunctionsList extends cdktf.ComplexList {
  public internalValue? : CseAggregationRuleAggregationFunctions[] | cdktf.IResolvable

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
  public get(index: number): CseAggregationRuleAggregationFunctionsOutputReference {
    return new CseAggregationRuleAggregationFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CseAggregationRuleEntitySelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#entity_type CseAggregationRule#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#expression CseAggregationRule#expression}
  */
  readonly expression: string;
}

export function cseAggregationRuleEntitySelectorsToTerraform(struct?: CseAggregationRuleEntitySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function cseAggregationRuleEntitySelectorsToHclTerraform(struct?: CseAggregationRuleEntitySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class CseAggregationRuleEntitySelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseAggregationRuleEntitySelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseAggregationRuleEntitySelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._expression = value.expression;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
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

export class CseAggregationRuleEntitySelectorsList extends cdktf.ComplexList {
  public internalValue? : CseAggregationRuleEntitySelectors[] | cdktf.IResolvable

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
  public get(index: number): CseAggregationRuleEntitySelectorsOutputReference {
    return new CseAggregationRuleEntitySelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CseAggregationRuleSeverityMappingMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#from CseAggregationRule#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#to CseAggregationRule#to}
  */
  readonly to: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#type CseAggregationRule#type}
  */
  readonly type: string;
}

export function cseAggregationRuleSeverityMappingMappingToTerraform(struct?: CseAggregationRuleSeverityMappingMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cseAggregationRuleSeverityMappingMappingToHclTerraform(struct?: CseAggregationRuleSeverityMappingMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CseAggregationRuleSeverityMappingMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseAggregationRuleSeverityMappingMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseAggregationRuleSeverityMappingMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
      this._type = value.type;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
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
}

export class CseAggregationRuleSeverityMappingMappingList extends cdktf.ComplexList {
  public internalValue? : CseAggregationRuleSeverityMappingMapping[] | cdktf.IResolvable

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
  public get(index: number): CseAggregationRuleSeverityMappingMappingOutputReference {
    return new CseAggregationRuleSeverityMappingMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CseAggregationRuleSeverityMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#default CseAggregationRule#default}
  */
  readonly default?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#field CseAggregationRule#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#type CseAggregationRule#type}
  */
  readonly type: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#mapping CseAggregationRule#mapping}
  */
  readonly mapping?: CseAggregationRuleSeverityMappingMapping[] | cdktf.IResolvable;
}

export function cseAggregationRuleSeverityMappingToTerraform(struct?: CseAggregationRuleSeverityMappingOutputReference | CseAggregationRuleSeverityMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
    mapping: cdktf.listMapper(cseAggregationRuleSeverityMappingMappingToTerraform, true)(struct!.mapping),
  }
}


export function cseAggregationRuleSeverityMappingToHclTerraform(struct?: CseAggregationRuleSeverityMappingOutputReference | CseAggregationRuleSeverityMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.numberToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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
    mapping: {
      value: cdktf.listMapperHcl(cseAggregationRuleSeverityMappingMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "CseAggregationRuleSeverityMappingMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseAggregationRuleSeverityMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CseAggregationRuleSeverityMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseAggregationRuleSeverityMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._field = undefined;
      this._type = undefined;
      this._mapping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._field = value.field;
      this._type = value.type;
      this._mapping.internalValue = value.mapping;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // mapping - computed: false, optional: true, required: false
  private _mapping = new CseAggregationRuleSeverityMappingMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: CseAggregationRuleSeverityMappingMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule sumologic_cse_aggregation_rule}
*/
export class CseAggregationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_aggregation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseAggregationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseAggregationRule to import
  * @param importFromId The id of the existing CseAggregationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseAggregationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_aggregation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_aggregation_rule sumologic_cse_aggregation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseAggregationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CseAggregationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_aggregation_rule',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._descriptionExpression = config.descriptionExpression;
    this._enabled = config.enabled;
    this._groupByEntity = config.groupByEntity;
    this._groupByFields = config.groupByFields;
    this._id = config.id;
    this._isPrototype = config.isPrototype;
    this._matchExpression = config.matchExpression;
    this._name = config.name;
    this._nameExpression = config.nameExpression;
    this._summaryExpression = config.summaryExpression;
    this._suppressionWindowSize = config.suppressionWindowSize;
    this._tags = config.tags;
    this._triggerExpression = config.triggerExpression;
    this._windowSize = config.windowSize;
    this._windowSizeMillis = config.windowSizeMillis;
    this._aggregationFunctions.internalValue = config.aggregationFunctions;
    this._entitySelectors.internalValue = config.entitySelectors;
    this._severityMapping.internalValue = config.severityMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description_expression - computed: false, optional: false, required: true
  private _descriptionExpression?: string; 
  public get descriptionExpression() {
    return this.getStringAttribute('description_expression');
  }
  public set descriptionExpression(value: string) {
    this._descriptionExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionExpressionInput() {
    return this._descriptionExpression;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_by_entity - computed: false, optional: true, required: false
  private _groupByEntity?: boolean | cdktf.IResolvable; 
  public get groupByEntity() {
    return this.getBooleanAttribute('group_by_entity');
  }
  public set groupByEntity(value: boolean | cdktf.IResolvable) {
    this._groupByEntity = value;
  }
  public resetGroupByEntity() {
    this._groupByEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByEntityInput() {
    return this._groupByEntity;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
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

  // is_prototype - computed: false, optional: true, required: false
  private _isPrototype?: boolean | cdktf.IResolvable; 
  public get isPrototype() {
    return this.getBooleanAttribute('is_prototype');
  }
  public set isPrototype(value: boolean | cdktf.IResolvable) {
    this._isPrototype = value;
  }
  public resetIsPrototype() {
    this._isPrototype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrototypeInput() {
    return this._isPrototype;
  }

  // match_expression - computed: false, optional: false, required: true
  private _matchExpression?: string; 
  public get matchExpression() {
    return this.getStringAttribute('match_expression');
  }
  public set matchExpression(value: string) {
    this._matchExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression;
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

  // name_expression - computed: false, optional: false, required: true
  private _nameExpression?: string; 
  public get nameExpression() {
    return this.getStringAttribute('name_expression');
  }
  public set nameExpression(value: string) {
    this._nameExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameExpressionInput() {
    return this._nameExpression;
  }

  // summary_expression - computed: false, optional: true, required: false
  private _summaryExpression?: string; 
  public get summaryExpression() {
    return this.getStringAttribute('summary_expression');
  }
  public set summaryExpression(value: string) {
    this._summaryExpression = value;
  }
  public resetSummaryExpression() {
    this._summaryExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryExpressionInput() {
    return this._summaryExpression;
  }

  // suppression_window_size - computed: false, optional: true, required: false
  private _suppressionWindowSize?: number; 
  public get suppressionWindowSize() {
    return this.getNumberAttribute('suppression_window_size');
  }
  public set suppressionWindowSize(value: number) {
    this._suppressionWindowSize = value;
  }
  public resetSuppressionWindowSize() {
    this._suppressionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionWindowSizeInput() {
    return this._suppressionWindowSize;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trigger_expression - computed: false, optional: false, required: true
  private _triggerExpression?: string; 
  public get triggerExpression() {
    return this.getStringAttribute('trigger_expression');
  }
  public set triggerExpression(value: string) {
    this._triggerExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerExpressionInput() {
    return this._triggerExpression;
  }

  // window_size - computed: false, optional: false, required: true
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // window_size_millis - computed: false, optional: true, required: false
  private _windowSizeMillis?: string; 
  public get windowSizeMillis() {
    return this.getStringAttribute('window_size_millis');
  }
  public set windowSizeMillis(value: string) {
    this._windowSizeMillis = value;
  }
  public resetWindowSizeMillis() {
    this._windowSizeMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeMillisInput() {
    return this._windowSizeMillis;
  }

  // aggregation_functions - computed: false, optional: false, required: true
  private _aggregationFunctions = new CseAggregationRuleAggregationFunctionsList(this, "aggregation_functions", false);
  public get aggregationFunctions() {
    return this._aggregationFunctions;
  }
  public putAggregationFunctions(value: CseAggregationRuleAggregationFunctions[] | cdktf.IResolvable) {
    this._aggregationFunctions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionsInput() {
    return this._aggregationFunctions.internalValue;
  }

  // entity_selectors - computed: false, optional: false, required: true
  private _entitySelectors = new CseAggregationRuleEntitySelectorsList(this, "entity_selectors", false);
  public get entitySelectors() {
    return this._entitySelectors;
  }
  public putEntitySelectors(value: CseAggregationRuleEntitySelectors[] | cdktf.IResolvable) {
    this._entitySelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySelectorsInput() {
    return this._entitySelectors.internalValue;
  }

  // severity_mapping - computed: false, optional: false, required: true
  private _severityMapping = new CseAggregationRuleSeverityMappingOutputReference(this, "severity_mapping");
  public get severityMapping() {
    return this._severityMapping;
  }
  public putSeverityMapping(value: CseAggregationRuleSeverityMapping) {
    this._severityMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityMappingInput() {
    return this._severityMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_expression: cdktf.stringToTerraform(this._descriptionExpression),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_by_entity: cdktf.booleanToTerraform(this._groupByEntity),
      group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupByFields),
      id: cdktf.stringToTerraform(this._id),
      is_prototype: cdktf.booleanToTerraform(this._isPrototype),
      match_expression: cdktf.stringToTerraform(this._matchExpression),
      name: cdktf.stringToTerraform(this._name),
      name_expression: cdktf.stringToTerraform(this._nameExpression),
      summary_expression: cdktf.stringToTerraform(this._summaryExpression),
      suppression_window_size: cdktf.numberToTerraform(this._suppressionWindowSize),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      trigger_expression: cdktf.stringToTerraform(this._triggerExpression),
      window_size: cdktf.stringToTerraform(this._windowSize),
      window_size_millis: cdktf.stringToTerraform(this._windowSizeMillis),
      aggregation_functions: cdktf.listMapper(cseAggregationRuleAggregationFunctionsToTerraform, true)(this._aggregationFunctions.internalValue),
      entity_selectors: cdktf.listMapper(cseAggregationRuleEntitySelectorsToTerraform, true)(this._entitySelectors.internalValue),
      severity_mapping: cseAggregationRuleSeverityMappingToTerraform(this._severityMapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description_expression: {
        value: cdktf.stringToHclTerraform(this._descriptionExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_by_entity: {
        value: cdktf.booleanToHclTerraform(this._groupByEntity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_by_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupByFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_prototype: {
        value: cdktf.booleanToHclTerraform(this._isPrototype),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_expression: {
        value: cdktf.stringToHclTerraform(this._matchExpression),
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
      name_expression: {
        value: cdktf.stringToHclTerraform(this._nameExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary_expression: {
        value: cdktf.stringToHclTerraform(this._summaryExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppression_window_size: {
        value: cdktf.numberToHclTerraform(this._suppressionWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trigger_expression: {
        value: cdktf.stringToHclTerraform(this._triggerExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window_size: {
        value: cdktf.stringToHclTerraform(this._windowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window_size_millis: {
        value: cdktf.stringToHclTerraform(this._windowSizeMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregation_functions: {
        value: cdktf.listMapperHcl(cseAggregationRuleAggregationFunctionsToHclTerraform, true)(this._aggregationFunctions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseAggregationRuleAggregationFunctionsList",
      },
      entity_selectors: {
        value: cdktf.listMapperHcl(cseAggregationRuleEntitySelectorsToHclTerraform, true)(this._entitySelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseAggregationRuleEntitySelectorsList",
      },
      severity_mapping: {
        value: cseAggregationRuleSeverityMappingToHclTerraform(this._severityMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseAggregationRuleSeverityMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
