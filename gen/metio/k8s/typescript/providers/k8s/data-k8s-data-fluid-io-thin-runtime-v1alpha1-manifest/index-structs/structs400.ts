import * as cdktf from 'cdktf';
import { DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExec,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExecToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExecToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExecOutputReference,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpc,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpcToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpcToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpcOutputReference,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGet,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGetToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGetToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGetOutputReference,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnv,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnvToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnvToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnvList,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsList,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuse,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuseToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuseToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuseOutputReference,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecrets,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecretsToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecretsToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecretsList,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagement,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagementToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagementToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagementOutputReference,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAs,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAsToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAsToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAsOutputReference,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstore,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstoreToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstoreToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstoreOutputReference,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumes,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumesToTerraform,
dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumesToHclTerraform,
DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumesList } from './structs0'
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#host DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#port DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocketToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocketToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#exec DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#failure_threshold DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#grpc DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#http_get DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#initial_delay_seconds DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#period_seconds DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#success_threshold DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#tcp_socket DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#termination_grace_period_seconds DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#timeout_seconds DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpc",
    },
    http_get: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGet",
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
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocket",
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeExec) {
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
  private _grpc = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeGrpc) {
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
  private _httpGet = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeTcpSocket) {
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
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPorts {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#container_port DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#host_ip DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#host_port DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#name DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to 'TCP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#protocol DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._hostIp = undefined;
      this._hostPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._hostIp = value.hostIp;
      this._hostPort = value.hostPort;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // host_ip - computed: false, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
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
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsOutputReference {
    return new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#command DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExecToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExecToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#port DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#service DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpcToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpcToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
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
}
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#name DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#value DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#host DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#http_headers DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#path DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#port DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#scheme DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGet | cdktf.IResolvable): any {
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
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
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
}
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#host DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#port DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocketToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#exec DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#failure_threshold DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#grpc DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#http_get DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#initial_delay_seconds DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#period_seconds DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#success_threshold DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#tcp_socket DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#termination_grace_period_seconds DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#timeout_seconds DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGet",
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
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocket",
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeExec) {
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
  private _grpc = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeGrpc) {
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
  private _httpGet = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeTcpSocket) {
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
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#name DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList",
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

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#mount_path DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#mount_propagation DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#name DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#sub_path DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#sub_path_expr DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference {
    return new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorker {
  /**
  * Enabled or Disabled for the components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#enabled DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment variables that will be used by thinRuntime component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#env DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnv[] | cdktf.IResolvable;
  /**
  * Image for thinRuntime fuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#image DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * One of the three policies: 'Always', 'IfNotPresent', 'Never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#image_pull_policy DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * ImagePullSecrets that will be used to pull images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#image_pull_secrets DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Image for thinRuntime fuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#image_tag DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#image_tag}
  */
  readonly imageTag?: string;
  /**
  * livenessProbe of thin fuse pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#liveness_probe DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbe;
  /**
  * Whether to use hostnetwork or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#network_mode DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#network_mode}
  */
  readonly networkMode?: string;
  /**
  * NodeSelector is a selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Ports used thinRuntime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#ports DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPorts[] | cdktf.IResolvable;
  /**
  * readinessProbe of thin fuse pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#readiness_probe DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbe;
  /**
  * Replicas is the desired number of replicas of the given template. If unspecified, defaults to 1. replicas is the min replicas of dataset in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources that will be requested by thinRuntime component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResources;
  /**
  * VolumeMounts specifies the volumes listed in '.spec.volumes' to mount into runtime component's filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#volume_mounts DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    env: cdktf.listMapper(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
    liveness_probe: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeToTerraform(struct!.livenessProbe),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    ports: cdktf.listMapper(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable): any {
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
    env: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsList",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_probe: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbe",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsList",
    },
    readiness_probe: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResources",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._imageTag = undefined;
      this._livenessProbe.internalValue = undefined;
      this._networkMode = undefined;
      this._nodeSelector = undefined;
      this._ports.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._imageTag = value.imageTag;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._networkMode = value.networkMode;
      this._nodeSelector = value.nodeSelector;
      this._ports.internalValue = value.ports;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
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

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
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

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpec {
  /**
  * Disable monitoring for Runtime Prometheus is enabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#disable_prometheus DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#disable_prometheus}
  */
  readonly disablePrometheus?: boolean | cdktf.IResolvable;
  /**
  * The component spec of thinRuntime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#fuse DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#fuse}
  */
  readonly fuse?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuse;
  /**
  * ImagePullSecrets that will be used to pull images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#image_pull_secrets DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * RuntimeManagement defines policies when managing the runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#management DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#management}
  */
  readonly management?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagement;
  /**
  * The specific runtime profile name, empty value is used for handling datasets which mount another dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#profile_name DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#profile_name}
  */
  readonly profileName?: string;
  /**
  * The replicas of the worker, need to be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Manage the user to run Runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#run_as DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#run_as}
  */
  readonly runAs?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAs;
  /**
  * Tiered storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#tieredstore DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#tieredstore}
  */
  readonly tieredstore?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstore;
  /**
  * Volumes is the list of Kubernetes volumes that can be mounted by runtime components and/or fuses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#volumes DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable;
  /**
  * The component spec of worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_thin_runtime_v1alpha1_manifest#worker DataK8SDataFluidIoThinRuntimeV1Alpha1Manifest#worker}
  */
  readonly worker?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorker;
}

export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_prometheus: cdktf.booleanToTerraform(struct!.disablePrometheus),
    fuse: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuseToTerraform(struct!.fuse),
    image_pull_secrets: cdktf.listMapper(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    management: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagementToTerraform(struct!.management),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    run_as: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAsToTerraform(struct!.runAs),
    tieredstore: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstoreToTerraform(struct!.tieredstore),
    volumes: cdktf.listMapper(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumesToTerraform, false)(struct!.volumes),
    worker: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerToTerraform(struct!.worker),
  }
}


export function dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.disablePrometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fuse: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuseToHclTerraform(struct!.fuse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuse",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecretsList",
    },
    management: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagement",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAsToHclTerraform(struct!.runAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAs",
    },
    tieredstore: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstoreToHclTerraform(struct!.tieredstore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstore",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumesList",
    },
    worker: {
      value: dataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerToHclTerraform(struct!.worker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePrometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrometheus = this._disablePrometheus;
    }
    if (this._fuse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuse = this._fuse?.internalValue;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._runAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAs = this._runAs?.internalValue;
    }
    if (this._tieredstore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieredstore = this._tieredstore?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._worker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablePrometheus = undefined;
      this._fuse.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._management.internalValue = undefined;
      this._profileName = undefined;
      this._replicas = undefined;
      this._runAs.internalValue = undefined;
      this._tieredstore.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._worker.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablePrometheus = value.disablePrometheus;
      this._fuse.internalValue = value.fuse;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._management.internalValue = value.management;
      this._profileName = value.profileName;
      this._replicas = value.replicas;
      this._runAs.internalValue = value.runAs;
      this._tieredstore.internalValue = value.tieredstore;
      this._volumes.internalValue = value.volumes;
      this._worker.internalValue = value.worker;
    }
  }

  // disable_prometheus - computed: false, optional: true, required: false
  private _disablePrometheus?: boolean | cdktf.IResolvable; 
  public get disablePrometheus() {
    return this.getBooleanAttribute('disable_prometheus');
  }
  public set disablePrometheus(value: boolean | cdktf.IResolvable) {
    this._disablePrometheus = value;
  }
  public resetDisablePrometheus() {
    this._disablePrometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrometheusInput() {
    return this._disablePrometheus;
  }

  // fuse - computed: false, optional: true, required: false
  private _fuse = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuseOutputReference(this, "fuse");
  public get fuse() {
    return this._fuse;
  }
  public putFuse(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecFuse) {
    this._fuse.internalValue = value;
  }
  public resetFuse() {
    this._fuse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuseInput() {
    return this._fuse.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // run_as - computed: false, optional: true, required: false
  private _runAs = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecRunAs) {
    this._runAs.internalValue = value;
  }
  public resetRunAs() {
    this._runAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs.internalValue;
  }

  // tieredstore - computed: false, optional: true, required: false
  private _tieredstore = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstoreOutputReference(this, "tieredstore");
  public get tieredstore() {
    return this._tieredstore;
  }
  public putTieredstore(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecTieredstore) {
    this._tieredstore.internalValue = value;
  }
  public resetTieredstore() {
    this._tieredstore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredstoreInput() {
    return this._tieredstore.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // worker - computed: false, optional: true, required: false
  private _worker = new DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: DataK8SDataFluidIoThinRuntimeV1Alpha1ManifestSpecWorker) {
    this._worker.internalValue = value;
  }
  public resetWorker() {
    this._worker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker.internalValue;
  }
}
