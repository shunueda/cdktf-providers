// https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow Terraform to destroy the index.  Unless this field is set to false in Terraform state, a terraform destroy or terraform apply command that deletes the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#deletion_protection VirtualIndex#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the Personalization feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#enable_personalization VirtualIndex#enable_personalization}
  */
  readonly enablePersonalization?: boolean | cdktf.IResolvable;
  /**
  * Whether Rules should be globally enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#enable_rules VirtualIndex#enable_rules}
  */
  readonly enableRules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#id VirtualIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the virtual index. Its name should NOT be surrounded with `virtual()`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#name VirtualIndex#name}
  */
  readonly name: string;
  /**
  * The name of the existing primary index name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#primary_index_name VirtualIndex#primary_index_name}
  */
  readonly primaryIndexName: string;
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#advanced_config VirtualIndex#advanced_config}
  */
  readonly advancedConfig?: VirtualIndexAdvancedConfig;
  /**
  * attributes_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#attributes_config VirtualIndex#attributes_config}
  */
  readonly attributesConfig?: VirtualIndexAttributesConfig;
  /**
  * faceting_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#faceting_config VirtualIndex#faceting_config}
  */
  readonly facetingConfig?: VirtualIndexFacetingConfig;
  /**
  * highlight_and_snippet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#highlight_and_snippet_config VirtualIndex#highlight_and_snippet_config}
  */
  readonly highlightAndSnippetConfig?: VirtualIndexHighlightAndSnippetConfig;
  /**
  * languages_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#languages_config VirtualIndex#languages_config}
  */
  readonly languagesConfig?: VirtualIndexLanguagesConfig;
  /**
  * pagination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#pagination_config VirtualIndex#pagination_config}
  */
  readonly paginationConfig?: VirtualIndexPaginationConfig;
  /**
  * query_strategy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#query_strategy_config VirtualIndex#query_strategy_config}
  */
  readonly queryStrategyConfig?: VirtualIndexQueryStrategyConfig;
  /**
  * ranking_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#ranking_config VirtualIndex#ranking_config}
  */
  readonly rankingConfig?: VirtualIndexRankingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#timeouts VirtualIndex#timeouts}
  */
  readonly timeouts?: VirtualIndexTimeouts;
  /**
  * typos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#typos_config VirtualIndex#typos_config}
  */
  readonly typosConfig?: VirtualIndexTyposConfig;
}
export interface VirtualIndexPerformanceConfig {
}

export function virtualIndexPerformanceConfigToTerraform(struct?: VirtualIndexPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualIndexPerformanceConfigToHclTerraform(struct?: VirtualIndexPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualIndexPerformanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualIndexPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_compression_of_integer_array - computed: true, optional: false, required: false
  public get allowCompressionOfIntegerArray() {
    return this.getBooleanAttribute('allow_compression_of_integer_array');
  }

  // numeric_attributes_for_filtering - computed: true, optional: false, required: false
  public get numericAttributesForFiltering() {
    return cdktf.Fn.tolist(this.getListAttribute('numeric_attributes_for_filtering'));
  }
}

export class VirtualIndexPerformanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): VirtualIndexPerformanceConfigOutputReference {
    return new VirtualIndexPerformanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualIndexAdvancedConfig {
  /**
  * When attribute is ranked above proximity in your ranking formula, proximity is used to select which searchable attribute is matched in the **attribute ranking stage**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#attribute_criteria_computed_by_min_proximity VirtualIndex#attribute_criteria_computed_by_min_proximity}
  */
  readonly attributeCriteriaComputedByMinProximity?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable de-duplication or grouping of results.
  * - When set to `0`, you disable de-duplication and grouping.
  * - When set to `1`, you enable **de-duplication**, in which only the most relevant result is returned for all records that have the same value in the distinct attribute. This is similar to the SQL `distinct` keyword.
  * if `distinct` is set to 1 (de-duplication):
  * - When set to `N (where N > 1)`, you enable grouping, in which most N hits will be returned with the same value for the distinct attribute.
  * then the N most relevant episodes for every show are kept, with similar consequences.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#distinct VirtualIndex#distinct}
  */
  readonly distinct?: number;
  /**
  * Maximum number of facet hits to return during a search for facet values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#max_facet_hits VirtualIndex#max_facet_hits}
  */
  readonly maxFacetHits?: number;
  /**
  * Precision of the `proximity` ranking criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#min_proximity VirtualIndex#min_proximity}
  */
  readonly minProximity?: number;
  /**
  * Whether to highlight and snippet the original word that matches the synonym or the synonym itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#replace_synonyms_in_highlight VirtualIndex#replace_synonyms_in_highlight}
  */
  readonly replaceSynonymsInHighlight?: boolean | cdktf.IResolvable;
  /**
  * The fields the response will contain. Applies to search and browse queries.
  * This parameter is mainly intended to **limit the response size.** For example, in complex queries, echoing of request parameters in the response’s params field can be undesirable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#response_fields VirtualIndex#response_fields}
  */
  readonly responseFields?: string[];
}

export function virtualIndexAdvancedConfigToTerraform(struct?: VirtualIndexAdvancedConfigOutputReference | VirtualIndexAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_criteria_computed_by_min_proximity: cdktf.booleanToTerraform(struct!.attributeCriteriaComputedByMinProximity),
    distinct: cdktf.numberToTerraform(struct!.distinct),
    max_facet_hits: cdktf.numberToTerraform(struct!.maxFacetHits),
    min_proximity: cdktf.numberToTerraform(struct!.minProximity),
    replace_synonyms_in_highlight: cdktf.booleanToTerraform(struct!.replaceSynonymsInHighlight),
    response_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseFields),
  }
}


export function virtualIndexAdvancedConfigToHclTerraform(struct?: VirtualIndexAdvancedConfigOutputReference | VirtualIndexAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_criteria_computed_by_min_proximity: {
      value: cdktf.booleanToHclTerraform(struct!.attributeCriteriaComputedByMinProximity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distinct: {
      value: cdktf.numberToHclTerraform(struct!.distinct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_facet_hits: {
      value: cdktf.numberToHclTerraform(struct!.maxFacetHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_proximity: {
      value: cdktf.numberToHclTerraform(struct!.minProximity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replace_synonyms_in_highlight: {
      value: cdktf.booleanToHclTerraform(struct!.replaceSynonymsInHighlight),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseFields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeCriteriaComputedByMinProximity !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeCriteriaComputedByMinProximity = this._attributeCriteriaComputedByMinProximity;
    }
    if (this._distinct !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinct = this._distinct;
    }
    if (this._maxFacetHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFacetHits = this._maxFacetHits;
    }
    if (this._minProximity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProximity = this._minProximity;
    }
    if (this._replaceSynonymsInHighlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceSynonymsInHighlight = this._replaceSynonymsInHighlight;
    }
    if (this._responseFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFields = this._responseFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeCriteriaComputedByMinProximity = undefined;
      this._distinct = undefined;
      this._maxFacetHits = undefined;
      this._minProximity = undefined;
      this._replaceSynonymsInHighlight = undefined;
      this._responseFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeCriteriaComputedByMinProximity = value.attributeCriteriaComputedByMinProximity;
      this._distinct = value.distinct;
      this._maxFacetHits = value.maxFacetHits;
      this._minProximity = value.minProximity;
      this._replaceSynonymsInHighlight = value.replaceSynonymsInHighlight;
      this._responseFields = value.responseFields;
    }
  }

  // attribute_criteria_computed_by_min_proximity - computed: false, optional: true, required: false
  private _attributeCriteriaComputedByMinProximity?: boolean | cdktf.IResolvable; 
  public get attributeCriteriaComputedByMinProximity() {
    return this.getBooleanAttribute('attribute_criteria_computed_by_min_proximity');
  }
  public set attributeCriteriaComputedByMinProximity(value: boolean | cdktf.IResolvable) {
    this._attributeCriteriaComputedByMinProximity = value;
  }
  public resetAttributeCriteriaComputedByMinProximity() {
    this._attributeCriteriaComputedByMinProximity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeCriteriaComputedByMinProximityInput() {
    return this._attributeCriteriaComputedByMinProximity;
  }

  // attribute_for_distinct - computed: true, optional: false, required: false
  public get attributeForDistinct() {
    return this.getStringAttribute('attribute_for_distinct');
  }

  // distinct - computed: false, optional: true, required: false
  private _distinct?: number; 
  public get distinct() {
    return this.getNumberAttribute('distinct');
  }
  public set distinct(value: number) {
    this._distinct = value;
  }
  public resetDistinct() {
    this._distinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctInput() {
    return this._distinct;
  }

  // max_facet_hits - computed: false, optional: true, required: false
  private _maxFacetHits?: number; 
  public get maxFacetHits() {
    return this.getNumberAttribute('max_facet_hits');
  }
  public set maxFacetHits(value: number) {
    this._maxFacetHits = value;
  }
  public resetMaxFacetHits() {
    this._maxFacetHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFacetHitsInput() {
    return this._maxFacetHits;
  }

  // min_proximity - computed: false, optional: true, required: false
  private _minProximity?: number; 
  public get minProximity() {
    return this.getNumberAttribute('min_proximity');
  }
  public set minProximity(value: number) {
    this._minProximity = value;
  }
  public resetMinProximity() {
    this._minProximity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProximityInput() {
    return this._minProximity;
  }

  // replace_synonyms_in_highlight - computed: false, optional: true, required: false
  private _replaceSynonymsInHighlight?: boolean | cdktf.IResolvable; 
  public get replaceSynonymsInHighlight() {
    return this.getBooleanAttribute('replace_synonyms_in_highlight');
  }
  public set replaceSynonymsInHighlight(value: boolean | cdktf.IResolvable) {
    this._replaceSynonymsInHighlight = value;
  }
  public resetReplaceSynonymsInHighlight() {
    this._replaceSynonymsInHighlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceSynonymsInHighlightInput() {
    return this._replaceSynonymsInHighlight;
  }

  // response_fields - computed: false, optional: true, required: false
  private _responseFields?: string[]; 
  public get responseFields() {
    return cdktf.Fn.tolist(this.getListAttribute('response_fields'));
  }
  public set responseFields(value: string[]) {
    this._responseFields = value;
  }
  public resetResponseFields() {
    this._responseFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFieldsInput() {
    return this._responseFields;
  }
}
export interface VirtualIndexAttributesConfig {
  /**
  * List of attributes to be retrieved at query time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#attributes_to_retrieve VirtualIndex#attributes_to_retrieve}
  */
  readonly attributesToRetrieve?: string[];
  /**
  * List of attributes that cannot be retrieved at query time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#unretrievable_attributes VirtualIndex#unretrievable_attributes}
  */
  readonly unretrievableAttributes?: string[];
}

export function virtualIndexAttributesConfigToTerraform(struct?: VirtualIndexAttributesConfigOutputReference | VirtualIndexAttributesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes_to_retrieve: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributesToRetrieve),
    unretrievable_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unretrievableAttributes),
  }
}


export function virtualIndexAttributesConfigToHclTerraform(struct?: VirtualIndexAttributesConfigOutputReference | VirtualIndexAttributesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes_to_retrieve: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributesToRetrieve),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unretrievable_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unretrievableAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexAttributesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexAttributesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributesToRetrieve !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesToRetrieve = this._attributesToRetrieve;
    }
    if (this._unretrievableAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.unretrievableAttributes = this._unretrievableAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexAttributesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributesToRetrieve = undefined;
      this._unretrievableAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributesToRetrieve = value.attributesToRetrieve;
      this._unretrievableAttributes = value.unretrievableAttributes;
    }
  }

  // attributes_for_faceting - computed: true, optional: false, required: false
  public get attributesForFaceting() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_for_faceting'));
  }

  // attributes_to_retrieve - computed: false, optional: true, required: false
  private _attributesToRetrieve?: string[]; 
  public get attributesToRetrieve() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_retrieve'));
  }
  public set attributesToRetrieve(value: string[]) {
    this._attributesToRetrieve = value;
  }
  public resetAttributesToRetrieve() {
    this._attributesToRetrieve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToRetrieveInput() {
    return this._attributesToRetrieve;
  }

  // searchable_attributes - computed: true, optional: false, required: false
  public get searchableAttributes() {
    return this.getListAttribute('searchable_attributes');
  }

  // unretrievable_attributes - computed: false, optional: true, required: false
  private _unretrievableAttributes?: string[]; 
  public get unretrievableAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('unretrievable_attributes'));
  }
  public set unretrievableAttributes(value: string[]) {
    this._unretrievableAttributes = value;
  }
  public resetUnretrievableAttributes() {
    this._unretrievableAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unretrievableAttributesInput() {
    return this._unretrievableAttributes;
  }
}
export interface VirtualIndexFacetingConfig {
  /**
  * Maximum number of facet values to return for each facet during a regular search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#max_values_per_facet VirtualIndex#max_values_per_facet}
  */
  readonly maxValuesPerFacet?: number;
  /**
  * Parameter to controls how the facet values are sorted within each faceted attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#sort_facet_values_by VirtualIndex#sort_facet_values_by}
  */
  readonly sortFacetValuesBy?: string;
}

export function virtualIndexFacetingConfigToTerraform(struct?: VirtualIndexFacetingConfigOutputReference | VirtualIndexFacetingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_values_per_facet: cdktf.numberToTerraform(struct!.maxValuesPerFacet),
    sort_facet_values_by: cdktf.stringToTerraform(struct!.sortFacetValuesBy),
  }
}


export function virtualIndexFacetingConfigToHclTerraform(struct?: VirtualIndexFacetingConfigOutputReference | VirtualIndexFacetingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_values_per_facet: {
      value: cdktf.numberToHclTerraform(struct!.maxValuesPerFacet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_facet_values_by: {
      value: cdktf.stringToHclTerraform(struct!.sortFacetValuesBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexFacetingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexFacetingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValuesPerFacet !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValuesPerFacet = this._maxValuesPerFacet;
    }
    if (this._sortFacetValuesBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortFacetValuesBy = this._sortFacetValuesBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexFacetingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValuesPerFacet = undefined;
      this._sortFacetValuesBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValuesPerFacet = value.maxValuesPerFacet;
      this._sortFacetValuesBy = value.sortFacetValuesBy;
    }
  }

  // max_values_per_facet - computed: false, optional: true, required: false
  private _maxValuesPerFacet?: number; 
  public get maxValuesPerFacet() {
    return this.getNumberAttribute('max_values_per_facet');
  }
  public set maxValuesPerFacet(value: number) {
    this._maxValuesPerFacet = value;
  }
  public resetMaxValuesPerFacet() {
    this._maxValuesPerFacet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValuesPerFacetInput() {
    return this._maxValuesPerFacet;
  }

  // sort_facet_values_by - computed: false, optional: true, required: false
  private _sortFacetValuesBy?: string; 
  public get sortFacetValuesBy() {
    return this.getStringAttribute('sort_facet_values_by');
  }
  public set sortFacetValuesBy(value: string) {
    this._sortFacetValuesBy = value;
  }
  public resetSortFacetValuesBy() {
    this._sortFacetValuesBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFacetValuesByInput() {
    return this._sortFacetValuesBy;
  }
}
export interface VirtualIndexHighlightAndSnippetConfig {
  /**
  * List of attributes to highlight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#attributes_to_highlight VirtualIndex#attributes_to_highlight}
  */
  readonly attributesToHighlight?: string[];
  /**
  * List of attributes to snippet, with an optional maximum number of words to snippet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#attributes_to_snippet VirtualIndex#attributes_to_snippet}
  */
  readonly attributesToSnippet?: string[];
  /**
  * The HTML string to insert after the highlighted parts in all highlight and snippet results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#highlight_post_tag VirtualIndex#highlight_post_tag}
  */
  readonly highlightPostTag?: string;
  /**
  * The HTML string to insert before the highlighted parts in all highlight and snippet results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#highlight_pre_tag VirtualIndex#highlight_pre_tag}
  */
  readonly highlightPreTag?: string;
  /**
  * Restrict highlighting and snippeting to items that matched the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#restrict_highlight_and_snippet_arrays VirtualIndex#restrict_highlight_and_snippet_arrays}
  */
  readonly restrictHighlightAndSnippetArrays?: boolean | cdktf.IResolvable;
  /**
  * String used as an ellipsis indicator when a snippet is truncated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#snippet_ellipsis_text VirtualIndex#snippet_ellipsis_text}
  */
  readonly snippetEllipsisText?: string;
}

export function virtualIndexHighlightAndSnippetConfigToTerraform(struct?: VirtualIndexHighlightAndSnippetConfigOutputReference | VirtualIndexHighlightAndSnippetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes_to_highlight: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributesToHighlight),
    attributes_to_snippet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributesToSnippet),
    highlight_post_tag: cdktf.stringToTerraform(struct!.highlightPostTag),
    highlight_pre_tag: cdktf.stringToTerraform(struct!.highlightPreTag),
    restrict_highlight_and_snippet_arrays: cdktf.booleanToTerraform(struct!.restrictHighlightAndSnippetArrays),
    snippet_ellipsis_text: cdktf.stringToTerraform(struct!.snippetEllipsisText),
  }
}


export function virtualIndexHighlightAndSnippetConfigToHclTerraform(struct?: VirtualIndexHighlightAndSnippetConfigOutputReference | VirtualIndexHighlightAndSnippetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes_to_highlight: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributesToHighlight),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attributes_to_snippet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributesToSnippet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    highlight_post_tag: {
      value: cdktf.stringToHclTerraform(struct!.highlightPostTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    highlight_pre_tag: {
      value: cdktf.stringToHclTerraform(struct!.highlightPreTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_highlight_and_snippet_arrays: {
      value: cdktf.booleanToHclTerraform(struct!.restrictHighlightAndSnippetArrays),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snippet_ellipsis_text: {
      value: cdktf.stringToHclTerraform(struct!.snippetEllipsisText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexHighlightAndSnippetConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexHighlightAndSnippetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributesToHighlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesToHighlight = this._attributesToHighlight;
    }
    if (this._attributesToSnippet !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesToSnippet = this._attributesToSnippet;
    }
    if (this._highlightPostTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.highlightPostTag = this._highlightPostTag;
    }
    if (this._highlightPreTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.highlightPreTag = this._highlightPreTag;
    }
    if (this._restrictHighlightAndSnippetArrays !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictHighlightAndSnippetArrays = this._restrictHighlightAndSnippetArrays;
    }
    if (this._snippetEllipsisText !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippetEllipsisText = this._snippetEllipsisText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexHighlightAndSnippetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributesToHighlight = undefined;
      this._attributesToSnippet = undefined;
      this._highlightPostTag = undefined;
      this._highlightPreTag = undefined;
      this._restrictHighlightAndSnippetArrays = undefined;
      this._snippetEllipsisText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributesToHighlight = value.attributesToHighlight;
      this._attributesToSnippet = value.attributesToSnippet;
      this._highlightPostTag = value.highlightPostTag;
      this._highlightPreTag = value.highlightPreTag;
      this._restrictHighlightAndSnippetArrays = value.restrictHighlightAndSnippetArrays;
      this._snippetEllipsisText = value.snippetEllipsisText;
    }
  }

  // attributes_to_highlight - computed: true, optional: true, required: false
  private _attributesToHighlight?: string[]; 
  public get attributesToHighlight() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_highlight'));
  }
  public set attributesToHighlight(value: string[]) {
    this._attributesToHighlight = value;
  }
  public resetAttributesToHighlight() {
    this._attributesToHighlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToHighlightInput() {
    return this._attributesToHighlight;
  }

  // attributes_to_snippet - computed: true, optional: true, required: false
  private _attributesToSnippet?: string[]; 
  public get attributesToSnippet() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_snippet'));
  }
  public set attributesToSnippet(value: string[]) {
    this._attributesToSnippet = value;
  }
  public resetAttributesToSnippet() {
    this._attributesToSnippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToSnippetInput() {
    return this._attributesToSnippet;
  }

  // highlight_post_tag - computed: false, optional: true, required: false
  private _highlightPostTag?: string; 
  public get highlightPostTag() {
    return this.getStringAttribute('highlight_post_tag');
  }
  public set highlightPostTag(value: string) {
    this._highlightPostTag = value;
  }
  public resetHighlightPostTag() {
    this._highlightPostTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highlightPostTagInput() {
    return this._highlightPostTag;
  }

  // highlight_pre_tag - computed: false, optional: true, required: false
  private _highlightPreTag?: string; 
  public get highlightPreTag() {
    return this.getStringAttribute('highlight_pre_tag');
  }
  public set highlightPreTag(value: string) {
    this._highlightPreTag = value;
  }
  public resetHighlightPreTag() {
    this._highlightPreTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highlightPreTagInput() {
    return this._highlightPreTag;
  }

  // restrict_highlight_and_snippet_arrays - computed: false, optional: true, required: false
  private _restrictHighlightAndSnippetArrays?: boolean | cdktf.IResolvable; 
  public get restrictHighlightAndSnippetArrays() {
    return this.getBooleanAttribute('restrict_highlight_and_snippet_arrays');
  }
  public set restrictHighlightAndSnippetArrays(value: boolean | cdktf.IResolvable) {
    this._restrictHighlightAndSnippetArrays = value;
  }
  public resetRestrictHighlightAndSnippetArrays() {
    this._restrictHighlightAndSnippetArrays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictHighlightAndSnippetArraysInput() {
    return this._restrictHighlightAndSnippetArrays;
  }

  // snippet_ellipsis_text - computed: false, optional: true, required: false
  private _snippetEllipsisText?: string; 
  public get snippetEllipsisText() {
    return this.getStringAttribute('snippet_ellipsis_text');
  }
  public set snippetEllipsisText(value: string) {
    this._snippetEllipsisText = value;
  }
  public resetSnippetEllipsisText() {
    this._snippetEllipsisText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetEllipsisTextInput() {
    return this._snippetEllipsisText;
  }
}
export interface VirtualIndexLanguagesConfigDecompoundedAttributes {
}

export function virtualIndexLanguagesConfigDecompoundedAttributesToTerraform(struct?: VirtualIndexLanguagesConfigDecompoundedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualIndexLanguagesConfigDecompoundedAttributesToHclTerraform(struct?: VirtualIndexLanguagesConfigDecompoundedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualIndexLanguagesConfigDecompoundedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualIndexLanguagesConfigDecompoundedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexLanguagesConfigDecompoundedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes'));
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }
}

export class VirtualIndexLanguagesConfigDecompoundedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): VirtualIndexLanguagesConfigDecompoundedAttributesOutputReference {
    return new VirtualIndexLanguagesConfigDecompoundedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualIndexLanguagesConfig {
  /**
  * List of attributes to apply transliteration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#attributes_to_transliterate VirtualIndex#attributes_to_transliterate}
  */
  readonly attributesToTransliterate?: string[];
  /**
  * Whether to split compound words into their composing atoms in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#decompound_query VirtualIndex#decompound_query}
  */
  readonly decompoundQuery?: boolean | cdktf.IResolvable;
  /**
  * Whether to treat singular, plurals, and other forms of declensions as matching terms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#ignore_plurals VirtualIndex#ignore_plurals}
  */
  readonly ignorePlurals?: boolean | cdktf.IResolvable;
  /**
  * Whether to treat singular, plurals, and other forms of declensions as matching terms in target languages.
  * List of supported languages are listed on http://nhttps//www.algolia.com/doc/api-reference/api-parameters/ignorePlurals/#usage-notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#ignore_plurals_for VirtualIndex#ignore_plurals_for}
  */
  readonly ignorePluralsFor?: string[];
  /**
  * List of languages to be used by language-specific settings and functionalities such as ignorePlurals, removeStopWords, and CJK word-detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#query_languages VirtualIndex#query_languages}
  */
  readonly queryLanguages?: string[];
  /**
  * Whether to removes stop (common) words from the query before executing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#remove_stop_words VirtualIndex#remove_stop_words}
  */
  readonly removeStopWords?: boolean | cdktf.IResolvable;
  /**
  * List of languages to removes stop (common) words from the query before executing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#remove_stop_words_for VirtualIndex#remove_stop_words_for}
  */
  readonly removeStopWordsFor?: string[];
}

export function virtualIndexLanguagesConfigToTerraform(struct?: VirtualIndexLanguagesConfigOutputReference | VirtualIndexLanguagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes_to_transliterate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributesToTransliterate),
    decompound_query: cdktf.booleanToTerraform(struct!.decompoundQuery),
    ignore_plurals: cdktf.booleanToTerraform(struct!.ignorePlurals),
    ignore_plurals_for: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignorePluralsFor),
    query_languages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryLanguages),
    remove_stop_words: cdktf.booleanToTerraform(struct!.removeStopWords),
    remove_stop_words_for: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeStopWordsFor),
  }
}


export function virtualIndexLanguagesConfigToHclTerraform(struct?: VirtualIndexLanguagesConfigOutputReference | VirtualIndexLanguagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes_to_transliterate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributesToTransliterate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    decompound_query: {
      value: cdktf.booleanToHclTerraform(struct!.decompoundQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_plurals: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePlurals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_plurals_for: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignorePluralsFor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query_languages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryLanguages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remove_stop_words: {
      value: cdktf.booleanToHclTerraform(struct!.removeStopWords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_stop_words_for: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeStopWordsFor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexLanguagesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexLanguagesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributesToTransliterate !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesToTransliterate = this._attributesToTransliterate;
    }
    if (this._decompoundQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompoundQuery = this._decompoundQuery;
    }
    if (this._ignorePlurals !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePlurals = this._ignorePlurals;
    }
    if (this._ignorePluralsFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePluralsFor = this._ignorePluralsFor;
    }
    if (this._queryLanguages !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLanguages = this._queryLanguages;
    }
    if (this._removeStopWords !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeStopWords = this._removeStopWords;
    }
    if (this._removeStopWordsFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeStopWordsFor = this._removeStopWordsFor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexLanguagesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributesToTransliterate = undefined;
      this._decompoundQuery = undefined;
      this._ignorePlurals = undefined;
      this._ignorePluralsFor = undefined;
      this._queryLanguages = undefined;
      this._removeStopWords = undefined;
      this._removeStopWordsFor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributesToTransliterate = value.attributesToTransliterate;
      this._decompoundQuery = value.decompoundQuery;
      this._ignorePlurals = value.ignorePlurals;
      this._ignorePluralsFor = value.ignorePluralsFor;
      this._queryLanguages = value.queryLanguages;
      this._removeStopWords = value.removeStopWords;
      this._removeStopWordsFor = value.removeStopWordsFor;
    }
  }

  // attributes_to_transliterate - computed: true, optional: true, required: false
  private _attributesToTransliterate?: string[]; 
  public get attributesToTransliterate() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_transliterate'));
  }
  public set attributesToTransliterate(value: string[]) {
    this._attributesToTransliterate = value;
  }
  public resetAttributesToTransliterate() {
    this._attributesToTransliterate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToTransliterateInput() {
    return this._attributesToTransliterate;
  }

  // camel_case_attributes - computed: true, optional: false, required: false
  public get camelCaseAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('camel_case_attributes'));
  }

  // custom_normalization - computed: true, optional: false, required: false
  private _customNormalization = new cdktf.StringMap(this, "custom_normalization");
  public get customNormalization() {
    return this._customNormalization;
  }

  // decompound_query - computed: false, optional: true, required: false
  private _decompoundQuery?: boolean | cdktf.IResolvable; 
  public get decompoundQuery() {
    return this.getBooleanAttribute('decompound_query');
  }
  public set decompoundQuery(value: boolean | cdktf.IResolvable) {
    this._decompoundQuery = value;
  }
  public resetDecompoundQuery() {
    this._decompoundQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompoundQueryInput() {
    return this._decompoundQuery;
  }

  // decompounded_attributes - computed: true, optional: false, required: false
  private _decompoundedAttributes = new VirtualIndexLanguagesConfigDecompoundedAttributesList(this, "decompounded_attributes", false);
  public get decompoundedAttributes() {
    return this._decompoundedAttributes;
  }

  // ignore_plurals - computed: false, optional: true, required: false
  private _ignorePlurals?: boolean | cdktf.IResolvable; 
  public get ignorePlurals() {
    return this.getBooleanAttribute('ignore_plurals');
  }
  public set ignorePlurals(value: boolean | cdktf.IResolvable) {
    this._ignorePlurals = value;
  }
  public resetIgnorePlurals() {
    this._ignorePlurals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePluralsInput() {
    return this._ignorePlurals;
  }

  // ignore_plurals_for - computed: false, optional: true, required: false
  private _ignorePluralsFor?: string[]; 
  public get ignorePluralsFor() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_plurals_for'));
  }
  public set ignorePluralsFor(value: string[]) {
    this._ignorePluralsFor = value;
  }
  public resetIgnorePluralsFor() {
    this._ignorePluralsFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePluralsForInput() {
    return this._ignorePluralsFor;
  }

  // index_languages - computed: true, optional: false, required: false
  public get indexLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('index_languages'));
  }

  // keep_diacritics_on_characters - computed: true, optional: false, required: false
  public get keepDiacriticsOnCharacters() {
    return this.getStringAttribute('keep_diacritics_on_characters');
  }

  // query_languages - computed: false, optional: true, required: false
  private _queryLanguages?: string[]; 
  public get queryLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('query_languages'));
  }
  public set queryLanguages(value: string[]) {
    this._queryLanguages = value;
  }
  public resetQueryLanguages() {
    this._queryLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLanguagesInput() {
    return this._queryLanguages;
  }

  // remove_stop_words - computed: false, optional: true, required: false
  private _removeStopWords?: boolean | cdktf.IResolvable; 
  public get removeStopWords() {
    return this.getBooleanAttribute('remove_stop_words');
  }
  public set removeStopWords(value: boolean | cdktf.IResolvable) {
    this._removeStopWords = value;
  }
  public resetRemoveStopWords() {
    this._removeStopWords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeStopWordsInput() {
    return this._removeStopWords;
  }

  // remove_stop_words_for - computed: false, optional: true, required: false
  private _removeStopWordsFor?: string[]; 
  public get removeStopWordsFor() {
    return cdktf.Fn.tolist(this.getListAttribute('remove_stop_words_for'));
  }
  public set removeStopWordsFor(value: string[]) {
    this._removeStopWordsFor = value;
  }
  public resetRemoveStopWordsFor() {
    this._removeStopWordsFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeStopWordsForInput() {
    return this._removeStopWordsFor;
  }
}
export interface VirtualIndexPaginationConfig {
  /**
  * The number of hits per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#hits_per_page VirtualIndex#hits_per_page}
  */
  readonly hitsPerPage?: number;
  /**
  * The maximum number of hits accessible via pagination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#pagination_limited_to VirtualIndex#pagination_limited_to}
  */
  readonly paginationLimitedTo?: number;
}

export function virtualIndexPaginationConfigToTerraform(struct?: VirtualIndexPaginationConfigOutputReference | VirtualIndexPaginationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits_per_page: cdktf.numberToTerraform(struct!.hitsPerPage),
    pagination_limited_to: cdktf.numberToTerraform(struct!.paginationLimitedTo),
  }
}


export function virtualIndexPaginationConfigToHclTerraform(struct?: VirtualIndexPaginationConfigOutputReference | VirtualIndexPaginationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits_per_page: {
      value: cdktf.numberToHclTerraform(struct!.hitsPerPage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pagination_limited_to: {
      value: cdktf.numberToHclTerraform(struct!.paginationLimitedTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexPaginationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexPaginationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hitsPerPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitsPerPage = this._hitsPerPage;
    }
    if (this._paginationLimitedTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginationLimitedTo = this._paginationLimitedTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexPaginationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hitsPerPage = undefined;
      this._paginationLimitedTo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hitsPerPage = value.hitsPerPage;
      this._paginationLimitedTo = value.paginationLimitedTo;
    }
  }

  // hits_per_page - computed: false, optional: true, required: false
  private _hitsPerPage?: number; 
  public get hitsPerPage() {
    return this.getNumberAttribute('hits_per_page');
  }
  public set hitsPerPage(value: number) {
    this._hitsPerPage = value;
  }
  public resetHitsPerPage() {
    this._hitsPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsPerPageInput() {
    return this._hitsPerPage;
  }

  // pagination_limited_to - computed: false, optional: true, required: false
  private _paginationLimitedTo?: number; 
  public get paginationLimitedTo() {
    return this.getNumberAttribute('pagination_limited_to');
  }
  public set paginationLimitedTo(value: number) {
    this._paginationLimitedTo = value;
  }
  public resetPaginationLimitedTo() {
    this._paginationLimitedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationLimitedToInput() {
    return this._paginationLimitedTo;
  }
}
export interface VirtualIndexQueryStrategyConfig {
  /**
  * Whether to enable the advanced query syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#advanced_syntax VirtualIndex#advanced_syntax}
  */
  readonly advancedSyntax?: boolean | cdktf.IResolvable;
  /**
  * Advanced syntax features to be activated when ‘advancedSyntax’ is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#advanced_syntax_features VirtualIndex#advanced_syntax_features}
  */
  readonly advancedSyntaxFeatures?: string[];
  /**
  * List of alternatives that should be considered an exact match by the exact ranking criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#alternatives_as_exact VirtualIndex#alternatives_as_exact}
  */
  readonly alternativesAsExact?: string[];
  /**
  * Controls how the exact ranking criterion is computed when the query contains only one word.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#exact_on_single_word_query VirtualIndex#exact_on_single_word_query}
  */
  readonly exactOnSingleWordQuery?: string;
  /**
  * Query type to control if and how query words are interpreted as prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#query_type VirtualIndex#query_type}
  */
  readonly queryType?: string;
  /**
  * Strategy to remove words from the query when it doesn’t match any hits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#remove_words_if_no_results VirtualIndex#remove_words_if_no_results}
  */
  readonly removeWordsIfNoResults?: string;
}

export function virtualIndexQueryStrategyConfigToTerraform(struct?: VirtualIndexQueryStrategyConfigOutputReference | VirtualIndexQueryStrategyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_syntax: cdktf.booleanToTerraform(struct!.advancedSyntax),
    advanced_syntax_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advancedSyntaxFeatures),
    alternatives_as_exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alternativesAsExact),
    exact_on_single_word_query: cdktf.stringToTerraform(struct!.exactOnSingleWordQuery),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    remove_words_if_no_results: cdktf.stringToTerraform(struct!.removeWordsIfNoResults),
  }
}


export function virtualIndexQueryStrategyConfigToHclTerraform(struct?: VirtualIndexQueryStrategyConfigOutputReference | VirtualIndexQueryStrategyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_syntax: {
      value: cdktf.booleanToHclTerraform(struct!.advancedSyntax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advanced_syntax_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advancedSyntaxFeatures),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    alternatives_as_exact: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alternativesAsExact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exact_on_single_word_query: {
      value: cdktf.stringToHclTerraform(struct!.exactOnSingleWordQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_words_if_no_results: {
      value: cdktf.stringToHclTerraform(struct!.removeWordsIfNoResults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexQueryStrategyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexQueryStrategyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedSyntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSyntax = this._advancedSyntax;
    }
    if (this._advancedSyntaxFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSyntaxFeatures = this._advancedSyntaxFeatures;
    }
    if (this._alternativesAsExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativesAsExact = this._alternativesAsExact;
    }
    if (this._exactOnSingleWordQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactOnSingleWordQuery = this._exactOnSingleWordQuery;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._removeWordsIfNoResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeWordsIfNoResults = this._removeWordsIfNoResults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexQueryStrategyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedSyntax = undefined;
      this._advancedSyntaxFeatures = undefined;
      this._alternativesAsExact = undefined;
      this._exactOnSingleWordQuery = undefined;
      this._queryType = undefined;
      this._removeWordsIfNoResults = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedSyntax = value.advancedSyntax;
      this._advancedSyntaxFeatures = value.advancedSyntaxFeatures;
      this._alternativesAsExact = value.alternativesAsExact;
      this._exactOnSingleWordQuery = value.exactOnSingleWordQuery;
      this._queryType = value.queryType;
      this._removeWordsIfNoResults = value.removeWordsIfNoResults;
    }
  }

  // advanced_syntax - computed: false, optional: true, required: false
  private _advancedSyntax?: boolean | cdktf.IResolvable; 
  public get advancedSyntax() {
    return this.getBooleanAttribute('advanced_syntax');
  }
  public set advancedSyntax(value: boolean | cdktf.IResolvable) {
    this._advancedSyntax = value;
  }
  public resetAdvancedSyntax() {
    this._advancedSyntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSyntaxInput() {
    return this._advancedSyntax;
  }

  // advanced_syntax_features - computed: false, optional: true, required: false
  private _advancedSyntaxFeatures?: string[]; 
  public get advancedSyntaxFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('advanced_syntax_features'));
  }
  public set advancedSyntaxFeatures(value: string[]) {
    this._advancedSyntaxFeatures = value;
  }
  public resetAdvancedSyntaxFeatures() {
    this._advancedSyntaxFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSyntaxFeaturesInput() {
    return this._advancedSyntaxFeatures;
  }

  // alternatives_as_exact - computed: false, optional: true, required: false
  private _alternativesAsExact?: string[]; 
  public get alternativesAsExact() {
    return cdktf.Fn.tolist(this.getListAttribute('alternatives_as_exact'));
  }
  public set alternativesAsExact(value: string[]) {
    this._alternativesAsExact = value;
  }
  public resetAlternativesAsExact() {
    this._alternativesAsExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativesAsExactInput() {
    return this._alternativesAsExact;
  }

  // disable_exact_on_attributes - computed: true, optional: false, required: false
  public get disableExactOnAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_exact_on_attributes'));
  }

  // disable_prefix_on_attributes - computed: true, optional: false, required: false
  public get disablePrefixOnAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_prefix_on_attributes'));
  }

  // exact_on_single_word_query - computed: false, optional: true, required: false
  private _exactOnSingleWordQuery?: string; 
  public get exactOnSingleWordQuery() {
    return this.getStringAttribute('exact_on_single_word_query');
  }
  public set exactOnSingleWordQuery(value: string) {
    this._exactOnSingleWordQuery = value;
  }
  public resetExactOnSingleWordQuery() {
    this._exactOnSingleWordQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactOnSingleWordQueryInput() {
    return this._exactOnSingleWordQuery;
  }

  // optional_words - computed: true, optional: false, required: false
  public get optionalWords() {
    return cdktf.Fn.tolist(this.getListAttribute('optional_words'));
  }

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // remove_words_if_no_results - computed: false, optional: true, required: false
  private _removeWordsIfNoResults?: string; 
  public get removeWordsIfNoResults() {
    return this.getStringAttribute('remove_words_if_no_results');
  }
  public set removeWordsIfNoResults(value: string) {
    this._removeWordsIfNoResults = value;
  }
  public resetRemoveWordsIfNoResults() {
    this._removeWordsIfNoResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeWordsIfNoResultsInput() {
    return this._removeWordsIfNoResults;
  }
}
export interface VirtualIndexRankingConfig {
  /**
  * List of attributes for custom ranking criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#custom_ranking VirtualIndex#custom_ranking}
  */
  readonly customRanking?: string[];
  /**
  * Relevancy threshold below which less relevant results aren’t included in the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#relevancy_strictness VirtualIndex#relevancy_strictness}
  */
  readonly relevancyStrictness?: number;
}

export function virtualIndexRankingConfigToTerraform(struct?: VirtualIndexRankingConfigOutputReference | VirtualIndexRankingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ranking: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customRanking),
    relevancy_strictness: cdktf.numberToTerraform(struct!.relevancyStrictness),
  }
}


export function virtualIndexRankingConfigToHclTerraform(struct?: VirtualIndexRankingConfigOutputReference | VirtualIndexRankingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_ranking: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customRanking),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    relevancy_strictness: {
      value: cdktf.numberToHclTerraform(struct!.relevancyStrictness),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexRankingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexRankingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRanking !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRanking = this._customRanking;
    }
    if (this._relevancyStrictness !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevancyStrictness = this._relevancyStrictness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexRankingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRanking = undefined;
      this._relevancyStrictness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRanking = value.customRanking;
      this._relevancyStrictness = value.relevancyStrictness;
    }
  }

  // custom_ranking - computed: false, optional: true, required: false
  private _customRanking?: string[]; 
  public get customRanking() {
    return this.getListAttribute('custom_ranking');
  }
  public set customRanking(value: string[]) {
    this._customRanking = value;
  }
  public resetCustomRanking() {
    this._customRanking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRankingInput() {
    return this._customRanking;
  }

  // ranking - computed: true, optional: false, required: false
  public get ranking() {
    return this.getListAttribute('ranking');
  }

  // relevancy_strictness - computed: false, optional: true, required: false
  private _relevancyStrictness?: number; 
  public get relevancyStrictness() {
    return this.getNumberAttribute('relevancy_strictness');
  }
  public set relevancyStrictness(value: number) {
    this._relevancyStrictness = value;
  }
  public resetRelevancyStrictness() {
    this._relevancyStrictness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevancyStrictnessInput() {
    return this._relevancyStrictness;
  }
}
export interface VirtualIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#default VirtualIndex#default}
  */
  readonly default?: string;
}

export function virtualIndexTimeoutsToTerraform(struct?: VirtualIndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function virtualIndexTimeoutsToHclTerraform(struct?: VirtualIndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualIndexTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface VirtualIndexTyposConfig {
  /**
  * Whether to allow typos on numbers (“numeric tokens”) in the query str
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#allow_typos_on_numeric_tokens VirtualIndex#allow_typos_on_numeric_tokens}
  */
  readonly allowTyposOnNumericTokens?: boolean | cdktf.IResolvable;
  /**
  * Minimum number of characters a word in the query string must contain to accept matches with 1 typo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#min_word_size_for_1_typo VirtualIndex#min_word_size_for_1_typo}
  */
  readonly minWordSizeFor1Typo?: number;
  /**
  * Minimum number of characters a word in the query string must contain to accept matches with 2 typos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#min_word_size_for_2_typos VirtualIndex#min_word_size_for_2_typos}
  */
  readonly minWordSizeFor2Typos?: number;
  /**
  * Separators (punctuation characters) to index. By default, separators are not indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#separators_to_index VirtualIndex#separators_to_index}
  */
  readonly separatorsToIndex?: string;
  /**
  * Whether typo tolerance is enabled and how it is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#typo_tolerance VirtualIndex#typo_tolerance}
  */
  readonly typoTolerance?: string;
}

export function virtualIndexTyposConfigToTerraform(struct?: VirtualIndexTyposConfigOutputReference | VirtualIndexTyposConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_typos_on_numeric_tokens: cdktf.booleanToTerraform(struct!.allowTyposOnNumericTokens),
    min_word_size_for_1_typo: cdktf.numberToTerraform(struct!.minWordSizeFor1Typo),
    min_word_size_for_2_typos: cdktf.numberToTerraform(struct!.minWordSizeFor2Typos),
    separators_to_index: cdktf.stringToTerraform(struct!.separatorsToIndex),
    typo_tolerance: cdktf.stringToTerraform(struct!.typoTolerance),
  }
}


export function virtualIndexTyposConfigToHclTerraform(struct?: VirtualIndexTyposConfigOutputReference | VirtualIndexTyposConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_typos_on_numeric_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.allowTyposOnNumericTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_word_size_for_1_typo: {
      value: cdktf.numberToHclTerraform(struct!.minWordSizeFor1Typo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_word_size_for_2_typos: {
      value: cdktf.numberToHclTerraform(struct!.minWordSizeFor2Typos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    separators_to_index: {
      value: cdktf.stringToHclTerraform(struct!.separatorsToIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    typo_tolerance: {
      value: cdktf.stringToHclTerraform(struct!.typoTolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualIndexTyposConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualIndexTyposConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTyposOnNumericTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTyposOnNumericTokens = this._allowTyposOnNumericTokens;
    }
    if (this._minWordSizeFor1Typo !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWordSizeFor1Typo = this._minWordSizeFor1Typo;
    }
    if (this._minWordSizeFor2Typos !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWordSizeFor2Typos = this._minWordSizeFor2Typos;
    }
    if (this._separatorsToIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.separatorsToIndex = this._separatorsToIndex;
    }
    if (this._typoTolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.typoTolerance = this._typoTolerance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualIndexTyposConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTyposOnNumericTokens = undefined;
      this._minWordSizeFor1Typo = undefined;
      this._minWordSizeFor2Typos = undefined;
      this._separatorsToIndex = undefined;
      this._typoTolerance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTyposOnNumericTokens = value.allowTyposOnNumericTokens;
      this._minWordSizeFor1Typo = value.minWordSizeFor1Typo;
      this._minWordSizeFor2Typos = value.minWordSizeFor2Typos;
      this._separatorsToIndex = value.separatorsToIndex;
      this._typoTolerance = value.typoTolerance;
    }
  }

  // allow_typos_on_numeric_tokens - computed: false, optional: true, required: false
  private _allowTyposOnNumericTokens?: boolean | cdktf.IResolvable; 
  public get allowTyposOnNumericTokens() {
    return this.getBooleanAttribute('allow_typos_on_numeric_tokens');
  }
  public set allowTyposOnNumericTokens(value: boolean | cdktf.IResolvable) {
    this._allowTyposOnNumericTokens = value;
  }
  public resetAllowTyposOnNumericTokens() {
    this._allowTyposOnNumericTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTyposOnNumericTokensInput() {
    return this._allowTyposOnNumericTokens;
  }

  // disable_typo_tolerance_on_attributes - computed: true, optional: false, required: false
  public get disableTypoToleranceOnAttributes() {
    return this.getListAttribute('disable_typo_tolerance_on_attributes');
  }

  // disable_typo_tolerance_on_words - computed: true, optional: false, required: false
  public get disableTypoToleranceOnWords() {
    return this.getListAttribute('disable_typo_tolerance_on_words');
  }

  // min_word_size_for_1_typo - computed: false, optional: true, required: false
  private _minWordSizeFor1Typo?: number; 
  public get minWordSizeFor1Typo() {
    return this.getNumberAttribute('min_word_size_for_1_typo');
  }
  public set minWordSizeFor1Typo(value: number) {
    this._minWordSizeFor1Typo = value;
  }
  public resetMinWordSizeFor1Typo() {
    this._minWordSizeFor1Typo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWordSizeFor1TypoInput() {
    return this._minWordSizeFor1Typo;
  }

  // min_word_size_for_2_typos - computed: false, optional: true, required: false
  private _minWordSizeFor2Typos?: number; 
  public get minWordSizeFor2Typos() {
    return this.getNumberAttribute('min_word_size_for_2_typos');
  }
  public set minWordSizeFor2Typos(value: number) {
    this._minWordSizeFor2Typos = value;
  }
  public resetMinWordSizeFor2Typos() {
    this._minWordSizeFor2Typos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWordSizeFor2TyposInput() {
    return this._minWordSizeFor2Typos;
  }

  // separators_to_index - computed: false, optional: true, required: false
  private _separatorsToIndex?: string; 
  public get separatorsToIndex() {
    return this.getStringAttribute('separators_to_index');
  }
  public set separatorsToIndex(value: string) {
    this._separatorsToIndex = value;
  }
  public resetSeparatorsToIndex() {
    this._separatorsToIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorsToIndexInput() {
    return this._separatorsToIndex;
  }

  // typo_tolerance - computed: false, optional: true, required: false
  private _typoTolerance?: string; 
  public get typoTolerance() {
    return this.getStringAttribute('typo_tolerance');
  }
  public set typoTolerance(value: string) {
    this._typoTolerance = value;
  }
  public resetTypoTolerance() {
    this._typoTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typoToleranceInput() {
    return this._typoTolerance;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index algolia_virtual_index}
*/
export class VirtualIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "algolia_virtual_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualIndex to import
  * @param importFromId The id of the existing VirtualIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_virtual_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/virtual_index algolia_virtual_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualIndexConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'algolia_virtual_index',
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
    this._deletionProtection = config.deletionProtection;
    this._enablePersonalization = config.enablePersonalization;
    this._enableRules = config.enableRules;
    this._id = config.id;
    this._name = config.name;
    this._primaryIndexName = config.primaryIndexName;
    this._advancedConfig.internalValue = config.advancedConfig;
    this._attributesConfig.internalValue = config.attributesConfig;
    this._facetingConfig.internalValue = config.facetingConfig;
    this._highlightAndSnippetConfig.internalValue = config.highlightAndSnippetConfig;
    this._languagesConfig.internalValue = config.languagesConfig;
    this._paginationConfig.internalValue = config.paginationConfig;
    this._queryStrategyConfig.internalValue = config.queryStrategyConfig;
    this._rankingConfig.internalValue = config.rankingConfig;
    this._timeouts.internalValue = config.timeouts;
    this._typosConfig.internalValue = config.typosConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // enable_personalization - computed: false, optional: true, required: false
  private _enablePersonalization?: boolean | cdktf.IResolvable; 
  public get enablePersonalization() {
    return this.getBooleanAttribute('enable_personalization');
  }
  public set enablePersonalization(value: boolean | cdktf.IResolvable) {
    this._enablePersonalization = value;
  }
  public resetEnablePersonalization() {
    this._enablePersonalization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePersonalizationInput() {
    return this._enablePersonalization;
  }

  // enable_rules - computed: false, optional: true, required: false
  private _enableRules?: boolean | cdktf.IResolvable; 
  public get enableRules() {
    return this.getBooleanAttribute('enable_rules');
  }
  public set enableRules(value: boolean | cdktf.IResolvable) {
    this._enableRules = value;
  }
  public resetEnableRules() {
    this._enableRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRulesInput() {
    return this._enableRules;
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

  // performance_config - computed: true, optional: false, required: false
  private _performanceConfig = new VirtualIndexPerformanceConfigList(this, "performance_config", false);
  public get performanceConfig() {
    return this._performanceConfig;
  }

  // primary_index_name - computed: false, optional: false, required: true
  private _primaryIndexName?: string; 
  public get primaryIndexName() {
    return this.getStringAttribute('primary_index_name');
  }
  public set primaryIndexName(value: string) {
    this._primaryIndexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIndexNameInput() {
    return this._primaryIndexName;
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new VirtualIndexAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: VirtualIndexAdvancedConfig) {
    this._advancedConfig.internalValue = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig.internalValue;
  }

  // attributes_config - computed: false, optional: true, required: false
  private _attributesConfig = new VirtualIndexAttributesConfigOutputReference(this, "attributes_config");
  public get attributesConfig() {
    return this._attributesConfig;
  }
  public putAttributesConfig(value: VirtualIndexAttributesConfig) {
    this._attributesConfig.internalValue = value;
  }
  public resetAttributesConfig() {
    this._attributesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesConfigInput() {
    return this._attributesConfig.internalValue;
  }

  // faceting_config - computed: false, optional: true, required: false
  private _facetingConfig = new VirtualIndexFacetingConfigOutputReference(this, "faceting_config");
  public get facetingConfig() {
    return this._facetingConfig;
  }
  public putFacetingConfig(value: VirtualIndexFacetingConfig) {
    this._facetingConfig.internalValue = value;
  }
  public resetFacetingConfig() {
    this._facetingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetingConfigInput() {
    return this._facetingConfig.internalValue;
  }

  // highlight_and_snippet_config - computed: false, optional: true, required: false
  private _highlightAndSnippetConfig = new VirtualIndexHighlightAndSnippetConfigOutputReference(this, "highlight_and_snippet_config");
  public get highlightAndSnippetConfig() {
    return this._highlightAndSnippetConfig;
  }
  public putHighlightAndSnippetConfig(value: VirtualIndexHighlightAndSnippetConfig) {
    this._highlightAndSnippetConfig.internalValue = value;
  }
  public resetHighlightAndSnippetConfig() {
    this._highlightAndSnippetConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highlightAndSnippetConfigInput() {
    return this._highlightAndSnippetConfig.internalValue;
  }

  // languages_config - computed: false, optional: true, required: false
  private _languagesConfig = new VirtualIndexLanguagesConfigOutputReference(this, "languages_config");
  public get languagesConfig() {
    return this._languagesConfig;
  }
  public putLanguagesConfig(value: VirtualIndexLanguagesConfig) {
    this._languagesConfig.internalValue = value;
  }
  public resetLanguagesConfig() {
    this._languagesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesConfigInput() {
    return this._languagesConfig.internalValue;
  }

  // pagination_config - computed: false, optional: true, required: false
  private _paginationConfig = new VirtualIndexPaginationConfigOutputReference(this, "pagination_config");
  public get paginationConfig() {
    return this._paginationConfig;
  }
  public putPaginationConfig(value: VirtualIndexPaginationConfig) {
    this._paginationConfig.internalValue = value;
  }
  public resetPaginationConfig() {
    this._paginationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationConfigInput() {
    return this._paginationConfig.internalValue;
  }

  // query_strategy_config - computed: false, optional: true, required: false
  private _queryStrategyConfig = new VirtualIndexQueryStrategyConfigOutputReference(this, "query_strategy_config");
  public get queryStrategyConfig() {
    return this._queryStrategyConfig;
  }
  public putQueryStrategyConfig(value: VirtualIndexQueryStrategyConfig) {
    this._queryStrategyConfig.internalValue = value;
  }
  public resetQueryStrategyConfig() {
    this._queryStrategyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStrategyConfigInput() {
    return this._queryStrategyConfig.internalValue;
  }

  // ranking_config - computed: false, optional: true, required: false
  private _rankingConfig = new VirtualIndexRankingConfigOutputReference(this, "ranking_config");
  public get rankingConfig() {
    return this._rankingConfig;
  }
  public putRankingConfig(value: VirtualIndexRankingConfig) {
    this._rankingConfig.internalValue = value;
  }
  public resetRankingConfig() {
    this._rankingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankingConfigInput() {
    return this._rankingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualIndexTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // typos_config - computed: false, optional: true, required: false
  private _typosConfig = new VirtualIndexTyposConfigOutputReference(this, "typos_config");
  public get typosConfig() {
    return this._typosConfig;
  }
  public putTyposConfig(value: VirtualIndexTyposConfig) {
    this._typosConfig.internalValue = value;
  }
  public resetTyposConfig() {
    this._typosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typosConfigInput() {
    return this._typosConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enable_personalization: cdktf.booleanToTerraform(this._enablePersonalization),
      enable_rules: cdktf.booleanToTerraform(this._enableRules),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      primary_index_name: cdktf.stringToTerraform(this._primaryIndexName),
      advanced_config: virtualIndexAdvancedConfigToTerraform(this._advancedConfig.internalValue),
      attributes_config: virtualIndexAttributesConfigToTerraform(this._attributesConfig.internalValue),
      faceting_config: virtualIndexFacetingConfigToTerraform(this._facetingConfig.internalValue),
      highlight_and_snippet_config: virtualIndexHighlightAndSnippetConfigToTerraform(this._highlightAndSnippetConfig.internalValue),
      languages_config: virtualIndexLanguagesConfigToTerraform(this._languagesConfig.internalValue),
      pagination_config: virtualIndexPaginationConfigToTerraform(this._paginationConfig.internalValue),
      query_strategy_config: virtualIndexQueryStrategyConfigToTerraform(this._queryStrategyConfig.internalValue),
      ranking_config: virtualIndexRankingConfigToTerraform(this._rankingConfig.internalValue),
      timeouts: virtualIndexTimeoutsToTerraform(this._timeouts.internalValue),
      typos_config: virtualIndexTyposConfigToTerraform(this._typosConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_personalization: {
        value: cdktf.booleanToHclTerraform(this._enablePersonalization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rules: {
        value: cdktf.booleanToHclTerraform(this._enableRules),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_index_name: {
        value: cdktf.stringToHclTerraform(this._primaryIndexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_config: {
        value: virtualIndexAdvancedConfigToHclTerraform(this._advancedConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexAdvancedConfigList",
      },
      attributes_config: {
        value: virtualIndexAttributesConfigToHclTerraform(this._attributesConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexAttributesConfigList",
      },
      faceting_config: {
        value: virtualIndexFacetingConfigToHclTerraform(this._facetingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexFacetingConfigList",
      },
      highlight_and_snippet_config: {
        value: virtualIndexHighlightAndSnippetConfigToHclTerraform(this._highlightAndSnippetConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexHighlightAndSnippetConfigList",
      },
      languages_config: {
        value: virtualIndexLanguagesConfigToHclTerraform(this._languagesConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexLanguagesConfigList",
      },
      pagination_config: {
        value: virtualIndexPaginationConfigToHclTerraform(this._paginationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexPaginationConfigList",
      },
      query_strategy_config: {
        value: virtualIndexQueryStrategyConfigToHclTerraform(this._queryStrategyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexQueryStrategyConfigList",
      },
      ranking_config: {
        value: virtualIndexRankingConfigToHclTerraform(this._rankingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexRankingConfigList",
      },
      timeouts: {
        value: virtualIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualIndexTimeouts",
      },
      typos_config: {
        value: virtualIndexTyposConfigToHclTerraform(this._typosConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualIndexTyposConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
