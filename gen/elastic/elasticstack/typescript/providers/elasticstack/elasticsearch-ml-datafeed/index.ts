// https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchMlDatafeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only with low cardinality data. This should be a JSON object representing the aggregations to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#aggregations ElasticsearchMlDatafeed#aggregations}
  */
  readonly aggregations?: string;
  /**
  * Datafeeds might search over long time periods, for several months or years. This search is split into time chunks in order to ensure the load on Elasticsearch is managed. Chunking configuration controls how the size of these time chunks are calculated; it is an advanced configuration option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#chunking_config ElasticsearchMlDatafeed#chunking_config}
  */
  readonly chunkingConfig?: ElasticsearchMlDatafeedChunkingConfig;
  /**
  * A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#datafeed_id ElasticsearchMlDatafeed#datafeed_id}
  */
  readonly datafeedId: string;
  /**
  * Specifies whether the datafeed checks for missing data and the size of the window. The datafeed can optionally search over indices that have already been read in an effort to determine whether any data has subsequently been added to the index. If missing data is found, it is a good indication that the `query_delay` is set too low and the data is being indexed after the datafeed has passed that moment in time. This check runs only on real-time datafeeds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#delayed_data_check_config ElasticsearchMlDatafeed#delayed_data_check_config}
  */
  readonly delayedDataCheckConfig?: ElasticsearchMlDatafeedDelayedDataCheckConfig;
  /**
  * The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#frequency ElasticsearchMlDatafeed#frequency}
  */
  readonly frequency?: string;
  /**
  * An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the machine learning nodes must have the `remote_cluster_client` role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#indices ElasticsearchMlDatafeed#indices}
  */
  readonly indices: string[];
  /**
  * Specifies index expansion options that are used during search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#indices_options ElasticsearchMlDatafeed#indices_options}
  */
  readonly indicesOptions?: ElasticsearchMlDatafeedIndicesOptions;
  /**
  * Identifier for the anomaly detection job. The job must exist before creating the datafeed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#job_id ElasticsearchMlDatafeed#job_id}
  */
  readonly jobId: string;
  /**
  * If a real-time datafeed has never seen any data (including during any initial training period), it automatically stops and closes the associated job after this many real-time searches return no documents. In other words, it stops after `frequency` times `max_empty_searches` of real-time operation. If not set, a datafeed with no end time that sees no data remains started until it is explicitly stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#max_empty_searches ElasticsearchMlDatafeed#max_empty_searches}
  */
  readonly maxEmptySearches?: number;
  /**
  * The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch. By default uses `{"match_all": {"boost": 1}}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#query ElasticsearchMlDatafeed#query}
  */
  readonly query?: string;
  /**
  * The number of seconds behind real time that data is queried. For example, if data from 10:04 a.m. might not be searchable in Elasticsearch until 10:06 a.m., set this property to 120 seconds. The default value is randomly selected between `60s` and `120s`. This randomness improves the query performance when there are multiple jobs running on the same node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#query_delay ElasticsearchMlDatafeed#query_delay}
  */
  readonly queryDelay?: string;
  /**
  * Specifies runtime fields for the datafeed search. This should be a JSON object representing the runtime field mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#runtime_mappings ElasticsearchMlDatafeed#runtime_mappings}
  */
  readonly runtimeMappings?: string;
  /**
  * Specifies scripts that evaluate custom expressions and returns script fields to the datafeed. The detector configuration objects in a job can contain functions that use these script fields. This should be a JSON object representing the script fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#script_fields ElasticsearchMlDatafeed#script_fields}
  */
  readonly scriptFields?: string;
  /**
  * The size parameter that is used in Elasticsearch searches when the datafeed does not use aggregations. The maximum value is the value of `index.max_result_window`, which is 10,000 by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#scroll_size ElasticsearchMlDatafeed#scroll_size}
  */
  readonly scrollSize?: number;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#elasticsearch_connection ElasticsearchMlDatafeed#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchMlDatafeedElasticsearchConnection[] | cdktf.IResolvable;
}
export interface ElasticsearchMlDatafeedChunkingConfig {
  /**
  * The chunking mode. Can be `auto`, `manual`, or `off`. In `auto` mode, the chunk size is dynamically calculated. In `manual` mode, chunking is applied according to the specified `time_span`. In `off` mode, no chunking is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#mode ElasticsearchMlDatafeed#mode}
  */
  readonly mode: string;
  /**
  * The time span for each chunk. Only applicable and required when mode is `manual`. Must be a valid duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#time_span ElasticsearchMlDatafeed#time_span}
  */
  readonly timeSpan?: string;
}

export function elasticsearchMlDatafeedChunkingConfigToTerraform(struct?: ElasticsearchMlDatafeedChunkingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    time_span: cdktf.stringToTerraform(struct!.timeSpan),
  }
}


export function elasticsearchMlDatafeedChunkingConfigToHclTerraform(struct?: ElasticsearchMlDatafeedChunkingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_span: {
      value: cdktf.stringToHclTerraform(struct!.timeSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlDatafeedChunkingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchMlDatafeedChunkingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._timeSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSpan = this._timeSpan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlDatafeedChunkingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._timeSpan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._timeSpan = value.timeSpan;
    }
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // time_span - computed: true, optional: true, required: false
  private _timeSpan?: string; 
  public get timeSpan() {
    return this.getStringAttribute('time_span');
  }
  public set timeSpan(value: string) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }
}
export interface ElasticsearchMlDatafeedDelayedDataCheckConfig {
  /**
  * The window of time that is searched for late data. This window of time ends with the latest finalized bucket. It defaults to null, which causes an appropriate `check_window` to be calculated when the real-time datafeed runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#check_window ElasticsearchMlDatafeed#check_window}
  */
  readonly checkWindow?: string;
  /**
  * Specifies whether the datafeed periodically checks for delayed data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#enabled ElasticsearchMlDatafeed#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function elasticsearchMlDatafeedDelayedDataCheckConfigToTerraform(struct?: ElasticsearchMlDatafeedDelayedDataCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_window: cdktf.stringToTerraform(struct!.checkWindow),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchMlDatafeedDelayedDataCheckConfigToHclTerraform(struct?: ElasticsearchMlDatafeedDelayedDataCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_window: {
      value: cdktf.stringToHclTerraform(struct!.checkWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlDatafeedDelayedDataCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchMlDatafeedDelayedDataCheckConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkWindow = this._checkWindow;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlDatafeedDelayedDataCheckConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkWindow = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkWindow = value.checkWindow;
      this._enabled = value.enabled;
    }
  }

  // check_window - computed: true, optional: true, required: false
  private _checkWindow?: string; 
  public get checkWindow() {
    return this.getStringAttribute('check_window');
  }
  public set checkWindow(value: string) {
    this._checkWindow = value;
  }
  public resetCheckWindow() {
    this._checkWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkWindowInput() {
    return this._checkWindow;
  }

  // enabled - computed: true, optional: false, required: true
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
}
export interface ElasticsearchMlDatafeedIndicesOptions {
  /**
  * If true, wildcard indices expressions that resolve into no concrete indices are ignored. This includes the `_all` string or when no indices are specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#allow_no_indices ElasticsearchMlDatafeed#allow_no_indices}
  */
  readonly allowNoIndices?: boolean | cdktf.IResolvable;
  /**
  * Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#expand_wildcards ElasticsearchMlDatafeed#expand_wildcards}
  */
  readonly expandWildcards?: string[];
  /**
  * If true, concrete, expanded, or aliased indices are ignored when frozen. This setting is deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#ignore_throttled ElasticsearchMlDatafeed#ignore_throttled}
  */
  readonly ignoreThrottled?: boolean | cdktf.IResolvable;
  /**
  * If true, unavailable indices (missing or closed) are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#ignore_unavailable ElasticsearchMlDatafeed#ignore_unavailable}
  */
  readonly ignoreUnavailable?: boolean | cdktf.IResolvable;
}

export function elasticsearchMlDatafeedIndicesOptionsToTerraform(struct?: ElasticsearchMlDatafeedIndicesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_indices: cdktf.booleanToTerraform(struct!.allowNoIndices),
    expand_wildcards: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expandWildcards),
    ignore_throttled: cdktf.booleanToTerraform(struct!.ignoreThrottled),
    ignore_unavailable: cdktf.booleanToTerraform(struct!.ignoreUnavailable),
  }
}


export function elasticsearchMlDatafeedIndicesOptionsToHclTerraform(struct?: ElasticsearchMlDatafeedIndicesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_no_indices: {
      value: cdktf.booleanToHclTerraform(struct!.allowNoIndices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expand_wildcards: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expandWildcards),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_throttled: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreThrottled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_unavailable: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchMlDatafeedIndicesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchMlDatafeedIndicesOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoIndices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoIndices = this._allowNoIndices;
    }
    if (this._expandWildcards !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandWildcards = this._expandWildcards;
    }
    if (this._ignoreThrottled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreThrottled = this._ignoreThrottled;
    }
    if (this._ignoreUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnavailable = this._ignoreUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchMlDatafeedIndicesOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoIndices = undefined;
      this._expandWildcards = undefined;
      this._ignoreThrottled = undefined;
      this._ignoreUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoIndices = value.allowNoIndices;
      this._expandWildcards = value.expandWildcards;
      this._ignoreThrottled = value.ignoreThrottled;
      this._ignoreUnavailable = value.ignoreUnavailable;
    }
  }

  // allow_no_indices - computed: true, optional: true, required: false
  private _allowNoIndices?: boolean | cdktf.IResolvable; 
  public get allowNoIndices() {
    return this.getBooleanAttribute('allow_no_indices');
  }
  public set allowNoIndices(value: boolean | cdktf.IResolvable) {
    this._allowNoIndices = value;
  }
  public resetAllowNoIndices() {
    this._allowNoIndices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoIndicesInput() {
    return this._allowNoIndices;
  }

  // expand_wildcards - computed: true, optional: true, required: false
  private _expandWildcards?: string[]; 
  public get expandWildcards() {
    return this.getListAttribute('expand_wildcards');
  }
  public set expandWildcards(value: string[]) {
    this._expandWildcards = value;
  }
  public resetExpandWildcards() {
    this._expandWildcards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandWildcardsInput() {
    return this._expandWildcards;
  }

  // ignore_throttled - computed: true, optional: true, required: false
  private _ignoreThrottled?: boolean | cdktf.IResolvable; 
  public get ignoreThrottled() {
    return this.getBooleanAttribute('ignore_throttled');
  }
  public set ignoreThrottled(value: boolean | cdktf.IResolvable) {
    this._ignoreThrottled = value;
  }
  public resetIgnoreThrottled() {
    this._ignoreThrottled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreThrottledInput() {
    return this._ignoreThrottled;
  }

  // ignore_unavailable - computed: true, optional: true, required: false
  private _ignoreUnavailable?: boolean | cdktf.IResolvable; 
  public get ignoreUnavailable() {
    return this.getBooleanAttribute('ignore_unavailable');
  }
  public set ignoreUnavailable(value: boolean | cdktf.IResolvable) {
    this._ignoreUnavailable = value;
  }
  public resetIgnoreUnavailable() {
    this._ignoreUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnavailableInput() {
    return this._ignoreUnavailable;
  }
}
export interface ElasticsearchMlDatafeedElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#api_key ElasticsearchMlDatafeed#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#bearer_token ElasticsearchMlDatafeed#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#ca_data ElasticsearchMlDatafeed#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#ca_file ElasticsearchMlDatafeed#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#cert_data ElasticsearchMlDatafeed#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#cert_file ElasticsearchMlDatafeed#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#endpoints ElasticsearchMlDatafeed#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#es_client_authentication ElasticsearchMlDatafeed#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#headers ElasticsearchMlDatafeed#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#insecure ElasticsearchMlDatafeed#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#key_data ElasticsearchMlDatafeed#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#key_file ElasticsearchMlDatafeed#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#password ElasticsearchMlDatafeed#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#username ElasticsearchMlDatafeed#username}
  */
  readonly username?: string;
}

export function elasticsearchMlDatafeedElasticsearchConnectionToTerraform(struct?: ElasticsearchMlDatafeedElasticsearchConnection | cdktf.IResolvable): any {
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


export function elasticsearchMlDatafeedElasticsearchConnectionToHclTerraform(struct?: ElasticsearchMlDatafeedElasticsearchConnection | cdktf.IResolvable): any {
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

export class ElasticsearchMlDatafeedElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchMlDatafeedElasticsearchConnection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElasticsearchMlDatafeedElasticsearchConnection | cdktf.IResolvable | undefined) {
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

export class ElasticsearchMlDatafeedElasticsearchConnectionList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchMlDatafeedElasticsearchConnection[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchMlDatafeedElasticsearchConnectionOutputReference {
    return new ElasticsearchMlDatafeedElasticsearchConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed elasticstack_elasticsearch_ml_datafeed}
*/
export class ElasticsearchMlDatafeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ml_datafeed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchMlDatafeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchMlDatafeed to import
  * @param importFromId The id of the existing ElasticsearchMlDatafeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchMlDatafeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ml_datafeed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_ml_datafeed elasticstack_elasticsearch_ml_datafeed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchMlDatafeedConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchMlDatafeedConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ml_datafeed',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregations = config.aggregations;
    this._chunkingConfig.internalValue = config.chunkingConfig;
    this._datafeedId = config.datafeedId;
    this._delayedDataCheckConfig.internalValue = config.delayedDataCheckConfig;
    this._frequency = config.frequency;
    this._indices = config.indices;
    this._indicesOptions.internalValue = config.indicesOptions;
    this._jobId = config.jobId;
    this._maxEmptySearches = config.maxEmptySearches;
    this._query = config.query;
    this._queryDelay = config.queryDelay;
    this._runtimeMappings = config.runtimeMappings;
    this._scriptFields = config.scriptFields;
    this._scrollSize = config.scrollSize;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregations - computed: false, optional: true, required: false
  private _aggregations?: string; 
  public get aggregations() {
    return this.getStringAttribute('aggregations');
  }
  public set aggregations(value: string) {
    this._aggregations = value;
  }
  public resetAggregations() {
    this._aggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
  }

  // chunking_config - computed: true, optional: true, required: false
  private _chunkingConfig = new ElasticsearchMlDatafeedChunkingConfigOutputReference(this, "chunking_config");
  public get chunkingConfig() {
    return this._chunkingConfig;
  }
  public putChunkingConfig(value: ElasticsearchMlDatafeedChunkingConfig) {
    this._chunkingConfig.internalValue = value;
  }
  public resetChunkingConfig() {
    this._chunkingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingConfigInput() {
    return this._chunkingConfig.internalValue;
  }

  // datafeed_id - computed: false, optional: false, required: true
  private _datafeedId?: string; 
  public get datafeedId() {
    return this.getStringAttribute('datafeed_id');
  }
  public set datafeedId(value: string) {
    this._datafeedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datafeedIdInput() {
    return this._datafeedId;
  }

  // delayed_data_check_config - computed: true, optional: true, required: false
  private _delayedDataCheckConfig = new ElasticsearchMlDatafeedDelayedDataCheckConfigOutputReference(this, "delayed_data_check_config");
  public get delayedDataCheckConfig() {
    return this._delayedDataCheckConfig;
  }
  public putDelayedDataCheckConfig(value: ElasticsearchMlDatafeedDelayedDataCheckConfig) {
    this._delayedDataCheckConfig.internalValue = value;
  }
  public resetDelayedDataCheckConfig() {
    this._delayedDataCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedDataCheckConfigInput() {
    return this._delayedDataCheckConfig.internalValue;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // indices - computed: false, optional: false, required: true
  private _indices?: string[]; 
  public get indices() {
    return this.getListAttribute('indices');
  }
  public set indices(value: string[]) {
    this._indices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices;
  }

  // indices_options - computed: true, optional: true, required: false
  private _indicesOptions = new ElasticsearchMlDatafeedIndicesOptionsOutputReference(this, "indices_options");
  public get indicesOptions() {
    return this._indicesOptions;
  }
  public putIndicesOptions(value: ElasticsearchMlDatafeedIndicesOptions) {
    this._indicesOptions.internalValue = value;
  }
  public resetIndicesOptions() {
    this._indicesOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesOptionsInput() {
    return this._indicesOptions.internalValue;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // max_empty_searches - computed: false, optional: true, required: false
  private _maxEmptySearches?: number; 
  public get maxEmptySearches() {
    return this.getNumberAttribute('max_empty_searches');
  }
  public set maxEmptySearches(value: number) {
    this._maxEmptySearches = value;
  }
  public resetMaxEmptySearches() {
    this._maxEmptySearches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEmptySearchesInput() {
    return this._maxEmptySearches;
  }

  // query - computed: true, optional: true, required: false
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

  // query_delay - computed: true, optional: true, required: false
  private _queryDelay?: string; 
  public get queryDelay() {
    return this.getStringAttribute('query_delay');
  }
  public set queryDelay(value: string) {
    this._queryDelay = value;
  }
  public resetQueryDelay() {
    this._queryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDelayInput() {
    return this._queryDelay;
  }

  // runtime_mappings - computed: false, optional: true, required: false
  private _runtimeMappings?: string; 
  public get runtimeMappings() {
    return this.getStringAttribute('runtime_mappings');
  }
  public set runtimeMappings(value: string) {
    this._runtimeMappings = value;
  }
  public resetRuntimeMappings() {
    this._runtimeMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeMappingsInput() {
    return this._runtimeMappings;
  }

  // script_fields - computed: false, optional: true, required: false
  private _scriptFields?: string; 
  public get scriptFields() {
    return this.getStringAttribute('script_fields');
  }
  public set scriptFields(value: string) {
    this._scriptFields = value;
  }
  public resetScriptFields() {
    this._scriptFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptFieldsInput() {
    return this._scriptFields;
  }

  // scroll_size - computed: true, optional: true, required: false
  private _scrollSize?: number; 
  public get scrollSize() {
    return this.getNumberAttribute('scroll_size');
  }
  public set scrollSize(value: number) {
    this._scrollSize = value;
  }
  public resetScrollSize() {
    this._scrollSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrollSizeInput() {
    return this._scrollSize;
  }

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchMlDatafeedElasticsearchConnectionList(this, "elasticsearch_connection", false);
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchMlDatafeedElasticsearchConnection[] | cdktf.IResolvable) {
    this._elasticsearchConnection.internalValue = value;
  }
  public resetElasticsearchConnection() {
    this._elasticsearchConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectionInput() {
    return this._elasticsearchConnection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregations: cdktf.stringToTerraform(this._aggregations),
      chunking_config: elasticsearchMlDatafeedChunkingConfigToTerraform(this._chunkingConfig.internalValue),
      datafeed_id: cdktf.stringToTerraform(this._datafeedId),
      delayed_data_check_config: elasticsearchMlDatafeedDelayedDataCheckConfigToTerraform(this._delayedDataCheckConfig.internalValue),
      frequency: cdktf.stringToTerraform(this._frequency),
      indices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indices),
      indices_options: elasticsearchMlDatafeedIndicesOptionsToTerraform(this._indicesOptions.internalValue),
      job_id: cdktf.stringToTerraform(this._jobId),
      max_empty_searches: cdktf.numberToTerraform(this._maxEmptySearches),
      query: cdktf.stringToTerraform(this._query),
      query_delay: cdktf.stringToTerraform(this._queryDelay),
      runtime_mappings: cdktf.stringToTerraform(this._runtimeMappings),
      script_fields: cdktf.stringToTerraform(this._scriptFields),
      scroll_size: cdktf.numberToTerraform(this._scrollSize),
      elasticsearch_connection: cdktf.listMapper(elasticsearchMlDatafeedElasticsearchConnectionToTerraform, true)(this._elasticsearchConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregations: {
        value: cdktf.stringToHclTerraform(this._aggregations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chunking_config: {
        value: elasticsearchMlDatafeedChunkingConfigToHclTerraform(this._chunkingConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchMlDatafeedChunkingConfig",
      },
      datafeed_id: {
        value: cdktf.stringToHclTerraform(this._datafeedId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delayed_data_check_config: {
        value: elasticsearchMlDatafeedDelayedDataCheckConfigToHclTerraform(this._delayedDataCheckConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchMlDatafeedDelayedDataCheckConfig",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      indices_options: {
        value: elasticsearchMlDatafeedIndicesOptionsToHclTerraform(this._indicesOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchMlDatafeedIndicesOptions",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_empty_searches: {
        value: cdktf.numberToHclTerraform(this._maxEmptySearches),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_delay: {
        value: cdktf.stringToHclTerraform(this._queryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_mappings: {
        value: cdktf.stringToHclTerraform(this._runtimeMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_fields: {
        value: cdktf.stringToHclTerraform(this._scriptFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scroll_size: {
        value: cdktf.numberToHclTerraform(this._scrollSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elasticsearch_connection: {
        value: cdktf.listMapperHcl(elasticsearchMlDatafeedElasticsearchConnectionToHclTerraform, true)(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchMlDatafeedElasticsearchConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
