// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#metadata DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#metadata}
  */
  readonly metadata: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#spec DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#spec}
  */
  readonly spec?: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpec;
}
export interface DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#annotations DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#labels DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#name DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadataToTerraform(struct?: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadataToHclTerraform(struct?: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelector {
  /**
  * Labels to match any pod before deploying LeakSignal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#labels DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelectorToTerraform(struct?: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelectorToHclTerraform(struct?: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
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
export interface DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpec {
  /**
  * API Key from the LeakSignal Command dashboard. Alternatively, the deployment name from LeakAgent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#api_key DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#api_key}
  */
  readonly apiKey: string;
  /**
  * Location of CA bundle in istio-proxy. Default is '/etc/ssl/certs/ca-certificates.crt' which is suitable for Istio. OpenShift Service Mesh requires '/etc/ssl/certs/ca-bundle.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#ca_bundle DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * If true (default), then certificates are installed in pods for outbound TLS interception.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#enable_client_interception DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#enable_client_interception}
  */
  readonly enableClientInterception?: boolean | cdktf.IResolvable;
  /**
  * If 'true' (default), then L4 streams are also scanned by LeakSignal Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#enable_streaming DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#enable_streaming}
  */
  readonly enableStreaming?: boolean | cdktf.IResolvable;
  /**
  * If 'true' (default), if LeakSignal Proxy has a failure, then all traffic is routed around it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#fail_open DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Whether to use Google GRPC or Envoy GRPC for WASM deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#grpc_mode DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#grpc_mode}
  */
  readonly grpcMode?: string;
  /**
  * If 'true' (not default), istio-proxy containers are updated to a corresponding image with support for dynamic plugins, and the native LeakSignal Proxy module is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#native DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#native}
  */
  readonly native?: boolean | cdktf.IResolvable;
  /**
  * Alternative memory limit for Istio sidecars running native modules. Useful to mitigate a surge of memory usage when loading the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#native_proxy_memory_limit DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#native_proxy_memory_limit}
  */
  readonly nativeProxyMemoryLimit?: string;
  /**
  * Default is 'leaksignal/istio-proxy'. If no tag is specified, it is inferred from the existing proxy image on each given pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#native_repo DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#native_repo}
  */
  readonly nativeRepo?: string;
  /**
  * Hash of the downloaded bundle for LeakSignal Proxy. Will depend on your version and deployment mechanism (nginx, envoy, WASM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#proxy_hash DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#proxy_hash}
  */
  readonly proxyHash: string;
  /**
  * Prefix of binary to pull. Defaults to 's3/leakproxy'. For LeakAgent deployments, use 'proxy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#proxy_prefix DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#proxy_prefix}
  */
  readonly proxyPrefix?: string;
  /**
  * Format 'https?://domain(:port)?/'. Defaults to 'https://leakproxy.s3.us-west-2.amazonaws.com/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#proxy_pull_location DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#proxy_pull_location}
  */
  readonly proxyPullLocation?: string;
  /**
  * Version string for LeakSignal Proxy deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#proxy_version DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#proxy_version}
  */
  readonly proxyVersion: string;
  /**
  * Detects pods that should have leaksignal deployed, but dont, and restarts them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#refresh_pods_on_stale DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#refresh_pods_on_stale}
  */
  readonly refreshPodsOnStale?: boolean | cdktf.IResolvable;
  /**
  * For WASM mode, redeploys all pods with Istio sidecars affected by a LeakSignal Proxy upgrade. This provides more consistent behavior. Default is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#refresh_pods_on_update DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#refresh_pods_on_update}
  */
  readonly refreshPodsOnUpdate?: boolean | cdktf.IResolvable;
  /**
  * If 'true' (default), TLS/HTTPS is used for telemetry upload and downloading LeakSignal Proxy. LeakAgent is usually 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#tls DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Hostname of upstream location to send metrics to. Default is 'ingestion.app.leaksignal.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#upstream_location DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#upstream_location}
  */
  readonly upstreamLocation?: string;
  /**
  * Port of upstream ingestion. Defaults to 80/443 depending on 'tls'. Recommended 8121 for LeakAgent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#upstream_port DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#upstream_port}
  */
  readonly upstreamPort?: number;
  /**
  * Pod selector for workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#workload_selector DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest#workload_selector}
  */
  readonly workloadSelector?: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelector;
}

export function dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecToTerraform(struct?: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    enable_client_interception: cdktf.booleanToTerraform(struct!.enableClientInterception),
    enable_streaming: cdktf.booleanToTerraform(struct!.enableStreaming),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    grpc_mode: cdktf.stringToTerraform(struct!.grpcMode),
    native: cdktf.booleanToTerraform(struct!.native),
    native_proxy_memory_limit: cdktf.stringToTerraform(struct!.nativeProxyMemoryLimit),
    native_repo: cdktf.stringToTerraform(struct!.nativeRepo),
    proxy_hash: cdktf.stringToTerraform(struct!.proxyHash),
    proxy_prefix: cdktf.stringToTerraform(struct!.proxyPrefix),
    proxy_pull_location: cdktf.stringToTerraform(struct!.proxyPullLocation),
    proxy_version: cdktf.stringToTerraform(struct!.proxyVersion),
    refresh_pods_on_stale: cdktf.booleanToTerraform(struct!.refreshPodsOnStale),
    refresh_pods_on_update: cdktf.booleanToTerraform(struct!.refreshPodsOnUpdate),
    tls: cdktf.booleanToTerraform(struct!.tls),
    upstream_location: cdktf.stringToTerraform(struct!.upstreamLocation),
    upstream_port: cdktf.numberToTerraform(struct!.upstreamPort),
    workload_selector: dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelectorToTerraform(struct!.workloadSelector),
  }
}


export function dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecToHclTerraform(struct?: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_client_interception: {
      value: cdktf.booleanToHclTerraform(struct!.enableClientInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_streaming: {
      value: cdktf.booleanToHclTerraform(struct!.enableStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grpc_mode: {
      value: cdktf.stringToHclTerraform(struct!.grpcMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native: {
      value: cdktf.booleanToHclTerraform(struct!.native),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    native_proxy_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.nativeProxyMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_repo: {
      value: cdktf.stringToHclTerraform(struct!.nativeRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_hash: {
      value: cdktf.stringToHclTerraform(struct!.proxyHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_prefix: {
      value: cdktf.stringToHclTerraform(struct!.proxyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_pull_location: {
      value: cdktf.stringToHclTerraform(struct!.proxyPullLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_version: {
      value: cdktf.stringToHclTerraform(struct!.proxyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_pods_on_stale: {
      value: cdktf.booleanToHclTerraform(struct!.refreshPodsOnStale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_pods_on_update: {
      value: cdktf.booleanToHclTerraform(struct!.refreshPodsOnUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upstream_location: {
      value: cdktf.stringToHclTerraform(struct!.upstreamLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_port: {
      value: cdktf.numberToHclTerraform(struct!.upstreamPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    workload_selector: {
      value: dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelectorToHclTerraform(struct!.workloadSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._enableClientInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClientInterception = this._enableClientInterception;
    }
    if (this._enableStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStreaming = this._enableStreaming;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._grpcMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcMode = this._grpcMode;
    }
    if (this._native !== undefined) {
      hasAnyValues = true;
      internalValueResult.native = this._native;
    }
    if (this._nativeProxyMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeProxyMemoryLimit = this._nativeProxyMemoryLimit;
    }
    if (this._nativeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeRepo = this._nativeRepo;
    }
    if (this._proxyHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHash = this._proxyHash;
    }
    if (this._proxyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPrefix = this._proxyPrefix;
    }
    if (this._proxyPullLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPullLocation = this._proxyPullLocation;
    }
    if (this._proxyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyVersion = this._proxyVersion;
    }
    if (this._refreshPodsOnStale !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshPodsOnStale = this._refreshPodsOnStale;
    }
    if (this._refreshPodsOnUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshPodsOnUpdate = this._refreshPodsOnUpdate;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._upstreamLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamLocation = this._upstreamLocation;
    }
    if (this._upstreamPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamPort = this._upstreamPort;
    }
    if (this._workloadSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSelector = this._workloadSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._caBundle = undefined;
      this._enableClientInterception = undefined;
      this._enableStreaming = undefined;
      this._failOpen = undefined;
      this._grpcMode = undefined;
      this._native = undefined;
      this._nativeProxyMemoryLimit = undefined;
      this._nativeRepo = undefined;
      this._proxyHash = undefined;
      this._proxyPrefix = undefined;
      this._proxyPullLocation = undefined;
      this._proxyVersion = undefined;
      this._refreshPodsOnStale = undefined;
      this._refreshPodsOnUpdate = undefined;
      this._tls = undefined;
      this._upstreamLocation = undefined;
      this._upstreamPort = undefined;
      this._workloadSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._caBundle = value.caBundle;
      this._enableClientInterception = value.enableClientInterception;
      this._enableStreaming = value.enableStreaming;
      this._failOpen = value.failOpen;
      this._grpcMode = value.grpcMode;
      this._native = value.native;
      this._nativeProxyMemoryLimit = value.nativeProxyMemoryLimit;
      this._nativeRepo = value.nativeRepo;
      this._proxyHash = value.proxyHash;
      this._proxyPrefix = value.proxyPrefix;
      this._proxyPullLocation = value.proxyPullLocation;
      this._proxyVersion = value.proxyVersion;
      this._refreshPodsOnStale = value.refreshPodsOnStale;
      this._refreshPodsOnUpdate = value.refreshPodsOnUpdate;
      this._tls = value.tls;
      this._upstreamLocation = value.upstreamLocation;
      this._upstreamPort = value.upstreamPort;
      this._workloadSelector.internalValue = value.workloadSelector;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // enable_client_interception - computed: false, optional: true, required: false
  private _enableClientInterception?: boolean | cdktf.IResolvable; 
  public get enableClientInterception() {
    return this.getBooleanAttribute('enable_client_interception');
  }
  public set enableClientInterception(value: boolean | cdktf.IResolvable) {
    this._enableClientInterception = value;
  }
  public resetEnableClientInterception() {
    this._enableClientInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClientInterceptionInput() {
    return this._enableClientInterception;
  }

  // enable_streaming - computed: false, optional: true, required: false
  private _enableStreaming?: boolean | cdktf.IResolvable; 
  public get enableStreaming() {
    return this.getBooleanAttribute('enable_streaming');
  }
  public set enableStreaming(value: boolean | cdktf.IResolvable) {
    this._enableStreaming = value;
  }
  public resetEnableStreaming() {
    this._enableStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStreamingInput() {
    return this._enableStreaming;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // grpc_mode - computed: false, optional: true, required: false
  private _grpcMode?: string; 
  public get grpcMode() {
    return this.getStringAttribute('grpc_mode');
  }
  public set grpcMode(value: string) {
    this._grpcMode = value;
  }
  public resetGrpcMode() {
    this._grpcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcModeInput() {
    return this._grpcMode;
  }

  // native - computed: false, optional: true, required: false
  private _native?: boolean | cdktf.IResolvable; 
  public get native() {
    return this.getBooleanAttribute('native');
  }
  public set native(value: boolean | cdktf.IResolvable) {
    this._native = value;
  }
  public resetNative() {
    this._native = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeInput() {
    return this._native;
  }

  // native_proxy_memory_limit - computed: false, optional: true, required: false
  private _nativeProxyMemoryLimit?: string; 
  public get nativeProxyMemoryLimit() {
    return this.getStringAttribute('native_proxy_memory_limit');
  }
  public set nativeProxyMemoryLimit(value: string) {
    this._nativeProxyMemoryLimit = value;
  }
  public resetNativeProxyMemoryLimit() {
    this._nativeProxyMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeProxyMemoryLimitInput() {
    return this._nativeProxyMemoryLimit;
  }

  // native_repo - computed: false, optional: true, required: false
  private _nativeRepo?: string; 
  public get nativeRepo() {
    return this.getStringAttribute('native_repo');
  }
  public set nativeRepo(value: string) {
    this._nativeRepo = value;
  }
  public resetNativeRepo() {
    this._nativeRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeRepoInput() {
    return this._nativeRepo;
  }

  // proxy_hash - computed: false, optional: false, required: true
  private _proxyHash?: string; 
  public get proxyHash() {
    return this.getStringAttribute('proxy_hash');
  }
  public set proxyHash(value: string) {
    this._proxyHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHashInput() {
    return this._proxyHash;
  }

  // proxy_prefix - computed: false, optional: true, required: false
  private _proxyPrefix?: string; 
  public get proxyPrefix() {
    return this.getStringAttribute('proxy_prefix');
  }
  public set proxyPrefix(value: string) {
    this._proxyPrefix = value;
  }
  public resetProxyPrefix() {
    this._proxyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPrefixInput() {
    return this._proxyPrefix;
  }

  // proxy_pull_location - computed: false, optional: true, required: false
  private _proxyPullLocation?: string; 
  public get proxyPullLocation() {
    return this.getStringAttribute('proxy_pull_location');
  }
  public set proxyPullLocation(value: string) {
    this._proxyPullLocation = value;
  }
  public resetProxyPullLocation() {
    this._proxyPullLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPullLocationInput() {
    return this._proxyPullLocation;
  }

  // proxy_version - computed: false, optional: false, required: true
  private _proxyVersion?: string; 
  public get proxyVersion() {
    return this.getStringAttribute('proxy_version');
  }
  public set proxyVersion(value: string) {
    this._proxyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyVersionInput() {
    return this._proxyVersion;
  }

  // refresh_pods_on_stale - computed: false, optional: true, required: false
  private _refreshPodsOnStale?: boolean | cdktf.IResolvable; 
  public get refreshPodsOnStale() {
    return this.getBooleanAttribute('refresh_pods_on_stale');
  }
  public set refreshPodsOnStale(value: boolean | cdktf.IResolvable) {
    this._refreshPodsOnStale = value;
  }
  public resetRefreshPodsOnStale() {
    this._refreshPodsOnStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshPodsOnStaleInput() {
    return this._refreshPodsOnStale;
  }

  // refresh_pods_on_update - computed: false, optional: true, required: false
  private _refreshPodsOnUpdate?: boolean | cdktf.IResolvable; 
  public get refreshPodsOnUpdate() {
    return this.getBooleanAttribute('refresh_pods_on_update');
  }
  public set refreshPodsOnUpdate(value: boolean | cdktf.IResolvable) {
    this._refreshPodsOnUpdate = value;
  }
  public resetRefreshPodsOnUpdate() {
    this._refreshPodsOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshPodsOnUpdateInput() {
    return this._refreshPodsOnUpdate;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // upstream_location - computed: false, optional: true, required: false
  private _upstreamLocation?: string; 
  public get upstreamLocation() {
    return this.getStringAttribute('upstream_location');
  }
  public set upstreamLocation(value: string) {
    this._upstreamLocation = value;
  }
  public resetUpstreamLocation() {
    this._upstreamLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamLocationInput() {
    return this._upstreamLocation;
  }

  // upstream_port - computed: false, optional: true, required: false
  private _upstreamPort?: number; 
  public get upstreamPort() {
    return this.getNumberAttribute('upstream_port');
  }
  public set upstreamPort(value: number) {
    this._upstreamPort = value;
  }
  public resetUpstreamPort() {
    this._upstreamPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamPortInput() {
    return this._upstreamPort;
  }

  // workload_selector - computed: false, optional: true, required: false
  private _workloadSelector = new DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelectorOutputReference(this, "workload_selector");
  public get workloadSelector() {
    return this._workloadSelector;
  }
  public putWorkloadSelector(value: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecWorkloadSelector) {
    this._workloadSelector.internalValue = value;
  }
  public resetWorkloadSelector() {
    this._workloadSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSelectorInput() {
    return this._workloadSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest k8s_leaksignal_com_cluster_leaksignal_istio_v1_manifest}
*/
export class DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_leaksignal_com_cluster_leaksignal_istio_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest to import
  * @param importFromId The id of the existing DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLeaksignalComClusterLeaksignalIstioV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_leaksignal_com_cluster_leaksignal_istio_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/leaksignal_com_cluster_leaksignal_istio_v1_manifest k8s_leaksignal_com_cluster_leaksignal_istio_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_leaksignal_com_cluster_leaksignal_istio_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpec) {
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
      metadata: dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestMetadata",
      },
      spec: {
        value: dataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLeaksignalComClusterLeaksignalIstioV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
