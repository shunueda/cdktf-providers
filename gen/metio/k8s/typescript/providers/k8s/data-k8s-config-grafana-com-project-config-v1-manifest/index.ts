// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SConfigGrafanaComProjectConfigV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * CacheNamespace if specified restricts the manager's cache to watch objects in the desired namespace Defaults to all namespaces Note: If a namespace is specified, controllers can still Watch for a cluster-scoped resource (e.g Node). For namespaced resources the cache will only hold objects from the desired namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#cache_namespace DataK8SConfigGrafanaComProjectConfigV1Manifest#cache_namespace}
  */
  readonly cacheNamespace?: string;
  /**
  * Controller contains global configuration options for controllers registered within this manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#controller DataK8SConfigGrafanaComProjectConfigV1Manifest#controller}
  */
  readonly controller?: DataK8SConfigGrafanaComProjectConfigV1ManifestController;
  /**
  * FeatureFlags is a set of operator feature flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#feature_flags DataK8SConfigGrafanaComProjectConfigV1Manifest#feature_flags}
  */
  readonly featureFlags?: DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlags;
  /**
  * GracefulShutdownTimeout is the duration given to runnable to stop before the manager actually returns on stop. To disable graceful shutdown, set to time.Duration(0) To use graceful shutdown without timeout, set to a negative duration, e.G. time.Duration(-1) The graceful shutdown is skipped for safety reasons in case the leader election lease is lost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#graceful_shut_down DataK8SConfigGrafanaComProjectConfigV1Manifest#graceful_shut_down}
  */
  readonly gracefulShutDown?: string;
  /**
  * Health contains the controller health configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#health DataK8SConfigGrafanaComProjectConfigV1Manifest#health}
  */
  readonly health?: DataK8SConfigGrafanaComProjectConfigV1ManifestHealth;
  /**
  * LeaderElection is the LeaderElection config to be used when configuring the manager.Manager leader election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#leader_election DataK8SConfigGrafanaComProjectConfigV1Manifest#leader_election}
  */
  readonly leaderElection?: DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElection;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#metadata DataK8SConfigGrafanaComProjectConfigV1Manifest#metadata}
  */
  readonly metadata: DataK8SConfigGrafanaComProjectConfigV1ManifestMetadata;
  /**
  * Metrics contains thw controller metrics configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#metrics DataK8SConfigGrafanaComProjectConfigV1Manifest#metrics}
  */
  readonly metrics?: DataK8SConfigGrafanaComProjectConfigV1ManifestMetrics;
  /**
  * SyncPeriod determines the minimum frequency at which watched resources are reconciled. A lower period will correct entropy more quickly, but reduce responsiveness to change if there are many watched resources. Change this value only if you know what you are doing. Defaults to 10 hours if unset. there will a 10 percent jitter between the SyncPeriod of all controllers so that all controllers will not send list requests simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#sync_period DataK8SConfigGrafanaComProjectConfigV1Manifest#sync_period}
  */
  readonly syncPeriod?: string;
  /**
  * Webhook contains the controllers webhook configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#webhook DataK8SConfigGrafanaComProjectConfigV1Manifest#webhook}
  */
  readonly webhook?: DataK8SConfigGrafanaComProjectConfigV1ManifestWebhook;
}
export interface DataK8SConfigGrafanaComProjectConfigV1ManifestController {
  /**
  * CacheSyncTimeout refers to the time limit set to wait for syncing caches. Defaults to 2 minutes if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#cache_sync_timeout DataK8SConfigGrafanaComProjectConfigV1Manifest#cache_sync_timeout}
  */
  readonly cacheSyncTimeout?: number;
  /**
  * GroupKindConcurrency is a map from a Kind to the number of concurrent reconciliation allowed for that controller. When a controller is registered within this manager using the builder utilities, users have to specify the type the controller reconciles in the For(...) call. If the object's kind passed matches one of the keys in this map, the concurrency for that controller is set to the number specified. The key is expected to be consistent in form with GroupKind.String(), e.g. ReplicaSet in apps group (regardless of version) would be 'ReplicaSet.apps'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#group_kind_concurrency DataK8SConfigGrafanaComProjectConfigV1Manifest#group_kind_concurrency}
  */
  readonly groupKindConcurrency?: { [key: string]: string };
}

export function dataK8SConfigGrafanaComProjectConfigV1ManifestControllerToTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_sync_timeout: cdktf.numberToTerraform(struct!.cacheSyncTimeout),
    group_kind_concurrency: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.groupKindConcurrency),
  }
}


export function dataK8SConfigGrafanaComProjectConfigV1ManifestControllerToHclTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_sync_timeout: {
      value: cdktf.numberToHclTerraform(struct!.cacheSyncTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_kind_concurrency: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.groupKindConcurrency),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGrafanaComProjectConfigV1ManifestControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGrafanaComProjectConfigV1ManifestController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheSyncTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSyncTimeout = this._cacheSyncTimeout;
    }
    if (this._groupKindConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupKindConcurrency = this._groupKindConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGrafanaComProjectConfigV1ManifestController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheSyncTimeout = undefined;
      this._groupKindConcurrency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheSyncTimeout = value.cacheSyncTimeout;
      this._groupKindConcurrency = value.groupKindConcurrency;
    }
  }

  // cache_sync_timeout - computed: false, optional: true, required: false
  private _cacheSyncTimeout?: number; 
  public get cacheSyncTimeout() {
    return this.getNumberAttribute('cache_sync_timeout');
  }
  public set cacheSyncTimeout(value: number) {
    this._cacheSyncTimeout = value;
  }
  public resetCacheSyncTimeout() {
    this._cacheSyncTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSyncTimeoutInput() {
    return this._cacheSyncTimeout;
  }

  // group_kind_concurrency - computed: false, optional: true, required: false
  private _groupKindConcurrency?: { [key: string]: string }; 
  public get groupKindConcurrency() {
    return this.getStringMapAttribute('group_kind_concurrency');
  }
  public set groupKindConcurrency(value: { [key: string]: string }) {
    this._groupKindConcurrency = value;
  }
  public resetGroupKindConcurrency() {
    this._groupKindConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKindConcurrencyInput() {
    return this._groupKindConcurrency;
  }
}
export interface DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_alerting_rule_webhook DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_alerting_rule_webhook}
  */
  readonly enableAlertingRuleWebhook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_cert_signing_service DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_cert_signing_service}
  */
  readonly enableCertSigningService?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_grafana_labs_stats DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_grafana_labs_stats}
  */
  readonly enableGrafanaLabsStats?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_loki_stack_alerts DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_loki_stack_alerts}
  */
  readonly enableLokiStackAlerts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_loki_stack_gateway DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_loki_stack_gateway}
  */
  readonly enableLokiStackGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_loki_stack_gateway_route DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_loki_stack_gateway_route}
  */
  readonly enableLokiStackGatewayRoute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_recording_rule_webhook DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_recording_rule_webhook}
  */
  readonly enableRecordingRuleWebhook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_ruler_config_webhook DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_ruler_config_webhook}
  */
  readonly enableRulerConfigWebhook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_service_monitors DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_service_monitors}
  */
  readonly enableServiceMonitors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_tls_grpc_services DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_tls_grpc_services}
  */
  readonly enableTlsGrpcServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_tls_http_services DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_tls_http_services}
  */
  readonly enableTlsHttpServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#enable_tls_service_monitor_config DataK8SConfigGrafanaComProjectConfigV1Manifest#enable_tls_service_monitor_config}
  */
  readonly enableTlsServiceMonitorConfig?: boolean | cdktf.IResolvable;
}

export function dataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlagsToTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_alerting_rule_webhook: cdktf.booleanToTerraform(struct!.enableAlertingRuleWebhook),
    enable_cert_signing_service: cdktf.booleanToTerraform(struct!.enableCertSigningService),
    enable_grafana_labs_stats: cdktf.booleanToTerraform(struct!.enableGrafanaLabsStats),
    enable_loki_stack_alerts: cdktf.booleanToTerraform(struct!.enableLokiStackAlerts),
    enable_loki_stack_gateway: cdktf.booleanToTerraform(struct!.enableLokiStackGateway),
    enable_loki_stack_gateway_route: cdktf.booleanToTerraform(struct!.enableLokiStackGatewayRoute),
    enable_recording_rule_webhook: cdktf.booleanToTerraform(struct!.enableRecordingRuleWebhook),
    enable_ruler_config_webhook: cdktf.booleanToTerraform(struct!.enableRulerConfigWebhook),
    enable_service_monitors: cdktf.booleanToTerraform(struct!.enableServiceMonitors),
    enable_tls_grpc_services: cdktf.booleanToTerraform(struct!.enableTlsGrpcServices),
    enable_tls_http_services: cdktf.booleanToTerraform(struct!.enableTlsHttpServices),
    enable_tls_service_monitor_config: cdktf.booleanToTerraform(struct!.enableTlsServiceMonitorConfig),
  }
}


export function dataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlagsToHclTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_alerting_rule_webhook: {
      value: cdktf.booleanToHclTerraform(struct!.enableAlertingRuleWebhook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cert_signing_service: {
      value: cdktf.booleanToHclTerraform(struct!.enableCertSigningService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_grafana_labs_stats: {
      value: cdktf.booleanToHclTerraform(struct!.enableGrafanaLabsStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_loki_stack_alerts: {
      value: cdktf.booleanToHclTerraform(struct!.enableLokiStackAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_loki_stack_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.enableLokiStackGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_loki_stack_gateway_route: {
      value: cdktf.booleanToHclTerraform(struct!.enableLokiStackGatewayRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_recording_rule_webhook: {
      value: cdktf.booleanToHclTerraform(struct!.enableRecordingRuleWebhook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ruler_config_webhook: {
      value: cdktf.booleanToHclTerraform(struct!.enableRulerConfigWebhook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_service_monitors: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceMonitors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tls_grpc_services: {
      value: cdktf.booleanToHclTerraform(struct!.enableTlsGrpcServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tls_http_services: {
      value: cdktf.booleanToHclTerraform(struct!.enableTlsHttpServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tls_service_monitor_config: {
      value: cdktf.booleanToHclTerraform(struct!.enableTlsServiceMonitorConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAlertingRuleWebhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAlertingRuleWebhook = this._enableAlertingRuleWebhook;
    }
    if (this._enableCertSigningService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertSigningService = this._enableCertSigningService;
    }
    if (this._enableGrafanaLabsStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGrafanaLabsStats = this._enableGrafanaLabsStats;
    }
    if (this._enableLokiStackAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLokiStackAlerts = this._enableLokiStackAlerts;
    }
    if (this._enableLokiStackGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLokiStackGateway = this._enableLokiStackGateway;
    }
    if (this._enableLokiStackGatewayRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLokiStackGatewayRoute = this._enableLokiStackGatewayRoute;
    }
    if (this._enableRecordingRuleWebhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRecordingRuleWebhook = this._enableRecordingRuleWebhook;
    }
    if (this._enableRulerConfigWebhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRulerConfigWebhook = this._enableRulerConfigWebhook;
    }
    if (this._enableServiceMonitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceMonitors = this._enableServiceMonitors;
    }
    if (this._enableTlsGrpcServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTlsGrpcServices = this._enableTlsGrpcServices;
    }
    if (this._enableTlsHttpServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTlsHttpServices = this._enableTlsHttpServices;
    }
    if (this._enableTlsServiceMonitorConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTlsServiceMonitorConfig = this._enableTlsServiceMonitorConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAlertingRuleWebhook = undefined;
      this._enableCertSigningService = undefined;
      this._enableGrafanaLabsStats = undefined;
      this._enableLokiStackAlerts = undefined;
      this._enableLokiStackGateway = undefined;
      this._enableLokiStackGatewayRoute = undefined;
      this._enableRecordingRuleWebhook = undefined;
      this._enableRulerConfigWebhook = undefined;
      this._enableServiceMonitors = undefined;
      this._enableTlsGrpcServices = undefined;
      this._enableTlsHttpServices = undefined;
      this._enableTlsServiceMonitorConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAlertingRuleWebhook = value.enableAlertingRuleWebhook;
      this._enableCertSigningService = value.enableCertSigningService;
      this._enableGrafanaLabsStats = value.enableGrafanaLabsStats;
      this._enableLokiStackAlerts = value.enableLokiStackAlerts;
      this._enableLokiStackGateway = value.enableLokiStackGateway;
      this._enableLokiStackGatewayRoute = value.enableLokiStackGatewayRoute;
      this._enableRecordingRuleWebhook = value.enableRecordingRuleWebhook;
      this._enableRulerConfigWebhook = value.enableRulerConfigWebhook;
      this._enableServiceMonitors = value.enableServiceMonitors;
      this._enableTlsGrpcServices = value.enableTlsGrpcServices;
      this._enableTlsHttpServices = value.enableTlsHttpServices;
      this._enableTlsServiceMonitorConfig = value.enableTlsServiceMonitorConfig;
    }
  }

  // enable_alerting_rule_webhook - computed: false, optional: true, required: false
  private _enableAlertingRuleWebhook?: boolean | cdktf.IResolvable; 
  public get enableAlertingRuleWebhook() {
    return this.getBooleanAttribute('enable_alerting_rule_webhook');
  }
  public set enableAlertingRuleWebhook(value: boolean | cdktf.IResolvable) {
    this._enableAlertingRuleWebhook = value;
  }
  public resetEnableAlertingRuleWebhook() {
    this._enableAlertingRuleWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAlertingRuleWebhookInput() {
    return this._enableAlertingRuleWebhook;
  }

  // enable_cert_signing_service - computed: false, optional: true, required: false
  private _enableCertSigningService?: boolean | cdktf.IResolvable; 
  public get enableCertSigningService() {
    return this.getBooleanAttribute('enable_cert_signing_service');
  }
  public set enableCertSigningService(value: boolean | cdktf.IResolvable) {
    this._enableCertSigningService = value;
  }
  public resetEnableCertSigningService() {
    this._enableCertSigningService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertSigningServiceInput() {
    return this._enableCertSigningService;
  }

  // enable_grafana_labs_stats - computed: false, optional: true, required: false
  private _enableGrafanaLabsStats?: boolean | cdktf.IResolvable; 
  public get enableGrafanaLabsStats() {
    return this.getBooleanAttribute('enable_grafana_labs_stats');
  }
  public set enableGrafanaLabsStats(value: boolean | cdktf.IResolvable) {
    this._enableGrafanaLabsStats = value;
  }
  public resetEnableGrafanaLabsStats() {
    this._enableGrafanaLabsStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGrafanaLabsStatsInput() {
    return this._enableGrafanaLabsStats;
  }

  // enable_loki_stack_alerts - computed: false, optional: true, required: false
  private _enableLokiStackAlerts?: boolean | cdktf.IResolvable; 
  public get enableLokiStackAlerts() {
    return this.getBooleanAttribute('enable_loki_stack_alerts');
  }
  public set enableLokiStackAlerts(value: boolean | cdktf.IResolvable) {
    this._enableLokiStackAlerts = value;
  }
  public resetEnableLokiStackAlerts() {
    this._enableLokiStackAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLokiStackAlertsInput() {
    return this._enableLokiStackAlerts;
  }

  // enable_loki_stack_gateway - computed: false, optional: true, required: false
  private _enableLokiStackGateway?: boolean | cdktf.IResolvable; 
  public get enableLokiStackGateway() {
    return this.getBooleanAttribute('enable_loki_stack_gateway');
  }
  public set enableLokiStackGateway(value: boolean | cdktf.IResolvable) {
    this._enableLokiStackGateway = value;
  }
  public resetEnableLokiStackGateway() {
    this._enableLokiStackGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLokiStackGatewayInput() {
    return this._enableLokiStackGateway;
  }

  // enable_loki_stack_gateway_route - computed: false, optional: true, required: false
  private _enableLokiStackGatewayRoute?: boolean | cdktf.IResolvable; 
  public get enableLokiStackGatewayRoute() {
    return this.getBooleanAttribute('enable_loki_stack_gateway_route');
  }
  public set enableLokiStackGatewayRoute(value: boolean | cdktf.IResolvable) {
    this._enableLokiStackGatewayRoute = value;
  }
  public resetEnableLokiStackGatewayRoute() {
    this._enableLokiStackGatewayRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLokiStackGatewayRouteInput() {
    return this._enableLokiStackGatewayRoute;
  }

  // enable_recording_rule_webhook - computed: false, optional: true, required: false
  private _enableRecordingRuleWebhook?: boolean | cdktf.IResolvable; 
  public get enableRecordingRuleWebhook() {
    return this.getBooleanAttribute('enable_recording_rule_webhook');
  }
  public set enableRecordingRuleWebhook(value: boolean | cdktf.IResolvable) {
    this._enableRecordingRuleWebhook = value;
  }
  public resetEnableRecordingRuleWebhook() {
    this._enableRecordingRuleWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRecordingRuleWebhookInput() {
    return this._enableRecordingRuleWebhook;
  }

  // enable_ruler_config_webhook - computed: false, optional: true, required: false
  private _enableRulerConfigWebhook?: boolean | cdktf.IResolvable; 
  public get enableRulerConfigWebhook() {
    return this.getBooleanAttribute('enable_ruler_config_webhook');
  }
  public set enableRulerConfigWebhook(value: boolean | cdktf.IResolvable) {
    this._enableRulerConfigWebhook = value;
  }
  public resetEnableRulerConfigWebhook() {
    this._enableRulerConfigWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRulerConfigWebhookInput() {
    return this._enableRulerConfigWebhook;
  }

  // enable_service_monitors - computed: false, optional: true, required: false
  private _enableServiceMonitors?: boolean | cdktf.IResolvable; 
  public get enableServiceMonitors() {
    return this.getBooleanAttribute('enable_service_monitors');
  }
  public set enableServiceMonitors(value: boolean | cdktf.IResolvable) {
    this._enableServiceMonitors = value;
  }
  public resetEnableServiceMonitors() {
    this._enableServiceMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceMonitorsInput() {
    return this._enableServiceMonitors;
  }

  // enable_tls_grpc_services - computed: false, optional: true, required: false
  private _enableTlsGrpcServices?: boolean | cdktf.IResolvable; 
  public get enableTlsGrpcServices() {
    return this.getBooleanAttribute('enable_tls_grpc_services');
  }
  public set enableTlsGrpcServices(value: boolean | cdktf.IResolvable) {
    this._enableTlsGrpcServices = value;
  }
  public resetEnableTlsGrpcServices() {
    this._enableTlsGrpcServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsGrpcServicesInput() {
    return this._enableTlsGrpcServices;
  }

  // enable_tls_http_services - computed: false, optional: true, required: false
  private _enableTlsHttpServices?: boolean | cdktf.IResolvable; 
  public get enableTlsHttpServices() {
    return this.getBooleanAttribute('enable_tls_http_services');
  }
  public set enableTlsHttpServices(value: boolean | cdktf.IResolvable) {
    this._enableTlsHttpServices = value;
  }
  public resetEnableTlsHttpServices() {
    this._enableTlsHttpServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsHttpServicesInput() {
    return this._enableTlsHttpServices;
  }

  // enable_tls_service_monitor_config - computed: false, optional: true, required: false
  private _enableTlsServiceMonitorConfig?: boolean | cdktf.IResolvable; 
  public get enableTlsServiceMonitorConfig() {
    return this.getBooleanAttribute('enable_tls_service_monitor_config');
  }
  public set enableTlsServiceMonitorConfig(value: boolean | cdktf.IResolvable) {
    this._enableTlsServiceMonitorConfig = value;
  }
  public resetEnableTlsServiceMonitorConfig() {
    this._enableTlsServiceMonitorConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsServiceMonitorConfigInput() {
    return this._enableTlsServiceMonitorConfig;
  }
}
export interface DataK8SConfigGrafanaComProjectConfigV1ManifestHealth {
  /**
  * HealthProbeBindAddress is the TCP address that the controller should bind to for serving health probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#health_probe_bind_address DataK8SConfigGrafanaComProjectConfigV1Manifest#health_probe_bind_address}
  */
  readonly healthProbeBindAddress?: string;
  /**
  * LivenessEndpointName, defaults to 'healthz'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#liveness_endpoint_name DataK8SConfigGrafanaComProjectConfigV1Manifest#liveness_endpoint_name}
  */
  readonly livenessEndpointName?: string;
  /**
  * ReadinessEndpointName, defaults to 'readyz'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#readiness_endpoint_name DataK8SConfigGrafanaComProjectConfigV1Manifest#readiness_endpoint_name}
  */
  readonly readinessEndpointName?: string;
}

export function dataK8SConfigGrafanaComProjectConfigV1ManifestHealthToTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_probe_bind_address: cdktf.stringToTerraform(struct!.healthProbeBindAddress),
    liveness_endpoint_name: cdktf.stringToTerraform(struct!.livenessEndpointName),
    readiness_endpoint_name: cdktf.stringToTerraform(struct!.readinessEndpointName),
  }
}


export function dataK8SConfigGrafanaComProjectConfigV1ManifestHealthToHclTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_probe_bind_address: {
      value: cdktf.stringToHclTerraform(struct!.healthProbeBindAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.livenessEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.readinessEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGrafanaComProjectConfigV1ManifestHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGrafanaComProjectConfigV1ManifestHealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthProbeBindAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthProbeBindAddress = this._healthProbeBindAddress;
    }
    if (this._livenessEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessEndpointName = this._livenessEndpointName;
    }
    if (this._readinessEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessEndpointName = this._readinessEndpointName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGrafanaComProjectConfigV1ManifestHealth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthProbeBindAddress = undefined;
      this._livenessEndpointName = undefined;
      this._readinessEndpointName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthProbeBindAddress = value.healthProbeBindAddress;
      this._livenessEndpointName = value.livenessEndpointName;
      this._readinessEndpointName = value.readinessEndpointName;
    }
  }

  // health_probe_bind_address - computed: false, optional: true, required: false
  private _healthProbeBindAddress?: string; 
  public get healthProbeBindAddress() {
    return this.getStringAttribute('health_probe_bind_address');
  }
  public set healthProbeBindAddress(value: string) {
    this._healthProbeBindAddress = value;
  }
  public resetHealthProbeBindAddress() {
    this._healthProbeBindAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeBindAddressInput() {
    return this._healthProbeBindAddress;
  }

  // liveness_endpoint_name - computed: false, optional: true, required: false
  private _livenessEndpointName?: string; 
  public get livenessEndpointName() {
    return this.getStringAttribute('liveness_endpoint_name');
  }
  public set livenessEndpointName(value: string) {
    this._livenessEndpointName = value;
  }
  public resetLivenessEndpointName() {
    this._livenessEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessEndpointNameInput() {
    return this._livenessEndpointName;
  }

  // readiness_endpoint_name - computed: false, optional: true, required: false
  private _readinessEndpointName?: string; 
  public get readinessEndpointName() {
    return this.getStringAttribute('readiness_endpoint_name');
  }
  public set readinessEndpointName(value: string) {
    this._readinessEndpointName = value;
  }
  public resetReadinessEndpointName() {
    this._readinessEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessEndpointNameInput() {
    return this._readinessEndpointName;
  }
}
export interface DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElection {
  /**
  * leaderElect enables a leader election client to gain leadership before executing the main loop. Enable this when running replicated components for high availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#leader_elect DataK8SConfigGrafanaComProjectConfigV1Manifest#leader_elect}
  */
  readonly leaderElect: boolean | cdktf.IResolvable;
  /**
  * leaseDuration is the duration that non-leader candidates will wait after observing a leadership renewal until attempting to acquire leadership of a led but unrenewed leader slot. This is effectively the maximum duration that a leader can be stopped before it is replaced by another candidate. This is only applicable if leader election is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#lease_duration DataK8SConfigGrafanaComProjectConfigV1Manifest#lease_duration}
  */
  readonly leaseDuration: string;
  /**
  * renewDeadline is the interval between attempts by the acting master to renew a leadership slot before it stops leading. This must be less than or equal to the lease duration. This is only applicable if leader election is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#renew_deadline DataK8SConfigGrafanaComProjectConfigV1Manifest#renew_deadline}
  */
  readonly renewDeadline: string;
  /**
  * resourceLock indicates the resource object type that will be used to lock during leader election cycles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#resource_lock DataK8SConfigGrafanaComProjectConfigV1Manifest#resource_lock}
  */
  readonly resourceLock: string;
  /**
  * resourceName indicates the name of resource object that will be used to lock during leader election cycles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#resource_name DataK8SConfigGrafanaComProjectConfigV1Manifest#resource_name}
  */
  readonly resourceName: string;
  /**
  * resourceName indicates the namespace of resource object that will be used to lock during leader election cycles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#resource_namespace DataK8SConfigGrafanaComProjectConfigV1Manifest#resource_namespace}
  */
  readonly resourceNamespace: string;
  /**
  * retryPeriod is the duration the clients should wait between attempting acquisition and renewal of a leadership. This is only applicable if leader election is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#retry_period DataK8SConfigGrafanaComProjectConfigV1Manifest#retry_period}
  */
  readonly retryPeriod: string;
}

export function dataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElectionToTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leader_elect: cdktf.booleanToTerraform(struct!.leaderElect),
    lease_duration: cdktf.stringToTerraform(struct!.leaseDuration),
    renew_deadline: cdktf.stringToTerraform(struct!.renewDeadline),
    resource_lock: cdktf.stringToTerraform(struct!.resourceLock),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_namespace: cdktf.stringToTerraform(struct!.resourceNamespace),
    retry_period: cdktf.stringToTerraform(struct!.retryPeriod),
  }
}


export function dataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElectionToHclTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leader_elect: {
      value: cdktf.booleanToHclTerraform(struct!.leaderElect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lease_duration: {
      value: cdktf.stringToHclTerraform(struct!.leaseDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_deadline: {
      value: cdktf.stringToHclTerraform(struct!.renewDeadline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_lock: {
      value: cdktf.stringToHclTerraform(struct!.resourceLock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_namespace: {
      value: cdktf.stringToHclTerraform(struct!.resourceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_period: {
      value: cdktf.stringToHclTerraform(struct!.retryPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leaderElect !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaderElect = this._leaderElect;
    }
    if (this._leaseDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseDuration = this._leaseDuration;
    }
    if (this._renewDeadline !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewDeadline = this._renewDeadline;
    }
    if (this._resourceLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLock = this._resourceLock;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNamespace = this._resourceNamespace;
    }
    if (this._retryPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPeriod = this._retryPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leaderElect = undefined;
      this._leaseDuration = undefined;
      this._renewDeadline = undefined;
      this._resourceLock = undefined;
      this._resourceName = undefined;
      this._resourceNamespace = undefined;
      this._retryPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leaderElect = value.leaderElect;
      this._leaseDuration = value.leaseDuration;
      this._renewDeadline = value.renewDeadline;
      this._resourceLock = value.resourceLock;
      this._resourceName = value.resourceName;
      this._resourceNamespace = value.resourceNamespace;
      this._retryPeriod = value.retryPeriod;
    }
  }

  // leader_elect - computed: false, optional: false, required: true
  private _leaderElect?: boolean | cdktf.IResolvable; 
  public get leaderElect() {
    return this.getBooleanAttribute('leader_elect');
  }
  public set leaderElect(value: boolean | cdktf.IResolvable) {
    this._leaderElect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderElectInput() {
    return this._leaderElect;
  }

  // lease_duration - computed: false, optional: false, required: true
  private _leaseDuration?: string; 
  public get leaseDuration() {
    return this.getStringAttribute('lease_duration');
  }
  public set leaseDuration(value: string) {
    this._leaseDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseDurationInput() {
    return this._leaseDuration;
  }

  // renew_deadline - computed: false, optional: false, required: true
  private _renewDeadline?: string; 
  public get renewDeadline() {
    return this.getStringAttribute('renew_deadline');
  }
  public set renewDeadline(value: string) {
    this._renewDeadline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewDeadlineInput() {
    return this._renewDeadline;
  }

  // resource_lock - computed: false, optional: false, required: true
  private _resourceLock?: string; 
  public get resourceLock() {
    return this.getStringAttribute('resource_lock');
  }
  public set resourceLock(value: string) {
    this._resourceLock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLockInput() {
    return this._resourceLock;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_namespace - computed: false, optional: false, required: true
  private _resourceNamespace?: string; 
  public get resourceNamespace() {
    return this.getStringAttribute('resource_namespace');
  }
  public set resourceNamespace(value: string) {
    this._resourceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamespaceInput() {
    return this._resourceNamespace;
  }

  // retry_period - computed: false, optional: false, required: true
  private _retryPeriod?: string; 
  public get retryPeriod() {
    return this.getStringAttribute('retry_period');
  }
  public set retryPeriod(value: string) {
    this._retryPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPeriodInput() {
    return this._retryPeriod;
  }
}
export interface DataK8SConfigGrafanaComProjectConfigV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#annotations DataK8SConfigGrafanaComProjectConfigV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#labels DataK8SConfigGrafanaComProjectConfigV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#name DataK8SConfigGrafanaComProjectConfigV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#namespace DataK8SConfigGrafanaComProjectConfigV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SConfigGrafanaComProjectConfigV1ManifestMetadataToTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SConfigGrafanaComProjectConfigV1ManifestMetadataToHclTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestMetadata | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGrafanaComProjectConfigV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGrafanaComProjectConfigV1ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGrafanaComProjectConfigV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SConfigGrafanaComProjectConfigV1ManifestMetrics {
  /**
  * BindAddress is the TCP address that the controller should bind to for serving prometheus metrics. It can be set to '0' to disable the metrics serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#bind_address DataK8SConfigGrafanaComProjectConfigV1Manifest#bind_address}
  */
  readonly bindAddress?: string;
}

export function dataK8SConfigGrafanaComProjectConfigV1ManifestMetricsToTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_address: cdktf.stringToTerraform(struct!.bindAddress),
  }
}


export function dataK8SConfigGrafanaComProjectConfigV1ManifestMetricsToHclTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_address: {
      value: cdktf.stringToHclTerraform(struct!.bindAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGrafanaComProjectConfigV1ManifestMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGrafanaComProjectConfigV1ManifestMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAddress = this._bindAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGrafanaComProjectConfigV1ManifestMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindAddress = value.bindAddress;
    }
  }

  // bind_address - computed: false, optional: true, required: false
  private _bindAddress?: string; 
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }
  public set bindAddress(value: string) {
    this._bindAddress = value;
  }
  public resetBindAddress() {
    this._bindAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddressInput() {
    return this._bindAddress;
  }
}
export interface DataK8SConfigGrafanaComProjectConfigV1ManifestWebhook {
  /**
  * CertDir is the directory that contains the server key and certificate. if not set, webhook server would look up the server key and certificate in {TempDir}/k8s-webhook-server/serving-certs. The server key and certificate must be named tls.key and tls.crt, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#cert_dir DataK8SConfigGrafanaComProjectConfigV1Manifest#cert_dir}
  */
  readonly certDir?: string;
  /**
  * Host is the hostname that the webhook server binds to. It is used to set webhook.Server.Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#host DataK8SConfigGrafanaComProjectConfigV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Port is the port that the webhook server serves at. It is used to set webhook.Server.Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#port DataK8SConfigGrafanaComProjectConfigV1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SConfigGrafanaComProjectConfigV1ManifestWebhookToTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_dir: cdktf.stringToTerraform(struct!.certDir),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SConfigGrafanaComProjectConfigV1ManifestWebhookToHclTerraform(struct?: DataK8SConfigGrafanaComProjectConfigV1ManifestWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_dir: {
      value: cdktf.stringToHclTerraform(struct!.certDir),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGrafanaComProjectConfigV1ManifestWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGrafanaComProjectConfigV1ManifestWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.certDir = this._certDir;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGrafanaComProjectConfigV1ManifestWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certDir = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certDir = value.certDir;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // cert_dir - computed: false, optional: true, required: false
  private _certDir?: string; 
  public get certDir() {
    return this.getStringAttribute('cert_dir');
  }
  public set certDir(value: string) {
    this._certDir = value;
  }
  public resetCertDir() {
    this._certDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDirInput() {
    return this._certDir;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest k8s_config_grafana_com_project_config_v1_manifest}
*/
export class DataK8SConfigGrafanaComProjectConfigV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_config_grafana_com_project_config_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SConfigGrafanaComProjectConfigV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SConfigGrafanaComProjectConfigV1Manifest to import
  * @param importFromId The id of the existing DataK8SConfigGrafanaComProjectConfigV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SConfigGrafanaComProjectConfigV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_config_grafana_com_project_config_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/config_grafana_com_project_config_v1_manifest k8s_config_grafana_com_project_config_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SConfigGrafanaComProjectConfigV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SConfigGrafanaComProjectConfigV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_config_grafana_com_project_config_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheNamespace = config.cacheNamespace;
    this._controller.internalValue = config.controller;
    this._featureFlags.internalValue = config.featureFlags;
    this._gracefulShutDown = config.gracefulShutDown;
    this._health.internalValue = config.health;
    this._leaderElection.internalValue = config.leaderElection;
    this._metadata.internalValue = config.metadata;
    this._metrics.internalValue = config.metrics;
    this._syncPeriod = config.syncPeriod;
    this._webhook.internalValue = config.webhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_namespace - computed: false, optional: true, required: false
  private _cacheNamespace?: string; 
  public get cacheNamespace() {
    return this.getStringAttribute('cache_namespace');
  }
  public set cacheNamespace(value: string) {
    this._cacheNamespace = value;
  }
  public resetCacheNamespace() {
    this._cacheNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNamespaceInput() {
    return this._cacheNamespace;
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new DataK8SConfigGrafanaComProjectConfigV1ManifestControllerOutputReference(this, "controller");
  public get controller() {
    return this._controller;
  }
  public putController(value: DataK8SConfigGrafanaComProjectConfigV1ManifestController) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // feature_flags - computed: false, optional: true, required: false
  private _featureFlags = new DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlagsOutputReference(this, "feature_flags");
  public get featureFlags() {
    return this._featureFlags;
  }
  public putFeatureFlags(value: DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlags) {
    this._featureFlags.internalValue = value;
  }
  public resetFeatureFlags() {
    this._featureFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagsInput() {
    return this._featureFlags.internalValue;
  }

  // graceful_shut_down - computed: false, optional: true, required: false
  private _gracefulShutDown?: string; 
  public get gracefulShutDown() {
    return this.getStringAttribute('graceful_shut_down');
  }
  public set gracefulShutDown(value: string) {
    this._gracefulShutDown = value;
  }
  public resetGracefulShutDown() {
    this._gracefulShutDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutDownInput() {
    return this._gracefulShutDown;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataK8SConfigGrafanaComProjectConfigV1ManifestHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataK8SConfigGrafanaComProjectConfigV1ManifestHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // leader_election - computed: false, optional: true, required: false
  private _leaderElection = new DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElectionOutputReference(this, "leader_election");
  public get leaderElection() {
    return this._leaderElection;
  }
  public putLeaderElection(value: DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElection) {
    this._leaderElection.internalValue = value;
  }
  public resetLeaderElection() {
    this._leaderElection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderElectionInput() {
    return this._leaderElection.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SConfigGrafanaComProjectConfigV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SConfigGrafanaComProjectConfigV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SConfigGrafanaComProjectConfigV1ManifestMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SConfigGrafanaComProjectConfigV1ManifestMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // sync_period - computed: false, optional: true, required: false
  private _syncPeriod?: string; 
  public get syncPeriod() {
    return this.getStringAttribute('sync_period');
  }
  public set syncPeriod(value: string) {
    this._syncPeriod = value;
  }
  public resetSyncPeriod() {
    this._syncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPeriodInput() {
    return this._syncPeriod;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SConfigGrafanaComProjectConfigV1ManifestWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SConfigGrafanaComProjectConfigV1ManifestWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
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
      cache_namespace: cdktf.stringToTerraform(this._cacheNamespace),
      controller: dataK8SConfigGrafanaComProjectConfigV1ManifestControllerToTerraform(this._controller.internalValue),
      feature_flags: dataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlagsToTerraform(this._featureFlags.internalValue),
      graceful_shut_down: cdktf.stringToTerraform(this._gracefulShutDown),
      health: dataK8SConfigGrafanaComProjectConfigV1ManifestHealthToTerraform(this._health.internalValue),
      leader_election: dataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElectionToTerraform(this._leaderElection.internalValue),
      metadata: dataK8SConfigGrafanaComProjectConfigV1ManifestMetadataToTerraform(this._metadata.internalValue),
      metrics: dataK8SConfigGrafanaComProjectConfigV1ManifestMetricsToTerraform(this._metrics.internalValue),
      sync_period: cdktf.stringToTerraform(this._syncPeriod),
      webhook: dataK8SConfigGrafanaComProjectConfigV1ManifestWebhookToTerraform(this._webhook.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_namespace: {
        value: cdktf.stringToHclTerraform(this._cacheNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller: {
        value: dataK8SConfigGrafanaComProjectConfigV1ManifestControllerToHclTerraform(this._controller.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGrafanaComProjectConfigV1ManifestController",
      },
      feature_flags: {
        value: dataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlagsToHclTerraform(this._featureFlags.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGrafanaComProjectConfigV1ManifestFeatureFlags",
      },
      graceful_shut_down: {
        value: cdktf.stringToHclTerraform(this._gracefulShutDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health: {
        value: dataK8SConfigGrafanaComProjectConfigV1ManifestHealthToHclTerraform(this._health.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGrafanaComProjectConfigV1ManifestHealth",
      },
      leader_election: {
        value: dataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElectionToHclTerraform(this._leaderElection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGrafanaComProjectConfigV1ManifestLeaderElection",
      },
      metadata: {
        value: dataK8SConfigGrafanaComProjectConfigV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGrafanaComProjectConfigV1ManifestMetadata",
      },
      metrics: {
        value: dataK8SConfigGrafanaComProjectConfigV1ManifestMetricsToHclTerraform(this._metrics.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGrafanaComProjectConfigV1ManifestMetrics",
      },
      sync_period: {
        value: cdktf.stringToHclTerraform(this._syncPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook: {
        value: dataK8SConfigGrafanaComProjectConfigV1ManifestWebhookToHclTerraform(this._webhook.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGrafanaComProjectConfigV1ManifestWebhook",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
