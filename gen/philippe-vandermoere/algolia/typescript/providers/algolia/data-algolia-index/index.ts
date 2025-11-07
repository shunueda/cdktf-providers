// https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/data-sources/index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlgoliaIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/data-sources/index#id DataAlgoliaIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/data-sources/index#name DataAlgoliaIndex#name}
  */
  readonly name: string;
}
export interface DataAlgoliaIndexSettings {
}

export function dataAlgoliaIndexSettingsToTerraform(struct?: DataAlgoliaIndexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlgoliaIndexSettingsToHclTerraform(struct?: DataAlgoliaIndexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlgoliaIndexSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlgoliaIndexSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlgoliaIndexSettings | undefined) {
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

  // allow_compression_of_integer_array - computed: true, optional: false, required: false
  public get allowCompressionOfIntegerArray() {
    return this.getBooleanAttribute('allow_compression_of_integer_array');
  }

  // allow_typos_on_numeric_tokens - computed: true, optional: false, required: false
  public get allowTyposOnNumericTokens() {
    return this.getBooleanAttribute('allow_typos_on_numeric_tokens');
  }

  // alternatives_as_exact - computed: true, optional: false, required: false
  public get alternativesAsExact() {
    return cdktf.Fn.tolist(this.getListAttribute('alternatives_as_exact'));
  }

  // attribute_criteria_computed_by_min_proximity - computed: true, optional: false, required: false
  public get attributeCriteriaComputedByMinProximity() {
    return this.getBooleanAttribute('attribute_criteria_computed_by_min_proximity');
  }

  // attribute_for_distinct - computed: true, optional: false, required: false
  public get attributeForDistinct() {
    return this.getStringAttribute('attribute_for_distinct');
  }

  // attributes_for_faceting - computed: true, optional: false, required: false
  public get attributesForFaceting() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_for_faceting'));
  }

  // attributes_to_highlight - computed: true, optional: false, required: false
  public get attributesToHighlight() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_highlight'));
  }

  // attributes_to_retrieve - computed: true, optional: false, required: false
  public get attributesToRetrieve() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_retrieve'));
  }

  // attributes_to_snippet - computed: true, optional: false, required: false
  public get attributesToSnippet() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_to_snippet'));
  }

  // camel_case_attributes - computed: true, optional: false, required: false
  public get camelCaseAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('camel_case_attributes'));
  }

  // custom_ranking - computed: true, optional: false, required: false
  public get customRanking() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_ranking'));
  }

  // disable_exact_on_attributes - computed: true, optional: false, required: false
  public get disableExactOnAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_exact_on_attributes'));
  }

  // disable_prefix_on_attributes - computed: true, optional: false, required: false
  public get disablePrefixOnAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_prefix_on_attributes'));
  }

  // disable_typo_tolerance_on_attributes - computed: true, optional: false, required: false
  public get disableTypoToleranceOnAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_typo_tolerance_on_attributes'));
  }

  // disable_typo_tolerance_on_words - computed: true, optional: false, required: false
  public get disableTypoToleranceOnWords() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_typo_tolerance_on_words'));
  }

  // distinct - computed: true, optional: false, required: false
  public get distinct() {
    return this.getNumberAttribute('distinct');
  }

  // enable_personalization - computed: true, optional: false, required: false
  public get enablePersonalization() {
    return this.getBooleanAttribute('enable_personalization');
  }

  // enable_rules - computed: true, optional: false, required: false
  public get enableRules() {
    return this.getBooleanAttribute('enable_rules');
  }

  // exact_on_single_word_query - computed: true, optional: false, required: false
  public get exactOnSingleWordQuery() {
    return this.getStringAttribute('exact_on_single_word_query');
  }

  // hits_per_page - computed: true, optional: false, required: false
  public get hitsPerPage() {
    return this.getNumberAttribute('hits_per_page');
  }

  // index_languages - computed: true, optional: false, required: false
  public get indexLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('index_languages'));
  }

  // max_facet_hits - computed: true, optional: false, required: false
  public get maxFacetHits() {
    return this.getNumberAttribute('max_facet_hits');
  }

  // max_values_per_facet - computed: true, optional: false, required: false
  public get maxValuesPerFacet() {
    return this.getNumberAttribute('max_values_per_facet');
  }

  // min_proximity - computed: true, optional: false, required: false
  public get minProximity() {
    return this.getNumberAttribute('min_proximity');
  }

  // min_word_sizefor1_typo - computed: true, optional: false, required: false
  public get minWordSizefor1Typo() {
    return this.getNumberAttribute('min_word_sizefor1_typo');
  }

  // min_word_sizefor2_typos - computed: true, optional: false, required: false
  public get minWordSizefor2Typos() {
    return this.getNumberAttribute('min_word_sizefor2_typos');
  }

  // numeric_attributes_for_filtering - computed: true, optional: false, required: false
  public get numericAttributesForFiltering() {
    return cdktf.Fn.tolist(this.getListAttribute('numeric_attributes_for_filtering'));
  }

  // optional_words - computed: true, optional: false, required: false
  public get optionalWords() {
    return cdktf.Fn.tolist(this.getListAttribute('optional_words'));
  }

  // pagination_limited_to - computed: true, optional: false, required: false
  public get paginationLimitedTo() {
    return this.getNumberAttribute('pagination_limited_to');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // query_languages - computed: true, optional: false, required: false
  public get queryLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('query_languages'));
  }

  // query_type - computed: true, optional: false, required: false
  public get queryType() {
    return this.getStringAttribute('query_type');
  }

  // ranking - computed: true, optional: false, required: false
  public get ranking() {
    return cdktf.Fn.tolist(this.getListAttribute('ranking'));
  }

  // remove_words_if_no_results - computed: true, optional: false, required: false
  public get removeWordsIfNoResults() {
    return this.getStringAttribute('remove_words_if_no_results');
  }

  // replace_synonyms_in_highlight - computed: true, optional: false, required: false
  public get replaceSynonymsInHighlight() {
    return this.getBooleanAttribute('replace_synonyms_in_highlight');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return cdktf.Fn.tolist(this.getListAttribute('replicas'));
  }

  // restrict_highlight_and_snippet_arrays - computed: true, optional: false, required: false
  public get restrictHighlightAndSnippetArrays() {
    return this.getBooleanAttribute('restrict_highlight_and_snippet_arrays');
  }

  // searchable_attributes - computed: true, optional: false, required: false
  public get searchableAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('searchable_attributes'));
  }

  // separators_to_index - computed: true, optional: false, required: false
  public get separatorsToIndex() {
    return this.getStringAttribute('separators_to_index');
  }

  // snippet_ellipsis_text - computed: true, optional: false, required: false
  public get snippetEllipsisText() {
    return this.getStringAttribute('snippet_ellipsis_text');
  }

  // sort_facet_values_by - computed: true, optional: false, required: false
  public get sortFacetValuesBy() {
    return this.getStringAttribute('sort_facet_values_by');
  }

  // unretrievable_attributes - computed: true, optional: false, required: false
  public get unretrievableAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('unretrievable_attributes'));
  }
}

export class DataAlgoliaIndexSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlgoliaIndexSettingsOutputReference {
    return new DataAlgoliaIndexSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/data-sources/index algolia_index}
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
  * @param importFromId The id of the existing DataAlgoliaIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/data-sources/index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlgoliaIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs/data-sources/index algolia_index} Data Source
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
        providerVersion: '0.7.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // settings - computed: true, optional: false, required: false
  private _settings = new DataAlgoliaIndexSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
