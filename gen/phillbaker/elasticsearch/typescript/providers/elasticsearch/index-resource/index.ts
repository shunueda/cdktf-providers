// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * A JSON string describing a set of aliases. The index aliases API allows aliasing an index with a name, with all APIs automatically converting the alias name to the actual index name. An alias can also be mapped to more than one index, and when specifying it, the alias will automatically expand to the aliased indices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#aliases Index#aliases}
  */
  readonly aliases?: string;
  /**
  * A JSON string describing the analyzers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#analysis_analyzer Index#analysis_analyzer}
  */
  readonly analysisAnalyzer?: string;
  /**
  * A JSON string describing the char_filters applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#analysis_char_filter Index#analysis_char_filter}
  */
  readonly analysisCharFilter?: string;
  /**
  * A JSON string describing the filters applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#analysis_filter Index#analysis_filter}
  */
  readonly analysisFilter?: string;
  /**
  * A JSON string describing the normalizers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#analysis_normalizer Index#analysis_normalizer}
  */
  readonly analysisNormalizer?: string;
  /**
  * A JSON string describing the tokenizers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#analysis_tokenizer Index#analysis_tokenizer}
  */
  readonly analysisTokenizer?: string;
  /**
  * The maximum number of tokens that can be produced using _analyze API. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#analyze_max_token_count Index#analyze_max_token_count}
  */
  readonly analyzeMaxTokenCount?: string;
  /**
  * Set the number of replicas to the node count in the cluster. Set to a dash delimited lower and upper bound (e.g. 0-5) or use all for the upper bound (e.g. 0-all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#auto_expand_replicas Index#auto_expand_replicas}
  */
  readonly autoExpandReplicas?: string;
  /**
  * Set to `true` to disable index metadata reads and writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#blocks_metadata Index#blocks_metadata}
  */
  readonly blocksMetadata?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to disable read operations against the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#blocks_read Index#blocks_read}
  */
  readonly blocksRead?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to make the index and index metadata read only, `false` to allow writes and metadata changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#blocks_read_only Index#blocks_read_only}
  */
  readonly blocksReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Identical to `index.blocks.read_only` but allows deleting the index to free up resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#blocks_read_only_allow_delete Index#blocks_read_only_allow_delete}
  */
  readonly blocksReadOnlyAllowDelete?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to disable data write operations against the index. This setting does not affect metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#blocks_write Index#blocks_write}
  */
  readonly blocksWrite?: boolean | cdktf.IResolvable;
  /**
  * The `default` value compresses stored data with LZ4 compression, but this can be set to `best_compression` which uses DEFLATE for a higher compression ratio. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#codec Index#codec}
  */
  readonly codec?: string;
  /**
  * The default ingest node pipeline for this index. Index requests will fail if the default pipeline is set and the pipeline does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#default_pipeline Index#default_pipeline}
  */
  readonly defaultPipeline?: string;
  /**
  * A boolean that indicates that the index should be deleted even if it contains documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#force_destroy Index#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * The length of time that a deleted document's version number remains available for further versioned operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#gc_deletes Index#gc_deletes}
  */
  readonly gcDeletes?: string;
  /**
  * The maximum number of characters that will be analyzed for a highlight request. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#highlight_max_analyzed_offset Index#highlight_max_analyzed_offset}
  */
  readonly highlightMaxAnalyzedOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#id Index#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A string that indicates if and what we should pass to include_type_name parameter. Set to `"false"` when trying to create an index on a v6 cluster without a doc type or set to `"true"` when trying to create an index on a v7 cluster with a doc type. Since mapping updates are not currently supported, this applies only on index create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#include_type_name Index#include_type_name}
  */
  readonly includeTypeName?: string;
  /**
  * A JSON string describing the default index similarity config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#index_similarity_default Index#index_similarity_default}
  */
  readonly indexSimilarityDefault?: string;
  /**
  * Set which logging level to use for the search slow log, can be: `warn`, `info`, `debug`, `trace`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#indexing_slowlog_level Index#indexing_slowlog_level}
  */
  readonly indexingSlowlogLevel?: string;
  /**
  * Set the number of characters of the `_source` to include in the slowlog lines, `false` or `0` will skip logging the source entirely and setting it to `true` will log the entire source regardless of size. The original `_source` is reformatted by default to make sure that it fits on a single log line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#indexing_slowlog_source Index#indexing_slowlog_source}
  */
  readonly indexingSlowlogSource?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#indexing_slowlog_threshold_index_debug Index#indexing_slowlog_threshold_index_debug}
  */
  readonly indexingSlowlogThresholdIndexDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#indexing_slowlog_threshold_index_info Index#indexing_slowlog_threshold_index_info}
  */
  readonly indexingSlowlogThresholdIndexInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#indexing_slowlog_threshold_index_trace Index#indexing_slowlog_threshold_index_trace}
  */
  readonly indexingSlowlogThresholdIndexTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#indexing_slowlog_threshold_index_warn Index#indexing_slowlog_threshold_index_warn}
  */
  readonly indexingSlowlogThresholdIndexWarn?: string;
  /**
  * Indicates whether cached filters are pre-loaded for nested queries. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#load_fixed_bitset_filters_eagerly Index#load_fixed_bitset_filters_eagerly}
  */
  readonly loadFixedBitsetFiltersEagerly?: boolean | cdktf.IResolvable;
  /**
  * A JSON string defining how documents in the index, and the fields they contain, are stored and indexed. To avoid the complexities of field mapping updates, updates of this field are not allowed via this provider. See the upstream [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/indices-put-mapping.html#updating-field-mappings) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#mappings Index#mappings}
  */
  readonly mappings?: string;
  /**
  * The maximum number of `docvalue_fields` that are allowed in a query. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_docvalue_fields_search Index#max_docvalue_fields_search}
  */
  readonly maxDocvalueFieldsSearch?: string;
  /**
  * The maximum value of `from + size` for inner hits definition and top hits aggregations to this index. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_inner_result_window Index#max_inner_result_window}
  */
  readonly maxInnerResultWindow?: string;
  /**
  * The maximum allowed difference between min_gram and max_gram for NGramTokenizer and NGramTokenFilter. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_ngram_diff Index#max_ngram_diff}
  */
  readonly maxNgramDiff?: string;
  /**
  * Maximum number of refresh listeners available on each shard of the index. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_refresh_listeners Index#max_refresh_listeners}
  */
  readonly maxRefreshListeners?: string;
  /**
  * The maximum length of regex that can be used in Regexp Query. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_regex_length Index#max_regex_length}
  */
  readonly maxRegexLength?: string;
  /**
  * The maximum value of `window_size` for `rescore` requests in searches of this index. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_rescore_window Index#max_rescore_window}
  */
  readonly maxRescoreWindow?: string;
  /**
  * The maximum value of `from + size` for searches to this index. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_result_window Index#max_result_window}
  */
  readonly maxResultWindow?: string;
  /**
  * The maximum number of `script_fields` that are allowed in a query. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_script_fields Index#max_script_fields}
  */
  readonly maxScriptFields?: string;
  /**
  * The maximum allowed difference between max_shingle_size and min_shingle_size for ShingleTokenFilter. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_shingle_diff Index#max_shingle_diff}
  */
  readonly maxShingleDiff?: string;
  /**
  * The maximum number of terms that can be used in Terms Query. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#max_terms_count Index#max_terms_count}
  */
  readonly maxTermsCount?: string;
  /**
  * Name of the index to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#name Index#name}
  */
  readonly name: string;
  /**
  * Number of shard replicas. A stringified number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#number_of_replicas Index#number_of_replicas}
  */
  readonly numberOfReplicas?: string;
  /**
  * Value used with number_of_shards to route documents to a primary shard. A stringified number. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#number_of_routing_shards Index#number_of_routing_shards}
  */
  readonly numberOfRoutingShards?: string;
  /**
  * Number of shards for the index. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#number_of_shards Index#number_of_shards}
  */
  readonly numberOfShards?: string;
  /**
  * How often to perform a refresh operation, which makes recent changes to the index visible to search. Can be set to `-1` to disable refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#refresh_interval Index#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#rollover_alias Index#rollover_alias}
  */
  readonly rolloverAlias?: string;
  /**
  * Controls shard allocation for this index. It can be set to: `all` , `primaries` , `new_primaries` , `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#routing_allocation_enable Index#routing_allocation_enable}
  */
  readonly routingAllocationEnable?: string;
  /**
  * The number of shards a custom routing value can go to. A stringified number. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#routing_partition_size Index#routing_partition_size}
  */
  readonly routingPartitionSize?: string;
  /**
  * Enables shard rebalancing for this index. It can be set to: `all`, `primaries` , `replicas` , `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#routing_rebalance_enable Index#routing_rebalance_enable}
  */
  readonly routingRebalanceEnable?: string;
  /**
  * How long a shard can not receive a search or get request until it’s considered search idle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_idle_after Index#search_idle_after}
  */
  readonly searchIdleAfter?: string;
  /**
  * Set which logging level to use for the search slow log, can be: `warn`, `info`, `debug`, `trace`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_level Index#search_slowlog_level}
  */
  readonly searchSlowlogLevel?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_threshold_fetch_debug Index#search_slowlog_threshold_fetch_debug}
  */
  readonly searchSlowlogThresholdFetchDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_threshold_fetch_info Index#search_slowlog_threshold_fetch_info}
  */
  readonly searchSlowlogThresholdFetchInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_threshold_fetch_trace Index#search_slowlog_threshold_fetch_trace}
  */
  readonly searchSlowlogThresholdFetchTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_threshold_fetch_warn Index#search_slowlog_threshold_fetch_warn}
  */
  readonly searchSlowlogThresholdFetchWarn?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_threshold_query_debug Index#search_slowlog_threshold_query_debug}
  */
  readonly searchSlowlogThresholdQueryDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_threshold_query_info Index#search_slowlog_threshold_query_info}
  */
  readonly searchSlowlogThresholdQueryInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_threshold_query_trace Index#search_slowlog_threshold_query_trace}
  */
  readonly searchSlowlogThresholdQueryTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#search_slowlog_threshold_query_warn Index#search_slowlog_threshold_query_warn}
  */
  readonly searchSlowlogThresholdQueryWarn?: string;
  /**
  * Whether or not shards should be checked for corruption before opening. When corruption is detected, it will prevent the shard from being opened. Accepts `false`, `true`, `checksum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#shard_check_on_startup Index#shard_check_on_startup}
  */
  readonly shardCheckOnStartup?: string;
  /**
  * The field to sort shards in this index by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#sort_field Index#sort_field}
  */
  readonly sortField?: string;
  /**
  * The direction to sort shards in. Accepts `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#sort_order Index#sort_order}
  */
  readonly sortOrder?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index elasticsearch_index}
*/
export class Index extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Index resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Index to import
  * @param importFromId The id of the existing Index that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Index to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/index elasticsearch_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexConfig
  */
  public constructor(scope: Construct, id: string, config: IndexConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_index',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliases = config.aliases;
    this._analysisAnalyzer = config.analysisAnalyzer;
    this._analysisCharFilter = config.analysisCharFilter;
    this._analysisFilter = config.analysisFilter;
    this._analysisNormalizer = config.analysisNormalizer;
    this._analysisTokenizer = config.analysisTokenizer;
    this._analyzeMaxTokenCount = config.analyzeMaxTokenCount;
    this._autoExpandReplicas = config.autoExpandReplicas;
    this._blocksMetadata = config.blocksMetadata;
    this._blocksRead = config.blocksRead;
    this._blocksReadOnly = config.blocksReadOnly;
    this._blocksReadOnlyAllowDelete = config.blocksReadOnlyAllowDelete;
    this._blocksWrite = config.blocksWrite;
    this._codec = config.codec;
    this._defaultPipeline = config.defaultPipeline;
    this._forceDestroy = config.forceDestroy;
    this._gcDeletes = config.gcDeletes;
    this._highlightMaxAnalyzedOffset = config.highlightMaxAnalyzedOffset;
    this._id = config.id;
    this._includeTypeName = config.includeTypeName;
    this._indexSimilarityDefault = config.indexSimilarityDefault;
    this._indexingSlowlogLevel = config.indexingSlowlogLevel;
    this._indexingSlowlogSource = config.indexingSlowlogSource;
    this._indexingSlowlogThresholdIndexDebug = config.indexingSlowlogThresholdIndexDebug;
    this._indexingSlowlogThresholdIndexInfo = config.indexingSlowlogThresholdIndexInfo;
    this._indexingSlowlogThresholdIndexTrace = config.indexingSlowlogThresholdIndexTrace;
    this._indexingSlowlogThresholdIndexWarn = config.indexingSlowlogThresholdIndexWarn;
    this._loadFixedBitsetFiltersEagerly = config.loadFixedBitsetFiltersEagerly;
    this._mappings = config.mappings;
    this._maxDocvalueFieldsSearch = config.maxDocvalueFieldsSearch;
    this._maxInnerResultWindow = config.maxInnerResultWindow;
    this._maxNgramDiff = config.maxNgramDiff;
    this._maxRefreshListeners = config.maxRefreshListeners;
    this._maxRegexLength = config.maxRegexLength;
    this._maxRescoreWindow = config.maxRescoreWindow;
    this._maxResultWindow = config.maxResultWindow;
    this._maxScriptFields = config.maxScriptFields;
    this._maxShingleDiff = config.maxShingleDiff;
    this._maxTermsCount = config.maxTermsCount;
    this._name = config.name;
    this._numberOfReplicas = config.numberOfReplicas;
    this._numberOfRoutingShards = config.numberOfRoutingShards;
    this._numberOfShards = config.numberOfShards;
    this._refreshInterval = config.refreshInterval;
    this._rolloverAlias = config.rolloverAlias;
    this._routingAllocationEnable = config.routingAllocationEnable;
    this._routingPartitionSize = config.routingPartitionSize;
    this._routingRebalanceEnable = config.routingRebalanceEnable;
    this._searchIdleAfter = config.searchIdleAfter;
    this._searchSlowlogLevel = config.searchSlowlogLevel;
    this._searchSlowlogThresholdFetchDebug = config.searchSlowlogThresholdFetchDebug;
    this._searchSlowlogThresholdFetchInfo = config.searchSlowlogThresholdFetchInfo;
    this._searchSlowlogThresholdFetchTrace = config.searchSlowlogThresholdFetchTrace;
    this._searchSlowlogThresholdFetchWarn = config.searchSlowlogThresholdFetchWarn;
    this._searchSlowlogThresholdQueryDebug = config.searchSlowlogThresholdQueryDebug;
    this._searchSlowlogThresholdQueryInfo = config.searchSlowlogThresholdQueryInfo;
    this._searchSlowlogThresholdQueryTrace = config.searchSlowlogThresholdQueryTrace;
    this._searchSlowlogThresholdQueryWarn = config.searchSlowlogThresholdQueryWarn;
    this._shardCheckOnStartup = config.shardCheckOnStartup;
    this._sortField = config.sortField;
    this._sortOrder = config.sortOrder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string; 
  public get aliases() {
    return this.getStringAttribute('aliases');
  }
  public set aliases(value: string) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // analysis_analyzer - computed: false, optional: true, required: false
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

  // analysis_char_filter - computed: false, optional: true, required: false
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

  // analysis_filter - computed: false, optional: true, required: false
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

  // analysis_normalizer - computed: false, optional: true, required: false
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

  // analysis_tokenizer - computed: false, optional: true, required: false
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

  // analyze_max_token_count - computed: false, optional: true, required: false
  private _analyzeMaxTokenCount?: string; 
  public get analyzeMaxTokenCount() {
    return this.getStringAttribute('analyze_max_token_count');
  }
  public set analyzeMaxTokenCount(value: string) {
    this._analyzeMaxTokenCount = value;
  }
  public resetAnalyzeMaxTokenCount() {
    this._analyzeMaxTokenCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzeMaxTokenCountInput() {
    return this._analyzeMaxTokenCount;
  }

  // auto_expand_replicas - computed: false, optional: true, required: false
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

  // blocks_metadata - computed: false, optional: true, required: false
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

  // blocks_read - computed: false, optional: true, required: false
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

  // blocks_read_only - computed: false, optional: true, required: false
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

  // blocks_read_only_allow_delete - computed: false, optional: true, required: false
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

  // blocks_write - computed: false, optional: true, required: false
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

  // codec - computed: false, optional: true, required: false
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

  // default_pipeline - computed: false, optional: true, required: false
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // gc_deletes - computed: false, optional: true, required: false
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

  // highlight_max_analyzed_offset - computed: false, optional: true, required: false
  private _highlightMaxAnalyzedOffset?: string; 
  public get highlightMaxAnalyzedOffset() {
    return this.getStringAttribute('highlight_max_analyzed_offset');
  }
  public set highlightMaxAnalyzedOffset(value: string) {
    this._highlightMaxAnalyzedOffset = value;
  }
  public resetHighlightMaxAnalyzedOffset() {
    this._highlightMaxAnalyzedOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highlightMaxAnalyzedOffsetInput() {
    return this._highlightMaxAnalyzedOffset;
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

  // include_type_name - computed: false, optional: true, required: false
  private _includeTypeName?: string; 
  public get includeTypeName() {
    return this.getStringAttribute('include_type_name');
  }
  public set includeTypeName(value: string) {
    this._includeTypeName = value;
  }
  public resetIncludeTypeName() {
    this._includeTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTypeNameInput() {
    return this._includeTypeName;
  }

  // index_similarity_default - computed: false, optional: true, required: false
  private _indexSimilarityDefault?: string; 
  public get indexSimilarityDefault() {
    return this.getStringAttribute('index_similarity_default');
  }
  public set indexSimilarityDefault(value: string) {
    this._indexSimilarityDefault = value;
  }
  public resetIndexSimilarityDefault() {
    this._indexSimilarityDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSimilarityDefaultInput() {
    return this._indexSimilarityDefault;
  }

  // indexing_slowlog_level - computed: false, optional: true, required: false
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

  // indexing_slowlog_source - computed: false, optional: true, required: false
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

  // indexing_slowlog_threshold_index_debug - computed: false, optional: true, required: false
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

  // indexing_slowlog_threshold_index_info - computed: false, optional: true, required: false
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

  // indexing_slowlog_threshold_index_trace - computed: false, optional: true, required: false
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

  // indexing_slowlog_threshold_index_warn - computed: false, optional: true, required: false
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

  // load_fixed_bitset_filters_eagerly - computed: false, optional: true, required: false
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

  // mappings - computed: false, optional: true, required: false
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

  // max_docvalue_fields_search - computed: false, optional: true, required: false
  private _maxDocvalueFieldsSearch?: string; 
  public get maxDocvalueFieldsSearch() {
    return this.getStringAttribute('max_docvalue_fields_search');
  }
  public set maxDocvalueFieldsSearch(value: string) {
    this._maxDocvalueFieldsSearch = value;
  }
  public resetMaxDocvalueFieldsSearch() {
    this._maxDocvalueFieldsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDocvalueFieldsSearchInput() {
    return this._maxDocvalueFieldsSearch;
  }

  // max_inner_result_window - computed: false, optional: true, required: false
  private _maxInnerResultWindow?: string; 
  public get maxInnerResultWindow() {
    return this.getStringAttribute('max_inner_result_window');
  }
  public set maxInnerResultWindow(value: string) {
    this._maxInnerResultWindow = value;
  }
  public resetMaxInnerResultWindow() {
    this._maxInnerResultWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInnerResultWindowInput() {
    return this._maxInnerResultWindow;
  }

  // max_ngram_diff - computed: false, optional: true, required: false
  private _maxNgramDiff?: string; 
  public get maxNgramDiff() {
    return this.getStringAttribute('max_ngram_diff');
  }
  public set maxNgramDiff(value: string) {
    this._maxNgramDiff = value;
  }
  public resetMaxNgramDiff() {
    this._maxNgramDiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNgramDiffInput() {
    return this._maxNgramDiff;
  }

  // max_refresh_listeners - computed: false, optional: true, required: false
  private _maxRefreshListeners?: string; 
  public get maxRefreshListeners() {
    return this.getStringAttribute('max_refresh_listeners');
  }
  public set maxRefreshListeners(value: string) {
    this._maxRefreshListeners = value;
  }
  public resetMaxRefreshListeners() {
    this._maxRefreshListeners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRefreshListenersInput() {
    return this._maxRefreshListeners;
  }

  // max_regex_length - computed: false, optional: true, required: false
  private _maxRegexLength?: string; 
  public get maxRegexLength() {
    return this.getStringAttribute('max_regex_length');
  }
  public set maxRegexLength(value: string) {
    this._maxRegexLength = value;
  }
  public resetMaxRegexLength() {
    this._maxRegexLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRegexLengthInput() {
    return this._maxRegexLength;
  }

  // max_rescore_window - computed: false, optional: true, required: false
  private _maxRescoreWindow?: string; 
  public get maxRescoreWindow() {
    return this.getStringAttribute('max_rescore_window');
  }
  public set maxRescoreWindow(value: string) {
    this._maxRescoreWindow = value;
  }
  public resetMaxRescoreWindow() {
    this._maxRescoreWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRescoreWindowInput() {
    return this._maxRescoreWindow;
  }

  // max_result_window - computed: false, optional: true, required: false
  private _maxResultWindow?: string; 
  public get maxResultWindow() {
    return this.getStringAttribute('max_result_window');
  }
  public set maxResultWindow(value: string) {
    this._maxResultWindow = value;
  }
  public resetMaxResultWindow() {
    this._maxResultWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultWindowInput() {
    return this._maxResultWindow;
  }

  // max_script_fields - computed: false, optional: true, required: false
  private _maxScriptFields?: string; 
  public get maxScriptFields() {
    return this.getStringAttribute('max_script_fields');
  }
  public set maxScriptFields(value: string) {
    this._maxScriptFields = value;
  }
  public resetMaxScriptFields() {
    this._maxScriptFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScriptFieldsInput() {
    return this._maxScriptFields;
  }

  // max_shingle_diff - computed: false, optional: true, required: false
  private _maxShingleDiff?: string; 
  public get maxShingleDiff() {
    return this.getStringAttribute('max_shingle_diff');
  }
  public set maxShingleDiff(value: string) {
    this._maxShingleDiff = value;
  }
  public resetMaxShingleDiff() {
    this._maxShingleDiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxShingleDiffInput() {
    return this._maxShingleDiff;
  }

  // max_terms_count - computed: false, optional: true, required: false
  private _maxTermsCount?: string; 
  public get maxTermsCount() {
    return this.getStringAttribute('max_terms_count');
  }
  public set maxTermsCount(value: string) {
    this._maxTermsCount = value;
  }
  public resetMaxTermsCount() {
    this._maxTermsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTermsCountInput() {
    return this._maxTermsCount;
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

  // number_of_replicas - computed: false, optional: true, required: false
  private _numberOfReplicas?: string; 
  public get numberOfReplicas() {
    return this.getStringAttribute('number_of_replicas');
  }
  public set numberOfReplicas(value: string) {
    this._numberOfReplicas = value;
  }
  public resetNumberOfReplicas() {
    this._numberOfReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReplicasInput() {
    return this._numberOfReplicas;
  }

  // number_of_routing_shards - computed: false, optional: true, required: false
  private _numberOfRoutingShards?: string; 
  public get numberOfRoutingShards() {
    return this.getStringAttribute('number_of_routing_shards');
  }
  public set numberOfRoutingShards(value: string) {
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
  private _numberOfShards?: string; 
  public get numberOfShards() {
    return this.getStringAttribute('number_of_shards');
  }
  public set numberOfShards(value: string) {
    this._numberOfShards = value;
  }
  public resetNumberOfShards() {
    this._numberOfShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfShardsInput() {
    return this._numberOfShards;
  }

  // refresh_interval - computed: false, optional: true, required: false
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

  // rollover_alias - computed: true, optional: true, required: false
  private _rolloverAlias?: string; 
  public get rolloverAlias() {
    return this.getStringAttribute('rollover_alias');
  }
  public set rolloverAlias(value: string) {
    this._rolloverAlias = value;
  }
  public resetRolloverAlias() {
    this._rolloverAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloverAliasInput() {
    return this._rolloverAlias;
  }

  // routing_allocation_enable - computed: false, optional: true, required: false
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

  // routing_partition_size - computed: false, optional: true, required: false
  private _routingPartitionSize?: string; 
  public get routingPartitionSize() {
    return this.getStringAttribute('routing_partition_size');
  }
  public set routingPartitionSize(value: string) {
    this._routingPartitionSize = value;
  }
  public resetRoutingPartitionSize() {
    this._routingPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPartitionSizeInput() {
    return this._routingPartitionSize;
  }

  // routing_rebalance_enable - computed: false, optional: true, required: false
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

  // search_idle_after - computed: false, optional: true, required: false
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

  // search_slowlog_level - computed: false, optional: true, required: false
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

  // search_slowlog_threshold_fetch_debug - computed: false, optional: true, required: false
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

  // search_slowlog_threshold_fetch_info - computed: false, optional: true, required: false
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

  // search_slowlog_threshold_fetch_trace - computed: false, optional: true, required: false
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

  // search_slowlog_threshold_fetch_warn - computed: false, optional: true, required: false
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

  // search_slowlog_threshold_query_debug - computed: false, optional: true, required: false
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

  // search_slowlog_threshold_query_info - computed: false, optional: true, required: false
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

  // search_slowlog_threshold_query_trace - computed: false, optional: true, required: false
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

  // search_slowlog_threshold_query_warn - computed: false, optional: true, required: false
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

  // shard_check_on_startup - computed: false, optional: true, required: false
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

  // sort_field - computed: false, optional: true, required: false
  private _sortField?: string; 
  public get sortField() {
    return this.getStringAttribute('sort_field');
  }
  public set sortField(value: string) {
    this._sortField = value;
  }
  public resetSortField() {
    this._sortField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFieldInput() {
    return this._sortField;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.stringToTerraform(this._aliases),
      analysis_analyzer: cdktf.stringToTerraform(this._analysisAnalyzer),
      analysis_char_filter: cdktf.stringToTerraform(this._analysisCharFilter),
      analysis_filter: cdktf.stringToTerraform(this._analysisFilter),
      analysis_normalizer: cdktf.stringToTerraform(this._analysisNormalizer),
      analysis_tokenizer: cdktf.stringToTerraform(this._analysisTokenizer),
      analyze_max_token_count: cdktf.stringToTerraform(this._analyzeMaxTokenCount),
      auto_expand_replicas: cdktf.stringToTerraform(this._autoExpandReplicas),
      blocks_metadata: cdktf.booleanToTerraform(this._blocksMetadata),
      blocks_read: cdktf.booleanToTerraform(this._blocksRead),
      blocks_read_only: cdktf.booleanToTerraform(this._blocksReadOnly),
      blocks_read_only_allow_delete: cdktf.booleanToTerraform(this._blocksReadOnlyAllowDelete),
      blocks_write: cdktf.booleanToTerraform(this._blocksWrite),
      codec: cdktf.stringToTerraform(this._codec),
      default_pipeline: cdktf.stringToTerraform(this._defaultPipeline),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      gc_deletes: cdktf.stringToTerraform(this._gcDeletes),
      highlight_max_analyzed_offset: cdktf.stringToTerraform(this._highlightMaxAnalyzedOffset),
      id: cdktf.stringToTerraform(this._id),
      include_type_name: cdktf.stringToTerraform(this._includeTypeName),
      index_similarity_default: cdktf.stringToTerraform(this._indexSimilarityDefault),
      indexing_slowlog_level: cdktf.stringToTerraform(this._indexingSlowlogLevel),
      indexing_slowlog_source: cdktf.stringToTerraform(this._indexingSlowlogSource),
      indexing_slowlog_threshold_index_debug: cdktf.stringToTerraform(this._indexingSlowlogThresholdIndexDebug),
      indexing_slowlog_threshold_index_info: cdktf.stringToTerraform(this._indexingSlowlogThresholdIndexInfo),
      indexing_slowlog_threshold_index_trace: cdktf.stringToTerraform(this._indexingSlowlogThresholdIndexTrace),
      indexing_slowlog_threshold_index_warn: cdktf.stringToTerraform(this._indexingSlowlogThresholdIndexWarn),
      load_fixed_bitset_filters_eagerly: cdktf.booleanToTerraform(this._loadFixedBitsetFiltersEagerly),
      mappings: cdktf.stringToTerraform(this._mappings),
      max_docvalue_fields_search: cdktf.stringToTerraform(this._maxDocvalueFieldsSearch),
      max_inner_result_window: cdktf.stringToTerraform(this._maxInnerResultWindow),
      max_ngram_diff: cdktf.stringToTerraform(this._maxNgramDiff),
      max_refresh_listeners: cdktf.stringToTerraform(this._maxRefreshListeners),
      max_regex_length: cdktf.stringToTerraform(this._maxRegexLength),
      max_rescore_window: cdktf.stringToTerraform(this._maxRescoreWindow),
      max_result_window: cdktf.stringToTerraform(this._maxResultWindow),
      max_script_fields: cdktf.stringToTerraform(this._maxScriptFields),
      max_shingle_diff: cdktf.stringToTerraform(this._maxShingleDiff),
      max_terms_count: cdktf.stringToTerraform(this._maxTermsCount),
      name: cdktf.stringToTerraform(this._name),
      number_of_replicas: cdktf.stringToTerraform(this._numberOfReplicas),
      number_of_routing_shards: cdktf.stringToTerraform(this._numberOfRoutingShards),
      number_of_shards: cdktf.stringToTerraform(this._numberOfShards),
      refresh_interval: cdktf.stringToTerraform(this._refreshInterval),
      rollover_alias: cdktf.stringToTerraform(this._rolloverAlias),
      routing_allocation_enable: cdktf.stringToTerraform(this._routingAllocationEnable),
      routing_partition_size: cdktf.stringToTerraform(this._routingPartitionSize),
      routing_rebalance_enable: cdktf.stringToTerraform(this._routingRebalanceEnable),
      search_idle_after: cdktf.stringToTerraform(this._searchIdleAfter),
      search_slowlog_level: cdktf.stringToTerraform(this._searchSlowlogLevel),
      search_slowlog_threshold_fetch_debug: cdktf.stringToTerraform(this._searchSlowlogThresholdFetchDebug),
      search_slowlog_threshold_fetch_info: cdktf.stringToTerraform(this._searchSlowlogThresholdFetchInfo),
      search_slowlog_threshold_fetch_trace: cdktf.stringToTerraform(this._searchSlowlogThresholdFetchTrace),
      search_slowlog_threshold_fetch_warn: cdktf.stringToTerraform(this._searchSlowlogThresholdFetchWarn),
      search_slowlog_threshold_query_debug: cdktf.stringToTerraform(this._searchSlowlogThresholdQueryDebug),
      search_slowlog_threshold_query_info: cdktf.stringToTerraform(this._searchSlowlogThresholdQueryInfo),
      search_slowlog_threshold_query_trace: cdktf.stringToTerraform(this._searchSlowlogThresholdQueryTrace),
      search_slowlog_threshold_query_warn: cdktf.stringToTerraform(this._searchSlowlogThresholdQueryWarn),
      shard_check_on_startup: cdktf.stringToTerraform(this._shardCheckOnStartup),
      sort_field: cdktf.stringToTerraform(this._sortField),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.stringToHclTerraform(this._aliases),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analysis_analyzer: {
        value: cdktf.stringToHclTerraform(this._analysisAnalyzer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analysis_char_filter: {
        value: cdktf.stringToHclTerraform(this._analysisCharFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analysis_filter: {
        value: cdktf.stringToHclTerraform(this._analysisFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analysis_normalizer: {
        value: cdktf.stringToHclTerraform(this._analysisNormalizer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analysis_tokenizer: {
        value: cdktf.stringToHclTerraform(this._analysisTokenizer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyze_max_token_count: {
        value: cdktf.stringToHclTerraform(this._analyzeMaxTokenCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_expand_replicas: {
        value: cdktf.stringToHclTerraform(this._autoExpandReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocks_metadata: {
        value: cdktf.booleanToHclTerraform(this._blocksMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocks_read: {
        value: cdktf.booleanToHclTerraform(this._blocksRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocks_read_only: {
        value: cdktf.booleanToHclTerraform(this._blocksReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocks_read_only_allow_delete: {
        value: cdktf.booleanToHclTerraform(this._blocksReadOnlyAllowDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocks_write: {
        value: cdktf.booleanToHclTerraform(this._blocksWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      codec: {
        value: cdktf.stringToHclTerraform(this._codec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pipeline: {
        value: cdktf.stringToHclTerraform(this._defaultPipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gc_deletes: {
        value: cdktf.stringToHclTerraform(this._gcDeletes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      highlight_max_analyzed_offset: {
        value: cdktf.stringToHclTerraform(this._highlightMaxAnalyzedOffset),
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
      include_type_name: {
        value: cdktf.stringToHclTerraform(this._includeTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_similarity_default: {
        value: cdktf.stringToHclTerraform(this._indexSimilarityDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indexing_slowlog_level: {
        value: cdktf.stringToHclTerraform(this._indexingSlowlogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indexing_slowlog_source: {
        value: cdktf.stringToHclTerraform(this._indexingSlowlogSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indexing_slowlog_threshold_index_debug: {
        value: cdktf.stringToHclTerraform(this._indexingSlowlogThresholdIndexDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indexing_slowlog_threshold_index_info: {
        value: cdktf.stringToHclTerraform(this._indexingSlowlogThresholdIndexInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indexing_slowlog_threshold_index_trace: {
        value: cdktf.stringToHclTerraform(this._indexingSlowlogThresholdIndexTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indexing_slowlog_threshold_index_warn: {
        value: cdktf.stringToHclTerraform(this._indexingSlowlogThresholdIndexWarn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_fixed_bitset_filters_eagerly: {
        value: cdktf.booleanToHclTerraform(this._loadFixedBitsetFiltersEagerly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mappings: {
        value: cdktf.stringToHclTerraform(this._mappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_docvalue_fields_search: {
        value: cdktf.stringToHclTerraform(this._maxDocvalueFieldsSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_inner_result_window: {
        value: cdktf.stringToHclTerraform(this._maxInnerResultWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ngram_diff: {
        value: cdktf.stringToHclTerraform(this._maxNgramDiff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_refresh_listeners: {
        value: cdktf.stringToHclTerraform(this._maxRefreshListeners),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_regex_length: {
        value: cdktf.stringToHclTerraform(this._maxRegexLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_rescore_window: {
        value: cdktf.stringToHclTerraform(this._maxRescoreWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_result_window: {
        value: cdktf.stringToHclTerraform(this._maxResultWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_script_fields: {
        value: cdktf.stringToHclTerraform(this._maxScriptFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_shingle_diff: {
        value: cdktf.stringToHclTerraform(this._maxShingleDiff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_terms_count: {
        value: cdktf.stringToHclTerraform(this._maxTermsCount),
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
      number_of_replicas: {
        value: cdktf.stringToHclTerraform(this._numberOfReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_routing_shards: {
        value: cdktf.stringToHclTerraform(this._numberOfRoutingShards),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_shards: {
        value: cdktf.stringToHclTerraform(this._numberOfShards),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_interval: {
        value: cdktf.stringToHclTerraform(this._refreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollover_alias: {
        value: cdktf.stringToHclTerraform(this._rolloverAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_allocation_enable: {
        value: cdktf.stringToHclTerraform(this._routingAllocationEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_partition_size: {
        value: cdktf.stringToHclTerraform(this._routingPartitionSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_rebalance_enable: {
        value: cdktf.stringToHclTerraform(this._routingRebalanceEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_idle_after: {
        value: cdktf.stringToHclTerraform(this._searchIdleAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_level: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_threshold_fetch_debug: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogThresholdFetchDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_threshold_fetch_info: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogThresholdFetchInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_threshold_fetch_trace: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogThresholdFetchTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_threshold_fetch_warn: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogThresholdFetchWarn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_threshold_query_debug: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogThresholdQueryDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_threshold_query_info: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogThresholdQueryInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_threshold_query_trace: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogThresholdQueryTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_slowlog_threshold_query_warn: {
        value: cdktf.stringToHclTerraform(this._searchSlowlogThresholdQueryWarn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_check_on_startup: {
        value: cdktf.stringToHclTerraform(this._shardCheckOnStartup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_field: {
        value: cdktf.stringToHclTerraform(this._sortField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
