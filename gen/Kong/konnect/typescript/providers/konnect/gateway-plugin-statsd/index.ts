// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginStatsdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#config GatewayPluginStatsd#config}
  */
  readonly config?: GatewayPluginStatsdConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#consumer GatewayPluginStatsd#consumer}
  */
  readonly consumer?: GatewayPluginStatsdConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#control_plane_id GatewayPluginStatsd#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#created_at GatewayPluginStatsd#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#enabled GatewayPluginStatsd#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#id GatewayPluginStatsd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#instance_name GatewayPluginStatsd#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#ordering GatewayPluginStatsd#ordering}
  */
  readonly ordering?: GatewayPluginStatsdOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#partials GatewayPluginStatsd#partials}
  */
  readonly partials?: GatewayPluginStatsdPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#protocols GatewayPluginStatsd#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#route GatewayPluginStatsd#route}
  */
  readonly route?: GatewayPluginStatsdRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#service GatewayPluginStatsd#service}
  */
  readonly service?: GatewayPluginStatsdService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#tags GatewayPluginStatsd#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#updated_at GatewayPluginStatsd#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginStatsdConfigMetrics {
  /**
  * Authenticated user detail. must be one of ["consumer_id", "custom_id", "username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#consumer_identifier GatewayPluginStatsd#consumer_identifier}
  */
  readonly consumerIdentifier?: string;
  /**
  * StatsD metric’s name. Not Null; must be one of ["cache_datastore_hits_total", "cache_datastore_misses_total", "kong_latency", "latency", "request_count", "request_per_user", "request_size", "response_size", "shdict_usage", "status_count", "status_count_per_user", "status_count_per_user_per_route", "status_count_per_workspace", "unique_users", "upstream_latency"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#name GatewayPluginStatsd#name}
  */
  readonly name?: string;
  /**
  * Sampling rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#sample_rate GatewayPluginStatsd#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Service detail. must be one of ["service_host", "service_id", "service_name", "service_name_or_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#service_identifier GatewayPluginStatsd#service_identifier}
  */
  readonly serviceIdentifier?: string;
  /**
  * Determines what sort of event a metric represents. Not Null; must be one of ["counter", "gauge", "histogram", "meter", "set", "timer"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#stat_type GatewayPluginStatsd#stat_type}
  */
  readonly statType?: string;
  /**
  * Workspace detail. must be one of ["workspace_id", "workspace_name"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#workspace_identifier GatewayPluginStatsd#workspace_identifier}
  */
  readonly workspaceIdentifier?: string;
}

export function gatewayPluginStatsdConfigMetricsToTerraform(struct?: GatewayPluginStatsdConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_identifier: cdktf.stringToTerraform(struct!.consumerIdentifier),
    name: cdktf.stringToTerraform(struct!.name),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    service_identifier: cdktf.stringToTerraform(struct!.serviceIdentifier),
    stat_type: cdktf.stringToTerraform(struct!.statType),
    workspace_identifier: cdktf.stringToTerraform(struct!.workspaceIdentifier),
  }
}


export function gatewayPluginStatsdConfigMetricsToHclTerraform(struct?: GatewayPluginStatsdConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_identifier: {
      value: cdktf.stringToHclTerraform(struct!.consumerIdentifier),
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
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_identifier: {
      value: cdktf.stringToHclTerraform(struct!.serviceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat_type: {
      value: cdktf.stringToHclTerraform(struct!.statType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_identifier: {
      value: cdktf.stringToHclTerraform(struct!.workspaceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginStatsdConfigMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginStatsdConfigMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerIdentifier = this._consumerIdentifier;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    if (this._serviceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIdentifier = this._serviceIdentifier;
    }
    if (this._statType !== undefined) {
      hasAnyValues = true;
      internalValueResult.statType = this._statType;
    }
    if (this._workspaceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceIdentifier = this._workspaceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginStatsdConfigMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerIdentifier = undefined;
      this._name = undefined;
      this._sampleRate = undefined;
      this._serviceIdentifier = undefined;
      this._statType = undefined;
      this._workspaceIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerIdentifier = value.consumerIdentifier;
      this._name = value.name;
      this._sampleRate = value.sampleRate;
      this._serviceIdentifier = value.serviceIdentifier;
      this._statType = value.statType;
      this._workspaceIdentifier = value.workspaceIdentifier;
    }
  }

  // consumer_identifier - computed: true, optional: true, required: false
  private _consumerIdentifier?: string; 
  public get consumerIdentifier() {
    return this.getStringAttribute('consumer_identifier');
  }
  public set consumerIdentifier(value: string) {
    this._consumerIdentifier = value;
  }
  public resetConsumerIdentifier() {
    this._consumerIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdentifierInput() {
    return this._consumerIdentifier;
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

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // service_identifier - computed: true, optional: true, required: false
  private _serviceIdentifier?: string; 
  public get serviceIdentifier() {
    return this.getStringAttribute('service_identifier');
  }
  public set serviceIdentifier(value: string) {
    this._serviceIdentifier = value;
  }
  public resetServiceIdentifier() {
    this._serviceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdentifierInput() {
    return this._serviceIdentifier;
  }

  // stat_type - computed: true, optional: true, required: false
  private _statType?: string; 
  public get statType() {
    return this.getStringAttribute('stat_type');
  }
  public set statType(value: string) {
    this._statType = value;
  }
  public resetStatType() {
    this._statType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statTypeInput() {
    return this._statType;
  }

  // workspace_identifier - computed: true, optional: true, required: false
  private _workspaceIdentifier?: string; 
  public get workspaceIdentifier() {
    return this.getStringAttribute('workspace_identifier');
  }
  public set workspaceIdentifier(value: string) {
    this._workspaceIdentifier = value;
  }
  public resetWorkspaceIdentifier() {
    this._workspaceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdentifierInput() {
    return this._workspaceIdentifier;
  }
}

export class GatewayPluginStatsdConfigMetricsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginStatsdConfigMetrics[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginStatsdConfigMetricsOutputReference {
    return new GatewayPluginStatsdConfigMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginStatsdConfigQueue {
  /**
  * The number of of queue delivery timers. -1 indicates unlimited. Default: 1; must be one of ["-1", "1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#concurrency_limit GatewayPluginStatsd#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Time in seconds before the initial retry is made for a failing batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#initial_retry_delay GatewayPluginStatsd#initial_retry_delay}
  */
  readonly initialRetryDelay?: number;
  /**
  * Maximum number of entries that can be processed at a time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#max_batch_size GatewayPluginStatsd#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Maximum number of bytes that can be waiting on a queue, requires string content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#max_bytes GatewayPluginStatsd#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum number of (fractional) seconds to elapse after the first entry was queued before the queue starts calling the handler. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#max_coalescing_delay GatewayPluginStatsd#max_coalescing_delay}
  */
  readonly maxCoalescingDelay?: number;
  /**
  * Maximum number of entries that can be waiting on the queue. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#max_entries GatewayPluginStatsd#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Maximum time in seconds between retries, caps exponential backoff. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#max_retry_delay GatewayPluginStatsd#max_retry_delay}
  */
  readonly maxRetryDelay?: number;
  /**
  * Time in seconds before the queue gives up calling a failed handler for a batch. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#max_retry_time GatewayPluginStatsd#max_retry_time}
  */
  readonly maxRetryTime?: number;
}

export function gatewayPluginStatsdConfigQueueToTerraform(struct?: GatewayPluginStatsdConfigQueue | cdktf.IResolvable): any {
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


export function gatewayPluginStatsdConfigQueueToHclTerraform(struct?: GatewayPluginStatsdConfigQueue | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdConfigQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdConfigQueue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdConfigQueue | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdConfigA {
  /**
  * List of status code ranges that are allowed to be logged in metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#allow_status_codes GatewayPluginStatsd#allow_status_codes}
  */
  readonly allowStatusCodes?: string[];
  /**
  * Default: "custom_id"; must be one of ["consumer_id", "custom_id", "username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#consumer_identifier_default GatewayPluginStatsd#consumer_identifier_default}
  */
  readonly consumerIdentifierDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#flush_timeout GatewayPluginStatsd#flush_timeout}
  */
  readonly flushTimeout?: number;
  /**
  * The IP address or hostname of StatsD server to send data to. Default: "localhost"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#host GatewayPluginStatsd#host}
  */
  readonly host?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#hostname_in_prefix GatewayPluginStatsd#hostname_in_prefix}
  */
  readonly hostnameInPrefix?: boolean | cdktf.IResolvable;
  /**
  * List of metrics to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#metrics GatewayPluginStatsd#metrics}
  */
  readonly metrics?: GatewayPluginStatsdConfigMetrics[] | cdktf.IResolvable;
  /**
  * The port of StatsD server to send data to. Default: 8125
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#port GatewayPluginStatsd#port}
  */
  readonly port?: number;
  /**
  * String to prefix to each metric's name. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#prefix GatewayPluginStatsd#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#queue GatewayPluginStatsd#queue}
  */
  readonly queue?: GatewayPluginStatsdConfigQueue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#queue_size GatewayPluginStatsd#queue_size}
  */
  readonly queueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#retry_count GatewayPluginStatsd#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Default: "service_name_or_host"; must be one of ["service_host", "service_id", "service_name", "service_name_or_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#service_identifier_default GatewayPluginStatsd#service_identifier_default}
  */
  readonly serviceIdentifierDefault?: string;
  /**
  * must be one of ["dogstatsd", "influxdb", "librato", "signalfx"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#tag_style GatewayPluginStatsd#tag_style}
  */
  readonly tagStyle?: string;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#udp_packet_size GatewayPluginStatsd#udp_packet_size}
  */
  readonly udpPacketSize?: number;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#use_tcp GatewayPluginStatsd#use_tcp}
  */
  readonly useTcp?: boolean | cdktf.IResolvable;
  /**
  * Default: "workspace_id"; must be one of ["workspace_id", "workspace_name"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#workspace_identifier_default GatewayPluginStatsd#workspace_identifier_default}
  */
  readonly workspaceIdentifierDefault?: string;
}

export function gatewayPluginStatsdConfigAToTerraform(struct?: GatewayPluginStatsdConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowStatusCodes),
    consumer_identifier_default: cdktf.stringToTerraform(struct!.consumerIdentifierDefault),
    flush_timeout: cdktf.numberToTerraform(struct!.flushTimeout),
    host: cdktf.stringToTerraform(struct!.host),
    hostname_in_prefix: cdktf.booleanToTerraform(struct!.hostnameInPrefix),
    metrics: cdktf.listMapper(gatewayPluginStatsdConfigMetricsToTerraform, false)(struct!.metrics),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    queue: gatewayPluginStatsdConfigQueueToTerraform(struct!.queue),
    queue_size: cdktf.numberToTerraform(struct!.queueSize),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    service_identifier_default: cdktf.stringToTerraform(struct!.serviceIdentifierDefault),
    tag_style: cdktf.stringToTerraform(struct!.tagStyle),
    udp_packet_size: cdktf.numberToTerraform(struct!.udpPacketSize),
    use_tcp: cdktf.booleanToTerraform(struct!.useTcp),
    workspace_identifier_default: cdktf.stringToTerraform(struct!.workspaceIdentifierDefault),
  }
}


export function gatewayPluginStatsdConfigAToHclTerraform(struct?: GatewayPluginStatsdConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_status_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    consumer_identifier_default: {
      value: cdktf.stringToHclTerraform(struct!.consumerIdentifierDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flushTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_in_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.hostnameInPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics: {
      value: cdktf.listMapperHcl(gatewayPluginStatsdConfigMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginStatsdConfigMetricsList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: gatewayPluginStatsdConfigQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginStatsdConfigQueue",
    },
    queue_size: {
      value: cdktf.numberToHclTerraform(struct!.queueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_identifier_default: {
      value: cdktf.stringToHclTerraform(struct!.serviceIdentifierDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_style: {
      value: cdktf.stringToHclTerraform(struct!.tagStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_packet_size: {
      value: cdktf.numberToHclTerraform(struct!.udpPacketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_tcp: {
      value: cdktf.booleanToHclTerraform(struct!.useTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    workspace_identifier_default: {
      value: cdktf.stringToHclTerraform(struct!.workspaceIdentifierDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginStatsdConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStatusCodes = this._allowStatusCodes;
    }
    if (this._consumerIdentifierDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerIdentifierDefault = this._consumerIdentifierDefault;
    }
    if (this._flushTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushTimeout = this._flushTimeout;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostnameInPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameInPrefix = this._hostnameInPrefix;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._queue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue?.internalValue;
    }
    if (this._queueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueSize = this._queueSize;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._serviceIdentifierDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIdentifierDefault = this._serviceIdentifierDefault;
    }
    if (this._tagStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagStyle = this._tagStyle;
    }
    if (this._udpPacketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPacketSize = this._udpPacketSize;
    }
    if (this._useTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTcp = this._useTcp;
    }
    if (this._workspaceIdentifierDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceIdentifierDefault = this._workspaceIdentifierDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginStatsdConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowStatusCodes = undefined;
      this._consumerIdentifierDefault = undefined;
      this._flushTimeout = undefined;
      this._host = undefined;
      this._hostnameInPrefix = undefined;
      this._metrics.internalValue = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._queue.internalValue = undefined;
      this._queueSize = undefined;
      this._retryCount = undefined;
      this._serviceIdentifierDefault = undefined;
      this._tagStyle = undefined;
      this._udpPacketSize = undefined;
      this._useTcp = undefined;
      this._workspaceIdentifierDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowStatusCodes = value.allowStatusCodes;
      this._consumerIdentifierDefault = value.consumerIdentifierDefault;
      this._flushTimeout = value.flushTimeout;
      this._host = value.host;
      this._hostnameInPrefix = value.hostnameInPrefix;
      this._metrics.internalValue = value.metrics;
      this._port = value.port;
      this._prefix = value.prefix;
      this._queue.internalValue = value.queue;
      this._queueSize = value.queueSize;
      this._retryCount = value.retryCount;
      this._serviceIdentifierDefault = value.serviceIdentifierDefault;
      this._tagStyle = value.tagStyle;
      this._udpPacketSize = value.udpPacketSize;
      this._useTcp = value.useTcp;
      this._workspaceIdentifierDefault = value.workspaceIdentifierDefault;
    }
  }

  // allow_status_codes - computed: true, optional: true, required: false
  private _allowStatusCodes?: string[]; 
  public get allowStatusCodes() {
    return this.getListAttribute('allow_status_codes');
  }
  public set allowStatusCodes(value: string[]) {
    this._allowStatusCodes = value;
  }
  public resetAllowStatusCodes() {
    this._allowStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStatusCodesInput() {
    return this._allowStatusCodes;
  }

  // consumer_identifier_default - computed: true, optional: true, required: false
  private _consumerIdentifierDefault?: string; 
  public get consumerIdentifierDefault() {
    return this.getStringAttribute('consumer_identifier_default');
  }
  public set consumerIdentifierDefault(value: string) {
    this._consumerIdentifierDefault = value;
  }
  public resetConsumerIdentifierDefault() {
    this._consumerIdentifierDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdentifierDefaultInput() {
    return this._consumerIdentifierDefault;
  }

  // flush_timeout - computed: true, optional: true, required: false
  private _flushTimeout?: number; 
  public get flushTimeout() {
    return this.getNumberAttribute('flush_timeout');
  }
  public set flushTimeout(value: number) {
    this._flushTimeout = value;
  }
  public resetFlushTimeout() {
    this._flushTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushTimeoutInput() {
    return this._flushTimeout;
  }

  // host - computed: true, optional: true, required: false
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

  // hostname_in_prefix - computed: true, optional: true, required: false
  private _hostnameInPrefix?: boolean | cdktf.IResolvable; 
  public get hostnameInPrefix() {
    return this.getBooleanAttribute('hostname_in_prefix');
  }
  public set hostnameInPrefix(value: boolean | cdktf.IResolvable) {
    this._hostnameInPrefix = value;
  }
  public resetHostnameInPrefix() {
    this._hostnameInPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInPrefixInput() {
    return this._hostnameInPrefix;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics = new GatewayPluginStatsdConfigMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: GatewayPluginStatsdConfigMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // port - computed: true, optional: true, required: false
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // queue - computed: true, optional: true, required: false
  private _queue = new GatewayPluginStatsdConfigQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: GatewayPluginStatsdConfigQueue) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // queue_size - computed: true, optional: true, required: false
  private _queueSize?: number; 
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }
  public set queueSize(value: number) {
    this._queueSize = value;
  }
  public resetQueueSize() {
    this._queueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSizeInput() {
    return this._queueSize;
  }

  // retry_count - computed: true, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // service_identifier_default - computed: true, optional: true, required: false
  private _serviceIdentifierDefault?: string; 
  public get serviceIdentifierDefault() {
    return this.getStringAttribute('service_identifier_default');
  }
  public set serviceIdentifierDefault(value: string) {
    this._serviceIdentifierDefault = value;
  }
  public resetServiceIdentifierDefault() {
    this._serviceIdentifierDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdentifierDefaultInput() {
    return this._serviceIdentifierDefault;
  }

  // tag_style - computed: true, optional: true, required: false
  private _tagStyle?: string; 
  public get tagStyle() {
    return this.getStringAttribute('tag_style');
  }
  public set tagStyle(value: string) {
    this._tagStyle = value;
  }
  public resetTagStyle() {
    this._tagStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStyleInput() {
    return this._tagStyle;
  }

  // udp_packet_size - computed: true, optional: true, required: false
  private _udpPacketSize?: number; 
  public get udpPacketSize() {
    return this.getNumberAttribute('udp_packet_size');
  }
  public set udpPacketSize(value: number) {
    this._udpPacketSize = value;
  }
  public resetUdpPacketSize() {
    this._udpPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPacketSizeInput() {
    return this._udpPacketSize;
  }

  // use_tcp - computed: true, optional: true, required: false
  private _useTcp?: boolean | cdktf.IResolvable; 
  public get useTcp() {
    return this.getBooleanAttribute('use_tcp');
  }
  public set useTcp(value: boolean | cdktf.IResolvable) {
    this._useTcp = value;
  }
  public resetUseTcp() {
    this._useTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTcpInput() {
    return this._useTcp;
  }

  // workspace_identifier_default - computed: true, optional: true, required: false
  private _workspaceIdentifierDefault?: string; 
  public get workspaceIdentifierDefault() {
    return this.getStringAttribute('workspace_identifier_default');
  }
  public set workspaceIdentifierDefault(value: string) {
    this._workspaceIdentifierDefault = value;
  }
  public resetWorkspaceIdentifierDefault() {
    this._workspaceIdentifierDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdentifierDefaultInput() {
    return this._workspaceIdentifierDefault;
  }
}
export interface GatewayPluginStatsdConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#id GatewayPluginStatsd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginStatsdConsumerToTerraform(struct?: GatewayPluginStatsdConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginStatsdConsumerToHclTerraform(struct?: GatewayPluginStatsdConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#access GatewayPluginStatsd#access}
  */
  readonly access?: string[];
}

export function gatewayPluginStatsdOrderingAfterToTerraform(struct?: GatewayPluginStatsdOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginStatsdOrderingAfterToHclTerraform(struct?: GatewayPluginStatsdOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#access GatewayPluginStatsd#access}
  */
  readonly access?: string[];
}

export function gatewayPluginStatsdOrderingBeforeToTerraform(struct?: GatewayPluginStatsdOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginStatsdOrderingBeforeToHclTerraform(struct?: GatewayPluginStatsdOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#after GatewayPluginStatsd#after}
  */
  readonly after?: GatewayPluginStatsdOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#before GatewayPluginStatsd#before}
  */
  readonly before?: GatewayPluginStatsdOrderingBefore;
}

export function gatewayPluginStatsdOrderingToTerraform(struct?: GatewayPluginStatsdOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginStatsdOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginStatsdOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginStatsdOrderingToHclTerraform(struct?: GatewayPluginStatsdOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginStatsdOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginStatsdOrderingAfter",
    },
    before: {
      value: gatewayPluginStatsdOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginStatsdOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginStatsdOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginStatsdOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginStatsdOrderingAfter) {
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
  private _before = new GatewayPluginStatsdOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginStatsdOrderingBefore) {
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
export interface GatewayPluginStatsdPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#id GatewayPluginStatsd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#name GatewayPluginStatsd#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#path GatewayPluginStatsd#path}
  */
  readonly path?: string;
}

export function gatewayPluginStatsdPartialsToTerraform(struct?: GatewayPluginStatsdPartials | cdktf.IResolvable): any {
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


export function gatewayPluginStatsdPartialsToHclTerraform(struct?: GatewayPluginStatsdPartials | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginStatsdPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginStatsdPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginStatsdPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginStatsdPartialsOutputReference {
    return new GatewayPluginStatsdPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginStatsdRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#id GatewayPluginStatsd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginStatsdRouteToTerraform(struct?: GatewayPluginStatsdRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginStatsdRouteToHclTerraform(struct?: GatewayPluginStatsdRoute | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#id GatewayPluginStatsd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginStatsdServiceToTerraform(struct?: GatewayPluginStatsdService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginStatsdServiceToHclTerraform(struct?: GatewayPluginStatsdService | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd konnect_gateway_plugin_statsd}
*/
export class GatewayPluginStatsd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_statsd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginStatsd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginStatsd to import
  * @param importFromId The id of the existing GatewayPluginStatsd that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginStatsd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_statsd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_statsd konnect_gateway_plugin_statsd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginStatsdConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginStatsdConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_statsd',
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
  private _config = new GatewayPluginStatsdConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginStatsdConfigA) {
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
  private _consumer = new GatewayPluginStatsdConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginStatsdConsumer) {
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
  private _ordering = new GatewayPluginStatsdOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginStatsdOrdering) {
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
  private _partials = new GatewayPluginStatsdPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginStatsdPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginStatsdRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginStatsdRoute) {
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
  private _service = new GatewayPluginStatsdServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginStatsdService) {
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
      config: gatewayPluginStatsdConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginStatsdConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginStatsdOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginStatsdPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginStatsdRouteToTerraform(this._route.internalValue),
      service: gatewayPluginStatsdServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginStatsdConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdConfigA",
      },
      consumer: {
        value: gatewayPluginStatsdConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdConsumer",
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
        value: gatewayPluginStatsdOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginStatsdPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginStatsdPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginStatsdRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdRoute",
      },
      service: {
        value: gatewayPluginStatsdServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdService",
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
