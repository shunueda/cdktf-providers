// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginStatsdAdvancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#config GatewayPluginStatsdAdvanced#config}
  */
  readonly config?: GatewayPluginStatsdAdvancedConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#consumer GatewayPluginStatsdAdvanced#consumer}
  */
  readonly consumer?: GatewayPluginStatsdAdvancedConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#control_plane_id GatewayPluginStatsdAdvanced#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#created_at GatewayPluginStatsdAdvanced#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#enabled GatewayPluginStatsdAdvanced#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#id GatewayPluginStatsdAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#instance_name GatewayPluginStatsdAdvanced#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#ordering GatewayPluginStatsdAdvanced#ordering}
  */
  readonly ordering?: GatewayPluginStatsdAdvancedOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#partials GatewayPluginStatsdAdvanced#partials}
  */
  readonly partials?: GatewayPluginStatsdAdvancedPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#protocols GatewayPluginStatsdAdvanced#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#route GatewayPluginStatsdAdvanced#route}
  */
  readonly route?: GatewayPluginStatsdAdvancedRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#service GatewayPluginStatsdAdvanced#service}
  */
  readonly service?: GatewayPluginStatsdAdvancedService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#tags GatewayPluginStatsdAdvanced#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#updated_at GatewayPluginStatsdAdvanced#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginStatsdAdvancedConfigMetrics {
  /**
  * must be one of ["consumer_id", "custom_id", "username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#consumer_identifier GatewayPluginStatsdAdvanced#consumer_identifier}
  */
  readonly consumerIdentifier?: string;
  /**
  * Not Null; must be one of ["cache_datastore_hits_total", "cache_datastore_misses_total", "kong_latency", "latency", "request_count", "request_per_user", "request_size", "response_size", "shdict_usage", "status_count", "status_count_per_user", "status_count_per_user_per_route", "status_count_per_workspace", "unique_users", "upstream_latency"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#name GatewayPluginStatsdAdvanced#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#sample_rate GatewayPluginStatsdAdvanced#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * must be one of ["service_host", "service_id", "service_name", "service_name_or_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#service_identifier GatewayPluginStatsdAdvanced#service_identifier}
  */
  readonly serviceIdentifier?: string;
  /**
  * Not Null; must be one of ["counter", "gauge", "histogram", "meter", "set", "timer"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#stat_type GatewayPluginStatsdAdvanced#stat_type}
  */
  readonly statType?: string;
  /**
  * must be one of ["workspace_id", "workspace_name"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#workspace_identifier GatewayPluginStatsdAdvanced#workspace_identifier}
  */
  readonly workspaceIdentifier?: string;
}

export function gatewayPluginStatsdAdvancedConfigMetricsToTerraform(struct?: GatewayPluginStatsdAdvancedConfigMetrics | cdktf.IResolvable): any {
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


export function gatewayPluginStatsdAdvancedConfigMetricsToHclTerraform(struct?: GatewayPluginStatsdAdvancedConfigMetrics | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdAdvancedConfigMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginStatsdAdvancedConfigMetrics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedConfigMetrics | cdktf.IResolvable | undefined) {
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

export class GatewayPluginStatsdAdvancedConfigMetricsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginStatsdAdvancedConfigMetrics[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginStatsdAdvancedConfigMetricsOutputReference {
    return new GatewayPluginStatsdAdvancedConfigMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginStatsdAdvancedConfigQueue {
  /**
  * The number of of queue delivery timers. -1 indicates unlimited. Default: 1; must be one of ["-1", "1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#concurrency_limit GatewayPluginStatsdAdvanced#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Time in seconds before the initial retry is made for a failing batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#initial_retry_delay GatewayPluginStatsdAdvanced#initial_retry_delay}
  */
  readonly initialRetryDelay?: number;
  /**
  * Maximum number of entries that can be processed at a time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#max_batch_size GatewayPluginStatsdAdvanced#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Maximum number of bytes that can be waiting on a queue, requires string content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#max_bytes GatewayPluginStatsdAdvanced#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum number of (fractional) seconds to elapse after the first entry was queued before the queue starts calling the handler. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#max_coalescing_delay GatewayPluginStatsdAdvanced#max_coalescing_delay}
  */
  readonly maxCoalescingDelay?: number;
  /**
  * Maximum number of entries that can be waiting on the queue. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#max_entries GatewayPluginStatsdAdvanced#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Maximum time in seconds between retries, caps exponential backoff. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#max_retry_delay GatewayPluginStatsdAdvanced#max_retry_delay}
  */
  readonly maxRetryDelay?: number;
  /**
  * Time in seconds before the queue gives up calling a failed handler for a batch. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#max_retry_time GatewayPluginStatsdAdvanced#max_retry_time}
  */
  readonly maxRetryTime?: number;
}

export function gatewayPluginStatsdAdvancedConfigQueueToTerraform(struct?: GatewayPluginStatsdAdvancedConfigQueue | cdktf.IResolvable): any {
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


export function gatewayPluginStatsdAdvancedConfigQueueToHclTerraform(struct?: GatewayPluginStatsdAdvancedConfigQueue | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdAdvancedConfigQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdAdvancedConfigQueue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedConfigQueue | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdAdvancedConfigA {
  /**
  * List of status code ranges that are allowed to be logged in metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#allow_status_codes GatewayPluginStatsdAdvanced#allow_status_codes}
  */
  readonly allowStatusCodes?: string[];
  /**
  * The default consumer identifier for metrics. This will take effect when a metric's consumer identifier is omitted. Allowed values are `custom_id`, `consumer_id`, `username`. Default: "custom_id"; must be one of ["consumer_id", "custom_id", "username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#consumer_identifier_default GatewayPluginStatsdAdvanced#consumer_identifier_default}
  */
  readonly consumerIdentifierDefault?: string;
  /**
  * A string representing a host name, such as example.com. Default: "localhost"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#host GatewayPluginStatsdAdvanced#host}
  */
  readonly host?: string;
  /**
  * Include the `hostname` in the `prefix` for each metric name. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#hostname_in_prefix GatewayPluginStatsdAdvanced#hostname_in_prefix}
  */
  readonly hostnameInPrefix?: boolean | cdktf.IResolvable;
  /**
  * List of Metrics to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#metrics GatewayPluginStatsdAdvanced#metrics}
  */
  readonly metrics?: GatewayPluginStatsdAdvancedConfigMetrics[] | cdktf.IResolvable;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 8125
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#port GatewayPluginStatsdAdvanced#port}
  */
  readonly port?: number;
  /**
  * String to prefix to each metric's name. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#prefix GatewayPluginStatsdAdvanced#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#queue GatewayPluginStatsdAdvanced#queue}
  */
  readonly queue?: GatewayPluginStatsdAdvancedConfigQueue;
  /**
  * The default service identifier for metrics. This will take effect when a metric's service identifier is omitted. Allowed values are `service_name_or_host`, `service_id`, `service_name`, `service_host`. Default: "service_name_or_host"; must be one of ["service_host", "service_id", "service_name", "service_name_or_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#service_identifier_default GatewayPluginStatsdAdvanced#service_identifier_default}
  */
  readonly serviceIdentifierDefault?: string;
  /**
  * Combine UDP packet up to the size configured. If zero (0), don't combine the UDP packet. Must be a number between 0 and 65507 (inclusive). Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#udp_packet_size GatewayPluginStatsdAdvanced#udp_packet_size}
  */
  readonly udpPacketSize?: number;
  /**
  * Use TCP instead of UDP. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#use_tcp GatewayPluginStatsdAdvanced#use_tcp}
  */
  readonly useTcp?: boolean | cdktf.IResolvable;
  /**
  * The default workspace identifier for metrics. This will take effect when a metric's workspace identifier is omitted. Allowed values are `workspace_id`, `workspace_name`. Default: "workspace_id"; must be one of ["workspace_id", "workspace_name"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#workspace_identifier_default GatewayPluginStatsdAdvanced#workspace_identifier_default}
  */
  readonly workspaceIdentifierDefault?: string;
}

export function gatewayPluginStatsdAdvancedConfigAToTerraform(struct?: GatewayPluginStatsdAdvancedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowStatusCodes),
    consumer_identifier_default: cdktf.stringToTerraform(struct!.consumerIdentifierDefault),
    host: cdktf.stringToTerraform(struct!.host),
    hostname_in_prefix: cdktf.booleanToTerraform(struct!.hostnameInPrefix),
    metrics: cdktf.listMapper(gatewayPluginStatsdAdvancedConfigMetricsToTerraform, false)(struct!.metrics),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    queue: gatewayPluginStatsdAdvancedConfigQueueToTerraform(struct!.queue),
    service_identifier_default: cdktf.stringToTerraform(struct!.serviceIdentifierDefault),
    udp_packet_size: cdktf.numberToTerraform(struct!.udpPacketSize),
    use_tcp: cdktf.booleanToTerraform(struct!.useTcp),
    workspace_identifier_default: cdktf.stringToTerraform(struct!.workspaceIdentifierDefault),
  }
}


export function gatewayPluginStatsdAdvancedConfigAToHclTerraform(struct?: GatewayPluginStatsdAdvancedConfigA | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gatewayPluginStatsdAdvancedConfigMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginStatsdAdvancedConfigMetricsList",
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
      value: gatewayPluginStatsdAdvancedConfigQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginStatsdAdvancedConfigQueue",
    },
    service_identifier_default: {
      value: cdktf.stringToHclTerraform(struct!.serviceIdentifierDefault),
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

export class GatewayPluginStatsdAdvancedConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdAdvancedConfigA | cdktf.IResolvable | undefined {
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
    if (this._serviceIdentifierDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIdentifierDefault = this._serviceIdentifierDefault;
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

  public set internalValue(value: GatewayPluginStatsdAdvancedConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowStatusCodes = undefined;
      this._consumerIdentifierDefault = undefined;
      this._host = undefined;
      this._hostnameInPrefix = undefined;
      this._metrics.internalValue = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._queue.internalValue = undefined;
      this._serviceIdentifierDefault = undefined;
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
      this._host = value.host;
      this._hostnameInPrefix = value.hostnameInPrefix;
      this._metrics.internalValue = value.metrics;
      this._port = value.port;
      this._prefix = value.prefix;
      this._queue.internalValue = value.queue;
      this._serviceIdentifierDefault = value.serviceIdentifierDefault;
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
  private _metrics = new GatewayPluginStatsdAdvancedConfigMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: GatewayPluginStatsdAdvancedConfigMetrics[] | cdktf.IResolvable) {
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
  private _queue = new GatewayPluginStatsdAdvancedConfigQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: GatewayPluginStatsdAdvancedConfigQueue) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
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
export interface GatewayPluginStatsdAdvancedConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#id GatewayPluginStatsdAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginStatsdAdvancedConsumerToTerraform(struct?: GatewayPluginStatsdAdvancedConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginStatsdAdvancedConsumerToHclTerraform(struct?: GatewayPluginStatsdAdvancedConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdAdvancedConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdAdvancedConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdAdvancedOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#access GatewayPluginStatsdAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginStatsdAdvancedOrderingAfterToTerraform(struct?: GatewayPluginStatsdAdvancedOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginStatsdAdvancedOrderingAfterToHclTerraform(struct?: GatewayPluginStatsdAdvancedOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdAdvancedOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdAdvancedOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdAdvancedOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#access GatewayPluginStatsdAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginStatsdAdvancedOrderingBeforeToTerraform(struct?: GatewayPluginStatsdAdvancedOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginStatsdAdvancedOrderingBeforeToHclTerraform(struct?: GatewayPluginStatsdAdvancedOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdAdvancedOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdAdvancedOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdAdvancedOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#after GatewayPluginStatsdAdvanced#after}
  */
  readonly after?: GatewayPluginStatsdAdvancedOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#before GatewayPluginStatsdAdvanced#before}
  */
  readonly before?: GatewayPluginStatsdAdvancedOrderingBefore;
}

export function gatewayPluginStatsdAdvancedOrderingToTerraform(struct?: GatewayPluginStatsdAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginStatsdAdvancedOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginStatsdAdvancedOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginStatsdAdvancedOrderingToHclTerraform(struct?: GatewayPluginStatsdAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginStatsdAdvancedOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginStatsdAdvancedOrderingAfter",
    },
    before: {
      value: gatewayPluginStatsdAdvancedOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginStatsdAdvancedOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginStatsdAdvancedOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdAdvancedOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginStatsdAdvancedOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginStatsdAdvancedOrderingAfter) {
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
  private _before = new GatewayPluginStatsdAdvancedOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginStatsdAdvancedOrderingBefore) {
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
export interface GatewayPluginStatsdAdvancedPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#id GatewayPluginStatsdAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#name GatewayPluginStatsdAdvanced#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#path GatewayPluginStatsdAdvanced#path}
  */
  readonly path?: string;
}

export function gatewayPluginStatsdAdvancedPartialsToTerraform(struct?: GatewayPluginStatsdAdvancedPartials | cdktf.IResolvable): any {
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


export function gatewayPluginStatsdAdvancedPartialsToHclTerraform(struct?: GatewayPluginStatsdAdvancedPartials | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdAdvancedPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginStatsdAdvancedPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginStatsdAdvancedPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginStatsdAdvancedPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginStatsdAdvancedPartialsOutputReference {
    return new GatewayPluginStatsdAdvancedPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginStatsdAdvancedRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#id GatewayPluginStatsdAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginStatsdAdvancedRouteToTerraform(struct?: GatewayPluginStatsdAdvancedRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginStatsdAdvancedRouteToHclTerraform(struct?: GatewayPluginStatsdAdvancedRoute | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdAdvancedRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdAdvancedRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginStatsdAdvancedService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#id GatewayPluginStatsdAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginStatsdAdvancedServiceToTerraform(struct?: GatewayPluginStatsdAdvancedService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginStatsdAdvancedServiceToHclTerraform(struct?: GatewayPluginStatsdAdvancedService | cdktf.IResolvable): any {
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

export class GatewayPluginStatsdAdvancedServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginStatsdAdvancedService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginStatsdAdvancedService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced konnect_gateway_plugin_statsd_advanced}
*/
export class GatewayPluginStatsdAdvanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_statsd_advanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginStatsdAdvanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginStatsdAdvanced to import
  * @param importFromId The id of the existing GatewayPluginStatsdAdvanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginStatsdAdvanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_statsd_advanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_statsd_advanced konnect_gateway_plugin_statsd_advanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginStatsdAdvancedConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginStatsdAdvancedConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_statsd_advanced',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
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
  private _config = new GatewayPluginStatsdAdvancedConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginStatsdAdvancedConfigA) {
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
  private _consumer = new GatewayPluginStatsdAdvancedConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginStatsdAdvancedConsumer) {
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
  private _ordering = new GatewayPluginStatsdAdvancedOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginStatsdAdvancedOrdering) {
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
  private _partials = new GatewayPluginStatsdAdvancedPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginStatsdAdvancedPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginStatsdAdvancedRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginStatsdAdvancedRoute) {
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
  private _service = new GatewayPluginStatsdAdvancedServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginStatsdAdvancedService) {
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
      config: gatewayPluginStatsdAdvancedConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginStatsdAdvancedConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginStatsdAdvancedOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginStatsdAdvancedPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginStatsdAdvancedRouteToTerraform(this._route.internalValue),
      service: gatewayPluginStatsdAdvancedServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginStatsdAdvancedConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdAdvancedConfigA",
      },
      consumer: {
        value: gatewayPluginStatsdAdvancedConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdAdvancedConsumer",
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
        value: gatewayPluginStatsdAdvancedOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdAdvancedOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginStatsdAdvancedPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginStatsdAdvancedPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginStatsdAdvancedRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdAdvancedRoute",
      },
      service: {
        value: gatewayPluginStatsdAdvancedServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginStatsdAdvancedService",
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
