// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIndicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this attribute or use * or _all. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#target DataElasticstackElasticsearchIndices#target}
  */
  readonly target?: string;
}
export interface DataElasticstackElasticsearchIndicesIndicesAlias {
  /**
  * Query used to limit documents the alias can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#filter DataElasticstackElasticsearchIndices#filter}
  */
  readonly filter?: string;
  /**
  * Value used to route indexing operations to a specific shard. If specified, this overwrites the `routing` value for indexing operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#index_routing DataElasticstackElasticsearchIndices#index_routing}
  */
  readonly indexRouting?: string;
  /**
  * If true, the alias is hidden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#is_hidden DataElasticstackElasticsearchIndices#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * If true, the index is the write index for the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#is_write_index DataElasticstackElasticsearchIndices#is_write_index}
  */
  readonly isWriteIndex?: boolean | cdktf.IResolvable;
  /**
  * Index alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#name DataElasticstackElasticsearchIndices#name}
  */
  readonly name: string;
  /**
  * Value used to route indexing and search operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#routing DataElasticstackElasticsearchIndices#routing}
  */
  readonly routing?: string;
  /**
  * Value used to route search operations to a specific shard. If specified, this overwrites the routing value for search operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_routing DataElasticstackElasticsearchIndices#search_routing}
  */
  readonly searchRouting?: string;
}

export function dataElasticstackElasticsearchIndicesIndicesAliasToTerraform(struct?: DataElasticstackElasticsearchIndicesIndicesAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    index_routing: cdktf.stringToTerraform(struct!.indexRouting),
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    is_write_index: cdktf.booleanToTerraform(struct!.isWriteIndex),
    name: cdktf.stringToTerraform(struct!.name),
    routing: cdktf.stringToTerraform(struct!.routing),
    search_routing: cdktf.stringToTerraform(struct!.searchRouting),
  }
}


export function dataElasticstackElasticsearchIndicesIndicesAliasToHclTerraform(struct?: DataElasticstackElasticsearchIndicesIndicesAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_routing: {
      value: cdktf.stringToHclTerraform(struct!.indexRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_write_index: {
      value: cdktf.booleanToHclTerraform(struct!.isWriteIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing: {
      value: cdktf.stringToHclTerraform(struct!.routing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_routing: {
      value: cdktf.stringToHclTerraform(struct!.searchRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataElasticstackElasticsearchIndicesIndicesAliasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackElasticsearchIndicesIndicesAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._indexRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRouting = this._indexRouting;
    }
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._isWriteIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWriteIndex = this._isWriteIndex;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routing !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing;
    }
    if (this._searchRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchRouting = this._searchRouting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackElasticsearchIndicesIndicesAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._indexRouting = undefined;
      this._isHidden = undefined;
      this._isWriteIndex = undefined;
      this._name = undefined;
      this._routing = undefined;
      this._searchRouting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._indexRouting = value.indexRouting;
      this._isHidden = value.isHidden;
      this._isWriteIndex = value.isWriteIndex;
      this._name = value.name;
      this._routing = value.routing;
      this._searchRouting = value.searchRouting;
    }
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // index_routing - computed: true, optional: true, required: false
  private _indexRouting?: string; 
  public get indexRouting() {
    return this.getStringAttribute('index_routing');
  }
  public set indexRouting(value: string) {
    this._indexRouting = value;
  }
  public resetIndexRouting() {
    this._indexRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRoutingInput() {
    return this._indexRouting;
  }

  // is_hidden - computed: true, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // is_write_index - computed: true, optional: true, required: false
  private _isWriteIndex?: boolean | cdktf.IResolvable; 
  public get isWriteIndex() {
    return this.getBooleanAttribute('is_write_index');
  }
  public set isWriteIndex(value: boolean | cdktf.IResolvable) {
    this._isWriteIndex = value;
  }
  public resetIsWriteIndex() {
    this._isWriteIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWriteIndexInput() {
    return this._isWriteIndex;
  }

  // name - computed: true, optional: false, required: true
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

  // routing - computed: true, optional: true, required: false
  private _routing?: string; 
  public get routing() {
    return this.getStringAttribute('routing');
  }
  public set routing(value: string) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing;
  }

  // search_routing - computed: true, optional: true, required: false
  private _searchRouting?: string; 
  public get searchRouting() {
    return this.getStringAttribute('search_routing');
  }
  public set searchRouting(value: string) {
    this._searchRouting = value;
  }
  public resetSearchRouting() {
    this._searchRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchRoutingInput() {
    return this._searchRouting;
  }
}

export class DataElasticstackElasticsearchIndicesIndicesAliasList extends cdktf.ComplexList {
  public internalValue? : DataElasticstackElasticsearchIndicesIndicesAlias[] | cdktf.IResolvable

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
  public get(index: number): DataElasticstackElasticsearchIndicesIndicesAliasOutputReference {
    return new DataElasticstackElasticsearchIndicesIndicesAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataElasticstackElasticsearchIndicesIndices {
  /**
  * Aliases for the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#alias DataElasticstackElasticsearchIndices#alias}
  */
  readonly alias?: DataElasticstackElasticsearchIndicesIndicesAlias[] | cdktf.IResolvable;
  /**
  * A JSON string describing the analyzers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#analysis_analyzer DataElasticstackElasticsearchIndices#analysis_analyzer}
  */
  readonly analysisAnalyzer?: string;
  /**
  * A JSON string describing the char_filters applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#analysis_char_filter DataElasticstackElasticsearchIndices#analysis_char_filter}
  */
  readonly analysisCharFilter?: string;
  /**
  * A JSON string describing the filters applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#analysis_filter DataElasticstackElasticsearchIndices#analysis_filter}
  */
  readonly analysisFilter?: string;
  /**
  * A JSON string describing the normalizers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#analysis_normalizer DataElasticstackElasticsearchIndices#analysis_normalizer}
  */
  readonly analysisNormalizer?: string;
  /**
  * A JSON string describing the tokenizers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#analysis_tokenizer DataElasticstackElasticsearchIndices#analysis_tokenizer}
  */
  readonly analysisTokenizer?: string;
  /**
  * The maximum number of tokens that can be produced using _analyze API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#analyze_max_token_count DataElasticstackElasticsearchIndices#analyze_max_token_count}
  */
  readonly analyzeMaxTokenCount?: number;
  /**
  * Set the number of replicas to the node count in the cluster. Set to a dash delimited lower and upper bound (e.g. 0-5) or use all for the upper bound (e.g. 0-all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#auto_expand_replicas DataElasticstackElasticsearchIndices#auto_expand_replicas}
  */
  readonly autoExpandReplicas?: string;
  /**
  * Set to `true` to disable index metadata reads and writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#blocks_metadata DataElasticstackElasticsearchIndices#blocks_metadata}
  */
  readonly blocksMetadata?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to disable read operations against the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#blocks_read DataElasticstackElasticsearchIndices#blocks_read}
  */
  readonly blocksRead?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to make the index and index metadata read only, `false` to allow writes and metadata changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#blocks_read_only DataElasticstackElasticsearchIndices#blocks_read_only}
  */
  readonly blocksReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Identical to `index.blocks.read_only` but allows deleting the index to free up resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#blocks_read_only_allow_delete DataElasticstackElasticsearchIndices#blocks_read_only_allow_delete}
  */
  readonly blocksReadOnlyAllowDelete?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to disable data write operations against the index. This setting does not affect metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#blocks_write DataElasticstackElasticsearchIndices#blocks_write}
  */
  readonly blocksWrite?: boolean | cdktf.IResolvable;
  /**
  * The `default` value compresses stored data with LZ4 compression, but this can be set to `best_compression` which uses DEFLATE for a higher compression ratio. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#codec DataElasticstackElasticsearchIndices#codec}
  */
  readonly codec?: string;
  /**
  * The default ingest node pipeline for this index. Index requests will fail if the default pipeline is set and the pipeline does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#default_pipeline DataElasticstackElasticsearchIndices#default_pipeline}
  */
  readonly defaultPipeline?: string;
  /**
  * Whether to allow Terraform to destroy the index. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply command that deletes the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#deletion_protection DataElasticstackElasticsearchIndices#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Final ingest pipeline for the index. Indexing requests will fail if the final pipeline is set and the pipeline does not exist. The final pipeline always runs after the request pipeline (if specified) and the default pipeline (if it exists). The special pipeline name _none indicates no ingest pipeline will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#final_pipeline DataElasticstackElasticsearchIndices#final_pipeline}
  */
  readonly finalPipeline?: string;
  /**
  * The length of time that a deleted document's version number remains available for further versioned operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#gc_deletes DataElasticstackElasticsearchIndices#gc_deletes}
  */
  readonly gcDeletes?: string;
  /**
  * The maximum number of characters that will be analyzed for a highlight request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#highlight_max_analyzed_offset DataElasticstackElasticsearchIndices#highlight_max_analyzed_offset}
  */
  readonly highlightMaxAnalyzedOffset?: number;
  /**
  * Set which logging level to use for the search slow log, can be: `warn`, `info`, `debug`, `trace`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#indexing_slowlog_level DataElasticstackElasticsearchIndices#indexing_slowlog_level}
  */
  readonly indexingSlowlogLevel?: string;
  /**
  * Set the number of characters of the `_source` to include in the slowlog lines, `false` or `0` will skip logging the source entirely and setting it to `true` will log the entire source regardless of size. The original `_source` is reformatted by default to make sure that it fits on a single log line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#indexing_slowlog_source DataElasticstackElasticsearchIndices#indexing_slowlog_source}
  */
  readonly indexingSlowlogSource?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#indexing_slowlog_threshold_index_debug DataElasticstackElasticsearchIndices#indexing_slowlog_threshold_index_debug}
  */
  readonly indexingSlowlogThresholdIndexDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#indexing_slowlog_threshold_index_info DataElasticstackElasticsearchIndices#indexing_slowlog_threshold_index_info}
  */
  readonly indexingSlowlogThresholdIndexInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#indexing_slowlog_threshold_index_trace DataElasticstackElasticsearchIndices#indexing_slowlog_threshold_index_trace}
  */
  readonly indexingSlowlogThresholdIndexTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#indexing_slowlog_threshold_index_warn DataElasticstackElasticsearchIndices#indexing_slowlog_threshold_index_warn}
  */
  readonly indexingSlowlogThresholdIndexWarn?: string;
  /**
  * Indicates whether cached filters are pre-loaded for nested queries. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#load_fixed_bitset_filters_eagerly DataElasticstackElasticsearchIndices#load_fixed_bitset_filters_eagerly}
  */
  readonly loadFixedBitsetFiltersEagerly?: boolean | cdktf.IResolvable;
  /**
  * Set index level coercion setting that is applied to all mapping types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#mapping_coerce DataElasticstackElasticsearchIndices#mapping_coerce}
  */
  readonly mappingCoerce?: boolean | cdktf.IResolvable;
  /**
  * Mapping for fields in the index.
  * 							If specified, this mapping can include: field names, [field data types](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html), [mapping parameters](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-params.html).
  * 							**NOTE:**
  * 							- Changing datatypes in the existing _mappings_ will force index to be re-created.
  * 							- Removing field will be ignored by default same as elasticsearch. You need to recreate the index to remove field completely.
  * 							
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#mappings DataElasticstackElasticsearchIndices#mappings}
  */
  readonly mappings?: string;
  /**
  * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. Defaults to `30s`. This value is ignored when running against Serverless projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#master_timeout DataElasticstackElasticsearchIndices#master_timeout}
  */
  readonly masterTimeout?: string;
  /**
  * The maximum number of `docvalue_fields` that are allowed in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_docvalue_fields_search DataElasticstackElasticsearchIndices#max_docvalue_fields_search}
  */
  readonly maxDocvalueFieldsSearch?: number;
  /**
  * The maximum value of `from + size` for inner hits definition and top hits aggregations to this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_inner_result_window DataElasticstackElasticsearchIndices#max_inner_result_window}
  */
  readonly maxInnerResultWindow?: number;
  /**
  * The maximum allowed difference between min_gram and max_gram for NGramTokenizer and NGramTokenFilter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_ngram_diff DataElasticstackElasticsearchIndices#max_ngram_diff}
  */
  readonly maxNgramDiff?: number;
  /**
  * Maximum number of refresh listeners available on each shard of the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_refresh_listeners DataElasticstackElasticsearchIndices#max_refresh_listeners}
  */
  readonly maxRefreshListeners?: number;
  /**
  * The maximum length of regex that can be used in Regexp Query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_regex_length DataElasticstackElasticsearchIndices#max_regex_length}
  */
  readonly maxRegexLength?: number;
  /**
  * The maximum value of `window_size` for `rescore` requests in searches of this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_rescore_window DataElasticstackElasticsearchIndices#max_rescore_window}
  */
  readonly maxRescoreWindow?: number;
  /**
  * The maximum value of `from + size` for searches to this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_result_window DataElasticstackElasticsearchIndices#max_result_window}
  */
  readonly maxResultWindow?: number;
  /**
  * The maximum number of `script_fields` that are allowed in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_script_fields DataElasticstackElasticsearchIndices#max_script_fields}
  */
  readonly maxScriptFields?: number;
  /**
  * The maximum allowed difference between max_shingle_size and min_shingle_size for ShingleTokenFilter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_shingle_diff DataElasticstackElasticsearchIndices#max_shingle_diff}
  */
  readonly maxShingleDiff?: number;
  /**
  * The maximum number of terms that can be used in Terms Query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#max_terms_count DataElasticstackElasticsearchIndices#max_terms_count}
  */
  readonly maxTermsCount?: number;
  /**
  * Name of the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#name DataElasticstackElasticsearchIndices#name}
  */
  readonly name: string;
  /**
  * Number of shard replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#number_of_replicas DataElasticstackElasticsearchIndices#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * Value used with number_of_shards to route documents to a primary shard. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#number_of_routing_shards DataElasticstackElasticsearchIndices#number_of_routing_shards}
  */
  readonly numberOfRoutingShards?: number;
  /**
  * Number of shards for the index. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#number_of_shards DataElasticstackElasticsearchIndices#number_of_shards}
  */
  readonly numberOfShards?: number;
  /**
  * Wildcard (*) patterns matching one or more fields. Defaults to '*', which matches all fields eligible for term-level queries, excluding metadata fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#query_default_field DataElasticstackElasticsearchIndices#query_default_field}
  */
  readonly queryDefaultField?: string[];
  /**
  * How often to perform a refresh operation, which makes recent changes to the index visible to search. Can be set to `-1` to disable refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#refresh_interval DataElasticstackElasticsearchIndices#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * Controls shard allocation for this index. It can be set to: `all` , `primaries` , `new_primaries` , `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#routing_allocation_enable DataElasticstackElasticsearchIndices#routing_allocation_enable}
  */
  readonly routingAllocationEnable?: string;
  /**
  * The number of shards a custom routing value can go to. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#routing_partition_size DataElasticstackElasticsearchIndices#routing_partition_size}
  */
  readonly routingPartitionSize?: number;
  /**
  * Enables shard rebalancing for this index. It can be set to: `all`, `primaries` , `replicas` , `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#routing_rebalance_enable DataElasticstackElasticsearchIndices#routing_rebalance_enable}
  */
  readonly routingRebalanceEnable?: string;
  /**
  * How long a shard can not receive a search or get request until it’s considered search idle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_idle_after DataElasticstackElasticsearchIndices#search_idle_after}
  */
  readonly searchIdleAfter?: string;
  /**
  * Set which logging level to use for the search slow log, can be: `warn`, `info`, `debug`, `trace`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_level DataElasticstackElasticsearchIndices#search_slowlog_level}
  */
  readonly searchSlowlogLevel?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_threshold_fetch_debug DataElasticstackElasticsearchIndices#search_slowlog_threshold_fetch_debug}
  */
  readonly searchSlowlogThresholdFetchDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_threshold_fetch_info DataElasticstackElasticsearchIndices#search_slowlog_threshold_fetch_info}
  */
  readonly searchSlowlogThresholdFetchInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_threshold_fetch_trace DataElasticstackElasticsearchIndices#search_slowlog_threshold_fetch_trace}
  */
  readonly searchSlowlogThresholdFetchTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_threshold_fetch_warn DataElasticstackElasticsearchIndices#search_slowlog_threshold_fetch_warn}
  */
  readonly searchSlowlogThresholdFetchWarn?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_threshold_query_debug DataElasticstackElasticsearchIndices#search_slowlog_threshold_query_debug}
  */
  readonly searchSlowlogThresholdQueryDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_threshold_query_info DataElasticstackElasticsearchIndices#search_slowlog_threshold_query_info}
  */
  readonly searchSlowlogThresholdQueryInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_threshold_query_trace DataElasticstackElasticsearchIndices#search_slowlog_threshold_query_trace}
  */
  readonly searchSlowlogThresholdQueryTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#search_slowlog_threshold_query_warn DataElasticstackElasticsearchIndices#search_slowlog_threshold_query_warn}
  */
  readonly searchSlowlogThresholdQueryWarn?: string;
  /**
  * Whether or not shards should be checked for corruption before opening. When corruption is detected, it will prevent the shard from being opened. Accepts `false`, `true`, `checksum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#shard_check_on_startup DataElasticstackElasticsearchIndices#shard_check_on_startup}
  */
  readonly shardCheckOnStartup?: string;
  /**
  * The field to sort shards in this index by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#sort_field DataElasticstackElasticsearchIndices#sort_field}
  */
  readonly sortField?: string[];
  /**
  * The direction to sort shards in. Accepts `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#sort_order DataElasticstackElasticsearchIndices#sort_order}
  */
  readonly sortOrder?: string[];
  /**
  * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. Defaults to `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#timeout DataElasticstackElasticsearchIndices#timeout}
  */
  readonly timeout?: string;
  /**
  * Time to delay the allocation of replica shards which become unassigned because a node has left, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#unassigned_node_left_delayed_timeout DataElasticstackElasticsearchIndices#unassigned_node_left_delayed_timeout}
  */
  readonly unassignedNodeLeftDelayedTimeout?: string;
  /**
  * The number of shard copies that must be active before proceeding with the operation. Set to `all` or any positive integer up to the total number of shards in the index (number_of_replicas+1). Default: `1`, the primary shard. This value is ignored when running against Serverless projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#wait_for_active_shards DataElasticstackElasticsearchIndices#wait_for_active_shards}
  */
  readonly waitForActiveShards?: string;
}

export function dataElasticstackElasticsearchIndicesIndicesToTerraform(struct?: DataElasticstackElasticsearchIndicesIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.listMapper(dataElasticstackElasticsearchIndicesIndicesAliasToTerraform, false)(struct!.alias),
    analysis_analyzer: cdktf.stringToTerraform(struct!.analysisAnalyzer),
    analysis_char_filter: cdktf.stringToTerraform(struct!.analysisCharFilter),
    analysis_filter: cdktf.stringToTerraform(struct!.analysisFilter),
    analysis_normalizer: cdktf.stringToTerraform(struct!.analysisNormalizer),
    analysis_tokenizer: cdktf.stringToTerraform(struct!.analysisTokenizer),
    analyze_max_token_count: cdktf.numberToTerraform(struct!.analyzeMaxTokenCount),
    auto_expand_replicas: cdktf.stringToTerraform(struct!.autoExpandReplicas),
    blocks_metadata: cdktf.booleanToTerraform(struct!.blocksMetadata),
    blocks_read: cdktf.booleanToTerraform(struct!.blocksRead),
    blocks_read_only: cdktf.booleanToTerraform(struct!.blocksReadOnly),
    blocks_read_only_allow_delete: cdktf.booleanToTerraform(struct!.blocksReadOnlyAllowDelete),
    blocks_write: cdktf.booleanToTerraform(struct!.blocksWrite),
    codec: cdktf.stringToTerraform(struct!.codec),
    default_pipeline: cdktf.stringToTerraform(struct!.defaultPipeline),
    deletion_protection: cdktf.booleanToTerraform(struct!.deletionProtection),
    final_pipeline: cdktf.stringToTerraform(struct!.finalPipeline),
    gc_deletes: cdktf.stringToTerraform(struct!.gcDeletes),
    highlight_max_analyzed_offset: cdktf.numberToTerraform(struct!.highlightMaxAnalyzedOffset),
    indexing_slowlog_level: cdktf.stringToTerraform(struct!.indexingSlowlogLevel),
    indexing_slowlog_source: cdktf.stringToTerraform(struct!.indexingSlowlogSource),
    indexing_slowlog_threshold_index_debug: cdktf.stringToTerraform(struct!.indexingSlowlogThresholdIndexDebug),
    indexing_slowlog_threshold_index_info: cdktf.stringToTerraform(struct!.indexingSlowlogThresholdIndexInfo),
    indexing_slowlog_threshold_index_trace: cdktf.stringToTerraform(struct!.indexingSlowlogThresholdIndexTrace),
    indexing_slowlog_threshold_index_warn: cdktf.stringToTerraform(struct!.indexingSlowlogThresholdIndexWarn),
    load_fixed_bitset_filters_eagerly: cdktf.booleanToTerraform(struct!.loadFixedBitsetFiltersEagerly),
    mapping_coerce: cdktf.booleanToTerraform(struct!.mappingCoerce),
    mappings: cdktf.stringToTerraform(struct!.mappings),
    master_timeout: cdktf.stringToTerraform(struct!.masterTimeout),
    max_docvalue_fields_search: cdktf.numberToTerraform(struct!.maxDocvalueFieldsSearch),
    max_inner_result_window: cdktf.numberToTerraform(struct!.maxInnerResultWindow),
    max_ngram_diff: cdktf.numberToTerraform(struct!.maxNgramDiff),
    max_refresh_listeners: cdktf.numberToTerraform(struct!.maxRefreshListeners),
    max_regex_length: cdktf.numberToTerraform(struct!.maxRegexLength),
    max_rescore_window: cdktf.numberToTerraform(struct!.maxRescoreWindow),
    max_result_window: cdktf.numberToTerraform(struct!.maxResultWindow),
    max_script_fields: cdktf.numberToTerraform(struct!.maxScriptFields),
    max_shingle_diff: cdktf.numberToTerraform(struct!.maxShingleDiff),
    max_terms_count: cdktf.numberToTerraform(struct!.maxTermsCount),
    name: cdktf.stringToTerraform(struct!.name),
    number_of_replicas: cdktf.numberToTerraform(struct!.numberOfReplicas),
    number_of_routing_shards: cdktf.numberToTerraform(struct!.numberOfRoutingShards),
    number_of_shards: cdktf.numberToTerraform(struct!.numberOfShards),
    query_default_field: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryDefaultField),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    routing_allocation_enable: cdktf.stringToTerraform(struct!.routingAllocationEnable),
    routing_partition_size: cdktf.numberToTerraform(struct!.routingPartitionSize),
    routing_rebalance_enable: cdktf.stringToTerraform(struct!.routingRebalanceEnable),
    search_idle_after: cdktf.stringToTerraform(struct!.searchIdleAfter),
    search_slowlog_level: cdktf.stringToTerraform(struct!.searchSlowlogLevel),
    search_slowlog_threshold_fetch_debug: cdktf.stringToTerraform(struct!.searchSlowlogThresholdFetchDebug),
    search_slowlog_threshold_fetch_info: cdktf.stringToTerraform(struct!.searchSlowlogThresholdFetchInfo),
    search_slowlog_threshold_fetch_trace: cdktf.stringToTerraform(struct!.searchSlowlogThresholdFetchTrace),
    search_slowlog_threshold_fetch_warn: cdktf.stringToTerraform(struct!.searchSlowlogThresholdFetchWarn),
    search_slowlog_threshold_query_debug: cdktf.stringToTerraform(struct!.searchSlowlogThresholdQueryDebug),
    search_slowlog_threshold_query_info: cdktf.stringToTerraform(struct!.searchSlowlogThresholdQueryInfo),
    search_slowlog_threshold_query_trace: cdktf.stringToTerraform(struct!.searchSlowlogThresholdQueryTrace),
    search_slowlog_threshold_query_warn: cdktf.stringToTerraform(struct!.searchSlowlogThresholdQueryWarn),
    shard_check_on_startup: cdktf.stringToTerraform(struct!.shardCheckOnStartup),
    sort_field: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sortField),
    sort_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sortOrder),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    unassigned_node_left_delayed_timeout: cdktf.stringToTerraform(struct!.unassignedNodeLeftDelayedTimeout),
    wait_for_active_shards: cdktf.stringToTerraform(struct!.waitForActiveShards),
  }
}


export function dataElasticstackElasticsearchIndicesIndicesToHclTerraform(struct?: DataElasticstackElasticsearchIndicesIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.listMapperHcl(dataElasticstackElasticsearchIndicesIndicesAliasToHclTerraform, false)(struct!.alias),
      isBlock: true,
      type: "set",
      storageClassType: "DataElasticstackElasticsearchIndicesIndicesAliasList",
    },
    analysis_analyzer: {
      value: cdktf.stringToHclTerraform(struct!.analysisAnalyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis_char_filter: {
      value: cdktf.stringToHclTerraform(struct!.analysisCharFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis_filter: {
      value: cdktf.stringToHclTerraform(struct!.analysisFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis_normalizer: {
      value: cdktf.stringToHclTerraform(struct!.analysisNormalizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis_tokenizer: {
      value: cdktf.stringToHclTerraform(struct!.analysisTokenizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analyze_max_token_count: {
      value: cdktf.numberToHclTerraform(struct!.analyzeMaxTokenCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_expand_replicas: {
      value: cdktf.stringToHclTerraform(struct!.autoExpandReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocks_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.blocksMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blocks_read: {
      value: cdktf.booleanToHclTerraform(struct!.blocksRead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blocks_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.blocksReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blocks_read_only_allow_delete: {
      value: cdktf.booleanToHclTerraform(struct!.blocksReadOnlyAllowDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blocks_write: {
      value: cdktf.booleanToHclTerraform(struct!.blocksWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_pipeline: {
      value: cdktf.stringToHclTerraform(struct!.defaultPipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_protection: {
      value: cdktf.booleanToHclTerraform(struct!.deletionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    final_pipeline: {
      value: cdktf.stringToHclTerraform(struct!.finalPipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gc_deletes: {
      value: cdktf.stringToHclTerraform(struct!.gcDeletes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    highlight_max_analyzed_offset: {
      value: cdktf.numberToHclTerraform(struct!.highlightMaxAnalyzedOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indexing_slowlog_level: {
      value: cdktf.stringToHclTerraform(struct!.indexingSlowlogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexing_slowlog_source: {
      value: cdktf.stringToHclTerraform(struct!.indexingSlowlogSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexing_slowlog_threshold_index_debug: {
      value: cdktf.stringToHclTerraform(struct!.indexingSlowlogThresholdIndexDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexing_slowlog_threshold_index_info: {
      value: cdktf.stringToHclTerraform(struct!.indexingSlowlogThresholdIndexInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexing_slowlog_threshold_index_trace: {
      value: cdktf.stringToHclTerraform(struct!.indexingSlowlogThresholdIndexTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexing_slowlog_threshold_index_warn: {
      value: cdktf.stringToHclTerraform(struct!.indexingSlowlogThresholdIndexWarn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_fixed_bitset_filters_eagerly: {
      value: cdktf.booleanToHclTerraform(struct!.loadFixedBitsetFiltersEagerly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapping_coerce: {
      value: cdktf.booleanToHclTerraform(struct!.mappingCoerce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mappings: {
      value: cdktf.stringToHclTerraform(struct!.mappings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_timeout: {
      value: cdktf.stringToHclTerraform(struct!.masterTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_docvalue_fields_search: {
      value: cdktf.numberToHclTerraform(struct!.maxDocvalueFieldsSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_inner_result_window: {
      value: cdktf.numberToHclTerraform(struct!.maxInnerResultWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ngram_diff: {
      value: cdktf.numberToHclTerraform(struct!.maxNgramDiff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_refresh_listeners: {
      value: cdktf.numberToHclTerraform(struct!.maxRefreshListeners),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_regex_length: {
      value: cdktf.numberToHclTerraform(struct!.maxRegexLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rescore_window: {
      value: cdktf.numberToHclTerraform(struct!.maxRescoreWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_result_window: {
      value: cdktf.numberToHclTerraform(struct!.maxResultWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_script_fields: {
      value: cdktf.numberToHclTerraform(struct!.maxScriptFields),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_shingle_diff: {
      value: cdktf.numberToHclTerraform(struct!.maxShingleDiff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_terms_count: {
      value: cdktf.numberToHclTerraform(struct!.maxTermsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numberOfReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_routing_shards: {
      value: cdktf.numberToHclTerraform(struct!.numberOfRoutingShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_shards: {
      value: cdktf.numberToHclTerraform(struct!.numberOfShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_default_field: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryDefaultField),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_allocation_enable: {
      value: cdktf.stringToHclTerraform(struct!.routingAllocationEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_partition_size: {
      value: cdktf.numberToHclTerraform(struct!.routingPartitionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_rebalance_enable: {
      value: cdktf.stringToHclTerraform(struct!.routingRebalanceEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_idle_after: {
      value: cdktf.stringToHclTerraform(struct!.searchIdleAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_level: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_threshold_fetch_debug: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogThresholdFetchDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_threshold_fetch_info: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogThresholdFetchInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_threshold_fetch_trace: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogThresholdFetchTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_threshold_fetch_warn: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogThresholdFetchWarn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_threshold_query_debug: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogThresholdQueryDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_threshold_query_info: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogThresholdQueryInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_threshold_query_trace: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogThresholdQueryTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_slowlog_threshold_query_warn: {
      value: cdktf.stringToHclTerraform(struct!.searchSlowlogThresholdQueryWarn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shard_check_on_startup: {
      value: cdktf.stringToHclTerraform(struct!.shardCheckOnStartup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_field: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sortField),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sort_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sortOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unassigned_node_left_delayed_timeout: {
      value: cdktf.stringToHclTerraform(struct!.unassignedNodeLeftDelayedTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for_active_shards: {
      value: cdktf.stringToHclTerraform(struct!.waitForActiveShards),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataElasticstackElasticsearchIndicesIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackElasticsearchIndicesIndices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias?.internalValue;
    }
    if (this._analysisAnalyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisAnalyzer = this._analysisAnalyzer;
    }
    if (this._analysisCharFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisCharFilter = this._analysisCharFilter;
    }
    if (this._analysisFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisFilter = this._analysisFilter;
    }
    if (this._analysisNormalizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisNormalizer = this._analysisNormalizer;
    }
    if (this._analysisTokenizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisTokenizer = this._analysisTokenizer;
    }
    if (this._analyzeMaxTokenCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzeMaxTokenCount = this._analyzeMaxTokenCount;
    }
    if (this._autoExpandReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExpandReplicas = this._autoExpandReplicas;
    }
    if (this._blocksMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocksMetadata = this._blocksMetadata;
    }
    if (this._blocksRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocksRead = this._blocksRead;
    }
    if (this._blocksReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocksReadOnly = this._blocksReadOnly;
    }
    if (this._blocksReadOnlyAllowDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocksReadOnlyAllowDelete = this._blocksReadOnlyAllowDelete;
    }
    if (this._blocksWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocksWrite = this._blocksWrite;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._defaultPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPipeline = this._defaultPipeline;
    }
    if (this._deletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtection = this._deletionProtection;
    }
    if (this._finalPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalPipeline = this._finalPipeline;
    }
    if (this._gcDeletes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcDeletes = this._gcDeletes;
    }
    if (this._highlightMaxAnalyzedOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.highlightMaxAnalyzedOffset = this._highlightMaxAnalyzedOffset;
    }
    if (this._indexingSlowlogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexingSlowlogLevel = this._indexingSlowlogLevel;
    }
    if (this._indexingSlowlogSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexingSlowlogSource = this._indexingSlowlogSource;
    }
    if (this._indexingSlowlogThresholdIndexDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexingSlowlogThresholdIndexDebug = this._indexingSlowlogThresholdIndexDebug;
    }
    if (this._indexingSlowlogThresholdIndexInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexingSlowlogThresholdIndexInfo = this._indexingSlowlogThresholdIndexInfo;
    }
    if (this._indexingSlowlogThresholdIndexTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexingSlowlogThresholdIndexTrace = this._indexingSlowlogThresholdIndexTrace;
    }
    if (this._indexingSlowlogThresholdIndexWarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexingSlowlogThresholdIndexWarn = this._indexingSlowlogThresholdIndexWarn;
    }
    if (this._loadFixedBitsetFiltersEagerly !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadFixedBitsetFiltersEagerly = this._loadFixedBitsetFiltersEagerly;
    }
    if (this._mappingCoerce !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingCoerce = this._mappingCoerce;
    }
    if (this._mappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings;
    }
    if (this._masterTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterTimeout = this._masterTimeout;
    }
    if (this._maxDocvalueFieldsSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDocvalueFieldsSearch = this._maxDocvalueFieldsSearch;
    }
    if (this._maxInnerResultWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInnerResultWindow = this._maxInnerResultWindow;
    }
    if (this._maxNgramDiff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNgramDiff = this._maxNgramDiff;
    }
    if (this._maxRefreshListeners !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRefreshListeners = this._maxRefreshListeners;
    }
    if (this._maxRegexLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRegexLength = this._maxRegexLength;
    }
    if (this._maxRescoreWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRescoreWindow = this._maxRescoreWindow;
    }
    if (this._maxResultWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResultWindow = this._maxResultWindow;
    }
    if (this._maxScriptFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScriptFields = this._maxScriptFields;
    }
    if (this._maxShingleDiff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxShingleDiff = this._maxShingleDiff;
    }
    if (this._maxTermsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTermsCount = this._maxTermsCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numberOfReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfReplicas = this._numberOfReplicas;
    }
    if (this._numberOfRoutingShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfRoutingShards = this._numberOfRoutingShards;
    }
    if (this._numberOfShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfShards = this._numberOfShards;
    }
    if (this._queryDefaultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryDefaultField = this._queryDefaultField;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._routingAllocationEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingAllocationEnable = this._routingAllocationEnable;
    }
    if (this._routingPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPartitionSize = this._routingPartitionSize;
    }
    if (this._routingRebalanceEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRebalanceEnable = this._routingRebalanceEnable;
    }
    if (this._searchIdleAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchIdleAfter = this._searchIdleAfter;
    }
    if (this._searchSlowlogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogLevel = this._searchSlowlogLevel;
    }
    if (this._searchSlowlogThresholdFetchDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogThresholdFetchDebug = this._searchSlowlogThresholdFetchDebug;
    }
    if (this._searchSlowlogThresholdFetchInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogThresholdFetchInfo = this._searchSlowlogThresholdFetchInfo;
    }
    if (this._searchSlowlogThresholdFetchTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogThresholdFetchTrace = this._searchSlowlogThresholdFetchTrace;
    }
    if (this._searchSlowlogThresholdFetchWarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogThresholdFetchWarn = this._searchSlowlogThresholdFetchWarn;
    }
    if (this._searchSlowlogThresholdQueryDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogThresholdQueryDebug = this._searchSlowlogThresholdQueryDebug;
    }
    if (this._searchSlowlogThresholdQueryInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogThresholdQueryInfo = this._searchSlowlogThresholdQueryInfo;
    }
    if (this._searchSlowlogThresholdQueryTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogThresholdQueryTrace = this._searchSlowlogThresholdQueryTrace;
    }
    if (this._searchSlowlogThresholdQueryWarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSlowlogThresholdQueryWarn = this._searchSlowlogThresholdQueryWarn;
    }
    if (this._shardCheckOnStartup !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardCheckOnStartup = this._shardCheckOnStartup;
    }
    if (this._sortField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortField = this._sortField;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unassignedNodeLeftDelayedTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.unassignedNodeLeftDelayedTimeout = this._unassignedNodeLeftDelayedTimeout;
    }
    if (this._waitForActiveShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForActiveShards = this._waitForActiveShards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackElasticsearchIndicesIndices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias.internalValue = undefined;
      this._analysisAnalyzer = undefined;
      this._analysisCharFilter = undefined;
      this._analysisFilter = undefined;
      this._analysisNormalizer = undefined;
      this._analysisTokenizer = undefined;
      this._analyzeMaxTokenCount = undefined;
      this._autoExpandReplicas = undefined;
      this._blocksMetadata = undefined;
      this._blocksRead = undefined;
      this._blocksReadOnly = undefined;
      this._blocksReadOnlyAllowDelete = undefined;
      this._blocksWrite = undefined;
      this._codec = undefined;
      this._defaultPipeline = undefined;
      this._deletionProtection = undefined;
      this._finalPipeline = undefined;
      this._gcDeletes = undefined;
      this._highlightMaxAnalyzedOffset = undefined;
      this._indexingSlowlogLevel = undefined;
      this._indexingSlowlogSource = undefined;
      this._indexingSlowlogThresholdIndexDebug = undefined;
      this._indexingSlowlogThresholdIndexInfo = undefined;
      this._indexingSlowlogThresholdIndexTrace = undefined;
      this._indexingSlowlogThresholdIndexWarn = undefined;
      this._loadFixedBitsetFiltersEagerly = undefined;
      this._mappingCoerce = undefined;
      this._mappings = undefined;
      this._masterTimeout = undefined;
      this._maxDocvalueFieldsSearch = undefined;
      this._maxInnerResultWindow = undefined;
      this._maxNgramDiff = undefined;
      this._maxRefreshListeners = undefined;
      this._maxRegexLength = undefined;
      this._maxRescoreWindow = undefined;
      this._maxResultWindow = undefined;
      this._maxScriptFields = undefined;
      this._maxShingleDiff = undefined;
      this._maxTermsCount = undefined;
      this._name = undefined;
      this._numberOfReplicas = undefined;
      this._numberOfRoutingShards = undefined;
      this._numberOfShards = undefined;
      this._queryDefaultField = undefined;
      this._refreshInterval = undefined;
      this._routingAllocationEnable = undefined;
      this._routingPartitionSize = undefined;
      this._routingRebalanceEnable = undefined;
      this._searchIdleAfter = undefined;
      this._searchSlowlogLevel = undefined;
      this._searchSlowlogThresholdFetchDebug = undefined;
      this._searchSlowlogThresholdFetchInfo = undefined;
      this._searchSlowlogThresholdFetchTrace = undefined;
      this._searchSlowlogThresholdFetchWarn = undefined;
      this._searchSlowlogThresholdQueryDebug = undefined;
      this._searchSlowlogThresholdQueryInfo = undefined;
      this._searchSlowlogThresholdQueryTrace = undefined;
      this._searchSlowlogThresholdQueryWarn = undefined;
      this._shardCheckOnStartup = undefined;
      this._sortField = undefined;
      this._sortOrder = undefined;
      this._timeout = undefined;
      this._unassignedNodeLeftDelayedTimeout = undefined;
      this._waitForActiveShards = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias.internalValue = value.alias;
      this._analysisAnalyzer = value.analysisAnalyzer;
      this._analysisCharFilter = value.analysisCharFilter;
      this._analysisFilter = value.analysisFilter;
      this._analysisNormalizer = value.analysisNormalizer;
      this._analysisTokenizer = value.analysisTokenizer;
      this._analyzeMaxTokenCount = value.analyzeMaxTokenCount;
      this._autoExpandReplicas = value.autoExpandReplicas;
      this._blocksMetadata = value.blocksMetadata;
      this._blocksRead = value.blocksRead;
      this._blocksReadOnly = value.blocksReadOnly;
      this._blocksReadOnlyAllowDelete = value.blocksReadOnlyAllowDelete;
      this._blocksWrite = value.blocksWrite;
      this._codec = value.codec;
      this._defaultPipeline = value.defaultPipeline;
      this._deletionProtection = value.deletionProtection;
      this._finalPipeline = value.finalPipeline;
      this._gcDeletes = value.gcDeletes;
      this._highlightMaxAnalyzedOffset = value.highlightMaxAnalyzedOffset;
      this._indexingSlowlogLevel = value.indexingSlowlogLevel;
      this._indexingSlowlogSource = value.indexingSlowlogSource;
      this._indexingSlowlogThresholdIndexDebug = value.indexingSlowlogThresholdIndexDebug;
      this._indexingSlowlogThresholdIndexInfo = value.indexingSlowlogThresholdIndexInfo;
      this._indexingSlowlogThresholdIndexTrace = value.indexingSlowlogThresholdIndexTrace;
      this._indexingSlowlogThresholdIndexWarn = value.indexingSlowlogThresholdIndexWarn;
      this._loadFixedBitsetFiltersEagerly = value.loadFixedBitsetFiltersEagerly;
      this._mappingCoerce = value.mappingCoerce;
      this._mappings = value.mappings;
      this._masterTimeout = value.masterTimeout;
      this._maxDocvalueFieldsSearch = value.maxDocvalueFieldsSearch;
      this._maxInnerResultWindow = value.maxInnerResultWindow;
      this._maxNgramDiff = value.maxNgramDiff;
      this._maxRefreshListeners = value.maxRefreshListeners;
      this._maxRegexLength = value.maxRegexLength;
      this._maxRescoreWindow = value.maxRescoreWindow;
      this._maxResultWindow = value.maxResultWindow;
      this._maxScriptFields = value.maxScriptFields;
      this._maxShingleDiff = value.maxShingleDiff;
      this._maxTermsCount = value.maxTermsCount;
      this._name = value.name;
      this._numberOfReplicas = value.numberOfReplicas;
      this._numberOfRoutingShards = value.numberOfRoutingShards;
      this._numberOfShards = value.numberOfShards;
      this._queryDefaultField = value.queryDefaultField;
      this._refreshInterval = value.refreshInterval;
      this._routingAllocationEnable = value.routingAllocationEnable;
      this._routingPartitionSize = value.routingPartitionSize;
      this._routingRebalanceEnable = value.routingRebalanceEnable;
      this._searchIdleAfter = value.searchIdleAfter;
      this._searchSlowlogLevel = value.searchSlowlogLevel;
      this._searchSlowlogThresholdFetchDebug = value.searchSlowlogThresholdFetchDebug;
      this._searchSlowlogThresholdFetchInfo = value.searchSlowlogThresholdFetchInfo;
      this._searchSlowlogThresholdFetchTrace = value.searchSlowlogThresholdFetchTrace;
      this._searchSlowlogThresholdFetchWarn = value.searchSlowlogThresholdFetchWarn;
      this._searchSlowlogThresholdQueryDebug = value.searchSlowlogThresholdQueryDebug;
      this._searchSlowlogThresholdQueryInfo = value.searchSlowlogThresholdQueryInfo;
      this._searchSlowlogThresholdQueryTrace = value.searchSlowlogThresholdQueryTrace;
      this._searchSlowlogThresholdQueryWarn = value.searchSlowlogThresholdQueryWarn;
      this._shardCheckOnStartup = value.shardCheckOnStartup;
      this._sortField = value.sortField;
      this._sortOrder = value.sortOrder;
      this._timeout = value.timeout;
      this._unassignedNodeLeftDelayedTimeout = value.unassignedNodeLeftDelayedTimeout;
      this._waitForActiveShards = value.waitForActiveShards;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias = new DataElasticstackElasticsearchIndicesIndicesAliasList(this, "alias", true);
  public get alias() {
    return this._alias;
  }
  public putAlias(value: DataElasticstackElasticsearchIndicesIndicesAlias[] | cdktf.IResolvable) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }

  // analysis_analyzer - computed: true, optional: true, required: false
  private _analysisAnalyzer?: string; 
  public get analysisAnalyzer() {
    return this.getStringAttribute('analysis_analyzer');
  }
  public set analysisAnalyzer(value: string) {
    this._analysisAnalyzer = value;
  }
  public resetAnalysisAnalyzer() {
    this._analysisAnalyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisAnalyzerInput() {
    return this._analysisAnalyzer;
  }

  // analysis_char_filter - computed: true, optional: true, required: false
  private _analysisCharFilter?: string; 
  public get analysisCharFilter() {
    return this.getStringAttribute('analysis_char_filter');
  }
  public set analysisCharFilter(value: string) {
    this._analysisCharFilter = value;
  }
  public resetAnalysisCharFilter() {
    this._analysisCharFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisCharFilterInput() {
    return this._analysisCharFilter;
  }

  // analysis_filter - computed: true, optional: true, required: false
  private _analysisFilter?: string; 
  public get analysisFilter() {
    return this.getStringAttribute('analysis_filter');
  }
  public set analysisFilter(value: string) {
    this._analysisFilter = value;
  }
  public resetAnalysisFilter() {
    this._analysisFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisFilterInput() {
    return this._analysisFilter;
  }

  // analysis_normalizer - computed: true, optional: true, required: false
  private _analysisNormalizer?: string; 
  public get analysisNormalizer() {
    return this.getStringAttribute('analysis_normalizer');
  }
  public set analysisNormalizer(value: string) {
    this._analysisNormalizer = value;
  }
  public resetAnalysisNormalizer() {
    this._analysisNormalizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisNormalizerInput() {
    return this._analysisNormalizer;
  }

  // analysis_tokenizer - computed: true, optional: true, required: false
  private _analysisTokenizer?: string; 
  public get analysisTokenizer() {
    return this.getStringAttribute('analysis_tokenizer');
  }
  public set analysisTokenizer(value: string) {
    this._analysisTokenizer = value;
  }
  public resetAnalysisTokenizer() {
    this._analysisTokenizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisTokenizerInput() {
    return this._analysisTokenizer;
  }

  // analyze_max_token_count - computed: true, optional: true, required: false
  private _analyzeMaxTokenCount?: number; 
  public get analyzeMaxTokenCount() {
    return this.getNumberAttribute('analyze_max_token_count');
  }
  public set analyzeMaxTokenCount(value: number) {
    this._analyzeMaxTokenCount = value;
  }
  public resetAnalyzeMaxTokenCount() {
    this._analyzeMaxTokenCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeMaxTokenCountInput() {
    return this._analyzeMaxTokenCount;
  }

  // auto_expand_replicas - computed: true, optional: true, required: false
  private _autoExpandReplicas?: string; 
  public get autoExpandReplicas() {
    return this.getStringAttribute('auto_expand_replicas');
  }
  public set autoExpandReplicas(value: string) {
    this._autoExpandReplicas = value;
  }
  public resetAutoExpandReplicas() {
    this._autoExpandReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExpandReplicasInput() {
    return this._autoExpandReplicas;
  }

  // blocks_metadata - computed: true, optional: true, required: false
  private _blocksMetadata?: boolean | cdktf.IResolvable; 
  public get blocksMetadata() {
    return this.getBooleanAttribute('blocks_metadata');
  }
  public set blocksMetadata(value: boolean | cdktf.IResolvable) {
    this._blocksMetadata = value;
  }
  public resetBlocksMetadata() {
    this._blocksMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksMetadataInput() {
    return this._blocksMetadata;
  }

  // blocks_read - computed: true, optional: true, required: false
  private _blocksRead?: boolean | cdktf.IResolvable; 
  public get blocksRead() {
    return this.getBooleanAttribute('blocks_read');
  }
  public set blocksRead(value: boolean | cdktf.IResolvable) {
    this._blocksRead = value;
  }
  public resetBlocksRead() {
    this._blocksRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksReadInput() {
    return this._blocksRead;
  }

  // blocks_read_only - computed: true, optional: true, required: false
  private _blocksReadOnly?: boolean | cdktf.IResolvable; 
  public get blocksReadOnly() {
    return this.getBooleanAttribute('blocks_read_only');
  }
  public set blocksReadOnly(value: boolean | cdktf.IResolvable) {
    this._blocksReadOnly = value;
  }
  public resetBlocksReadOnly() {
    this._blocksReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksReadOnlyInput() {
    return this._blocksReadOnly;
  }

  // blocks_read_only_allow_delete - computed: true, optional: true, required: false
  private _blocksReadOnlyAllowDelete?: boolean | cdktf.IResolvable; 
  public get blocksReadOnlyAllowDelete() {
    return this.getBooleanAttribute('blocks_read_only_allow_delete');
  }
  public set blocksReadOnlyAllowDelete(value: boolean | cdktf.IResolvable) {
    this._blocksReadOnlyAllowDelete = value;
  }
  public resetBlocksReadOnlyAllowDelete() {
    this._blocksReadOnlyAllowDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksReadOnlyAllowDeleteInput() {
    return this._blocksReadOnlyAllowDelete;
  }

  // blocks_write - computed: true, optional: true, required: false
  private _blocksWrite?: boolean | cdktf.IResolvable; 
  public get blocksWrite() {
    return this.getBooleanAttribute('blocks_write');
  }
  public set blocksWrite(value: boolean | cdktf.IResolvable) {
    this._blocksWrite = value;
  }
  public resetBlocksWrite() {
    this._blocksWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksWriteInput() {
    return this._blocksWrite;
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // default_pipeline - computed: true, optional: true, required: false
  private _defaultPipeline?: string; 
  public get defaultPipeline() {
    return this.getStringAttribute('default_pipeline');
  }
  public set defaultPipeline(value: string) {
    this._defaultPipeline = value;
  }
  public resetDefaultPipeline() {
    this._defaultPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPipelineInput() {
    return this._defaultPipeline;
  }

  // deletion_protection - computed: true, optional: true, required: false
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

  // final_pipeline - computed: true, optional: true, required: false
  private _finalPipeline?: string; 
  public get finalPipeline() {
    return this.getStringAttribute('final_pipeline');
  }
  public set finalPipeline(value: string) {
    this._finalPipeline = value;
  }
  public resetFinalPipeline() {
    this._finalPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalPipelineInput() {
    return this._finalPipeline;
  }

  // gc_deletes - computed: true, optional: true, required: false
  private _gcDeletes?: string; 
  public get gcDeletes() {
    return this.getStringAttribute('gc_deletes');
  }
  public set gcDeletes(value: string) {
    this._gcDeletes = value;
  }
  public resetGcDeletes() {
    this._gcDeletes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcDeletesInput() {
    return this._gcDeletes;
  }

  // highlight_max_analyzed_offset - computed: true, optional: true, required: false
  private _highlightMaxAnalyzedOffset?: number; 
  public get highlightMaxAnalyzedOffset() {
    return this.getNumberAttribute('highlight_max_analyzed_offset');
  }
  public set highlightMaxAnalyzedOffset(value: number) {
    this._highlightMaxAnalyzedOffset = value;
  }
  public resetHighlightMaxAnalyzedOffset() {
    this._highlightMaxAnalyzedOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highlightMaxAnalyzedOffsetInput() {
    return this._highlightMaxAnalyzedOffset;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // indexing_slowlog_level - computed: true, optional: true, required: false
  private _indexingSlowlogLevel?: string; 
  public get indexingSlowlogLevel() {
    return this.getStringAttribute('indexing_slowlog_level');
  }
  public set indexingSlowlogLevel(value: string) {
    this._indexingSlowlogLevel = value;
  }
  public resetIndexingSlowlogLevel() {
    this._indexingSlowlogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingSlowlogLevelInput() {
    return this._indexingSlowlogLevel;
  }

  // indexing_slowlog_source - computed: true, optional: true, required: false
  private _indexingSlowlogSource?: string; 
  public get indexingSlowlogSource() {
    return this.getStringAttribute('indexing_slowlog_source');
  }
  public set indexingSlowlogSource(value: string) {
    this._indexingSlowlogSource = value;
  }
  public resetIndexingSlowlogSource() {
    this._indexingSlowlogSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingSlowlogSourceInput() {
    return this._indexingSlowlogSource;
  }

  // indexing_slowlog_threshold_index_debug - computed: true, optional: true, required: false
  private _indexingSlowlogThresholdIndexDebug?: string; 
  public get indexingSlowlogThresholdIndexDebug() {
    return this.getStringAttribute('indexing_slowlog_threshold_index_debug');
  }
  public set indexingSlowlogThresholdIndexDebug(value: string) {
    this._indexingSlowlogThresholdIndexDebug = value;
  }
  public resetIndexingSlowlogThresholdIndexDebug() {
    this._indexingSlowlogThresholdIndexDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingSlowlogThresholdIndexDebugInput() {
    return this._indexingSlowlogThresholdIndexDebug;
  }

  // indexing_slowlog_threshold_index_info - computed: true, optional: true, required: false
  private _indexingSlowlogThresholdIndexInfo?: string; 
  public get indexingSlowlogThresholdIndexInfo() {
    return this.getStringAttribute('indexing_slowlog_threshold_index_info');
  }
  public set indexingSlowlogThresholdIndexInfo(value: string) {
    this._indexingSlowlogThresholdIndexInfo = value;
  }
  public resetIndexingSlowlogThresholdIndexInfo() {
    this._indexingSlowlogThresholdIndexInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingSlowlogThresholdIndexInfoInput() {
    return this._indexingSlowlogThresholdIndexInfo;
  }

  // indexing_slowlog_threshold_index_trace - computed: true, optional: true, required: false
  private _indexingSlowlogThresholdIndexTrace?: string; 
  public get indexingSlowlogThresholdIndexTrace() {
    return this.getStringAttribute('indexing_slowlog_threshold_index_trace');
  }
  public set indexingSlowlogThresholdIndexTrace(value: string) {
    this._indexingSlowlogThresholdIndexTrace = value;
  }
  public resetIndexingSlowlogThresholdIndexTrace() {
    this._indexingSlowlogThresholdIndexTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingSlowlogThresholdIndexTraceInput() {
    return this._indexingSlowlogThresholdIndexTrace;
  }

  // indexing_slowlog_threshold_index_warn - computed: true, optional: true, required: false
  private _indexingSlowlogThresholdIndexWarn?: string; 
  public get indexingSlowlogThresholdIndexWarn() {
    return this.getStringAttribute('indexing_slowlog_threshold_index_warn');
  }
  public set indexingSlowlogThresholdIndexWarn(value: string) {
    this._indexingSlowlogThresholdIndexWarn = value;
  }
  public resetIndexingSlowlogThresholdIndexWarn() {
    this._indexingSlowlogThresholdIndexWarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingSlowlogThresholdIndexWarnInput() {
    return this._indexingSlowlogThresholdIndexWarn;
  }

  // load_fixed_bitset_filters_eagerly - computed: true, optional: true, required: false
  private _loadFixedBitsetFiltersEagerly?: boolean | cdktf.IResolvable; 
  public get loadFixedBitsetFiltersEagerly() {
    return this.getBooleanAttribute('load_fixed_bitset_filters_eagerly');
  }
  public set loadFixedBitsetFiltersEagerly(value: boolean | cdktf.IResolvable) {
    this._loadFixedBitsetFiltersEagerly = value;
  }
  public resetLoadFixedBitsetFiltersEagerly() {
    this._loadFixedBitsetFiltersEagerly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadFixedBitsetFiltersEagerlyInput() {
    return this._loadFixedBitsetFiltersEagerly;
  }

  // mapping_coerce - computed: true, optional: true, required: false
  private _mappingCoerce?: boolean | cdktf.IResolvable; 
  public get mappingCoerce() {
    return this.getBooleanAttribute('mapping_coerce');
  }
  public set mappingCoerce(value: boolean | cdktf.IResolvable) {
    this._mappingCoerce = value;
  }
  public resetMappingCoerce() {
    this._mappingCoerce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingCoerceInput() {
    return this._mappingCoerce;
  }

  // mappings - computed: true, optional: true, required: false
  private _mappings?: string; 
  public get mappings() {
    return this.getStringAttribute('mappings');
  }
  public set mappings(value: string) {
    this._mappings = value;
  }
  public resetMappings() {
    this._mappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings;
  }

  // master_timeout - computed: true, optional: true, required: false
  private _masterTimeout?: string; 
  public get masterTimeout() {
    return this.getStringAttribute('master_timeout');
  }
  public set masterTimeout(value: string) {
    this._masterTimeout = value;
  }
  public resetMasterTimeout() {
    this._masterTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterTimeoutInput() {
    return this._masterTimeout;
  }

  // max_docvalue_fields_search - computed: true, optional: true, required: false
  private _maxDocvalueFieldsSearch?: number; 
  public get maxDocvalueFieldsSearch() {
    return this.getNumberAttribute('max_docvalue_fields_search');
  }
  public set maxDocvalueFieldsSearch(value: number) {
    this._maxDocvalueFieldsSearch = value;
  }
  public resetMaxDocvalueFieldsSearch() {
    this._maxDocvalueFieldsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDocvalueFieldsSearchInput() {
    return this._maxDocvalueFieldsSearch;
  }

  // max_inner_result_window - computed: true, optional: true, required: false
  private _maxInnerResultWindow?: number; 
  public get maxInnerResultWindow() {
    return this.getNumberAttribute('max_inner_result_window');
  }
  public set maxInnerResultWindow(value: number) {
    this._maxInnerResultWindow = value;
  }
  public resetMaxInnerResultWindow() {
    this._maxInnerResultWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInnerResultWindowInput() {
    return this._maxInnerResultWindow;
  }

  // max_ngram_diff - computed: true, optional: true, required: false
  private _maxNgramDiff?: number; 
  public get maxNgramDiff() {
    return this.getNumberAttribute('max_ngram_diff');
  }
  public set maxNgramDiff(value: number) {
    this._maxNgramDiff = value;
  }
  public resetMaxNgramDiff() {
    this._maxNgramDiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNgramDiffInput() {
    return this._maxNgramDiff;
  }

  // max_refresh_listeners - computed: true, optional: true, required: false
  private _maxRefreshListeners?: number; 
  public get maxRefreshListeners() {
    return this.getNumberAttribute('max_refresh_listeners');
  }
  public set maxRefreshListeners(value: number) {
    this._maxRefreshListeners = value;
  }
  public resetMaxRefreshListeners() {
    this._maxRefreshListeners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRefreshListenersInput() {
    return this._maxRefreshListeners;
  }

  // max_regex_length - computed: true, optional: true, required: false
  private _maxRegexLength?: number; 
  public get maxRegexLength() {
    return this.getNumberAttribute('max_regex_length');
  }
  public set maxRegexLength(value: number) {
    this._maxRegexLength = value;
  }
  public resetMaxRegexLength() {
    this._maxRegexLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRegexLengthInput() {
    return this._maxRegexLength;
  }

  // max_rescore_window - computed: true, optional: true, required: false
  private _maxRescoreWindow?: number; 
  public get maxRescoreWindow() {
    return this.getNumberAttribute('max_rescore_window');
  }
  public set maxRescoreWindow(value: number) {
    this._maxRescoreWindow = value;
  }
  public resetMaxRescoreWindow() {
    this._maxRescoreWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRescoreWindowInput() {
    return this._maxRescoreWindow;
  }

  // max_result_window - computed: true, optional: true, required: false
  private _maxResultWindow?: number; 
  public get maxResultWindow() {
    return this.getNumberAttribute('max_result_window');
  }
  public set maxResultWindow(value: number) {
    this._maxResultWindow = value;
  }
  public resetMaxResultWindow() {
    this._maxResultWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultWindowInput() {
    return this._maxResultWindow;
  }

  // max_script_fields - computed: true, optional: true, required: false
  private _maxScriptFields?: number; 
  public get maxScriptFields() {
    return this.getNumberAttribute('max_script_fields');
  }
  public set maxScriptFields(value: number) {
    this._maxScriptFields = value;
  }
  public resetMaxScriptFields() {
    this._maxScriptFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScriptFieldsInput() {
    return this._maxScriptFields;
  }

  // max_shingle_diff - computed: true, optional: true, required: false
  private _maxShingleDiff?: number; 
  public get maxShingleDiff() {
    return this.getNumberAttribute('max_shingle_diff');
  }
  public set maxShingleDiff(value: number) {
    this._maxShingleDiff = value;
  }
  public resetMaxShingleDiff() {
    this._maxShingleDiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxShingleDiffInput() {
    return this._maxShingleDiff;
  }

  // max_terms_count - computed: true, optional: true, required: false
  private _maxTermsCount?: number; 
  public get maxTermsCount() {
    return this.getNumberAttribute('max_terms_count');
  }
  public set maxTermsCount(value: number) {
    this._maxTermsCount = value;
  }
  public resetMaxTermsCount() {
    this._maxTermsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTermsCountInput() {
    return this._maxTermsCount;
  }

  // name - computed: true, optional: false, required: true
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

  // number_of_replicas - computed: true, optional: true, required: false
  private _numberOfReplicas?: number; 
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }
  public set numberOfReplicas(value: number) {
    this._numberOfReplicas = value;
  }
  public resetNumberOfReplicas() {
    this._numberOfReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReplicasInput() {
    return this._numberOfReplicas;
  }

  // number_of_routing_shards - computed: true, optional: true, required: false
  private _numberOfRoutingShards?: number; 
  public get numberOfRoutingShards() {
    return this.getNumberAttribute('number_of_routing_shards');
  }
  public set numberOfRoutingShards(value: number) {
    this._numberOfRoutingShards = value;
  }
  public resetNumberOfRoutingShards() {
    this._numberOfRoutingShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRoutingShardsInput() {
    return this._numberOfRoutingShards;
  }

  // number_of_shards - computed: true, optional: true, required: false
  private _numberOfShards?: number; 
  public get numberOfShards() {
    return this.getNumberAttribute('number_of_shards');
  }
  public set numberOfShards(value: number) {
    this._numberOfShards = value;
  }
  public resetNumberOfShards() {
    this._numberOfShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfShardsInput() {
    return this._numberOfShards;
  }

  // query_default_field - computed: true, optional: true, required: false
  private _queryDefaultField?: string[]; 
  public get queryDefaultField() {
    return cdktf.Fn.tolist(this.getListAttribute('query_default_field'));
  }
  public set queryDefaultField(value: string[]) {
    this._queryDefaultField = value;
  }
  public resetQueryDefaultField() {
    this._queryDefaultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDefaultFieldInput() {
    return this._queryDefaultField;
  }

  // refresh_interval - computed: true, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // routing_allocation_enable - computed: true, optional: true, required: false
  private _routingAllocationEnable?: string; 
  public get routingAllocationEnable() {
    return this.getStringAttribute('routing_allocation_enable');
  }
  public set routingAllocationEnable(value: string) {
    this._routingAllocationEnable = value;
  }
  public resetRoutingAllocationEnable() {
    this._routingAllocationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingAllocationEnableInput() {
    return this._routingAllocationEnable;
  }

  // routing_partition_size - computed: true, optional: true, required: false
  private _routingPartitionSize?: number; 
  public get routingPartitionSize() {
    return this.getNumberAttribute('routing_partition_size');
  }
  public set routingPartitionSize(value: number) {
    this._routingPartitionSize = value;
  }
  public resetRoutingPartitionSize() {
    this._routingPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPartitionSizeInput() {
    return this._routingPartitionSize;
  }

  // routing_rebalance_enable - computed: true, optional: true, required: false
  private _routingRebalanceEnable?: string; 
  public get routingRebalanceEnable() {
    return this.getStringAttribute('routing_rebalance_enable');
  }
  public set routingRebalanceEnable(value: string) {
    this._routingRebalanceEnable = value;
  }
  public resetRoutingRebalanceEnable() {
    this._routingRebalanceEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRebalanceEnableInput() {
    return this._routingRebalanceEnable;
  }

  // search_idle_after - computed: true, optional: true, required: false
  private _searchIdleAfter?: string; 
  public get searchIdleAfter() {
    return this.getStringAttribute('search_idle_after');
  }
  public set searchIdleAfter(value: string) {
    this._searchIdleAfter = value;
  }
  public resetSearchIdleAfter() {
    this._searchIdleAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchIdleAfterInput() {
    return this._searchIdleAfter;
  }

  // search_slowlog_level - computed: true, optional: true, required: false
  private _searchSlowlogLevel?: string; 
  public get searchSlowlogLevel() {
    return this.getStringAttribute('search_slowlog_level');
  }
  public set searchSlowlogLevel(value: string) {
    this._searchSlowlogLevel = value;
  }
  public resetSearchSlowlogLevel() {
    this._searchSlowlogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogLevelInput() {
    return this._searchSlowlogLevel;
  }

  // search_slowlog_threshold_fetch_debug - computed: true, optional: true, required: false
  private _searchSlowlogThresholdFetchDebug?: string; 
  public get searchSlowlogThresholdFetchDebug() {
    return this.getStringAttribute('search_slowlog_threshold_fetch_debug');
  }
  public set searchSlowlogThresholdFetchDebug(value: string) {
    this._searchSlowlogThresholdFetchDebug = value;
  }
  public resetSearchSlowlogThresholdFetchDebug() {
    this._searchSlowlogThresholdFetchDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogThresholdFetchDebugInput() {
    return this._searchSlowlogThresholdFetchDebug;
  }

  // search_slowlog_threshold_fetch_info - computed: true, optional: true, required: false
  private _searchSlowlogThresholdFetchInfo?: string; 
  public get searchSlowlogThresholdFetchInfo() {
    return this.getStringAttribute('search_slowlog_threshold_fetch_info');
  }
  public set searchSlowlogThresholdFetchInfo(value: string) {
    this._searchSlowlogThresholdFetchInfo = value;
  }
  public resetSearchSlowlogThresholdFetchInfo() {
    this._searchSlowlogThresholdFetchInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogThresholdFetchInfoInput() {
    return this._searchSlowlogThresholdFetchInfo;
  }

  // search_slowlog_threshold_fetch_trace - computed: true, optional: true, required: false
  private _searchSlowlogThresholdFetchTrace?: string; 
  public get searchSlowlogThresholdFetchTrace() {
    return this.getStringAttribute('search_slowlog_threshold_fetch_trace');
  }
  public set searchSlowlogThresholdFetchTrace(value: string) {
    this._searchSlowlogThresholdFetchTrace = value;
  }
  public resetSearchSlowlogThresholdFetchTrace() {
    this._searchSlowlogThresholdFetchTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogThresholdFetchTraceInput() {
    return this._searchSlowlogThresholdFetchTrace;
  }

  // search_slowlog_threshold_fetch_warn - computed: true, optional: true, required: false
  private _searchSlowlogThresholdFetchWarn?: string; 
  public get searchSlowlogThresholdFetchWarn() {
    return this.getStringAttribute('search_slowlog_threshold_fetch_warn');
  }
  public set searchSlowlogThresholdFetchWarn(value: string) {
    this._searchSlowlogThresholdFetchWarn = value;
  }
  public resetSearchSlowlogThresholdFetchWarn() {
    this._searchSlowlogThresholdFetchWarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogThresholdFetchWarnInput() {
    return this._searchSlowlogThresholdFetchWarn;
  }

  // search_slowlog_threshold_query_debug - computed: true, optional: true, required: false
  private _searchSlowlogThresholdQueryDebug?: string; 
  public get searchSlowlogThresholdQueryDebug() {
    return this.getStringAttribute('search_slowlog_threshold_query_debug');
  }
  public set searchSlowlogThresholdQueryDebug(value: string) {
    this._searchSlowlogThresholdQueryDebug = value;
  }
  public resetSearchSlowlogThresholdQueryDebug() {
    this._searchSlowlogThresholdQueryDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogThresholdQueryDebugInput() {
    return this._searchSlowlogThresholdQueryDebug;
  }

  // search_slowlog_threshold_query_info - computed: true, optional: true, required: false
  private _searchSlowlogThresholdQueryInfo?: string; 
  public get searchSlowlogThresholdQueryInfo() {
    return this.getStringAttribute('search_slowlog_threshold_query_info');
  }
  public set searchSlowlogThresholdQueryInfo(value: string) {
    this._searchSlowlogThresholdQueryInfo = value;
  }
  public resetSearchSlowlogThresholdQueryInfo() {
    this._searchSlowlogThresholdQueryInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogThresholdQueryInfoInput() {
    return this._searchSlowlogThresholdQueryInfo;
  }

  // search_slowlog_threshold_query_trace - computed: true, optional: true, required: false
  private _searchSlowlogThresholdQueryTrace?: string; 
  public get searchSlowlogThresholdQueryTrace() {
    return this.getStringAttribute('search_slowlog_threshold_query_trace');
  }
  public set searchSlowlogThresholdQueryTrace(value: string) {
    this._searchSlowlogThresholdQueryTrace = value;
  }
  public resetSearchSlowlogThresholdQueryTrace() {
    this._searchSlowlogThresholdQueryTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogThresholdQueryTraceInput() {
    return this._searchSlowlogThresholdQueryTrace;
  }

  // search_slowlog_threshold_query_warn - computed: true, optional: true, required: false
  private _searchSlowlogThresholdQueryWarn?: string; 
  public get searchSlowlogThresholdQueryWarn() {
    return this.getStringAttribute('search_slowlog_threshold_query_warn');
  }
  public set searchSlowlogThresholdQueryWarn(value: string) {
    this._searchSlowlogThresholdQueryWarn = value;
  }
  public resetSearchSlowlogThresholdQueryWarn() {
    this._searchSlowlogThresholdQueryWarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSlowlogThresholdQueryWarnInput() {
    return this._searchSlowlogThresholdQueryWarn;
  }

  // settings_raw - computed: true, optional: false, required: false
  public get settingsRaw() {
    return this.getStringAttribute('settings_raw');
  }

  // shard_check_on_startup - computed: true, optional: true, required: false
  private _shardCheckOnStartup?: string; 
  public get shardCheckOnStartup() {
    return this.getStringAttribute('shard_check_on_startup');
  }
  public set shardCheckOnStartup(value: string) {
    this._shardCheckOnStartup = value;
  }
  public resetShardCheckOnStartup() {
    this._shardCheckOnStartup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCheckOnStartupInput() {
    return this._shardCheckOnStartup;
  }

  // sort_field - computed: true, optional: true, required: false
  private _sortField?: string[]; 
  public get sortField() {
    return cdktf.Fn.tolist(this.getListAttribute('sort_field'));
  }
  public set sortField(value: string[]) {
    this._sortField = value;
  }
  public resetSortField() {
    this._sortField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFieldInput() {
    return this._sortField;
  }

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: string[]; 
  public get sortOrder() {
    return this.getListAttribute('sort_order');
  }
  public set sortOrder(value: string[]) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unassigned_node_left_delayed_timeout - computed: true, optional: true, required: false
  private _unassignedNodeLeftDelayedTimeout?: string; 
  public get unassignedNodeLeftDelayedTimeout() {
    return this.getStringAttribute('unassigned_node_left_delayed_timeout');
  }
  public set unassignedNodeLeftDelayedTimeout(value: string) {
    this._unassignedNodeLeftDelayedTimeout = value;
  }
  public resetUnassignedNodeLeftDelayedTimeout() {
    this._unassignedNodeLeftDelayedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unassignedNodeLeftDelayedTimeoutInput() {
    return this._unassignedNodeLeftDelayedTimeout;
  }

  // wait_for_active_shards - computed: true, optional: true, required: false
  private _waitForActiveShards?: string; 
  public get waitForActiveShards() {
    return this.getStringAttribute('wait_for_active_shards');
  }
  public set waitForActiveShards(value: string) {
    this._waitForActiveShards = value;
  }
  public resetWaitForActiveShards() {
    this._waitForActiveShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForActiveShardsInput() {
    return this._waitForActiveShards;
  }
}

export class DataElasticstackElasticsearchIndicesIndicesList extends cdktf.ComplexList {
  public internalValue? : DataElasticstackElasticsearchIndicesIndices[] | cdktf.IResolvable

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
  public get(index: number): DataElasticstackElasticsearchIndicesIndicesOutputReference {
    return new DataElasticstackElasticsearchIndicesIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices elasticstack_elasticsearch_indices}
*/
export class DataElasticstackElasticsearchIndices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_indices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIndices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIndices to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIndices that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIndices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_indices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_indices elasticstack_elasticsearch_indices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIndicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIndicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_indices',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // indices - computed: true, optional: false, required: false
  private _indices = new DataElasticstackElasticsearchIndicesIndicesList(this, "indices", false);
  public get indices() {
    return this._indices;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
