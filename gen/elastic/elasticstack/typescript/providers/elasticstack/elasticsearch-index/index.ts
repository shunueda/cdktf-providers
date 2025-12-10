// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aliases for the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#alias ElasticsearchIndex#alias}
  */
  readonly alias?: ElasticsearchIndexAlias[] | cdktf.IResolvable;
  /**
  * A JSON string describing the analyzers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#analysis_analyzer ElasticsearchIndex#analysis_analyzer}
  */
  readonly analysisAnalyzer?: string;
  /**
  * A JSON string describing the char_filters applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#analysis_char_filter ElasticsearchIndex#analysis_char_filter}
  */
  readonly analysisCharFilter?: string;
  /**
  * A JSON string describing the filters applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#analysis_filter ElasticsearchIndex#analysis_filter}
  */
  readonly analysisFilter?: string;
  /**
  * A JSON string describing the normalizers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#analysis_normalizer ElasticsearchIndex#analysis_normalizer}
  */
  readonly analysisNormalizer?: string;
  /**
  * A JSON string describing the tokenizers applied to the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#analysis_tokenizer ElasticsearchIndex#analysis_tokenizer}
  */
  readonly analysisTokenizer?: string;
  /**
  * The maximum number of tokens that can be produced using _analyze API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#analyze_max_token_count ElasticsearchIndex#analyze_max_token_count}
  */
  readonly analyzeMaxTokenCount?: number;
  /**
  * Set the number of replicas to the node count in the cluster. Set to a dash delimited lower and upper bound (e.g. 0-5) or use all for the upper bound (e.g. 0-all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#auto_expand_replicas ElasticsearchIndex#auto_expand_replicas}
  */
  readonly autoExpandReplicas?: string;
  /**
  * Set to `true` to disable index metadata reads and writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#blocks_metadata ElasticsearchIndex#blocks_metadata}
  */
  readonly blocksMetadata?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to disable read operations against the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#blocks_read ElasticsearchIndex#blocks_read}
  */
  readonly blocksRead?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to make the index and index metadata read only, `false` to allow writes and metadata changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#blocks_read_only ElasticsearchIndex#blocks_read_only}
  */
  readonly blocksReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Identical to `index.blocks.read_only` but allows deleting the index to free up resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#blocks_read_only_allow_delete ElasticsearchIndex#blocks_read_only_allow_delete}
  */
  readonly blocksReadOnlyAllowDelete?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to disable data write operations against the index. This setting does not affect metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#blocks_write ElasticsearchIndex#blocks_write}
  */
  readonly blocksWrite?: boolean | cdktf.IResolvable;
  /**
  * The `default` value compresses stored data with LZ4 compression, but this can be set to `best_compression` which uses DEFLATE for a higher compression ratio. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#codec ElasticsearchIndex#codec}
  */
  readonly codec?: string;
  /**
  * The default ingest node pipeline for this index. Index requests will fail if the default pipeline is set and the pipeline does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#default_pipeline ElasticsearchIndex#default_pipeline}
  */
  readonly defaultPipeline?: string;
  /**
  * Whether to allow Terraform to destroy the index. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply command that deletes the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#deletion_protection ElasticsearchIndex#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Final ingest pipeline for the index. Indexing requests will fail if the final pipeline is set and the pipeline does not exist. The final pipeline always runs after the request pipeline (if specified) and the default pipeline (if it exists). The special pipeline name _none indicates no ingest pipeline will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#final_pipeline ElasticsearchIndex#final_pipeline}
  */
  readonly finalPipeline?: string;
  /**
  * The length of time that a deleted document's version number remains available for further versioned operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#gc_deletes ElasticsearchIndex#gc_deletes}
  */
  readonly gcDeletes?: string;
  /**
  * The maximum number of characters that will be analyzed for a highlight request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#highlight_max_analyzed_offset ElasticsearchIndex#highlight_max_analyzed_offset}
  */
  readonly highlightMaxAnalyzedOffset?: number;
  /**
  * Set which logging level to use for the search slow log, can be: `warn`, `info`, `debug`, `trace`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#indexing_slowlog_level ElasticsearchIndex#indexing_slowlog_level}
  */
  readonly indexingSlowlogLevel?: string;
  /**
  * Set the number of characters of the `_source` to include in the slowlog lines, `false` or `0` will skip logging the source entirely and setting it to `true` will log the entire source regardless of size. The original `_source` is reformatted by default to make sure that it fits on a single log line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#indexing_slowlog_source ElasticsearchIndex#indexing_slowlog_source}
  */
  readonly indexingSlowlogSource?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#indexing_slowlog_threshold_index_debug ElasticsearchIndex#indexing_slowlog_threshold_index_debug}
  */
  readonly indexingSlowlogThresholdIndexDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#indexing_slowlog_threshold_index_info ElasticsearchIndex#indexing_slowlog_threshold_index_info}
  */
  readonly indexingSlowlogThresholdIndexInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#indexing_slowlog_threshold_index_trace ElasticsearchIndex#indexing_slowlog_threshold_index_trace}
  */
  readonly indexingSlowlogThresholdIndexTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches for indexing queries, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#indexing_slowlog_threshold_index_warn ElasticsearchIndex#indexing_slowlog_threshold_index_warn}
  */
  readonly indexingSlowlogThresholdIndexWarn?: string;
  /**
  * Indicates whether cached filters are pre-loaded for nested queries. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#load_fixed_bitset_filters_eagerly ElasticsearchIndex#load_fixed_bitset_filters_eagerly}
  */
  readonly loadFixedBitsetFiltersEagerly?: boolean | cdktf.IResolvable;
  /**
  * Set index level coercion setting that is applied to all mapping types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#mapping_coerce ElasticsearchIndex#mapping_coerce}
  */
  readonly mappingCoerce?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of fields in an index. Field type parameters count towards this limit. The default value is 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#mapping_total_fields_limit ElasticsearchIndex#mapping_total_fields_limit}
  */
  readonly mappingTotalFieldsLimit?: number;
  /**
  * Mapping for fields in the index.
  * 			If specified, this mapping can include: field names, [field data types](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html), [mapping parameters](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-params.html).
  * 			**NOTE:**
  * 			- Changing datatypes in the existing _mappings_ will force index to be re-created.
  * 			- Removing field will be ignored by default same as elasticsearch. You need to recreate the index to remove field completely.
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#mappings ElasticsearchIndex#mappings}
  */
  readonly mappings?: string;
  /**
  * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. Defaults to `30s`. This value is ignored when running against Serverless projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#master_timeout ElasticsearchIndex#master_timeout}
  */
  readonly masterTimeout?: string;
  /**
  * The maximum number of `docvalue_fields` that are allowed in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_docvalue_fields_search ElasticsearchIndex#max_docvalue_fields_search}
  */
  readonly maxDocvalueFieldsSearch?: number;
  /**
  * The maximum value of `from + size` for inner hits definition and top hits aggregations to this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_inner_result_window ElasticsearchIndex#max_inner_result_window}
  */
  readonly maxInnerResultWindow?: number;
  /**
  * The maximum allowed difference between min_gram and max_gram for NGramTokenizer and NGramTokenFilter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_ngram_diff ElasticsearchIndex#max_ngram_diff}
  */
  readonly maxNgramDiff?: number;
  /**
  * Maximum number of refresh listeners available on each shard of the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_refresh_listeners ElasticsearchIndex#max_refresh_listeners}
  */
  readonly maxRefreshListeners?: number;
  /**
  * The maximum length of regex that can be used in Regexp Query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_regex_length ElasticsearchIndex#max_regex_length}
  */
  readonly maxRegexLength?: number;
  /**
  * The maximum value of `window_size` for `rescore` requests in searches of this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_rescore_window ElasticsearchIndex#max_rescore_window}
  */
  readonly maxRescoreWindow?: number;
  /**
  * The maximum value of `from + size` for searches to this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_result_window ElasticsearchIndex#max_result_window}
  */
  readonly maxResultWindow?: number;
  /**
  * The maximum number of `script_fields` that are allowed in a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_script_fields ElasticsearchIndex#max_script_fields}
  */
  readonly maxScriptFields?: number;
  /**
  * The maximum allowed difference between max_shingle_size and min_shingle_size for ShingleTokenFilter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_shingle_diff ElasticsearchIndex#max_shingle_diff}
  */
  readonly maxShingleDiff?: number;
  /**
  * The maximum number of terms that can be used in Terms Query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#max_terms_count ElasticsearchIndex#max_terms_count}
  */
  readonly maxTermsCount?: number;
  /**
  * Name of the index you wish to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#name ElasticsearchIndex#name}
  */
  readonly name: string;
  /**
  * Number of shard replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#number_of_replicas ElasticsearchIndex#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * Value used with number_of_shards to route documents to a primary shard. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#number_of_routing_shards ElasticsearchIndex#number_of_routing_shards}
  */
  readonly numberOfRoutingShards?: number;
  /**
  * Number of shards for the index. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#number_of_shards ElasticsearchIndex#number_of_shards}
  */
  readonly numberOfShards?: number;
  /**
  * Wildcard (*) patterns matching one or more fields. Defaults to '*', which matches all fields eligible for term-level queries, excluding metadata fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#query_default_field ElasticsearchIndex#query_default_field}
  */
  readonly queryDefaultField?: string[];
  /**
  * How often to perform a refresh operation, which makes recent changes to the index visible to search. Can be set to `-1` to disable refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#refresh_interval ElasticsearchIndex#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * Controls shard allocation for this index. It can be set to: `all` , `primaries` , `new_primaries` , `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#routing_allocation_enable ElasticsearchIndex#routing_allocation_enable}
  */
  readonly routingAllocationEnable?: string;
  /**
  * The number of shards a custom routing value can go to. This can be set only on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#routing_partition_size ElasticsearchIndex#routing_partition_size}
  */
  readonly routingPartitionSize?: number;
  /**
  * Enables shard rebalancing for this index. It can be set to: `all`, `primaries` , `replicas` , `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#routing_rebalance_enable ElasticsearchIndex#routing_rebalance_enable}
  */
  readonly routingRebalanceEnable?: string;
  /**
  * How long a shard can not receive a search or get request until it’s considered search idle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_idle_after ElasticsearchIndex#search_idle_after}
  */
  readonly searchIdleAfter?: string;
  /**
  * Set which logging level to use for the search slow log, can be: `warn`, `info`, `debug`, `trace`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_level ElasticsearchIndex#search_slowlog_level}
  */
  readonly searchSlowlogLevel?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_threshold_fetch_debug ElasticsearchIndex#search_slowlog_threshold_fetch_debug}
  */
  readonly searchSlowlogThresholdFetchDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_threshold_fetch_info ElasticsearchIndex#search_slowlog_threshold_fetch_info}
  */
  readonly searchSlowlogThresholdFetchInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_threshold_fetch_trace ElasticsearchIndex#search_slowlog_threshold_fetch_trace}
  */
  readonly searchSlowlogThresholdFetchTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the fetch phase, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_threshold_fetch_warn ElasticsearchIndex#search_slowlog_threshold_fetch_warn}
  */
  readonly searchSlowlogThresholdFetchWarn?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `2s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_threshold_query_debug ElasticsearchIndex#search_slowlog_threshold_query_debug}
  */
  readonly searchSlowlogThresholdQueryDebug?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `5s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_threshold_query_info ElasticsearchIndex#search_slowlog_threshold_query_info}
  */
  readonly searchSlowlogThresholdQueryInfo?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `500ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_threshold_query_trace ElasticsearchIndex#search_slowlog_threshold_query_trace}
  */
  readonly searchSlowlogThresholdQueryTrace?: string;
  /**
  * Set the cutoff for shard level slow search logging of slow searches in the query phase, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_slowlog_threshold_query_warn ElasticsearchIndex#search_slowlog_threshold_query_warn}
  */
  readonly searchSlowlogThresholdQueryWarn?: string;
  /**
  * Whether or not shards should be checked for corruption before opening. When corruption is detected, it will prevent the shard from being opened. Accepts `false`, `true`, `checksum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#shard_check_on_startup ElasticsearchIndex#shard_check_on_startup}
  */
  readonly shardCheckOnStartup?: string;
  /**
  * The field to sort shards in this index by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#sort_field ElasticsearchIndex#sort_field}
  */
  readonly sortField?: string[];
  /**
  * The direction to sort shards in. Accepts `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#sort_order ElasticsearchIndex#sort_order}
  */
  readonly sortOrder?: string[];
  /**
  * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. Defaults to `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#timeout ElasticsearchIndex#timeout}
  */
  readonly timeout?: string;
  /**
  * Time to delay the allocation of replica shards which become unassigned because a node has left, in time units, e.g. `10s`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#unassigned_node_left_delayed_timeout ElasticsearchIndex#unassigned_node_left_delayed_timeout}
  */
  readonly unassignedNodeLeftDelayedTimeout?: string;
  /**
  * The number of shard copies that must be active before proceeding with the operation. Set to `all` or any positive integer up to the total number of shards in the index (number_of_replicas+1). Default: `1`, the primary shard. This value is ignored when running against Serverless projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#wait_for_active_shards ElasticsearchIndex#wait_for_active_shards}
  */
  readonly waitForActiveShards?: string;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#elasticsearch_connection ElasticsearchIndex#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchIndexElasticsearchConnection[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#settings ElasticsearchIndex#settings}
  */
  readonly settings?: ElasticsearchIndexSettings[] | cdktf.IResolvable;
}
export interface ElasticsearchIndexAlias {
  /**
  * Query used to limit documents the alias can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#filter ElasticsearchIndex#filter}
  */
  readonly filter?: string;
  /**
  * Value used to route indexing operations to a specific shard. If specified, this overwrites the `routing` value for indexing operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#index_routing ElasticsearchIndex#index_routing}
  */
  readonly indexRouting?: string;
  /**
  * If true, the alias is hidden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#is_hidden ElasticsearchIndex#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * If true, the index is the write index for the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#is_write_index ElasticsearchIndex#is_write_index}
  */
  readonly isWriteIndex?: boolean | cdktf.IResolvable;
  /**
  * Index alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#name ElasticsearchIndex#name}
  */
  readonly name: string;
  /**
  * Value used to route indexing and search operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#routing ElasticsearchIndex#routing}
  */
  readonly routing?: string;
  /**
  * Value used to route search operations to a specific shard. If specified, this overwrites the routing value for search operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#search_routing ElasticsearchIndex#search_routing}
  */
  readonly searchRouting?: string;
}

export function elasticsearchIndexAliasToTerraform(struct?: ElasticsearchIndexAlias | cdktf.IResolvable): any {
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


export function elasticsearchIndexAliasToHclTerraform(struct?: ElasticsearchIndexAlias | cdktf.IResolvable): any {
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

export class ElasticsearchIndexAliasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchIndexAlias | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElasticsearchIndexAlias | cdktf.IResolvable | undefined) {
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

export class ElasticsearchIndexAliasList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchIndexAlias[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchIndexAliasOutputReference {
    return new ElasticsearchIndexAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchIndexElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#api_key ElasticsearchIndex#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#bearer_token ElasticsearchIndex#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#ca_data ElasticsearchIndex#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#ca_file ElasticsearchIndex#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#cert_data ElasticsearchIndex#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#cert_file ElasticsearchIndex#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#endpoints ElasticsearchIndex#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#es_client_authentication ElasticsearchIndex#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#headers ElasticsearchIndex#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#insecure ElasticsearchIndex#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#key_data ElasticsearchIndex#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#key_file ElasticsearchIndex#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#password ElasticsearchIndex#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#username ElasticsearchIndex#username}
  */
  readonly username?: string;
}

export function elasticsearchIndexElasticsearchConnectionToTerraform(struct?: ElasticsearchIndexElasticsearchConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    ca_data: cdktf.stringToTerraform(struct!.caData),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    es_client_authentication: cdktf.stringToTerraform(struct!.esClientAuthentication),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function elasticsearchIndexElasticsearchConnectionToHclTerraform(struct?: ElasticsearchIndexElasticsearchConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_data: {
      value: cdktf.stringToHclTerraform(struct!.caData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    es_client_authentication: {
      value: cdktf.stringToHclTerraform(struct!.esClientAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchIndexElasticsearchConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._caData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caData = this._caData;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._esClientAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.esClientAuthentication = this._esClientAuthentication;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexElasticsearchConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._bearerToken = undefined;
      this._caData = undefined;
      this._caFile = undefined;
      this._certData = undefined;
      this._certFile = undefined;
      this._endpoints = undefined;
      this._esClientAuthentication = undefined;
      this._headers = undefined;
      this._insecure = undefined;
      this._keyData = undefined;
      this._keyFile = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._bearerToken = value.bearerToken;
      this._caData = value.caData;
      this._caFile = value.caFile;
      this._certData = value.certData;
      this._certFile = value.certFile;
      this._endpoints = value.endpoints;
      this._esClientAuthentication = value.esClientAuthentication;
      this._headers = value.headers;
      this._insecure = value.insecure;
      this._keyData = value.keyData;
      this._keyFile = value.keyFile;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // ca_data - computed: false, optional: true, required: false
  private _caData?: string; 
  public get caData() {
    return this.getStringAttribute('ca_data');
  }
  public set caData(value: string) {
    this._caData = value;
  }
  public resetCaData() {
    this._caData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDataInput() {
    return this._caData;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // es_client_authentication - computed: false, optional: true, required: false
  private _esClientAuthentication?: string; 
  public get esClientAuthentication() {
    return this.getStringAttribute('es_client_authentication');
  }
  public set esClientAuthentication(value: string) {
    this._esClientAuthentication = value;
  }
  public resetEsClientAuthentication() {
    this._esClientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esClientAuthenticationInput() {
    return this._esClientAuthentication;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ElasticsearchIndexElasticsearchConnectionList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchIndexElasticsearchConnection[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchIndexElasticsearchConnectionOutputReference {
    return new ElasticsearchIndexElasticsearchConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchIndexSettingsSetting {
  /**
  * The name of the setting to set and track.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#name ElasticsearchIndex#name}
  */
  readonly name: string;
  /**
  * The value of the setting to set and track.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#value ElasticsearchIndex#value}
  */
  readonly value: string;
}

export function elasticsearchIndexSettingsSettingToTerraform(struct?: ElasticsearchIndexSettingsSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function elasticsearchIndexSettingsSettingToHclTerraform(struct?: ElasticsearchIndexSettingsSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ElasticsearchIndexSettingsSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchIndexSettingsSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexSettingsSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ElasticsearchIndexSettingsSettingList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchIndexSettingsSetting[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchIndexSettingsSettingOutputReference {
    return new ElasticsearchIndexSettingsSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchIndexSettings {
  /**
  * setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#setting ElasticsearchIndex#setting}
  */
  readonly setting?: ElasticsearchIndexSettingsSetting[] | cdktf.IResolvable;
}

export function elasticsearchIndexSettingsToTerraform(struct?: ElasticsearchIndexSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    setting: cdktf.listMapper(elasticsearchIndexSettingsSettingToTerraform, true)(struct!.setting),
  }
}


export function elasticsearchIndexSettingsToHclTerraform(struct?: ElasticsearchIndexSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    setting: {
      value: cdktf.listMapperHcl(elasticsearchIndexSettingsSettingToHclTerraform, true)(struct!.setting),
      isBlock: true,
      type: "set",
      storageClassType: "ElasticsearchIndexSettingsSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchIndexSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setting = this._setting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setting.internalValue = value.setting;
    }
  }

  // setting - computed: false, optional: true, required: false
  private _setting = new ElasticsearchIndexSettingsSettingList(this, "setting", true);
  public get setting() {
    return this._setting;
  }
  public putSetting(value: ElasticsearchIndexSettingsSetting[] | cdktf.IResolvable) {
    this._setting.internalValue = value;
  }
  public resetSetting() {
    this._setting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting.internalValue;
  }
}

export class ElasticsearchIndexSettingsList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchIndexSettings[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchIndexSettingsOutputReference {
    return new ElasticsearchIndexSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index elasticstack_elasticsearch_index}
*/
export class ElasticsearchIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchIndex to import
  * @param importFromId The id of the existing ElasticsearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_index elasticstack_elasticsearch_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_index',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias.internalValue = config.alias;
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
    this._deletionProtection = config.deletionProtection;
    this._finalPipeline = config.finalPipeline;
    this._gcDeletes = config.gcDeletes;
    this._highlightMaxAnalyzedOffset = config.highlightMaxAnalyzedOffset;
    this._indexingSlowlogLevel = config.indexingSlowlogLevel;
    this._indexingSlowlogSource = config.indexingSlowlogSource;
    this._indexingSlowlogThresholdIndexDebug = config.indexingSlowlogThresholdIndexDebug;
    this._indexingSlowlogThresholdIndexInfo = config.indexingSlowlogThresholdIndexInfo;
    this._indexingSlowlogThresholdIndexTrace = config.indexingSlowlogThresholdIndexTrace;
    this._indexingSlowlogThresholdIndexWarn = config.indexingSlowlogThresholdIndexWarn;
    this._loadFixedBitsetFiltersEagerly = config.loadFixedBitsetFiltersEagerly;
    this._mappingCoerce = config.mappingCoerce;
    this._mappingTotalFieldsLimit = config.mappingTotalFieldsLimit;
    this._mappings = config.mappings;
    this._masterTimeout = config.masterTimeout;
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
    this._queryDefaultField = config.queryDefaultField;
    this._refreshInterval = config.refreshInterval;
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
    this._timeout = config.timeout;
    this._unassignedNodeLeftDelayedTimeout = config.unassignedNodeLeftDelayedTimeout;
    this._waitForActiveShards = config.waitForActiveShards;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias = new ElasticsearchIndexAliasList(this, "alias", true);
  public get alias() {
    return this._alias;
  }
  public putAlias(value: ElasticsearchIndexAlias[] | cdktf.IResolvable) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
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

  // final_pipeline - computed: false, optional: true, required: false
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

  // mapping_coerce - computed: false, optional: true, required: false
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

  // mapping_total_fields_limit - computed: false, optional: true, required: false
  private _mappingTotalFieldsLimit?: number; 
  public get mappingTotalFieldsLimit() {
    return this.getNumberAttribute('mapping_total_fields_limit');
  }
  public set mappingTotalFieldsLimit(value: number) {
    this._mappingTotalFieldsLimit = value;
  }
  public resetMappingTotalFieldsLimit() {
    this._mappingTotalFieldsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingTotalFieldsLimitInput() {
    return this._mappingTotalFieldsLimit;
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

  // max_docvalue_fields_search - computed: false, optional: true, required: false
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

  // max_inner_result_window - computed: false, optional: true, required: false
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

  // max_ngram_diff - computed: false, optional: true, required: false
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

  // max_refresh_listeners - computed: false, optional: true, required: false
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

  // max_regex_length - computed: false, optional: true, required: false
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

  // max_rescore_window - computed: false, optional: true, required: false
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

  // max_result_window - computed: false, optional: true, required: false
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

  // max_script_fields - computed: false, optional: true, required: false
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

  // max_shingle_diff - computed: false, optional: true, required: false
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

  // max_terms_count - computed: false, optional: true, required: false
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

  // number_of_routing_shards - computed: false, optional: true, required: false
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

  // number_of_shards - computed: false, optional: true, required: false
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

  // query_default_field - computed: false, optional: true, required: false
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

  // settings_raw - computed: true, optional: false, required: false
  public get settingsRaw() {
    return this.getStringAttribute('settings_raw');
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

  // sort_order - computed: false, optional: true, required: false
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

  // unassigned_node_left_delayed_timeout - computed: false, optional: true, required: false
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

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchIndexElasticsearchConnectionList(this, "elasticsearch_connection", false);
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchIndexElasticsearchConnection[] | cdktf.IResolvable) {
    this._elasticsearchConnection.internalValue = value;
  }
  public resetElasticsearchConnection() {
    this._elasticsearchConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectionInput() {
    return this._elasticsearchConnection.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new ElasticsearchIndexSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ElasticsearchIndexSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.listMapper(elasticsearchIndexAliasToTerraform, false)(this._alias.internalValue),
      analysis_analyzer: cdktf.stringToTerraform(this._analysisAnalyzer),
      analysis_char_filter: cdktf.stringToTerraform(this._analysisCharFilter),
      analysis_filter: cdktf.stringToTerraform(this._analysisFilter),
      analysis_normalizer: cdktf.stringToTerraform(this._analysisNormalizer),
      analysis_tokenizer: cdktf.stringToTerraform(this._analysisTokenizer),
      analyze_max_token_count: cdktf.numberToTerraform(this._analyzeMaxTokenCount),
      auto_expand_replicas: cdktf.stringToTerraform(this._autoExpandReplicas),
      blocks_metadata: cdktf.booleanToTerraform(this._blocksMetadata),
      blocks_read: cdktf.booleanToTerraform(this._blocksRead),
      blocks_read_only: cdktf.booleanToTerraform(this._blocksReadOnly),
      blocks_read_only_allow_delete: cdktf.booleanToTerraform(this._blocksReadOnlyAllowDelete),
      blocks_write: cdktf.booleanToTerraform(this._blocksWrite),
      codec: cdktf.stringToTerraform(this._codec),
      default_pipeline: cdktf.stringToTerraform(this._defaultPipeline),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      final_pipeline: cdktf.stringToTerraform(this._finalPipeline),
      gc_deletes: cdktf.stringToTerraform(this._gcDeletes),
      highlight_max_analyzed_offset: cdktf.numberToTerraform(this._highlightMaxAnalyzedOffset),
      indexing_slowlog_level: cdktf.stringToTerraform(this._indexingSlowlogLevel),
      indexing_slowlog_source: cdktf.stringToTerraform(this._indexingSlowlogSource),
      indexing_slowlog_threshold_index_debug: cdktf.stringToTerraform(this._indexingSlowlogThresholdIndexDebug),
      indexing_slowlog_threshold_index_info: cdktf.stringToTerraform(this._indexingSlowlogThresholdIndexInfo),
      indexing_slowlog_threshold_index_trace: cdktf.stringToTerraform(this._indexingSlowlogThresholdIndexTrace),
      indexing_slowlog_threshold_index_warn: cdktf.stringToTerraform(this._indexingSlowlogThresholdIndexWarn),
      load_fixed_bitset_filters_eagerly: cdktf.booleanToTerraform(this._loadFixedBitsetFiltersEagerly),
      mapping_coerce: cdktf.booleanToTerraform(this._mappingCoerce),
      mapping_total_fields_limit: cdktf.numberToTerraform(this._mappingTotalFieldsLimit),
      mappings: cdktf.stringToTerraform(this._mappings),
      master_timeout: cdktf.stringToTerraform(this._masterTimeout),
      max_docvalue_fields_search: cdktf.numberToTerraform(this._maxDocvalueFieldsSearch),
      max_inner_result_window: cdktf.numberToTerraform(this._maxInnerResultWindow),
      max_ngram_diff: cdktf.numberToTerraform(this._maxNgramDiff),
      max_refresh_listeners: cdktf.numberToTerraform(this._maxRefreshListeners),
      max_regex_length: cdktf.numberToTerraform(this._maxRegexLength),
      max_rescore_window: cdktf.numberToTerraform(this._maxRescoreWindow),
      max_result_window: cdktf.numberToTerraform(this._maxResultWindow),
      max_script_fields: cdktf.numberToTerraform(this._maxScriptFields),
      max_shingle_diff: cdktf.numberToTerraform(this._maxShingleDiff),
      max_terms_count: cdktf.numberToTerraform(this._maxTermsCount),
      name: cdktf.stringToTerraform(this._name),
      number_of_replicas: cdktf.numberToTerraform(this._numberOfReplicas),
      number_of_routing_shards: cdktf.numberToTerraform(this._numberOfRoutingShards),
      number_of_shards: cdktf.numberToTerraform(this._numberOfShards),
      query_default_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._queryDefaultField),
      refresh_interval: cdktf.stringToTerraform(this._refreshInterval),
      routing_allocation_enable: cdktf.stringToTerraform(this._routingAllocationEnable),
      routing_partition_size: cdktf.numberToTerraform(this._routingPartitionSize),
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
      sort_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sortField),
      sort_order: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sortOrder),
      timeout: cdktf.stringToTerraform(this._timeout),
      unassigned_node_left_delayed_timeout: cdktf.stringToTerraform(this._unassignedNodeLeftDelayedTimeout),
      wait_for_active_shards: cdktf.stringToTerraform(this._waitForActiveShards),
      elasticsearch_connection: cdktf.listMapper(elasticsearchIndexElasticsearchConnectionToTerraform, true)(this._elasticsearchConnection.internalValue),
      settings: cdktf.listMapper(elasticsearchIndexSettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.listMapperHcl(elasticsearchIndexAliasToHclTerraform, false)(this._alias.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElasticsearchIndexAliasList",
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
        value: cdktf.numberToHclTerraform(this._analyzeMaxTokenCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      final_pipeline: {
        value: cdktf.stringToHclTerraform(this._finalPipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gc_deletes: {
        value: cdktf.stringToHclTerraform(this._gcDeletes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      highlight_max_analyzed_offset: {
        value: cdktf.numberToHclTerraform(this._highlightMaxAnalyzedOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      mapping_coerce: {
        value: cdktf.booleanToHclTerraform(this._mappingCoerce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mapping_total_fields_limit: {
        value: cdktf.numberToHclTerraform(this._mappingTotalFieldsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mappings: {
        value: cdktf.stringToHclTerraform(this._mappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_timeout: {
        value: cdktf.stringToHclTerraform(this._masterTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_docvalue_fields_search: {
        value: cdktf.numberToHclTerraform(this._maxDocvalueFieldsSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_inner_result_window: {
        value: cdktf.numberToHclTerraform(this._maxInnerResultWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ngram_diff: {
        value: cdktf.numberToHclTerraform(this._maxNgramDiff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_refresh_listeners: {
        value: cdktf.numberToHclTerraform(this._maxRefreshListeners),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_regex_length: {
        value: cdktf.numberToHclTerraform(this._maxRegexLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_rescore_window: {
        value: cdktf.numberToHclTerraform(this._maxRescoreWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_result_window: {
        value: cdktf.numberToHclTerraform(this._maxResultWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_script_fields: {
        value: cdktf.numberToHclTerraform(this._maxScriptFields),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_shingle_diff: {
        value: cdktf.numberToHclTerraform(this._maxShingleDiff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_terms_count: {
        value: cdktf.numberToHclTerraform(this._maxTermsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_replicas: {
        value: cdktf.numberToHclTerraform(this._numberOfReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_routing_shards: {
        value: cdktf.numberToHclTerraform(this._numberOfRoutingShards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_shards: {
        value: cdktf.numberToHclTerraform(this._numberOfShards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_default_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._queryDefaultField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_interval: {
        value: cdktf.stringToHclTerraform(this._refreshInterval),
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
        value: cdktf.numberToHclTerraform(this._routingPartitionSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sortField),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sort_order: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sortOrder),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unassigned_node_left_delayed_timeout: {
        value: cdktf.stringToHclTerraform(this._unassignedNodeLeftDelayedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_active_shards: {
        value: cdktf.stringToHclTerraform(this._waitForActiveShards),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_connection: {
        value: cdktf.listMapperHcl(elasticsearchIndexElasticsearchConnectionToHclTerraform, true)(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexElasticsearchConnectionList",
      },
      settings: {
        value: cdktf.listMapperHcl(elasticsearchIndexSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
