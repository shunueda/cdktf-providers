// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#name RedisInstance#name}
  */
  readonly name: string;
  /**
  * Configuration parameters. Please note that removing a previously configured field from your Terraform configuration won't replace its value in the API. To update a previously configured field, explicitly set a new value for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#parameters RedisInstance#parameters}
  */
  readonly parameters?: RedisInstanceParameters;
  /**
  * The selected plan name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#plan_name RedisInstance#plan_name}
  */
  readonly planName: string;
  /**
  * STACKIT project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#project_id RedisInstance#project_id}
  */
  readonly projectId: string;
  /**
  * The service version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#version RedisInstance#version}
  */
  readonly version: string;
}
export interface RedisInstanceParameters {
  /**
  * The number of milliseconds after which the instance is considered down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#down_after_milliseconds RedisInstance#down_after_milliseconds}
  */
  readonly downAfterMilliseconds?: number;
  /**
  * Enable monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#enable_monitoring RedisInstance#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * The failover timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#failover_timeout RedisInstance#failover_timeout}
  */
  readonly failoverTimeout?: number;
  /**
  * Graphite server URL (host and port). If set, monitoring with Graphite will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#graphite RedisInstance#graphite}
  */
  readonly graphite?: string;
  /**
  * The lazy eviction enablement (yes or no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#lazyfree_lazy_eviction RedisInstance#lazyfree_lazy_eviction}
  */
  readonly lazyfreeLazyEviction?: string;
  /**
  * The lazy expire enablement (yes or no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#lazyfree_lazy_expire RedisInstance#lazyfree_lazy_expire}
  */
  readonly lazyfreeLazyExpire?: string;
  /**
  * The Lua time limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#lua_time_limit RedisInstance#lua_time_limit}
  */
  readonly luaTimeLimit?: number;
  /**
  * The maximum disk threshold in MB. If the disk usage exceeds this threshold, the instance will be stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#max_disk_threshold RedisInstance#max_disk_threshold}
  */
  readonly maxDiskThreshold?: number;
  /**
  * The maximum number of clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#maxclients RedisInstance#maxclients}
  */
  readonly maxclients?: number;
  /**
  * The policy to handle the maximum memory (volatile-lru, noeviction, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#maxmemory_policy RedisInstance#maxmemory_policy}
  */
  readonly maxmemoryPolicy?: string;
  /**
  * The maximum memory samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#maxmemory_samples RedisInstance#maxmemory_samples}
  */
  readonly maxmemorySamples?: number;
  /**
  * The frequency in seconds at which metrics are emitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#metrics_frequency RedisInstance#metrics_frequency}
  */
  readonly metricsFrequency?: number;
  /**
  * The prefix for the metrics. Could be useful when using Graphite monitoring to prefix the metrics with a certain value, like an API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#metrics_prefix RedisInstance#metrics_prefix}
  */
  readonly metricsPrefix?: string;
  /**
  * The minimum replicas maximum lag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#min_replicas_max_lag RedisInstance#min_replicas_max_lag}
  */
  readonly minReplicasMaxLag?: number;
  /**
  * The ID of the STACKIT monitoring instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#monitoring_instance_id RedisInstance#monitoring_instance_id}
  */
  readonly monitoringInstanceId?: string;
  /**
  * The notify keyspace events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#notify_keyspace_events RedisInstance#notify_keyspace_events}
  */
  readonly notifyKeyspaceEvents?: string;
  /**
  * Comma separated list of IP networks in CIDR notation which are allowed to access this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#sgw_acl RedisInstance#sgw_acl}
  */
  readonly sgwAcl?: string;
  /**
  * The snapshot configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#snapshot RedisInstance#snapshot}
  */
  readonly snapshot?: string;
  /**
  * List of syslog servers to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#syslog RedisInstance#syslog}
  */
  readonly syslog?: string[];
  /**
  * List of TLS ciphers to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#tls_ciphers RedisInstance#tls_ciphers}
  */
  readonly tlsCiphers?: string[];
  /**
  * TLS cipher suites to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#tls_ciphersuites RedisInstance#tls_ciphersuites}
  */
  readonly tlsCiphersuites?: string;
  /**
  * TLS protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#tls_protocols RedisInstance#tls_protocols}
  */
  readonly tlsProtocols?: string;
}

export function redisInstanceParametersToTerraform(struct?: RedisInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down_after_milliseconds: cdktf.numberToTerraform(struct!.downAfterMilliseconds),
    enable_monitoring: cdktf.booleanToTerraform(struct!.enableMonitoring),
    failover_timeout: cdktf.numberToTerraform(struct!.failoverTimeout),
    graphite: cdktf.stringToTerraform(struct!.graphite),
    lazyfree_lazy_eviction: cdktf.stringToTerraform(struct!.lazyfreeLazyEviction),
    lazyfree_lazy_expire: cdktf.stringToTerraform(struct!.lazyfreeLazyExpire),
    lua_time_limit: cdktf.numberToTerraform(struct!.luaTimeLimit),
    max_disk_threshold: cdktf.numberToTerraform(struct!.maxDiskThreshold),
    maxclients: cdktf.numberToTerraform(struct!.maxclients),
    maxmemory_policy: cdktf.stringToTerraform(struct!.maxmemoryPolicy),
    maxmemory_samples: cdktf.numberToTerraform(struct!.maxmemorySamples),
    metrics_frequency: cdktf.numberToTerraform(struct!.metricsFrequency),
    metrics_prefix: cdktf.stringToTerraform(struct!.metricsPrefix),
    min_replicas_max_lag: cdktf.numberToTerraform(struct!.minReplicasMaxLag),
    monitoring_instance_id: cdktf.stringToTerraform(struct!.monitoringInstanceId),
    notify_keyspace_events: cdktf.stringToTerraform(struct!.notifyKeyspaceEvents),
    sgw_acl: cdktf.stringToTerraform(struct!.sgwAcl),
    snapshot: cdktf.stringToTerraform(struct!.snapshot),
    syslog: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syslog),
    tls_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsCiphers),
    tls_ciphersuites: cdktf.stringToTerraform(struct!.tlsCiphersuites),
    tls_protocols: cdktf.stringToTerraform(struct!.tlsProtocols),
  }
}


export function redisInstanceParametersToHclTerraform(struct?: RedisInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down_after_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.downAfterMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover_timeout: {
      value: cdktf.numberToHclTerraform(struct!.failoverTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graphite: {
      value: cdktf.stringToHclTerraform(struct!.graphite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lazyfree_lazy_eviction: {
      value: cdktf.stringToHclTerraform(struct!.lazyfreeLazyEviction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lazyfree_lazy_expire: {
      value: cdktf.stringToHclTerraform(struct!.lazyfreeLazyExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lua_time_limit: {
      value: cdktf.numberToHclTerraform(struct!.luaTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_disk_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxclients: {
      value: cdktf.numberToHclTerraform(struct!.maxclients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxmemory_policy: {
      value: cdktf.stringToHclTerraform(struct!.maxmemoryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxmemory_samples: {
      value: cdktf.numberToHclTerraform(struct!.maxmemorySamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_frequency: {
      value: cdktf.numberToHclTerraform(struct!.metricsFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_prefix: {
      value: cdktf.stringToHclTerraform(struct!.metricsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_replicas_max_lag: {
      value: cdktf.numberToHclTerraform(struct!.minReplicasMaxLag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitoring_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.monitoringInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_keyspace_events: {
      value: cdktf.stringToHclTerraform(struct!.notifyKeyspaceEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sgw_acl: {
      value: cdktf.stringToHclTerraform(struct!.sgwAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: cdktf.stringToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syslog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsCiphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_ciphersuites: {
      value: cdktf.stringToHclTerraform(struct!.tlsCiphersuites),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_protocols: {
      value: cdktf.stringToHclTerraform(struct!.tlsProtocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisInstanceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downAfterMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.downAfterMilliseconds = this._downAfterMilliseconds;
    }
    if (this._enableMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMonitoring = this._enableMonitoring;
    }
    if (this._failoverTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTimeout = this._failoverTimeout;
    }
    if (this._graphite !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphite = this._graphite;
    }
    if (this._lazyfreeLazyEviction !== undefined) {
      hasAnyValues = true;
      internalValueResult.lazyfreeLazyEviction = this._lazyfreeLazyEviction;
    }
    if (this._lazyfreeLazyExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.lazyfreeLazyExpire = this._lazyfreeLazyExpire;
    }
    if (this._luaTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaTimeLimit = this._luaTimeLimit;
    }
    if (this._maxDiskThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskThreshold = this._maxDiskThreshold;
    }
    if (this._maxclients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxclients = this._maxclients;
    }
    if (this._maxmemoryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxmemoryPolicy = this._maxmemoryPolicy;
    }
    if (this._maxmemorySamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxmemorySamples = this._maxmemorySamples;
    }
    if (this._metricsFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsFrequency = this._metricsFrequency;
    }
    if (this._metricsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPrefix = this._metricsPrefix;
    }
    if (this._minReplicasMaxLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicasMaxLag = this._minReplicasMaxLag;
    }
    if (this._monitoringInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringInstanceId = this._monitoringInstanceId;
    }
    if (this._notifyKeyspaceEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyKeyspaceEvents = this._notifyKeyspaceEvents;
    }
    if (this._sgwAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgwAcl = this._sgwAcl;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._syslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog;
    }
    if (this._tlsCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCiphers = this._tlsCiphers;
    }
    if (this._tlsCiphersuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCiphersuites = this._tlsCiphersuites;
    }
    if (this._tlsProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsProtocols = this._tlsProtocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downAfterMilliseconds = undefined;
      this._enableMonitoring = undefined;
      this._failoverTimeout = undefined;
      this._graphite = undefined;
      this._lazyfreeLazyEviction = undefined;
      this._lazyfreeLazyExpire = undefined;
      this._luaTimeLimit = undefined;
      this._maxDiskThreshold = undefined;
      this._maxclients = undefined;
      this._maxmemoryPolicy = undefined;
      this._maxmemorySamples = undefined;
      this._metricsFrequency = undefined;
      this._metricsPrefix = undefined;
      this._minReplicasMaxLag = undefined;
      this._monitoringInstanceId = undefined;
      this._notifyKeyspaceEvents = undefined;
      this._sgwAcl = undefined;
      this._snapshot = undefined;
      this._syslog = undefined;
      this._tlsCiphers = undefined;
      this._tlsCiphersuites = undefined;
      this._tlsProtocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downAfterMilliseconds = value.downAfterMilliseconds;
      this._enableMonitoring = value.enableMonitoring;
      this._failoverTimeout = value.failoverTimeout;
      this._graphite = value.graphite;
      this._lazyfreeLazyEviction = value.lazyfreeLazyEviction;
      this._lazyfreeLazyExpire = value.lazyfreeLazyExpire;
      this._luaTimeLimit = value.luaTimeLimit;
      this._maxDiskThreshold = value.maxDiskThreshold;
      this._maxclients = value.maxclients;
      this._maxmemoryPolicy = value.maxmemoryPolicy;
      this._maxmemorySamples = value.maxmemorySamples;
      this._metricsFrequency = value.metricsFrequency;
      this._metricsPrefix = value.metricsPrefix;
      this._minReplicasMaxLag = value.minReplicasMaxLag;
      this._monitoringInstanceId = value.monitoringInstanceId;
      this._notifyKeyspaceEvents = value.notifyKeyspaceEvents;
      this._sgwAcl = value.sgwAcl;
      this._snapshot = value.snapshot;
      this._syslog = value.syslog;
      this._tlsCiphers = value.tlsCiphers;
      this._tlsCiphersuites = value.tlsCiphersuites;
      this._tlsProtocols = value.tlsProtocols;
    }
  }

  // down_after_milliseconds - computed: true, optional: true, required: false
  private _downAfterMilliseconds?: number; 
  public get downAfterMilliseconds() {
    return this.getNumberAttribute('down_after_milliseconds');
  }
  public set downAfterMilliseconds(value: number) {
    this._downAfterMilliseconds = value;
  }
  public resetDownAfterMilliseconds() {
    this._downAfterMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downAfterMillisecondsInput() {
    return this._downAfterMilliseconds;
  }

  // enable_monitoring - computed: true, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring;
  }

  // failover_timeout - computed: true, optional: true, required: false
  private _failoverTimeout?: number; 
  public get failoverTimeout() {
    return this.getNumberAttribute('failover_timeout');
  }
  public set failoverTimeout(value: number) {
    this._failoverTimeout = value;
  }
  public resetFailoverTimeout() {
    this._failoverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTimeoutInput() {
    return this._failoverTimeout;
  }

  // graphite - computed: true, optional: true, required: false
  private _graphite?: string; 
  public get graphite() {
    return this.getStringAttribute('graphite');
  }
  public set graphite(value: string) {
    this._graphite = value;
  }
  public resetGraphite() {
    this._graphite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteInput() {
    return this._graphite;
  }

  // lazyfree_lazy_eviction - computed: true, optional: true, required: false
  private _lazyfreeLazyEviction?: string; 
  public get lazyfreeLazyEviction() {
    return this.getStringAttribute('lazyfree_lazy_eviction');
  }
  public set lazyfreeLazyEviction(value: string) {
    this._lazyfreeLazyEviction = value;
  }
  public resetLazyfreeLazyEviction() {
    this._lazyfreeLazyEviction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lazyfreeLazyEvictionInput() {
    return this._lazyfreeLazyEviction;
  }

  // lazyfree_lazy_expire - computed: true, optional: true, required: false
  private _lazyfreeLazyExpire?: string; 
  public get lazyfreeLazyExpire() {
    return this.getStringAttribute('lazyfree_lazy_expire');
  }
  public set lazyfreeLazyExpire(value: string) {
    this._lazyfreeLazyExpire = value;
  }
  public resetLazyfreeLazyExpire() {
    this._lazyfreeLazyExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lazyfreeLazyExpireInput() {
    return this._lazyfreeLazyExpire;
  }

  // lua_time_limit - computed: true, optional: true, required: false
  private _luaTimeLimit?: number; 
  public get luaTimeLimit() {
    return this.getNumberAttribute('lua_time_limit');
  }
  public set luaTimeLimit(value: number) {
    this._luaTimeLimit = value;
  }
  public resetLuaTimeLimit() {
    this._luaTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luaTimeLimitInput() {
    return this._luaTimeLimit;
  }

  // max_disk_threshold - computed: true, optional: true, required: false
  private _maxDiskThreshold?: number; 
  public get maxDiskThreshold() {
    return this.getNumberAttribute('max_disk_threshold');
  }
  public set maxDiskThreshold(value: number) {
    this._maxDiskThreshold = value;
  }
  public resetMaxDiskThreshold() {
    this._maxDiskThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskThresholdInput() {
    return this._maxDiskThreshold;
  }

  // maxclients - computed: true, optional: true, required: false
  private _maxclients?: number; 
  public get maxclients() {
    return this.getNumberAttribute('maxclients');
  }
  public set maxclients(value: number) {
    this._maxclients = value;
  }
  public resetMaxclients() {
    this._maxclients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxclientsInput() {
    return this._maxclients;
  }

  // maxmemory_policy - computed: true, optional: true, required: false
  private _maxmemoryPolicy?: string; 
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }
  public set maxmemoryPolicy(value: string) {
    this._maxmemoryPolicy = value;
  }
  public resetMaxmemoryPolicy() {
    this._maxmemoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryPolicyInput() {
    return this._maxmemoryPolicy;
  }

  // maxmemory_samples - computed: true, optional: true, required: false
  private _maxmemorySamples?: number; 
  public get maxmemorySamples() {
    return this.getNumberAttribute('maxmemory_samples');
  }
  public set maxmemorySamples(value: number) {
    this._maxmemorySamples = value;
  }
  public resetMaxmemorySamples() {
    this._maxmemorySamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemorySamplesInput() {
    return this._maxmemorySamples;
  }

  // metrics_frequency - computed: true, optional: true, required: false
  private _metricsFrequency?: number; 
  public get metricsFrequency() {
    return this.getNumberAttribute('metrics_frequency');
  }
  public set metricsFrequency(value: number) {
    this._metricsFrequency = value;
  }
  public resetMetricsFrequency() {
    this._metricsFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsFrequencyInput() {
    return this._metricsFrequency;
  }

  // metrics_prefix - computed: true, optional: true, required: false
  private _metricsPrefix?: string; 
  public get metricsPrefix() {
    return this.getStringAttribute('metrics_prefix');
  }
  public set metricsPrefix(value: string) {
    this._metricsPrefix = value;
  }
  public resetMetricsPrefix() {
    this._metricsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPrefixInput() {
    return this._metricsPrefix;
  }

  // min_replicas_max_lag - computed: true, optional: true, required: false
  private _minReplicasMaxLag?: number; 
  public get minReplicasMaxLag() {
    return this.getNumberAttribute('min_replicas_max_lag');
  }
  public set minReplicasMaxLag(value: number) {
    this._minReplicasMaxLag = value;
  }
  public resetMinReplicasMaxLag() {
    this._minReplicasMaxLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasMaxLagInput() {
    return this._minReplicasMaxLag;
  }

  // monitoring_instance_id - computed: true, optional: true, required: false
  private _monitoringInstanceId?: string; 
  public get monitoringInstanceId() {
    return this.getStringAttribute('monitoring_instance_id');
  }
  public set monitoringInstanceId(value: string) {
    this._monitoringInstanceId = value;
  }
  public resetMonitoringInstanceId() {
    this._monitoringInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInstanceIdInput() {
    return this._monitoringInstanceId;
  }

  // notify_keyspace_events - computed: true, optional: true, required: false
  private _notifyKeyspaceEvents?: string; 
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }
  public set notifyKeyspaceEvents(value: string) {
    this._notifyKeyspaceEvents = value;
  }
  public resetNotifyKeyspaceEvents() {
    this._notifyKeyspaceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyKeyspaceEventsInput() {
    return this._notifyKeyspaceEvents;
  }

  // sgw_acl - computed: true, optional: true, required: false
  private _sgwAcl?: string; 
  public get sgwAcl() {
    return this.getStringAttribute('sgw_acl');
  }
  public set sgwAcl(value: string) {
    this._sgwAcl = value;
  }
  public resetSgwAcl() {
    this._sgwAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgwAclInput() {
    return this._sgwAcl;
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // syslog - computed: true, optional: true, required: false
  private _syslog?: string[]; 
  public get syslog() {
    return this.getListAttribute('syslog');
  }
  public set syslog(value: string[]) {
    this._syslog = value;
  }
  public resetSyslog() {
    this._syslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog;
  }

  // tls_ciphers - computed: true, optional: true, required: false
  private _tlsCiphers?: string[]; 
  public get tlsCiphers() {
    return this.getListAttribute('tls_ciphers');
  }
  public set tlsCiphers(value: string[]) {
    this._tlsCiphers = value;
  }
  public resetTlsCiphers() {
    this._tlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersInput() {
    return this._tlsCiphers;
  }

  // tls_ciphersuites - computed: true, optional: true, required: false
  private _tlsCiphersuites?: string; 
  public get tlsCiphersuites() {
    return this.getStringAttribute('tls_ciphersuites');
  }
  public set tlsCiphersuites(value: string) {
    this._tlsCiphersuites = value;
  }
  public resetTlsCiphersuites() {
    this._tlsCiphersuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersuitesInput() {
    return this._tlsCiphersuites;
  }

  // tls_protocols - computed: true, optional: true, required: false
  private _tlsProtocols?: string; 
  public get tlsProtocols() {
    return this.getStringAttribute('tls_protocols');
  }
  public set tlsProtocols(value: string) {
    this._tlsProtocols = value;
  }
  public resetTlsProtocols() {
    this._tlsProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProtocolsInput() {
    return this._tlsProtocols;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance stackit_redis_instance}
*/
export class RedisInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_redis_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisInstance to import
  * @param importFromId The id of the existing RedisInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_redis_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/redis_instance stackit_redis_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RedisInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_redis_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.69.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._parameters.internalValue = config.parameters;
    this._planName = config.planName;
    this._projectId = config.projectId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cf_guid - computed: true, optional: false, required: false
  public get cfGuid() {
    return this.getStringAttribute('cf_guid');
  }

  // cf_organization_guid - computed: true, optional: false, required: false
  public get cfOrganizationGuid() {
    return this.getStringAttribute('cf_organization_guid');
  }

  // cf_space_guid - computed: true, optional: false, required: false
  public get cfSpaceGuid() {
    return this.getStringAttribute('cf_space_guid');
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
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

  // parameters - computed: true, optional: true, required: false
  private _parameters = new RedisInstanceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RedisInstanceParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_name - computed: false, optional: false, required: true
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parameters: redisInstanceParametersToTerraform(this._parameters.internalValue),
      plan_name: cdktf.stringToTerraform(this._planName),
      project_id: cdktf.stringToTerraform(this._projectId),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: redisInstanceParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisInstanceParameters",
      },
      plan_name: {
        value: cdktf.stringToHclTerraform(this._planName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
