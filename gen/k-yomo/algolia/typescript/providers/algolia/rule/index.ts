// https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field is intended for Rule management purposes, in particular to ease searching for Rules and presenting them to human readers. It is not interpreted by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#description Rule#description}
  */
  readonly description?: string;
  /**
  * Whether the Rule is enabled. Disabled Rules remain in the index, but are not applied at query time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#id Rule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the index to apply rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#index_name Rule#index_name}
  */
  readonly indexName: string;
  /**
  * Unique identifier for the Rule (format: `[A-Za-z0-9_-]+`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#object_id Rule#object_id}
  */
  readonly objectId: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#conditions Rule#conditions}
  */
  readonly conditions?: RuleConditions[] | cdktf.IResolvable;
  /**
  * consequence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#consequence Rule#consequence}
  */
  readonly consequence: RuleConsequence;
  /**
  * validity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#validity Rule#validity}
  */
  readonly validity?: RuleValidity[] | cdktf.IResolvable;
}
export interface RuleConditions {
  /**
  * Whether the `pattern` matches on plurals, synonyms, and typos.
  * 
  * This parameter goes hand in hand with the `pattern`  parameter. If the `pattern` is “shoe” and `alternatives` is `true`, the `pattern` matches on “shoes”, as well as synonyms and typos of “shoe”.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#alternatives Rule#alternatives}
  */
  readonly alternatives?: boolean | cdktf.IResolvable;
  /**
  * Whether the pattern parameter must match the beginning or the end of the query string, or both, or none.
  * Possible values are `is`, `startsWith`, `endsWith` and `contains`.
  * This parameter goes hand in hand with the `pattern` parameter. If you’re creating a Rule that depends on a specific query, you must specify the `pattern` and `anchoring`.
  * 
  * Otherwise, you can omit both.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#anchoring Rule#anchoring}
  */
  readonly anchoring?: string;
  /**
  * Rule context (format: `[A-Za-z0-9_-]+`). When specified, the Rule is only applied when the same context is specified at query time (using the `ruleContexts` parameter). When absent, the Rule is generic and always applies (provided that its other conditions are met, of course).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#context Rule#context}
  */
  readonly context?: string;
  /**
  * Query pattern syntax.
  * Query patterns are expressed as a string with a specific syntax. A pattern is a sequence of tokens, which can be either:
  * 
  * - Facet value placeholder: `{facet:$facet_name}`. Example: `{facet:brand}`.
  * - Literal: the world itself. Example: Algolia.
  * Special characters (`*`, `{`, `}`, `:` and `\`) must be escaped by preceding them with a backslash (\) if they are to be treated as literals.
  * 
  * This parameter goes hand in hand with the `anchoring` parameter. If you’re creating a Rule that depends on a specific query, you must specify the pattern and anchoring. The empty `""` pattern is only allowed when `anchoring` is set to `is`.
  * 
  * Otherwise, you can omit both.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#pattern Rule#pattern}
  */
  readonly pattern?: string;
}

export function ruleConditionsToTerraform(struct?: RuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternatives: cdktf.booleanToTerraform(struct!.alternatives),
    anchoring: cdktf.stringToTerraform(struct!.anchoring),
    context: cdktf.stringToTerraform(struct!.context),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function ruleConditionsToHclTerraform(struct?: RuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternatives: {
      value: cdktf.booleanToHclTerraform(struct!.alternatives),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anchoring: {
      value: cdktf.stringToHclTerraform(struct!.anchoring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternatives !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternatives = this._alternatives;
    }
    if (this._anchoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.anchoring = this._anchoring;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternatives = undefined;
      this._anchoring = undefined;
      this._context = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternatives = value.alternatives;
      this._anchoring = value.anchoring;
      this._context = value.context;
      this._pattern = value.pattern;
    }
  }

  // alternatives - computed: false, optional: true, required: false
  private _alternatives?: boolean | cdktf.IResolvable; 
  public get alternatives() {
    return this.getBooleanAttribute('alternatives');
  }
  public set alternatives(value: boolean | cdktf.IResolvable) {
    this._alternatives = value;
  }
  public resetAlternatives() {
    this._alternatives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativesInput() {
    return this._alternatives;
  }

  // anchoring - computed: false, optional: true, required: false
  private _anchoring?: string; 
  public get anchoring() {
    return this.getStringAttribute('anchoring');
  }
  public set anchoring(value: string) {
    this._anchoring = value;
  }
  public resetAnchoring() {
    this._anchoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anchoringInput() {
    return this._anchoring;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class RuleConditionsList extends cdktf.ComplexList {
  public internalValue? : RuleConditions[] | cdktf.IResolvable

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
  public get(index: number): RuleConditionsOutputReference {
    return new RuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConsequenceParamsAutomaticFacetFilters {
  /**
  * Whether the filter is disjunctive (true) or conjunctive (false). If the filter applies multiple times, e.g. because the query string contains multiple values of the same facet, the multiple occurrences are combined with an `AND` operator by default (conjunctive mode). If the filter is specified as disjunctive, however, multiple occurrences are combined with an `OR` operator instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#disjunctive Rule#disjunctive}
  */
  readonly disjunctive?: boolean | cdktf.IResolvable;
  /**
  * Attribute to filter on. This must match a facet placeholder in the Rule’s pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#facet Rule#facet}
  */
  readonly facet: string;
  /**
  * Score for the filter. Typically used for optional or disjunctive filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#score Rule#score}
  */
  readonly score?: number;
}

export function ruleConsequenceParamsAutomaticFacetFiltersToTerraform(struct?: RuleConsequenceParamsAutomaticFacetFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disjunctive: cdktf.booleanToTerraform(struct!.disjunctive),
    facet: cdktf.stringToTerraform(struct!.facet),
    score: cdktf.numberToTerraform(struct!.score),
  }
}


export function ruleConsequenceParamsAutomaticFacetFiltersToHclTerraform(struct?: RuleConsequenceParamsAutomaticFacetFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disjunctive: {
      value: cdktf.booleanToHclTerraform(struct!.disjunctive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    facet: {
      value: cdktf.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConsequenceParamsAutomaticFacetFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConsequenceParamsAutomaticFacetFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disjunctive !== undefined) {
      hasAnyValues = true;
      internalValueResult.disjunctive = this._disjunctive;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConsequenceParamsAutomaticFacetFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disjunctive = undefined;
      this._facet = undefined;
      this._score = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disjunctive = value.disjunctive;
      this._facet = value.facet;
      this._score = value.score;
    }
  }

  // disjunctive - computed: false, optional: true, required: false
  private _disjunctive?: boolean | cdktf.IResolvable; 
  public get disjunctive() {
    return this.getBooleanAttribute('disjunctive');
  }
  public set disjunctive(value: boolean | cdktf.IResolvable) {
    this._disjunctive = value;
  }
  public resetDisjunctive() {
    this._disjunctive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disjunctiveInput() {
    return this._disjunctive;
  }

  // facet - computed: false, optional: false, required: true
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // score - computed: false, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}

export class RuleConsequenceParamsAutomaticFacetFiltersList extends cdktf.ComplexList {
  public internalValue? : RuleConsequenceParamsAutomaticFacetFilters[] | cdktf.IResolvable

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
  public get(index: number): RuleConsequenceParamsAutomaticFacetFiltersOutputReference {
    return new RuleConsequenceParamsAutomaticFacetFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConsequenceParamsAutomaticOptionalFacetFilters {
  /**
  * Whether the filter is disjunctive (true) or conjunctive (false). If the filter applies multiple times, e.g. because the query string contains multiple values of the same facet, the multiple occurrences are combined with an `AND` operator by default (conjunctive mode). If the filter is specified as disjunctive, however, multiple occurrences are combined with an `OR` operator instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#disjunctive Rule#disjunctive}
  */
  readonly disjunctive?: boolean | cdktf.IResolvable;
  /**
  * Attribute to filter on. This must match a facet placeholder in the Rule’s pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#facet Rule#facet}
  */
  readonly facet: string;
  /**
  * Score for the filter. Typically used for optional or disjunctive filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#score Rule#score}
  */
  readonly score?: number;
}

export function ruleConsequenceParamsAutomaticOptionalFacetFiltersToTerraform(struct?: RuleConsequenceParamsAutomaticOptionalFacetFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disjunctive: cdktf.booleanToTerraform(struct!.disjunctive),
    facet: cdktf.stringToTerraform(struct!.facet),
    score: cdktf.numberToTerraform(struct!.score),
  }
}


export function ruleConsequenceParamsAutomaticOptionalFacetFiltersToHclTerraform(struct?: RuleConsequenceParamsAutomaticOptionalFacetFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disjunctive: {
      value: cdktf.booleanToHclTerraform(struct!.disjunctive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    facet: {
      value: cdktf.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConsequenceParamsAutomaticOptionalFacetFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConsequenceParamsAutomaticOptionalFacetFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disjunctive !== undefined) {
      hasAnyValues = true;
      internalValueResult.disjunctive = this._disjunctive;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConsequenceParamsAutomaticOptionalFacetFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disjunctive = undefined;
      this._facet = undefined;
      this._score = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disjunctive = value.disjunctive;
      this._facet = value.facet;
      this._score = value.score;
    }
  }

  // disjunctive - computed: false, optional: true, required: false
  private _disjunctive?: boolean | cdktf.IResolvable; 
  public get disjunctive() {
    return this.getBooleanAttribute('disjunctive');
  }
  public set disjunctive(value: boolean | cdktf.IResolvable) {
    this._disjunctive = value;
  }
  public resetDisjunctive() {
    this._disjunctive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disjunctiveInput() {
    return this._disjunctive;
  }

  // facet - computed: false, optional: false, required: true
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // score - computed: false, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}

export class RuleConsequenceParamsAutomaticOptionalFacetFiltersList extends cdktf.ComplexList {
  public internalValue? : RuleConsequenceParamsAutomaticOptionalFacetFilters[] | cdktf.IResolvable

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
  public get(index: number): RuleConsequenceParamsAutomaticOptionalFacetFiltersOutputReference {
    return new RuleConsequenceParamsAutomaticOptionalFacetFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConsequenceParamsObjectQuery {
  /**
  * Text or patterns to remove from the query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#delete Rule#delete}
  */
  readonly delete: string;
  /**
  * Text that should be inserted in place of the removed text inside the query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#insert Rule#insert}
  */
  readonly insert?: string;
  /**
  * Type of edit. Must be one of:
  * 	- `remove`: when you want to delete some text and not replace it with anything
  * 	- `replace`: when you want to delete some text and replace it with something else
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#type Rule#type}
  */
  readonly type: string;
}

export function ruleConsequenceParamsObjectQueryToTerraform(struct?: RuleConsequenceParamsObjectQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
    insert: cdktf.stringToTerraform(struct!.insert),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ruleConsequenceParamsObjectQueryToHclTerraform(struct?: RuleConsequenceParamsObjectQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert: {
      value: cdktf.stringToHclTerraform(struct!.insert),
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

export class RuleConsequenceParamsObjectQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConsequenceParamsObjectQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._insert !== undefined) {
      hasAnyValues = true;
      internalValueResult.insert = this._insert;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConsequenceParamsObjectQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
      this._insert = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
      this._insert = value.insert;
      this._type = value.type;
    }
  }

  // delete - computed: false, optional: false, required: true
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // insert - computed: false, optional: true, required: false
  private _insert?: string; 
  public get insert() {
    return this.getStringAttribute('insert');
  }
  public set insert(value: string) {
    this._insert = value;
  }
  public resetInsert() {
    this._insert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertInput() {
    return this._insert;
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

export class RuleConsequenceParamsObjectQueryList extends cdktf.ComplexList {
  public internalValue? : RuleConsequenceParamsObjectQuery[] | cdktf.IResolvable

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
  public get(index: number): RuleConsequenceParamsObjectQueryOutputReference {
    return new RuleConsequenceParamsObjectQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConsequenceParams {
  /**
  * It replaces the entire query string. Either one of `query` or `object_query` can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#query Rule#query}
  */
  readonly query?: string;
  /**
  * automatic_facet_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#automatic_facet_filters Rule#automatic_facet_filters}
  */
  readonly automaticFacetFilters?: RuleConsequenceParamsAutomaticFacetFilters[] | cdktf.IResolvable;
  /**
  * automatic_optional_facet_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#automatic_optional_facet_filters Rule#automatic_optional_facet_filters}
  */
  readonly automaticOptionalFacetFilters?: RuleConsequenceParamsAutomaticOptionalFacetFilters[] | cdktf.IResolvable;
  /**
  * object_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#object_query Rule#object_query}
  */
  readonly objectQuery?: RuleConsequenceParamsObjectQuery[] | cdktf.IResolvable;
}

export function ruleConsequenceParamsToTerraform(struct?: RuleConsequenceParamsOutputReference | RuleConsequenceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    automatic_facet_filters: cdktf.listMapper(ruleConsequenceParamsAutomaticFacetFiltersToTerraform, true)(struct!.automaticFacetFilters),
    automatic_optional_facet_filters: cdktf.listMapper(ruleConsequenceParamsAutomaticOptionalFacetFiltersToTerraform, true)(struct!.automaticOptionalFacetFilters),
    object_query: cdktf.listMapper(ruleConsequenceParamsObjectQueryToTerraform, true)(struct!.objectQuery),
  }
}


export function ruleConsequenceParamsToHclTerraform(struct?: RuleConsequenceParamsOutputReference | RuleConsequenceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic_facet_filters: {
      value: cdktf.listMapperHcl(ruleConsequenceParamsAutomaticFacetFiltersToHclTerraform, true)(struct!.automaticFacetFilters),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConsequenceParamsAutomaticFacetFiltersList",
    },
    automatic_optional_facet_filters: {
      value: cdktf.listMapperHcl(ruleConsequenceParamsAutomaticOptionalFacetFiltersToHclTerraform, true)(struct!.automaticOptionalFacetFilters),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConsequenceParamsAutomaticOptionalFacetFiltersList",
    },
    object_query: {
      value: cdktf.listMapperHcl(ruleConsequenceParamsObjectQueryToHclTerraform, true)(struct!.objectQuery),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConsequenceParamsObjectQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConsequenceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleConsequenceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._automaticFacetFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFacetFilters = this._automaticFacetFilters?.internalValue;
    }
    if (this._automaticOptionalFacetFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticOptionalFacetFilters = this._automaticOptionalFacetFilters?.internalValue;
    }
    if (this._objectQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectQuery = this._objectQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConsequenceParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._automaticFacetFilters.internalValue = undefined;
      this._automaticOptionalFacetFilters.internalValue = undefined;
      this._objectQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._automaticFacetFilters.internalValue = value.automaticFacetFilters;
      this._automaticOptionalFacetFilters.internalValue = value.automaticOptionalFacetFilters;
      this._objectQuery.internalValue = value.objectQuery;
    }
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // automatic_facet_filters - computed: false, optional: true, required: false
  private _automaticFacetFilters = new RuleConsequenceParamsAutomaticFacetFiltersList(this, "automatic_facet_filters", false);
  public get automaticFacetFilters() {
    return this._automaticFacetFilters;
  }
  public putAutomaticFacetFilters(value: RuleConsequenceParamsAutomaticFacetFilters[] | cdktf.IResolvable) {
    this._automaticFacetFilters.internalValue = value;
  }
  public resetAutomaticFacetFilters() {
    this._automaticFacetFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFacetFiltersInput() {
    return this._automaticFacetFilters.internalValue;
  }

  // automatic_optional_facet_filters - computed: false, optional: true, required: false
  private _automaticOptionalFacetFilters = new RuleConsequenceParamsAutomaticOptionalFacetFiltersList(this, "automatic_optional_facet_filters", false);
  public get automaticOptionalFacetFilters() {
    return this._automaticOptionalFacetFilters;
  }
  public putAutomaticOptionalFacetFilters(value: RuleConsequenceParamsAutomaticOptionalFacetFilters[] | cdktf.IResolvable) {
    this._automaticOptionalFacetFilters.internalValue = value;
  }
  public resetAutomaticOptionalFacetFilters() {
    this._automaticOptionalFacetFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOptionalFacetFiltersInput() {
    return this._automaticOptionalFacetFilters.internalValue;
  }

  // object_query - computed: false, optional: true, required: false
  private _objectQuery = new RuleConsequenceParamsObjectQueryList(this, "object_query", false);
  public get objectQuery() {
    return this._objectQuery;
  }
  public putObjectQuery(value: RuleConsequenceParamsObjectQuery[] | cdktf.IResolvable) {
    this._objectQuery.internalValue = value;
  }
  public resetObjectQuery() {
    this._objectQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectQueryInput() {
    return this._objectQuery.internalValue;
  }
}
export interface RuleConsequencePromote {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#object_ids Rule#object_ids}
  */
  readonly objectIds: string[];
  /**
  * The position to promote the object(s) to (zero-based). If you pass `object_ids`, we place the objects at this position as a group. For example, if you pass four `object_ids` to position `0`, the objects take the first four positions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#position Rule#position}
  */
  readonly position: number;
}

export function ruleConsequencePromoteToTerraform(struct?: RuleConsequencePromote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.objectIds),
    position: cdktf.numberToTerraform(struct!.position),
  }
}


export function ruleConsequencePromoteToHclTerraform(struct?: RuleConsequencePromote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.objectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConsequencePromoteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConsequencePromote | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIds = this._objectIds;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConsequencePromote | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIds = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIds = value.objectIds;
      this._position = value.position;
    }
  }

  // object_ids - computed: false, optional: false, required: true
  private _objectIds?: string[]; 
  public get objectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('object_ids'));
  }
  public set objectIds(value: string[]) {
    this._objectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdsInput() {
    return this._objectIds;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}

export class RuleConsequencePromoteList extends cdktf.ComplexList {
  public internalValue? : RuleConsequencePromote[] | cdktf.IResolvable

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
  public get(index: number): RuleConsequencePromoteOutputReference {
    return new RuleConsequencePromoteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConsequence {
  /**
  * List of object IDs to hide from hits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#hide Rule#hide}
  */
  readonly hide?: string[];
  /**
  * Additional search parameters in JSON format. Any valid search parameter is allowed. Specific treatment is applied to these fields: `query`, `automaticFacetFilters`, `automaticOptionalFacetFilters`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#params_json Rule#params_json}
  */
  readonly paramsJson?: string;
  /**
  * Custom JSON formatted string that will be appended to the userData array in the response. This object is not interpreted by the API. It is limited to 1kB of minified JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#user_data Rule#user_data}
  */
  readonly userData?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#params Rule#params}
  */
  readonly params?: RuleConsequenceParams;
  /**
  * promote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#promote Rule#promote}
  */
  readonly promote?: RuleConsequencePromote[] | cdktf.IResolvable;
}

export function ruleConsequenceToTerraform(struct?: RuleConsequenceOutputReference | RuleConsequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    params_json: cdktf.stringToTerraform(struct!.paramsJson),
    user_data: cdktf.stringToTerraform(struct!.userData),
    params: ruleConsequenceParamsToTerraform(struct!.params),
    promote: cdktf.listMapper(ruleConsequencePromoteToTerraform, true)(struct!.promote),
  }
}


export function ruleConsequenceToHclTerraform(struct?: RuleConsequenceOutputReference | RuleConsequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    params_json: {
      value: cdktf.stringToHclTerraform(struct!.paramsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: ruleConsequenceParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConsequenceParamsList",
    },
    promote: {
      value: cdktf.listMapperHcl(ruleConsequencePromoteToHclTerraform, true)(struct!.promote),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConsequencePromoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConsequenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleConsequence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._paramsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramsJson = this._paramsJson;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    if (this._promote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promote = this._promote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConsequence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hide = undefined;
      this._paramsJson = undefined;
      this._userData = undefined;
      this._params.internalValue = undefined;
      this._promote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hide = value.hide;
      this._paramsJson = value.paramsJson;
      this._userData = value.userData;
      this._params.internalValue = value.params;
      this._promote.internalValue = value.promote;
    }
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return cdktf.Fn.tolist(this.getListAttribute('hide'));
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // params_json - computed: false, optional: true, required: false
  private _paramsJson?: string; 
  public get paramsJson() {
    return this.getStringAttribute('params_json');
  }
  public set paramsJson(value: string) {
    this._paramsJson = value;
  }
  public resetParamsJson() {
    this._paramsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsJsonInput() {
    return this._paramsJson;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // params - computed: false, optional: true, required: false
  private _params = new RuleConsequenceParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: RuleConsequenceParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // promote - computed: false, optional: true, required: false
  private _promote = new RuleConsequencePromoteList(this, "promote", false);
  public get promote() {
    return this._promote;
  }
  public putPromote(value: RuleConsequencePromote[] | cdktf.IResolvable) {
    this._promote.internalValue = value;
  }
  public resetPromote() {
    this._promote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoteInput() {
    return this._promote.internalValue;
  }
}
export interface RuleValidity {
  /**
  * Lower bound of the time range. RFC3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#from Rule#from}
  */
  readonly from: string;
  /**
  * Upper bound of the time range. RFC3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#until Rule#until}
  */
  readonly until: string;
}

export function ruleValidityToTerraform(struct?: RuleValidity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    until: cdktf.stringToTerraform(struct!.until),
  }
}


export function ruleValidityToHclTerraform(struct?: RuleValidity | cdktf.IResolvable): any {
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
    until: {
      value: cdktf.stringToHclTerraform(struct!.until),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleValidity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._until !== undefined) {
      hasAnyValues = true;
      internalValueResult.until = this._until;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleValidity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._until = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._until = value.until;
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

  // until - computed: false, optional: false, required: true
  private _until?: string; 
  public get until() {
    return this.getStringAttribute('until');
  }
  public set until(value: string) {
    this._until = value;
  }
  // Temporarily expose input value. Use with caution.
  public get untilInput() {
    return this._until;
  }
}

export class RuleValidityList extends cdktf.ComplexList {
  public internalValue? : RuleValidity[] | cdktf.IResolvable

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
  public get(index: number): RuleValidityOutputReference {
    return new RuleValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule algolia_rule}
*/
export class Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "algolia_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rule to import
  * @param importFromId The id of the existing Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/rule algolia_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleConfig
  */
  public constructor(scope: Construct, id: string, config: RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'algolia_rule',
      terraformGeneratorMetadata: {
        providerName: 'algolia',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._indexName = config.indexName;
    this._objectId = config.objectId;
    this._conditions.internalValue = config.conditions;
    this._consequence.internalValue = config.consequence;
    this._validity.internalValue = config.validity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new RuleConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // consequence - computed: false, optional: false, required: true
  private _consequence = new RuleConsequenceOutputReference(this, "consequence");
  public get consequence() {
    return this._consequence;
  }
  public putConsequence(value: RuleConsequence) {
    this._consequence.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consequenceInput() {
    return this._consequence.internalValue;
  }

  // validity - computed: false, optional: true, required: false
  private _validity = new RuleValidityList(this, "validity", false);
  public get validity() {
    return this._validity;
  }
  public putValidity(value: RuleValidity[] | cdktf.IResolvable) {
    this._validity.internalValue = value;
  }
  public resetValidity() {
    this._validity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      index_name: cdktf.stringToTerraform(this._indexName),
      object_id: cdktf.stringToTerraform(this._objectId),
      conditions: cdktf.listMapper(ruleConditionsToTerraform, true)(this._conditions.internalValue),
      consequence: ruleConsequenceToTerraform(this._consequence.internalValue),
      validity: cdktf.listMapper(ruleValidityToTerraform, true)(this._validity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_name: {
        value: cdktf.stringToHclTerraform(this._indexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(ruleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleConditionsList",
      },
      consequence: {
        value: ruleConsequenceToHclTerraform(this._consequence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleConsequenceList",
      },
      validity: {
        value: cdktf.listMapperHcl(ruleValidityToHclTerraform, true)(this._validity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleValidityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
