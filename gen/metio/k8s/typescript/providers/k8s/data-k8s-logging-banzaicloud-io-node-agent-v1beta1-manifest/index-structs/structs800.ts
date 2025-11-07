import * as cdktf from 'cdktf';
import { DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverride,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverrideToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverrideToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverrideList,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfig,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfigToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfigToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfigOutputReference,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSet,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSetToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSetToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSetOutputReference,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMounts,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMountsToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMountsToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMountsList,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAws,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAwsToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAwsToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAwsOutputReference,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetes,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetesToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetesToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetesOutputReference,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptions,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptionsToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptionsToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptionsOutputReference,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTail,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTailToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTailToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTailOutputReference } from './structs400'
import { DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorage,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageOutputReference,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolume,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolumeToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolumeToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolumeOutputReference,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadata,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadataToTerraform,
dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadataToHclTerraform,
DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadataOutputReference } from './structs0'
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#interval DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#path DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#port DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#prometheus_annotations DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#prometheus_annotations}
  */
  readonly prometheusAnnotations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#prometheus_rules DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#prometheus_rules}
  */
  readonly prometheusRules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#prometheus_rules_override DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#prometheus_rules_override}
  */
  readonly prometheusRulesOverride?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverride[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#service_monitor DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#service_monitor}
  */
  readonly serviceMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#service_monitor_config DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#service_monitor_config}
  */
  readonly serviceMonitorConfig?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#timeout DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    prometheus_annotations: cdktf.booleanToTerraform(struct!.prometheusAnnotations),
    prometheus_rules: cdktf.booleanToTerraform(struct!.prometheusRules),
    prometheus_rules_override: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverrideToTerraform, false)(struct!.prometheusRulesOverride),
    service_monitor: cdktf.booleanToTerraform(struct!.serviceMonitor),
    service_monitor_config: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfigToTerraform(struct!.serviceMonitorConfig),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prometheus_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.prometheusAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus_rules: {
      value: cdktf.booleanToHclTerraform(struct!.prometheusRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus_rules_override: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverrideToHclTerraform, false)(struct!.prometheusRulesOverride),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverrideList",
    },
    service_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.serviceMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_monitor_config: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfigToHclTerraform(struct!.serviceMonitorConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfig",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prometheusAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusAnnotations = this._prometheusAnnotations;
    }
    if (this._prometheusRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusRules = this._prometheusRules;
    }
    if (this._prometheusRulesOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusRulesOverride = this._prometheusRulesOverride?.internalValue;
    }
    if (this._serviceMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMonitor = this._serviceMonitor;
    }
    if (this._serviceMonitorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMonitorConfig = this._serviceMonitorConfig?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._port = undefined;
      this._prometheusAnnotations = undefined;
      this._prometheusRules = undefined;
      this._prometheusRulesOverride.internalValue = undefined;
      this._serviceMonitor = undefined;
      this._serviceMonitorConfig.internalValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._path = value.path;
      this._port = value.port;
      this._prometheusAnnotations = value.prometheusAnnotations;
      this._prometheusRules = value.prometheusRules;
      this._prometheusRulesOverride.internalValue = value.prometheusRulesOverride;
      this._serviceMonitor = value.serviceMonitor;
      this._serviceMonitorConfig.internalValue = value.serviceMonitorConfig;
      this._timeout = value.timeout;
    }
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

  // prometheus_annotations - computed: false, optional: true, required: false
  private _prometheusAnnotations?: boolean | cdktf.IResolvable; 
  public get prometheusAnnotations() {
    return this.getBooleanAttribute('prometheus_annotations');
  }
  public set prometheusAnnotations(value: boolean | cdktf.IResolvable) {
    this._prometheusAnnotations = value;
  }
  public resetPrometheusAnnotations() {
    this._prometheusAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusAnnotationsInput() {
    return this._prometheusAnnotations;
  }

  // prometheus_rules - computed: false, optional: true, required: false
  private _prometheusRules?: boolean | cdktf.IResolvable; 
  public get prometheusRules() {
    return this.getBooleanAttribute('prometheus_rules');
  }
  public set prometheusRules(value: boolean | cdktf.IResolvable) {
    this._prometheusRules = value;
  }
  public resetPrometheusRules() {
    this._prometheusRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusRulesInput() {
    return this._prometheusRules;
  }

  // prometheus_rules_override - computed: false, optional: true, required: false
  private _prometheusRulesOverride = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverrideList(this, "prometheus_rules_override", false);
  public get prometheusRulesOverride() {
    return this._prometheusRulesOverride;
  }
  public putPrometheusRulesOverride(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsPrometheusRulesOverride[] | cdktf.IResolvable) {
    this._prometheusRulesOverride.internalValue = value;
  }
  public resetPrometheusRulesOverride() {
    this._prometheusRulesOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusRulesOverrideInput() {
    return this._prometheusRulesOverride.internalValue;
  }

  // service_monitor - computed: false, optional: true, required: false
  private _serviceMonitor?: boolean | cdktf.IResolvable; 
  public get serviceMonitor() {
    return this.getBooleanAttribute('service_monitor');
  }
  public set serviceMonitor(value: boolean | cdktf.IResolvable) {
    this._serviceMonitor = value;
  }
  public resetServiceMonitor() {
    this._serviceMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorInput() {
    return this._serviceMonitor;
  }

  // service_monitor_config - computed: false, optional: true, required: false
  private _serviceMonitorConfig = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfigOutputReference(this, "service_monitor_config");
  public get serviceMonitorConfig() {
    return this._serviceMonitorConfig;
  }
  public putServiceMonitorConfig(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMonitorConfig) {
    this._serviceMonitorConfig.internalValue = value;
  }
  public resetServiceMonitorConfig() {
    this._serviceMonitorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorConfigInput() {
    return this._serviceMonitorConfig.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
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
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#annotations DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadataToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadataToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#app_protocol DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#node_port DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#node_port}
  */
  readonly nodePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#port DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#protocol DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#target_port DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#target_port}
  */
  readonly targetPort?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    node_port: cdktf.numberToTerraform(struct!.nodePort),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
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
    node_port: {
      value: cdktf.numberToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._name = undefined;
      this._nodePort = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._name = value.name;
      this._nodePort = value.nodePort;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
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

  // node_port - computed: false, optional: true, required: false
  private _nodePort?: number; 
  public get nodePort() {
    return this.getNumberAttribute('node_port');
  }
  public set nodePort(value: number) {
    this._nodePort = value;
  }
  public resetNodePort() {
    this._nodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortInput() {
    return this._nodePort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsOutputReference {
    return new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#timeout_seconds DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIpToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#client_ip DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#client_ip}
  */
  readonly clientIp?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIp;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIpToTerraform(struct!.clientIp),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIpToHclTerraform(struct!.clientIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = value.clientIp;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIpOutputReference(this, "client_ip");
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigClientIp) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#allocate_load_balancer_node_ports DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#allocate_load_balancer_node_ports}
  */
  readonly allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#cluster_i_ps DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#cluster_i_ps}
  */
  readonly clusterIPs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#cluster_ip DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#cluster_ip}
  */
  readonly clusterIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#external_i_ps DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#external_i_ps}
  */
  readonly externalIPs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#external_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#external_name}
  */
  readonly externalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#external_traffic_policy DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#health_check_node_port DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#health_check_node_port}
  */
  readonly healthCheckNodePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#internal_traffic_policy DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#internal_traffic_policy}
  */
  readonly internalTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#ip_families DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#ip_families}
  */
  readonly ipFamilies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#ip_family_policy DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#ip_family_policy}
  */
  readonly ipFamilyPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#load_balancer_class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#load_balancer_class}
  */
  readonly loadBalancerClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#load_balancer_ip DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#load_balancer_ip}
  */
  readonly loadBalancerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#load_balancer_source_ranges DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#ports DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#ports}
  */
  readonly ports?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#publish_not_ready_addresses DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#publish_not_ready_addresses}
  */
  readonly publishNotReadyAddresses?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#selector DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#session_affinity DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#session_affinity_config DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#session_affinity_config}
  */
  readonly sessionAffinityConfig?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#traffic_distribution DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#traffic_distribution}
  */
  readonly trafficDistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_load_balancer_node_ports: cdktf.booleanToTerraform(struct!.allocateLoadBalancerNodePorts),
    cluster_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterIPs),
    cluster_ip: cdktf.stringToTerraform(struct!.clusterIp),
    external_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalIPs),
    external_name: cdktf.stringToTerraform(struct!.externalName),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    health_check_node_port: cdktf.numberToTerraform(struct!.healthCheckNodePort),
    internal_traffic_policy: cdktf.stringToTerraform(struct!.internalTrafficPolicy),
    ip_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFamilies),
    ip_family_policy: cdktf.stringToTerraform(struct!.ipFamilyPolicy),
    load_balancer_class: cdktf.stringToTerraform(struct!.loadBalancerClass),
    load_balancer_ip: cdktf.stringToTerraform(struct!.loadBalancerIp),
    load_balancer_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerSourceRanges),
    ports: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsToTerraform, false)(struct!.ports),
    publish_not_ready_addresses: cdktf.booleanToTerraform(struct!.publishNotReadyAddresses),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_config: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigToTerraform(struct!.sessionAffinityConfig),
    traffic_distribution: cdktf.stringToTerraform(struct!.trafficDistribution),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_load_balancer_node_ports: {
      value: cdktf.booleanToHclTerraform(struct!.allocateLoadBalancerNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_ip: {
      value: cdktf.stringToHclTerraform(struct!.clusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_name: {
      value: cdktf.stringToHclTerraform(struct!.externalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_node_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.internalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFamilies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_family_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFamilyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_class: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_ip: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsList",
    },
    publish_not_ready_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.publishNotReadyAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_affinity_config: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigToHclTerraform(struct!.sessionAffinityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfig",
    },
    traffic_distribution: {
      value: cdktf.stringToHclTerraform(struct!.trafficDistribution),
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateLoadBalancerNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateLoadBalancerNodePorts = this._allocateLoadBalancerNodePorts;
    }
    if (this._clusterIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIPs = this._clusterIPs;
    }
    if (this._clusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIp = this._clusterIp;
    }
    if (this._externalIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIPs = this._externalIPs;
    }
    if (this._externalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalName = this._externalName;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._healthCheckNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckNodePort = this._healthCheckNodePort;
    }
    if (this._internalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalTrafficPolicy = this._internalTrafficPolicy;
    }
    if (this._ipFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilies = this._ipFamilies;
    }
    if (this._ipFamilyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilyPolicy = this._ipFamilyPolicy;
    }
    if (this._loadBalancerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerClass = this._loadBalancerClass;
    }
    if (this._loadBalancerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIp = this._loadBalancerIp;
    }
    if (this._loadBalancerSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSourceRanges = this._loadBalancerSourceRanges;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._publishNotReadyAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishNotReadyAddresses = this._publishNotReadyAddresses;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._sessionAffinityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityConfig = this._sessionAffinityConfig?.internalValue;
    }
    if (this._trafficDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficDistribution = this._trafficDistribution;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = undefined;
      this._clusterIPs = undefined;
      this._clusterIp = undefined;
      this._externalIPs = undefined;
      this._externalName = undefined;
      this._externalTrafficPolicy = undefined;
      this._healthCheckNodePort = undefined;
      this._internalTrafficPolicy = undefined;
      this._ipFamilies = undefined;
      this._ipFamilyPolicy = undefined;
      this._loadBalancerClass = undefined;
      this._loadBalancerIp = undefined;
      this._loadBalancerSourceRanges = undefined;
      this._ports.internalValue = undefined;
      this._publishNotReadyAddresses = undefined;
      this._selector = undefined;
      this._sessionAffinity = undefined;
      this._sessionAffinityConfig.internalValue = undefined;
      this._trafficDistribution = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = value.allocateLoadBalancerNodePorts;
      this._clusterIPs = value.clusterIPs;
      this._clusterIp = value.clusterIp;
      this._externalIPs = value.externalIPs;
      this._externalName = value.externalName;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._healthCheckNodePort = value.healthCheckNodePort;
      this._internalTrafficPolicy = value.internalTrafficPolicy;
      this._ipFamilies = value.ipFamilies;
      this._ipFamilyPolicy = value.ipFamilyPolicy;
      this._loadBalancerClass = value.loadBalancerClass;
      this._loadBalancerIp = value.loadBalancerIp;
      this._loadBalancerSourceRanges = value.loadBalancerSourceRanges;
      this._ports.internalValue = value.ports;
      this._publishNotReadyAddresses = value.publishNotReadyAddresses;
      this._selector = value.selector;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityConfig.internalValue = value.sessionAffinityConfig;
      this._trafficDistribution = value.trafficDistribution;
      this._type = value.type;
    }
  }

  // allocate_load_balancer_node_ports - computed: false, optional: true, required: false
  private _allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable; 
  public get allocateLoadBalancerNodePorts() {
    return this.getBooleanAttribute('allocate_load_balancer_node_ports');
  }
  public set allocateLoadBalancerNodePorts(value: boolean | cdktf.IResolvable) {
    this._allocateLoadBalancerNodePorts = value;
  }
  public resetAllocateLoadBalancerNodePorts() {
    this._allocateLoadBalancerNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLoadBalancerNodePortsInput() {
    return this._allocateLoadBalancerNodePorts;
  }

  // cluster_i_ps - computed: false, optional: true, required: false
  private _clusterIPs?: string[]; 
  public get clusterIPs() {
    return this.getListAttribute('cluster_i_ps');
  }
  public set clusterIPs(value: string[]) {
    this._clusterIPs = value;
  }
  public resetClusterIPs() {
    this._clusterIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIPsInput() {
    return this._clusterIPs;
  }

  // cluster_ip - computed: false, optional: true, required: false
  private _clusterIp?: string; 
  public get clusterIp() {
    return this.getStringAttribute('cluster_ip');
  }
  public set clusterIp(value: string) {
    this._clusterIp = value;
  }
  public resetClusterIp() {
    this._clusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpInput() {
    return this._clusterIp;
  }

  // external_i_ps - computed: false, optional: true, required: false
  private _externalIPs?: string[]; 
  public get externalIPs() {
    return this.getListAttribute('external_i_ps');
  }
  public set externalIPs(value: string[]) {
    this._externalIPs = value;
  }
  public resetExternalIPs() {
    this._externalIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIPsInput() {
    return this._externalIPs;
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // health_check_node_port - computed: false, optional: true, required: false
  private _healthCheckNodePort?: number; 
  public get healthCheckNodePort() {
    return this.getNumberAttribute('health_check_node_port');
  }
  public set healthCheckNodePort(value: number) {
    this._healthCheckNodePort = value;
  }
  public resetHealthCheckNodePort() {
    this._healthCheckNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckNodePortInput() {
    return this._healthCheckNodePort;
  }

  // internal_traffic_policy - computed: false, optional: true, required: false
  private _internalTrafficPolicy?: string; 
  public get internalTrafficPolicy() {
    return this.getStringAttribute('internal_traffic_policy');
  }
  public set internalTrafficPolicy(value: string) {
    this._internalTrafficPolicy = value;
  }
  public resetInternalTrafficPolicy() {
    this._internalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTrafficPolicyInput() {
    return this._internalTrafficPolicy;
  }

  // ip_families - computed: false, optional: true, required: false
  private _ipFamilies?: string[]; 
  public get ipFamilies() {
    return this.getListAttribute('ip_families');
  }
  public set ipFamilies(value: string[]) {
    this._ipFamilies = value;
  }
  public resetIpFamilies() {
    this._ipFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamiliesInput() {
    return this._ipFamilies;
  }

  // ip_family_policy - computed: false, optional: true, required: false
  private _ipFamilyPolicy?: string; 
  public get ipFamilyPolicy() {
    return this.getStringAttribute('ip_family_policy');
  }
  public set ipFamilyPolicy(value: string) {
    this._ipFamilyPolicy = value;
  }
  public resetIpFamilyPolicy() {
    this._ipFamilyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyPolicyInput() {
    return this._ipFamilyPolicy;
  }

  // load_balancer_class - computed: false, optional: true, required: false
  private _loadBalancerClass?: string; 
  public get loadBalancerClass() {
    return this.getStringAttribute('load_balancer_class');
  }
  public set loadBalancerClass(value: string) {
    this._loadBalancerClass = value;
  }
  public resetLoadBalancerClass() {
    this._loadBalancerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerClassInput() {
    return this._loadBalancerClass;
  }

  // load_balancer_ip - computed: false, optional: true, required: false
  private _loadBalancerIp?: string; 
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }
  public set loadBalancerIp(value: string) {
    this._loadBalancerIp = value;
  }
  public resetLoadBalancerIp() {
    this._loadBalancerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpInput() {
    return this._loadBalancerIp;
  }

  // load_balancer_source_ranges - computed: false, optional: true, required: false
  private _loadBalancerSourceRanges?: string[]; 
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }
  public set loadBalancerSourceRanges(value: string[]) {
    this._loadBalancerSourceRanges = value;
  }
  public resetLoadBalancerSourceRanges() {
    this._loadBalancerSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSourceRangesInput() {
    return this._loadBalancerSourceRanges;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // publish_not_ready_addresses - computed: false, optional: true, required: false
  private _publishNotReadyAddresses?: boolean | cdktf.IResolvable; 
  public get publishNotReadyAddresses() {
    return this.getBooleanAttribute('publish_not_ready_addresses');
  }
  public set publishNotReadyAddresses(value: boolean | cdktf.IResolvable) {
    this._publishNotReadyAddresses = value;
  }
  public resetPublishNotReadyAddresses() {
    this._publishNotReadyAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishNotReadyAddressesInput() {
    return this._publishNotReadyAddresses;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_config - computed: false, optional: true, required: false
  private _sessionAffinityConfig = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfigOutputReference(this, "session_affinity_config");
  public get sessionAffinityConfig() {
    return this._sessionAffinityConfig;
  }
  public putSessionAffinityConfig(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecSessionAffinityConfig) {
    this._sessionAffinityConfig.internalValue = value;
  }
  public resetSessionAffinityConfig() {
    this._sessionAffinityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityConfigInput() {
    return this._sessionAffinityConfig.internalValue;
  }

  // traffic_distribution - computed: false, optional: true, required: false
  private _trafficDistribution?: string; 
  public get trafficDistribution() {
    return this.getStringAttribute('traffic_distribution');
  }
  public set trafficDistribution(value: string) {
    this._trafficDistribution = value;
  }
  public resetTrafficDistribution() {
    this._trafficDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionInput() {
    return this._trafficDistribution;
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
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#metadata DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#spec DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpec;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadataToTerraform(struct!.metadata),
    spec: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecToTerraform(struct!.spec),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadata",
    },
    spec: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#connect_timeout DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#connect_timeout_log_error DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#connect_timeout_log_error}
  */
  readonly connectTimeoutLogError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#dns_mode DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#dns_mode}
  */
  readonly dnsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#dns_prefer_ipv4 DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#dns_prefer_ipv4}
  */
  readonly dnsPreferIpv4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#dns_resolver DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#dns_resolver}
  */
  readonly dnsResolver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#keepalive DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#keepalive}
  */
  readonly keepalive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#keepalive_idle_timeout DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#keepalive_idle_timeout}
  */
  readonly keepaliveIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#keepalive_max_recycle DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#keepalive_max_recycle}
  */
  readonly keepaliveMaxRecycle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#max_worker_connections DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#max_worker_connections}
  */
  readonly maxWorkerConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#source_address DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#source_address}
  */
  readonly sourceAddress?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetworkToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connect_timeout_log_error: cdktf.booleanToTerraform(struct!.connectTimeoutLogError),
    dns_mode: cdktf.stringToTerraform(struct!.dnsMode),
    dns_prefer_ipv4: cdktf.booleanToTerraform(struct!.dnsPreferIpv4),
    dns_resolver: cdktf.stringToTerraform(struct!.dnsResolver),
    keepalive: cdktf.booleanToTerraform(struct!.keepalive),
    keepalive_idle_timeout: cdktf.numberToTerraform(struct!.keepaliveIdleTimeout),
    keepalive_max_recycle: cdktf.numberToTerraform(struct!.keepaliveMaxRecycle),
    max_worker_connections: cdktf.numberToTerraform(struct!.maxWorkerConnections),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetworkToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetwork | cdktf.IResolvable): any {
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
    connect_timeout_log_error: {
      value: cdktf.booleanToHclTerraform(struct!.connectTimeoutLogError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_mode: {
      value: cdktf.stringToHclTerraform(struct!.dnsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_prefer_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.dnsPreferIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_resolver: {
      value: cdktf.stringToHclTerraform(struct!.dnsResolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive: {
      value: cdktf.booleanToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_max_recycle: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveMaxRecycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_worker_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkerConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectTimeoutLogError !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutLogError = this._connectTimeoutLogError;
    }
    if (this._dnsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMode = this._dnsMode;
    }
    if (this._dnsPreferIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPreferIpv4 = this._dnsPreferIpv4;
    }
    if (this._dnsResolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolver = this._dnsResolver;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._keepaliveIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveIdleTimeout = this._keepaliveIdleTimeout;
    }
    if (this._keepaliveMaxRecycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveMaxRecycle = this._keepaliveMaxRecycle;
    }
    if (this._maxWorkerConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerConnections = this._maxWorkerConnections;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._connectTimeoutLogError = undefined;
      this._dnsMode = undefined;
      this._dnsPreferIpv4 = undefined;
      this._dnsResolver = undefined;
      this._keepalive = undefined;
      this._keepaliveIdleTimeout = undefined;
      this._keepaliveMaxRecycle = undefined;
      this._maxWorkerConnections = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._connectTimeoutLogError = value.connectTimeoutLogError;
      this._dnsMode = value.dnsMode;
      this._dnsPreferIpv4 = value.dnsPreferIpv4;
      this._dnsResolver = value.dnsResolver;
      this._keepalive = value.keepalive;
      this._keepaliveIdleTimeout = value.keepaliveIdleTimeout;
      this._keepaliveMaxRecycle = value.keepaliveMaxRecycle;
      this._maxWorkerConnections = value.maxWorkerConnections;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
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

  // connect_timeout_log_error - computed: false, optional: true, required: false
  private _connectTimeoutLogError?: boolean | cdktf.IResolvable; 
  public get connectTimeoutLogError() {
    return this.getBooleanAttribute('connect_timeout_log_error');
  }
  public set connectTimeoutLogError(value: boolean | cdktf.IResolvable) {
    this._connectTimeoutLogError = value;
  }
  public resetConnectTimeoutLogError() {
    this._connectTimeoutLogError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutLogErrorInput() {
    return this._connectTimeoutLogError;
  }

  // dns_mode - computed: false, optional: true, required: false
  private _dnsMode?: string; 
  public get dnsMode() {
    return this.getStringAttribute('dns_mode');
  }
  public set dnsMode(value: string) {
    this._dnsMode = value;
  }
  public resetDnsMode() {
    this._dnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsModeInput() {
    return this._dnsMode;
  }

  // dns_prefer_ipv4 - computed: false, optional: true, required: false
  private _dnsPreferIpv4?: boolean | cdktf.IResolvable; 
  public get dnsPreferIpv4() {
    return this.getBooleanAttribute('dns_prefer_ipv4');
  }
  public set dnsPreferIpv4(value: boolean | cdktf.IResolvable) {
    this._dnsPreferIpv4 = value;
  }
  public resetDnsPreferIpv4() {
    this._dnsPreferIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPreferIpv4Input() {
    return this._dnsPreferIpv4;
  }

  // dns_resolver - computed: false, optional: true, required: false
  private _dnsResolver?: string; 
  public get dnsResolver() {
    return this.getStringAttribute('dns_resolver');
  }
  public set dnsResolver(value: string) {
    this._dnsResolver = value;
  }
  public resetDnsResolver() {
    this._dnsResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolverInput() {
    return this._dnsResolver;
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

  // keepalive_idle_timeout - computed: false, optional: true, required: false
  private _keepaliveIdleTimeout?: number; 
  public get keepaliveIdleTimeout() {
    return this.getNumberAttribute('keepalive_idle_timeout');
  }
  public set keepaliveIdleTimeout(value: number) {
    this._keepaliveIdleTimeout = value;
  }
  public resetKeepaliveIdleTimeout() {
    this._keepaliveIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIdleTimeoutInput() {
    return this._keepaliveIdleTimeout;
  }

  // keepalive_max_recycle - computed: false, optional: true, required: false
  private _keepaliveMaxRecycle?: number; 
  public get keepaliveMaxRecycle() {
    return this.getNumberAttribute('keepalive_max_recycle');
  }
  public set keepaliveMaxRecycle(value: number) {
    this._keepaliveMaxRecycle = value;
  }
  public resetKeepaliveMaxRecycle() {
    this._keepaliveMaxRecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveMaxRecycleInput() {
    return this._keepaliveMaxRecycle;
  }

  // max_worker_connections - computed: false, optional: true, required: false
  private _maxWorkerConnections?: number; 
  public get maxWorkerConnections() {
    return this.getNumberAttribute('max_worker_connections');
  }
  public set maxWorkerConnections(value: number) {
    this._maxWorkerConnections = value;
  }
  public resetMaxWorkerConnections() {
    this._maxWorkerConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerConnectionsInput() {
    return this._maxWorkerConnections;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#mode DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#path DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsOutputReference {
    return new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#default_mode DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#items DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#items}
  */
  readonly items?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsList",
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDir {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#medium DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#size_limit DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDirToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDirToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#path DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPathToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPathToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#claim_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#read_only DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSourceToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSourceToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#api_group DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#kind DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#api_group DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#kind DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#namespace DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRefToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRefToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#limits DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#requests DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResourcesToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResourcesToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#operator DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#values DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#match_expressions DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#match_labels DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#access_modes DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#data_source DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#data_source_ref DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#resources DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#selector DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#storage_class_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#volume_attributes_class_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#volume_mode DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#volume_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRef",
    },
    resources: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResources",
    },
    selector: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#annotations DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#source DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#source}
  */
  readonly source?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#spec DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpec;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    source: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSourceToTerraform(struct!.source),
    spec: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecToTerraform(struct!.spec),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvc | cdktf.IResolvable): any {
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
    source: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSource",
    },
    spec: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvc | cdktf.IResolvable | undefined {
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
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._source.internalValue = undefined;
      this._spec.internalValue = undefined;
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
      this._source.internalValue = value.source;
      this._spec.internalValue = value.spec;
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

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#mode DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#path DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsOutputReference {
    return new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#default_mode DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#items DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#items}
  */
  readonly items?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#optional DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#secret_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#config_map DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#empty_dir DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDir;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#host_path DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#host_path}
  */
  readonly hostPath?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#pvc DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#pvc}
  */
  readonly pvc?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#secret DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecret;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapToTerraform(struct!.configMap),
    empty_dir: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDirToTerraform(struct!.emptyDir),
    host_path: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPathToTerraform(struct!.hostPath),
    pvc: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcToTerraform(struct!.pvc),
    secret: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretToTerraform(struct!.secret),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMap",
    },
    empty_dir: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDir",
    },
    host_path: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPath",
    },
    pvc: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcToHclTerraform(struct!.pvc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvc",
    },
    secret: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._pvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvc = this._pvc?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._pvc.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._emptyDir.internalValue = value.emptyDir;
      this._hostPath.internalValue = value.hostPath;
      this._pvc.internalValue = value.pvc;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // pvc - computed: false, optional: true, required: false
  private _pvc = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvcOutputReference(this, "pvc");
  public get pvc() {
    return this._pvc;
  }
  public putPvc(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbPvc) {
    this._pvc.internalValue = value;
  }
  public resetPvc() {
    this._pvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcInput() {
    return this._pvc.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#localhost_profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfileToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#level DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#role DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#user DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#localhost_profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfileToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsOutputReference {
    return new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#gmsa_credential_spec DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#gmsa_credential_spec_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#host_process DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#run_as_user_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#app_armor_profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#fs_group DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#fs_group_change_policy DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#run_as_group DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#run_as_non_root DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#run_as_user DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#se_linux_options DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#seccomp_profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#supplemental_groups DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#supplemental_groups_policy DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#supplemental_groups_policy}
  */
  readonly supplementalGroupsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#sysctls DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#sysctls}
  */
  readonly sysctls?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#windows_options DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptions;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_armor_profile: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    supplemental_groups_policy: cdktf.stringToTerraform(struct!.supplementalGroupsPolicy),
    sysctls: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_armor_profile: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfile",
    },
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supplemental_groups_policy: {
      value: cdktf.stringToHclTerraform(struct!.supplementalGroupsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._supplementalGroupsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroupsPolicy = this._supplementalGroupsPolicy;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._supplementalGroupsPolicy = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._supplementalGroupsPolicy = value.supplementalGroupsPolicy;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // supplemental_groups_policy - computed: false, optional: true, required: false
  private _supplementalGroupsPolicy?: string; 
  public get supplementalGroupsPolicy() {
    return this.getStringAttribute('supplemental_groups_policy');
  }
  public set supplementalGroupsPolicy(value: string) {
    this._supplementalGroupsPolicy = value;
  }
  public resetSupplementalGroupsPolicy() {
    this._supplementalGroupsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsPolicyInput() {
    return this._supplementalGroupsPolicy;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#localhost_profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfileToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#add DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#drop DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilitiesToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilitiesToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#level DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#role DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#user DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#localhost_profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfileToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#gmsa_credential_spec DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#gmsa_credential_spec_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#host_process DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#run_as_user_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#allow_privilege_escalation DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#app_armor_profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#capabilities DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#privileged DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#proc_mount DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#read_only_root_filesystem DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#run_as_group DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#run_as_non_root DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#run_as_user DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#se_linux_options DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#seccomp_profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#windows_options DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptions;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    app_armor_profile: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    capabilities: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_armor_profile: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfile",
    },
    capabilities: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#pod_security_context DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#pod_security_policy_create DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#pod_security_policy_create}
  */
  readonly podSecurityPolicyCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#role_based_access_control_create DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#role_based_access_control_create}
  */
  readonly roleBasedAccessControlCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#security_context DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#security_context}
  */
  readonly securityContext?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#service_account DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_security_context: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextToTerraform(struct!.podSecurityContext),
    pod_security_policy_create: cdktf.booleanToTerraform(struct!.podSecurityPolicyCreate),
    role_based_access_control_create: cdktf.booleanToTerraform(struct!.roleBasedAccessControlCreate),
    security_context: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextToTerraform(struct!.securityContext),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_security_context: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContext",
    },
    pod_security_policy_create: {
      value: cdktf.booleanToHclTerraform(struct!.podSecurityPolicyCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_based_access_control_create: {
      value: cdktf.booleanToHclTerraform(struct!.roleBasedAccessControlCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_context: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContext",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._podSecurityPolicyCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityPolicyCreate = this._podSecurityPolicyCreate;
    }
    if (this._roleBasedAccessControlCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBasedAccessControlCreate = this._roleBasedAccessControlCreate;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._podSecurityPolicyCreate = undefined;
      this._roleBasedAccessControlCreate = undefined;
      this._securityContext.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._podSecurityPolicyCreate = value.podSecurityPolicyCreate;
      this._roleBasedAccessControlCreate = value.roleBasedAccessControlCreate;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // pod_security_policy_create - computed: false, optional: true, required: false
  private _podSecurityPolicyCreate?: boolean | cdktf.IResolvable; 
  public get podSecurityPolicyCreate() {
    return this.getBooleanAttribute('pod_security_policy_create');
  }
  public set podSecurityPolicyCreate(value: boolean | cdktf.IResolvable) {
    this._podSecurityPolicyCreate = value;
  }
  public resetPodSecurityPolicyCreate() {
    this._podSecurityPolicyCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityPolicyCreateInput() {
    return this._podSecurityPolicyCreate;
  }

  // role_based_access_control_create - computed: false, optional: true, required: false
  private _roleBasedAccessControlCreate?: boolean | cdktf.IResolvable; 
  public get roleBasedAccessControlCreate() {
    return this.getBooleanAttribute('role_based_access_control_create');
  }
  public set roleBasedAccessControlCreate(value: boolean | cdktf.IResolvable) {
    this._roleBasedAccessControlCreate = value;
  }
  public resetRoleBasedAccessControlCreate() {
    this._roleBasedAccessControlCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedAccessControlCreateInput() {
    return this._roleBasedAccessControlCreate;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecuritySecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecrets | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsOutputReference {
    return new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#annotations DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadataToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadataToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#api_version DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#field_path DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#kind DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#namespace DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#resource_version DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#uid DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsOutputReference {
    return new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#automount_service_account_token DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#image_pull_secrets DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#metadata DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#secrets DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#secrets}
  */
  readonly secrets?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecrets[] | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    image_pull_secrets: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    metadata: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadataToTerraform(struct!.metadata),
    secrets: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsList",
    },
    metadata: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadata",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automountServiceAccountToken = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._metadata.internalValue = value.metadata;
      this._secrets.internalValue = value.secrets;
    }
  }

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#enabled DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#secret_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#shared_key DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#shared_key}
  */
  readonly sharedKey?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTlsToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTlsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._secretName = undefined;
      this._sharedKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._secretName = value.secretName;
      this._sharedKey = value.sharedKey;
    }
  }

  // enabled - computed: false, optional: false, required: true
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
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
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#buffer_storage DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#buffer_storage}
  */
  readonly bufferStorage?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#buffer_storage_volume DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#buffer_storage_volume}
  */
  readonly bufferStorageVolume?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#containers_path DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#containers_path}
  */
  readonly containersPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#coro_stack_size DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#coro_stack_size}
  */
  readonly coroStackSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#custom_config_secret DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#custom_config_secret}
  */
  readonly customConfigSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#daemon_set DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#daemon_set}
  */
  readonly daemonSet?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#disable_kubernetes_filter DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#disable_kubernetes_filter}
  */
  readonly disableKubernetesFilter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#enable_upstream DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#enable_upstream}
  */
  readonly enableUpstream?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#enabled DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#extra_volume_mounts DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#extra_volume_mounts}
  */
  readonly extraVolumeMounts?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#filter_aws DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#filter_aws}
  */
  readonly filterAws?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#filter_kubernetes DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#filter_kubernetes}
  */
  readonly filterKubernetes?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#flush DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#flush}
  */
  readonly flush?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#forward_options DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#forward_options}
  */
  readonly forwardOptions?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#grace DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#grace}
  */
  readonly grace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#input_tail DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#input_tail}
  */
  readonly inputTail?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#liveness_default_check DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#liveness_default_check}
  */
  readonly livenessDefaultCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#log_level DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#metrics DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#metrics_service DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#metrics_service}
  */
  readonly metricsService?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#network DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#network}
  */
  readonly network?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#pod_priority_class_name DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#pod_priority_class_name}
  */
  readonly podPriorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#positiondb DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#positiondb}
  */
  readonly positiondb?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#security DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#security}
  */
  readonly security?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#service_account DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#target_host DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#target_host}
  */
  readonly targetHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#target_port DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#target_port}
  */
  readonly targetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#tls DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#var_logs_path DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#var_logs_path}
  */
  readonly varLogsPath?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_storage: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageToTerraform(struct!.bufferStorage),
    buffer_storage_volume: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolumeToTerraform(struct!.bufferStorageVolume),
    containers_path: cdktf.stringToTerraform(struct!.containersPath),
    coro_stack_size: cdktf.numberToTerraform(struct!.coroStackSize),
    custom_config_secret: cdktf.stringToTerraform(struct!.customConfigSecret),
    daemon_set: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSetToTerraform(struct!.daemonSet),
    disable_kubernetes_filter: cdktf.booleanToTerraform(struct!.disableKubernetesFilter),
    enable_upstream: cdktf.booleanToTerraform(struct!.enableUpstream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    extra_volume_mounts: cdktf.listMapper(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMountsToTerraform, false)(struct!.extraVolumeMounts),
    filter_aws: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAwsToTerraform(struct!.filterAws),
    filter_kubernetes: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetesToTerraform(struct!.filterKubernetes),
    flush: cdktf.numberToTerraform(struct!.flush),
    forward_options: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptionsToTerraform(struct!.forwardOptions),
    grace: cdktf.numberToTerraform(struct!.grace),
    input_tail: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTailToTerraform(struct!.inputTail),
    liveness_default_check: cdktf.booleanToTerraform(struct!.livenessDefaultCheck),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    metrics: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsToTerraform(struct!.metrics),
    metrics_service: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceToTerraform(struct!.metricsService),
    network: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetworkToTerraform(struct!.network),
    pod_priority_class_name: cdktf.stringToTerraform(struct!.podPriorityClassName),
    positiondb: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbToTerraform(struct!.positiondb),
    security: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityToTerraform(struct!.security),
    service_account: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountToTerraform(struct!.serviceAccount),
    target_host: cdktf.stringToTerraform(struct!.targetHost),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    tls: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTlsToTerraform(struct!.tls),
    var_logs_path: cdktf.stringToTerraform(struct!.varLogsPath),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_storage: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageToHclTerraform(struct!.bufferStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorage",
    },
    buffer_storage_volume: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolumeToHclTerraform(struct!.bufferStorageVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolume",
    },
    containers_path: {
      value: cdktf.stringToHclTerraform(struct!.containersPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coro_stack_size: {
      value: cdktf.numberToHclTerraform(struct!.coroStackSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_config_secret: {
      value: cdktf.stringToHclTerraform(struct!.customConfigSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daemon_set: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSetToHclTerraform(struct!.daemonSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSet",
    },
    disable_kubernetes_filter: {
      value: cdktf.booleanToHclTerraform(struct!.disableKubernetesFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_upstream: {
      value: cdktf.booleanToHclTerraform(struct!.enableUpstream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMountsToHclTerraform, false)(struct!.extraVolumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMountsList",
    },
    filter_aws: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAwsToHclTerraform(struct!.filterAws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAws",
    },
    filter_kubernetes: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetesToHclTerraform(struct!.filterKubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetes",
    },
    flush: {
      value: cdktf.numberToHclTerraform(struct!.flush),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_options: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptionsToHclTerraform(struct!.forwardOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptions",
    },
    grace: {
      value: cdktf.numberToHclTerraform(struct!.grace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_tail: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTailToHclTerraform(struct!.inputTail),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTail",
    },
    liveness_default_check: {
      value: cdktf.booleanToHclTerraform(struct!.livenessDefaultCheck),
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
    metrics: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetrics",
    },
    metrics_service: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceToHclTerraform(struct!.metricsService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsService",
    },
    network: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetwork",
    },
    pod_priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.podPriorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    positiondb: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbToHclTerraform(struct!.positiondb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondb",
    },
    security: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurity",
    },
    service_account: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccount",
    },
    target_host: {
      value: cdktf.stringToHclTerraform(struct!.targetHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTls",
    },
    var_logs_path: {
      value: cdktf.stringToHclTerraform(struct!.varLogsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferStorage = this._bufferStorage?.internalValue;
    }
    if (this._bufferStorageVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferStorageVolume = this._bufferStorageVolume?.internalValue;
    }
    if (this._containersPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containersPath = this._containersPath;
    }
    if (this._coroStackSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.coroStackSize = this._coroStackSize;
    }
    if (this._customConfigSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfigSecret = this._customConfigSecret;
    }
    if (this._daemonSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSet = this._daemonSet?.internalValue;
    }
    if (this._disableKubernetesFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableKubernetesFilter = this._disableKubernetesFilter;
    }
    if (this._enableUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUpstream = this._enableUpstream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extraVolumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraVolumeMounts = this._extraVolumeMounts?.internalValue;
    }
    if (this._filterAws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAws = this._filterAws?.internalValue;
    }
    if (this._filterKubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKubernetes = this._filterKubernetes?.internalValue;
    }
    if (this._flush !== undefined) {
      hasAnyValues = true;
      internalValueResult.flush = this._flush;
    }
    if (this._forwardOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardOptions = this._forwardOptions?.internalValue;
    }
    if (this._grace !== undefined) {
      hasAnyValues = true;
      internalValueResult.grace = this._grace;
    }
    if (this._inputTail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTail = this._inputTail?.internalValue;
    }
    if (this._livenessDefaultCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessDefaultCheck = this._livenessDefaultCheck;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._metricsService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsService = this._metricsService?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._podPriorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPriorityClassName = this._podPriorityClassName;
    }
    if (this._positiondb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.positiondb = this._positiondb?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._targetHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetHost = this._targetHost;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._varLogsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.varLogsPath = this._varLogsPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferStorage.internalValue = undefined;
      this._bufferStorageVolume.internalValue = undefined;
      this._containersPath = undefined;
      this._coroStackSize = undefined;
      this._customConfigSecret = undefined;
      this._daemonSet.internalValue = undefined;
      this._disableKubernetesFilter = undefined;
      this._enableUpstream = undefined;
      this._enabled = undefined;
      this._extraVolumeMounts.internalValue = undefined;
      this._filterAws.internalValue = undefined;
      this._filterKubernetes.internalValue = undefined;
      this._flush = undefined;
      this._forwardOptions.internalValue = undefined;
      this._grace = undefined;
      this._inputTail.internalValue = undefined;
      this._livenessDefaultCheck = undefined;
      this._logLevel = undefined;
      this._metrics.internalValue = undefined;
      this._metricsService.internalValue = undefined;
      this._network.internalValue = undefined;
      this._podPriorityClassName = undefined;
      this._positiondb.internalValue = undefined;
      this._security.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._targetHost = undefined;
      this._targetPort = undefined;
      this._tls.internalValue = undefined;
      this._varLogsPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferStorage.internalValue = value.bufferStorage;
      this._bufferStorageVolume.internalValue = value.bufferStorageVolume;
      this._containersPath = value.containersPath;
      this._coroStackSize = value.coroStackSize;
      this._customConfigSecret = value.customConfigSecret;
      this._daemonSet.internalValue = value.daemonSet;
      this._disableKubernetesFilter = value.disableKubernetesFilter;
      this._enableUpstream = value.enableUpstream;
      this._enabled = value.enabled;
      this._extraVolumeMounts.internalValue = value.extraVolumeMounts;
      this._filterAws.internalValue = value.filterAws;
      this._filterKubernetes.internalValue = value.filterKubernetes;
      this._flush = value.flush;
      this._forwardOptions.internalValue = value.forwardOptions;
      this._grace = value.grace;
      this._inputTail.internalValue = value.inputTail;
      this._livenessDefaultCheck = value.livenessDefaultCheck;
      this._logLevel = value.logLevel;
      this._metrics.internalValue = value.metrics;
      this._metricsService.internalValue = value.metricsService;
      this._network.internalValue = value.network;
      this._podPriorityClassName = value.podPriorityClassName;
      this._positiondb.internalValue = value.positiondb;
      this._security.internalValue = value.security;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._targetHost = value.targetHost;
      this._targetPort = value.targetPort;
      this._tls.internalValue = value.tls;
      this._varLogsPath = value.varLogsPath;
    }
  }

  // buffer_storage - computed: false, optional: true, required: false
  private _bufferStorage = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageOutputReference(this, "buffer_storage");
  public get bufferStorage() {
    return this._bufferStorage;
  }
  public putBufferStorage(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorage) {
    this._bufferStorage.internalValue = value;
  }
  public resetBufferStorage() {
    this._bufferStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferStorageInput() {
    return this._bufferStorage.internalValue;
  }

  // buffer_storage_volume - computed: false, optional: true, required: false
  private _bufferStorageVolume = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolumeOutputReference(this, "buffer_storage_volume");
  public get bufferStorageVolume() {
    return this._bufferStorageVolume;
  }
  public putBufferStorageVolume(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitBufferStorageVolume) {
    this._bufferStorageVolume.internalValue = value;
  }
  public resetBufferStorageVolume() {
    this._bufferStorageVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferStorageVolumeInput() {
    return this._bufferStorageVolume.internalValue;
  }

  // containers_path - computed: false, optional: true, required: false
  private _containersPath?: string; 
  public get containersPath() {
    return this.getStringAttribute('containers_path');
  }
  public set containersPath(value: string) {
    this._containersPath = value;
  }
  public resetContainersPath() {
    this._containersPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersPathInput() {
    return this._containersPath;
  }

  // coro_stack_size - computed: false, optional: true, required: false
  private _coroStackSize?: number; 
  public get coroStackSize() {
    return this.getNumberAttribute('coro_stack_size');
  }
  public set coroStackSize(value: number) {
    this._coroStackSize = value;
  }
  public resetCoroStackSize() {
    this._coroStackSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coroStackSizeInput() {
    return this._coroStackSize;
  }

  // custom_config_secret - computed: false, optional: true, required: false
  private _customConfigSecret?: string; 
  public get customConfigSecret() {
    return this.getStringAttribute('custom_config_secret');
  }
  public set customConfigSecret(value: string) {
    this._customConfigSecret = value;
  }
  public resetCustomConfigSecret() {
    this._customConfigSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigSecretInput() {
    return this._customConfigSecret;
  }

  // daemon_set - computed: false, optional: true, required: false
  private _daemonSet = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSetOutputReference(this, "daemon_set");
  public get daemonSet() {
    return this._daemonSet;
  }
  public putDaemonSet(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitDaemonSet) {
    this._daemonSet.internalValue = value;
  }
  public resetDaemonSet() {
    this._daemonSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSetInput() {
    return this._daemonSet.internalValue;
  }

  // disable_kubernetes_filter - computed: false, optional: true, required: false
  private _disableKubernetesFilter?: boolean | cdktf.IResolvable; 
  public get disableKubernetesFilter() {
    return this.getBooleanAttribute('disable_kubernetes_filter');
  }
  public set disableKubernetesFilter(value: boolean | cdktf.IResolvable) {
    this._disableKubernetesFilter = value;
  }
  public resetDisableKubernetesFilter() {
    this._disableKubernetesFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKubernetesFilterInput() {
    return this._disableKubernetesFilter;
  }

  // enable_upstream - computed: false, optional: true, required: false
  private _enableUpstream?: boolean | cdktf.IResolvable; 
  public get enableUpstream() {
    return this.getBooleanAttribute('enable_upstream');
  }
  public set enableUpstream(value: boolean | cdktf.IResolvable) {
    this._enableUpstream = value;
  }
  public resetEnableUpstream() {
    this._enableUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpstreamInput() {
    return this._enableUpstream;
  }

  // enabled - computed: false, optional: true, required: false
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

  // extra_volume_mounts - computed: false, optional: true, required: false
  private _extraVolumeMounts = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMountsList(this, "extra_volume_mounts", false);
  public get extraVolumeMounts() {
    return this._extraVolumeMounts;
  }
  public putExtraVolumeMounts(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitExtraVolumeMounts[] | cdktf.IResolvable) {
    this._extraVolumeMounts.internalValue = value;
  }
  public resetExtraVolumeMounts() {
    this._extraVolumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVolumeMountsInput() {
    return this._extraVolumeMounts.internalValue;
  }

  // filter_aws - computed: false, optional: true, required: false
  private _filterAws = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAwsOutputReference(this, "filter_aws");
  public get filterAws() {
    return this._filterAws;
  }
  public putFilterAws(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterAws) {
    this._filterAws.internalValue = value;
  }
  public resetFilterAws() {
    this._filterAws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAwsInput() {
    return this._filterAws.internalValue;
  }

  // filter_kubernetes - computed: false, optional: true, required: false
  private _filterKubernetes = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetesOutputReference(this, "filter_kubernetes");
  public get filterKubernetes() {
    return this._filterKubernetes;
  }
  public putFilterKubernetes(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitFilterKubernetes) {
    this._filterKubernetes.internalValue = value;
  }
  public resetFilterKubernetes() {
    this._filterKubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKubernetesInput() {
    return this._filterKubernetes.internalValue;
  }

  // flush - computed: false, optional: true, required: false
  private _flush?: number; 
  public get flush() {
    return this.getNumberAttribute('flush');
  }
  public set flush(value: number) {
    this._flush = value;
  }
  public resetFlush() {
    this._flush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushInput() {
    return this._flush;
  }

  // forward_options - computed: false, optional: true, required: false
  private _forwardOptions = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptionsOutputReference(this, "forward_options");
  public get forwardOptions() {
    return this._forwardOptions;
  }
  public putForwardOptions(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitForwardOptions) {
    this._forwardOptions.internalValue = value;
  }
  public resetForwardOptions() {
    this._forwardOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardOptionsInput() {
    return this._forwardOptions.internalValue;
  }

  // grace - computed: false, optional: true, required: false
  private _grace?: number; 
  public get grace() {
    return this.getNumberAttribute('grace');
  }
  public set grace(value: number) {
    this._grace = value;
  }
  public resetGrace() {
    this._grace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceInput() {
    return this._grace;
  }

  // input_tail - computed: false, optional: true, required: false
  private _inputTail = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTailOutputReference(this, "input_tail");
  public get inputTail() {
    return this._inputTail;
  }
  public putInputTail(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitInputTail) {
    this._inputTail.internalValue = value;
  }
  public resetInputTail() {
    this._inputTail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTailInput() {
    return this._inputTail.internalValue;
  }

  // liveness_default_check - computed: false, optional: true, required: false
  private _livenessDefaultCheck?: boolean | cdktf.IResolvable; 
  public get livenessDefaultCheck() {
    return this.getBooleanAttribute('liveness_default_check');
  }
  public set livenessDefaultCheck(value: boolean | cdktf.IResolvable) {
    this._livenessDefaultCheck = value;
  }
  public resetLivenessDefaultCheck() {
    this._livenessDefaultCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessDefaultCheckInput() {
    return this._livenessDefaultCheck;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // metrics_service - computed: false, optional: true, required: false
  private _metricsService = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsServiceOutputReference(this, "metrics_service");
  public get metricsService() {
    return this._metricsService;
  }
  public putMetricsService(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitMetricsService) {
    this._metricsService.internalValue = value;
  }
  public resetMetricsService() {
    this._metricsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsServiceInput() {
    return this._metricsService.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // pod_priority_class_name - computed: false, optional: true, required: false
  private _podPriorityClassName?: string; 
  public get podPriorityClassName() {
    return this.getStringAttribute('pod_priority_class_name');
  }
  public set podPriorityClassName(value: string) {
    this._podPriorityClassName = value;
  }
  public resetPodPriorityClassName() {
    this._podPriorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPriorityClassNameInput() {
    return this._podPriorityClassName;
  }

  // positiondb - computed: false, optional: true, required: false
  private _positiondb = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondbOutputReference(this, "positiondb");
  public get positiondb() {
    return this._positiondb;
  }
  public putPositiondb(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitPositiondb) {
    this._positiondb.internalValue = value;
  }
  public resetPositiondb() {
    this._positiondb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiondbInput() {
    return this._positiondb.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // target_host - computed: false, optional: true, required: false
  private _targetHost?: string; 
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }
  public set targetHost(value: string) {
    this._targetHost = value;
  }
  public resetTargetHost() {
    this._targetHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostInput() {
    return this._targetHost;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // var_logs_path - computed: false, optional: true, required: false
  private _varLogsPath?: string; 
  public get varLogsPath() {
    return this.getStringAttribute('var_logs_path');
  }
  public set varLogsPath(value: string) {
    this._varLogsPath = value;
  }
  public resetVarLogsPath() {
    this._varLogsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varLogsPathInput() {
    return this._varLogsPath;
  }
}
export interface DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#logging_ref DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#logging_ref}
  */
  readonly loggingRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#metadata DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#node_agent_fluentbit DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#node_agent_fluentbit}
  */
  readonly nodeAgentFluentbit?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/logging_banzaicloud_io_node_agent_v1beta1_manifest#profile DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1Manifest#profile}
  */
  readonly profile?: string;
}

export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecToTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging_ref: cdktf.stringToTerraform(struct!.loggingRef),
    metadata: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadataToTerraform(struct!.metadata),
    node_agent_fluentbit: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitToTerraform(struct!.nodeAgentFluentbit),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging_ref: {
      value: cdktf.stringToHclTerraform(struct!.loggingRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadata",
    },
    node_agent_fluentbit: {
      value: dataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitToHclTerraform(struct!.nodeAgentFluentbit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbit",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingRef = this._loggingRef;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._nodeAgentFluentbit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAgentFluentbit = this._nodeAgentFluentbit?.internalValue;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loggingRef = undefined;
      this._metadata.internalValue = undefined;
      this._nodeAgentFluentbit.internalValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loggingRef = value.loggingRef;
      this._metadata.internalValue = value.metadata;
      this._nodeAgentFluentbit.internalValue = value.nodeAgentFluentbit;
      this._profile = value.profile;
    }
  }

  // logging_ref - computed: false, optional: true, required: false
  private _loggingRef?: string; 
  public get loggingRef() {
    return this.getStringAttribute('logging_ref');
  }
  public set loggingRef(value: string) {
    this._loggingRef = value;
  }
  public resetLoggingRef() {
    this._loggingRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingRefInput() {
    return this._loggingRef;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // node_agent_fluentbit - computed: false, optional: true, required: false
  private _nodeAgentFluentbit = new DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbitOutputReference(this, "node_agent_fluentbit");
  public get nodeAgentFluentbit() {
    return this._nodeAgentFluentbit;
  }
  public putNodeAgentFluentbit(value: DataK8SLoggingBanzaicloudIoNodeAgentV1Beta1ManifestSpecNodeAgentFluentbit) {
    this._nodeAgentFluentbit.internalValue = value;
  }
  public resetNodeAgentFluentbit() {
    this._nodeAgentFluentbit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAgentFluentbitInput() {
    return this._nodeAgentFluentbit.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
