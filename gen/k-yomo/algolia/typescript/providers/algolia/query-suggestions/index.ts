// https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuerySuggestionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of words and patterns to exclude from the Query Suggestions index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#exclude QuerySuggestions#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#id QuerySuggestions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Index name to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#index_name QuerySuggestions#index_name}
  */
  readonly indexName: string;
  /**
  * A list of languages used to de-duplicate singular and plural suggestions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#languages QuerySuggestions#languages}
  */
  readonly languages?: string[];
  /**
  * Region to create the index in. "us", "eu", "de" are supported. Defaults to "us" when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#region QuerySuggestions#region}
  */
  readonly region?: string;
  /**
  * source_indices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#source_indices QuerySuggestions#source_indices}
  */
  readonly sourceIndices: QuerySuggestionsSourceIndices[] | cdktf.IResolvable;
}
export interface QuerySuggestionsSourceIndicesFacets {
  /**
  * How many of the top categories to show
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#amount QuerySuggestions#amount}
  */
  readonly amount: number;
  /**
  * Category attribute in your index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#attribute QuerySuggestions#attribute}
  */
  readonly attribute: string;
}

export function querySuggestionsSourceIndicesFacetsToTerraform(struct?: QuerySuggestionsSourceIndicesFacets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    attribute: cdktf.stringToTerraform(struct!.attribute),
  }
}


export function querySuggestionsSourceIndicesFacetsToHclTerraform(struct?: QuerySuggestionsSourceIndicesFacets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuerySuggestionsSourceIndicesFacetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuerySuggestionsSourceIndicesFacets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuerySuggestionsSourceIndicesFacets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._attribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._attribute = value.attribute;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class QuerySuggestionsSourceIndicesFacetsList extends cdktf.ComplexList {
  public internalValue? : QuerySuggestionsSourceIndicesFacets[] | cdktf.IResolvable

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
  public get(index: number): QuerySuggestionsSourceIndicesFacetsOutputReference {
    return new QuerySuggestionsSourceIndicesFacetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuerySuggestionsSourceIndices {
  /**
  * A list of analytics tags to filter the popular searches per tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#analytics_tags QuerySuggestions#analytics_tags}
  */
  readonly analyticsTags?: string[];
  /**
  * A list of external indices to use to generate custom Query Suggestions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#external QuerySuggestions#external}
  */
  readonly external?: string[];
  /**
  * List of facet attributes used to generate Query Suggestions. The resulting suggestions are every combination of the facets in the nested list 
  * (e.g., (facetA and facetB) and facetC).
  * ```
  * [
  *   ["facetA", "facetB"],
  *   ["facetC"]
  * ]
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#generate QuerySuggestions#generate}
  */
  readonly generate?: string[][] | cdktf.IResolvable;
  /**
  * Index name to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#index_name QuerySuggestions#index_name}
  */
  readonly indexName: string;
  /**
  * Minimum number of hits (e.g., matching records in the source index) to generate a suggestions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#min_hits QuerySuggestions#min_hits}
  */
  readonly minHits?: number;
  /**
  * Minimum number of required letters for a suggestion to remain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#min_letters QuerySuggestions#min_letters}
  */
  readonly minLetters?: number;
  /**
  * facets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#facets QuerySuggestions#facets}
  */
  readonly facets?: QuerySuggestionsSourceIndicesFacets[] | cdktf.IResolvable;
}

export function querySuggestionsSourceIndicesToTerraform(struct?: QuerySuggestionsSourceIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.analyticsTags),
    external: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.external),
    generate: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.generate),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    min_hits: cdktf.numberToTerraform(struct!.minHits),
    min_letters: cdktf.numberToTerraform(struct!.minLetters),
    facets: cdktf.listMapper(querySuggestionsSourceIndicesFacetsToTerraform, true)(struct!.facets),
  }
}


export function querySuggestionsSourceIndicesToHclTerraform(struct?: QuerySuggestionsSourceIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.analyticsTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    external: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.external),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    generate: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.generate),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_hits: {
      value: cdktf.numberToHclTerraform(struct!.minHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_letters: {
      value: cdktf.numberToHclTerraform(struct!.minLetters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facets: {
      value: cdktf.listMapperHcl(querySuggestionsSourceIndicesFacetsToHclTerraform, true)(struct!.facets),
      isBlock: true,
      type: "list",
      storageClassType: "QuerySuggestionsSourceIndicesFacetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuerySuggestionsSourceIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuerySuggestionsSourceIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyticsTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsTags = this._analyticsTags;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._minHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHits = this._minHits;
    }
    if (this._minLetters !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLetters = this._minLetters;
    }
    if (this._facets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.facets = this._facets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuerySuggestionsSourceIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyticsTags = undefined;
      this._external = undefined;
      this._generate = undefined;
      this._indexName = undefined;
      this._minHits = undefined;
      this._minLetters = undefined;
      this._facets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyticsTags = value.analyticsTags;
      this._external = value.external;
      this._generate = value.generate;
      this._indexName = value.indexName;
      this._minHits = value.minHits;
      this._minLetters = value.minLetters;
      this._facets.internalValue = value.facets;
    }
  }

  // analytics_tags - computed: false, optional: true, required: false
  private _analyticsTags?: string[]; 
  public get analyticsTags() {
    return cdktf.Fn.tolist(this.getListAttribute('analytics_tags'));
  }
  public set analyticsTags(value: string[]) {
    this._analyticsTags = value;
  }
  public resetAnalyticsTags() {
    this._analyticsTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsTagsInput() {
    return this._analyticsTags;
  }

  // external - computed: false, optional: true, required: false
  private _external?: string[]; 
  public get external() {
    return cdktf.Fn.tolist(this.getListAttribute('external'));
  }
  public set external(value: string[]) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: string[][] | cdktf.IResolvable; 
  public get generate() {
    return this.interpolationForAttribute('generate');
  }
  public set generate(value: string[][] | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
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

  // min_hits - computed: true, optional: true, required: false
  private _minHits?: number; 
  public get minHits() {
    return this.getNumberAttribute('min_hits');
  }
  public set minHits(value: number) {
    this._minHits = value;
  }
  public resetMinHits() {
    this._minHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHitsInput() {
    return this._minHits;
  }

  // min_letters - computed: true, optional: true, required: false
  private _minLetters?: number; 
  public get minLetters() {
    return this.getNumberAttribute('min_letters');
  }
  public set minLetters(value: number) {
    this._minLetters = value;
  }
  public resetMinLetters() {
    this._minLetters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLettersInput() {
    return this._minLetters;
  }

  // facets - computed: false, optional: true, required: false
  private _facets = new QuerySuggestionsSourceIndicesFacetsList(this, "facets", false);
  public get facets() {
    return this._facets;
  }
  public putFacets(value: QuerySuggestionsSourceIndicesFacets[] | cdktf.IResolvable) {
    this._facets.internalValue = value;
  }
  public resetFacets() {
    this._facets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetsInput() {
    return this._facets.internalValue;
  }
}

export class QuerySuggestionsSourceIndicesList extends cdktf.ComplexList {
  public internalValue? : QuerySuggestionsSourceIndices[] | cdktf.IResolvable

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
  public get(index: number): QuerySuggestionsSourceIndicesOutputReference {
    return new QuerySuggestionsSourceIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions algolia_query_suggestions}
*/
export class QuerySuggestions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "algolia_query_suggestions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuerySuggestions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuerySuggestions to import
  * @param importFromId The id of the existing QuerySuggestions that should be imported. Refer to the {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuerySuggestions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_query_suggestions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/query_suggestions algolia_query_suggestions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuerySuggestionsConfig
  */
  public constructor(scope: Construct, id: string, config: QuerySuggestionsConfig) {
    super(scope, id, {
      terraformResourceType: 'algolia_query_suggestions',
      terraformGeneratorMetadata: {
        providerName: 'algolia',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exclude = config.exclude;
    this._id = config.id;
    this._indexName = config.indexName;
    this._languages = config.languages;
    this._region = config.region;
    this._sourceIndices.internalValue = config.sourceIndices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // languages - computed: false, optional: true, required: false
  private _languages?: string[]; 
  public get languages() {
    return cdktf.Fn.tolist(this.getListAttribute('languages'));
  }
  public set languages(value: string[]) {
    this._languages = value;
  }
  public resetLanguages() {
    this._languages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesInput() {
    return this._languages;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // source_indices - computed: false, optional: false, required: true
  private _sourceIndices = new QuerySuggestionsSourceIndicesList(this, "source_indices", false);
  public get sourceIndices() {
    return this._sourceIndices;
  }
  public putSourceIndices(value: QuerySuggestionsSourceIndices[] | cdktf.IResolvable) {
    this._sourceIndices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIndicesInput() {
    return this._sourceIndices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exclude),
      id: cdktf.stringToTerraform(this._id),
      index_name: cdktf.stringToTerraform(this._indexName),
      languages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._languages),
      region: cdktf.stringToTerraform(this._region),
      source_indices: cdktf.listMapper(querySuggestionsSourceIndicesToTerraform, true)(this._sourceIndices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      languages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._languages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_indices: {
        value: cdktf.listMapperHcl(querySuggestionsSourceIndicesToHclTerraform, true)(this._sourceIndices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuerySuggestionsSourceIndicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
