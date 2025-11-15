// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginOpentelemetryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#config GatewayPluginOpentelemetry#config}
  */
  readonly config?: GatewayPluginOpentelemetryConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#consumer GatewayPluginOpentelemetry#consumer}
  */
  readonly consumer?: GatewayPluginOpentelemetryConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#control_plane_id GatewayPluginOpentelemetry#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#created_at GatewayPluginOpentelemetry#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#enabled GatewayPluginOpentelemetry#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#id GatewayPluginOpentelemetry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#instance_name GatewayPluginOpentelemetry#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#ordering GatewayPluginOpentelemetry#ordering}
  */
  readonly ordering?: GatewayPluginOpentelemetryOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#partials GatewayPluginOpentelemetry#partials}
  */
  readonly partials?: GatewayPluginOpentelemetryPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#protocols GatewayPluginOpentelemetry#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#route GatewayPluginOpentelemetry#route}
  */
  readonly route?: GatewayPluginOpentelemetryRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#service GatewayPluginOpentelemetry#service}
  */
  readonly service?: GatewayPluginOpentelemetryService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#tags GatewayPluginOpentelemetry#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#updated_at GatewayPluginOpentelemetry#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginOpentelemetryConfigPropagation {
  /**
  * Header names to clear after context extraction. This allows to extract the context from a certain header and then remove it from the request, useful when extraction and injection are performed on different header formats and the original header should not be sent to the upstream. If left empty, no headers are cleared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#clear GatewayPluginOpentelemetry#clear}
  */
  readonly clear?: string[];
  /**
  * The default header format to use when extractors did not match any format in the incoming headers and `inject` is configured with the value: `preserve`. This can happen when no tracing header was found in the request, or the incoming tracing header formats were not included in `extract`. Default: "w3c"; must be one of ["aws", "b3", "b3-single", "datadog", "gcp", "instana", "jaeger", "ot", "w3c"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#default_format GatewayPluginOpentelemetry#default_format}
  */
  readonly defaultFormat?: string;
  /**
  * Header formats used to extract tracing context from incoming requests. If multiple values are specified, the first one found will be used for extraction. If left empty, Kong will not extract any tracing context information from incoming requests and generate a trace with no parent and a new trace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#extract GatewayPluginOpentelemetry#extract}
  */
  readonly extract?: string[];
  /**
  * Header formats used to inject tracing context. The value `preserve` will use the same header format as the incoming request. If multiple values are specified, all of them will be used during injection. If left empty, Kong will not inject any tracing context information in outgoing requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#inject GatewayPluginOpentelemetry#inject}
  */
  readonly inject?: string[];
}

export function gatewayPluginOpentelemetryConfigPropagationToTerraform(struct?: GatewayPluginOpentelemetryConfigPropagation | cdktf.IResolvable): any {
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


export function gatewayPluginOpentelemetryConfigPropagationToHclTerraform(struct?: GatewayPluginOpentelemetryConfigPropagation | cdktf.IResolvable): any {
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

export class GatewayPluginOpentelemetryConfigPropagationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryConfigPropagation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryConfigPropagation | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpentelemetryConfigQueue {
  /**
  * The number of of queue delivery timers. -1 indicates unlimited. Default: 1; must be one of ["-1", "1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#concurrency_limit GatewayPluginOpentelemetry#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Time in seconds before the initial retry is made for a failing batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#initial_retry_delay GatewayPluginOpentelemetry#initial_retry_delay}
  */
  readonly initialRetryDelay?: number;
  /**
  * Maximum number of entries that can be processed at a time. Default: 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#max_batch_size GatewayPluginOpentelemetry#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Maximum number of bytes that can be waiting on a queue, requires string content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#max_bytes GatewayPluginOpentelemetry#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum number of (fractional) seconds to elapse after the first entry was queued before the queue starts calling the handler. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#max_coalescing_delay GatewayPluginOpentelemetry#max_coalescing_delay}
  */
  readonly maxCoalescingDelay?: number;
  /**
  * Maximum number of entries that can be waiting on the queue. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#max_entries GatewayPluginOpentelemetry#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Maximum time in seconds between retries, caps exponential backoff. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#max_retry_delay GatewayPluginOpentelemetry#max_retry_delay}
  */
  readonly maxRetryDelay?: number;
  /**
  * Time in seconds before the queue gives up calling a failed handler for a batch. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#max_retry_time GatewayPluginOpentelemetry#max_retry_time}
  */
  readonly maxRetryTime?: number;
}

export function gatewayPluginOpentelemetryConfigQueueToTerraform(struct?: GatewayPluginOpentelemetryConfigQueue | cdktf.IResolvable): any {
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


export function gatewayPluginOpentelemetryConfigQueueToHclTerraform(struct?: GatewayPluginOpentelemetryConfigQueue | cdktf.IResolvable): any {
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

export class GatewayPluginOpentelemetryConfigQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryConfigQueue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryConfigQueue | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpentelemetryConfigA {
  /**
  * The delay, in seconds, between two consecutive batches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#batch_flush_delay GatewayPluginOpentelemetry#batch_flush_delay}
  */
  readonly batchFlushDelay?: number;
  /**
  * The number of spans to be sent in a single batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#batch_span_count GatewayPluginOpentelemetry#batch_span_count}
  */
  readonly batchSpanCount?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#connect_timeout GatewayPluginOpentelemetry#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Default: "preserve"; must be one of ["aws", "b3", "b3-single", "datadog", "gcp", "ignore", "instana", "jaeger", "ot", "preserve", "w3c"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#header_type GatewayPluginOpentelemetry#header_type}
  */
  readonly headerType?: string;
  /**
  * The custom headers to be added in the HTTP request sent to the OTLP server. This setting is useful for adding the authentication headers (token) for the APM backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#headers GatewayPluginOpentelemetry#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#http_response_header_for_traceid GatewayPluginOpentelemetry#http_response_header_for_traceid}
  */
  readonly httpResponseHeaderForTraceid?: string;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#logs_endpoint GatewayPluginOpentelemetry#logs_endpoint}
  */
  readonly logsEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#propagation GatewayPluginOpentelemetry#propagation}
  */
  readonly propagation?: GatewayPluginOpentelemetryConfigPropagation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#queue GatewayPluginOpentelemetry#queue}
  */
  readonly queue?: GatewayPluginOpentelemetryConfigQueue;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#read_timeout GatewayPluginOpentelemetry#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#resource_attributes GatewayPluginOpentelemetry#resource_attributes}
  */
  readonly resourceAttributes?: { [key: string]: string };
  /**
  * Tracing sampling rate for configuring the probability-based sampler. When set, this value supersedes the global `tracing_sampling_rate` setting from kong.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#sampling_rate GatewayPluginOpentelemetry#sampling_rate}
  */
  readonly samplingRate?: number;
  /**
  * The sampling strategy to use for OTLP `traces`. Set `parent_drop_probability_fallback` if you want parent-based sampling when the parent span contains a `false` sampled flag, and fallback to probability-based sampling otherwise. Set `parent_probability_fallback` if you want parent-based sampling when the parent span contains a valid sampled flag (`true` or `false`), and fallback to probability-based sampling otherwise. Default: "parent_drop_probability_fallback"; must be one of ["parent_drop_probability_fallback", "parent_probability_fallback"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#sampling_strategy GatewayPluginOpentelemetry#sampling_strategy}
  */
  readonly samplingStrategy?: string;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#send_timeout GatewayPluginOpentelemetry#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#traces_endpoint GatewayPluginOpentelemetry#traces_endpoint}
  */
  readonly tracesEndpoint?: string;
}

export function gatewayPluginOpentelemetryConfigAToTerraform(struct?: GatewayPluginOpentelemetryConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_flush_delay: cdktf.numberToTerraform(struct!.batchFlushDelay),
    batch_span_count: cdktf.numberToTerraform(struct!.batchSpanCount),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    header_type: cdktf.stringToTerraform(struct!.headerType),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    http_response_header_for_traceid: cdktf.stringToTerraform(struct!.httpResponseHeaderForTraceid),
    logs_endpoint: cdktf.stringToTerraform(struct!.logsEndpoint),
    propagation: gatewayPluginOpentelemetryConfigPropagationToTerraform(struct!.propagation),
    queue: gatewayPluginOpentelemetryConfigQueueToTerraform(struct!.queue),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    resource_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceAttributes),
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
    sampling_strategy: cdktf.stringToTerraform(struct!.samplingStrategy),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    traces_endpoint: cdktf.stringToTerraform(struct!.tracesEndpoint),
  }
}


export function gatewayPluginOpentelemetryConfigAToHclTerraform(struct?: GatewayPluginOpentelemetryConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_flush_delay: {
      value: cdktf.numberToHclTerraform(struct!.batchFlushDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_span_count: {
      value: cdktf.numberToHclTerraform(struct!.batchSpanCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_type: {
      value: cdktf.stringToHclTerraform(struct!.headerType),
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
    http_response_header_for_traceid: {
      value: cdktf.stringToHclTerraform(struct!.httpResponseHeaderForTraceid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.logsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagation: {
      value: gatewayPluginOpentelemetryConfigPropagationToHclTerraform(struct!.propagation),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpentelemetryConfigPropagation",
    },
    queue: {
      value: gatewayPluginOpentelemetryConfigQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpentelemetryConfigQueue",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_strategy: {
      value: cdktf.stringToHclTerraform(struct!.samplingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traces_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tracesEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpentelemetryConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchFlushDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchFlushDelay = this._batchFlushDelay;
    }
    if (this._batchSpanCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSpanCount = this._batchSpanCount;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._headerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerType = this._headerType;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._httpResponseHeaderForTraceid !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseHeaderForTraceid = this._httpResponseHeaderForTraceid;
    }
    if (this._logsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsEndpoint = this._logsEndpoint;
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
    if (this._resourceAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAttributes = this._resourceAttributes;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    if (this._samplingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingStrategy = this._samplingStrategy;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._tracesEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracesEndpoint = this._tracesEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpentelemetryConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchFlushDelay = undefined;
      this._batchSpanCount = undefined;
      this._connectTimeout = undefined;
      this._headerType = undefined;
      this._headers = undefined;
      this._httpResponseHeaderForTraceid = undefined;
      this._logsEndpoint = undefined;
      this._propagation.internalValue = undefined;
      this._queue.internalValue = undefined;
      this._readTimeout = undefined;
      this._resourceAttributes = undefined;
      this._samplingRate = undefined;
      this._samplingStrategy = undefined;
      this._sendTimeout = undefined;
      this._tracesEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchFlushDelay = value.batchFlushDelay;
      this._batchSpanCount = value.batchSpanCount;
      this._connectTimeout = value.connectTimeout;
      this._headerType = value.headerType;
      this._headers = value.headers;
      this._httpResponseHeaderForTraceid = value.httpResponseHeaderForTraceid;
      this._logsEndpoint = value.logsEndpoint;
      this._propagation.internalValue = value.propagation;
      this._queue.internalValue = value.queue;
      this._readTimeout = value.readTimeout;
      this._resourceAttributes = value.resourceAttributes;
      this._samplingRate = value.samplingRate;
      this._samplingStrategy = value.samplingStrategy;
      this._sendTimeout = value.sendTimeout;
      this._tracesEndpoint = value.tracesEndpoint;
    }
  }

  // batch_flush_delay - computed: true, optional: true, required: false
  private _batchFlushDelay?: number; 
  public get batchFlushDelay() {
    return this.getNumberAttribute('batch_flush_delay');
  }
  public set batchFlushDelay(value: number) {
    this._batchFlushDelay = value;
  }
  public resetBatchFlushDelay() {
    this._batchFlushDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchFlushDelayInput() {
    return this._batchFlushDelay;
  }

  // batch_span_count - computed: true, optional: true, required: false
  private _batchSpanCount?: number; 
  public get batchSpanCount() {
    return this.getNumberAttribute('batch_span_count');
  }
  public set batchSpanCount(value: number) {
    this._batchSpanCount = value;
  }
  public resetBatchSpanCount() {
    this._batchSpanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSpanCountInput() {
    return this._batchSpanCount;
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

  // headers - computed: true, optional: true, required: false
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

  // logs_endpoint - computed: true, optional: true, required: false
  private _logsEndpoint?: string; 
  public get logsEndpoint() {
    return this.getStringAttribute('logs_endpoint');
  }
  public set logsEndpoint(value: string) {
    this._logsEndpoint = value;
  }
  public resetLogsEndpoint() {
    this._logsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsEndpointInput() {
    return this._logsEndpoint;
  }

  // propagation - computed: true, optional: true, required: false
  private _propagation = new GatewayPluginOpentelemetryConfigPropagationOutputReference(this, "propagation");
  public get propagation() {
    return this._propagation;
  }
  public putPropagation(value: GatewayPluginOpentelemetryConfigPropagation) {
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
  private _queue = new GatewayPluginOpentelemetryConfigQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: GatewayPluginOpentelemetryConfigQueue) {
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

  // resource_attributes - computed: true, optional: true, required: false
  private _resourceAttributes?: { [key: string]: string }; 
  public get resourceAttributes() {
    return this.getStringMapAttribute('resource_attributes');
  }
  public set resourceAttributes(value: { [key: string]: string }) {
    this._resourceAttributes = value;
  }
  public resetResourceAttributes() {
    this._resourceAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributesInput() {
    return this._resourceAttributes;
  }

  // sampling_rate - computed: true, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }

  // sampling_strategy - computed: true, optional: true, required: false
  private _samplingStrategy?: string; 
  public get samplingStrategy() {
    return this.getStringAttribute('sampling_strategy');
  }
  public set samplingStrategy(value: string) {
    this._samplingStrategy = value;
  }
  public resetSamplingStrategy() {
    this._samplingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingStrategyInput() {
    return this._samplingStrategy;
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

  // traces_endpoint - computed: true, optional: true, required: false
  private _tracesEndpoint?: string; 
  public get tracesEndpoint() {
    return this.getStringAttribute('traces_endpoint');
  }
  public set tracesEndpoint(value: string) {
    this._tracesEndpoint = value;
  }
  public resetTracesEndpoint() {
    this._tracesEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesEndpointInput() {
    return this._tracesEndpoint;
  }
}
export interface GatewayPluginOpentelemetryConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#id GatewayPluginOpentelemetry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOpentelemetryConsumerToTerraform(struct?: GatewayPluginOpentelemetryConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOpentelemetryConsumerToHclTerraform(struct?: GatewayPluginOpentelemetryConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginOpentelemetryConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpentelemetryOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#access GatewayPluginOpentelemetry#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOpentelemetryOrderingAfterToTerraform(struct?: GatewayPluginOpentelemetryOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOpentelemetryOrderingAfterToHclTerraform(struct?: GatewayPluginOpentelemetryOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginOpentelemetryOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpentelemetryOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#access GatewayPluginOpentelemetry#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOpentelemetryOrderingBeforeToTerraform(struct?: GatewayPluginOpentelemetryOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOpentelemetryOrderingBeforeToHclTerraform(struct?: GatewayPluginOpentelemetryOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginOpentelemetryOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpentelemetryOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#after GatewayPluginOpentelemetry#after}
  */
  readonly after?: GatewayPluginOpentelemetryOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#before GatewayPluginOpentelemetry#before}
  */
  readonly before?: GatewayPluginOpentelemetryOrderingBefore;
}

export function gatewayPluginOpentelemetryOrderingToTerraform(struct?: GatewayPluginOpentelemetryOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginOpentelemetryOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginOpentelemetryOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginOpentelemetryOrderingToHclTerraform(struct?: GatewayPluginOpentelemetryOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginOpentelemetryOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpentelemetryOrderingAfter",
    },
    before: {
      value: gatewayPluginOpentelemetryOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpentelemetryOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpentelemetryOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginOpentelemetryOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginOpentelemetryOrderingAfter) {
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
  private _before = new GatewayPluginOpentelemetryOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginOpentelemetryOrderingBefore) {
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
export interface GatewayPluginOpentelemetryPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#id GatewayPluginOpentelemetry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#name GatewayPluginOpentelemetry#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#path GatewayPluginOpentelemetry#path}
  */
  readonly path?: string;
}

export function gatewayPluginOpentelemetryPartialsToTerraform(struct?: GatewayPluginOpentelemetryPartials | cdktf.IResolvable): any {
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


export function gatewayPluginOpentelemetryPartialsToHclTerraform(struct?: GatewayPluginOpentelemetryPartials | cdktf.IResolvable): any {
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

export class GatewayPluginOpentelemetryPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOpentelemetryPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginOpentelemetryPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOpentelemetryPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOpentelemetryPartialsOutputReference {
    return new GatewayPluginOpentelemetryPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOpentelemetryRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#id GatewayPluginOpentelemetry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOpentelemetryRouteToTerraform(struct?: GatewayPluginOpentelemetryRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOpentelemetryRouteToHclTerraform(struct?: GatewayPluginOpentelemetryRoute | cdktf.IResolvable): any {
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

export class GatewayPluginOpentelemetryRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpentelemetryService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#id GatewayPluginOpentelemetry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOpentelemetryServiceToTerraform(struct?: GatewayPluginOpentelemetryService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOpentelemetryServiceToHclTerraform(struct?: GatewayPluginOpentelemetryService | cdktf.IResolvable): any {
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

export class GatewayPluginOpentelemetryServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpentelemetryService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpentelemetryService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry konnect_gateway_plugin_opentelemetry}
*/
export class GatewayPluginOpentelemetry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_opentelemetry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginOpentelemetry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginOpentelemetry to import
  * @param importFromId The id of the existing GatewayPluginOpentelemetry that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginOpentelemetry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_opentelemetry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opentelemetry konnect_gateway_plugin_opentelemetry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginOpentelemetryConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginOpentelemetryConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_opentelemetry',
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
  private _config = new GatewayPluginOpentelemetryConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginOpentelemetryConfigA) {
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
  private _consumer = new GatewayPluginOpentelemetryConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginOpentelemetryConsumer) {
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
  private _ordering = new GatewayPluginOpentelemetryOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginOpentelemetryOrdering) {
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
  private _partials = new GatewayPluginOpentelemetryPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginOpentelemetryPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginOpentelemetryRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginOpentelemetryRoute) {
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
  private _service = new GatewayPluginOpentelemetryServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginOpentelemetryService) {
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
      config: gatewayPluginOpentelemetryConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginOpentelemetryConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginOpentelemetryOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginOpentelemetryPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginOpentelemetryRouteToTerraform(this._route.internalValue),
      service: gatewayPluginOpentelemetryServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginOpentelemetryConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpentelemetryConfigA",
      },
      consumer: {
        value: gatewayPluginOpentelemetryConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpentelemetryConsumer",
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
        value: gatewayPluginOpentelemetryOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpentelemetryOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginOpentelemetryPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginOpentelemetryPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginOpentelemetryRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpentelemetryRoute",
      },
      service: {
        value: gatewayPluginOpentelemetryServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpentelemetryService",
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
