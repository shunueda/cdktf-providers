// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoTracingServiceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#metadata DataK8SGetambassadorIoTracingServiceV1Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoTracingServiceV1ManifestMetadata;
  /**
  * TracingServiceSpec defines the desired state of TracingService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#spec DataK8SGetambassadorIoTracingServiceV1Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoTracingServiceV1ManifestSpec;
}
export interface DataK8SGetambassadorIoTracingServiceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#annotations DataK8SGetambassadorIoTracingServiceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#labels DataK8SGetambassadorIoTracingServiceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#name DataK8SGetambassadorIoTracingServiceV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#namespace DataK8SGetambassadorIoTracingServiceV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoTracingServiceV1ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoTracingServiceV1ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoTracingServiceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTracingServiceV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoTracingServiceV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#access_token_file DataK8SGetambassadorIoTracingServiceV1Manifest#access_token_file}
  */
  readonly accessTokenFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#collector_cluster DataK8SGetambassadorIoTracingServiceV1Manifest#collector_cluster}
  */
  readonly collectorCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#collector_endpoint DataK8SGetambassadorIoTracingServiceV1Manifest#collector_endpoint}
  */
  readonly collectorEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#collector_endpoint_version DataK8SGetambassadorIoTracingServiceV1Manifest#collector_endpoint_version}
  */
  readonly collectorEndpointVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#collector_hostname DataK8SGetambassadorIoTracingServiceV1Manifest#collector_hostname}
  */
  readonly collectorHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#service_name DataK8SGetambassadorIoTracingServiceV1Manifest#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#shared_span_context DataK8SGetambassadorIoTracingServiceV1Manifest#shared_span_context}
  */
  readonly sharedSpanContext?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#trace_id_128bit DataK8SGetambassadorIoTracingServiceV1Manifest#trace_id_128bit}
  */
  readonly traceId128Bit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#v3_propagation_modes DataK8SGetambassadorIoTracingServiceV1Manifest#v3_propagation_modes}
  */
  readonly v3PropagationModes?: string[];
}

export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecConfigToTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_file: cdktf.stringToTerraform(struct!.accessTokenFile),
    collector_cluster: cdktf.stringToTerraform(struct!.collectorCluster),
    collector_endpoint: cdktf.stringToTerraform(struct!.collectorEndpoint),
    collector_endpoint_version: cdktf.stringToTerraform(struct!.collectorEndpointVersion),
    collector_hostname: cdktf.stringToTerraform(struct!.collectorHostname),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    shared_span_context: cdktf.booleanToTerraform(struct!.sharedSpanContext),
    trace_id_128bit: cdktf.booleanToTerraform(struct!.traceId128Bit),
    v3_propagation_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.v3PropagationModes),
  }
}


export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecConfigToHclTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_file: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_cluster: {
      value: cdktf.stringToHclTerraform(struct!.collectorCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.collectorEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_endpoint_version: {
      value: cdktf.stringToHclTerraform(struct!.collectorEndpointVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_hostname: {
      value: cdktf.stringToHclTerraform(struct!.collectorHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_span_context: {
      value: cdktf.booleanToHclTerraform(struct!.sharedSpanContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trace_id_128bit: {
      value: cdktf.booleanToHclTerraform(struct!.traceId128Bit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v3_propagation_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.v3PropagationModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenFile = this._accessTokenFile;
    }
    if (this._collectorCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorCluster = this._collectorCluster;
    }
    if (this._collectorEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorEndpoint = this._collectorEndpoint;
    }
    if (this._collectorEndpointVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorEndpointVersion = this._collectorEndpointVersion;
    }
    if (this._collectorHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorHostname = this._collectorHostname;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._sharedSpanContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSpanContext = this._sharedSpanContext;
    }
    if (this._traceId128Bit !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceId128Bit = this._traceId128Bit;
    }
    if (this._v3PropagationModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3PropagationModes = this._v3PropagationModes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenFile = undefined;
      this._collectorCluster = undefined;
      this._collectorEndpoint = undefined;
      this._collectorEndpointVersion = undefined;
      this._collectorHostname = undefined;
      this._serviceName = undefined;
      this._sharedSpanContext = undefined;
      this._traceId128Bit = undefined;
      this._v3PropagationModes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenFile = value.accessTokenFile;
      this._collectorCluster = value.collectorCluster;
      this._collectorEndpoint = value.collectorEndpoint;
      this._collectorEndpointVersion = value.collectorEndpointVersion;
      this._collectorHostname = value.collectorHostname;
      this._serviceName = value.serviceName;
      this._sharedSpanContext = value.sharedSpanContext;
      this._traceId128Bit = value.traceId128Bit;
      this._v3PropagationModes = value.v3PropagationModes;
    }
  }

  // access_token_file - computed: false, optional: true, required: false
  private _accessTokenFile?: string; 
  public get accessTokenFile() {
    return this.getStringAttribute('access_token_file');
  }
  public set accessTokenFile(value: string) {
    this._accessTokenFile = value;
  }
  public resetAccessTokenFile() {
    this._accessTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenFileInput() {
    return this._accessTokenFile;
  }

  // collector_cluster - computed: false, optional: true, required: false
  private _collectorCluster?: string; 
  public get collectorCluster() {
    return this.getStringAttribute('collector_cluster');
  }
  public set collectorCluster(value: string) {
    this._collectorCluster = value;
  }
  public resetCollectorCluster() {
    this._collectorCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorClusterInput() {
    return this._collectorCluster;
  }

  // collector_endpoint - computed: false, optional: true, required: false
  private _collectorEndpoint?: string; 
  public get collectorEndpoint() {
    return this.getStringAttribute('collector_endpoint');
  }
  public set collectorEndpoint(value: string) {
    this._collectorEndpoint = value;
  }
  public resetCollectorEndpoint() {
    this._collectorEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorEndpointInput() {
    return this._collectorEndpoint;
  }

  // collector_endpoint_version - computed: false, optional: true, required: false
  private _collectorEndpointVersion?: string; 
  public get collectorEndpointVersion() {
    return this.getStringAttribute('collector_endpoint_version');
  }
  public set collectorEndpointVersion(value: string) {
    this._collectorEndpointVersion = value;
  }
  public resetCollectorEndpointVersion() {
    this._collectorEndpointVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorEndpointVersionInput() {
    return this._collectorEndpointVersion;
  }

  // collector_hostname - computed: false, optional: true, required: false
  private _collectorHostname?: string; 
  public get collectorHostname() {
    return this.getStringAttribute('collector_hostname');
  }
  public set collectorHostname(value: string) {
    this._collectorHostname = value;
  }
  public resetCollectorHostname() {
    this._collectorHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorHostnameInput() {
    return this._collectorHostname;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // shared_span_context - computed: false, optional: true, required: false
  private _sharedSpanContext?: boolean | cdktf.IResolvable; 
  public get sharedSpanContext() {
    return this.getBooleanAttribute('shared_span_context');
  }
  public set sharedSpanContext(value: boolean | cdktf.IResolvable) {
    this._sharedSpanContext = value;
  }
  public resetSharedSpanContext() {
    this._sharedSpanContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSpanContextInput() {
    return this._sharedSpanContext;
  }

  // trace_id_128bit - computed: false, optional: true, required: false
  private _traceId128Bit?: boolean | cdktf.IResolvable; 
  public get traceId128Bit() {
    return this.getBooleanAttribute('trace_id_128bit');
  }
  public set traceId128Bit(value: boolean | cdktf.IResolvable) {
    this._traceId128Bit = value;
  }
  public resetTraceId128Bit() {
    this._traceId128Bit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceId128BitInput() {
    return this._traceId128Bit;
  }

  // v3_propagation_modes - computed: false, optional: true, required: false
  private _v3PropagationModes?: string[]; 
  public get v3PropagationModes() {
    return this.getListAttribute('v3_propagation_modes');
  }
  public set v3PropagationModes(value: string[]) {
    this._v3PropagationModes = value;
  }
  public resetV3PropagationModes() {
    this._v3PropagationModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3PropagationModesInput() {
    return this._v3PropagationModes;
  }
}
export interface DataK8SGetambassadorIoTracingServiceV1ManifestSpecSampling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#client DataK8SGetambassadorIoTracingServiceV1Manifest#client}
  */
  readonly client?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#overall DataK8SGetambassadorIoTracingServiceV1Manifest#overall}
  */
  readonly overall?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#random DataK8SGetambassadorIoTracingServiceV1Manifest#random}
  */
  readonly random?: number;
}

export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecSamplingToTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecSampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.numberToTerraform(struct!.client),
    overall: cdktf.numberToTerraform(struct!.overall),
    random: cdktf.numberToTerraform(struct!.random),
  }
}


export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecSamplingToHclTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecSampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.numberToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overall: {
      value: cdktf.numberToHclTerraform(struct!.overall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    random: {
      value: cdktf.numberToHclTerraform(struct!.random),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoTracingServiceV1ManifestSpecSamplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTracingServiceV1ManifestSpecSampling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._overall !== undefined) {
      hasAnyValues = true;
      internalValueResult.overall = this._overall;
    }
    if (this._random !== undefined) {
      hasAnyValues = true;
      internalValueResult.random = this._random;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecSampling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._overall = undefined;
      this._random = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._overall = value.overall;
      this._random = value.random;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: number; 
  public get client() {
    return this.getNumberAttribute('client');
  }
  public set client(value: number) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // overall - computed: false, optional: true, required: false
  private _overall?: number; 
  public get overall() {
    return this.getNumberAttribute('overall');
  }
  public set overall(value: number) {
    this._overall = value;
  }
  public resetOverall() {
    this._overall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallInput() {
    return this._overall;
  }

  // random - computed: false, optional: true, required: false
  private _random?: number; 
  public get random() {
    return this.getNumberAttribute('random');
  }
  public set random(value: number) {
    this._random = value;
  }
  public resetRandom() {
    this._random = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomInput() {
    return this._random;
  }
}
export interface DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#default_value DataK8SGetambassadorIoTracingServiceV1Manifest#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#name DataK8SGetambassadorIoTracingServiceV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironmentToTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironmentToHclTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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

export class DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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
export interface DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#value DataK8SGetambassadorIoTracingServiceV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteralToTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteralToHclTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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
export interface DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#default_value DataK8SGetambassadorIoTracingServiceV1Manifest#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#name DataK8SGetambassadorIoTracingServiceV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeaderToTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeaderToHclTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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

export class DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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
export interface DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTags {
  /**
  * Environment explicitly specifies the protocol stack to set up. Exactly one of Literal, Environment or Header must be supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#environment DataK8SGetambassadorIoTracingServiceV1Manifest#environment}
  */
  readonly environment?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironment;
  /**
  * Literal explicitly specifies the protocol stack to set up. Exactly one of Literal, Environment or Header must be supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#literal DataK8SGetambassadorIoTracingServiceV1Manifest#literal}
  */
  readonly literal?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteral;
  /**
  * Header explicitly specifies the protocol stack to set up. Exactly one of Literal, Environment or Header must be supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#request_header DataK8SGetambassadorIoTracingServiceV1Manifest#request_header}
  */
  readonly requestHeader?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#tag DataK8SGetambassadorIoTracingServiceV1Manifest#tag}
  */
  readonly tag: string;
}

export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsToTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironmentToTerraform(struct!.environment),
    literal: dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteralToTerraform(struct!.literal),
    request_header: dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeaderToTerraform(struct!.requestHeader),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsToHclTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironment",
    },
    literal: {
      value: dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteralToHclTerraform(struct!.literal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteral",
    },
    request_header: {
      value: dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeaderToHclTerraform(struct!.requestHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeader",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._literal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal?.internalValue;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment.internalValue = undefined;
      this._literal.internalValue = undefined;
      this._requestHeader.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment.internalValue = value.environment;
      this._literal.internalValue = value.literal;
      this._requestHeader.internalValue = value.requestHeader;
      this._tag = value.tag;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // literal - computed: false, optional: true, required: false
  private _literal = new DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteralOutputReference(this, "literal");
  public get literal() {
    return this._literal;
  }
  public putLiteral(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsLiteral) {
    this._literal.internalValue = value;
  }
  public resetLiteral() {
    this._literal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeaderOutputReference(this, "request_header");
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsRequestHeader) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsOutputReference {
    return new DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoTracingServiceV1ManifestSpec {
  /**
  * AmbassadorID declares which Ambassador instances should pay attention to this resource. May either be a string or a list of strings. If no value is provided, the default is: ambassador_id: - 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#ambassador_id DataK8SGetambassadorIoTracingServiceV1Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#config DataK8SGetambassadorIoTracingServiceV1Manifest#config}
  */
  readonly config?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#driver DataK8SGetambassadorIoTracingServiceV1Manifest#driver}
  */
  readonly driver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#sampling DataK8SGetambassadorIoTracingServiceV1Manifest#sampling}
  */
  readonly sampling?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecSampling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#service DataK8SGetambassadorIoTracingServiceV1Manifest#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#tag_headers DataK8SGetambassadorIoTracingServiceV1Manifest#tag_headers}
  */
  readonly tagHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#v3_custom_tags DataK8SGetambassadorIoTracingServiceV1Manifest#v3_custom_tags}
  */
  readonly v3CustomTags?: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#v3_stats_name DataK8SGetambassadorIoTracingServiceV1Manifest#v3_stats_name}
  */
  readonly v3StatsName?: string;
}

export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    config: dataK8SGetambassadorIoTracingServiceV1ManifestSpecConfigToTerraform(struct!.config),
    driver: cdktf.stringToTerraform(struct!.driver),
    sampling: dataK8SGetambassadorIoTracingServiceV1ManifestSpecSamplingToTerraform(struct!.sampling),
    service: cdktf.stringToTerraform(struct!.service),
    tag_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagHeaders),
    v3_custom_tags: cdktf.listMapper(dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsToTerraform, false)(struct!.v3CustomTags),
    v3_stats_name: cdktf.stringToTerraform(struct!.v3StatsName),
  }
}


export function dataK8SGetambassadorIoTracingServiceV1ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoTracingServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config: {
      value: dataK8SGetambassadorIoTracingServiceV1ManifestSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfig",
    },
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling: {
      value: dataK8SGetambassadorIoTracingServiceV1ManifestSpecSamplingToHclTerraform(struct!.sampling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGetambassadorIoTracingServiceV1ManifestSpecSampling",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    v3_custom_tags: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsToHclTerraform, false)(struct!.v3CustomTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsList",
    },
    v3_stats_name: {
      value: cdktf.stringToHclTerraform(struct!.v3StatsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoTracingServiceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTracingServiceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._sampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling?.internalValue;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._tagHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagHeaders = this._tagHeaders;
    }
    if (this._v3CustomTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3CustomTags = this._v3CustomTags?.internalValue;
    }
    if (this._v3StatsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3StatsName = this._v3StatsName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ambassadorId = undefined;
      this._config.internalValue = undefined;
      this._driver = undefined;
      this._sampling.internalValue = undefined;
      this._service = undefined;
      this._tagHeaders = undefined;
      this._v3CustomTags.internalValue = undefined;
      this._v3StatsName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ambassadorId = value.ambassadorId;
      this._config.internalValue = value.config;
      this._driver = value.driver;
      this._sampling.internalValue = value.sampling;
      this._service = value.service;
      this._tagHeaders = value.tagHeaders;
      this._v3CustomTags.internalValue = value.v3CustomTags;
      this._v3StatsName = value.v3StatsName;
    }
  }

  // ambassador_id - computed: false, optional: true, required: false
  private _ambassadorId?: string[]; 
  public get ambassadorId() {
    return this.getListAttribute('ambassador_id');
  }
  public set ambassadorId(value: string[]) {
    this._ambassadorId = value;
  }
  public resetAmbassadorId() {
    this._ambassadorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambassadorIdInput() {
    return this._ambassadorId;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling = new DataK8SGetambassadorIoTracingServiceV1ManifestSpecSamplingOutputReference(this, "sampling");
  public get sampling() {
    return this._sampling;
  }
  public putSampling(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecSampling) {
    this._sampling.internalValue = value;
  }
  public resetSampling() {
    this._sampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // tag_headers - computed: false, optional: true, required: false
  private _tagHeaders?: string[]; 
  public get tagHeaders() {
    return this.getListAttribute('tag_headers');
  }
  public set tagHeaders(value: string[]) {
    this._tagHeaders = value;
  }
  public resetTagHeaders() {
    this._tagHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagHeadersInput() {
    return this._tagHeaders;
  }

  // v3_custom_tags - computed: false, optional: true, required: false
  private _v3CustomTags = new DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTagsList(this, "v3_custom_tags", false);
  public get v3CustomTags() {
    return this._v3CustomTags;
  }
  public putV3CustomTags(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpecV3CustomTags[] | cdktf.IResolvable) {
    this._v3CustomTags.internalValue = value;
  }
  public resetV3CustomTags() {
    this._v3CustomTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3CustomTagsInput() {
    return this._v3CustomTags.internalValue;
  }

  // v3_stats_name - computed: false, optional: true, required: false
  private _v3StatsName?: string; 
  public get v3StatsName() {
    return this.getStringAttribute('v3_stats_name');
  }
  public set v3StatsName(value: string) {
    this._v3StatsName = value;
  }
  public resetV3StatsName() {
    this._v3StatsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3StatsNameInput() {
    return this._v3StatsName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest k8s_getambassador_io_tracing_service_v1_manifest}
*/
export class DataK8SGetambassadorIoTracingServiceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_tracing_service_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoTracingServiceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoTracingServiceV1Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoTracingServiceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoTracingServiceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_tracing_service_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/getambassador_io_tracing_service_v1_manifest k8s_getambassador_io_tracing_service_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoTracingServiceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoTracingServiceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_tracing_service_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SGetambassadorIoTracingServiceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoTracingServiceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoTracingServiceV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoTracingServiceV1ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoTracingServiceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoTracingServiceV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoTracingServiceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoTracingServiceV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoTracingServiceV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoTracingServiceV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
