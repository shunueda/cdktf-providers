import * as cdktf from 'cdktf';
import { DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExec,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExecToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExecToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExecOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpc,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpcToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpcToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpcOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGet,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGetToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGetToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGetOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinity,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinityToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinityToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinityOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorage,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolume,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolumeToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolumeToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolumeOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImage,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImageToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImageToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImageOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbe,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbeToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbeToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbeOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetrics,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetricsToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetricsToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetricsOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResources,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResourcesToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResourcesToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResourcesOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReload,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReloadToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReloadToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReloadOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfig,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfigToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfigToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfigOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVars,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVarsToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVarsToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVarsList,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMounts,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMountsToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMountsToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMountsList,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAws,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAwsToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAwsToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAwsOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetes,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetesToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetesToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetesOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModify,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModifyToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModifyToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModifyList,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptions,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptionsToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptionsToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptionsOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheck,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheckToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheckToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheckOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImage,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImageToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImageToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImageOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTail,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTailToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTailToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTailOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbe,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbeToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbeToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbeOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetrics,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetricsToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetricsToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetricsOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetwork,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetworkToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetworkToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetworkOutputReference,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondb,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondbToTerraform,
dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondbToHclTerraform,
DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondbOutputReference } from './structs0'
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#host DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#port DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocketToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocket | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._host = value.host;
      this._port = value.port;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#exec DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#exec}
  */
  readonly exec?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#failure_threshold DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#grpc DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#http_get DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#initial_delay_seconds DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#period_seconds DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#success_threshold DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#tcp_socket DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#termination_grace_period_seconds DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#timeout_seconds DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#request DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#claims DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#limits DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#requests DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsList",
    },
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
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
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#localhost_profile DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfileToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#level DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#role DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#user DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#localhost_profile DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfileToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#gmsa_credential_spec DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#gmsa_credential_spec_name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#host_process DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#run_as_user_name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#app_armor_profile DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#fs_group DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#fs_group_change_policy DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#run_as_group DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#run_as_non_root DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#run_as_user DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#se_linux_options DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#seccomp_profile DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#supplemental_groups DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#supplemental_groups_policy DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#supplemental_groups_policy}
  */
  readonly supplementalGroupsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#sysctls DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#sysctls}
  */
  readonly sysctls?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#windows_options DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptions;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_armor_profile: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    supplemental_groups_policy: cdktf.stringToTerraform(struct!.supplementalGroupsPolicy),
    sysctls: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_armor_profile: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfile",
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
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfile",
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
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContext | cdktf.IResolvable | undefined) {
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
  private _appArmorProfile = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextAppArmorProfile) {
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
  private _seLinuxOptions = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSeccompProfile) {
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
  private _sysctls = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextSysctls[] | cdktf.IResolvable) {
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
  private _windowsOptions = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextWindowsOptions) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#localhost_profile DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfileToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfile | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#add DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#drop DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilitiesToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilitiesToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilities | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilities | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#level DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#role DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#user DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#localhost_profile DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfileToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfileToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#gmsa_credential_spec DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#gmsa_credential_spec_name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#host_process DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#run_as_user_name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptionsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#allow_privilege_escalation DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#app_armor_profile DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#capabilities DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#privileged DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#proc_mount DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#read_only_root_filesystem DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#run_as_group DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#run_as_non_root DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#run_as_user DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#se_linux_options DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#seccomp_profile DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#windows_options DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptions;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    app_armor_profile: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    capabilities: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContext | cdktf.IResolvable): any {
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
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfile",
    },
    capabilities: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilities",
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
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContext | cdktf.IResolvable | undefined) {
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
  private _appArmorProfile = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextAppArmorProfile) {
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
  private _capabilities = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextCapabilities) {
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
  private _seLinuxOptions = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextSeccompProfile) {
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
  private _windowsOptions = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextWindowsOptions) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#pod_security_context DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#pod_security_policy_create DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#pod_security_policy_create}
  */
  readonly podSecurityPolicyCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#role_based_access_control_create DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#role_based_access_control_create}
  */
  readonly roleBasedAccessControlCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#security_context DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#security_context}
  */
  readonly securityContext?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#service_account DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_security_context: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextToTerraform(struct!.podSecurityContext),
    pod_security_policy_create: cdktf.booleanToTerraform(struct!.podSecurityPolicyCreate),
    role_based_access_control_create: cdktf.booleanToTerraform(struct!.roleBasedAccessControlCreate),
    security_context: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextToTerraform(struct!.securityContext),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_security_context: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContext",
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
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContext",
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurity | cdktf.IResolvable | undefined) {
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
  private _podSecurityContext = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityPodSecurityContext) {
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
  private _securityContext = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecuritySecurityContext) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#annotations DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadataToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadataToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadata | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#api_version DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#field_path DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#kind DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#namespace DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#resource_version DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#uid DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecrets | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecrets | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#automount_service_account_token DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#image_pull_secrets DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#metadata DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#secrets DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#secrets}
  */
  readonly secrets?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    image_pull_secrets: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    metadata: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadataToTerraform(struct!.metadata),
    secrets: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsList",
    },
    metadata: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadata",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable | undefined) {
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
  private _imagePullSecrets = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountImagePullSecrets[] | cdktf.IResolvable) {
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
  private _metadata = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountMetadata) {
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
  private _secrets = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountSecrets[] | cdktf.IResolvable) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#json_date_format DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#json_date_format}
  */
  readonly jsonDateFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#json_date_key DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#json_date_key}
  */
  readonly jsonDateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#retry__limit DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#retry__limit}
  */
  readonly retryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#workers DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#workers}
  */
  readonly workers?: number;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutputToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_date_format: cdktf.stringToTerraform(struct!.jsonDateFormat),
    json_date_key: cdktf.stringToTerraform(struct!.jsonDateKey),
    retry__limit: cdktf.stringToTerraform(struct!.retryLimit),
    workers: cdktf.numberToTerraform(struct!.workers),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutputToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_date_format: {
      value: cdktf.stringToHclTerraform(struct!.jsonDateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_date_key: {
      value: cdktf.stringToHclTerraform(struct!.jsonDateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry__limit: {
      value: cdktf.stringToHclTerraform(struct!.retryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workers: {
      value: cdktf.numberToHclTerraform(struct!.workers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonDateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonDateFormat = this._jsonDateFormat;
    }
    if (this._jsonDateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonDateKey = this._jsonDateKey;
    }
    if (this._retryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryLimit = this._retryLimit;
    }
    if (this._workers !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonDateFormat = undefined;
      this._jsonDateKey = undefined;
      this._retryLimit = undefined;
      this._workers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonDateFormat = value.jsonDateFormat;
      this._jsonDateKey = value.jsonDateKey;
      this._retryLimit = value.retryLimit;
      this._workers = value.workers;
    }
  }

  // json_date_format - computed: false, optional: true, required: false
  private _jsonDateFormat?: string; 
  public get jsonDateFormat() {
    return this.getStringAttribute('json_date_format');
  }
  public set jsonDateFormat(value: string) {
    this._jsonDateFormat = value;
  }
  public resetJsonDateFormat() {
    this._jsonDateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonDateFormatInput() {
    return this._jsonDateFormat;
  }

  // json_date_key - computed: false, optional: true, required: false
  private _jsonDateKey?: string; 
  public get jsonDateKey() {
    return this.getStringAttribute('json_date_key');
  }
  public set jsonDateKey(value: string) {
    this._jsonDateKey = value;
  }
  public resetJsonDateKey() {
    this._jsonDateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonDateKeyInput() {
    return this._jsonDateKey;
  }

  // retry__limit - computed: false, optional: true, required: false
  private _retryLimit?: string; 
  public get retryLimit() {
    return this.getStringAttribute('retry__limit');
  }
  public set retryLimit(value: string) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
  }

  // workers - computed: false, optional: true, required: false
  private _workers?: number; 
  public get workers() {
    return this.getNumberAttribute('workers');
  }
  public set workers(value: number) {
    this._workers = value;
  }
  public resetWorkers() {
    this._workers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers;
  }
}
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#enabled DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#secret_name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#shared_key DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#shared_key}
  */
  readonly sharedKey?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTlsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTls | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTlsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTls | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTls | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#effect DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#operator DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#toleration_seconds DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsOutputReference {
    return new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#max_surge DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#max_unavailable DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdateToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdateToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#rolling_update DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdate",
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

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
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
export interface DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#affinity DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#affinity}
  */
  readonly affinity?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#annotations DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#buffer_storage DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#buffer_storage}
  */
  readonly bufferStorage?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#buffer_storage_volume DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#buffer_storage_volume}
  */
  readonly bufferStorageVolume?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolume;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#buffer_volume_args DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#buffer_volume_args}
  */
  readonly bufferVolumeArgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#buffer_volume_image DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#buffer_volume_image}
  */
  readonly bufferVolumeImage?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#buffer_volume_liveness_probe DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#buffer_volume_liveness_probe}
  */
  readonly bufferVolumeLivenessProbe?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#buffer_volume_metrics DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#buffer_volume_metrics}
  */
  readonly bufferVolumeMetrics?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#buffer_volume_resources DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#buffer_volume_resources}
  */
  readonly bufferVolumeResources?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#config_hot_reload DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#config_hot_reload}
  */
  readonly configHotReload?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReload;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#coro_stack_size DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#coro_stack_size}
  */
  readonly coroStackSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#custom_config_secret DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#custom_config_secret}
  */
  readonly customConfigSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#custom_parsers DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#custom_parsers}
  */
  readonly customParsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#daemonset_annotations DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#daemonset_annotations}
  */
  readonly daemonsetAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#disable_kubernetes_filter DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#disable_kubernetes_filter}
  */
  readonly disableKubernetesFilter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#dns_config DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#dns_policy DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#enable_upstream DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#enable_upstream}
  */
  readonly enableUpstream?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#env_vars DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#env_vars}
  */
  readonly envVars?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVars[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#extra_volume_mounts DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#extra_volume_mounts}
  */
  readonly extraVolumeMounts?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#filter_aws DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#filter_aws}
  */
  readonly filterAws?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#filter_kubernetes DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#filter_kubernetes}
  */
  readonly filterKubernetes?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#filter_modify DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#filter_modify}
  */
  readonly filterModify?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModify[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#flush DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#flush}
  */
  readonly flush?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#forward_options DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#forward_options}
  */
  readonly forwardOptions?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#grace DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#grace}
  */
  readonly grace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#health_check DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#host_network DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#image DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#image}
  */
  readonly image?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#input_tail DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#input_tail}
  */
  readonly inputTail?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#liveness_default_check DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#liveness_default_check}
  */
  readonly livenessDefaultCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#liveness_probe DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#log_level DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#logging_ref DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#logging_ref}
  */
  readonly loggingRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#metrics DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#mount_path DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#network DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#network}
  */
  readonly network?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#node_selector DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#parser DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#parser}
  */
  readonly parser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#pod_priority_class_name DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#pod_priority_class_name}
  */
  readonly podPriorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#positiondb DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#positiondb}
  */
  readonly positiondb?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#readiness_probe DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#resources DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#security DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#security}
  */
  readonly security?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#service_account DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#syslogng_output DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#syslogng_output}
  */
  readonly syslogngOutput?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#target_host DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#target_host}
  */
  readonly targetHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#target_port DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#target_port}
  */
  readonly targetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#tls DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#tolerations DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_fluentbit_agent_v1beta1_manifest#update_strategy DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1Manifest#update_strategy}
  */
  readonly updateStrategy?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategy;
}

export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecToTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinityToTerraform(struct!.affinity),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    buffer_storage: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageToTerraform(struct!.bufferStorage),
    buffer_storage_volume: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolumeToTerraform(struct!.bufferStorageVolume),
    buffer_volume_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bufferVolumeArgs),
    buffer_volume_image: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImageToTerraform(struct!.bufferVolumeImage),
    buffer_volume_liveness_probe: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbeToTerraform(struct!.bufferVolumeLivenessProbe),
    buffer_volume_metrics: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetricsToTerraform(struct!.bufferVolumeMetrics),
    buffer_volume_resources: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResourcesToTerraform(struct!.bufferVolumeResources),
    config_hot_reload: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReloadToTerraform(struct!.configHotReload),
    coro_stack_size: cdktf.numberToTerraform(struct!.coroStackSize),
    custom_config_secret: cdktf.stringToTerraform(struct!.customConfigSecret),
    custom_parsers: cdktf.stringToTerraform(struct!.customParsers),
    daemonset_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.daemonsetAnnotations),
    disable_kubernetes_filter: cdktf.booleanToTerraform(struct!.disableKubernetesFilter),
    dns_config: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_upstream: cdktf.booleanToTerraform(struct!.enableUpstream),
    env_vars: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVarsToTerraform, false)(struct!.envVars),
    extra_volume_mounts: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMountsToTerraform, false)(struct!.extraVolumeMounts),
    filter_aws: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAwsToTerraform(struct!.filterAws),
    filter_kubernetes: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetesToTerraform(struct!.filterKubernetes),
    filter_modify: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModifyToTerraform, false)(struct!.filterModify),
    flush: cdktf.numberToTerraform(struct!.flush),
    forward_options: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptionsToTerraform(struct!.forwardOptions),
    grace: cdktf.numberToTerraform(struct!.grace),
    health_check: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheckToTerraform(struct!.healthCheck),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    image: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImageToTerraform(struct!.image),
    input_tail: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTailToTerraform(struct!.inputTail),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    liveness_default_check: cdktf.booleanToTerraform(struct!.livenessDefaultCheck),
    liveness_probe: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbeToTerraform(struct!.livenessProbe),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    logging_ref: cdktf.stringToTerraform(struct!.loggingRef),
    metrics: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetricsToTerraform(struct!.metrics),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    network: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetworkToTerraform(struct!.network),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    parser: cdktf.stringToTerraform(struct!.parser),
    pod_priority_class_name: cdktf.stringToTerraform(struct!.podPriorityClassName),
    positiondb: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondbToTerraform(struct!.positiondb),
    readiness_probe: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeToTerraform(struct!.readinessProbe),
    resources: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesToTerraform(struct!.resources),
    security: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityToTerraform(struct!.security),
    service_account: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountToTerraform(struct!.serviceAccount),
    syslogng_output: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutputToTerraform(struct!.syslogngOutput),
    target_host: cdktf.stringToTerraform(struct!.targetHost),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    tls: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTlsToTerraform(struct!.tls),
    tolerations: cdktf.listMapper(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    update_strategy: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyToTerraform(struct!.updateStrategy),
  }
}


export function dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinity",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    buffer_storage: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageToHclTerraform(struct!.bufferStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorage",
    },
    buffer_storage_volume: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolumeToHclTerraform(struct!.bufferStorageVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolume",
    },
    buffer_volume_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bufferVolumeArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    buffer_volume_image: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImageToHclTerraform(struct!.bufferVolumeImage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImage",
    },
    buffer_volume_liveness_probe: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbeToHclTerraform(struct!.bufferVolumeLivenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbe",
    },
    buffer_volume_metrics: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetricsToHclTerraform(struct!.bufferVolumeMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetrics",
    },
    buffer_volume_resources: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResourcesToHclTerraform(struct!.bufferVolumeResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResources",
    },
    config_hot_reload: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReloadToHclTerraform(struct!.configHotReload),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReload",
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
    custom_parsers: {
      value: cdktf.stringToHclTerraform(struct!.customParsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daemonset_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.daemonsetAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_kubernetes_filter: {
      value: cdktf.booleanToHclTerraform(struct!.disableKubernetesFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_config: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_upstream: {
      value: cdktf.booleanToHclTerraform(struct!.enableUpstream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env_vars: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVarsList",
    },
    extra_volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMountsToHclTerraform, false)(struct!.extraVolumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMountsList",
    },
    filter_aws: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAwsToHclTerraform(struct!.filterAws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAws",
    },
    filter_kubernetes: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetesToHclTerraform(struct!.filterKubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetes",
    },
    filter_modify: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModifyToHclTerraform, false)(struct!.filterModify),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModifyList",
    },
    flush: {
      value: cdktf.numberToHclTerraform(struct!.flush),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_options: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptionsToHclTerraform(struct!.forwardOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptions",
    },
    grace: {
      value: cdktf.numberToHclTerraform(struct!.grace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheck",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImage",
    },
    input_tail: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTailToHclTerraform(struct!.inputTail),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTail",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    liveness_default_check: {
      value: cdktf.booleanToHclTerraform(struct!.livenessDefaultCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    liveness_probe: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbe",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_ref: {
      value: cdktf.stringToHclTerraform(struct!.loggingRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetrics",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetwork",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parser: {
      value: cdktf.stringToHclTerraform(struct!.parser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.podPriorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    positiondb: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondbToHclTerraform(struct!.positiondb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondb",
    },
    readiness_probe: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbe",
    },
    resources: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResources",
    },
    security: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurity",
    },
    service_account: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccount",
    },
    syslogng_output: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutputToHclTerraform(struct!.syslogngOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutput",
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
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTls",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsList",
    },
    update_strategy: {
      value: dataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._bufferStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferStorage = this._bufferStorage?.internalValue;
    }
    if (this._bufferStorageVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferStorageVolume = this._bufferStorageVolume?.internalValue;
    }
    if (this._bufferVolumeArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferVolumeArgs = this._bufferVolumeArgs;
    }
    if (this._bufferVolumeImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferVolumeImage = this._bufferVolumeImage?.internalValue;
    }
    if (this._bufferVolumeLivenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferVolumeLivenessProbe = this._bufferVolumeLivenessProbe?.internalValue;
    }
    if (this._bufferVolumeMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferVolumeMetrics = this._bufferVolumeMetrics?.internalValue;
    }
    if (this._bufferVolumeResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferVolumeResources = this._bufferVolumeResources?.internalValue;
    }
    if (this._configHotReload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configHotReload = this._configHotReload?.internalValue;
    }
    if (this._coroStackSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.coroStackSize = this._coroStackSize;
    }
    if (this._customConfigSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfigSecret = this._customConfigSecret;
    }
    if (this._customParsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParsers = this._customParsers;
    }
    if (this._daemonsetAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonsetAnnotations = this._daemonsetAnnotations;
    }
    if (this._disableKubernetesFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableKubernetesFilter = this._disableKubernetesFilter;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._enableUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUpstream = this._enableUpstream;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
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
    if (this._filterModify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterModify = this._filterModify?.internalValue;
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
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._inputTail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTail = this._inputTail?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._livenessDefaultCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessDefaultCheck = this._livenessDefaultCheck;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._loggingRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingRef = this._loggingRef;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._parser !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser;
    }
    if (this._podPriorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPriorityClassName = this._podPriorityClassName;
    }
    if (this._positiondb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.positiondb = this._positiondb?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._syslogngOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogngOutput = this._syslogngOutput?.internalValue;
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
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._annotations = undefined;
      this._bufferStorage.internalValue = undefined;
      this._bufferStorageVolume.internalValue = undefined;
      this._bufferVolumeArgs = undefined;
      this._bufferVolumeImage.internalValue = undefined;
      this._bufferVolumeLivenessProbe.internalValue = undefined;
      this._bufferVolumeMetrics.internalValue = undefined;
      this._bufferVolumeResources.internalValue = undefined;
      this._configHotReload.internalValue = undefined;
      this._coroStackSize = undefined;
      this._customConfigSecret = undefined;
      this._customParsers = undefined;
      this._daemonsetAnnotations = undefined;
      this._disableKubernetesFilter = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._enableUpstream = undefined;
      this._envVars.internalValue = undefined;
      this._extraVolumeMounts.internalValue = undefined;
      this._filterAws.internalValue = undefined;
      this._filterKubernetes.internalValue = undefined;
      this._filterModify.internalValue = undefined;
      this._flush = undefined;
      this._forwardOptions.internalValue = undefined;
      this._grace = undefined;
      this._healthCheck.internalValue = undefined;
      this._hostNetwork = undefined;
      this._image.internalValue = undefined;
      this._inputTail.internalValue = undefined;
      this._labels = undefined;
      this._livenessDefaultCheck = undefined;
      this._livenessProbe.internalValue = undefined;
      this._logLevel = undefined;
      this._loggingRef = undefined;
      this._metrics.internalValue = undefined;
      this._mountPath = undefined;
      this._network.internalValue = undefined;
      this._nodeSelector = undefined;
      this._parser = undefined;
      this._podPriorityClassName = undefined;
      this._positiondb.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._security.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._syslogngOutput.internalValue = undefined;
      this._targetHost = undefined;
      this._targetPort = undefined;
      this._tls.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._updateStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._annotations = value.annotations;
      this._bufferStorage.internalValue = value.bufferStorage;
      this._bufferStorageVolume.internalValue = value.bufferStorageVolume;
      this._bufferVolumeArgs = value.bufferVolumeArgs;
      this._bufferVolumeImage.internalValue = value.bufferVolumeImage;
      this._bufferVolumeLivenessProbe.internalValue = value.bufferVolumeLivenessProbe;
      this._bufferVolumeMetrics.internalValue = value.bufferVolumeMetrics;
      this._bufferVolumeResources.internalValue = value.bufferVolumeResources;
      this._configHotReload.internalValue = value.configHotReload;
      this._coroStackSize = value.coroStackSize;
      this._customConfigSecret = value.customConfigSecret;
      this._customParsers = value.customParsers;
      this._daemonsetAnnotations = value.daemonsetAnnotations;
      this._disableKubernetesFilter = value.disableKubernetesFilter;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._enableUpstream = value.enableUpstream;
      this._envVars.internalValue = value.envVars;
      this._extraVolumeMounts.internalValue = value.extraVolumeMounts;
      this._filterAws.internalValue = value.filterAws;
      this._filterKubernetes.internalValue = value.filterKubernetes;
      this._filterModify.internalValue = value.filterModify;
      this._flush = value.flush;
      this._forwardOptions.internalValue = value.forwardOptions;
      this._grace = value.grace;
      this._healthCheck.internalValue = value.healthCheck;
      this._hostNetwork = value.hostNetwork;
      this._image.internalValue = value.image;
      this._inputTail.internalValue = value.inputTail;
      this._labels = value.labels;
      this._livenessDefaultCheck = value.livenessDefaultCheck;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._logLevel = value.logLevel;
      this._loggingRef = value.loggingRef;
      this._metrics.internalValue = value.metrics;
      this._mountPath = value.mountPath;
      this._network.internalValue = value.network;
      this._nodeSelector = value.nodeSelector;
      this._parser = value.parser;
      this._podPriorityClassName = value.podPriorityClassName;
      this._positiondb.internalValue = value.positiondb;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._resources.internalValue = value.resources;
      this._security.internalValue = value.security;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._syslogngOutput.internalValue = value.syslogngOutput;
      this._targetHost = value.targetHost;
      this._targetPort = value.targetPort;
      this._tls.internalValue = value.tls;
      this._tolerations.internalValue = value.tolerations;
      this._updateStrategy.internalValue = value.updateStrategy;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
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

  // buffer_storage - computed: false, optional: true, required: false
  private _bufferStorage = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageOutputReference(this, "buffer_storage");
  public get bufferStorage() {
    return this._bufferStorage;
  }
  public putBufferStorage(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorage) {
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
  private _bufferStorageVolume = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolumeOutputReference(this, "buffer_storage_volume");
  public get bufferStorageVolume() {
    return this._bufferStorageVolume;
  }
  public putBufferStorageVolume(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferStorageVolume) {
    this._bufferStorageVolume.internalValue = value;
  }
  public resetBufferStorageVolume() {
    this._bufferStorageVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferStorageVolumeInput() {
    return this._bufferStorageVolume.internalValue;
  }

  // buffer_volume_args - computed: false, optional: true, required: false
  private _bufferVolumeArgs?: string[]; 
  public get bufferVolumeArgs() {
    return this.getListAttribute('buffer_volume_args');
  }
  public set bufferVolumeArgs(value: string[]) {
    this._bufferVolumeArgs = value;
  }
  public resetBufferVolumeArgs() {
    this._bufferVolumeArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferVolumeArgsInput() {
    return this._bufferVolumeArgs;
  }

  // buffer_volume_image - computed: false, optional: true, required: false
  private _bufferVolumeImage = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImageOutputReference(this, "buffer_volume_image");
  public get bufferVolumeImage() {
    return this._bufferVolumeImage;
  }
  public putBufferVolumeImage(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeImage) {
    this._bufferVolumeImage.internalValue = value;
  }
  public resetBufferVolumeImage() {
    this._bufferVolumeImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferVolumeImageInput() {
    return this._bufferVolumeImage.internalValue;
  }

  // buffer_volume_liveness_probe - computed: false, optional: true, required: false
  private _bufferVolumeLivenessProbe = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbeOutputReference(this, "buffer_volume_liveness_probe");
  public get bufferVolumeLivenessProbe() {
    return this._bufferVolumeLivenessProbe;
  }
  public putBufferVolumeLivenessProbe(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeLivenessProbe) {
    this._bufferVolumeLivenessProbe.internalValue = value;
  }
  public resetBufferVolumeLivenessProbe() {
    this._bufferVolumeLivenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferVolumeLivenessProbeInput() {
    return this._bufferVolumeLivenessProbe.internalValue;
  }

  // buffer_volume_metrics - computed: false, optional: true, required: false
  private _bufferVolumeMetrics = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetricsOutputReference(this, "buffer_volume_metrics");
  public get bufferVolumeMetrics() {
    return this._bufferVolumeMetrics;
  }
  public putBufferVolumeMetrics(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeMetrics) {
    this._bufferVolumeMetrics.internalValue = value;
  }
  public resetBufferVolumeMetrics() {
    this._bufferVolumeMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferVolumeMetricsInput() {
    return this._bufferVolumeMetrics.internalValue;
  }

  // buffer_volume_resources - computed: false, optional: true, required: false
  private _bufferVolumeResources = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResourcesOutputReference(this, "buffer_volume_resources");
  public get bufferVolumeResources() {
    return this._bufferVolumeResources;
  }
  public putBufferVolumeResources(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecBufferVolumeResources) {
    this._bufferVolumeResources.internalValue = value;
  }
  public resetBufferVolumeResources() {
    this._bufferVolumeResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferVolumeResourcesInput() {
    return this._bufferVolumeResources.internalValue;
  }

  // config_hot_reload - computed: false, optional: true, required: false
  private _configHotReload = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReloadOutputReference(this, "config_hot_reload");
  public get configHotReload() {
    return this._configHotReload;
  }
  public putConfigHotReload(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecConfigHotReload) {
    this._configHotReload.internalValue = value;
  }
  public resetConfigHotReload() {
    this._configHotReload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configHotReloadInput() {
    return this._configHotReload.internalValue;
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

  // custom_parsers - computed: false, optional: true, required: false
  private _customParsers?: string; 
  public get customParsers() {
    return this.getStringAttribute('custom_parsers');
  }
  public set customParsers(value: string) {
    this._customParsers = value;
  }
  public resetCustomParsers() {
    this._customParsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParsersInput() {
    return this._customParsers;
  }

  // daemonset_annotations - computed: false, optional: true, required: false
  private _daemonsetAnnotations?: { [key: string]: string }; 
  public get daemonsetAnnotations() {
    return this.getStringMapAttribute('daemonset_annotations');
  }
  public set daemonsetAnnotations(value: { [key: string]: string }) {
    this._daemonsetAnnotations = value;
  }
  public resetDaemonsetAnnotations() {
    this._daemonsetAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonsetAnnotationsInput() {
    return this._daemonsetAnnotations;
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

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
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

  // env_vars - computed: false, optional: true, required: false
  private _envVars = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecEnvVars[] | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // extra_volume_mounts - computed: false, optional: true, required: false
  private _extraVolumeMounts = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMountsList(this, "extra_volume_mounts", false);
  public get extraVolumeMounts() {
    return this._extraVolumeMounts;
  }
  public putExtraVolumeMounts(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecExtraVolumeMounts[] | cdktf.IResolvable) {
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
  private _filterAws = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAwsOutputReference(this, "filter_aws");
  public get filterAws() {
    return this._filterAws;
  }
  public putFilterAws(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterAws) {
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
  private _filterKubernetes = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetesOutputReference(this, "filter_kubernetes");
  public get filterKubernetes() {
    return this._filterKubernetes;
  }
  public putFilterKubernetes(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterKubernetes) {
    this._filterKubernetes.internalValue = value;
  }
  public resetFilterKubernetes() {
    this._filterKubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKubernetesInput() {
    return this._filterKubernetes.internalValue;
  }

  // filter_modify - computed: false, optional: true, required: false
  private _filterModify = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModifyList(this, "filter_modify", false);
  public get filterModify() {
    return this._filterModify;
  }
  public putFilterModify(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecFilterModify[] | cdktf.IResolvable) {
    this._filterModify.internalValue = value;
  }
  public resetFilterModify() {
    this._filterModify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterModifyInput() {
    return this._filterModify.internalValue;
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
  private _forwardOptions = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptionsOutputReference(this, "forward_options");
  public get forwardOptions() {
    return this._forwardOptions;
  }
  public putForwardOptions(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecForwardOptions) {
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

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // input_tail - computed: false, optional: true, required: false
  private _inputTail = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTailOutputReference(this, "input_tail");
  public get inputTail() {
    return this._inputTail;
  }
  public putInputTail(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecInputTail) {
    this._inputTail.internalValue = value;
  }
  public resetInputTail() {
    this._inputTail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTailInput() {
    return this._inputTail.internalValue;
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

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // parser - computed: false, optional: true, required: false
  private _parser?: string; 
  public get parser() {
    return this.getStringAttribute('parser');
  }
  public set parser(value: string) {
    this._parser = value;
  }
  public resetParser() {
    this._parser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
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
  private _positiondb = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondbOutputReference(this, "positiondb");
  public get positiondb() {
    return this._positiondb;
  }
  public putPositiondb(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecPositiondb) {
    this._positiondb.internalValue = value;
  }
  public resetPositiondb() {
    this._positiondb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiondbInput() {
    return this._positiondb.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSecurity) {
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
  private _serviceAccount = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // syslogng_output - computed: false, optional: true, required: false
  private _syslogngOutput = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutputOutputReference(this, "syslogng_output");
  public get syslogngOutput() {
    return this._syslogngOutput;
  }
  public putSyslogngOutput(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecSyslogngOutput) {
    this._syslogngOutput.internalValue = value;
  }
  public resetSyslogngOutput() {
    this._syslogngOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogngOutputInput() {
    return this._syslogngOutput.internalValue;
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
  private _tls = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: DataK8SLoggingBanzaicloudIoFluentbitAgentV1Beta1ManifestSpecUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }
}
