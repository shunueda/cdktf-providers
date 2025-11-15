// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginZipkinConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#config GatewayPluginZipkin#config}
  */
  readonly config?: GatewayPluginZipkinConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#consumer GatewayPluginZipkin#consumer}
  */
  readonly consumer?: GatewayPluginZipkinConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#control_plane_id GatewayPluginZipkin#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#created_at GatewayPluginZipkin#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#enabled GatewayPluginZipkin#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#id GatewayPluginZipkin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#instance_name GatewayPluginZipkin#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#ordering GatewayPluginZipkin#ordering}
  */
  readonly ordering?: GatewayPluginZipkinOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#partials GatewayPluginZipkin#partials}
  */
  readonly partials?: GatewayPluginZipkinPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#protocols GatewayPluginZipkin#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#route GatewayPluginZipkin#route}
  */
  readonly route?: GatewayPluginZipkinRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#service GatewayPluginZipkin#service}
  */
  readonly service?: GatewayPluginZipkinService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#tags GatewayPluginZipkin#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#updated_at GatewayPluginZipkin#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginZipkinConfigPropagation {
  /**
  * Header names to clear after context extraction. This allows to extract the context from a certain header and then remove it from the request, useful when extraction and injection are performed on different header formats and the original header should not be sent to the upstream. If left empty, no headers are cleared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#clear GatewayPluginZipkin#clear}
  */
  readonly clear?: string[];
  /**
  * The default header format to use when extractors did not match any format in the incoming headers and `inject` is configured with the value: `preserve`. This can happen when no tracing header was found in the request, or the incoming tracing header formats were not included in `extract`. Default: "b3"; must be one of ["aws", "b3", "b3-single", "datadog", "gcp", "instana", "jaeger", "ot", "w3c"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#default_format GatewayPluginZipkin#default_format}
  */
  readonly defaultFormat?: string;
  /**
  * Header formats used to extract tracing context from incoming requests. If multiple values are specified, the first one found will be used for extraction. If left empty, Kong will not extract any tracing context information from incoming requests and generate a trace with no parent and a new trace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#extract GatewayPluginZipkin#extract}
  */
  readonly extract?: string[];
  /**
  * Header formats used to inject tracing context. The value `preserve` will use the same header format as the incoming request. If multiple values are specified, all of them will be used during injection. If left empty, Kong will not inject any tracing context information in outgoing requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#inject GatewayPluginZipkin#inject}
  */
  readonly inject?: string[];
}

export function gatewayPluginZipkinConfigPropagationToTerraform(struct?: GatewayPluginZipkinConfigPropagation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clear),
    default_format: cdktf.stringToTerraform(struct!.defaultFormat),
    extract: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extract),
    inject: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inject),
  }
}


export function gatewayPluginZipkinConfigPropagationToHclTerraform(struct?: GatewayPluginZipkinConfigPropagation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clear),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_format: {
      value: cdktf.stringToHclTerraform(struct!.defaultFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extract: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extract),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inject: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inject),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinConfigPropagationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinConfigPropagation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clear !== undefined) {
      hasAnyValues = true;
      internalValueResult.clear = this._clear;
    }
    if (this._defaultFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFormat = this._defaultFormat;
    }
    if (this._extract !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract;
    }
    if (this._inject !== undefined) {
      hasAnyValues = true;
      internalValueResult.inject = this._inject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinConfigPropagation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clear = undefined;
      this._defaultFormat = undefined;
      this._extract = undefined;
      this._inject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clear = value.clear;
      this._defaultFormat = value.defaultFormat;
      this._extract = value.extract;
      this._inject = value.inject;
    }
  }

  // clear - computed: true, optional: true, required: false
  private _clear?: string[]; 
  public get clear() {
    return this.getListAttribute('clear');
  }
  public set clear(value: string[]) {
    this._clear = value;
  }
  public resetClear() {
    this._clear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearInput() {
    return this._clear;
  }

  // default_format - computed: true, optional: true, required: false
  private _defaultFormat?: string; 
  public get defaultFormat() {
    return this.getStringAttribute('default_format');
  }
  public set defaultFormat(value: string) {
    this._defaultFormat = value;
  }
  public resetDefaultFormat() {
    this._defaultFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFormatInput() {
    return this._defaultFormat;
  }

  // extract - computed: true, optional: true, required: false
  private _extract?: string[]; 
  public get extract() {
    return this.getListAttribute('extract');
  }
  public set extract(value: string[]) {
    this._extract = value;
  }
  public resetExtract() {
    this._extract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract;
  }

  // inject - computed: true, optional: true, required: false
  private _inject?: string[]; 
  public get inject() {
    return this.getListAttribute('inject');
  }
  public set inject(value: string[]) {
    this._inject = value;
  }
  public resetInject() {
    this._inject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectInput() {
    return this._inject;
  }
}
export interface GatewayPluginZipkinConfigQueue {
  /**
  * The number of of queue delivery timers. -1 indicates unlimited. Default: 1; must be one of ["-1", "1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#concurrency_limit GatewayPluginZipkin#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Time in seconds before the initial retry is made for a failing batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#initial_retry_delay GatewayPluginZipkin#initial_retry_delay}
  */
  readonly initialRetryDelay?: number;
  /**
  * Maximum number of entries that can be processed at a time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#max_batch_size GatewayPluginZipkin#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Maximum number of bytes that can be waiting on a queue, requires string content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#max_bytes GatewayPluginZipkin#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum number of (fractional) seconds to elapse after the first entry was queued before the queue starts calling the handler. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#max_coalescing_delay GatewayPluginZipkin#max_coalescing_delay}
  */
  readonly maxCoalescingDelay?: number;
  /**
  * Maximum number of entries that can be waiting on the queue. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#max_entries GatewayPluginZipkin#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Maximum time in seconds between retries, caps exponential backoff. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#max_retry_delay GatewayPluginZipkin#max_retry_delay}
  */
  readonly maxRetryDelay?: number;
  /**
  * Time in seconds before the queue gives up calling a failed handler for a batch. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#max_retry_time GatewayPluginZipkin#max_retry_time}
  */
  readonly maxRetryTime?: number;
}

export function gatewayPluginZipkinConfigQueueToTerraform(struct?: GatewayPluginZipkinConfigQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency_limit: cdktf.numberToTerraform(struct!.concurrencyLimit),
    initial_retry_delay: cdktf.numberToTerraform(struct!.initialRetryDelay),
    max_batch_size: cdktf.numberToTerraform(struct!.maxBatchSize),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_coalescing_delay: cdktf.numberToTerraform(struct!.maxCoalescingDelay),
    max_entries: cdktf.numberToTerraform(struct!.maxEntries),
    max_retry_delay: cdktf.numberToTerraform(struct!.maxRetryDelay),
    max_retry_time: cdktf.numberToTerraform(struct!.maxRetryTime),
  }
}


export function gatewayPluginZipkinConfigQueueToHclTerraform(struct?: GatewayPluginZipkinConfigQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency_limit: {
      value: cdktf.numberToHclTerraform(struct!.concurrencyLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_retry_delay: {
      value: cdktf.numberToHclTerraform(struct!.initialRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_coalescing_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxCoalescingDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_entries: {
      value: cdktf.numberToHclTerraform(struct!.maxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retry_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retry_time: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinConfigQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinConfigQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrencyLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyLimit = this._concurrencyLimit;
    }
    if (this._initialRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialRetryDelay = this._initialRetryDelay;
    }
    if (this._maxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSize = this._maxBatchSize;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxCoalescingDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCoalescingDelay = this._maxCoalescingDelay;
    }
    if (this._maxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntries = this._maxEntries;
    }
    if (this._maxRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryDelay = this._maxRetryDelay;
    }
    if (this._maxRetryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryTime = this._maxRetryTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinConfigQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrencyLimit = undefined;
      this._initialRetryDelay = undefined;
      this._maxBatchSize = undefined;
      this._maxBytes = undefined;
      this._maxCoalescingDelay = undefined;
      this._maxEntries = undefined;
      this._maxRetryDelay = undefined;
      this._maxRetryTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrencyLimit = value.concurrencyLimit;
      this._initialRetryDelay = value.initialRetryDelay;
      this._maxBatchSize = value.maxBatchSize;
      this._maxBytes = value.maxBytes;
      this._maxCoalescingDelay = value.maxCoalescingDelay;
      this._maxEntries = value.maxEntries;
      this._maxRetryDelay = value.maxRetryDelay;
      this._maxRetryTime = value.maxRetryTime;
    }
  }

  // concurrency_limit - computed: true, optional: true, required: false
  private _concurrencyLimit?: number; 
  public get concurrencyLimit() {
    return this.getNumberAttribute('concurrency_limit');
  }
  public set concurrencyLimit(value: number) {
    this._concurrencyLimit = value;
  }
  public resetConcurrencyLimit() {
    this._concurrencyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyLimitInput() {
    return this._concurrencyLimit;
  }

  // initial_retry_delay - computed: true, optional: true, required: false
  private _initialRetryDelay?: number; 
  public get initialRetryDelay() {
    return this.getNumberAttribute('initial_retry_delay');
  }
  public set initialRetryDelay(value: number) {
    this._initialRetryDelay = value;
  }
  public resetInitialRetryDelay() {
    this._initialRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRetryDelayInput() {
    return this._initialRetryDelay;
  }

  // max_batch_size - computed: true, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // max_bytes - computed: true, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_coalescing_delay - computed: true, optional: true, required: false
  private _maxCoalescingDelay?: number; 
  public get maxCoalescingDelay() {
    return this.getNumberAttribute('max_coalescing_delay');
  }
  public set maxCoalescingDelay(value: number) {
    this._maxCoalescingDelay = value;
  }
  public resetMaxCoalescingDelay() {
    this._maxCoalescingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCoalescingDelayInput() {
    return this._maxCoalescingDelay;
  }

  // max_entries - computed: true, optional: true, required: false
  private _maxEntries?: number; 
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  public resetMaxEntries() {
    this._maxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
  }

  // max_retry_delay - computed: true, optional: true, required: false
  private _maxRetryDelay?: number; 
  public get maxRetryDelay() {
    return this.getNumberAttribute('max_retry_delay');
  }
  public set maxRetryDelay(value: number) {
    this._maxRetryDelay = value;
  }
  public resetMaxRetryDelay() {
    this._maxRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDelayInput() {
    return this._maxRetryDelay;
  }

  // max_retry_time - computed: true, optional: true, required: false
  private _maxRetryTime?: number; 
  public get maxRetryTime() {
    return this.getNumberAttribute('max_retry_time');
  }
  public set maxRetryTime(value: number) {
    this._maxRetryTime = value;
  }
  public resetMaxRetryTime() {
    this._maxRetryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryTimeInput() {
    return this._maxRetryTime;
  }
}
export interface GatewayPluginZipkinConfigStaticTags {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#name GatewayPluginZipkin#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#value GatewayPluginZipkin#value}
  */
  readonly value?: string;
}

export function gatewayPluginZipkinConfigStaticTagsToTerraform(struct?: GatewayPluginZipkinConfigStaticTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gatewayPluginZipkinConfigStaticTagsToHclTerraform(struct?: GatewayPluginZipkinConfigStaticTags | cdktf.IResolvable): any {
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

export class GatewayPluginZipkinConfigStaticTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginZipkinConfigStaticTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginZipkinConfigStaticTags | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GatewayPluginZipkinConfigStaticTagsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginZipkinConfigStaticTags[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginZipkinConfigStaticTagsOutputReference {
    return new GatewayPluginZipkinConfigStaticTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginZipkinConfigA {
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#connect_timeout GatewayPluginZipkin#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Allows specifying the type of header to be added to requests with no pre-existing tracing headers and when `config.header_type` is set to `"preserve"`. When `header_type` is set to any other value, `default_header_type` is ignored. Default: "b3"; must be one of ["aws", "b3", "b3-single", "datadog", "gcp", "instana", "jaeger", "ot", "w3c"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#default_header_type GatewayPluginZipkin#default_header_type}
  */
  readonly defaultHeaderType?: string;
  /**
  * Set a default service name to override `unknown-service-name` in the Zipkin spans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#default_service_name GatewayPluginZipkin#default_service_name}
  */
  readonly defaultServiceName?: string;
  /**
  * All HTTP requests going through the plugin are tagged with a tracing HTTP request. This property codifies what kind of tracing header the plugin expects on incoming requests. Default: "preserve"; must be one of ["aws", "b3", "b3-single", "datadog", "gcp", "ignore", "instana", "jaeger", "ot", "preserve", "w3c"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#header_type GatewayPluginZipkin#header_type}
  */
  readonly headerType?: string;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#http_endpoint GatewayPluginZipkin#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#http_response_header_for_traceid GatewayPluginZipkin#http_response_header_for_traceid}
  */
  readonly httpResponseHeaderForTraceid?: string;
  /**
  * Specify whether to include the HTTP path in the span name. Default: "method"; must be one of ["method", "method_path"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#http_span_name GatewayPluginZipkin#http_span_name}
  */
  readonly httpSpanName?: string;
  /**
  * Specify whether the credential of the currently authenticated consumer should be included in metadata sent to the Zipkin server. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#include_credential GatewayPluginZipkin#include_credential}
  */
  readonly includeCredential?: boolean | cdktf.IResolvable;
  /**
  * The name of the service as displayed in Zipkin. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#local_service_name GatewayPluginZipkin#local_service_name}
  */
  readonly localServiceName?: string;
  /**
  * Specify whether to include the duration of each phase as an annotation or a tag. Default: "annotations"; must be one of ["annotations", "tags"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#phase_duration_flavor GatewayPluginZipkin#phase_duration_flavor}
  */
  readonly phaseDurationFlavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#propagation GatewayPluginZipkin#propagation}
  */
  readonly propagation?: GatewayPluginZipkinConfigPropagation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#queue GatewayPluginZipkin#queue}
  */
  readonly queue?: GatewayPluginZipkinConfigQueue;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#read_timeout GatewayPluginZipkin#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * How often to sample requests that do not contain trace IDs. Set to `0` to turn sampling off, or to `1` to sample **all** requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#sample_ratio GatewayPluginZipkin#sample_ratio}
  */
  readonly sampleRatio?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#send_timeout GatewayPluginZipkin#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * The tags specified on this property will be added to the generated request traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#static_tags GatewayPluginZipkin#static_tags}
  */
  readonly staticTags?: GatewayPluginZipkinConfigStaticTags[] | cdktf.IResolvable;
  /**
  * The Zipkin plugin will add extra headers to the tags associated with any HTTP requests that come with a header named as configured by this property. Default: "Zipkin-Tags"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#tags_header GatewayPluginZipkin#tags_header}
  */
  readonly tagsHeader?: string;
  /**
  * The length in bytes of each request's Trace ID. Default: 16; must be one of ["8", "16"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#traceid_byte_count GatewayPluginZipkin#traceid_byte_count}
  */
  readonly traceidByteCount?: number;
}

export function gatewayPluginZipkinConfigAToTerraform(struct?: GatewayPluginZipkinConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    default_header_type: cdktf.stringToTerraform(struct!.defaultHeaderType),
    default_service_name: cdktf.stringToTerraform(struct!.defaultServiceName),
    header_type: cdktf.stringToTerraform(struct!.headerType),
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_response_header_for_traceid: cdktf.stringToTerraform(struct!.httpResponseHeaderForTraceid),
    http_span_name: cdktf.stringToTerraform(struct!.httpSpanName),
    include_credential: cdktf.booleanToTerraform(struct!.includeCredential),
    local_service_name: cdktf.stringToTerraform(struct!.localServiceName),
    phase_duration_flavor: cdktf.stringToTerraform(struct!.phaseDurationFlavor),
    propagation: gatewayPluginZipkinConfigPropagationToTerraform(struct!.propagation),
    queue: gatewayPluginZipkinConfigQueueToTerraform(struct!.queue),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    sample_ratio: cdktf.numberToTerraform(struct!.sampleRatio),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    static_tags: cdktf.listMapper(gatewayPluginZipkinConfigStaticTagsToTerraform, false)(struct!.staticTags),
    tags_header: cdktf.stringToTerraform(struct!.tagsHeader),
    traceid_byte_count: cdktf.numberToTerraform(struct!.traceidByteCount),
  }
}


export function gatewayPluginZipkinConfigAToHclTerraform(struct?: GatewayPluginZipkinConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_header_type: {
      value: cdktf.stringToHclTerraform(struct!.defaultHeaderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_service_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_type: {
      value: cdktf.stringToHclTerraform(struct!.headerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.httpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response_header_for_traceid: {
      value: cdktf.stringToHclTerraform(struct!.httpResponseHeaderForTraceid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_span_name: {
      value: cdktf.stringToHclTerraform(struct!.httpSpanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_credential: {
      value: cdktf.booleanToHclTerraform(struct!.includeCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_service_name: {
      value: cdktf.stringToHclTerraform(struct!.localServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phase_duration_flavor: {
      value: cdktf.stringToHclTerraform(struct!.phaseDurationFlavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagation: {
      value: gatewayPluginZipkinConfigPropagationToHclTerraform(struct!.propagation),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginZipkinConfigPropagation",
    },
    queue: {
      value: gatewayPluginZipkinConfigQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginZipkinConfigQueue",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_ratio: {
      value: cdktf.numberToHclTerraform(struct!.sampleRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_tags: {
      value: cdktf.listMapperHcl(gatewayPluginZipkinConfigStaticTagsToHclTerraform, false)(struct!.staticTags),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginZipkinConfigStaticTagsList",
    },
    tags_header: {
      value: cdktf.stringToHclTerraform(struct!.tagsHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traceid_byte_count: {
      value: cdktf.numberToHclTerraform(struct!.traceidByteCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._defaultHeaderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderType = this._defaultHeaderType;
    }
    if (this._defaultServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultServiceName = this._defaultServiceName;
    }
    if (this._headerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerType = this._headerType;
    }
    if (this._httpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpoint = this._httpEndpoint;
    }
    if (this._httpResponseHeaderForTraceid !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseHeaderForTraceid = this._httpResponseHeaderForTraceid;
    }
    if (this._httpSpanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSpanName = this._httpSpanName;
    }
    if (this._includeCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCredential = this._includeCredential;
    }
    if (this._localServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localServiceName = this._localServiceName;
    }
    if (this._phaseDurationFlavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseDurationFlavor = this._phaseDurationFlavor;
    }
    if (this._propagation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagation = this._propagation?.internalValue;
    }
    if (this._queue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue?.internalValue;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sampleRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRatio = this._sampleRatio;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._staticTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticTags = this._staticTags?.internalValue;
    }
    if (this._tagsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsHeader = this._tagsHeader;
    }
    if (this._traceidByteCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceidByteCount = this._traceidByteCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._defaultHeaderType = undefined;
      this._defaultServiceName = undefined;
      this._headerType = undefined;
      this._httpEndpoint = undefined;
      this._httpResponseHeaderForTraceid = undefined;
      this._httpSpanName = undefined;
      this._includeCredential = undefined;
      this._localServiceName = undefined;
      this._phaseDurationFlavor = undefined;
      this._propagation.internalValue = undefined;
      this._queue.internalValue = undefined;
      this._readTimeout = undefined;
      this._sampleRatio = undefined;
      this._sendTimeout = undefined;
      this._staticTags.internalValue = undefined;
      this._tagsHeader = undefined;
      this._traceidByteCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._defaultHeaderType = value.defaultHeaderType;
      this._defaultServiceName = value.defaultServiceName;
      this._headerType = value.headerType;
      this._httpEndpoint = value.httpEndpoint;
      this._httpResponseHeaderForTraceid = value.httpResponseHeaderForTraceid;
      this._httpSpanName = value.httpSpanName;
      this._includeCredential = value.includeCredential;
      this._localServiceName = value.localServiceName;
      this._phaseDurationFlavor = value.phaseDurationFlavor;
      this._propagation.internalValue = value.propagation;
      this._queue.internalValue = value.queue;
      this._readTimeout = value.readTimeout;
      this._sampleRatio = value.sampleRatio;
      this._sendTimeout = value.sendTimeout;
      this._staticTags.internalValue = value.staticTags;
      this._tagsHeader = value.tagsHeader;
      this._traceidByteCount = value.traceidByteCount;
    }
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // default_header_type - computed: true, optional: true, required: false
  private _defaultHeaderType?: string; 
  public get defaultHeaderType() {
    return this.getStringAttribute('default_header_type');
  }
  public set defaultHeaderType(value: string) {
    this._defaultHeaderType = value;
  }
  public resetDefaultHeaderType() {
    this._defaultHeaderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTypeInput() {
    return this._defaultHeaderType;
  }

  // default_service_name - computed: true, optional: true, required: false
  private _defaultServiceName?: string; 
  public get defaultServiceName() {
    return this.getStringAttribute('default_service_name');
  }
  public set defaultServiceName(value: string) {
    this._defaultServiceName = value;
  }
  public resetDefaultServiceName() {
    this._defaultServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceNameInput() {
    return this._defaultServiceName;
  }

  // header_type - computed: true, optional: true, required: false
  private _headerType?: string; 
  public get headerType() {
    return this.getStringAttribute('header_type');
  }
  public set headerType(value: string) {
    this._headerType = value;
  }
  public resetHeaderType() {
    this._headerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTypeInput() {
    return this._headerType;
  }

  // http_endpoint - computed: true, optional: true, required: false
  private _httpEndpoint?: string; 
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint;
  }

  // http_response_header_for_traceid - computed: true, optional: true, required: false
  private _httpResponseHeaderForTraceid?: string; 
  public get httpResponseHeaderForTraceid() {
    return this.getStringAttribute('http_response_header_for_traceid');
  }
  public set httpResponseHeaderForTraceid(value: string) {
    this._httpResponseHeaderForTraceid = value;
  }
  public resetHttpResponseHeaderForTraceid() {
    this._httpResponseHeaderForTraceid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseHeaderForTraceidInput() {
    return this._httpResponseHeaderForTraceid;
  }

  // http_span_name - computed: true, optional: true, required: false
  private _httpSpanName?: string; 
  public get httpSpanName() {
    return this.getStringAttribute('http_span_name');
  }
  public set httpSpanName(value: string) {
    this._httpSpanName = value;
  }
  public resetHttpSpanName() {
    this._httpSpanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSpanNameInput() {
    return this._httpSpanName;
  }

  // include_credential - computed: true, optional: true, required: false
  private _includeCredential?: boolean | cdktf.IResolvable; 
  public get includeCredential() {
    return this.getBooleanAttribute('include_credential');
  }
  public set includeCredential(value: boolean | cdktf.IResolvable) {
    this._includeCredential = value;
  }
  public resetIncludeCredential() {
    this._includeCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCredentialInput() {
    return this._includeCredential;
  }

  // local_service_name - computed: true, optional: true, required: false
  private _localServiceName?: string; 
  public get localServiceName() {
    return this.getStringAttribute('local_service_name');
  }
  public set localServiceName(value: string) {
    this._localServiceName = value;
  }
  public resetLocalServiceName() {
    this._localServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localServiceNameInput() {
    return this._localServiceName;
  }

  // phase_duration_flavor - computed: true, optional: true, required: false
  private _phaseDurationFlavor?: string; 
  public get phaseDurationFlavor() {
    return this.getStringAttribute('phase_duration_flavor');
  }
  public set phaseDurationFlavor(value: string) {
    this._phaseDurationFlavor = value;
  }
  public resetPhaseDurationFlavor() {
    this._phaseDurationFlavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseDurationFlavorInput() {
    return this._phaseDurationFlavor;
  }

  // propagation - computed: true, optional: true, required: false
  private _propagation = new GatewayPluginZipkinConfigPropagationOutputReference(this, "propagation");
  public get propagation() {
    return this._propagation;
  }
  public putPropagation(value: GatewayPluginZipkinConfigPropagation) {
    this._propagation.internalValue = value;
  }
  public resetPropagation() {
    this._propagation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationInput() {
    return this._propagation.internalValue;
  }

  // queue - computed: true, optional: true, required: false
  private _queue = new GatewayPluginZipkinConfigQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: GatewayPluginZipkinConfigQueue) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // read_timeout - computed: true, optional: true, required: false
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

  // sample_ratio - computed: true, optional: true, required: false
  private _sampleRatio?: number; 
  public get sampleRatio() {
    return this.getNumberAttribute('sample_ratio');
  }
  public set sampleRatio(value: number) {
    this._sampleRatio = value;
  }
  public resetSampleRatio() {
    this._sampleRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRatioInput() {
    return this._sampleRatio;
  }

  // send_timeout - computed: true, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // static_tags - computed: true, optional: true, required: false
  private _staticTags = new GatewayPluginZipkinConfigStaticTagsList(this, "static_tags", false);
  public get staticTags() {
    return this._staticTags;
  }
  public putStaticTags(value: GatewayPluginZipkinConfigStaticTags[] | cdktf.IResolvable) {
    this._staticTags.internalValue = value;
  }
  public resetStaticTags() {
    this._staticTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticTagsInput() {
    return this._staticTags.internalValue;
  }

  // tags_header - computed: true, optional: true, required: false
  private _tagsHeader?: string; 
  public get tagsHeader() {
    return this.getStringAttribute('tags_header');
  }
  public set tagsHeader(value: string) {
    this._tagsHeader = value;
  }
  public resetTagsHeader() {
    this._tagsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsHeaderInput() {
    return this._tagsHeader;
  }

  // traceid_byte_count - computed: true, optional: true, required: false
  private _traceidByteCount?: number; 
  public get traceidByteCount() {
    return this.getNumberAttribute('traceid_byte_count');
  }
  public set traceidByteCount(value: number) {
    this._traceidByteCount = value;
  }
  public resetTraceidByteCount() {
    this._traceidByteCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceidByteCountInput() {
    return this._traceidByteCount;
  }
}
export interface GatewayPluginZipkinConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#id GatewayPluginZipkin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginZipkinConsumerToTerraform(struct?: GatewayPluginZipkinConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginZipkinConsumerToHclTerraform(struct?: GatewayPluginZipkinConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginZipkinOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#access GatewayPluginZipkin#access}
  */
  readonly access?: string[];
}

export function gatewayPluginZipkinOrderingAfterToTerraform(struct?: GatewayPluginZipkinOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginZipkinOrderingAfterToHclTerraform(struct?: GatewayPluginZipkinOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinOrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinOrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginZipkinOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#access GatewayPluginZipkin#access}
  */
  readonly access?: string[];
}

export function gatewayPluginZipkinOrderingBeforeToTerraform(struct?: GatewayPluginZipkinOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginZipkinOrderingBeforeToHclTerraform(struct?: GatewayPluginZipkinOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinOrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinOrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginZipkinOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#after GatewayPluginZipkin#after}
  */
  readonly after?: GatewayPluginZipkinOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#before GatewayPluginZipkin#before}
  */
  readonly before?: GatewayPluginZipkinOrderingBefore;
}

export function gatewayPluginZipkinOrderingToTerraform(struct?: GatewayPluginZipkinOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginZipkinOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginZipkinOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginZipkinOrderingToHclTerraform(struct?: GatewayPluginZipkinOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginZipkinOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginZipkinOrderingAfter",
    },
    before: {
      value: gatewayPluginZipkinOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginZipkinOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinOrdering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinOrdering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginZipkinOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginZipkinOrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginZipkinOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginZipkinOrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginZipkinPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#id GatewayPluginZipkin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#name GatewayPluginZipkin#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#path GatewayPluginZipkin#path}
  */
  readonly path?: string;
}

export function gatewayPluginZipkinPartialsToTerraform(struct?: GatewayPluginZipkinPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginZipkinPartialsToHclTerraform(struct?: GatewayPluginZipkinPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginZipkinPartials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinPartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._path = value.path;
    }
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

  // name - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
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
}

export class GatewayPluginZipkinPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginZipkinPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginZipkinPartialsOutputReference {
    return new GatewayPluginZipkinPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginZipkinRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#id GatewayPluginZipkin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginZipkinRouteToTerraform(struct?: GatewayPluginZipkinRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginZipkinRouteToHclTerraform(struct?: GatewayPluginZipkinRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginZipkinService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#id GatewayPluginZipkin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginZipkinServiceToTerraform(struct?: GatewayPluginZipkinService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginZipkinServiceToHclTerraform(struct?: GatewayPluginZipkinService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginZipkinServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginZipkinService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginZipkinService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin konnect_gateway_plugin_zipkin}
*/
export class GatewayPluginZipkin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_zipkin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginZipkin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginZipkin to import
  * @param importFromId The id of the existing GatewayPluginZipkin that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginZipkin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_zipkin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_zipkin konnect_gateway_plugin_zipkin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginZipkinConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginZipkinConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_zipkin',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._consumer.internalValue = config.consumer;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginZipkinConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginZipkinConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginZipkinConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginZipkinConsumer) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: true, required: false
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginZipkinOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginZipkinOrdering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginZipkinPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginZipkinPartials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginZipkinRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginZipkinRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginZipkinServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginZipkinService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginZipkinConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginZipkinConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginZipkinOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginZipkinPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginZipkinRouteToTerraform(this._route.internalValue),
      service: gatewayPluginZipkinServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginZipkinConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginZipkinConfigA",
      },
      consumer: {
        value: gatewayPluginZipkinConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginZipkinConsumer",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginZipkinOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginZipkinOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginZipkinPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginZipkinPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginZipkinRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginZipkinRoute",
      },
      service: {
        value: gatewayPluginZipkinServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginZipkinService",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
