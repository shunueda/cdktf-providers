// https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/data-sources/index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlgoliaIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/data-sources/index#id DataAlgoliaIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/data-sources/index#name DataAlgoliaIndex#name}
  */
  readonly name: string;
  /**
  * pagination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/data-sources/index#pagination_config DataAlgoliaIndex#pagination_config}
  */
  readonly paginationConfig?: DataAlgoliaIndexPaginationConfig[] | cdktf.IResolvable;
}
export interface DataAlgoliaIndexAdvancedConfig {
}

export function dataAlgoliaIndexAdvancedConfigToTerraform(struct?: DataAlgoliaIndexAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexAdvancedConfigToHclTerraform(struct?: DataAlgoliaIndexAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexAdvancedConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_criteria_computed_by_min_proximity - computed: true, optional: false, required: false
  public get attributeCriteriaComputedByMinProximity() {
    return this.getBooleanAttribute('attribute_criteria_computed_by_min_proximity');
  }

  // attribute_for_distinct - computed: true, optional: false, required: false
  public get attributeForDistinct() {
    return this.getStringAttribute('attribute_for_distinct');
  }

  // distinct - computed: true, optional: false, required: false
  public get distinct() {
    return this.getNumberAttribute('distinct');
  }

  // max_facet_hits - computed: true, optional: false, required: false
  public get maxFacetHits() {
    return this.getNumberAttribute('max_facet_hits');
  }

  // min_proximity - computed: true, optional: false, required: false
  public get minProximity() {
    return this.getNumberAttribute('min_proximity');
  }

  // replace_synonyms_in_highlight - computed: true, optional: false, required: false
  public get replaceSynonymsInHighlight() {
    return this.getBooleanAttribute('replace_synonyms_in_highlight');
  }

  // response_fields - computed: true, optional: false, required: false
  public get responseFields() {
    return cdktf.Fn.tolist(this.getListAttribute('response_fields'));
  }
}

export class DataAlgoliaIndexAdvancedConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexAdvancedConfigOutputReference {
    return new DataAlgoliaIndexAdvancedConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexAttributesConfig {
}

export function dataAlgoliaIndexAttributesConfigToTerraform(struct?: DataAlgoliaIndexAttributesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexAttributesConfigToHclTerraform(struct?: DataAlgoliaIndexAttributesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexAttributesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexAttributesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexAttributesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes_for_faceting - computed: true, optional: false, required: false
  public get attributesForFaceting() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_for_faceting'));
  }

  // attributes_to_retrieve - computed: true, optional: false, required: false
  public get attributesToRetrieve() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_retrieve'));
  }

  // searchable_attributes - computed: true, optional: false, required: false
  public get searchableAttributes() {
    return this.getListAttribute('searchable_attributes');
  }

  // unretrievable_attributes - computed: true, optional: false, required: false
  public get unretrievableAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('unretrievable_attributes'));
  }
}

export class DataAlgoliaIndexAttributesConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexAttributesConfigOutputReference {
    return new DataAlgoliaIndexAttributesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexFacetingConfig {
}

export function dataAlgoliaIndexFacetingConfigToTerraform(struct?: DataAlgoliaIndexFacetingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexFacetingConfigToHclTerraform(struct?: DataAlgoliaIndexFacetingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexFacetingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexFacetingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexFacetingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_values_per_facet - computed: true, optional: false, required: false
  public get maxValuesPerFacet() {
    return this.getNumberAttribute('max_values_per_facet');
  }

  // sort_facet_values_by - computed: true, optional: false, required: false
  public get sortFacetValuesBy() {
    return this.getStringAttribute('sort_facet_values_by');
  }
}

export class DataAlgoliaIndexFacetingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexFacetingConfigOutputReference {
    return new DataAlgoliaIndexFacetingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexHighlightAndSnippetConfig {
}

export function dataAlgoliaIndexHighlightAndSnippetConfigToTerraform(struct?: DataAlgoliaIndexHighlightAndSnippetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexHighlightAndSnippetConfigToHclTerraform(struct?: DataAlgoliaIndexHighlightAndSnippetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexHighlightAndSnippetConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexHighlightAndSnippetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexHighlightAndSnippetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes_to_highlight - computed: true, optional: false, required: false
  public get attributesToHighlight() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_highlight'));
  }

  // attributes_to_snippet - computed: true, optional: false, required: false
  public get attributesToSnippet() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_snippet'));
  }

  // highlight_post_tag - computed: true, optional: false, required: false
  public get highlightPostTag() {
    return this.getStringAttribute('highlight_post_tag');
  }

  // highlight_pre_tag - computed: true, optional: false, required: false
  public get highlightPreTag() {
    return this.getStringAttribute('highlight_pre_tag');
  }

  // restrict_highlight_and_snippet_arrays - computed: true, optional: false, required: false
  public get restrictHighlightAndSnippetArrays() {
    return this.getBooleanAttribute('restrict_highlight_and_snippet_arrays');
  }

  // snippet_ellipsis_text - computed: true, optional: false, required: false
  public get snippetEllipsisText() {
    return this.getStringAttribute('snippet_ellipsis_text');
  }
}

export class DataAlgoliaIndexHighlightAndSnippetConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexHighlightAndSnippetConfigOutputReference {
    return new DataAlgoliaIndexHighlightAndSnippetConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexLanguagesConfigDecompoundedAttributes {
}

export function dataAlgoliaIndexLanguagesConfigDecompoundedAttributesToTerraform(struct?: DataAlgoliaIndexLanguagesConfigDecompoundedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexLanguagesConfigDecompoundedAttributesToHclTerraform(struct?: DataAlgoliaIndexLanguagesConfigDecompoundedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexLanguagesConfigDecompoundedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexLanguagesConfigDecompoundedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexLanguagesConfigDecompoundedAttributes | undefined) {
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

export class DataAlgoliaIndexLanguagesConfigDecompoundedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexLanguagesConfigDecompoundedAttributesOutputReference {
    return new DataAlgoliaIndexLanguagesConfigDecompoundedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexLanguagesConfig {
}

export function dataAlgoliaIndexLanguagesConfigToTerraform(struct?: DataAlgoliaIndexLanguagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexLanguagesConfigToHclTerraform(struct?: DataAlgoliaIndexLanguagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexLanguagesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexLanguagesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexLanguagesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes_to_transliterate - computed: true, optional: false, required: false
  public get attributesToTransliterate() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_transliterate'));
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

  // decompound_query - computed: true, optional: false, required: false
  public get decompoundQuery() {
    return this.getBooleanAttribute('decompound_query');
  }

  // decompounded_attributes - computed: true, optional: false, required: false
  private _decompoundedAttributes = new DataAlgoliaIndexLanguagesConfigDecompoundedAttributesList(this, "decompounded_attributes", false);
  public get decompoundedAttributes() {
    return this._decompoundedAttributes;
  }

  // ignore_plurals - computed: true, optional: false, required: false
  public get ignorePlurals() {
    return this.getBooleanAttribute('ignore_plurals');
  }

  // ignore_plurals_for - computed: true, optional: false, required: false
  public get ignorePluralsFor() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_plurals_for'));
  }

  // index_languages - computed: true, optional: false, required: false
  public get indexLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('index_languages'));
  }

  // keep_diacritics_on_characters - computed: true, optional: false, required: false
  public get keepDiacriticsOnCharacters() {
    return this.getStringAttribute('keep_diacritics_on_characters');
  }

  // query_languages - computed: true, optional: false, required: false
  public get queryLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('query_languages'));
  }

  // remove_stop_words - computed: true, optional: false, required: false
  public get removeStopWords() {
    return this.getBooleanAttribute('remove_stop_words');
  }

  // remove_stop_words_for - computed: true, optional: false, required: false
  public get removeStopWordsFor() {
    return cdktf.Fn.tolist(this.getListAttribute('remove_stop_words_for'));
  }
}

export class DataAlgoliaIndexLanguagesConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexLanguagesConfigOutputReference {
    return new DataAlgoliaIndexLanguagesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexPerformanceConfig {
}

export function dataAlgoliaIndexPerformanceConfigToTerraform(struct?: DataAlgoliaIndexPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexPerformanceConfigToHclTerraform(struct?: DataAlgoliaIndexPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexPerformanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexPerformanceConfig | undefined) {
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

export class DataAlgoliaIndexPerformanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexPerformanceConfigOutputReference {
    return new DataAlgoliaIndexPerformanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexQueryStrategyConfig {
}

export function dataAlgoliaIndexQueryStrategyConfigToTerraform(struct?: DataAlgoliaIndexQueryStrategyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexQueryStrategyConfigToHclTerraform(struct?: DataAlgoliaIndexQueryStrategyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexQueryStrategyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexQueryStrategyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexQueryStrategyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_syntax - computed: true, optional: false, required: false
  public get advancedSyntax() {
    return this.getBooleanAttribute('advanced_syntax');
  }

  // advanced_syntax_features - computed: true, optional: false, required: false
  public get advancedSyntaxFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('advanced_syntax_features'));
  }

  // alternatives_as_exact - computed: true, optional: false, required: false
  public get alternativesAsExact() {
    return cdktf.Fn.tolist(this.getListAttribute('alternatives_as_exact'));
  }

  // disable_exact_on_attributes - computed: true, optional: false, required: false
  public get disableExactOnAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_exact_on_attributes'));
  }

  // disable_prefix_on_attributes - computed: true, optional: false, required: false
  public get disablePrefixOnAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_prefix_on_attributes'));
  }

  // exact_on_single_word_query - computed: true, optional: false, required: false
  public get exactOnSingleWordQuery() {
    return this.getStringAttribute('exact_on_single_word_query');
  }

  // optional_words - computed: true, optional: false, required: false
  public get optionalWords() {
    return cdktf.Fn.tolist(this.getListAttribute('optional_words'));
  }

  // query_type - computed: true, optional: false, required: false
  public get queryType() {
    return this.getStringAttribute('query_type');
  }

  // remove_words_if_no_results - computed: true, optional: false, required: false
  public get removeWordsIfNoResults() {
    return this.getStringAttribute('remove_words_if_no_results');
  }
}

export class DataAlgoliaIndexQueryStrategyConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexQueryStrategyConfigOutputReference {
    return new DataAlgoliaIndexQueryStrategyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexRankingConfig {
}

export function dataAlgoliaIndexRankingConfigToTerraform(struct?: DataAlgoliaIndexRankingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexRankingConfigToHclTerraform(struct?: DataAlgoliaIndexRankingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexRankingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexRankingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexRankingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_ranking - computed: true, optional: false, required: false
  public get customRanking() {
    return this.getListAttribute('custom_ranking');
  }

  // ranking - computed: true, optional: false, required: false
  public get ranking() {
    return this.getListAttribute('ranking');
  }

  // relevancy_strictness - computed: true, optional: false, required: false
  public get relevancyStrictness() {
    return this.getNumberAttribute('relevancy_strictness');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return cdktf.Fn.tolist(this.getListAttribute('replicas'));
  }
}

export class DataAlgoliaIndexRankingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexRankingConfigOutputReference {
    return new DataAlgoliaIndexRankingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexTyposConfig {
}

export function dataAlgoliaIndexTyposConfigToTerraform(struct?: DataAlgoliaIndexTyposConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexTyposConfigToHclTerraform(struct?: DataAlgoliaIndexTyposConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexTyposConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexTyposConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexTyposConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_typos_on_numeric_tokens - computed: true, optional: false, required: false
  public get allowTyposOnNumericTokens() {
    return this.getBooleanAttribute('allow_typos_on_numeric_tokens');
  }

  // disable_typo_tolerance_on_attributes - computed: true, optional: false, required: false
  public get disableTypoToleranceOnAttributes() {
    return this.getListAttribute('disable_typo_tolerance_on_attributes');
  }

  // disable_typo_tolerance_on_words - computed: true, optional: false, required: false
  public get disableTypoToleranceOnWords() {
    return this.getListAttribute('disable_typo_tolerance_on_words');
  }

  // min_word_size_for_1_typo - computed: true, optional: false, required: false
  public get minWordSizeFor1Typo() {
    return this.getNumberAttribute('min_word_size_for_1_typo');
  }

  // min_word_size_for_2_typos - computed: true, optional: false, required: false
  public get minWordSizeFor2Typos() {
    return this.getNumberAttribute('min_word_size_for_2_typos');
  }

  // separators_to_index - computed: true, optional: false, required: false
  public get separatorsToIndex() {
    return this.getStringAttribute('separators_to_index');
  }

  // typo_tolerance - computed: true, optional: false, required: false
  public get typoTolerance() {
    return this.getStringAttribute('typo_tolerance');
  }
}

export class DataAlgoliaIndexTyposConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexTyposConfigOutputReference {
    return new DataAlgoliaIndexTyposConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlgoliaIndexPaginationConfig {
}

export function dataAlgoliaIndexPaginationConfigToTerraform(struct?: DataAlgoliaIndexPaginationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexPaginationConfigToHclTerraform(struct?: DataAlgoliaIndexPaginationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexPaginationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexPaginationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexPaginationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // hits_per_page - computed: true, optional: false, required: false
  public get hitsPerPage() {
    return this.getNumberAttribute('hits_per_page');
  }

  // pagination_limited_to - computed: true, optional: false, required: false
  public get paginationLimitedTo() {
    return this.getNumberAttribute('pagination_limited_to');
  }
}

export class DataAlgoliaIndexPaginationConfigList extends cdktf.ComplexList {
  public internalValue? : DataAlgoliaIndexPaginationConfig[] | cdktf.IResolvable

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
  public get(index: number): DataAlgoliaIndexPaginationConfigOutputReference {
    return new DataAlgoliaIndexPaginationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/data-sources/index algolia_index}
*/
export class DataAlgoliaIndex extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "algolia_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlgoliaIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlgoliaIndex to import
  * @param importFromId The id of the existing DataAlgoliaIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/data-sources/index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlgoliaIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/data-sources/index algolia_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlgoliaIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlgoliaIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'algolia_index',
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
    this._id = config.id;
    this._name = config.name;
    this._paginationConfig.internalValue = config.paginationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_config - computed: true, optional: false, required: false
  private _advancedConfig = new DataAlgoliaIndexAdvancedConfigList(this, "advanced_config", false);
  public get advancedConfig() {
    return this._advancedConfig;
  }

  // attributes_config - computed: true, optional: false, required: false
  private _attributesConfig = new DataAlgoliaIndexAttributesConfigList(this, "attributes_config", false);
  public get attributesConfig() {
    return this._attributesConfig;
  }

  // enable_personalization - computed: true, optional: false, required: false
  public get enablePersonalization() {
    return this.getBooleanAttribute('enable_personalization');
  }

  // enable_rules - computed: true, optional: false, required: false
  public get enableRules() {
    return this.getBooleanAttribute('enable_rules');
  }

  // faceting_config - computed: true, optional: false, required: false
  private _facetingConfig = new DataAlgoliaIndexFacetingConfigList(this, "faceting_config", false);
  public get facetingConfig() {
    return this._facetingConfig;
  }

  // highlight_and_snippet_config - computed: true, optional: false, required: false
  private _highlightAndSnippetConfig = new DataAlgoliaIndexHighlightAndSnippetConfigList(this, "highlight_and_snippet_config", false);
  public get highlightAndSnippetConfig() {
    return this._highlightAndSnippetConfig;
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

  // languages_config - computed: true, optional: false, required: false
  private _languagesConfig = new DataAlgoliaIndexLanguagesConfigList(this, "languages_config", false);
  public get languagesConfig() {
    return this._languagesConfig;
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
  private _performanceConfig = new DataAlgoliaIndexPerformanceConfigList(this, "performance_config", false);
  public get performanceConfig() {
    return this._performanceConfig;
  }

  // primary_index_name - computed: true, optional: false, required: false
  public get primaryIndexName() {
    return this.getStringAttribute('primary_index_name');
  }

  // query_strategy_config - computed: true, optional: false, required: false
  private _queryStrategyConfig = new DataAlgoliaIndexQueryStrategyConfigList(this, "query_strategy_config", false);
  public get queryStrategyConfig() {
    return this._queryStrategyConfig;
  }

  // ranking_config - computed: true, optional: false, required: false
  private _rankingConfig = new DataAlgoliaIndexRankingConfigList(this, "ranking_config", false);
  public get rankingConfig() {
    return this._rankingConfig;
  }

  // typos_config - computed: true, optional: false, required: false
  private _typosConfig = new DataAlgoliaIndexTyposConfigList(this, "typos_config", false);
  public get typosConfig() {
    return this._typosConfig;
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }

  // pagination_config - computed: false, optional: true, required: false
  private _paginationConfig = new DataAlgoliaIndexPaginationConfigList(this, "pagination_config", false);
  public get paginationConfig() {
    return this._paginationConfig;
  }
  public putPaginationConfig(value: DataAlgoliaIndexPaginationConfig[] | cdktf.IResolvable) {
    this._paginationConfig.internalValue = value;
  }
  public resetPaginationConfig() {
    this._paginationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationConfigInput() {
    return this._paginationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pagination_config: cdktf.listMapper(dataAlgoliaIndexPaginationConfigToTerraform, true)(this._paginationConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      pagination_config: {
        value: cdktf.listMapperHcl(dataAlgoliaIndexPaginationConfigToHclTerraform, true)(this._paginationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAlgoliaIndexPaginationConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
