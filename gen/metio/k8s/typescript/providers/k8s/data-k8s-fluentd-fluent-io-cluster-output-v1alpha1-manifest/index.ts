// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#metadata DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadata;
  /**
  * ClusterOutputSpec defines the desired state of ClusterOutput
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#spec DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpec;
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#annotations DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#labels DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBuffer {
  /**
  * Calculates the number of records, chunk size, during chunk resume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#calc_num_records DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#calc_num_records}
  */
  readonly calcNumRecords?: string;
  /**
  * ChunkFormat specifies the chunk format for calc_num_records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#chunk_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#chunk_format}
  */
  readonly chunkFormat?: string;
  /**
  * The max number of events that each chunks can store in it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#chunk_limit_records DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#chunk_limit_records}
  */
  readonly chunkLimitRecords?: string;
  /**
  * Buffer parameters The max size of each chunks: events will be written into chunks until the size of chunks become this size Default: 8MB (memory) / 256MB (file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#chunk_limit_size DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#chunk_limit_size}
  */
  readonly chunkLimitSize?: string;
  /**
  * Fluentd will decompress these compressed chunks automatically before passing them to the output plugin If gzip is set, Fluentd compresses data records before writing to buffer chunks. Default:text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#compress DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#compress}
  */
  readonly compress?: string;
  /**
  * The timeout (seconds) until output plugin decides if the async write operation has failed. Default is 60s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#delayed_commit_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#delayed_commit_timeout}
  */
  readonly delayedCommitTimeout?: string;
  /**
  * Instead of storing unrecoverable chunks in the backup directory, just discard them. This option is new in Fluentd v1.2.6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#disable_chunk_backup DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#disable_chunk_backup}
  */
  readonly disableChunkBackup?: boolean | cdktf.IResolvable;
  /**
  * Flush parameters This specifies whether to flush/write all buffer chunks on shutdown or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#flush_at_shutdown DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#flush_at_shutdown}
  */
  readonly flushAtShutdown?: boolean | cdktf.IResolvable;
  /**
  * FlushInterval defines the flush interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#flush_interval DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#flush_interval}
  */
  readonly flushInterval?: string;
  /**
  * FlushMode defines the flush mode: lazy: flushes/writes chunks once per timekey interval: flushes/writes chunks per specified time via flush_interval immediate: flushes/writes chunks immediately after events are appended into chunks default: equals to lazy if time is specified as chunk key, interval otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#flush_mode DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#flush_mode}
  */
  readonly flushMode?: string;
  /**
  * The number of threads to flush/write chunks in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#flush_thread_count DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#flush_thread_count}
  */
  readonly flushThreadCount?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, uses local time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#localtime DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * OverflowAtction defines the output plugin behave when its buffer queue is full. Default: throw_exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#overflow_action DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#overflow_action}
  */
  readonly overflowAction?: string;
  /**
  * The path where buffer chunks are stored. This field would make no effect in memory buffer plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Changes the suffix of the buffer file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#path_suffix DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#path_suffix}
  */
  readonly pathSuffix?: string;
  /**
  * The queue length limitation of this buffer plugin instance. Default: 0.95
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#queue_limit_length DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#queue_limit_length}
  */
  readonly queueLimitLength?: string;
  /**
  * Limit the number of queued chunks. Default: 1 If a smaller flush_interval is set, e.g. 1s, there are lots of small queued chunks in the buffer. With file buffer, it may consume a lot of fd resources when output destination has a problem. This parameter mitigates such situations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#queued_chunks_limit_size DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#queued_chunks_limit_size}
  */
  readonly queuedChunksLimitSize?: number;
  /**
  * The base number of exponential backoff for retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_exponential_backoff_base DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_exponential_backoff_base}
  */
  readonly retryExponentialBackoffBase?: string;
  /**
  * If true, plugin will ignore retry_timeout and retry_max_times options and retry flushing forever.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_forever DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_forever}
  */
  readonly retryForever?: boolean | cdktf.IResolvable;
  /**
  * The maximum interval (seconds) for exponential backoff between retries while failing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_max_interval DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_max_interval}
  */
  readonly retryMaxInterval?: string;
  /**
  * The maximum number of times to retry to flush the failed chunks. Default: none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_max_times DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_max_times}
  */
  readonly retryMaxTimes?: number;
  /**
  * If true, the output plugin will retry after randomized interval not to do burst retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_randomize DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_randomize}
  */
  readonly retryRandomize?: boolean | cdktf.IResolvable;
  /**
  * The ratio of retry_timeout to switch to use the secondary while failing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_secondary_threshold DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_secondary_threshold}
  */
  readonly retrySecondaryThreshold?: string;
  /**
  * Retry parameters The maximum time (seconds) to retry to flush again the failed chunks, until the plugin discards the buffer chunks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_timeout}
  */
  readonly retryTimeout?: string;
  /**
  * Output plugin will retry periodically with fixed intervals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_type}
  */
  readonly retryType?: string;
  /**
  * Wait in seconds before the next retry to flush or constant factor of exponential backoff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retry_wait DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retry_wait}
  */
  readonly retryWait?: string;
  /**
  * The output plugins group events into chunks. Chunk keys, specified as the argument of <buffer> section, control how to group events into chunks. If tag is empty, which means blank Chunk Keys. Tag also supports Nested Field, combination of Chunk Keys, placeholders, etc. See https://docs.fluentd.org/configuration/buffer-section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tag DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
  /**
  * Process value according to the specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Uses the specified time format as a fallback in the specified order. You can parse undetermined time format by using time_format_fallbacks. This options is enabled when time_type is mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_format_fallbacks DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_format_fallbacks}
  */
  readonly timeFormatFallbacks?: string;
  /**
  * parses/formats value according to this type, default is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Output plugin will flush chunks per specified time (enabled when time is specified in chunk keys)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#timekey DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#timekey}
  */
  readonly timekey?: string;
  /**
  * Output plugin will write chunks after timekey_wait seconds later after timekey expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#timekey_wait DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#timekey_wait}
  */
  readonly timekeyWait?: string;
  /**
  * Uses the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#timezone DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * The size limitation of this buffer plugin instance Default: 512MB (memory) / 64GB (file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#total_limit_size DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#total_limit_size}
  */
  readonly totalLimitSize?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * If true, uses UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#utc DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBufferToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBuffer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calc_num_records: cdktf.stringToTerraform(struct!.calcNumRecords),
    chunk_format: cdktf.stringToTerraform(struct!.chunkFormat),
    chunk_limit_records: cdktf.stringToTerraform(struct!.chunkLimitRecords),
    chunk_limit_size: cdktf.stringToTerraform(struct!.chunkLimitSize),
    compress: cdktf.stringToTerraform(struct!.compress),
    delayed_commit_timeout: cdktf.stringToTerraform(struct!.delayedCommitTimeout),
    disable_chunk_backup: cdktf.booleanToTerraform(struct!.disableChunkBackup),
    flush_at_shutdown: cdktf.booleanToTerraform(struct!.flushAtShutdown),
    flush_interval: cdktf.stringToTerraform(struct!.flushInterval),
    flush_mode: cdktf.stringToTerraform(struct!.flushMode),
    flush_thread_count: cdktf.stringToTerraform(struct!.flushThreadCount),
    id: cdktf.stringToTerraform(struct!.id),
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    overflow_action: cdktf.stringToTerraform(struct!.overflowAction),
    path: cdktf.stringToTerraform(struct!.path),
    path_suffix: cdktf.stringToTerraform(struct!.pathSuffix),
    queue_limit_length: cdktf.stringToTerraform(struct!.queueLimitLength),
    queued_chunks_limit_size: cdktf.numberToTerraform(struct!.queuedChunksLimitSize),
    retry_exponential_backoff_base: cdktf.stringToTerraform(struct!.retryExponentialBackoffBase),
    retry_forever: cdktf.booleanToTerraform(struct!.retryForever),
    retry_max_interval: cdktf.stringToTerraform(struct!.retryMaxInterval),
    retry_max_times: cdktf.numberToTerraform(struct!.retryMaxTimes),
    retry_randomize: cdktf.booleanToTerraform(struct!.retryRandomize),
    retry_secondary_threshold: cdktf.stringToTerraform(struct!.retrySecondaryThreshold),
    retry_timeout: cdktf.stringToTerraform(struct!.retryTimeout),
    retry_type: cdktf.stringToTerraform(struct!.retryType),
    retry_wait: cdktf.stringToTerraform(struct!.retryWait),
    tag: cdktf.stringToTerraform(struct!.tag),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_format_fallbacks: cdktf.stringToTerraform(struct!.timeFormatFallbacks),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timekey: cdktf.stringToTerraform(struct!.timekey),
    timekey_wait: cdktf.stringToTerraform(struct!.timekeyWait),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    total_limit_size: cdktf.stringToTerraform(struct!.totalLimitSize),
    type: cdktf.stringToTerraform(struct!.type),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBufferToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBuffer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calc_num_records: {
      value: cdktf.stringToHclTerraform(struct!.calcNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_format: {
      value: cdktf.stringToHclTerraform(struct!.chunkFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_limit_records: {
      value: cdktf.stringToHclTerraform(struct!.chunkLimitRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.stringToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delayed_commit_timeout: {
      value: cdktf.stringToHclTerraform(struct!.delayedCommitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_chunk_backup: {
      value: cdktf.booleanToHclTerraform(struct!.disableChunkBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flush_at_shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.flushAtShutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.flushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_mode: {
      value: cdktf.stringToHclTerraform(struct!.flushMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_thread_count: {
      value: cdktf.stringToHclTerraform(struct!.flushThreadCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overflow_action: {
      value: cdktf.stringToHclTerraform(struct!.overflowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_suffix: {
      value: cdktf.stringToHclTerraform(struct!.pathSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_limit_length: {
      value: cdktf.stringToHclTerraform(struct!.queueLimitLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queued_chunks_limit_size: {
      value: cdktf.numberToHclTerraform(struct!.queuedChunksLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_exponential_backoff_base: {
      value: cdktf.stringToHclTerraform(struct!.retryExponentialBackoffBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_forever: {
      value: cdktf.booleanToHclTerraform(struct!.retryForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_max_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryMaxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_max_times: {
      value: cdktf.numberToHclTerraform(struct!.retryMaxTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_randomize: {
      value: cdktf.booleanToHclTerraform(struct!.retryRandomize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_secondary_threshold: {
      value: cdktf.stringToHclTerraform(struct!.retrySecondaryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_timeout: {
      value: cdktf.stringToHclTerraform(struct!.retryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_type: {
      value: cdktf.stringToHclTerraform(struct!.retryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_wait: {
      value: cdktf.stringToHclTerraform(struct!.retryWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_fallbacks: {
      value: cdktf.stringToHclTerraform(struct!.timeFormatFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timekey: {
      value: cdktf.stringToHclTerraform(struct!.timekey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timekey_wait: {
      value: cdktf.stringToHclTerraform(struct!.timekeyWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.totalLimitSize),
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
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBufferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBuffer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calcNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.calcNumRecords = this._calcNumRecords;
    }
    if (this._chunkFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkFormat = this._chunkFormat;
    }
    if (this._chunkLimitRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkLimitRecords = this._chunkLimitRecords;
    }
    if (this._chunkLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkLimitSize = this._chunkLimitSize;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._delayedCommitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayedCommitTimeout = this._delayedCommitTimeout;
    }
    if (this._disableChunkBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableChunkBackup = this._disableChunkBackup;
    }
    if (this._flushAtShutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushAtShutdown = this._flushAtShutdown;
    }
    if (this._flushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushInterval = this._flushInterval;
    }
    if (this._flushMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMode = this._flushMode;
    }
    if (this._flushThreadCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushThreadCount = this._flushThreadCount;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._overflowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.overflowAction = this._overflowAction;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathSuffix = this._pathSuffix;
    }
    if (this._queueLimitLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueLimitLength = this._queueLimitLength;
    }
    if (this._queuedChunksLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuedChunksLimitSize = this._queuedChunksLimitSize;
    }
    if (this._retryExponentialBackoffBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryExponentialBackoffBase = this._retryExponentialBackoffBase;
    }
    if (this._retryForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryForever = this._retryForever;
    }
    if (this._retryMaxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryMaxInterval = this._retryMaxInterval;
    }
    if (this._retryMaxTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryMaxTimes = this._retryMaxTimes;
    }
    if (this._retryRandomize !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryRandomize = this._retryRandomize;
    }
    if (this._retrySecondaryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrySecondaryThreshold = this._retrySecondaryThreshold;
    }
    if (this._retryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTimeout = this._retryTimeout;
    }
    if (this._retryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryType = this._retryType;
    }
    if (this._retryWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryWait = this._retryWait;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeFormatFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatFallbacks = this._timeFormatFallbacks;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timekey = this._timekey;
    }
    if (this._timekeyWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.timekeyWait = this._timekeyWait;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._totalLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLimitSize = this._totalLimitSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBuffer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calcNumRecords = undefined;
      this._chunkFormat = undefined;
      this._chunkLimitRecords = undefined;
      this._chunkLimitSize = undefined;
      this._compress = undefined;
      this._delayedCommitTimeout = undefined;
      this._disableChunkBackup = undefined;
      this._flushAtShutdown = undefined;
      this._flushInterval = undefined;
      this._flushMode = undefined;
      this._flushThreadCount = undefined;
      this._id = undefined;
      this._localtime = undefined;
      this._logLevel = undefined;
      this._overflowAction = undefined;
      this._path = undefined;
      this._pathSuffix = undefined;
      this._queueLimitLength = undefined;
      this._queuedChunksLimitSize = undefined;
      this._retryExponentialBackoffBase = undefined;
      this._retryForever = undefined;
      this._retryMaxInterval = undefined;
      this._retryMaxTimes = undefined;
      this._retryRandomize = undefined;
      this._retrySecondaryThreshold = undefined;
      this._retryTimeout = undefined;
      this._retryType = undefined;
      this._retryWait = undefined;
      this._tag = undefined;
      this._timeFormat = undefined;
      this._timeFormatFallbacks = undefined;
      this._timeType = undefined;
      this._timekey = undefined;
      this._timekeyWait = undefined;
      this._timezone = undefined;
      this._totalLimitSize = undefined;
      this._type = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calcNumRecords = value.calcNumRecords;
      this._chunkFormat = value.chunkFormat;
      this._chunkLimitRecords = value.chunkLimitRecords;
      this._chunkLimitSize = value.chunkLimitSize;
      this._compress = value.compress;
      this._delayedCommitTimeout = value.delayedCommitTimeout;
      this._disableChunkBackup = value.disableChunkBackup;
      this._flushAtShutdown = value.flushAtShutdown;
      this._flushInterval = value.flushInterval;
      this._flushMode = value.flushMode;
      this._flushThreadCount = value.flushThreadCount;
      this._id = value.id;
      this._localtime = value.localtime;
      this._logLevel = value.logLevel;
      this._overflowAction = value.overflowAction;
      this._path = value.path;
      this._pathSuffix = value.pathSuffix;
      this._queueLimitLength = value.queueLimitLength;
      this._queuedChunksLimitSize = value.queuedChunksLimitSize;
      this._retryExponentialBackoffBase = value.retryExponentialBackoffBase;
      this._retryForever = value.retryForever;
      this._retryMaxInterval = value.retryMaxInterval;
      this._retryMaxTimes = value.retryMaxTimes;
      this._retryRandomize = value.retryRandomize;
      this._retrySecondaryThreshold = value.retrySecondaryThreshold;
      this._retryTimeout = value.retryTimeout;
      this._retryType = value.retryType;
      this._retryWait = value.retryWait;
      this._tag = value.tag;
      this._timeFormat = value.timeFormat;
      this._timeFormatFallbacks = value.timeFormatFallbacks;
      this._timeType = value.timeType;
      this._timekey = value.timekey;
      this._timekeyWait = value.timekeyWait;
      this._timezone = value.timezone;
      this._totalLimitSize = value.totalLimitSize;
      this._type = value.type;
      this._utc = value.utc;
    }
  }

  // calc_num_records - computed: false, optional: true, required: false
  private _calcNumRecords?: string; 
  public get calcNumRecords() {
    return this.getStringAttribute('calc_num_records');
  }
  public set calcNumRecords(value: string) {
    this._calcNumRecords = value;
  }
  public resetCalcNumRecords() {
    this._calcNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcNumRecordsInput() {
    return this._calcNumRecords;
  }

  // chunk_format - computed: false, optional: true, required: false
  private _chunkFormat?: string; 
  public get chunkFormat() {
    return this.getStringAttribute('chunk_format');
  }
  public set chunkFormat(value: string) {
    this._chunkFormat = value;
  }
  public resetChunkFormat() {
    this._chunkFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkFormatInput() {
    return this._chunkFormat;
  }

  // chunk_limit_records - computed: false, optional: true, required: false
  private _chunkLimitRecords?: string; 
  public get chunkLimitRecords() {
    return this.getStringAttribute('chunk_limit_records');
  }
  public set chunkLimitRecords(value: string) {
    this._chunkLimitRecords = value;
  }
  public resetChunkLimitRecords() {
    this._chunkLimitRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkLimitRecordsInput() {
    return this._chunkLimitRecords;
  }

  // chunk_limit_size - computed: false, optional: true, required: false
  private _chunkLimitSize?: string; 
  public get chunkLimitSize() {
    return this.getStringAttribute('chunk_limit_size');
  }
  public set chunkLimitSize(value: string) {
    this._chunkLimitSize = value;
  }
  public resetChunkLimitSize() {
    this._chunkLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkLimitSizeInput() {
    return this._chunkLimitSize;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: string; 
  public get compress() {
    return this.getStringAttribute('compress');
  }
  public set compress(value: string) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // delayed_commit_timeout - computed: false, optional: true, required: false
  private _delayedCommitTimeout?: string; 
  public get delayedCommitTimeout() {
    return this.getStringAttribute('delayed_commit_timeout');
  }
  public set delayedCommitTimeout(value: string) {
    this._delayedCommitTimeout = value;
  }
  public resetDelayedCommitTimeout() {
    this._delayedCommitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedCommitTimeoutInput() {
    return this._delayedCommitTimeout;
  }

  // disable_chunk_backup - computed: false, optional: true, required: false
  private _disableChunkBackup?: boolean | cdktf.IResolvable; 
  public get disableChunkBackup() {
    return this.getBooleanAttribute('disable_chunk_backup');
  }
  public set disableChunkBackup(value: boolean | cdktf.IResolvable) {
    this._disableChunkBackup = value;
  }
  public resetDisableChunkBackup() {
    this._disableChunkBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableChunkBackupInput() {
    return this._disableChunkBackup;
  }

  // flush_at_shutdown - computed: false, optional: true, required: false
  private _flushAtShutdown?: boolean | cdktf.IResolvable; 
  public get flushAtShutdown() {
    return this.getBooleanAttribute('flush_at_shutdown');
  }
  public set flushAtShutdown(value: boolean | cdktf.IResolvable) {
    this._flushAtShutdown = value;
  }
  public resetFlushAtShutdown() {
    this._flushAtShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushAtShutdownInput() {
    return this._flushAtShutdown;
  }

  // flush_interval - computed: false, optional: true, required: false
  private _flushInterval?: string; 
  public get flushInterval() {
    return this.getStringAttribute('flush_interval');
  }
  public set flushInterval(value: string) {
    this._flushInterval = value;
  }
  public resetFlushInterval() {
    this._flushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalInput() {
    return this._flushInterval;
  }

  // flush_mode - computed: false, optional: true, required: false
  private _flushMode?: string; 
  public get flushMode() {
    return this.getStringAttribute('flush_mode');
  }
  public set flushMode(value: string) {
    this._flushMode = value;
  }
  public resetFlushMode() {
    this._flushMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushModeInput() {
    return this._flushMode;
  }

  // flush_thread_count - computed: false, optional: true, required: false
  private _flushThreadCount?: string; 
  public get flushThreadCount() {
    return this.getStringAttribute('flush_thread_count');
  }
  public set flushThreadCount(value: string) {
    this._flushThreadCount = value;
  }
  public resetFlushThreadCount() {
    this._flushThreadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushThreadCountInput() {
    return this._flushThreadCount;
  }

  // id - computed: false, optional: true, required: false
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

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // overflow_action - computed: false, optional: true, required: false
  private _overflowAction?: string; 
  public get overflowAction() {
    return this.getStringAttribute('overflow_action');
  }
  public set overflowAction(value: string) {
    this._overflowAction = value;
  }
  public resetOverflowAction() {
    this._overflowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowActionInput() {
    return this._overflowAction;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_suffix - computed: false, optional: true, required: false
  private _pathSuffix?: string; 
  public get pathSuffix() {
    return this.getStringAttribute('path_suffix');
  }
  public set pathSuffix(value: string) {
    this._pathSuffix = value;
  }
  public resetPathSuffix() {
    this._pathSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathSuffixInput() {
    return this._pathSuffix;
  }

  // queue_limit_length - computed: false, optional: true, required: false
  private _queueLimitLength?: string; 
  public get queueLimitLength() {
    return this.getStringAttribute('queue_limit_length');
  }
  public set queueLimitLength(value: string) {
    this._queueLimitLength = value;
  }
  public resetQueueLimitLength() {
    this._queueLimitLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLimitLengthInput() {
    return this._queueLimitLength;
  }

  // queued_chunks_limit_size - computed: false, optional: true, required: false
  private _queuedChunksLimitSize?: number; 
  public get queuedChunksLimitSize() {
    return this.getNumberAttribute('queued_chunks_limit_size');
  }
  public set queuedChunksLimitSize(value: number) {
    this._queuedChunksLimitSize = value;
  }
  public resetQueuedChunksLimitSize() {
    this._queuedChunksLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedChunksLimitSizeInput() {
    return this._queuedChunksLimitSize;
  }

  // retry_exponential_backoff_base - computed: false, optional: true, required: false
  private _retryExponentialBackoffBase?: string; 
  public get retryExponentialBackoffBase() {
    return this.getStringAttribute('retry_exponential_backoff_base');
  }
  public set retryExponentialBackoffBase(value: string) {
    this._retryExponentialBackoffBase = value;
  }
  public resetRetryExponentialBackoffBase() {
    this._retryExponentialBackoffBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryExponentialBackoffBaseInput() {
    return this._retryExponentialBackoffBase;
  }

  // retry_forever - computed: false, optional: true, required: false
  private _retryForever?: boolean | cdktf.IResolvable; 
  public get retryForever() {
    return this.getBooleanAttribute('retry_forever');
  }
  public set retryForever(value: boolean | cdktf.IResolvable) {
    this._retryForever = value;
  }
  public resetRetryForever() {
    this._retryForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryForeverInput() {
    return this._retryForever;
  }

  // retry_max_interval - computed: false, optional: true, required: false
  private _retryMaxInterval?: string; 
  public get retryMaxInterval() {
    return this.getStringAttribute('retry_max_interval');
  }
  public set retryMaxInterval(value: string) {
    this._retryMaxInterval = value;
  }
  public resetRetryMaxInterval() {
    this._retryMaxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxIntervalInput() {
    return this._retryMaxInterval;
  }

  // retry_max_times - computed: false, optional: true, required: false
  private _retryMaxTimes?: number; 
  public get retryMaxTimes() {
    return this.getNumberAttribute('retry_max_times');
  }
  public set retryMaxTimes(value: number) {
    this._retryMaxTimes = value;
  }
  public resetRetryMaxTimes() {
    this._retryMaxTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxTimesInput() {
    return this._retryMaxTimes;
  }

  // retry_randomize - computed: false, optional: true, required: false
  private _retryRandomize?: boolean | cdktf.IResolvable; 
  public get retryRandomize() {
    return this.getBooleanAttribute('retry_randomize');
  }
  public set retryRandomize(value: boolean | cdktf.IResolvable) {
    this._retryRandomize = value;
  }
  public resetRetryRandomize() {
    this._retryRandomize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryRandomizeInput() {
    return this._retryRandomize;
  }

  // retry_secondary_threshold - computed: false, optional: true, required: false
  private _retrySecondaryThreshold?: string; 
  public get retrySecondaryThreshold() {
    return this.getStringAttribute('retry_secondary_threshold');
  }
  public set retrySecondaryThreshold(value: string) {
    this._retrySecondaryThreshold = value;
  }
  public resetRetrySecondaryThreshold() {
    this._retrySecondaryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrySecondaryThresholdInput() {
    return this._retrySecondaryThreshold;
  }

  // retry_timeout - computed: false, optional: true, required: false
  private _retryTimeout?: string; 
  public get retryTimeout() {
    return this.getStringAttribute('retry_timeout');
  }
  public set retryTimeout(value: string) {
    this._retryTimeout = value;
  }
  public resetRetryTimeout() {
    this._retryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeoutInput() {
    return this._retryTimeout;
  }

  // retry_type - computed: false, optional: true, required: false
  private _retryType?: string; 
  public get retryType() {
    return this.getStringAttribute('retry_type');
  }
  public set retryType(value: string) {
    this._retryType = value;
  }
  public resetRetryType() {
    this._retryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTypeInput() {
    return this._retryType;
  }

  // retry_wait - computed: false, optional: true, required: false
  private _retryWait?: string; 
  public get retryWait() {
    return this.getStringAttribute('retry_wait');
  }
  public set retryWait(value: string) {
    this._retryWait = value;
  }
  public resetRetryWait() {
    this._retryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitInput() {
    return this._retryWait;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_format_fallbacks - computed: false, optional: true, required: false
  private _timeFormatFallbacks?: string; 
  public get timeFormatFallbacks() {
    return this.getStringAttribute('time_format_fallbacks');
  }
  public set timeFormatFallbacks(value: string) {
    this._timeFormatFallbacks = value;
  }
  public resetTimeFormatFallbacks() {
    this._timeFormatFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatFallbacksInput() {
    return this._timeFormatFallbacks;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timekey - computed: false, optional: true, required: false
  private _timekey?: string; 
  public get timekey() {
    return this.getStringAttribute('timekey');
  }
  public set timekey(value: string) {
    this._timekey = value;
  }
  public resetTimekey() {
    this._timekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timekeyInput() {
    return this._timekey;
  }

  // timekey_wait - computed: false, optional: true, required: false
  private _timekeyWait?: string; 
  public get timekeyWait() {
    return this.getStringAttribute('timekey_wait');
  }
  public set timekeyWait(value: string) {
    this._timekeyWait = value;
  }
  public resetTimekeyWait() {
    this._timekeyWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timekeyWaitInput() {
    return this._timekeyWait;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // total_limit_size - computed: false, optional: true, required: false
  private _totalLimitSize?: string; 
  public get totalLimitSize() {
    return this.getStringAttribute('total_limit_size');
  }
  public set totalLimitSize(value: string) {
    this._totalLimitSize = value;
  }
  public resetTotalLimitSize() {
    this._totalLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLimitSizeInput() {
    return this._totalLimitSize;
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

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyId {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKey {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#auto_create_stream DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#auto_create_stream}
  */
  readonly autoCreateStream?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_ecs_authentication DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_ecs_authentication}
  */
  readonly awsEcsAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Secret defines the key of a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_key_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_key_id}
  */
  readonly awsKeyId?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyId;
  /**
  * Secret defines the key of a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_sec_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_sec_key}
  */
  readonly awsSecKey?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_sts_duration_seconds DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_sts_duration_seconds}
  */
  readonly awsStsDurationSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_sts_endpoint_url DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_sts_endpoint_url}
  */
  readonly awsStsEndpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_sts_external_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_sts_external_id}
  */
  readonly awsStsExternalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_sts_policy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_sts_policy}
  */
  readonly awsStsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_sts_role_arn DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_sts_role_arn}
  */
  readonly awsStsRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_sts_session_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_sts_session_name}
  */
  readonly awsStsSessionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_use_sts DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_use_sts}
  */
  readonly awsUseSts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#concurrency DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#duration_seconds DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#duration_seconds}
  */
  readonly durationSeconds?: string;
  /**
  * Specify an AWS endpoint to send data to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#endpoint DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#http_proxy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#include_time_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#include_time_key}
  */
  readonly includeTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#json_handler DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#json_handler}
  */
  readonly jsonHandler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#localtime DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_group_aws_tags DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_group_aws_tags}
  */
  readonly logGroupAwsTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_group_aws_tags_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_group_aws_tags_key}
  */
  readonly logGroupAwsTagsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_group_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_group_name_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_group_name_key}
  */
  readonly logGroupNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_rejected_request DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_rejected_request}
  */
  readonly logRejectedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_stream_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_stream_name}
  */
  readonly logStreamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_stream_name_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_stream_name_key}
  */
  readonly logStreamNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#max_events_per_batch DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#max_message_length DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#max_message_length}
  */
  readonly maxMessageLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#message_keys DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#message_keys}
  */
  readonly messageKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#policy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#put_log_events_disable_retry_limit DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#put_log_events_disable_retry_limit}
  */
  readonly putLogEventsDisableRetryLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#put_log_events_retry_limit DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#put_log_events_retry_limit}
  */
  readonly putLogEventsRetryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#put_log_events_retry_wait DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#put_log_events_retry_wait}
  */
  readonly putLogEventsRetryWait?: string;
  /**
  * The AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#region DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#remove_log_group_aws_tags_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#remove_log_group_aws_tags_key}
  */
  readonly removeLogGroupAwsTagsKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#remove_log_group_name_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#remove_log_group_name_key}
  */
  readonly removeLogGroupNameKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#remove_log_stream_name_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#remove_log_stream_name_key}
  */
  readonly removeLogStreamNameKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#remove_retention_in_days_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#remove_retention_in_days_key}
  */
  readonly removeRetentionInDaysKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retention_in_days DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retention_in_days}
  */
  readonly retentionInDays?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retention_in_days_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retention_in_days_key}
  */
  readonly retentionInDaysKey?: string;
  /**
  * ARN of an IAM role to assume (for cross account access).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#role_arn DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Role Session name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#role_session_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#role_session_name}
  */
  readonly roleSessionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ssl_verify_peer DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ssl_verify_peer}
  */
  readonly sslVerifyPeer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#use_tag_as_group DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#use_tag_as_group}
  */
  readonly useTagAsGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#use_tag_as_stream DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#use_tag_as_stream}
  */
  readonly useTagAsStream?: string;
  /**
  * Web identity token file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#web_identity_token_file DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#web_identity_token_file}
  */
  readonly webIdentityTokenFile?: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_stream: cdktf.booleanToTerraform(struct!.autoCreateStream),
    aws_ecs_authentication: cdktf.booleanToTerraform(struct!.awsEcsAuthentication),
    aws_key_id: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdToTerraform(struct!.awsKeyId),
    aws_sec_key: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyToTerraform(struct!.awsSecKey),
    aws_sts_duration_seconds: cdktf.stringToTerraform(struct!.awsStsDurationSeconds),
    aws_sts_endpoint_url: cdktf.stringToTerraform(struct!.awsStsEndpointUrl),
    aws_sts_external_id: cdktf.stringToTerraform(struct!.awsStsExternalId),
    aws_sts_policy: cdktf.stringToTerraform(struct!.awsStsPolicy),
    aws_sts_role_arn: cdktf.stringToTerraform(struct!.awsStsRoleArn),
    aws_sts_session_name: cdktf.stringToTerraform(struct!.awsStsSessionName),
    aws_use_sts: cdktf.booleanToTerraform(struct!.awsUseSts),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    duration_seconds: cdktf.stringToTerraform(struct!.durationSeconds),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    include_time_key: cdktf.booleanToTerraform(struct!.includeTimeKey),
    json_handler: cdktf.stringToTerraform(struct!.jsonHandler),
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    log_group_aws_tags: cdktf.stringToTerraform(struct!.logGroupAwsTags),
    log_group_aws_tags_key: cdktf.stringToTerraform(struct!.logGroupAwsTagsKey),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_group_name_key: cdktf.stringToTerraform(struct!.logGroupNameKey),
    log_rejected_request: cdktf.stringToTerraform(struct!.logRejectedRequest),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    log_stream_name_key: cdktf.stringToTerraform(struct!.logStreamNameKey),
    max_events_per_batch: cdktf.stringToTerraform(struct!.maxEventsPerBatch),
    max_message_length: cdktf.stringToTerraform(struct!.maxMessageLength),
    message_keys: cdktf.stringToTerraform(struct!.messageKeys),
    policy: cdktf.stringToTerraform(struct!.policy),
    put_log_events_disable_retry_limit: cdktf.booleanToTerraform(struct!.putLogEventsDisableRetryLimit),
    put_log_events_retry_limit: cdktf.stringToTerraform(struct!.putLogEventsRetryLimit),
    put_log_events_retry_wait: cdktf.stringToTerraform(struct!.putLogEventsRetryWait),
    region: cdktf.stringToTerraform(struct!.region),
    remove_log_group_aws_tags_key: cdktf.booleanToTerraform(struct!.removeLogGroupAwsTagsKey),
    remove_log_group_name_key: cdktf.booleanToTerraform(struct!.removeLogGroupNameKey),
    remove_log_stream_name_key: cdktf.booleanToTerraform(struct!.removeLogStreamNameKey),
    remove_retention_in_days_key: cdktf.booleanToTerraform(struct!.removeRetentionInDaysKey),
    retention_in_days: cdktf.stringToTerraform(struct!.retentionInDays),
    retention_in_days_key: cdktf.stringToTerraform(struct!.retentionInDaysKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_session_name: cdktf.stringToTerraform(struct!.roleSessionName),
    ssl_verify_peer: cdktf.booleanToTerraform(struct!.sslVerifyPeer),
    use_tag_as_group: cdktf.stringToTerraform(struct!.useTagAsGroup),
    use_tag_as_stream: cdktf.stringToTerraform(struct!.useTagAsStream),
    web_identity_token_file: cdktf.stringToTerraform(struct!.webIdentityTokenFile),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_stream: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateStream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_ecs_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.awsEcsAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_key_id: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdToHclTerraform(struct!.awsKeyId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyId",
    },
    aws_sec_key: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyToHclTerraform(struct!.awsSecKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKey",
    },
    aws_sts_duration_seconds: {
      value: cdktf.stringToHclTerraform(struct!.awsStsDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.awsStsEndpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_external_id: {
      value: cdktf.stringToHclTerraform(struct!.awsStsExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_policy: {
      value: cdktf.stringToHclTerraform(struct!.awsStsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsStsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_session_name: {
      value: cdktf.stringToHclTerraform(struct!.awsStsSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_use_sts: {
      value: cdktf.booleanToHclTerraform(struct!.awsUseSts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration_seconds: {
      value: cdktf.stringToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.includeTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_handler: {
      value: cdktf.stringToHclTerraform(struct!.jsonHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_aws_tags: {
      value: cdktf.stringToHclTerraform(struct!.logGroupAwsTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_aws_tags_key: {
      value: cdktf.stringToHclTerraform(struct!.logGroupAwsTagsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name_key: {
      value: cdktf.stringToHclTerraform(struct!.logGroupNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_rejected_request: {
      value: cdktf.stringToHclTerraform(struct!.logRejectedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name_key: {
      value: cdktf.stringToHclTerraform(struct!.logStreamNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_events_per_batch: {
      value: cdktf.stringToHclTerraform(struct!.maxEventsPerBatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_message_length: {
      value: cdktf.stringToHclTerraform(struct!.maxMessageLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_keys: {
      value: cdktf.stringToHclTerraform(struct!.messageKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    put_log_events_disable_retry_limit: {
      value: cdktf.booleanToHclTerraform(struct!.putLogEventsDisableRetryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    put_log_events_retry_limit: {
      value: cdktf.stringToHclTerraform(struct!.putLogEventsRetryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    put_log_events_retry_wait: {
      value: cdktf.stringToHclTerraform(struct!.putLogEventsRetryWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_log_group_aws_tags_key: {
      value: cdktf.booleanToHclTerraform(struct!.removeLogGroupAwsTagsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_log_group_name_key: {
      value: cdktf.booleanToHclTerraform(struct!.removeLogGroupNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_log_stream_name_key: {
      value: cdktf.booleanToHclTerraform(struct!.removeLogStreamNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_retention_in_days_key: {
      value: cdktf.booleanToHclTerraform(struct!.removeRetentionInDaysKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_in_days: {
      value: cdktf.stringToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_in_days_key: {
      value: cdktf.stringToHclTerraform(struct!.retentionInDaysKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_session_name: {
      value: cdktf.stringToHclTerraform(struct!.roleSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_verify_peer: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerifyPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_tag_as_group: {
      value: cdktf.stringToHclTerraform(struct!.useTagAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tag_as_stream: {
      value: cdktf.stringToHclTerraform(struct!.useTagAsStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token_file: {
      value: cdktf.stringToHclTerraform(struct!.webIdentityTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateStream = this._autoCreateStream;
    }
    if (this._awsEcsAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEcsAuthentication = this._awsEcsAuthentication;
    }
    if (this._awsKeyId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKeyId = this._awsKeyId?.internalValue;
    }
    if (this._awsSecKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecKey = this._awsSecKey?.internalValue;
    }
    if (this._awsStsDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsDurationSeconds = this._awsStsDurationSeconds;
    }
    if (this._awsStsEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsEndpointUrl = this._awsStsEndpointUrl;
    }
    if (this._awsStsExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsExternalId = this._awsStsExternalId;
    }
    if (this._awsStsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsPolicy = this._awsStsPolicy;
    }
    if (this._awsStsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsRoleArn = this._awsStsRoleArn;
    }
    if (this._awsStsSessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsSessionName = this._awsStsSessionName;
    }
    if (this._awsUseSts !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsUseSts = this._awsUseSts;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._includeTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTimeKey = this._includeTimeKey;
    }
    if (this._jsonHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonHandler = this._jsonHandler;
    }
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._logGroupAwsTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupAwsTags = this._logGroupAwsTags;
    }
    if (this._logGroupAwsTagsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupAwsTagsKey = this._logGroupAwsTagsKey;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logGroupNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupNameKey = this._logGroupNameKey;
    }
    if (this._logRejectedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRejectedRequest = this._logRejectedRequest;
    }
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    if (this._logStreamNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamNameKey = this._logStreamNameKey;
    }
    if (this._maxEventsPerBatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventsPerBatch = this._maxEventsPerBatch;
    }
    if (this._maxMessageLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageLength = this._maxMessageLength;
    }
    if (this._messageKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageKeys = this._messageKeys;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._putLogEventsDisableRetryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.putLogEventsDisableRetryLimit = this._putLogEventsDisableRetryLimit;
    }
    if (this._putLogEventsRetryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.putLogEventsRetryLimit = this._putLogEventsRetryLimit;
    }
    if (this._putLogEventsRetryWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.putLogEventsRetryWait = this._putLogEventsRetryWait;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._removeLogGroupAwsTagsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeLogGroupAwsTagsKey = this._removeLogGroupAwsTagsKey;
    }
    if (this._removeLogGroupNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeLogGroupNameKey = this._removeLogGroupNameKey;
    }
    if (this._removeLogStreamNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeLogStreamNameKey = this._removeLogStreamNameKey;
    }
    if (this._removeRetentionInDaysKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeRetentionInDaysKey = this._removeRetentionInDaysKey;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._retentionInDaysKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDaysKey = this._retentionInDaysKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleSessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSessionName = this._roleSessionName;
    }
    if (this._sslVerifyPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerifyPeer = this._sslVerifyPeer;
    }
    if (this._useTagAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTagAsGroup = this._useTagAsGroup;
    }
    if (this._useTagAsStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTagAsStream = this._useTagAsStream;
    }
    if (this._webIdentityTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.webIdentityTokenFile = this._webIdentityTokenFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCreateStream = undefined;
      this._awsEcsAuthentication = undefined;
      this._awsKeyId.internalValue = undefined;
      this._awsSecKey.internalValue = undefined;
      this._awsStsDurationSeconds = undefined;
      this._awsStsEndpointUrl = undefined;
      this._awsStsExternalId = undefined;
      this._awsStsPolicy = undefined;
      this._awsStsRoleArn = undefined;
      this._awsStsSessionName = undefined;
      this._awsUseSts = undefined;
      this._concurrency = undefined;
      this._durationSeconds = undefined;
      this._endpoint = undefined;
      this._httpProxy = undefined;
      this._includeTimeKey = undefined;
      this._jsonHandler = undefined;
      this._localtime = undefined;
      this._logGroupAwsTags = undefined;
      this._logGroupAwsTagsKey = undefined;
      this._logGroupName = undefined;
      this._logGroupNameKey = undefined;
      this._logRejectedRequest = undefined;
      this._logStreamName = undefined;
      this._logStreamNameKey = undefined;
      this._maxEventsPerBatch = undefined;
      this._maxMessageLength = undefined;
      this._messageKeys = undefined;
      this._policy = undefined;
      this._putLogEventsDisableRetryLimit = undefined;
      this._putLogEventsRetryLimit = undefined;
      this._putLogEventsRetryWait = undefined;
      this._region = undefined;
      this._removeLogGroupAwsTagsKey = undefined;
      this._removeLogGroupNameKey = undefined;
      this._removeLogStreamNameKey = undefined;
      this._removeRetentionInDaysKey = undefined;
      this._retentionInDays = undefined;
      this._retentionInDaysKey = undefined;
      this._roleArn = undefined;
      this._roleSessionName = undefined;
      this._sslVerifyPeer = undefined;
      this._useTagAsGroup = undefined;
      this._useTagAsStream = undefined;
      this._webIdentityTokenFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCreateStream = value.autoCreateStream;
      this._awsEcsAuthentication = value.awsEcsAuthentication;
      this._awsKeyId.internalValue = value.awsKeyId;
      this._awsSecKey.internalValue = value.awsSecKey;
      this._awsStsDurationSeconds = value.awsStsDurationSeconds;
      this._awsStsEndpointUrl = value.awsStsEndpointUrl;
      this._awsStsExternalId = value.awsStsExternalId;
      this._awsStsPolicy = value.awsStsPolicy;
      this._awsStsRoleArn = value.awsStsRoleArn;
      this._awsStsSessionName = value.awsStsSessionName;
      this._awsUseSts = value.awsUseSts;
      this._concurrency = value.concurrency;
      this._durationSeconds = value.durationSeconds;
      this._endpoint = value.endpoint;
      this._httpProxy = value.httpProxy;
      this._includeTimeKey = value.includeTimeKey;
      this._jsonHandler = value.jsonHandler;
      this._localtime = value.localtime;
      this._logGroupAwsTags = value.logGroupAwsTags;
      this._logGroupAwsTagsKey = value.logGroupAwsTagsKey;
      this._logGroupName = value.logGroupName;
      this._logGroupNameKey = value.logGroupNameKey;
      this._logRejectedRequest = value.logRejectedRequest;
      this._logStreamName = value.logStreamName;
      this._logStreamNameKey = value.logStreamNameKey;
      this._maxEventsPerBatch = value.maxEventsPerBatch;
      this._maxMessageLength = value.maxMessageLength;
      this._messageKeys = value.messageKeys;
      this._policy = value.policy;
      this._putLogEventsDisableRetryLimit = value.putLogEventsDisableRetryLimit;
      this._putLogEventsRetryLimit = value.putLogEventsRetryLimit;
      this._putLogEventsRetryWait = value.putLogEventsRetryWait;
      this._region = value.region;
      this._removeLogGroupAwsTagsKey = value.removeLogGroupAwsTagsKey;
      this._removeLogGroupNameKey = value.removeLogGroupNameKey;
      this._removeLogStreamNameKey = value.removeLogStreamNameKey;
      this._removeRetentionInDaysKey = value.removeRetentionInDaysKey;
      this._retentionInDays = value.retentionInDays;
      this._retentionInDaysKey = value.retentionInDaysKey;
      this._roleArn = value.roleArn;
      this._roleSessionName = value.roleSessionName;
      this._sslVerifyPeer = value.sslVerifyPeer;
      this._useTagAsGroup = value.useTagAsGroup;
      this._useTagAsStream = value.useTagAsStream;
      this._webIdentityTokenFile = value.webIdentityTokenFile;
    }
  }

  // auto_create_stream - computed: false, optional: true, required: false
  private _autoCreateStream?: boolean | cdktf.IResolvable; 
  public get autoCreateStream() {
    return this.getBooleanAttribute('auto_create_stream');
  }
  public set autoCreateStream(value: boolean | cdktf.IResolvable) {
    this._autoCreateStream = value;
  }
  public resetAutoCreateStream() {
    this._autoCreateStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateStreamInput() {
    return this._autoCreateStream;
  }

  // aws_ecs_authentication - computed: false, optional: true, required: false
  private _awsEcsAuthentication?: boolean | cdktf.IResolvable; 
  public get awsEcsAuthentication() {
    return this.getBooleanAttribute('aws_ecs_authentication');
  }
  public set awsEcsAuthentication(value: boolean | cdktf.IResolvable) {
    this._awsEcsAuthentication = value;
  }
  public resetAwsEcsAuthentication() {
    this._awsEcsAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEcsAuthenticationInput() {
    return this._awsEcsAuthentication;
  }

  // aws_key_id - computed: false, optional: true, required: false
  private _awsKeyId = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyIdOutputReference(this, "aws_key_id");
  public get awsKeyId() {
    return this._awsKeyId;
  }
  public putAwsKeyId(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsKeyId) {
    this._awsKeyId.internalValue = value;
  }
  public resetAwsKeyId() {
    this._awsKeyId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKeyIdInput() {
    return this._awsKeyId.internalValue;
  }

  // aws_sec_key - computed: false, optional: true, required: false
  private _awsSecKey = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKeyOutputReference(this, "aws_sec_key");
  public get awsSecKey() {
    return this._awsSecKey;
  }
  public putAwsSecKey(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchAwsSecKey) {
    this._awsSecKey.internalValue = value;
  }
  public resetAwsSecKey() {
    this._awsSecKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecKeyInput() {
    return this._awsSecKey.internalValue;
  }

  // aws_sts_duration_seconds - computed: false, optional: true, required: false
  private _awsStsDurationSeconds?: string; 
  public get awsStsDurationSeconds() {
    return this.getStringAttribute('aws_sts_duration_seconds');
  }
  public set awsStsDurationSeconds(value: string) {
    this._awsStsDurationSeconds = value;
  }
  public resetAwsStsDurationSeconds() {
    this._awsStsDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsDurationSecondsInput() {
    return this._awsStsDurationSeconds;
  }

  // aws_sts_endpoint_url - computed: false, optional: true, required: false
  private _awsStsEndpointUrl?: string; 
  public get awsStsEndpointUrl() {
    return this.getStringAttribute('aws_sts_endpoint_url');
  }
  public set awsStsEndpointUrl(value: string) {
    this._awsStsEndpointUrl = value;
  }
  public resetAwsStsEndpointUrl() {
    this._awsStsEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsEndpointUrlInput() {
    return this._awsStsEndpointUrl;
  }

  // aws_sts_external_id - computed: false, optional: true, required: false
  private _awsStsExternalId?: string; 
  public get awsStsExternalId() {
    return this.getStringAttribute('aws_sts_external_id');
  }
  public set awsStsExternalId(value: string) {
    this._awsStsExternalId = value;
  }
  public resetAwsStsExternalId() {
    this._awsStsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsExternalIdInput() {
    return this._awsStsExternalId;
  }

  // aws_sts_policy - computed: false, optional: true, required: false
  private _awsStsPolicy?: string; 
  public get awsStsPolicy() {
    return this.getStringAttribute('aws_sts_policy');
  }
  public set awsStsPolicy(value: string) {
    this._awsStsPolicy = value;
  }
  public resetAwsStsPolicy() {
    this._awsStsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsPolicyInput() {
    return this._awsStsPolicy;
  }

  // aws_sts_role_arn - computed: false, optional: true, required: false
  private _awsStsRoleArn?: string; 
  public get awsStsRoleArn() {
    return this.getStringAttribute('aws_sts_role_arn');
  }
  public set awsStsRoleArn(value: string) {
    this._awsStsRoleArn = value;
  }
  public resetAwsStsRoleArn() {
    this._awsStsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsRoleArnInput() {
    return this._awsStsRoleArn;
  }

  // aws_sts_session_name - computed: false, optional: true, required: false
  private _awsStsSessionName?: string; 
  public get awsStsSessionName() {
    return this.getStringAttribute('aws_sts_session_name');
  }
  public set awsStsSessionName(value: string) {
    this._awsStsSessionName = value;
  }
  public resetAwsStsSessionName() {
    this._awsStsSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsSessionNameInput() {
    return this._awsStsSessionName;
  }

  // aws_use_sts - computed: false, optional: true, required: false
  private _awsUseSts?: boolean | cdktf.IResolvable; 
  public get awsUseSts() {
    return this.getBooleanAttribute('aws_use_sts');
  }
  public set awsUseSts(value: boolean | cdktf.IResolvable) {
    this._awsUseSts = value;
  }
  public resetAwsUseSts() {
    this._awsUseSts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsUseStsInput() {
    return this._awsUseSts;
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: string; 
  public get durationSeconds() {
    return this.getStringAttribute('duration_seconds');
  }
  public set durationSeconds(value: string) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // include_time_key - computed: false, optional: true, required: false
  private _includeTimeKey?: boolean | cdktf.IResolvable; 
  public get includeTimeKey() {
    return this.getBooleanAttribute('include_time_key');
  }
  public set includeTimeKey(value: boolean | cdktf.IResolvable) {
    this._includeTimeKey = value;
  }
  public resetIncludeTimeKey() {
    this._includeTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTimeKeyInput() {
    return this._includeTimeKey;
  }

  // json_handler - computed: false, optional: true, required: false
  private _jsonHandler?: string; 
  public get jsonHandler() {
    return this.getStringAttribute('json_handler');
  }
  public set jsonHandler(value: string) {
    this._jsonHandler = value;
  }
  public resetJsonHandler() {
    this._jsonHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonHandlerInput() {
    return this._jsonHandler;
  }

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
  }

  // log_group_aws_tags - computed: false, optional: true, required: false
  private _logGroupAwsTags?: string; 
  public get logGroupAwsTags() {
    return this.getStringAttribute('log_group_aws_tags');
  }
  public set logGroupAwsTags(value: string) {
    this._logGroupAwsTags = value;
  }
  public resetLogGroupAwsTags() {
    this._logGroupAwsTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupAwsTagsInput() {
    return this._logGroupAwsTags;
  }

  // log_group_aws_tags_key - computed: false, optional: true, required: false
  private _logGroupAwsTagsKey?: string; 
  public get logGroupAwsTagsKey() {
    return this.getStringAttribute('log_group_aws_tags_key');
  }
  public set logGroupAwsTagsKey(value: string) {
    this._logGroupAwsTagsKey = value;
  }
  public resetLogGroupAwsTagsKey() {
    this._logGroupAwsTagsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupAwsTagsKeyInput() {
    return this._logGroupAwsTagsKey;
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_group_name_key - computed: false, optional: true, required: false
  private _logGroupNameKey?: string; 
  public get logGroupNameKey() {
    return this.getStringAttribute('log_group_name_key');
  }
  public set logGroupNameKey(value: string) {
    this._logGroupNameKey = value;
  }
  public resetLogGroupNameKey() {
    this._logGroupNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameKeyInput() {
    return this._logGroupNameKey;
  }

  // log_rejected_request - computed: false, optional: true, required: false
  private _logRejectedRequest?: string; 
  public get logRejectedRequest() {
    return this.getStringAttribute('log_rejected_request');
  }
  public set logRejectedRequest(value: string) {
    this._logRejectedRequest = value;
  }
  public resetLogRejectedRequest() {
    this._logRejectedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRejectedRequestInput() {
    return this._logRejectedRequest;
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }

  // log_stream_name_key - computed: false, optional: true, required: false
  private _logStreamNameKey?: string; 
  public get logStreamNameKey() {
    return this.getStringAttribute('log_stream_name_key');
  }
  public set logStreamNameKey(value: string) {
    this._logStreamNameKey = value;
  }
  public resetLogStreamNameKey() {
    this._logStreamNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameKeyInput() {
    return this._logStreamNameKey;
  }

  // max_events_per_batch - computed: false, optional: true, required: false
  private _maxEventsPerBatch?: string; 
  public get maxEventsPerBatch() {
    return this.getStringAttribute('max_events_per_batch');
  }
  public set maxEventsPerBatch(value: string) {
    this._maxEventsPerBatch = value;
  }
  public resetMaxEventsPerBatch() {
    this._maxEventsPerBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsPerBatchInput() {
    return this._maxEventsPerBatch;
  }

  // max_message_length - computed: false, optional: true, required: false
  private _maxMessageLength?: string; 
  public get maxMessageLength() {
    return this.getStringAttribute('max_message_length');
  }
  public set maxMessageLength(value: string) {
    this._maxMessageLength = value;
  }
  public resetMaxMessageLength() {
    this._maxMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageLengthInput() {
    return this._maxMessageLength;
  }

  // message_keys - computed: false, optional: true, required: false
  private _messageKeys?: string; 
  public get messageKeys() {
    return this.getStringAttribute('message_keys');
  }
  public set messageKeys(value: string) {
    this._messageKeys = value;
  }
  public resetMessageKeys() {
    this._messageKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageKeysInput() {
    return this._messageKeys;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // put_log_events_disable_retry_limit - computed: false, optional: true, required: false
  private _putLogEventsDisableRetryLimit?: boolean | cdktf.IResolvable; 
  public get putLogEventsDisableRetryLimit() {
    return this.getBooleanAttribute('put_log_events_disable_retry_limit');
  }
  public set putLogEventsDisableRetryLimit(value: boolean | cdktf.IResolvable) {
    this._putLogEventsDisableRetryLimit = value;
  }
  public resetPutLogEventsDisableRetryLimit() {
    this._putLogEventsDisableRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putLogEventsDisableRetryLimitInput() {
    return this._putLogEventsDisableRetryLimit;
  }

  // put_log_events_retry_limit - computed: false, optional: true, required: false
  private _putLogEventsRetryLimit?: string; 
  public get putLogEventsRetryLimit() {
    return this.getStringAttribute('put_log_events_retry_limit');
  }
  public set putLogEventsRetryLimit(value: string) {
    this._putLogEventsRetryLimit = value;
  }
  public resetPutLogEventsRetryLimit() {
    this._putLogEventsRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putLogEventsRetryLimitInput() {
    return this._putLogEventsRetryLimit;
  }

  // put_log_events_retry_wait - computed: false, optional: true, required: false
  private _putLogEventsRetryWait?: string; 
  public get putLogEventsRetryWait() {
    return this.getStringAttribute('put_log_events_retry_wait');
  }
  public set putLogEventsRetryWait(value: string) {
    this._putLogEventsRetryWait = value;
  }
  public resetPutLogEventsRetryWait() {
    this._putLogEventsRetryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putLogEventsRetryWaitInput() {
    return this._putLogEventsRetryWait;
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

  // remove_log_group_aws_tags_key - computed: false, optional: true, required: false
  private _removeLogGroupAwsTagsKey?: boolean | cdktf.IResolvable; 
  public get removeLogGroupAwsTagsKey() {
    return this.getBooleanAttribute('remove_log_group_aws_tags_key');
  }
  public set removeLogGroupAwsTagsKey(value: boolean | cdktf.IResolvable) {
    this._removeLogGroupAwsTagsKey = value;
  }
  public resetRemoveLogGroupAwsTagsKey() {
    this._removeLogGroupAwsTagsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLogGroupAwsTagsKeyInput() {
    return this._removeLogGroupAwsTagsKey;
  }

  // remove_log_group_name_key - computed: false, optional: true, required: false
  private _removeLogGroupNameKey?: boolean | cdktf.IResolvable; 
  public get removeLogGroupNameKey() {
    return this.getBooleanAttribute('remove_log_group_name_key');
  }
  public set removeLogGroupNameKey(value: boolean | cdktf.IResolvable) {
    this._removeLogGroupNameKey = value;
  }
  public resetRemoveLogGroupNameKey() {
    this._removeLogGroupNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLogGroupNameKeyInput() {
    return this._removeLogGroupNameKey;
  }

  // remove_log_stream_name_key - computed: false, optional: true, required: false
  private _removeLogStreamNameKey?: boolean | cdktf.IResolvable; 
  public get removeLogStreamNameKey() {
    return this.getBooleanAttribute('remove_log_stream_name_key');
  }
  public set removeLogStreamNameKey(value: boolean | cdktf.IResolvable) {
    this._removeLogStreamNameKey = value;
  }
  public resetRemoveLogStreamNameKey() {
    this._removeLogStreamNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLogStreamNameKeyInput() {
    return this._removeLogStreamNameKey;
  }

  // remove_retention_in_days_key - computed: false, optional: true, required: false
  private _removeRetentionInDaysKey?: boolean | cdktf.IResolvable; 
  public get removeRetentionInDaysKey() {
    return this.getBooleanAttribute('remove_retention_in_days_key');
  }
  public set removeRetentionInDaysKey(value: boolean | cdktf.IResolvable) {
    this._removeRetentionInDaysKey = value;
  }
  public resetRemoveRetentionInDaysKey() {
    this._removeRetentionInDaysKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeRetentionInDaysKeyInput() {
    return this._removeRetentionInDaysKey;
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: string; 
  public get retentionInDays() {
    return this.getStringAttribute('retention_in_days');
  }
  public set retentionInDays(value: string) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // retention_in_days_key - computed: false, optional: true, required: false
  private _retentionInDaysKey?: string; 
  public get retentionInDaysKey() {
    return this.getStringAttribute('retention_in_days_key');
  }
  public set retentionInDaysKey(value: string) {
    this._retentionInDaysKey = value;
  }
  public resetRetentionInDaysKey() {
    this._retentionInDaysKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysKeyInput() {
    return this._retentionInDaysKey;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_session_name - computed: false, optional: true, required: false
  private _roleSessionName?: string; 
  public get roleSessionName() {
    return this.getStringAttribute('role_session_name');
  }
  public set roleSessionName(value: string) {
    this._roleSessionName = value;
  }
  public resetRoleSessionName() {
    this._roleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSessionNameInput() {
    return this._roleSessionName;
  }

  // ssl_verify_peer - computed: false, optional: true, required: false
  private _sslVerifyPeer?: boolean | cdktf.IResolvable; 
  public get sslVerifyPeer() {
    return this.getBooleanAttribute('ssl_verify_peer');
  }
  public set sslVerifyPeer(value: boolean | cdktf.IResolvable) {
    this._sslVerifyPeer = value;
  }
  public resetSslVerifyPeer() {
    this._sslVerifyPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyPeerInput() {
    return this._sslVerifyPeer;
  }

  // use_tag_as_group - computed: false, optional: true, required: false
  private _useTagAsGroup?: string; 
  public get useTagAsGroup() {
    return this.getStringAttribute('use_tag_as_group');
  }
  public set useTagAsGroup(value: string) {
    this._useTagAsGroup = value;
  }
  public resetUseTagAsGroup() {
    this._useTagAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTagAsGroupInput() {
    return this._useTagAsGroup;
  }

  // use_tag_as_stream - computed: false, optional: true, required: false
  private _useTagAsStream?: string; 
  public get useTagAsStream() {
    return this.getStringAttribute('use_tag_as_stream');
  }
  public set useTagAsStream(value: string) {
    this._useTagAsStream = value;
  }
  public resetUseTagAsStream() {
    this._useTagAsStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTagAsStreamInput() {
    return this._useTagAsStream;
  }

  // web_identity_token_file - computed: false, optional: true, required: false
  private _webIdentityTokenFile?: string; 
  public get webIdentityTokenFile() {
    return this.getStringAttribute('web_identity_token_file');
  }
  public set webIdentityTokenFile(value: string) {
    this._webIdentityTokenFile = value;
  }
  public resetWebIdentityTokenFile() {
    this._webIdentityTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webIdentityTokenFileInput() {
    return this._webIdentityTokenFile;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopy {
  /**
  * CopyMode defines how to pass the events to <store> plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#copy_mode DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#copy_mode}
  */
  readonly copyMode: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopyToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_mode: cdktf.stringToTerraform(struct!.copyMode),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopyToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_mode: {
      value: cdktf.stringToHclTerraform(struct!.copyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyMode = this._copyMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyMode = value.copyMode;
    }
  }

  // copy_mode - computed: false, optional: false, required: true
  private _copyMode?: string; 
  public get copyMode() {
    return this.getStringAttribute('copy_mode');
  }
  public set copyMode(value: string) {
    this._copyMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyModeInput() {
    return this._copyMode;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#config DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#config}
  */
  readonly config: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPluginToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPluginToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKey {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadog {
  /**
  * This parameter is required in order to authenticate your fluent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#api_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#api_key}
  */
  readonly apiKey?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKey;
  /**
  * Set the log compression level for HTTP (1 to 9, 9 being the best ratio)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#compression_level DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#compression_level}
  */
  readonly compressionLevel?: number;
  /**
  * Used by Datadog to identify the host submitting the logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#dd_hostname DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#dd_hostname}
  */
  readonly ddHostname?: string;
  /**
  * This tells Datadog what integration it is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#dd_source DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#dd_source}
  */
  readonly ddSource?: string;
  /**
  * Multiple value attribute. Can be used to refine the source attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#dd_sourcecategory DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#dd_sourcecategory}
  */
  readonly ddSourcecategory?: string;
  /**
  * Custom tags with the following format 'key1:value1, key2:value2'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#dd_tags DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#dd_tags}
  */
  readonly ddTags?: string;
  /**
  * Proxy endpoint when logs are not directly forwarded to Datadog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#host DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * HTTP proxy, only takes effect if HTTP forwarding is enabled (use_http). Defaults to HTTP_PROXY/http_proxy env vars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#http_proxy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Automatically include the Fluentd tag in the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#include_tag_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#include_tag_key}
  */
  readonly includeTagKey?: boolean | cdktf.IResolvable;
  /**
  * The maximum time waited between each retry in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#max_backoff DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#max_backoff}
  */
  readonly maxBackoff?: number;
  /**
  * The number of retries before the output plugin stops. Set to -1 for unlimited retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#max_retries DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Disable SSL validation (useful for proxy forwarding)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#no_ssl_validation DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#no_ssl_validation}
  */
  readonly noSslValidation?: boolean | cdktf.IResolvable;
  /**
  * Proxy port when logs are not directly forwarded to Datadog and ssl is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Used by Datadog to correlate between logs, traces and metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#service DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#service}
  */
  readonly service?: string;
  /**
  * Port used to send logs over a SSL encrypted connection to Datadog. If use_http is disabled, use 10516 for the US region and 443 for the EU region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ssl_port DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ssl_port}
  */
  readonly sslPort?: number;
  /**
  * Where to store the Fluentd tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tag_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Name of the attribute which will contain timestamp of the log event. If nil, timestamp attribute is not added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#timestamp_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#timestamp_key}
  */
  readonly timestampKey?: string;
  /**
  * Enable log compression for HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#use_compression DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#use_compression}
  */
  readonly useCompression?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTP forwarding. If you disable it, make sure to change the port to 10514 or ssl_port to 10516
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#use_http DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#use_http}
  */
  readonly useHttp?: boolean | cdktf.IResolvable;
  /**
  * Event format, if true, the event is sent in json format. Othwerwise, in plain text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#use_json DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#use_json}
  */
  readonly useJson?: boolean | cdktf.IResolvable;
  /**
  * If true, the agent initializes a secure connection to Datadog. In clear TCP otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#use_ssl DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyToTerraform(struct!.apiKey),
    compression_level: cdktf.numberToTerraform(struct!.compressionLevel),
    dd_hostname: cdktf.stringToTerraform(struct!.ddHostname),
    dd_source: cdktf.stringToTerraform(struct!.ddSource),
    dd_sourcecategory: cdktf.stringToTerraform(struct!.ddSourcecategory),
    dd_tags: cdktf.stringToTerraform(struct!.ddTags),
    host: cdktf.stringToTerraform(struct!.host),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    include_tag_key: cdktf.booleanToTerraform(struct!.includeTagKey),
    max_backoff: cdktf.numberToTerraform(struct!.maxBackoff),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    no_ssl_validation: cdktf.booleanToTerraform(struct!.noSslValidation),
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
    ssl_port: cdktf.numberToTerraform(struct!.sslPort),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    timestamp_key: cdktf.stringToTerraform(struct!.timestampKey),
    use_compression: cdktf.booleanToTerraform(struct!.useCompression),
    use_http: cdktf.booleanToTerraform(struct!.useHttp),
    use_json: cdktf.booleanToTerraform(struct!.useJson),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKey",
    },
    compression_level: {
      value: cdktf.numberToHclTerraform(struct!.compressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dd_hostname: {
      value: cdktf.stringToHclTerraform(struct!.ddHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dd_source: {
      value: cdktf.stringToHclTerraform(struct!.ddSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dd_sourcecategory: {
      value: cdktf.stringToHclTerraform(struct!.ddSourcecategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dd_tags: {
      value: cdktf.stringToHclTerraform(struct!.ddTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_tag_key: {
      value: cdktf.booleanToHclTerraform(struct!.includeTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_backoff: {
      value: cdktf.numberToHclTerraform(struct!.maxBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ssl_validation: {
      value: cdktf.booleanToHclTerraform(struct!.noSslValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_port: {
      value: cdktf.numberToHclTerraform(struct!.sslPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_key: {
      value: cdktf.stringToHclTerraform(struct!.timestampKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_compression: {
      value: cdktf.booleanToHclTerraform(struct!.useCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http: {
      value: cdktf.booleanToHclTerraform(struct!.useHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_json: {
      value: cdktf.booleanToHclTerraform(struct!.useJson),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._compressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionLevel = this._compressionLevel;
    }
    if (this._ddHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddHostname = this._ddHostname;
    }
    if (this._ddSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddSource = this._ddSource;
    }
    if (this._ddSourcecategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddSourcecategory = this._ddSourcecategory;
    }
    if (this._ddTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddTags = this._ddTags;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._includeTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTagKey = this._includeTagKey;
    }
    if (this._maxBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoff = this._maxBackoff;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._noSslValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSslValidation = this._noSslValidation;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._sslPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPort = this._sslPort;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._timestampKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampKey = this._timestampKey;
    }
    if (this._useCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCompression = this._useCompression;
    }
    if (this._useHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttp = this._useHttp;
    }
    if (this._useJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.useJson = this._useJson;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._compressionLevel = undefined;
      this._ddHostname = undefined;
      this._ddSource = undefined;
      this._ddSourcecategory = undefined;
      this._ddTags = undefined;
      this._host = undefined;
      this._httpProxy = undefined;
      this._includeTagKey = undefined;
      this._maxBackoff = undefined;
      this._maxRetries = undefined;
      this._noSslValidation = undefined;
      this._port = undefined;
      this._service = undefined;
      this._sslPort = undefined;
      this._tagKey = undefined;
      this._timestampKey = undefined;
      this._useCompression = undefined;
      this._useHttp = undefined;
      this._useJson = undefined;
      this._useSsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._compressionLevel = value.compressionLevel;
      this._ddHostname = value.ddHostname;
      this._ddSource = value.ddSource;
      this._ddSourcecategory = value.ddSourcecategory;
      this._ddTags = value.ddTags;
      this._host = value.host;
      this._httpProxy = value.httpProxy;
      this._includeTagKey = value.includeTagKey;
      this._maxBackoff = value.maxBackoff;
      this._maxRetries = value.maxRetries;
      this._noSslValidation = value.noSslValidation;
      this._port = value.port;
      this._service = value.service;
      this._sslPort = value.sslPort;
      this._tagKey = value.tagKey;
      this._timestampKey = value.timestampKey;
      this._useCompression = value.useCompression;
      this._useHttp = value.useHttp;
      this._useJson = value.useJson;
      this._useSsl = value.useSsl;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // compression_level - computed: false, optional: true, required: false
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }

  // dd_hostname - computed: false, optional: true, required: false
  private _ddHostname?: string; 
  public get ddHostname() {
    return this.getStringAttribute('dd_hostname');
  }
  public set ddHostname(value: string) {
    this._ddHostname = value;
  }
  public resetDdHostname() {
    this._ddHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddHostnameInput() {
    return this._ddHostname;
  }

  // dd_source - computed: false, optional: true, required: false
  private _ddSource?: string; 
  public get ddSource() {
    return this.getStringAttribute('dd_source');
  }
  public set ddSource(value: string) {
    this._ddSource = value;
  }
  public resetDdSource() {
    this._ddSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddSourceInput() {
    return this._ddSource;
  }

  // dd_sourcecategory - computed: false, optional: true, required: false
  private _ddSourcecategory?: string; 
  public get ddSourcecategory() {
    return this.getStringAttribute('dd_sourcecategory');
  }
  public set ddSourcecategory(value: string) {
    this._ddSourcecategory = value;
  }
  public resetDdSourcecategory() {
    this._ddSourcecategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddSourcecategoryInput() {
    return this._ddSourcecategory;
  }

  // dd_tags - computed: false, optional: true, required: false
  private _ddTags?: string; 
  public get ddTags() {
    return this.getStringAttribute('dd_tags');
  }
  public set ddTags(value: string) {
    this._ddTags = value;
  }
  public resetDdTags() {
    this._ddTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddTagsInput() {
    return this._ddTags;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // include_tag_key - computed: false, optional: true, required: false
  private _includeTagKey?: boolean | cdktf.IResolvable; 
  public get includeTagKey() {
    return this.getBooleanAttribute('include_tag_key');
  }
  public set includeTagKey(value: boolean | cdktf.IResolvable) {
    this._includeTagKey = value;
  }
  public resetIncludeTagKey() {
    this._includeTagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagKeyInput() {
    return this._includeTagKey;
  }

  // max_backoff - computed: false, optional: true, required: false
  private _maxBackoff?: number; 
  public get maxBackoff() {
    return this.getNumberAttribute('max_backoff');
  }
  public set maxBackoff(value: number) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // no_ssl_validation - computed: false, optional: true, required: false
  private _noSslValidation?: boolean | cdktf.IResolvable; 
  public get noSslValidation() {
    return this.getBooleanAttribute('no_ssl_validation');
  }
  public set noSslValidation(value: boolean | cdktf.IResolvable) {
    this._noSslValidation = value;
  }
  public resetNoSslValidation() {
    this._noSslValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSslValidationInput() {
    return this._noSslValidation;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // ssl_port - computed: false, optional: true, required: false
  private _sslPort?: number; 
  public get sslPort() {
    return this.getNumberAttribute('ssl_port');
  }
  public set sslPort(value: number) {
    this._sslPort = value;
  }
  public resetSslPort() {
    this._sslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPortInput() {
    return this._sslPort;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // timestamp_key - computed: false, optional: true, required: false
  private _timestampKey?: string; 
  public get timestampKey() {
    return this.getStringAttribute('timestamp_key');
  }
  public set timestampKey(value: string) {
    this._timestampKey = value;
  }
  public resetTimestampKey() {
    this._timestampKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampKeyInput() {
    return this._timestampKey;
  }

  // use_compression - computed: false, optional: true, required: false
  private _useCompression?: boolean | cdktf.IResolvable; 
  public get useCompression() {
    return this.getBooleanAttribute('use_compression');
  }
  public set useCompression(value: boolean | cdktf.IResolvable) {
    this._useCompression = value;
  }
  public resetUseCompression() {
    this._useCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCompressionInput() {
    return this._useCompression;
  }

  // use_http - computed: false, optional: true, required: false
  private _useHttp?: boolean | cdktf.IResolvable; 
  public get useHttp() {
    return this.getBooleanAttribute('use_http');
  }
  public set useHttp(value: boolean | cdktf.IResolvable) {
    this._useHttp = value;
  }
  public resetUseHttp() {
    this._useHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpInput() {
    return this._useHttp;
  }

  // use_json - computed: false, optional: true, required: false
  private _useJson?: boolean | cdktf.IResolvable; 
  public get useJson() {
    return this.getBooleanAttribute('use_json');
  }
  public set useJson(value: boolean | cdktf.IResolvable) {
    this._useJson = value;
  }
  public resetUseJson() {
    this._useJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useJsonInput() {
    return this._useJson;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuth {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudId {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUser {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearch {
  /**
  * Optional, Absolute path to CA certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ca_file DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Optional, Absolute path to client Certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#client_cert DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Optional, Absolute path to client private Key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#client_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#client_key}
  */
  readonly clientKey?: string;
  /**
  * Optional, password for ClientKey file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#client_key_password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#client_key_password}
  */
  readonly clientKeyPassword?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPassword;
  /**
  * Authenticate towards Elastic Cloud using cloudAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#cloud_auth DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#cloud_auth}
  */
  readonly cloudAuth?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuth;
  /**
  * Authenticate towards Elastic Cloud using CloudId. If set, cloudAuth must be set as well and host, port, user and password are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#cloud_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#cloud_id}
  */
  readonly cloudId?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudId;
  /**
  * Optional, Enable Index Lifecycle Management (ILM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#enable_ilm DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#enable_ilm}
  */
  readonly enableIlm?: boolean | cdktf.IResolvable;
  /**
  * Optional, Indicates whether to fail when max_retry_putting_template is exceeded. If you have multiple output plugin, you could use this property to do not fail on fluentd statup (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#fail_on_putting_template_retry_exceeded DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#fail_on_putting_template_retry_exceeded}
  */
  readonly failOnPuttingTemplateRetryExceeded?: boolean | cdktf.IResolvable;
  /**
  * The hostname of your Elasticsearch node (default: localhost).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#host DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Hosts defines a list of hosts if you want to connect to more than one Elasticsearch nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#hosts DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#hosts}
  */
  readonly hosts?: string;
  /**
  * Optional, Specify ILM policy contents as Hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ilm_policy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ilm_policy}
  */
  readonly ilmPolicy?: string;
  /**
  * Optional, Specify ILM policy id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ilm_policy_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ilm_policy_id}
  */
  readonly ilmPolicyId?: string;
  /**
  * Optional, Specify whether overwriting ilm policy or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ilm_policy_override DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ilm_policy_override}
  */
  readonly ilmPolicyOverride?: boolean | cdktf.IResolvable;
  /**
  * IndexName defines the placeholder syntax of Fluentd plugin API. See https://docs.fluentd.org/configuration/buffer-section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#index_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#index_name}
  */
  readonly indexName?: string;
  /**
  * Optional, Enable logging of 400 reason without enabling debug log level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_es400_reason DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_es400_reason}
  */
  readonly logEs400Reason?: boolean | cdktf.IResolvable;
  /**
  * If true, Fluentd uses the conventional index name format logstash-%Y.%m.%d (default: false). This option supersedes the index_name option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#logstash_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#logstash_format}
  */
  readonly logstashFormat?: boolean | cdktf.IResolvable;
  /**
  * LogstashPrefix defines the logstash prefix index name to write events when logstash_format is true (default: logstash).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#logstash_prefix DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#logstash_prefix}
  */
  readonly logstashPrefix?: string;
  /**
  * Optional, You can specify times of retry putting template (default: 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#max_retry_putting_template DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#max_retry_putting_template}
  */
  readonly maxRetryPuttingTemplate?: number;
  /**
  * Optional, The login credentials to connect to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPassword;
  /**
  * Path defines the REST API endpoint of Elasticsearch to post write requests (default: nil).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The port number of your Elasticsearch node (default: 9200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Optional, Indicates that the plugin should reset connection on any error (reconnect on next send) (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#reconnect_on_error DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#reconnect_on_error}
  */
  readonly reconnectOnError?: boolean | cdktf.IResolvable;
  /**
  * Optional, Automatically reload connection after 10000 documents (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#reload_connections DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#reload_connections}
  */
  readonly reloadConnections?: boolean | cdktf.IResolvable;
  /**
  * Optional, Indicates that the elasticsearch-transport will try to reload the nodes addresses if there is a failure while making the request, this can be useful to quickly remove a dead node from the list of addresses (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#reload_on_failure DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#reload_on_failure}
  */
  readonly reloadOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional, HTTP Timeout (default: 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#request_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Specify https if your Elasticsearch endpoint supports SSL (default: http).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#scheme DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Optional, Force certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ssl_verify DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Optional, Suppress '[types removal]' warnings on elasticsearch 7.x
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#suppress_type_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#suppress_type_name}
  */
  readonly suppressTypeName?: boolean | cdktf.IResolvable;
  /**
  * Optional, Always update the template, even if it already exists (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#template_overwrite DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#template_overwrite}
  */
  readonly templateOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Optional, The login credentials to connect to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#user DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#user}
  */
  readonly user?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUser;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    client_key_password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordToTerraform(struct!.clientKeyPassword),
    cloud_auth: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthToTerraform(struct!.cloudAuth),
    cloud_id: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdToTerraform(struct!.cloudId),
    enable_ilm: cdktf.booleanToTerraform(struct!.enableIlm),
    fail_on_putting_template_retry_exceeded: cdktf.booleanToTerraform(struct!.failOnPuttingTemplateRetryExceeded),
    host: cdktf.stringToTerraform(struct!.host),
    hosts: cdktf.stringToTerraform(struct!.hosts),
    ilm_policy: cdktf.stringToTerraform(struct!.ilmPolicy),
    ilm_policy_id: cdktf.stringToTerraform(struct!.ilmPolicyId),
    ilm_policy_override: cdktf.booleanToTerraform(struct!.ilmPolicyOverride),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    log_es400_reason: cdktf.booleanToTerraform(struct!.logEs400Reason),
    logstash_format: cdktf.booleanToTerraform(struct!.logstashFormat),
    logstash_prefix: cdktf.stringToTerraform(struct!.logstashPrefix),
    max_retry_putting_template: cdktf.numberToTerraform(struct!.maxRetryPuttingTemplate),
    password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordToTerraform(struct!.password),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    reconnect_on_error: cdktf.booleanToTerraform(struct!.reconnectOnError),
    reload_connections: cdktf.booleanToTerraform(struct!.reloadConnections),
    reload_on_failure: cdktf.booleanToTerraform(struct!.reloadOnFailure),
    request_timeout: cdktf.stringToTerraform(struct!.requestTimeout),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    suppress_type_name: cdktf.booleanToTerraform(struct!.suppressTypeName),
    template_overwrite: cdktf.booleanToTerraform(struct!.templateOverwrite),
    user: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserToTerraform(struct!.user),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordToHclTerraform(struct!.clientKeyPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPassword",
    },
    cloud_auth: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthToHclTerraform(struct!.cloudAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuth",
    },
    cloud_id: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdToHclTerraform(struct!.cloudId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudId",
    },
    enable_ilm: {
      value: cdktf.booleanToHclTerraform(struct!.enableIlm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_putting_template_retry_exceeded: {
      value: cdktf.booleanToHclTerraform(struct!.failOnPuttingTemplateRetryExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.stringToHclTerraform(struct!.hosts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ilm_policy: {
      value: cdktf.stringToHclTerraform(struct!.ilmPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ilm_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.ilmPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ilm_policy_override: {
      value: cdktf.booleanToHclTerraform(struct!.ilmPolicyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_es400_reason: {
      value: cdktf.booleanToHclTerraform(struct!.logEs400Reason),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logstash_format: {
      value: cdktf.booleanToHclTerraform(struct!.logstashFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logstash_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logstashPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retry_putting_template: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryPuttingTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPassword",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reconnect_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.reconnectOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reload_connections: {
      value: cdktf.booleanToHclTerraform(struct!.reloadConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reload_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.reloadOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suppress_type_name: {
      value: cdktf.booleanToHclTerraform(struct!.suppressTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.templateOverwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._clientKeyPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPassword = this._clientKeyPassword?.internalValue;
    }
    if (this._cloudAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAuth = this._cloudAuth?.internalValue;
    }
    if (this._cloudId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudId = this._cloudId?.internalValue;
    }
    if (this._enableIlm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIlm = this._enableIlm;
    }
    if (this._failOnPuttingTemplateRetryExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnPuttingTemplateRetryExceeded = this._failOnPuttingTemplateRetryExceeded;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._ilmPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilmPolicy = this._ilmPolicy;
    }
    if (this._ilmPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilmPolicyId = this._ilmPolicyId;
    }
    if (this._ilmPolicyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilmPolicyOverride = this._ilmPolicyOverride;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._logEs400Reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEs400Reason = this._logEs400Reason;
    }
    if (this._logstashFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstashFormat = this._logstashFormat;
    }
    if (this._logstashPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstashPrefix = this._logstashPrefix;
    }
    if (this._maxRetryPuttingTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryPuttingTemplate = this._maxRetryPuttingTemplate;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._reconnectOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconnectOnError = this._reconnectOnError;
    }
    if (this._reloadConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadConnections = this._reloadConnections;
    }
    if (this._reloadOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadOnFailure = this._reloadOnFailure;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._suppressTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressTypeName = this._suppressTypeName;
    }
    if (this._templateOverwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateOverwrite = this._templateOverwrite;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._clientKeyPassword.internalValue = undefined;
      this._cloudAuth.internalValue = undefined;
      this._cloudId.internalValue = undefined;
      this._enableIlm = undefined;
      this._failOnPuttingTemplateRetryExceeded = undefined;
      this._host = undefined;
      this._hosts = undefined;
      this._ilmPolicy = undefined;
      this._ilmPolicyId = undefined;
      this._ilmPolicyOverride = undefined;
      this._indexName = undefined;
      this._logEs400Reason = undefined;
      this._logstashFormat = undefined;
      this._logstashPrefix = undefined;
      this._maxRetryPuttingTemplate = undefined;
      this._password.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._reconnectOnError = undefined;
      this._reloadConnections = undefined;
      this._reloadOnFailure = undefined;
      this._requestTimeout = undefined;
      this._scheme = undefined;
      this._sslVerify = undefined;
      this._suppressTypeName = undefined;
      this._templateOverwrite = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._clientKeyPassword.internalValue = value.clientKeyPassword;
      this._cloudAuth.internalValue = value.cloudAuth;
      this._cloudId.internalValue = value.cloudId;
      this._enableIlm = value.enableIlm;
      this._failOnPuttingTemplateRetryExceeded = value.failOnPuttingTemplateRetryExceeded;
      this._host = value.host;
      this._hosts = value.hosts;
      this._ilmPolicy = value.ilmPolicy;
      this._ilmPolicyId = value.ilmPolicyId;
      this._ilmPolicyOverride = value.ilmPolicyOverride;
      this._indexName = value.indexName;
      this._logEs400Reason = value.logEs400Reason;
      this._logstashFormat = value.logstashFormat;
      this._logstashPrefix = value.logstashPrefix;
      this._maxRetryPuttingTemplate = value.maxRetryPuttingTemplate;
      this._password.internalValue = value.password;
      this._path = value.path;
      this._port = value.port;
      this._reconnectOnError = value.reconnectOnError;
      this._reloadConnections = value.reloadConnections;
      this._reloadOnFailure = value.reloadOnFailure;
      this._requestTimeout = value.requestTimeout;
      this._scheme = value.scheme;
      this._sslVerify = value.sslVerify;
      this._suppressTypeName = value.suppressTypeName;
      this._templateOverwrite = value.templateOverwrite;
      this._user.internalValue = value.user;
    }
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

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_password - computed: false, optional: true, required: false
  private _clientKeyPassword = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPasswordOutputReference(this, "client_key_password");
  public get clientKeyPassword() {
    return this._clientKeyPassword;
  }
  public putClientKeyPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchClientKeyPassword) {
    this._clientKeyPassword.internalValue = value;
  }
  public resetClientKeyPassword() {
    this._clientKeyPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPasswordInput() {
    return this._clientKeyPassword.internalValue;
  }

  // cloud_auth - computed: false, optional: true, required: false
  private _cloudAuth = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuthOutputReference(this, "cloud_auth");
  public get cloudAuth() {
    return this._cloudAuth;
  }
  public putCloudAuth(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudAuth) {
    this._cloudAuth.internalValue = value;
  }
  public resetCloudAuth() {
    this._cloudAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAuthInput() {
    return this._cloudAuth.internalValue;
  }

  // cloud_id - computed: false, optional: true, required: false
  private _cloudId = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudIdOutputReference(this, "cloud_id");
  public get cloudId() {
    return this._cloudId;
  }
  public putCloudId(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchCloudId) {
    this._cloudId.internalValue = value;
  }
  public resetCloudId() {
    this._cloudId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId.internalValue;
  }

  // enable_ilm - computed: false, optional: true, required: false
  private _enableIlm?: boolean | cdktf.IResolvable; 
  public get enableIlm() {
    return this.getBooleanAttribute('enable_ilm');
  }
  public set enableIlm(value: boolean | cdktf.IResolvable) {
    this._enableIlm = value;
  }
  public resetEnableIlm() {
    this._enableIlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIlmInput() {
    return this._enableIlm;
  }

  // fail_on_putting_template_retry_exceeded - computed: false, optional: true, required: false
  private _failOnPuttingTemplateRetryExceeded?: boolean | cdktf.IResolvable; 
  public get failOnPuttingTemplateRetryExceeded() {
    return this.getBooleanAttribute('fail_on_putting_template_retry_exceeded');
  }
  public set failOnPuttingTemplateRetryExceeded(value: boolean | cdktf.IResolvable) {
    this._failOnPuttingTemplateRetryExceeded = value;
  }
  public resetFailOnPuttingTemplateRetryExceeded() {
    this._failOnPuttingTemplateRetryExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnPuttingTemplateRetryExceededInput() {
    return this._failOnPuttingTemplateRetryExceeded;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string; 
  public get hosts() {
    return this.getStringAttribute('hosts');
  }
  public set hosts(value: string) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // ilm_policy - computed: false, optional: true, required: false
  private _ilmPolicy?: string; 
  public get ilmPolicy() {
    return this.getStringAttribute('ilm_policy');
  }
  public set ilmPolicy(value: string) {
    this._ilmPolicy = value;
  }
  public resetIlmPolicy() {
    this._ilmPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilmPolicyInput() {
    return this._ilmPolicy;
  }

  // ilm_policy_id - computed: false, optional: true, required: false
  private _ilmPolicyId?: string; 
  public get ilmPolicyId() {
    return this.getStringAttribute('ilm_policy_id');
  }
  public set ilmPolicyId(value: string) {
    this._ilmPolicyId = value;
  }
  public resetIlmPolicyId() {
    this._ilmPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilmPolicyIdInput() {
    return this._ilmPolicyId;
  }

  // ilm_policy_override - computed: false, optional: true, required: false
  private _ilmPolicyOverride?: boolean | cdktf.IResolvable; 
  public get ilmPolicyOverride() {
    return this.getBooleanAttribute('ilm_policy_override');
  }
  public set ilmPolicyOverride(value: boolean | cdktf.IResolvable) {
    this._ilmPolicyOverride = value;
  }
  public resetIlmPolicyOverride() {
    this._ilmPolicyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilmPolicyOverrideInput() {
    return this._ilmPolicyOverride;
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // log_es400_reason - computed: false, optional: true, required: false
  private _logEs400Reason?: boolean | cdktf.IResolvable; 
  public get logEs400Reason() {
    return this.getBooleanAttribute('log_es400_reason');
  }
  public set logEs400Reason(value: boolean | cdktf.IResolvable) {
    this._logEs400Reason = value;
  }
  public resetLogEs400Reason() {
    this._logEs400Reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEs400ReasonInput() {
    return this._logEs400Reason;
  }

  // logstash_format - computed: false, optional: true, required: false
  private _logstashFormat?: boolean | cdktf.IResolvable; 
  public get logstashFormat() {
    return this.getBooleanAttribute('logstash_format');
  }
  public set logstashFormat(value: boolean | cdktf.IResolvable) {
    this._logstashFormat = value;
  }
  public resetLogstashFormat() {
    this._logstashFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstashFormatInput() {
    return this._logstashFormat;
  }

  // logstash_prefix - computed: false, optional: true, required: false
  private _logstashPrefix?: string; 
  public get logstashPrefix() {
    return this.getStringAttribute('logstash_prefix');
  }
  public set logstashPrefix(value: string) {
    this._logstashPrefix = value;
  }
  public resetLogstashPrefix() {
    this._logstashPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstashPrefixInput() {
    return this._logstashPrefix;
  }

  // max_retry_putting_template - computed: false, optional: true, required: false
  private _maxRetryPuttingTemplate?: number; 
  public get maxRetryPuttingTemplate() {
    return this.getNumberAttribute('max_retry_putting_template');
  }
  public set maxRetryPuttingTemplate(value: number) {
    this._maxRetryPuttingTemplate = value;
  }
  public resetMaxRetryPuttingTemplate() {
    this._maxRetryPuttingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryPuttingTemplateInput() {
    return this._maxRetryPuttingTemplate;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // reconnect_on_error - computed: false, optional: true, required: false
  private _reconnectOnError?: boolean | cdktf.IResolvable; 
  public get reconnectOnError() {
    return this.getBooleanAttribute('reconnect_on_error');
  }
  public set reconnectOnError(value: boolean | cdktf.IResolvable) {
    this._reconnectOnError = value;
  }
  public resetReconnectOnError() {
    this._reconnectOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconnectOnErrorInput() {
    return this._reconnectOnError;
  }

  // reload_connections - computed: false, optional: true, required: false
  private _reloadConnections?: boolean | cdktf.IResolvable; 
  public get reloadConnections() {
    return this.getBooleanAttribute('reload_connections');
  }
  public set reloadConnections(value: boolean | cdktf.IResolvable) {
    this._reloadConnections = value;
  }
  public resetReloadConnections() {
    this._reloadConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadConnectionsInput() {
    return this._reloadConnections;
  }

  // reload_on_failure - computed: false, optional: true, required: false
  private _reloadOnFailure?: boolean | cdktf.IResolvable; 
  public get reloadOnFailure() {
    return this.getBooleanAttribute('reload_on_failure');
  }
  public set reloadOnFailure(value: boolean | cdktf.IResolvable) {
    this._reloadOnFailure = value;
  }
  public resetReloadOnFailure() {
    this._reloadOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadOnFailureInput() {
    return this._reloadOnFailure;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // ssl_verify - computed: false, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // suppress_type_name - computed: false, optional: true, required: false
  private _suppressTypeName?: boolean | cdktf.IResolvable; 
  public get suppressTypeName() {
    return this.getBooleanAttribute('suppress_type_name');
  }
  public set suppressTypeName(value: boolean | cdktf.IResolvable) {
    this._suppressTypeName = value;
  }
  public resetSuppressTypeName() {
    this._suppressTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressTypeNameInput() {
    return this._suppressTypeName;
  }

  // template_overwrite - computed: false, optional: true, required: false
  private _templateOverwrite?: boolean | cdktf.IResolvable; 
  public get templateOverwrite() {
    return this.getBooleanAttribute('template_overwrite');
  }
  public set templateOverwrite(value: boolean | cdktf.IResolvable) {
    this._templateOverwrite = value;
  }
  public resetTemplateOverwrite() {
    this._templateOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateOverwriteInput() {
    return this._templateOverwrite;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuth {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudId {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUser {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStream {
  /**
  * Optional, Absolute path to CA certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ca_file DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Optional, Absolute path to client Certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#client_cert DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Optional, Absolute path to client private Key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#client_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#client_key}
  */
  readonly clientKey?: string;
  /**
  * Optional, password for ClientKey file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#client_key_password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#client_key_password}
  */
  readonly clientKeyPassword?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPassword;
  /**
  * Authenticate towards Elastic Cloud using cloudAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#cloud_auth DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#cloud_auth}
  */
  readonly cloudAuth?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuth;
  /**
  * Authenticate towards Elastic Cloud using CloudId. If set, cloudAuth must be set as well and host, port, user and password are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#cloud_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#cloud_id}
  */
  readonly cloudId?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudId;
  /**
  * Optional, You can specify the name of an existing ILM policy, which will be applied to the data stream. If not present, it creates a new ILM default policy (unless data_stream_template_name is defined, in that case the ILM will be set to the one specified in the matching index template)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#data_stream_ilm_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#data_stream_ilm_name}
  */
  readonly dataStreamIlmName?: string;
  /**
  * Optional, You can specify the ILM policy contents as hash. If not present, it will apply the ILM default policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#data_stream_ilm_policy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#data_stream_ilm_policy}
  */
  readonly dataStreamIlmPolicy?: string;
  /**
  * Optional, Specify whether the data stream ILM policy should be overwritten
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#data_stream_ilm_policy_overwrite DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#data_stream_ilm_policy_overwrite}
  */
  readonly dataStreamIlmPolicyOverwrite?: boolean | cdktf.IResolvable;
  /**
  * You can specify Elasticsearch data stream name by this parameter. This parameter is mandatory for elasticsearch_data_stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#data_stream_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#data_stream_name}
  */
  readonly dataStreamName: string;
  /**
  * Optional, You can specify an existing matching index template for the data stream. If not present, it creates a new matching index template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#data_stream_template_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#data_stream_template_name}
  */
  readonly dataStreamTemplateName?: string;
  /**
  * Optional, Specify whether index patterns should include a wildcard (*) when creating an index template. This is particularly useful to prevent errors in scenarios where index templates are generated automatically, and multiple services with distinct suffixes are in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#data_stream_template_use_index_patterns_wildcard DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#data_stream_template_use_index_patterns_wildcard}
  */
  readonly dataStreamTemplateUseIndexPatternsWildcard?: boolean | cdktf.IResolvable;
  /**
  * Optional, Enable Index Lifecycle Management (ILM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#enable_ilm DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#enable_ilm}
  */
  readonly enableIlm?: boolean | cdktf.IResolvable;
  /**
  * Optional, Indicates whether to fail when max_retry_putting_template is exceeded. If you have multiple output plugin, you could use this property to do not fail on fluentd statup (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#fail_on_putting_template_retry_exceeded DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#fail_on_putting_template_retry_exceeded}
  */
  readonly failOnPuttingTemplateRetryExceeded?: boolean | cdktf.IResolvable;
  /**
  * The hostname of your Elasticsearch node (default: localhost).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#host DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Hosts defines a list of hosts if you want to connect to more than one Elasticsearch nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#hosts DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#hosts}
  */
  readonly hosts?: string;
  /**
  * Optional, Specify ILM policy contents as Hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ilm_policy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ilm_policy}
  */
  readonly ilmPolicy?: string;
  /**
  * Optional, Specify ILM policy id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ilm_policy_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ilm_policy_id}
  */
  readonly ilmPolicyId?: string;
  /**
  * Optional, Specify whether overwriting ilm policy or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ilm_policy_override DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ilm_policy_override}
  */
  readonly ilmPolicyOverride?: boolean | cdktf.IResolvable;
  /**
  * Optional, Enable logging of 400 reason without enabling debug log level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_es400_reason DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_es400_reason}
  */
  readonly logEs400Reason?: boolean | cdktf.IResolvable;
  /**
  * Optional, You can specify times of retry putting template (default: 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#max_retry_putting_template DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#max_retry_putting_template}
  */
  readonly maxRetryPuttingTemplate?: number;
  /**
  * Optional, The login credentials to connect to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPassword;
  /**
  * Path defines the REST API endpoint of Elasticsearch to post write requests (default: nil).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The port number of your Elasticsearch node (default: 9200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Optional, Indicates that the plugin should reset connection on any error (reconnect on next send) (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#reconnect_on_error DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#reconnect_on_error}
  */
  readonly reconnectOnError?: boolean | cdktf.IResolvable;
  /**
  * Optional, Automatically reload connection after 10000 documents (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#reload_connections DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#reload_connections}
  */
  readonly reloadConnections?: boolean | cdktf.IResolvable;
  /**
  * Optional, Indicates that the elasticsearch-transport will try to reload the nodes addresses if there is a failure while making the request, this can be useful to quickly remove a dead node from the list of addresses (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#reload_on_failure DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#reload_on_failure}
  */
  readonly reloadOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional, HTTP Timeout (default: 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#request_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Specify https if your Elasticsearch endpoint supports SSL (default: http).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#scheme DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Optional, Force certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ssl_verify DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Optional, Suppress '[types removal]' warnings on elasticsearch 7.x
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#suppress_type_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#suppress_type_name}
  */
  readonly suppressTypeName?: boolean | cdktf.IResolvable;
  /**
  * Optional, Always update the template, even if it already exists (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#template_overwrite DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#template_overwrite}
  */
  readonly templateOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Optional, The login credentials to connect to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#user DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#user}
  */
  readonly user?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUser;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    client_key_password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordToTerraform(struct!.clientKeyPassword),
    cloud_auth: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthToTerraform(struct!.cloudAuth),
    cloud_id: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdToTerraform(struct!.cloudId),
    data_stream_ilm_name: cdktf.stringToTerraform(struct!.dataStreamIlmName),
    data_stream_ilm_policy: cdktf.stringToTerraform(struct!.dataStreamIlmPolicy),
    data_stream_ilm_policy_overwrite: cdktf.booleanToTerraform(struct!.dataStreamIlmPolicyOverwrite),
    data_stream_name: cdktf.stringToTerraform(struct!.dataStreamName),
    data_stream_template_name: cdktf.stringToTerraform(struct!.dataStreamTemplateName),
    data_stream_template_use_index_patterns_wildcard: cdktf.booleanToTerraform(struct!.dataStreamTemplateUseIndexPatternsWildcard),
    enable_ilm: cdktf.booleanToTerraform(struct!.enableIlm),
    fail_on_putting_template_retry_exceeded: cdktf.booleanToTerraform(struct!.failOnPuttingTemplateRetryExceeded),
    host: cdktf.stringToTerraform(struct!.host),
    hosts: cdktf.stringToTerraform(struct!.hosts),
    ilm_policy: cdktf.stringToTerraform(struct!.ilmPolicy),
    ilm_policy_id: cdktf.stringToTerraform(struct!.ilmPolicyId),
    ilm_policy_override: cdktf.booleanToTerraform(struct!.ilmPolicyOverride),
    log_es400_reason: cdktf.booleanToTerraform(struct!.logEs400Reason),
    max_retry_putting_template: cdktf.numberToTerraform(struct!.maxRetryPuttingTemplate),
    password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordToTerraform(struct!.password),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    reconnect_on_error: cdktf.booleanToTerraform(struct!.reconnectOnError),
    reload_connections: cdktf.booleanToTerraform(struct!.reloadConnections),
    reload_on_failure: cdktf.booleanToTerraform(struct!.reloadOnFailure),
    request_timeout: cdktf.stringToTerraform(struct!.requestTimeout),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    suppress_type_name: cdktf.booleanToTerraform(struct!.suppressTypeName),
    template_overwrite: cdktf.booleanToTerraform(struct!.templateOverwrite),
    user: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserToTerraform(struct!.user),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordToHclTerraform(struct!.clientKeyPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPassword",
    },
    cloud_auth: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthToHclTerraform(struct!.cloudAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuth",
    },
    cloud_id: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdToHclTerraform(struct!.cloudId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudId",
    },
    data_stream_ilm_name: {
      value: cdktf.stringToHclTerraform(struct!.dataStreamIlmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_stream_ilm_policy: {
      value: cdktf.stringToHclTerraform(struct!.dataStreamIlmPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_stream_ilm_policy_overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.dataStreamIlmPolicyOverwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.dataStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_stream_template_name: {
      value: cdktf.stringToHclTerraform(struct!.dataStreamTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_stream_template_use_index_patterns_wildcard: {
      value: cdktf.booleanToHclTerraform(struct!.dataStreamTemplateUseIndexPatternsWildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ilm: {
      value: cdktf.booleanToHclTerraform(struct!.enableIlm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_putting_template_retry_exceeded: {
      value: cdktf.booleanToHclTerraform(struct!.failOnPuttingTemplateRetryExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.stringToHclTerraform(struct!.hosts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ilm_policy: {
      value: cdktf.stringToHclTerraform(struct!.ilmPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ilm_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.ilmPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ilm_policy_override: {
      value: cdktf.booleanToHclTerraform(struct!.ilmPolicyOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_es400_reason: {
      value: cdktf.booleanToHclTerraform(struct!.logEs400Reason),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_retry_putting_template: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryPuttingTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPassword",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reconnect_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.reconnectOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reload_connections: {
      value: cdktf.booleanToHclTerraform(struct!.reloadConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reload_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.reloadOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suppress_type_name: {
      value: cdktf.booleanToHclTerraform(struct!.suppressTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.templateOverwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._clientKeyPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPassword = this._clientKeyPassword?.internalValue;
    }
    if (this._cloudAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAuth = this._cloudAuth?.internalValue;
    }
    if (this._cloudId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudId = this._cloudId?.internalValue;
    }
    if (this._dataStreamIlmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStreamIlmName = this._dataStreamIlmName;
    }
    if (this._dataStreamIlmPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStreamIlmPolicy = this._dataStreamIlmPolicy;
    }
    if (this._dataStreamIlmPolicyOverwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStreamIlmPolicyOverwrite = this._dataStreamIlmPolicyOverwrite;
    }
    if (this._dataStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStreamName = this._dataStreamName;
    }
    if (this._dataStreamTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStreamTemplateName = this._dataStreamTemplateName;
    }
    if (this._dataStreamTemplateUseIndexPatternsWildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStreamTemplateUseIndexPatternsWildcard = this._dataStreamTemplateUseIndexPatternsWildcard;
    }
    if (this._enableIlm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIlm = this._enableIlm;
    }
    if (this._failOnPuttingTemplateRetryExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnPuttingTemplateRetryExceeded = this._failOnPuttingTemplateRetryExceeded;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._ilmPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilmPolicy = this._ilmPolicy;
    }
    if (this._ilmPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilmPolicyId = this._ilmPolicyId;
    }
    if (this._ilmPolicyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilmPolicyOverride = this._ilmPolicyOverride;
    }
    if (this._logEs400Reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEs400Reason = this._logEs400Reason;
    }
    if (this._maxRetryPuttingTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryPuttingTemplate = this._maxRetryPuttingTemplate;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._reconnectOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconnectOnError = this._reconnectOnError;
    }
    if (this._reloadConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadConnections = this._reloadConnections;
    }
    if (this._reloadOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.reloadOnFailure = this._reloadOnFailure;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._suppressTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressTypeName = this._suppressTypeName;
    }
    if (this._templateOverwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateOverwrite = this._templateOverwrite;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._clientKeyPassword.internalValue = undefined;
      this._cloudAuth.internalValue = undefined;
      this._cloudId.internalValue = undefined;
      this._dataStreamIlmName = undefined;
      this._dataStreamIlmPolicy = undefined;
      this._dataStreamIlmPolicyOverwrite = undefined;
      this._dataStreamName = undefined;
      this._dataStreamTemplateName = undefined;
      this._dataStreamTemplateUseIndexPatternsWildcard = undefined;
      this._enableIlm = undefined;
      this._failOnPuttingTemplateRetryExceeded = undefined;
      this._host = undefined;
      this._hosts = undefined;
      this._ilmPolicy = undefined;
      this._ilmPolicyId = undefined;
      this._ilmPolicyOverride = undefined;
      this._logEs400Reason = undefined;
      this._maxRetryPuttingTemplate = undefined;
      this._password.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._reconnectOnError = undefined;
      this._reloadConnections = undefined;
      this._reloadOnFailure = undefined;
      this._requestTimeout = undefined;
      this._scheme = undefined;
      this._sslVerify = undefined;
      this._suppressTypeName = undefined;
      this._templateOverwrite = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._clientKeyPassword.internalValue = value.clientKeyPassword;
      this._cloudAuth.internalValue = value.cloudAuth;
      this._cloudId.internalValue = value.cloudId;
      this._dataStreamIlmName = value.dataStreamIlmName;
      this._dataStreamIlmPolicy = value.dataStreamIlmPolicy;
      this._dataStreamIlmPolicyOverwrite = value.dataStreamIlmPolicyOverwrite;
      this._dataStreamName = value.dataStreamName;
      this._dataStreamTemplateName = value.dataStreamTemplateName;
      this._dataStreamTemplateUseIndexPatternsWildcard = value.dataStreamTemplateUseIndexPatternsWildcard;
      this._enableIlm = value.enableIlm;
      this._failOnPuttingTemplateRetryExceeded = value.failOnPuttingTemplateRetryExceeded;
      this._host = value.host;
      this._hosts = value.hosts;
      this._ilmPolicy = value.ilmPolicy;
      this._ilmPolicyId = value.ilmPolicyId;
      this._ilmPolicyOverride = value.ilmPolicyOverride;
      this._logEs400Reason = value.logEs400Reason;
      this._maxRetryPuttingTemplate = value.maxRetryPuttingTemplate;
      this._password.internalValue = value.password;
      this._path = value.path;
      this._port = value.port;
      this._reconnectOnError = value.reconnectOnError;
      this._reloadConnections = value.reloadConnections;
      this._reloadOnFailure = value.reloadOnFailure;
      this._requestTimeout = value.requestTimeout;
      this._scheme = value.scheme;
      this._sslVerify = value.sslVerify;
      this._suppressTypeName = value.suppressTypeName;
      this._templateOverwrite = value.templateOverwrite;
      this._user.internalValue = value.user;
    }
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

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_password - computed: false, optional: true, required: false
  private _clientKeyPassword = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPasswordOutputReference(this, "client_key_password");
  public get clientKeyPassword() {
    return this._clientKeyPassword;
  }
  public putClientKeyPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamClientKeyPassword) {
    this._clientKeyPassword.internalValue = value;
  }
  public resetClientKeyPassword() {
    this._clientKeyPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPasswordInput() {
    return this._clientKeyPassword.internalValue;
  }

  // cloud_auth - computed: false, optional: true, required: false
  private _cloudAuth = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuthOutputReference(this, "cloud_auth");
  public get cloudAuth() {
    return this._cloudAuth;
  }
  public putCloudAuth(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudAuth) {
    this._cloudAuth.internalValue = value;
  }
  public resetCloudAuth() {
    this._cloudAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAuthInput() {
    return this._cloudAuth.internalValue;
  }

  // cloud_id - computed: false, optional: true, required: false
  private _cloudId = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudIdOutputReference(this, "cloud_id");
  public get cloudId() {
    return this._cloudId;
  }
  public putCloudId(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamCloudId) {
    this._cloudId.internalValue = value;
  }
  public resetCloudId() {
    this._cloudId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId.internalValue;
  }

  // data_stream_ilm_name - computed: false, optional: true, required: false
  private _dataStreamIlmName?: string; 
  public get dataStreamIlmName() {
    return this.getStringAttribute('data_stream_ilm_name');
  }
  public set dataStreamIlmName(value: string) {
    this._dataStreamIlmName = value;
  }
  public resetDataStreamIlmName() {
    this._dataStreamIlmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamIlmNameInput() {
    return this._dataStreamIlmName;
  }

  // data_stream_ilm_policy - computed: false, optional: true, required: false
  private _dataStreamIlmPolicy?: string; 
  public get dataStreamIlmPolicy() {
    return this.getStringAttribute('data_stream_ilm_policy');
  }
  public set dataStreamIlmPolicy(value: string) {
    this._dataStreamIlmPolicy = value;
  }
  public resetDataStreamIlmPolicy() {
    this._dataStreamIlmPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamIlmPolicyInput() {
    return this._dataStreamIlmPolicy;
  }

  // data_stream_ilm_policy_overwrite - computed: false, optional: true, required: false
  private _dataStreamIlmPolicyOverwrite?: boolean | cdktf.IResolvable; 
  public get dataStreamIlmPolicyOverwrite() {
    return this.getBooleanAttribute('data_stream_ilm_policy_overwrite');
  }
  public set dataStreamIlmPolicyOverwrite(value: boolean | cdktf.IResolvable) {
    this._dataStreamIlmPolicyOverwrite = value;
  }
  public resetDataStreamIlmPolicyOverwrite() {
    this._dataStreamIlmPolicyOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamIlmPolicyOverwriteInput() {
    return this._dataStreamIlmPolicyOverwrite;
  }

  // data_stream_name - computed: false, optional: false, required: true
  private _dataStreamName?: string; 
  public get dataStreamName() {
    return this.getStringAttribute('data_stream_name');
  }
  public set dataStreamName(value: string) {
    this._dataStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamNameInput() {
    return this._dataStreamName;
  }

  // data_stream_template_name - computed: false, optional: true, required: false
  private _dataStreamTemplateName?: string; 
  public get dataStreamTemplateName() {
    return this.getStringAttribute('data_stream_template_name');
  }
  public set dataStreamTemplateName(value: string) {
    this._dataStreamTemplateName = value;
  }
  public resetDataStreamTemplateName() {
    this._dataStreamTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamTemplateNameInput() {
    return this._dataStreamTemplateName;
  }

  // data_stream_template_use_index_patterns_wildcard - computed: false, optional: true, required: false
  private _dataStreamTemplateUseIndexPatternsWildcard?: boolean | cdktf.IResolvable; 
  public get dataStreamTemplateUseIndexPatternsWildcard() {
    return this.getBooleanAttribute('data_stream_template_use_index_patterns_wildcard');
  }
  public set dataStreamTemplateUseIndexPatternsWildcard(value: boolean | cdktf.IResolvable) {
    this._dataStreamTemplateUseIndexPatternsWildcard = value;
  }
  public resetDataStreamTemplateUseIndexPatternsWildcard() {
    this._dataStreamTemplateUseIndexPatternsWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamTemplateUseIndexPatternsWildcardInput() {
    return this._dataStreamTemplateUseIndexPatternsWildcard;
  }

  // enable_ilm - computed: false, optional: true, required: false
  private _enableIlm?: boolean | cdktf.IResolvable; 
  public get enableIlm() {
    return this.getBooleanAttribute('enable_ilm');
  }
  public set enableIlm(value: boolean | cdktf.IResolvable) {
    this._enableIlm = value;
  }
  public resetEnableIlm() {
    this._enableIlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIlmInput() {
    return this._enableIlm;
  }

  // fail_on_putting_template_retry_exceeded - computed: false, optional: true, required: false
  private _failOnPuttingTemplateRetryExceeded?: boolean | cdktf.IResolvable; 
  public get failOnPuttingTemplateRetryExceeded() {
    return this.getBooleanAttribute('fail_on_putting_template_retry_exceeded');
  }
  public set failOnPuttingTemplateRetryExceeded(value: boolean | cdktf.IResolvable) {
    this._failOnPuttingTemplateRetryExceeded = value;
  }
  public resetFailOnPuttingTemplateRetryExceeded() {
    this._failOnPuttingTemplateRetryExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnPuttingTemplateRetryExceededInput() {
    return this._failOnPuttingTemplateRetryExceeded;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string; 
  public get hosts() {
    return this.getStringAttribute('hosts');
  }
  public set hosts(value: string) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // ilm_policy - computed: false, optional: true, required: false
  private _ilmPolicy?: string; 
  public get ilmPolicy() {
    return this.getStringAttribute('ilm_policy');
  }
  public set ilmPolicy(value: string) {
    this._ilmPolicy = value;
  }
  public resetIlmPolicy() {
    this._ilmPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilmPolicyInput() {
    return this._ilmPolicy;
  }

  // ilm_policy_id - computed: false, optional: true, required: false
  private _ilmPolicyId?: string; 
  public get ilmPolicyId() {
    return this.getStringAttribute('ilm_policy_id');
  }
  public set ilmPolicyId(value: string) {
    this._ilmPolicyId = value;
  }
  public resetIlmPolicyId() {
    this._ilmPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilmPolicyIdInput() {
    return this._ilmPolicyId;
  }

  // ilm_policy_override - computed: false, optional: true, required: false
  private _ilmPolicyOverride?: boolean | cdktf.IResolvable; 
  public get ilmPolicyOverride() {
    return this.getBooleanAttribute('ilm_policy_override');
  }
  public set ilmPolicyOverride(value: boolean | cdktf.IResolvable) {
    this._ilmPolicyOverride = value;
  }
  public resetIlmPolicyOverride() {
    this._ilmPolicyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilmPolicyOverrideInput() {
    return this._ilmPolicyOverride;
  }

  // log_es400_reason - computed: false, optional: true, required: false
  private _logEs400Reason?: boolean | cdktf.IResolvable; 
  public get logEs400Reason() {
    return this.getBooleanAttribute('log_es400_reason');
  }
  public set logEs400Reason(value: boolean | cdktf.IResolvable) {
    this._logEs400Reason = value;
  }
  public resetLogEs400Reason() {
    this._logEs400Reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEs400ReasonInput() {
    return this._logEs400Reason;
  }

  // max_retry_putting_template - computed: false, optional: true, required: false
  private _maxRetryPuttingTemplate?: number; 
  public get maxRetryPuttingTemplate() {
    return this.getNumberAttribute('max_retry_putting_template');
  }
  public set maxRetryPuttingTemplate(value: number) {
    this._maxRetryPuttingTemplate = value;
  }
  public resetMaxRetryPuttingTemplate() {
    this._maxRetryPuttingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryPuttingTemplateInput() {
    return this._maxRetryPuttingTemplate;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // reconnect_on_error - computed: false, optional: true, required: false
  private _reconnectOnError?: boolean | cdktf.IResolvable; 
  public get reconnectOnError() {
    return this.getBooleanAttribute('reconnect_on_error');
  }
  public set reconnectOnError(value: boolean | cdktf.IResolvable) {
    this._reconnectOnError = value;
  }
  public resetReconnectOnError() {
    this._reconnectOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconnectOnErrorInput() {
    return this._reconnectOnError;
  }

  // reload_connections - computed: false, optional: true, required: false
  private _reloadConnections?: boolean | cdktf.IResolvable; 
  public get reloadConnections() {
    return this.getBooleanAttribute('reload_connections');
  }
  public set reloadConnections(value: boolean | cdktf.IResolvable) {
    this._reloadConnections = value;
  }
  public resetReloadConnections() {
    this._reloadConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadConnectionsInput() {
    return this._reloadConnections;
  }

  // reload_on_failure - computed: false, optional: true, required: false
  private _reloadOnFailure?: boolean | cdktf.IResolvable; 
  public get reloadOnFailure() {
    return this.getBooleanAttribute('reload_on_failure');
  }
  public set reloadOnFailure(value: boolean | cdktf.IResolvable) {
    this._reloadOnFailure = value;
  }
  public resetReloadOnFailure() {
    this._reloadOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadOnFailureInput() {
    return this._reloadOnFailure;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // ssl_verify - computed: false, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // suppress_type_name - computed: false, optional: true, required: false
  private _suppressTypeName?: boolean | cdktf.IResolvable; 
  public get suppressTypeName() {
    return this.getBooleanAttribute('suppress_type_name');
  }
  public set suppressTypeName(value: boolean | cdktf.IResolvable) {
    this._suppressTypeName = value;
  }
  public resetSuppressTypeName() {
    this._suppressTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressTypeNameInput() {
    return this._suppressTypeName;
  }

  // template_overwrite - computed: false, optional: true, required: false
  private _templateOverwrite?: boolean | cdktf.IResolvable; 
  public get templateOverwrite() {
    return this.getBooleanAttribute('template_overwrite');
  }
  public set templateOverwrite(value: boolean | cdktf.IResolvable) {
    this._templateOverwrite = value;
  }
  public resetTemplateOverwrite() {
    this._templateOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateOverwriteInput() {
    return this._templateOverwrite;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormat {
  /**
  * Delimiter for each field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#delimiter DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#delimiter}
  */
  readonly delimiter?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, uses local time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#localtime DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Specify newline characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#newline DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#newline}
  */
  readonly newline?: string;
  /**
  * Output tag field if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#output_tag DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#output_tag}
  */
  readonly outputTag?: boolean | cdktf.IResolvable;
  /**
  * Output time field if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#output_time DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#output_time}
  */
  readonly outputTime?: boolean | cdktf.IResolvable;
  /**
  * Process value according to the specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Uses the specified time format as a fallback in the specified order. You can parse undetermined time format by using time_format_fallbacks. This options is enabled when time_type is mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_format_fallbacks DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_format_fallbacks}
  */
  readonly timeFormatFallbacks?: string;
  /**
  * parses/formats value according to this type, default is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Uses the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#timezone DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * If true, uses UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#utc DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormatToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    id: cdktf.stringToTerraform(struct!.id),
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    newline: cdktf.stringToTerraform(struct!.newline),
    output_tag: cdktf.booleanToTerraform(struct!.outputTag),
    output_time: cdktf.booleanToTerraform(struct!.outputTime),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_format_fallbacks: cdktf.stringToTerraform(struct!.timeFormatFallbacks),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormatToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newline: {
      value: cdktf.stringToHclTerraform(struct!.newline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_tag: {
      value: cdktf.booleanToHclTerraform(struct!.outputTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_time: {
      value: cdktf.booleanToHclTerraform(struct!.outputTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_fallbacks: {
      value: cdktf.stringToHclTerraform(struct!.timeFormatFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._newline !== undefined) {
      hasAnyValues = true;
      internalValueResult.newline = this._newline;
    }
    if (this._outputTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputTag = this._outputTag;
    }
    if (this._outputTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputTime = this._outputTime;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeFormatFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatFallbacks = this._timeFormatFallbacks;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._id = undefined;
      this._localtime = undefined;
      this._logLevel = undefined;
      this._newline = undefined;
      this._outputTag = undefined;
      this._outputTime = undefined;
      this._timeFormat = undefined;
      this._timeFormatFallbacks = undefined;
      this._timeType = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._id = value.id;
      this._localtime = value.localtime;
      this._logLevel = value.logLevel;
      this._newline = value.newline;
      this._outputTag = value.outputTag;
      this._outputTime = value.outputTime;
      this._timeFormat = value.timeFormat;
      this._timeFormatFallbacks = value.timeFormatFallbacks;
      this._timeType = value.timeType;
      this._timezone = value.timezone;
      this._type = value.type;
      this._utc = value.utc;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // id - computed: false, optional: true, required: false
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

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // newline - computed: false, optional: true, required: false
  private _newline?: string; 
  public get newline() {
    return this.getStringAttribute('newline');
  }
  public set newline(value: string) {
    this._newline = value;
  }
  public resetNewline() {
    this._newline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newlineInput() {
    return this._newline;
  }

  // output_tag - computed: false, optional: true, required: false
  private _outputTag?: boolean | cdktf.IResolvable; 
  public get outputTag() {
    return this.getBooleanAttribute('output_tag');
  }
  public set outputTag(value: boolean | cdktf.IResolvable) {
    this._outputTag = value;
  }
  public resetOutputTag() {
    this._outputTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTagInput() {
    return this._outputTag;
  }

  // output_time - computed: false, optional: true, required: false
  private _outputTime?: boolean | cdktf.IResolvable; 
  public get outputTime() {
    return this.getBooleanAttribute('output_time');
  }
  public set outputTime(value: boolean | cdktf.IResolvable) {
    this._outputTime = value;
  }
  public resetOutputTime() {
    this._outputTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTimeInput() {
    return this._outputTime;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_format_fallbacks - computed: false, optional: true, required: false
  private _timeFormatFallbacks?: string; 
  public get timeFormatFallbacks() {
    return this.getStringAttribute('time_format_fallbacks');
  }
  public set timeFormatFallbacks(value: string) {
    this._timeFormatFallbacks = value;
  }
  public resetTimeFormatFallbacks() {
    this._timeFormatFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatFallbacksInput() {
    return this._timeFormatFallbacks;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsername {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUser {
  /**
  * Secret defines the key of a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPassword;
  /**
  * Secret defines the key of a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#username DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#username}
  */
  readonly username?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsername;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordToTerraform(struct!.password),
    username: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameToTerraform(struct!.username),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPassword",
    },
    username: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurity {
  /**
  * Allows the anonymous source. <client> sections are required, if disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#allow_anonymous_source DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#allow_anonymous_source}
  */
  readonly allowAnonymousSource?: string;
  /**
  * The hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#self_hostname DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#self_hostname}
  */
  readonly selfHostname?: string;
  /**
  * The shared key for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#shared_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Defines user section directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#user DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#user}
  */
  readonly user?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUser;
  /**
  * If true, user-based authentication is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#user_auth DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#user_auth}
  */
  readonly userAuth?: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_anonymous_source: cdktf.stringToTerraform(struct!.allowAnonymousSource),
    self_hostname: cdktf.stringToTerraform(struct!.selfHostname),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    user: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserToTerraform(struct!.user),
    user_auth: cdktf.stringToTerraform(struct!.userAuth),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_anonymous_source: {
      value: cdktf.stringToHclTerraform(struct!.allowAnonymousSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_hostname: {
      value: cdktf.stringToHclTerraform(struct!.selfHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUser",
    },
    user_auth: {
      value: cdktf.stringToHclTerraform(struct!.userAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAnonymousSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAnonymousSource = this._allowAnonymousSource;
    }
    if (this._selfHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHostname = this._selfHostname;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    if (this._userAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuth = this._userAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAnonymousSource = undefined;
      this._selfHostname = undefined;
      this._sharedKey = undefined;
      this._user.internalValue = undefined;
      this._userAuth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAnonymousSource = value.allowAnonymousSource;
      this._selfHostname = value.selfHostname;
      this._sharedKey = value.sharedKey;
      this._user.internalValue = value.user;
      this._userAuth = value.userAuth;
    }
  }

  // allow_anonymous_source - computed: false, optional: true, required: false
  private _allowAnonymousSource?: string; 
  public get allowAnonymousSource() {
    return this.getStringAttribute('allow_anonymous_source');
  }
  public set allowAnonymousSource(value: string) {
    this._allowAnonymousSource = value;
  }
  public resetAllowAnonymousSource() {
    this._allowAnonymousSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnonymousSourceInput() {
    return this._allowAnonymousSource;
  }

  // self_hostname - computed: false, optional: true, required: false
  private _selfHostname?: string; 
  public get selfHostname() {
    return this.getStringAttribute('self_hostname');
  }
  public set selfHostname(value: string) {
    this._selfHostname = value;
  }
  public resetSelfHostname() {
    this._selfHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHostnameInput() {
    return this._selfHostname;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // user_auth - computed: false, optional: true, required: false
  private _userAuth?: string; 
  public get userAuth() {
    return this.getStringAttribute('user_auth');
  }
  public set userAuth(value: string) {
    this._userAuth = value;
  }
  public resetUserAuth() {
    this._userAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthInput() {
    return this._userAuth;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsername {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServers {
  /**
  * Host defines the IP address or host name of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#host DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Name defines the name of the server. Used for logging and certificate verification in TLS transport (when the host is the address).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Password defines the password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPassword;
  /**
  * Port defines the port number of the host. Note that both TCP packets (event stream) and UDP packets (heartbeat messages) are sent to this port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * SharedKey defines the shared key per server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#shared_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Standby marks a node as the standby node for an Active-Standby model between Fluentd nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#standby DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#standby}
  */
  readonly standby?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Username defines the username for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#username DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#username}
  */
  readonly username?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsername;
  /**
  * Weight defines the load balancing weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#weight DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#weight}
  */
  readonly weight?: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    id: cdktf.stringToTerraform(struct!.id),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    name: cdktf.stringToTerraform(struct!.name),
    password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    standby: cdktf.stringToTerraform(struct!.standby),
    type: cdktf.stringToTerraform(struct!.type),
    username: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameToTerraform(struct!.username),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
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
    password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPassword",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby: {
      value: cdktf.stringToHclTerraform(struct!.standby),
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
    username: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsername",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._standby !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._id = undefined;
      this._logLevel = undefined;
      this._name = undefined;
      this._password.internalValue = undefined;
      this._port = undefined;
      this._sharedKey = undefined;
      this._standby = undefined;
      this._type = undefined;
      this._username.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._id = value.id;
      this._logLevel = value.logLevel;
      this._name = value.name;
      this._password.internalValue = value.password;
      this._port = value.port;
      this._sharedKey = value.sharedKey;
      this._standby = value.standby;
      this._type = value.type;
      this._username.internalValue = value.username;
      this._weight = value.weight;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: false, optional: true, required: false
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

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // standby - computed: false, optional: true, required: false
  private _standby?: string; 
  public get standby() {
    return this.getStringAttribute('standby');
  }
  public set standby(value: string) {
    this._standby = value;
  }
  public resetStandby() {
    this._standby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersOutputReference {
    return new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsername {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServer {
  /**
  * Host defines the IP address or host name of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#host DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Name defines the name of the server. Used for logging and certificate verification in TLS transport (when the host is the address).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Password defines the password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPassword;
  /**
  * Port defines the port number of the host. Note that both TCP packets (event stream) and UDP packets (heartbeat messages) are sent to this port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#port}
  */
  readonly port?: string;
  /**
  * SharedKey defines the shared key per server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#shared_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Standby marks a node as the standby node for an Active-Standby model between Fluentd nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#standby DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#standby}
  */
  readonly standby?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Username defines the username for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#username DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#username}
  */
  readonly username?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsername;
  /**
  * Weight defines the load balancing weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#weight DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#weight}
  */
  readonly weight?: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    id: cdktf.stringToTerraform(struct!.id),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    name: cdktf.stringToTerraform(struct!.name),
    password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    standby: cdktf.stringToTerraform(struct!.standby),
    type: cdktf.stringToTerraform(struct!.type),
    username: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameToTerraform(struct!.username),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
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
    password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPassword",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby: {
      value: cdktf.stringToHclTerraform(struct!.standby),
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
    username: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsername",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._standby !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._id = undefined;
      this._logLevel = undefined;
      this._name = undefined;
      this._password.internalValue = undefined;
      this._port = undefined;
      this._sharedKey = undefined;
      this._standby = undefined;
      this._type = undefined;
      this._username.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._id = value.id;
      this._logLevel = value.logLevel;
      this._name = value.name;
      this._password.internalValue = value.password;
      this._port = value.port;
      this._sharedKey = value.sharedKey;
      this._standby = value.standby;
      this._type = value.type;
      this._username.internalValue = value.username;
      this._weight = value.weight;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: false, optional: true, required: false
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

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // standby - computed: false, optional: true, required: false
  private _standby?: string; 
  public get standby() {
    return this.getStringAttribute('standby');
  }
  public set standby(value: string) {
    this._standby = value;
  }
  public resetStandby() {
    this._standby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscovery {
  /**
  * The encoding of the configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#conf_encoding DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#conf_encoding}
  */
  readonly confEncoding?: string;
  /**
  * DnsLookup resolves the hostname to IP address of the SRV's Target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#dns_lookup DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#dns_lookup}
  */
  readonly dnsLookup?: string;
  /**
  * DnsServerHost defines the hostname of the DNS server to request the SRV record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#dns_server_host DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#dns_server_host}
  */
  readonly dnsServerHost?: string;
  /**
  * The name in RFC2782.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#hostname DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval defines the interval of sending requests to DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#interval DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * The path of the target list. Default is '/etc/fluent/sd.yaml'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Proto without the underscore in RFC2782.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#proto DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#proto}
  */
  readonly proto?: string;
  /**
  * The server section of this plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#server DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServer;
  /**
  * Service without the underscore in RFC2782.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#service DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#service}
  */
  readonly service?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf_encoding: cdktf.stringToTerraform(struct!.confEncoding),
    dns_lookup: cdktf.stringToTerraform(struct!.dnsLookup),
    dns_server_host: cdktf.stringToTerraform(struct!.dnsServerHost),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    id: cdktf.stringToTerraform(struct!.id),
    interval: cdktf.stringToTerraform(struct!.interval),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    path: cdktf.stringToTerraform(struct!.path),
    proto: cdktf.stringToTerraform(struct!.proto),
    server: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerToTerraform(struct!.server),
    service: cdktf.stringToTerraform(struct!.service),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf_encoding: {
      value: cdktf.stringToHclTerraform(struct!.confEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_lookup: {
      value: cdktf.stringToHclTerraform(struct!.dnsLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server_host: {
      value: cdktf.stringToHclTerraform(struct!.dnsServerHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServer",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
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

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.confEncoding = this._confEncoding;
    }
    if (this._dnsLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsLookup = this._dnsLookup;
    }
    if (this._dnsServerHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerHost = this._dnsServerHost;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confEncoding = undefined;
      this._dnsLookup = undefined;
      this._dnsServerHost = undefined;
      this._hostname = undefined;
      this._id = undefined;
      this._interval = undefined;
      this._logLevel = undefined;
      this._path = undefined;
      this._proto = undefined;
      this._server.internalValue = undefined;
      this._service = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confEncoding = value.confEncoding;
      this._dnsLookup = value.dnsLookup;
      this._dnsServerHost = value.dnsServerHost;
      this._hostname = value.hostname;
      this._id = value.id;
      this._interval = value.interval;
      this._logLevel = value.logLevel;
      this._path = value.path;
      this._proto = value.proto;
      this._server.internalValue = value.server;
      this._service = value.service;
      this._type = value.type;
    }
  }

  // conf_encoding - computed: false, optional: true, required: false
  private _confEncoding?: string; 
  public get confEncoding() {
    return this.getStringAttribute('conf_encoding');
  }
  public set confEncoding(value: string) {
    this._confEncoding = value;
  }
  public resetConfEncoding() {
    this._confEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confEncodingInput() {
    return this._confEncoding;
  }

  // dns_lookup - computed: false, optional: true, required: false
  private _dnsLookup?: string; 
  public get dnsLookup() {
    return this.getStringAttribute('dns_lookup');
  }
  public set dnsLookup(value: string) {
    this._dnsLookup = value;
  }
  public resetDnsLookup() {
    this._dnsLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLookupInput() {
    return this._dnsLookup;
  }

  // dns_server_host - computed: false, optional: true, required: false
  private _dnsServerHost?: string; 
  public get dnsServerHost() {
    return this.getStringAttribute('dns_server_host');
  }
  public set dnsServerHost(value: string) {
    this._dnsServerHost = value;
  }
  public resetDnsServerHost() {
    this._dnsServerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerHostInput() {
    return this._dnsServerHost;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: true, required: false
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForward {
  /**
  * This option is used when require_ack_response is true. This default value is based on popular tcp_syn_retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ack_response_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ack_response_timeout}
  */
  readonly ackResponseTimeout?: string;
  /**
  * The connection timeout for the socket. When the connection is timed out during the connection establishment, Errno::ETIMEDOUT error is raised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#connect_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Enable client-side DNS round robin. Uniform randomly pick an IP address to send data when a hostname has several IP addresses. heartbeat_type udp is not available with dns_round_robintrue. Use heartbeat_type tcp or heartbeat_type none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#dns_round_robin DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#dns_round_robin}
  */
  readonly dnsRoundRobin?: boolean | cdktf.IResolvable;
  /**
  * Sets TTL to expire DNS cache in seconds. Set 0 not to use DNS Cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#expire_dns_cache DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#expire_dns_cache}
  */
  readonly expireDnsCache?: string;
  /**
  * The hard timeout used to detect server failure. The default value is equal to the send_timeout parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#hard_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#hard_timeout}
  */
  readonly hardTimeout?: string;
  /**
  * The interval of the heartbeat packer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#heartbeat_interval DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#heartbeat_interval}
  */
  readonly heartbeatInterval?: string;
  /**
  * Specifies the transport protocol for heartbeats. Set none to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#heartbeat_type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#heartbeat_type}
  */
  readonly heartbeatType?: string;
  /**
  * Ignores DNS resolution and errors at startup time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ignore_network_errors_at_startup DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ignore_network_errors_at_startup}
  */
  readonly ignoreNetworkErrorsAtStartup?: boolean | cdktf.IResolvable;
  /**
  * Enables the keepalive connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#keepalive DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#keepalive}
  */
  readonly keepalive?: boolean | cdktf.IResolvable;
  /**
  * Timeout for keepalive. Default value is nil which means to keep the connection alive as long as possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#keepalive_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
  /**
  * Use the 'Phi accrual failure detector' to detect server failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#phi_failure_detector DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#phi_failure_detector}
  */
  readonly phiFailureDetector?: boolean | cdktf.IResolvable;
  /**
  * The threshold parameter used to detect server faults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#phi_threshold DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#phi_threshold}
  */
  readonly phiThreshold?: number;
  /**
  * The wait time before accepting a server fault recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#recover_wait DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#recover_wait}
  */
  readonly recoverWait?: string;
  /**
  * Changes the protocol to at-least-once. The plugin waits the ack from destination's in_forward plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#require_ack_response DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#require_ack_response}
  */
  readonly requireAckResponse?: boolean | cdktf.IResolvable;
  /**
  * ServiceDiscovery defines the security section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#security DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#security}
  */
  readonly security?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurity;
  /**
  * The timeout time when sending event logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#send_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#send_timeout}
  */
  readonly sendTimeout?: string;
  /**
  * Servers defines the servers section, at least one is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#servers DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#servers}
  */
  readonly servers: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServers[] | cdktf.IResolvable;
  /**
  * ServiceDiscovery defines the service_discovery section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#service_discovery DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#service_discovery}
  */
  readonly serviceDiscovery?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscovery;
  /**
  * Allows self-signed certificates or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_allow_self_signed_cert DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_allow_self_signed_cert}
  */
  readonly tlsAllowSelfSignedCert?: boolean | cdktf.IResolvable;
  /**
  * The certificate logical store name on Windows system certstore. This parameter is for Windows only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_cert_logical_store_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_cert_logical_store_name}
  */
  readonly tlsCertLogicalStoreName?: string;
  /**
  * The additional CA certificate path for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_cert_path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_cert_path}
  */
  readonly tlsCertPath?: string;
  /**
  * The certificate thumbprint for searching from Windows system certstore. This parameter is for Windows only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_cert_thumbprint DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_cert_thumbprint}
  */
  readonly tlsCertThumbprint?: string;
  /**
  * Enables the certificate enterprise store on Windows system certstore. This parameter is for Windows only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_cert_use_enterprise_store DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_cert_use_enterprise_store}
  */
  readonly tlsCertUseEnterpriseStore?: boolean | cdktf.IResolvable;
  /**
  * The cipher configuration of TLS transport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_ciphers DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_ciphers}
  */
  readonly tlsCiphers?: string;
  /**
  * The client certificate path for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_client_cert_path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_client_cert_path}
  */
  readonly tlsClientCertPath?: string;
  /**
  * The TLS private key passphrase for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_client_private_key_passphrase DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_client_private_key_passphrase}
  */
  readonly tlsClientPrivateKeyPassphrase?: string;
  /**
  * The client private key path for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_client_private_key_path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_client_private_key_path}
  */
  readonly tlsClientPrivateKeyPath?: string;
  /**
  * Skips all verification of certificates or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_insecure_mode DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_insecure_mode}
  */
  readonly tlsInsecureMode?: boolean | cdktf.IResolvable;
  /**
  * Verifies hostname of servers and certificates or not in TLS transport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_verify_hostname DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_verify_hostname}
  */
  readonly tlsVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * The default version of TLS transport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_version DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_version}
  */
  readonly tlsVersion?: string;
  /**
  * Verify that a connection can be made with one of out_forward nodes at the time of startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#verify_connection_at_startup DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#verify_connection_at_startup}
  */
  readonly verifyConnectionAtStartup?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_response_timeout: cdktf.stringToTerraform(struct!.ackResponseTimeout),
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    dns_round_robin: cdktf.booleanToTerraform(struct!.dnsRoundRobin),
    expire_dns_cache: cdktf.stringToTerraform(struct!.expireDnsCache),
    hard_timeout: cdktf.stringToTerraform(struct!.hardTimeout),
    heartbeat_interval: cdktf.stringToTerraform(struct!.heartbeatInterval),
    heartbeat_type: cdktf.stringToTerraform(struct!.heartbeatType),
    ignore_network_errors_at_startup: cdktf.booleanToTerraform(struct!.ignoreNetworkErrorsAtStartup),
    keepalive: cdktf.booleanToTerraform(struct!.keepalive),
    keepalive_timeout: cdktf.stringToTerraform(struct!.keepaliveTimeout),
    phi_failure_detector: cdktf.booleanToTerraform(struct!.phiFailureDetector),
    phi_threshold: cdktf.numberToTerraform(struct!.phiThreshold),
    recover_wait: cdktf.stringToTerraform(struct!.recoverWait),
    require_ack_response: cdktf.booleanToTerraform(struct!.requireAckResponse),
    security: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityToTerraform(struct!.security),
    send_timeout: cdktf.stringToTerraform(struct!.sendTimeout),
    servers: cdktf.listMapper(dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersToTerraform, false)(struct!.servers),
    service_discovery: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryToTerraform(struct!.serviceDiscovery),
    tls_allow_self_signed_cert: cdktf.booleanToTerraform(struct!.tlsAllowSelfSignedCert),
    tls_cert_logical_store_name: cdktf.stringToTerraform(struct!.tlsCertLogicalStoreName),
    tls_cert_path: cdktf.stringToTerraform(struct!.tlsCertPath),
    tls_cert_thumbprint: cdktf.stringToTerraform(struct!.tlsCertThumbprint),
    tls_cert_use_enterprise_store: cdktf.booleanToTerraform(struct!.tlsCertUseEnterpriseStore),
    tls_ciphers: cdktf.stringToTerraform(struct!.tlsCiphers),
    tls_client_cert_path: cdktf.stringToTerraform(struct!.tlsClientCertPath),
    tls_client_private_key_passphrase: cdktf.stringToTerraform(struct!.tlsClientPrivateKeyPassphrase),
    tls_client_private_key_path: cdktf.stringToTerraform(struct!.tlsClientPrivateKeyPath),
    tls_insecure_mode: cdktf.booleanToTerraform(struct!.tlsInsecureMode),
    tls_verify_hostname: cdktf.booleanToTerraform(struct!.tlsVerifyHostname),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
    verify_connection_at_startup: cdktf.booleanToTerraform(struct!.verifyConnectionAtStartup),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_response_timeout: {
      value: cdktf.stringToHclTerraform(struct!.ackResponseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_round_robin: {
      value: cdktf.booleanToHclTerraform(struct!.dnsRoundRobin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_dns_cache: {
      value: cdktf.stringToHclTerraform(struct!.expireDnsCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hard_timeout: {
      value: cdktf.stringToHclTerraform(struct!.hardTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heartbeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.heartbeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heartbeat_type: {
      value: cdktf.stringToHclTerraform(struct!.heartbeatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_network_errors_at_startup: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNetworkErrorsAtStartup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive: {
      value: cdktf.booleanToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive_timeout: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phi_failure_detector: {
      value: cdktf.booleanToHclTerraform(struct!.phiFailureDetector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    phi_threshold: {
      value: cdktf.numberToHclTerraform(struct!.phiThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recover_wait: {
      value: cdktf.stringToHclTerraform(struct!.recoverWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_ack_response: {
      value: cdktf.booleanToHclTerraform(struct!.requireAckResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurity",
    },
    send_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersList",
    },
    service_discovery: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryToHclTerraform(struct!.serviceDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscovery",
    },
    tls_allow_self_signed_cert: {
      value: cdktf.booleanToHclTerraform(struct!.tlsAllowSelfSignedCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_cert_logical_store_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertLogicalStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert_use_enterprise_store: {
      value: cdktf.booleanToHclTerraform(struct!.tlsCertUseEnterpriseStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_ciphers: {
      value: cdktf.stringToHclTerraform(struct!.tlsCiphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientPrivateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientPrivateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_insecure_mode: {
      value: cdktf.booleanToHclTerraform(struct!.tlsInsecureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.tlsVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_connection_at_startup: {
      value: cdktf.booleanToHclTerraform(struct!.verifyConnectionAtStartup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForward | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackResponseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackResponseTimeout = this._ackResponseTimeout;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._dnsRoundRobin !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRoundRobin = this._dnsRoundRobin;
    }
    if (this._expireDnsCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireDnsCache = this._expireDnsCache;
    }
    if (this._hardTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardTimeout = this._hardTimeout;
    }
    if (this._heartbeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatInterval = this._heartbeatInterval;
    }
    if (this._heartbeatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatType = this._heartbeatType;
    }
    if (this._ignoreNetworkErrorsAtStartup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNetworkErrorsAtStartup = this._ignoreNetworkErrorsAtStartup;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._keepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTimeout = this._keepaliveTimeout;
    }
    if (this._phiFailureDetector !== undefined) {
      hasAnyValues = true;
      internalValueResult.phiFailureDetector = this._phiFailureDetector;
    }
    if (this._phiThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.phiThreshold = this._phiThreshold;
    }
    if (this._recoverWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverWait = this._recoverWait;
    }
    if (this._requireAckResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAckResponse = this._requireAckResponse;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._serviceDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDiscovery = this._serviceDiscovery?.internalValue;
    }
    if (this._tlsAllowSelfSignedCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsAllowSelfSignedCert = this._tlsAllowSelfSignedCert;
    }
    if (this._tlsCertLogicalStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertLogicalStoreName = this._tlsCertLogicalStoreName;
    }
    if (this._tlsCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertPath = this._tlsCertPath;
    }
    if (this._tlsCertThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertThumbprint = this._tlsCertThumbprint;
    }
    if (this._tlsCertUseEnterpriseStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertUseEnterpriseStore = this._tlsCertUseEnterpriseStore;
    }
    if (this._tlsCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCiphers = this._tlsCiphers;
    }
    if (this._tlsClientCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCertPath = this._tlsClientCertPath;
    }
    if (this._tlsClientPrivateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientPrivateKeyPassphrase = this._tlsClientPrivateKeyPassphrase;
    }
    if (this._tlsClientPrivateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientPrivateKeyPath = this._tlsClientPrivateKeyPath;
    }
    if (this._tlsInsecureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInsecureMode = this._tlsInsecureMode;
    }
    if (this._tlsVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerifyHostname = this._tlsVerifyHostname;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    if (this._verifyConnectionAtStartup !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnectionAtStartup = this._verifyConnectionAtStartup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForward | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackResponseTimeout = undefined;
      this._connectTimeout = undefined;
      this._dnsRoundRobin = undefined;
      this._expireDnsCache = undefined;
      this._hardTimeout = undefined;
      this._heartbeatInterval = undefined;
      this._heartbeatType = undefined;
      this._ignoreNetworkErrorsAtStartup = undefined;
      this._keepalive = undefined;
      this._keepaliveTimeout = undefined;
      this._phiFailureDetector = undefined;
      this._phiThreshold = undefined;
      this._recoverWait = undefined;
      this._requireAckResponse = undefined;
      this._security.internalValue = undefined;
      this._sendTimeout = undefined;
      this._servers.internalValue = undefined;
      this._serviceDiscovery.internalValue = undefined;
      this._tlsAllowSelfSignedCert = undefined;
      this._tlsCertLogicalStoreName = undefined;
      this._tlsCertPath = undefined;
      this._tlsCertThumbprint = undefined;
      this._tlsCertUseEnterpriseStore = undefined;
      this._tlsCiphers = undefined;
      this._tlsClientCertPath = undefined;
      this._tlsClientPrivateKeyPassphrase = undefined;
      this._tlsClientPrivateKeyPath = undefined;
      this._tlsInsecureMode = undefined;
      this._tlsVerifyHostname = undefined;
      this._tlsVersion = undefined;
      this._verifyConnectionAtStartup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackResponseTimeout = value.ackResponseTimeout;
      this._connectTimeout = value.connectTimeout;
      this._dnsRoundRobin = value.dnsRoundRobin;
      this._expireDnsCache = value.expireDnsCache;
      this._hardTimeout = value.hardTimeout;
      this._heartbeatInterval = value.heartbeatInterval;
      this._heartbeatType = value.heartbeatType;
      this._ignoreNetworkErrorsAtStartup = value.ignoreNetworkErrorsAtStartup;
      this._keepalive = value.keepalive;
      this._keepaliveTimeout = value.keepaliveTimeout;
      this._phiFailureDetector = value.phiFailureDetector;
      this._phiThreshold = value.phiThreshold;
      this._recoverWait = value.recoverWait;
      this._requireAckResponse = value.requireAckResponse;
      this._security.internalValue = value.security;
      this._sendTimeout = value.sendTimeout;
      this._servers.internalValue = value.servers;
      this._serviceDiscovery.internalValue = value.serviceDiscovery;
      this._tlsAllowSelfSignedCert = value.tlsAllowSelfSignedCert;
      this._tlsCertLogicalStoreName = value.tlsCertLogicalStoreName;
      this._tlsCertPath = value.tlsCertPath;
      this._tlsCertThumbprint = value.tlsCertThumbprint;
      this._tlsCertUseEnterpriseStore = value.tlsCertUseEnterpriseStore;
      this._tlsCiphers = value.tlsCiphers;
      this._tlsClientCertPath = value.tlsClientCertPath;
      this._tlsClientPrivateKeyPassphrase = value.tlsClientPrivateKeyPassphrase;
      this._tlsClientPrivateKeyPath = value.tlsClientPrivateKeyPath;
      this._tlsInsecureMode = value.tlsInsecureMode;
      this._tlsVerifyHostname = value.tlsVerifyHostname;
      this._tlsVersion = value.tlsVersion;
      this._verifyConnectionAtStartup = value.verifyConnectionAtStartup;
    }
  }

  // ack_response_timeout - computed: false, optional: true, required: false
  private _ackResponseTimeout?: string; 
  public get ackResponseTimeout() {
    return this.getStringAttribute('ack_response_timeout');
  }
  public set ackResponseTimeout(value: string) {
    this._ackResponseTimeout = value;
  }
  public resetAckResponseTimeout() {
    this._ackResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackResponseTimeoutInput() {
    return this._ackResponseTimeout;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // dns_round_robin - computed: false, optional: true, required: false
  private _dnsRoundRobin?: boolean | cdktf.IResolvable; 
  public get dnsRoundRobin() {
    return this.getBooleanAttribute('dns_round_robin');
  }
  public set dnsRoundRobin(value: boolean | cdktf.IResolvable) {
    this._dnsRoundRobin = value;
  }
  public resetDnsRoundRobin() {
    this._dnsRoundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRoundRobinInput() {
    return this._dnsRoundRobin;
  }

  // expire_dns_cache - computed: false, optional: true, required: false
  private _expireDnsCache?: string; 
  public get expireDnsCache() {
    return this.getStringAttribute('expire_dns_cache');
  }
  public set expireDnsCache(value: string) {
    this._expireDnsCache = value;
  }
  public resetExpireDnsCache() {
    this._expireDnsCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDnsCacheInput() {
    return this._expireDnsCache;
  }

  // hard_timeout - computed: false, optional: true, required: false
  private _hardTimeout?: string; 
  public get hardTimeout() {
    return this.getStringAttribute('hard_timeout');
  }
  public set hardTimeout(value: string) {
    this._hardTimeout = value;
  }
  public resetHardTimeout() {
    this._hardTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardTimeoutInput() {
    return this._hardTimeout;
  }

  // heartbeat_interval - computed: false, optional: true, required: false
  private _heartbeatInterval?: string; 
  public get heartbeatInterval() {
    return this.getStringAttribute('heartbeat_interval');
  }
  public set heartbeatInterval(value: string) {
    this._heartbeatInterval = value;
  }
  public resetHeartbeatInterval() {
    this._heartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatIntervalInput() {
    return this._heartbeatInterval;
  }

  // heartbeat_type - computed: false, optional: true, required: false
  private _heartbeatType?: string; 
  public get heartbeatType() {
    return this.getStringAttribute('heartbeat_type');
  }
  public set heartbeatType(value: string) {
    this._heartbeatType = value;
  }
  public resetHeartbeatType() {
    this._heartbeatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatTypeInput() {
    return this._heartbeatType;
  }

  // ignore_network_errors_at_startup - computed: false, optional: true, required: false
  private _ignoreNetworkErrorsAtStartup?: boolean | cdktf.IResolvable; 
  public get ignoreNetworkErrorsAtStartup() {
    return this.getBooleanAttribute('ignore_network_errors_at_startup');
  }
  public set ignoreNetworkErrorsAtStartup(value: boolean | cdktf.IResolvable) {
    this._ignoreNetworkErrorsAtStartup = value;
  }
  public resetIgnoreNetworkErrorsAtStartup() {
    this._ignoreNetworkErrorsAtStartup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNetworkErrorsAtStartupInput() {
    return this._ignoreNetworkErrorsAtStartup;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: boolean | cdktf.IResolvable; 
  public get keepalive() {
    return this.getBooleanAttribute('keepalive');
  }
  public set keepalive(value: boolean | cdktf.IResolvable) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: string; 
  public get keepaliveTimeout() {
    return this.getStringAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: string) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }

  // phi_failure_detector - computed: false, optional: true, required: false
  private _phiFailureDetector?: boolean | cdktf.IResolvable; 
  public get phiFailureDetector() {
    return this.getBooleanAttribute('phi_failure_detector');
  }
  public set phiFailureDetector(value: boolean | cdktf.IResolvable) {
    this._phiFailureDetector = value;
  }
  public resetPhiFailureDetector() {
    this._phiFailureDetector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phiFailureDetectorInput() {
    return this._phiFailureDetector;
  }

  // phi_threshold - computed: false, optional: true, required: false
  private _phiThreshold?: number; 
  public get phiThreshold() {
    return this.getNumberAttribute('phi_threshold');
  }
  public set phiThreshold(value: number) {
    this._phiThreshold = value;
  }
  public resetPhiThreshold() {
    this._phiThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phiThresholdInput() {
    return this._phiThreshold;
  }

  // recover_wait - computed: false, optional: true, required: false
  private _recoverWait?: string; 
  public get recoverWait() {
    return this.getStringAttribute('recover_wait');
  }
  public set recoverWait(value: string) {
    this._recoverWait = value;
  }
  public resetRecoverWait() {
    this._recoverWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverWaitInput() {
    return this._recoverWait;
  }

  // require_ack_response - computed: false, optional: true, required: false
  private _requireAckResponse?: boolean | cdktf.IResolvable; 
  public get requireAckResponse() {
    return this.getBooleanAttribute('require_ack_response');
  }
  public set requireAckResponse(value: boolean | cdktf.IResolvable) {
    this._requireAckResponse = value;
  }
  public resetRequireAckResponse() {
    this._requireAckResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAckResponseInput() {
    return this._requireAckResponse;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // send_timeout - computed: false, optional: true, required: false
  private _sendTimeout?: string; 
  public get sendTimeout() {
    return this.getStringAttribute('send_timeout');
  }
  public set sendTimeout(value: string) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // servers - computed: false, optional: false, required: true
  private _servers = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscoveryOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardServiceDiscovery) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }

  // tls_allow_self_signed_cert - computed: false, optional: true, required: false
  private _tlsAllowSelfSignedCert?: boolean | cdktf.IResolvable; 
  public get tlsAllowSelfSignedCert() {
    return this.getBooleanAttribute('tls_allow_self_signed_cert');
  }
  public set tlsAllowSelfSignedCert(value: boolean | cdktf.IResolvable) {
    this._tlsAllowSelfSignedCert = value;
  }
  public resetTlsAllowSelfSignedCert() {
    this._tlsAllowSelfSignedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAllowSelfSignedCertInput() {
    return this._tlsAllowSelfSignedCert;
  }

  // tls_cert_logical_store_name - computed: false, optional: true, required: false
  private _tlsCertLogicalStoreName?: string; 
  public get tlsCertLogicalStoreName() {
    return this.getStringAttribute('tls_cert_logical_store_name');
  }
  public set tlsCertLogicalStoreName(value: string) {
    this._tlsCertLogicalStoreName = value;
  }
  public resetTlsCertLogicalStoreName() {
    this._tlsCertLogicalStoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertLogicalStoreNameInput() {
    return this._tlsCertLogicalStoreName;
  }

  // tls_cert_path - computed: false, optional: true, required: false
  private _tlsCertPath?: string; 
  public get tlsCertPath() {
    return this.getStringAttribute('tls_cert_path');
  }
  public set tlsCertPath(value: string) {
    this._tlsCertPath = value;
  }
  public resetTlsCertPath() {
    this._tlsCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertPathInput() {
    return this._tlsCertPath;
  }

  // tls_cert_thumbprint - computed: false, optional: true, required: false
  private _tlsCertThumbprint?: string; 
  public get tlsCertThumbprint() {
    return this.getStringAttribute('tls_cert_thumbprint');
  }
  public set tlsCertThumbprint(value: string) {
    this._tlsCertThumbprint = value;
  }
  public resetTlsCertThumbprint() {
    this._tlsCertThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertThumbprintInput() {
    return this._tlsCertThumbprint;
  }

  // tls_cert_use_enterprise_store - computed: false, optional: true, required: false
  private _tlsCertUseEnterpriseStore?: boolean | cdktf.IResolvable; 
  public get tlsCertUseEnterpriseStore() {
    return this.getBooleanAttribute('tls_cert_use_enterprise_store');
  }
  public set tlsCertUseEnterpriseStore(value: boolean | cdktf.IResolvable) {
    this._tlsCertUseEnterpriseStore = value;
  }
  public resetTlsCertUseEnterpriseStore() {
    this._tlsCertUseEnterpriseStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertUseEnterpriseStoreInput() {
    return this._tlsCertUseEnterpriseStore;
  }

  // tls_ciphers - computed: false, optional: true, required: false
  private _tlsCiphers?: string; 
  public get tlsCiphers() {
    return this.getStringAttribute('tls_ciphers');
  }
  public set tlsCiphers(value: string) {
    this._tlsCiphers = value;
  }
  public resetTlsCiphers() {
    this._tlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersInput() {
    return this._tlsCiphers;
  }

  // tls_client_cert_path - computed: false, optional: true, required: false
  private _tlsClientCertPath?: string; 
  public get tlsClientCertPath() {
    return this.getStringAttribute('tls_client_cert_path');
  }
  public set tlsClientCertPath(value: string) {
    this._tlsClientCertPath = value;
  }
  public resetTlsClientCertPath() {
    this._tlsClientCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertPathInput() {
    return this._tlsClientCertPath;
  }

  // tls_client_private_key_passphrase - computed: false, optional: true, required: false
  private _tlsClientPrivateKeyPassphrase?: string; 
  public get tlsClientPrivateKeyPassphrase() {
    return this.getStringAttribute('tls_client_private_key_passphrase');
  }
  public set tlsClientPrivateKeyPassphrase(value: string) {
    this._tlsClientPrivateKeyPassphrase = value;
  }
  public resetTlsClientPrivateKeyPassphrase() {
    this._tlsClientPrivateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientPrivateKeyPassphraseInput() {
    return this._tlsClientPrivateKeyPassphrase;
  }

  // tls_client_private_key_path - computed: false, optional: true, required: false
  private _tlsClientPrivateKeyPath?: string; 
  public get tlsClientPrivateKeyPath() {
    return this.getStringAttribute('tls_client_private_key_path');
  }
  public set tlsClientPrivateKeyPath(value: string) {
    this._tlsClientPrivateKeyPath = value;
  }
  public resetTlsClientPrivateKeyPath() {
    this._tlsClientPrivateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientPrivateKeyPathInput() {
    return this._tlsClientPrivateKeyPath;
  }

  // tls_insecure_mode - computed: false, optional: true, required: false
  private _tlsInsecureMode?: boolean | cdktf.IResolvable; 
  public get tlsInsecureMode() {
    return this.getBooleanAttribute('tls_insecure_mode');
  }
  public set tlsInsecureMode(value: boolean | cdktf.IResolvable) {
    this._tlsInsecureMode = value;
  }
  public resetTlsInsecureMode() {
    this._tlsInsecureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureModeInput() {
    return this._tlsInsecureMode;
  }

  // tls_verify_hostname - computed: false, optional: true, required: false
  private _tlsVerifyHostname?: boolean | cdktf.IResolvable; 
  public get tlsVerifyHostname() {
    return this.getBooleanAttribute('tls_verify_hostname');
  }
  public set tlsVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._tlsVerifyHostname = value;
  }
  public resetTlsVerifyHostname() {
    this._tlsVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyHostnameInput() {
    return this._tlsVerifyHostname;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }

  // verify_connection_at_startup - computed: false, optional: true, required: false
  private _verifyConnectionAtStartup?: boolean | cdktf.IResolvable; 
  public get verifyConnectionAtStartup() {
    return this.getBooleanAttribute('verify_connection_at_startup');
  }
  public set verifyConnectionAtStartup(value: boolean | cdktf.IResolvable) {
    this._verifyConnectionAtStartup = value;
  }
  public resetVerifyConnectionAtStartup() {
    this._verifyConnectionAtStartup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionAtStartupInput() {
    return this._verifyConnectionAtStartup;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsername {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuth {
  /**
  * The method for HTTP authentication. Now only basic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#auth DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#auth}
  */
  readonly auth?: string;
  /**
  * The password for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPassword;
  /**
  * The username for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#username DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#username}
  */
  readonly username?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsername;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordToTerraform(struct!.password),
    username: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPassword",
    },
    username: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth = value.auth;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttp {
  /**
  * Auth section for this plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#auth DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuth;
  /**
  * ContentType defines Content-Type for HTTP request. out_http automatically set Content-Type for built-in formatters when this parameter is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#content_type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Endpoint defines the endpoint for HTTP request. If you want to use HTTPS, use https prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#endpoint DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Raise UnrecoverableError when the response code is not SUCCESS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#error_response_as_unrecoverable DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#error_response_as_unrecoverable}
  */
  readonly errorResponseAsUnrecoverable?: boolean | cdktf.IResolvable;
  /**
  * Headers defines the additional headers for HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#headers DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#headers}
  */
  readonly headers?: string;
  /**
  * Additional placeholder based headers for HTTP request. If you want to use tag or record field, use this parameter instead of headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#headers_from_placeholders DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#headers_from_placeholders}
  */
  readonly headersFromPlaceholders?: string;
  /**
  * HttpMethod defines the method for HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#http_method DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#http_method}
  */
  readonly httpMethod?: string;
  /**
  * JsonArray defines whether to use the array format of JSON or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#json_array DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#json_array}
  */
  readonly jsonArray?: boolean | cdktf.IResolvable;
  /**
  * OpenTimeout defines the connection open timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#open_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#open_timeout}
  */
  readonly openTimeout?: number;
  /**
  * Proxy defines the proxy for HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#proxy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#proxy}
  */
  readonly proxy?: string;
  /**
  * ReadTimeout defines the read timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#read_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * The list of retryable response codes. If the response code is included in this list, out_http retries the buffer flush.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#retryable_response_codes DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#retryable_response_codes}
  */
  readonly retryableResponseCodes?: string;
  /**
  * SslTimeout defines the TLS timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ssl_timeout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ssl_timeout}
  */
  readonly sslTimeout?: number;
  /**
  * TlsCaCertPath defines the CA certificate path for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_ca_cert_path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_ca_cert_path}
  */
  readonly tlsCaCertPath?: string;
  /**
  * TlsCiphers defines the cipher suites configuration of TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_ciphers DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_ciphers}
  */
  readonly tlsCiphers?: string;
  /**
  * TlsClientCertPath defines the client certificate path for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_client_cert_path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_client_cert_path}
  */
  readonly tlsClientCertPath?: string;
  /**
  * TlsPrivateKeyPassphrase defines the client private key passphrase for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_private_key_passphrase DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_private_key_passphrase}
  */
  readonly tlsPrivateKeyPassphrase?: string;
  /**
  * TlsPrivateKeyPath defines the client private key path for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_private_key_path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_private_key_path}
  */
  readonly tlsPrivateKeyPath?: string;
  /**
  * TlsVerifyMode defines the verify mode of TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_verify_mode DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_verify_mode}
  */
  readonly tlsVerifyMode?: string;
  /**
  * TlsVersion defines the default version of TLS transport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_version DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_version}
  */
  readonly tlsVersion?: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthToTerraform(struct!.auth),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    error_response_as_unrecoverable: cdktf.booleanToTerraform(struct!.errorResponseAsUnrecoverable),
    headers: cdktf.stringToTerraform(struct!.headers),
    headers_from_placeholders: cdktf.stringToTerraform(struct!.headersFromPlaceholders),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    json_array: cdktf.booleanToTerraform(struct!.jsonArray),
    open_timeout: cdktf.numberToTerraform(struct!.openTimeout),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    retryable_response_codes: cdktf.stringToTerraform(struct!.retryableResponseCodes),
    ssl_timeout: cdktf.numberToTerraform(struct!.sslTimeout),
    tls_ca_cert_path: cdktf.stringToTerraform(struct!.tlsCaCertPath),
    tls_ciphers: cdktf.stringToTerraform(struct!.tlsCiphers),
    tls_client_cert_path: cdktf.stringToTerraform(struct!.tlsClientCertPath),
    tls_private_key_passphrase: cdktf.stringToTerraform(struct!.tlsPrivateKeyPassphrase),
    tls_private_key_path: cdktf.stringToTerraform(struct!.tlsPrivateKeyPath),
    tls_verify_mode: cdktf.stringToTerraform(struct!.tlsVerifyMode),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuth",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_response_as_unrecoverable: {
      value: cdktf.booleanToHclTerraform(struct!.errorResponseAsUnrecoverable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.stringToHclTerraform(struct!.headers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers_from_placeholders: {
      value: cdktf.stringToHclTerraform(struct!.headersFromPlaceholders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_array: {
      value: cdktf.booleanToHclTerraform(struct!.jsonArray),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_timeout: {
      value: cdktf.numberToHclTerraform(struct!.openTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retryable_response_codes: {
      value: cdktf.stringToHclTerraform(struct!.retryableResponseCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sslTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_ca_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ciphers: {
      value: cdktf.stringToHclTerraform(struct!.tlsCiphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.tlsPrivateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.tlsPrivateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_verify_mode: {
      value: cdktf.stringToHclTerraform(struct!.tlsVerifyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._errorResponseAsUnrecoverable !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseAsUnrecoverable = this._errorResponseAsUnrecoverable;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._headersFromPlaceholders !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersFromPlaceholders = this._headersFromPlaceholders;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._jsonArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonArray = this._jsonArray;
    }
    if (this._openTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTimeout = this._openTimeout;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._retryableResponseCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryableResponseCodes = this._retryableResponseCodes;
    }
    if (this._sslTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTimeout = this._sslTimeout;
    }
    if (this._tlsCaCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCertPath = this._tlsCaCertPath;
    }
    if (this._tlsCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCiphers = this._tlsCiphers;
    }
    if (this._tlsClientCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCertPath = this._tlsClientCertPath;
    }
    if (this._tlsPrivateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPrivateKeyPassphrase = this._tlsPrivateKeyPassphrase;
    }
    if (this._tlsPrivateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPrivateKeyPath = this._tlsPrivateKeyPath;
    }
    if (this._tlsVerifyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerifyMode = this._tlsVerifyMode;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._contentType = undefined;
      this._endpoint = undefined;
      this._errorResponseAsUnrecoverable = undefined;
      this._headers = undefined;
      this._headersFromPlaceholders = undefined;
      this._httpMethod = undefined;
      this._jsonArray = undefined;
      this._openTimeout = undefined;
      this._proxy = undefined;
      this._readTimeout = undefined;
      this._retryableResponseCodes = undefined;
      this._sslTimeout = undefined;
      this._tlsCaCertPath = undefined;
      this._tlsCiphers = undefined;
      this._tlsClientCertPath = undefined;
      this._tlsPrivateKeyPassphrase = undefined;
      this._tlsPrivateKeyPath = undefined;
      this._tlsVerifyMode = undefined;
      this._tlsVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._contentType = value.contentType;
      this._endpoint = value.endpoint;
      this._errorResponseAsUnrecoverable = value.errorResponseAsUnrecoverable;
      this._headers = value.headers;
      this._headersFromPlaceholders = value.headersFromPlaceholders;
      this._httpMethod = value.httpMethod;
      this._jsonArray = value.jsonArray;
      this._openTimeout = value.openTimeout;
      this._proxy = value.proxy;
      this._readTimeout = value.readTimeout;
      this._retryableResponseCodes = value.retryableResponseCodes;
      this._sslTimeout = value.sslTimeout;
      this._tlsCaCertPath = value.tlsCaCertPath;
      this._tlsCiphers = value.tlsCiphers;
      this._tlsClientCertPath = value.tlsClientCertPath;
      this._tlsPrivateKeyPassphrase = value.tlsPrivateKeyPassphrase;
      this._tlsPrivateKeyPath = value.tlsPrivateKeyPath;
      this._tlsVerifyMode = value.tlsVerifyMode;
      this._tlsVersion = value.tlsVersion;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // error_response_as_unrecoverable - computed: false, optional: true, required: false
  private _errorResponseAsUnrecoverable?: boolean | cdktf.IResolvable; 
  public get errorResponseAsUnrecoverable() {
    return this.getBooleanAttribute('error_response_as_unrecoverable');
  }
  public set errorResponseAsUnrecoverable(value: boolean | cdktf.IResolvable) {
    this._errorResponseAsUnrecoverable = value;
  }
  public resetErrorResponseAsUnrecoverable() {
    this._errorResponseAsUnrecoverable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseAsUnrecoverableInput() {
    return this._errorResponseAsUnrecoverable;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // headers_from_placeholders - computed: false, optional: true, required: false
  private _headersFromPlaceholders?: string; 
  public get headersFromPlaceholders() {
    return this.getStringAttribute('headers_from_placeholders');
  }
  public set headersFromPlaceholders(value: string) {
    this._headersFromPlaceholders = value;
  }
  public resetHeadersFromPlaceholders() {
    this._headersFromPlaceholders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersFromPlaceholdersInput() {
    return this._headersFromPlaceholders;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // json_array - computed: false, optional: true, required: false
  private _jsonArray?: boolean | cdktf.IResolvable; 
  public get jsonArray() {
    return this.getBooleanAttribute('json_array');
  }
  public set jsonArray(value: boolean | cdktf.IResolvable) {
    this._jsonArray = value;
  }
  public resetJsonArray() {
    this._jsonArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonArrayInput() {
    return this._jsonArray;
  }

  // open_timeout - computed: false, optional: true, required: false
  private _openTimeout?: number; 
  public get openTimeout() {
    return this.getNumberAttribute('open_timeout');
  }
  public set openTimeout(value: number) {
    this._openTimeout = value;
  }
  public resetOpenTimeout() {
    this._openTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTimeoutInput() {
    return this._openTimeout;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // retryable_response_codes - computed: false, optional: true, required: false
  private _retryableResponseCodes?: string; 
  public get retryableResponseCodes() {
    return this.getStringAttribute('retryable_response_codes');
  }
  public set retryableResponseCodes(value: string) {
    this._retryableResponseCodes = value;
  }
  public resetRetryableResponseCodes() {
    this._retryableResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryableResponseCodesInput() {
    return this._retryableResponseCodes;
  }

  // ssl_timeout - computed: false, optional: true, required: false
  private _sslTimeout?: number; 
  public get sslTimeout() {
    return this.getNumberAttribute('ssl_timeout');
  }
  public set sslTimeout(value: number) {
    this._sslTimeout = value;
  }
  public resetSslTimeout() {
    this._sslTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTimeoutInput() {
    return this._sslTimeout;
  }

  // tls_ca_cert_path - computed: false, optional: true, required: false
  private _tlsCaCertPath?: string; 
  public get tlsCaCertPath() {
    return this.getStringAttribute('tls_ca_cert_path');
  }
  public set tlsCaCertPath(value: string) {
    this._tlsCaCertPath = value;
  }
  public resetTlsCaCertPath() {
    this._tlsCaCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertPathInput() {
    return this._tlsCaCertPath;
  }

  // tls_ciphers - computed: false, optional: true, required: false
  private _tlsCiphers?: string; 
  public get tlsCiphers() {
    return this.getStringAttribute('tls_ciphers');
  }
  public set tlsCiphers(value: string) {
    this._tlsCiphers = value;
  }
  public resetTlsCiphers() {
    this._tlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersInput() {
    return this._tlsCiphers;
  }

  // tls_client_cert_path - computed: false, optional: true, required: false
  private _tlsClientCertPath?: string; 
  public get tlsClientCertPath() {
    return this.getStringAttribute('tls_client_cert_path');
  }
  public set tlsClientCertPath(value: string) {
    this._tlsClientCertPath = value;
  }
  public resetTlsClientCertPath() {
    this._tlsClientCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertPathInput() {
    return this._tlsClientCertPath;
  }

  // tls_private_key_passphrase - computed: false, optional: true, required: false
  private _tlsPrivateKeyPassphrase?: string; 
  public get tlsPrivateKeyPassphrase() {
    return this.getStringAttribute('tls_private_key_passphrase');
  }
  public set tlsPrivateKeyPassphrase(value: string) {
    this._tlsPrivateKeyPassphrase = value;
  }
  public resetTlsPrivateKeyPassphrase() {
    this._tlsPrivateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPrivateKeyPassphraseInput() {
    return this._tlsPrivateKeyPassphrase;
  }

  // tls_private_key_path - computed: false, optional: true, required: false
  private _tlsPrivateKeyPath?: string; 
  public get tlsPrivateKeyPath() {
    return this.getStringAttribute('tls_private_key_path');
  }
  public set tlsPrivateKeyPath(value: string) {
    this._tlsPrivateKeyPath = value;
  }
  public resetTlsPrivateKeyPath() {
    this._tlsPrivateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPrivateKeyPathInput() {
    return this._tlsPrivateKeyPath;
  }

  // tls_verify_mode - computed: false, optional: true, required: false
  private _tlsVerifyMode?: string; 
  public get tlsVerifyMode() {
    return this.getStringAttribute('tls_verify_mode');
  }
  public set tlsVerifyMode(value: string) {
    this._tlsVerifyMode = value;
  }
  public resetTlsVerifyMode() {
    this._tlsVerifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyModeInput() {
    return this._tlsVerifyMode;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInline {
  /**
  * If true, uses local time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#localtime DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * Process value according to the specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Uses the specified time format as a fallback in the specified order. You can parse undetermined time format by using time_format_fallbacks. This options is enabled when time_type is mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_format_fallbacks DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_format_fallbacks}
  */
  readonly timeFormatFallbacks?: string;
  /**
  * parses/formats value according to this type, default is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_type DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Uses the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#timezone DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * If true, uses UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#utc DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInlineToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_format_fallbacks: cdktf.stringToTerraform(struct!.timeFormatFallbacks),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInlineToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_fallbacks: {
      value: cdktf.stringToHclTerraform(struct!.timeFormatFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeFormatFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatFallbacks = this._timeFormatFallbacks;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localtime = undefined;
      this._timeFormat = undefined;
      this._timeFormatFallbacks = undefined;
      this._timeType = undefined;
      this._timezone = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localtime = value.localtime;
      this._timeFormat = value.timeFormat;
      this._timeFormatFallbacks = value.timeFormatFallbacks;
      this._timeType = value.timeType;
      this._timezone = value.timezone;
      this._utc = value.utc;
    }
  }

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_format_fallbacks - computed: false, optional: true, required: false
  private _timeFormatFallbacks?: string; 
  public get timeFormatFallbacks() {
    return this.getStringAttribute('time_format_fallbacks');
  }
  public set timeFormatFallbacks(value: string) {
    this._timeFormatFallbacks = value;
  }
  public resetTimeFormatFallbacks() {
    this._timeFormatFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatFallbacksInput() {
    return this._timeFormatFallbacks;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInject {
  /**
  * Hostname value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#hostname DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * The field name to inject hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#hostname_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#hostname_key}
  */
  readonly hostnameKey?: string;
  /**
  * Time section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#inline DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInline;
  /**
  * The field name to inject tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tag_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tag_key}
  */
  readonly tagKey?: string;
  /**
  * The field name to inject time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * The field name to inject worker_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#worker_id_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#worker_id_key}
  */
  readonly workerIdKey?: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hostname_key: cdktf.stringToTerraform(struct!.hostnameKey),
    inline: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInlineToTerraform(struct!.inline),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    worker_id_key: cdktf.stringToTerraform(struct!.workerIdKey),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_key: {
      value: cdktf.stringToHclTerraform(struct!.hostnameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInline",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_id_key: {
      value: cdktf.stringToHclTerraform(struct!.workerIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hostnameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameKey = this._hostnameKey;
    }
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._workerIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerIdKey = this._workerIdKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._hostnameKey = undefined;
      this._inline.internalValue = undefined;
      this._tagKey = undefined;
      this._timeKey = undefined;
      this._workerIdKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._hostnameKey = value.hostnameKey;
      this._inline.internalValue = value.inline;
      this._tagKey = value.tagKey;
      this._timeKey = value.timeKey;
      this._workerIdKey = value.workerIdKey;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hostname_key - computed: false, optional: true, required: false
  private _hostnameKey?: string; 
  public get hostnameKey() {
    return this.getStringAttribute('hostname_key');
  }
  public set hostnameKey(value: string) {
    this._hostnameKey = value;
  }
  public resetHostnameKey() {
    this._hostnameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameKeyInput() {
    return this._hostnameKey;
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // worker_id_key - computed: false, optional: true, required: false
  private _workerIdKey?: string; 
  public get workerIdKey() {
    return this.getStringAttribute('worker_id_key');
  }
  public set workerIdKey(value: string) {
    this._workerIdKey = value;
  }
  public resetWorkerIdKey() {
    this._workerIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerIdKeyInput() {
    return this._workerIdKey;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafka {
  /**
  * The list of all seed brokers, with their host and port information. Default: localhost:9092
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#brokers DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#brokers}
  */
  readonly brokers?: string;
  /**
  * The codec the producer uses to compress messages (default: nil).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#compression_codec DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#compression_codec}
  */
  readonly compressionCodec?: string;
  /**
  * The name of the default topic. (default: nil)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#default_topic DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#default_topic}
  */
  readonly defaultTopic?: string;
  /**
  * The number of acks required per request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#required_acks DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#required_acks}
  */
  readonly requiredAcks?: number;
  /**
  * The field name for the target topic. If the field value is app, this plugin writes events to the app topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#topic_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#topic_key}
  */
  readonly topicKey?: string;
  /**
  * Set fluentd event time to Kafka's CreateTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#use_event_time DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#use_event_time}
  */
  readonly useEventTime?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafkaToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brokers: cdktf.stringToTerraform(struct!.brokers),
    compression_codec: cdktf.stringToTerraform(struct!.compressionCodec),
    default_topic: cdktf.stringToTerraform(struct!.defaultTopic),
    required_acks: cdktf.numberToTerraform(struct!.requiredAcks),
    topic_key: cdktf.stringToTerraform(struct!.topicKey),
    use_event_time: cdktf.booleanToTerraform(struct!.useEventTime),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafkaToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brokers: {
      value: cdktf.stringToHclTerraform(struct!.brokers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_codec: {
      value: cdktf.stringToHclTerraform(struct!.compressionCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_topic: {
      value: cdktf.stringToHclTerraform(struct!.defaultTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_acks: {
      value: cdktf.numberToHclTerraform(struct!.requiredAcks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic_key: {
      value: cdktf.stringToHclTerraform(struct!.topicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_event_time: {
      value: cdktf.booleanToHclTerraform(struct!.useEventTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokers !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokers = this._brokers;
    }
    if (this._compressionCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionCodec = this._compressionCodec;
    }
    if (this._defaultTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTopic = this._defaultTopic;
    }
    if (this._requiredAcks !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAcks = this._requiredAcks;
    }
    if (this._topicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicKey = this._topicKey;
    }
    if (this._useEventTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEventTime = this._useEventTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokers = undefined;
      this._compressionCodec = undefined;
      this._defaultTopic = undefined;
      this._requiredAcks = undefined;
      this._topicKey = undefined;
      this._useEventTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokers = value.brokers;
      this._compressionCodec = value.compressionCodec;
      this._defaultTopic = value.defaultTopic;
      this._requiredAcks = value.requiredAcks;
      this._topicKey = value.topicKey;
      this._useEventTime = value.useEventTime;
    }
  }

  // brokers - computed: false, optional: true, required: false
  private _brokers?: string; 
  public get brokers() {
    return this.getStringAttribute('brokers');
  }
  public set brokers(value: string) {
    this._brokers = value;
  }
  public resetBrokers() {
    this._brokers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersInput() {
    return this._brokers;
  }

  // compression_codec - computed: false, optional: true, required: false
  private _compressionCodec?: string; 
  public get compressionCodec() {
    return this.getStringAttribute('compression_codec');
  }
  public set compressionCodec(value: string) {
    this._compressionCodec = value;
  }
  public resetCompressionCodec() {
    this._compressionCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCodecInput() {
    return this._compressionCodec;
  }

  // default_topic - computed: false, optional: true, required: false
  private _defaultTopic?: string; 
  public get defaultTopic() {
    return this.getStringAttribute('default_topic');
  }
  public set defaultTopic(value: string) {
    this._defaultTopic = value;
  }
  public resetDefaultTopic() {
    this._defaultTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTopicInput() {
    return this._defaultTopic;
  }

  // required_acks - computed: false, optional: true, required: false
  private _requiredAcks?: number; 
  public get requiredAcks() {
    return this.getNumberAttribute('required_acks');
  }
  public set requiredAcks(value: number) {
    this._requiredAcks = value;
  }
  public resetRequiredAcks() {
    this._requiredAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAcksInput() {
    return this._requiredAcks;
  }

  // topic_key - computed: false, optional: true, required: false
  private _topicKey?: string; 
  public get topicKey() {
    return this.getStringAttribute('topic_key');
  }
  public set topicKey(value: string) {
    this._topicKey = value;
  }
  public resetTopicKey() {
    this._topicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicKeyInput() {
    return this._topicKey;
  }

  // use_event_time - computed: false, optional: true, required: false
  private _useEventTime?: boolean | cdktf.IResolvable; 
  public get useEventTime() {
    return this.getBooleanAttribute('use_event_time');
  }
  public set useEventTime(value: boolean | cdktf.IResolvable) {
    this._useEventTime = value;
  }
  public resetUseEventTime() {
    this._useEventTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEventTimeInput() {
    return this._useEventTime;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUser {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantId {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLoki {
  /**
  * Set path to file with bearer authentication token Can be used as alterntative to HTTP basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#bearer_token_file DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * If a record only has 1 key, then just set the log line to the value and discard the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#drop_single_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#drop_single_key}
  */
  readonly dropSingleKey?: boolean | cdktf.IResolvable;
  /**
  * If set to true, it will add all Kubernetes labels to the Stream labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#extract_kubernetes_labels DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#extract_kubernetes_labels}
  */
  readonly extractKubernetesLabels?: boolean | cdktf.IResolvable;
  /**
  * Password for user defined in HTTP_User Set HTTP basic authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#http_password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#http_password}
  */
  readonly httpPassword?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPassword;
  /**
  * Set HTTP basic authentication user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#http_user DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#http_user}
  */
  readonly httpUser?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUser;
  /**
  * Whether or not to include the fluentd_thread label when multiple threads are used for flushing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#include_thread_label DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#include_thread_label}
  */
  readonly includeThreadLabel?: boolean | cdktf.IResolvable;
  /**
  * Disable certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#insecure DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Optional list of record keys that will be placed as stream labels. This configuration property is for records key only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#label_keys DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#label_keys}
  */
  readonly labelKeys?: string[];
  /**
  * Stream labels for API request. It can be multiple comma separated of strings specifying key=value pairs. In addition to fixed parameters, it also allows to add custom record keys (similar to label_keys property).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#labels DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#labels}
  */
  readonly labels?: string[];
  /**
  * Format to use when flattening the record to a log line. Valid values are json or key_value. If set to json, the log line sent to Loki will be the Fluentd record dumped as JSON. If set to key_value, the log line will be each item in the record concatenated together (separated by a single space) in the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#line_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#line_format}
  */
  readonly lineFormat?: string;
  /**
  * Optional list of record keys that will be removed from stream labels. This configuration property is for records key only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#remove_keys DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#remove_keys}
  */
  readonly removeKeys?: string[];
  /**
  * Tenant ID used by default to push logs to Loki. If omitted or empty it assumes Loki is running in single-tenant mode and no X-Scope-OrgID header is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tenant_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tenant_id}
  */
  readonly tenantId?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantId;
  /**
  * TlsCaCert defines the CA certificate file for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_ca_cert_file DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_ca_cert_file}
  */
  readonly tlsCaCertFile?: string;
  /**
  * TlsClientCert defines the client certificate file for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_client_cert_file DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_client_cert_file}
  */
  readonly tlsClientCertFile?: string;
  /**
  * TlsPrivateKey defines the client private key file for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tls_private_key_file DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tls_private_key_file}
  */
  readonly tlsPrivateKeyFile?: string;
  /**
  * Loki URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#url DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    drop_single_key: cdktf.booleanToTerraform(struct!.dropSingleKey),
    extract_kubernetes_labels: cdktf.booleanToTerraform(struct!.extractKubernetesLabels),
    http_password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordToTerraform(struct!.httpPassword),
    http_user: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserToTerraform(struct!.httpUser),
    include_thread_label: cdktf.booleanToTerraform(struct!.includeThreadLabel),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelKeys),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    line_format: cdktf.stringToTerraform(struct!.lineFormat),
    remove_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeKeys),
    tenant_id: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdToTerraform(struct!.tenantId),
    tls_ca_cert_file: cdktf.stringToTerraform(struct!.tlsCaCertFile),
    tls_client_cert_file: cdktf.stringToTerraform(struct!.tlsClientCertFile),
    tls_private_key_file: cdktf.stringToTerraform(struct!.tlsPrivateKeyFile),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_single_key: {
      value: cdktf.booleanToHclTerraform(struct!.dropSingleKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extract_kubernetes_labels: {
      value: cdktf.booleanToHclTerraform(struct!.extractKubernetesLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordToHclTerraform(struct!.httpPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPassword",
    },
    http_user: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserToHclTerraform(struct!.httpUser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUser",
    },
    include_thread_label: {
      value: cdktf.booleanToHclTerraform(struct!.includeThreadLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    line_format: {
      value: cdktf.stringToHclTerraform(struct!.lineFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenant_id: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdToHclTerraform(struct!.tenantId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantId",
    },
    tls_ca_cert_file: {
      value: cdktf.stringToHclTerraform(struct!.tlsCaCertFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert_file: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCertFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_private_key_file: {
      value: cdktf.stringToHclTerraform(struct!.tlsPrivateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._dropSingleKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropSingleKey = this._dropSingleKey;
    }
    if (this._extractKubernetesLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractKubernetesLabels = this._extractKubernetesLabels;
    }
    if (this._httpPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPassword = this._httpPassword?.internalValue;
    }
    if (this._httpUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUser = this._httpUser?.internalValue;
    }
    if (this._includeThreadLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeThreadLabel = this._includeThreadLabel;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._labelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelKeys = this._labelKeys;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._lineFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineFormat = this._lineFormat;
    }
    if (this._removeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeys = this._removeKeys;
    }
    if (this._tenantId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId?.internalValue;
    }
    if (this._tlsCaCertFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCaCertFile = this._tlsCaCertFile;
    }
    if (this._tlsClientCertFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCertFile = this._tlsClientCertFile;
    }
    if (this._tlsPrivateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPrivateKeyFile = this._tlsPrivateKeyFile;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearerTokenFile = undefined;
      this._dropSingleKey = undefined;
      this._extractKubernetesLabels = undefined;
      this._httpPassword.internalValue = undefined;
      this._httpUser.internalValue = undefined;
      this._includeThreadLabel = undefined;
      this._insecure = undefined;
      this._labelKeys = undefined;
      this._labels = undefined;
      this._lineFormat = undefined;
      this._removeKeys = undefined;
      this._tenantId.internalValue = undefined;
      this._tlsCaCertFile = undefined;
      this._tlsClientCertFile = undefined;
      this._tlsPrivateKeyFile = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearerTokenFile = value.bearerTokenFile;
      this._dropSingleKey = value.dropSingleKey;
      this._extractKubernetesLabels = value.extractKubernetesLabels;
      this._httpPassword.internalValue = value.httpPassword;
      this._httpUser.internalValue = value.httpUser;
      this._includeThreadLabel = value.includeThreadLabel;
      this._insecure = value.insecure;
      this._labelKeys = value.labelKeys;
      this._labels = value.labels;
      this._lineFormat = value.lineFormat;
      this._removeKeys = value.removeKeys;
      this._tenantId.internalValue = value.tenantId;
      this._tlsCaCertFile = value.tlsCaCertFile;
      this._tlsClientCertFile = value.tlsClientCertFile;
      this._tlsPrivateKeyFile = value.tlsPrivateKeyFile;
      this._url = value.url;
    }
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // drop_single_key - computed: false, optional: true, required: false
  private _dropSingleKey?: boolean | cdktf.IResolvable; 
  public get dropSingleKey() {
    return this.getBooleanAttribute('drop_single_key');
  }
  public set dropSingleKey(value: boolean | cdktf.IResolvable) {
    this._dropSingleKey = value;
  }
  public resetDropSingleKey() {
    this._dropSingleKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropSingleKeyInput() {
    return this._dropSingleKey;
  }

  // extract_kubernetes_labels - computed: false, optional: true, required: false
  private _extractKubernetesLabels?: boolean | cdktf.IResolvable; 
  public get extractKubernetesLabels() {
    return this.getBooleanAttribute('extract_kubernetes_labels');
  }
  public set extractKubernetesLabels(value: boolean | cdktf.IResolvable) {
    this._extractKubernetesLabels = value;
  }
  public resetExtractKubernetesLabels() {
    this._extractKubernetesLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractKubernetesLabelsInput() {
    return this._extractKubernetesLabels;
  }

  // http_password - computed: false, optional: true, required: false
  private _httpPassword = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPasswordOutputReference(this, "http_password");
  public get httpPassword() {
    return this._httpPassword;
  }
  public putHttpPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpPassword) {
    this._httpPassword.internalValue = value;
  }
  public resetHttpPassword() {
    this._httpPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordInput() {
    return this._httpPassword.internalValue;
  }

  // http_user - computed: false, optional: true, required: false
  private _httpUser = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUserOutputReference(this, "http_user");
  public get httpUser() {
    return this._httpUser;
  }
  public putHttpUser(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiHttpUser) {
    this._httpUser.internalValue = value;
  }
  public resetHttpUser() {
    this._httpUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUserInput() {
    return this._httpUser.internalValue;
  }

  // include_thread_label - computed: false, optional: true, required: false
  private _includeThreadLabel?: boolean | cdktf.IResolvable; 
  public get includeThreadLabel() {
    return this.getBooleanAttribute('include_thread_label');
  }
  public set includeThreadLabel(value: boolean | cdktf.IResolvable) {
    this._includeThreadLabel = value;
  }
  public resetIncludeThreadLabel() {
    this._includeThreadLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeThreadLabelInput() {
    return this._includeThreadLabel;
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

  // label_keys - computed: false, optional: true, required: false
  private _labelKeys?: string[]; 
  public get labelKeys() {
    return this.getListAttribute('label_keys');
  }
  public set labelKeys(value: string[]) {
    this._labelKeys = value;
  }
  public resetLabelKeys() {
    this._labelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelKeysInput() {
    return this._labelKeys;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // line_format - computed: false, optional: true, required: false
  private _lineFormat?: string; 
  public get lineFormat() {
    return this.getStringAttribute('line_format');
  }
  public set lineFormat(value: string) {
    this._lineFormat = value;
  }
  public resetLineFormat() {
    this._lineFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineFormatInput() {
    return this._lineFormat;
  }

  // remove_keys - computed: false, optional: true, required: false
  private _removeKeys?: string[]; 
  public get removeKeys() {
    return this.getListAttribute('remove_keys');
  }
  public set removeKeys(value: string[]) {
    this._removeKeys = value;
  }
  public resetRemoveKeys() {
    this._removeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeysInput() {
    return this._removeKeys;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantIdOutputReference(this, "tenant_id");
  public get tenantId() {
    return this._tenantId;
  }
  public putTenantId(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiTenantId) {
    this._tenantId.internalValue = value;
  }
  public resetTenantId() {
    this._tenantId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId.internalValue;
  }

  // tls_ca_cert_file - computed: false, optional: true, required: false
  private _tlsCaCertFile?: string; 
  public get tlsCaCertFile() {
    return this.getStringAttribute('tls_ca_cert_file');
  }
  public set tlsCaCertFile(value: string) {
    this._tlsCaCertFile = value;
  }
  public resetTlsCaCertFile() {
    this._tlsCaCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertFileInput() {
    return this._tlsCaCertFile;
  }

  // tls_client_cert_file - computed: false, optional: true, required: false
  private _tlsClientCertFile?: string; 
  public get tlsClientCertFile() {
    return this.getStringAttribute('tls_client_cert_file');
  }
  public set tlsClientCertFile(value: string) {
    this._tlsClientCertFile = value;
  }
  public resetTlsClientCertFile() {
    this._tlsClientCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertFileInput() {
    return this._tlsClientCertFile;
  }

  // tls_private_key_file - computed: false, optional: true, required: false
  private _tlsPrivateKeyFile?: string; 
  public get tlsPrivateKeyFile() {
    return this.getStringAttribute('tls_private_key_file');
  }
  public set tlsPrivateKeyFile(value: string) {
    this._tlsPrivateKeyFile = value;
  }
  public resetTlsPrivateKeyFile() {
    this._tlsPrivateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPrivateKeyFileInput() {
    return this._tlsPrivateKeyFile;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPassword {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#optional DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRefToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRefToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFrom {
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#secret_key_ref DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRef;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUser {
  /**
  * ValueSource defines how to find a value's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#value_from DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFrom;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_from: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_from: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearch {
  /**
  * The hostname of your Opensearch node (default: localhost).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#host DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Hosts defines a list of hosts if you want to connect to more than one Openearch nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#hosts DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#hosts}
  */
  readonly hosts?: string;
  /**
  * IndexName defines the placeholder syntax of Fluentd plugin API. See https://docs.fluentd.org/configuration/buffer-section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#index_name DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#index_name}
  */
  readonly indexName?: string;
  /**
  * If true, Fluentd uses the conventional index name format logstash-%Y.%m.%d (default: false). This option supersedes the index_name option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#logstash_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#logstash_format}
  */
  readonly logstashFormat?: boolean | cdktf.IResolvable;
  /**
  * LogstashPrefix defines the logstash prefix index name to write events when logstash_format is true (default: logstash).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#logstash_prefix DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#logstash_prefix}
  */
  readonly logstashPrefix?: string;
  /**
  * Optional, The login credentials to connect to Opensearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#password DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPassword;
  /**
  * Path defines the REST API endpoint of Opensearch to post write requests (default: nil).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The port number of your Opensearch node (default: 9200).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#port DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Specify https if your Opensearch endpoint supports SSL (default: http).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#scheme DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Optional, Force certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ssl_verify DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Optional, The login credentials to connect to Opensearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#user DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#user}
  */
  readonly user?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUser;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    hosts: cdktf.stringToTerraform(struct!.hosts),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    logstash_format: cdktf.booleanToTerraform(struct!.logstashFormat),
    logstash_prefix: cdktf.stringToTerraform(struct!.logstashPrefix),
    password: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordToTerraform(struct!.password),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    user: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserToTerraform(struct!.user),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.stringToHclTerraform(struct!.hosts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logstash_format: {
      value: cdktf.booleanToHclTerraform(struct!.logstashFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logstash_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logstashPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPassword",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._logstashFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstashFormat = this._logstashFormat;
    }
    if (this._logstashPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstashPrefix = this._logstashPrefix;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._hosts = undefined;
      this._indexName = undefined;
      this._logstashFormat = undefined;
      this._logstashPrefix = undefined;
      this._password.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._sslVerify = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._hosts = value.hosts;
      this._indexName = value.indexName;
      this._logstashFormat = value.logstashFormat;
      this._logstashPrefix = value.logstashPrefix;
      this._password.internalValue = value.password;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._sslVerify = value.sslVerify;
      this._user.internalValue = value.user;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string; 
  public get hosts() {
    return this.getStringAttribute('hosts');
  }
  public set hosts(value: string) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // logstash_format - computed: false, optional: true, required: false
  private _logstashFormat?: boolean | cdktf.IResolvable; 
  public get logstashFormat() {
    return this.getBooleanAttribute('logstash_format');
  }
  public set logstashFormat(value: boolean | cdktf.IResolvable) {
    this._logstashFormat = value;
  }
  public resetLogstashFormat() {
    this._logstashFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstashFormatInput() {
    return this._logstashFormat;
  }

  // logstash_prefix - computed: false, optional: true, required: false
  private _logstashPrefix?: string; 
  public get logstashPrefix() {
    return this.getStringAttribute('logstash_prefix');
  }
  public set logstashPrefix(value: string) {
    this._logstashPrefix = value;
  }
  public resetLogstashPrefix() {
    this._logstashPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstashPrefixInput() {
    return this._logstashPrefix;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // ssl_verify - computed: false, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3 {
  /**
  * The AWS access key id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_key_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_key_id}
  */
  readonly awsKeyId?: string;
  /**
  * The AWS secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#aws_sec_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#aws_sec_key}
  */
  readonly awsSecKey?: string;
  /**
  * This prevents AWS SDK from breaking endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#force_path_style DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#force_path_style}
  */
  readonly forcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * The path prefix of the files on S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#path DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#proxy_uri DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#proxy_uri}
  */
  readonly proxyUri?: string;
  /**
  * The Amazon S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#s3_bucket DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * The endpoint URL (like 'http://localhost:9000/')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#s3_endpoint DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#s3_endpoint}
  */
  readonly s3Endpoint?: string;
  /**
  * The actual S3 path. This is interpolated to the actual path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#s3_object_key_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#s3_object_key_format}
  */
  readonly s3ObjectKeyFormat?: string;
  /**
  * The Amazon S3 region name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#s3_region DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#s3_region}
  */
  readonly s3Region?: string;
  /**
  * The AWS KMS enctyption algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#sse_customer_algorithm DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#sse_customer_algorithm}
  */
  readonly sseCustomerAlgorithm?: string;
  /**
  * The AWS KMS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#sse_customer_key DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#sse_customer_key}
  */
  readonly sseCustomerKey?: string;
  /**
  * The AWS KMS key MD5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#sse_customer_key_md5 DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#sse_customer_key_md5}
  */
  readonly sseCustomerKeyMd5?: string;
  /**
  * The AWS KMS key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ssekms_key_id DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ssekms_key_id}
  */
  readonly ssekmsKeyId?: string;
  /**
  * Verify the SSL certificate of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#ssl_verify_peer DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#ssl_verify_peer}
  */
  readonly sslVerifyPeer?: boolean | cdktf.IResolvable;
  /**
  * The compression type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#store_as DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#store_as}
  */
  readonly storeAs?: string;
  /**
  * This timestamp is added to each file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#time_slice_format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#time_slice_format}
  */
  readonly timeSliceFormat?: string;
  /**
  * the following parameters are for S3 kms https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#use_server_side_encryption DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#use_server_side_encryption}
  */
  readonly useServerSideEncryption?: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3ToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_key_id: cdktf.stringToTerraform(struct!.awsKeyId),
    aws_sec_key: cdktf.stringToTerraform(struct!.awsSecKey),
    force_path_style: cdktf.booleanToTerraform(struct!.forcePathStyle),
    path: cdktf.stringToTerraform(struct!.path),
    proxy_uri: cdktf.stringToTerraform(struct!.proxyUri),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_endpoint: cdktf.stringToTerraform(struct!.s3Endpoint),
    s3_object_key_format: cdktf.stringToTerraform(struct!.s3ObjectKeyFormat),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    sse_customer_algorithm: cdktf.stringToTerraform(struct!.sseCustomerAlgorithm),
    sse_customer_key: cdktf.stringToTerraform(struct!.sseCustomerKey),
    sse_customer_key_md5: cdktf.stringToTerraform(struct!.sseCustomerKeyMd5),
    ssekms_key_id: cdktf.stringToTerraform(struct!.ssekmsKeyId),
    ssl_verify_peer: cdktf.booleanToTerraform(struct!.sslVerifyPeer),
    store_as: cdktf.stringToTerraform(struct!.storeAs),
    time_slice_format: cdktf.stringToTerraform(struct!.timeSliceFormat),
    use_server_side_encryption: cdktf.stringToTerraform(struct!.useServerSideEncryption),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3ToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sec_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.forcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_uri: {
      value: cdktf.stringToHclTerraform(struct!.proxyUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.s3Endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_key_format: {
      value: cdktf.stringToHclTerraform(struct!.s3ObjectKeyFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_customer_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseCustomerAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_customer_key: {
      value: cdktf.stringToHclTerraform(struct!.sseCustomerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_customer_key_md5: {
      value: cdktf.stringToHclTerraform(struct!.sseCustomerKeyMd5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssekms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.ssekmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_verify_peer: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerifyPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store_as: {
      value: cdktf.stringToHclTerraform(struct!.storeAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slice_format: {
      value: cdktf.stringToHclTerraform(struct!.timeSliceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_server_side_encryption: {
      value: cdktf.stringToHclTerraform(struct!.useServerSideEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKeyId = this._awsKeyId;
    }
    if (this._awsSecKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecKey = this._awsSecKey;
    }
    if (this._forcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePathStyle = this._forcePathStyle;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._proxyUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUri = this._proxyUri;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Endpoint = this._s3Endpoint;
    }
    if (this._s3ObjectKeyFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectKeyFormat = this._s3ObjectKeyFormat;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._sseCustomerAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseCustomerAlgorithm = this._sseCustomerAlgorithm;
    }
    if (this._sseCustomerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseCustomerKey = this._sseCustomerKey;
    }
    if (this._sseCustomerKeyMd5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseCustomerKeyMd5 = this._sseCustomerKeyMd5;
    }
    if (this._ssekmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssekmsKeyId = this._ssekmsKeyId;
    }
    if (this._sslVerifyPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerifyPeer = this._sslVerifyPeer;
    }
    if (this._storeAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeAs = this._storeAs;
    }
    if (this._timeSliceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSliceFormat = this._timeSliceFormat;
    }
    if (this._useServerSideEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerSideEncryption = this._useServerSideEncryption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsKeyId = undefined;
      this._awsSecKey = undefined;
      this._forcePathStyle = undefined;
      this._path = undefined;
      this._proxyUri = undefined;
      this._s3Bucket = undefined;
      this._s3Endpoint = undefined;
      this._s3ObjectKeyFormat = undefined;
      this._s3Region = undefined;
      this._sseCustomerAlgorithm = undefined;
      this._sseCustomerKey = undefined;
      this._sseCustomerKeyMd5 = undefined;
      this._ssekmsKeyId = undefined;
      this._sslVerifyPeer = undefined;
      this._storeAs = undefined;
      this._timeSliceFormat = undefined;
      this._useServerSideEncryption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsKeyId = value.awsKeyId;
      this._awsSecKey = value.awsSecKey;
      this._forcePathStyle = value.forcePathStyle;
      this._path = value.path;
      this._proxyUri = value.proxyUri;
      this._s3Bucket = value.s3Bucket;
      this._s3Endpoint = value.s3Endpoint;
      this._s3ObjectKeyFormat = value.s3ObjectKeyFormat;
      this._s3Region = value.s3Region;
      this._sseCustomerAlgorithm = value.sseCustomerAlgorithm;
      this._sseCustomerKey = value.sseCustomerKey;
      this._sseCustomerKeyMd5 = value.sseCustomerKeyMd5;
      this._ssekmsKeyId = value.ssekmsKeyId;
      this._sslVerifyPeer = value.sslVerifyPeer;
      this._storeAs = value.storeAs;
      this._timeSliceFormat = value.timeSliceFormat;
      this._useServerSideEncryption = value.useServerSideEncryption;
    }
  }

  // aws_key_id - computed: false, optional: true, required: false
  private _awsKeyId?: string; 
  public get awsKeyId() {
    return this.getStringAttribute('aws_key_id');
  }
  public set awsKeyId(value: string) {
    this._awsKeyId = value;
  }
  public resetAwsKeyId() {
    this._awsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKeyIdInput() {
    return this._awsKeyId;
  }

  // aws_sec_key - computed: false, optional: true, required: false
  private _awsSecKey?: string; 
  public get awsSecKey() {
    return this.getStringAttribute('aws_sec_key');
  }
  public set awsSecKey(value: string) {
    this._awsSecKey = value;
  }
  public resetAwsSecKey() {
    this._awsSecKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecKeyInput() {
    return this._awsSecKey;
  }

  // force_path_style - computed: false, optional: true, required: false
  private _forcePathStyle?: boolean | cdktf.IResolvable; 
  public get forcePathStyle() {
    return this.getBooleanAttribute('force_path_style');
  }
  public set forcePathStyle(value: boolean | cdktf.IResolvable) {
    this._forcePathStyle = value;
  }
  public resetForcePathStyle() {
    this._forcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePathStyleInput() {
    return this._forcePathStyle;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // proxy_uri - computed: false, optional: true, required: false
  private _proxyUri?: string; 
  public get proxyUri() {
    return this.getStringAttribute('proxy_uri');
  }
  public set proxyUri(value: string) {
    this._proxyUri = value;
  }
  public resetProxyUri() {
    this._proxyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUriInput() {
    return this._proxyUri;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_endpoint - computed: false, optional: true, required: false
  private _s3Endpoint?: string; 
  public get s3Endpoint() {
    return this.getStringAttribute('s3_endpoint');
  }
  public set s3Endpoint(value: string) {
    this._s3Endpoint = value;
  }
  public resetS3Endpoint() {
    this._s3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EndpointInput() {
    return this._s3Endpoint;
  }

  // s3_object_key_format - computed: false, optional: true, required: false
  private _s3ObjectKeyFormat?: string; 
  public get s3ObjectKeyFormat() {
    return this.getStringAttribute('s3_object_key_format');
  }
  public set s3ObjectKeyFormat(value: string) {
    this._s3ObjectKeyFormat = value;
  }
  public resetS3ObjectKeyFormat() {
    this._s3ObjectKeyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectKeyFormatInput() {
    return this._s3ObjectKeyFormat;
  }

  // s3_region - computed: false, optional: true, required: false
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  public resetS3Region() {
    this._s3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // sse_customer_algorithm - computed: false, optional: true, required: false
  private _sseCustomerAlgorithm?: string; 
  public get sseCustomerAlgorithm() {
    return this.getStringAttribute('sse_customer_algorithm');
  }
  public set sseCustomerAlgorithm(value: string) {
    this._sseCustomerAlgorithm = value;
  }
  public resetSseCustomerAlgorithm() {
    this._sseCustomerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseCustomerAlgorithmInput() {
    return this._sseCustomerAlgorithm;
  }

  // sse_customer_key - computed: false, optional: true, required: false
  private _sseCustomerKey?: string; 
  public get sseCustomerKey() {
    return this.getStringAttribute('sse_customer_key');
  }
  public set sseCustomerKey(value: string) {
    this._sseCustomerKey = value;
  }
  public resetSseCustomerKey() {
    this._sseCustomerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseCustomerKeyInput() {
    return this._sseCustomerKey;
  }

  // sse_customer_key_md5 - computed: false, optional: true, required: false
  private _sseCustomerKeyMd5?: string; 
  public get sseCustomerKeyMd5() {
    return this.getStringAttribute('sse_customer_key_md5');
  }
  public set sseCustomerKeyMd5(value: string) {
    this._sseCustomerKeyMd5 = value;
  }
  public resetSseCustomerKeyMd5() {
    this._sseCustomerKeyMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseCustomerKeyMd5Input() {
    return this._sseCustomerKeyMd5;
  }

  // ssekms_key_id - computed: false, optional: true, required: false
  private _ssekmsKeyId?: string; 
  public get ssekmsKeyId() {
    return this.getStringAttribute('ssekms_key_id');
  }
  public set ssekmsKeyId(value: string) {
    this._ssekmsKeyId = value;
  }
  public resetSsekmsKeyId() {
    this._ssekmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssekmsKeyIdInput() {
    return this._ssekmsKeyId;
  }

  // ssl_verify_peer - computed: false, optional: true, required: false
  private _sslVerifyPeer?: boolean | cdktf.IResolvable; 
  public get sslVerifyPeer() {
    return this.getBooleanAttribute('ssl_verify_peer');
  }
  public set sslVerifyPeer(value: boolean | cdktf.IResolvable) {
    this._sslVerifyPeer = value;
  }
  public resetSslVerifyPeer() {
    this._sslVerifyPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyPeerInput() {
    return this._sslVerifyPeer;
  }

  // store_as - computed: false, optional: true, required: false
  private _storeAs?: string; 
  public get storeAs() {
    return this.getStringAttribute('store_as');
  }
  public set storeAs(value: string) {
    this._storeAs = value;
  }
  public resetStoreAs() {
    this._storeAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeAsInput() {
    return this._storeAs;
  }

  // time_slice_format - computed: false, optional: true, required: false
  private _timeSliceFormat?: string; 
  public get timeSliceFormat() {
    return this.getStringAttribute('time_slice_format');
  }
  public set timeSliceFormat(value: string) {
    this._timeSliceFormat = value;
  }
  public resetTimeSliceFormat() {
    this._timeSliceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSliceFormatInput() {
    return this._timeSliceFormat;
  }

  // use_server_side_encryption - computed: false, optional: true, required: false
  private _useServerSideEncryption?: string; 
  public get useServerSideEncryption() {
    return this.getStringAttribute('use_server_side_encryption');
  }
  public set useServerSideEncryption(value: string) {
    this._useServerSideEncryption = value;
  }
  public resetUseServerSideEncryption() {
    this._useServerSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerSideEncryptionInput() {
    return this._useServerSideEncryption;
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputs {
  /**
  * buffer section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#buffer DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#buffer}
  */
  readonly buffer?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBuffer;
  /**
  * out_cloudwatch plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#cloud_watch DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#cloud_watch}
  */
  readonly cloudWatch?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatch;
  /**
  * copy plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#copy DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#copy}
  */
  readonly copy?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopy;
  /**
  * Custom plugin type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#custom_plugin DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#custom_plugin}
  */
  readonly customPlugin?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPlugin;
  /**
  * datadog plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#datadog DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#datadog}
  */
  readonly datadog?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadog;
  /**
  * out_es plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#elasticsearch DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#elasticsearch}
  */
  readonly elasticsearch?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearch;
  /**
  * out_es datastreams plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#elasticsearch_data_stream DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#elasticsearch_data_stream}
  */
  readonly elasticsearchDataStream?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStream;
  /**
  * format section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#format DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#format}
  */
  readonly format?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormat;
  /**
  * out_forward plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#forward DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#forward}
  */
  readonly forward?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForward;
  /**
  * out_http plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#http DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#http}
  */
  readonly http?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttp;
  /**
  * inject section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#inject DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#inject}
  */
  readonly inject?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInject;
  /**
  * out_kafka plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#kafka DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#kafka}
  */
  readonly kafka?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafka;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#log_level DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * out_loki plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#loki DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#loki}
  */
  readonly loki?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLoki;
  /**
  * out_opensearch plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#opensearch DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#opensearch}
  */
  readonly opensearch?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearch;
  /**
  * out_s3 plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#s3 DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#s3}
  */
  readonly s3?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3;
  /**
  * out_stdout plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#stdout DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#stdout}
  */
  readonly stdout?: { [key: string]: string };
  /**
  * Which tag to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#tag DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBufferToTerraform(struct!.buffer),
    cloud_watch: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchToTerraform(struct!.cloudWatch),
    copy: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopyToTerraform(struct!.copy),
    custom_plugin: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPluginToTerraform(struct!.customPlugin),
    datadog: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogToTerraform(struct!.datadog),
    elasticsearch: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchToTerraform(struct!.elasticsearch),
    elasticsearch_data_stream: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamToTerraform(struct!.elasticsearchDataStream),
    format: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormatToTerraform(struct!.format),
    forward: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardToTerraform(struct!.forward),
    http: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpToTerraform(struct!.http),
    inject: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectToTerraform(struct!.inject),
    kafka: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafkaToTerraform(struct!.kafka),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    loki: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiToTerraform(struct!.loki),
    opensearch: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchToTerraform(struct!.opensearch),
    s3: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3ToTerraform(struct!.s3),
    stdout: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.stdout),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBufferToHclTerraform(struct!.buffer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBuffer",
    },
    cloud_watch: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchToHclTerraform(struct!.cloudWatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatch",
    },
    copy: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopyToHclTerraform(struct!.copy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopy",
    },
    custom_plugin: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPluginToHclTerraform(struct!.customPlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPlugin",
    },
    datadog: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadog",
    },
    elasticsearch: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchToHclTerraform(struct!.elasticsearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearch",
    },
    elasticsearch_data_stream: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamToHclTerraform(struct!.elasticsearchDataStream),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStream",
    },
    format: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormat",
    },
    forward: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardToHclTerraform(struct!.forward),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForward",
    },
    http: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttp",
    },
    inject: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectToHclTerraform(struct!.inject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInject",
    },
    kafka: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafka",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loki: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiToHclTerraform(struct!.loki),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLoki",
    },
    opensearch: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchToHclTerraform(struct!.opensearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearch",
    },
    s3: {
      value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3",
    },
    stdout: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.stdout),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._cloudWatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatch = this._cloudWatch?.internalValue;
    }
    if (this._copy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copy = this._copy?.internalValue;
    }
    if (this._customPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPlugin = this._customPlugin?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._elasticsearchDataStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchDataStream = this._elasticsearchDataStream?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._inject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inject = this._inject?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._loki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loki = this._loki?.internalValue;
    }
    if (this._opensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._stdout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdout = this._stdout;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer.internalValue = undefined;
      this._cloudWatch.internalValue = undefined;
      this._copy.internalValue = undefined;
      this._customPlugin.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._elasticsearchDataStream.internalValue = undefined;
      this._format.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._http.internalValue = undefined;
      this._inject.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._logLevel = undefined;
      this._loki.internalValue = undefined;
      this._opensearch.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._stdout = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer.internalValue = value.buffer;
      this._cloudWatch.internalValue = value.cloudWatch;
      this._copy.internalValue = value.copy;
      this._customPlugin.internalValue = value.customPlugin;
      this._datadog.internalValue = value.datadog;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._elasticsearchDataStream.internalValue = value.elasticsearchDataStream;
      this._format.internalValue = value.format;
      this._forward.internalValue = value.forward;
      this._http.internalValue = value.http;
      this._inject.internalValue = value.inject;
      this._kafka.internalValue = value.kafka;
      this._logLevel = value.logLevel;
      this._loki.internalValue = value.loki;
      this._opensearch.internalValue = value.opensearch;
      this._s3.internalValue = value.s3;
      this._stdout = value.stdout;
      this._tag = value.tag;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBufferOutputReference(this, "buffer");
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsBuffer) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // cloud_watch - computed: false, optional: true, required: false
  private _cloudWatch = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatchOutputReference(this, "cloud_watch");
  public get cloudWatch() {
    return this._cloudWatch;
  }
  public putCloudWatch(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCloudWatch) {
    this._cloudWatch.internalValue = value;
  }
  public resetCloudWatch() {
    this._cloudWatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchInput() {
    return this._cloudWatch.internalValue;
  }

  // copy - computed: false, optional: true, required: false
  private _copy = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopyOutputReference(this, "copy");
  public get copy() {
    return this._copy;
  }
  public putCopy(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCopy) {
    this._copy.internalValue = value;
  }
  public resetCopy() {
    this._copy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyInput() {
    return this._copy.internalValue;
  }

  // custom_plugin - computed: false, optional: true, required: false
  private _customPlugin = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPluginOutputReference(this, "custom_plugin");
  public get customPlugin() {
    return this._customPlugin;
  }
  public putCustomPlugin(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsCustomPlugin) {
    this._customPlugin.internalValue = value;
  }
  public resetCustomPlugin() {
    this._customPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginInput() {
    return this._customPlugin.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // elasticsearch_data_stream - computed: false, optional: true, required: false
  private _elasticsearchDataStream = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStreamOutputReference(this, "elasticsearch_data_stream");
  public get elasticsearchDataStream() {
    return this._elasticsearchDataStream;
  }
  public putElasticsearchDataStream(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsElasticsearchDataStream) {
    this._elasticsearchDataStream.internalValue = value;
  }
  public resetElasticsearchDataStream() {
    this._elasticsearchDataStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchDataStreamInput() {
    return this._elasticsearchDataStream.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // inject - computed: false, optional: true, required: false
  private _inject = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInjectOutputReference(this, "inject");
  public get inject() {
    return this._inject;
  }
  public putInject(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsInject) {
    this._inject.internalValue = value;
  }
  public resetInject() {
    this._inject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectInput() {
    return this._inject.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // loki - computed: false, optional: true, required: false
  private _loki = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLokiOutputReference(this, "loki");
  public get loki() {
    return this._loki;
  }
  public putLoki(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsLoki) {
    this._loki.internalValue = value;
  }
  public resetLoki() {
    this._loki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lokiInput() {
    return this._loki.internalValue;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOpensearch) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // stdout - computed: false, optional: true, required: false
  private _stdout?: { [key: string]: string }; 
  public get stdout() {
    return this.getStringMapAttribute('stdout');
  }
  public set stdout(value: { [key: string]: string }) {
    this._stdout = value;
  }
  public resetStdout() {
    this._stdout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdoutInput() {
    return this._stdout;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOutputReference {
    return new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#outputs DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest#outputs}
  */
  readonly outputs?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputs[] | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecToTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outputs: cdktf.listMapper(dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsToTerraform, false)(struct!.outputs),
  }
}


export function dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outputs: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outputs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outputs.internalValue = value.outputs;
    }
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest k8s_fluentd_fluent_io_cluster_output_v1alpha1_manifest}
*/
export class DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fluentd_fluent_io_cluster_output_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluentdFluentIoClusterOutputV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fluentd_fluent_io_cluster_output_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_cluster_output_v1alpha1_manifest k8s_fluentd_fluent_io_cluster_output_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fluentd_fluent_io_cluster_output_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentdFluentIoClusterOutputV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
