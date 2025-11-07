// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#metadata DataK8SKumaIoMeshTraceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshTrace resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#spec DataK8SKumaIoMeshTraceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#annotations DataK8SKumaIoMeshTraceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#labels DataK8SKumaIoMeshTraceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#name DataK8SKumaIoMeshTraceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#namespace DataK8SKumaIoMeshTraceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadog {
  /**
  * Determines if datadog service name should be split based on traffic direction and destination. For example, with 'splitService: true' and a 'backend' service that communicates with a couple of databases, you would get service names like 'backend_INBOUND', 'backend_OUTBOUND_db1', and 'backend_OUTBOUND_db2' in Datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#split_service DataK8SKumaIoMeshTraceV1Alpha1Manifest#split_service}
  */
  readonly splitService?: boolean | cdktf.IResolvable;
  /**
  * Address of Datadog collector, only host and port are allowed (no paths, fragments etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#url DataK8SKumaIoMeshTraceV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadogToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_service: cdktf.booleanToTerraform(struct!.splitService),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadogToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    split_service: {
      value: cdktf.booleanToHclTerraform(struct!.splitService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitService !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitService = this._splitService;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._splitService = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._splitService = value.splitService;
      this._url = value.url;
    }
  }

  // split_service - computed: false, optional: true, required: false
  private _splitService?: boolean | cdktf.IResolvable; 
  public get splitService() {
    return this.getBooleanAttribute('split_service');
  }
  public set splitService(value: boolean | cdktf.IResolvable) {
    this._splitService = value;
  }
  public resetSplitService() {
    this._splitService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitServiceInput() {
    return this._splitService;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetry {
  /**
  * Address of OpenTelemetry collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#endpoint DataK8SKumaIoMeshTraceV1Alpha1Manifest#endpoint}
  */
  readonly endpoint: string;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetryToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetryToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkin {
  /**
  * Version of the API. https://github.com/envoyproxy/envoy/blob/v1.22.0/api/envoy/config/trace/v3/zipkin.proto#L66
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#api_version DataK8SKumaIoMeshTraceV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Determines whether client and server spans will share the same span context. https://github.com/envoyproxy/envoy/blob/v1.22.0/api/envoy/config/trace/v3/zipkin.proto#L63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#shared_span_context DataK8SKumaIoMeshTraceV1Alpha1Manifest#shared_span_context}
  */
  readonly sharedSpanContext?: boolean | cdktf.IResolvable;
  /**
  * Generate 128bit traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#trace_id128bit DataK8SKumaIoMeshTraceV1Alpha1Manifest#trace_id128bit}
  */
  readonly traceId128Bit?: boolean | cdktf.IResolvable;
  /**
  * Address of Zipkin collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#url DataK8SKumaIoMeshTraceV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkinToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    shared_span_context: cdktf.booleanToTerraform(struct!.sharedSpanContext),
    trace_id128bit: cdktf.booleanToTerraform(struct!.traceId128Bit),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkinToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkin | cdktf.IResolvable): any {
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
    shared_span_context: {
      value: cdktf.booleanToHclTerraform(struct!.sharedSpanContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trace_id128bit: {
      value: cdktf.booleanToHclTerraform(struct!.traceId128Bit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._sharedSpanContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSpanContext = this._sharedSpanContext;
    }
    if (this._traceId128Bit !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceId128Bit = this._traceId128Bit;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._sharedSpanContext = undefined;
      this._traceId128Bit = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._sharedSpanContext = value.sharedSpanContext;
      this._traceId128Bit = value.traceId128Bit;
      this._url = value.url;
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

  // trace_id128bit - computed: false, optional: true, required: false
  private _traceId128Bit?: boolean | cdktf.IResolvable; 
  public get traceId128Bit() {
    return this.getBooleanAttribute('trace_id128bit');
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackends {
  /**
  * Datadog backend configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#datadog DataK8SKumaIoMeshTraceV1Alpha1Manifest#datadog}
  */
  readonly datadog?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadog;
  /**
  * OpenTelemetry backend configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#open_telemetry DataK8SKumaIoMeshTraceV1Alpha1Manifest#open_telemetry}
  */
  readonly openTelemetry?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#type DataK8SKumaIoMeshTraceV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Zipkin backend configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#zipkin DataK8SKumaIoMeshTraceV1Alpha1Manifest#zipkin}
  */
  readonly zipkin?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkin;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datadog: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadogToTerraform(struct!.datadog),
    open_telemetry: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetryToTerraform(struct!.openTelemetry),
    type: cdktf.stringToTerraform(struct!.type),
    zipkin: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkinToTerraform(struct!.zipkin),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datadog: {
      value: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadog",
    },
    open_telemetry: {
      value: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetryToHclTerraform(struct!.openTelemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetry",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zipkin: {
      value: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkinToHclTerraform(struct!.zipkin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._openTelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTelemetry = this._openTelemetry?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zipkin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipkin = this._zipkin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datadog.internalValue = undefined;
      this._openTelemetry.internalValue = undefined;
      this._type = undefined;
      this._zipkin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datadog.internalValue = value.datadog;
      this._openTelemetry.internalValue = value.openTelemetry;
      this._type = value.type;
      this._zipkin.internalValue = value.zipkin;
    }
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // open_telemetry - computed: false, optional: true, required: false
  private _openTelemetry = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetryOutputReference(this, "open_telemetry");
  public get openTelemetry() {
    return this._openTelemetry;
  }
  public putOpenTelemetry(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOpenTelemetry) {
    this._openTelemetry.internalValue = value;
  }
  public resetOpenTelemetry() {
    this._openTelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTelemetryInput() {
    return this._openTelemetry.internalValue;
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

  // zipkin - computed: false, optional: true, required: false
  private _zipkin = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkinOutputReference(this, "zipkin");
  public get zipkin() {
    return this._zipkin;
  }
  public putZipkin(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsZipkin) {
    this._zipkin.internalValue = value;
  }
  public resetZipkin() {
    this._zipkin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipkinInput() {
    return this._zipkin.internalValue;
  }
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackends[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOutputReference {
    return new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSampling {
  /**
  * Target percentage of requests that will be force traced if the 'x-client-trace-id' header is set. Mirror of client_sampling in Envoy https://github.com/envoyproxy/envoy/blob/v1.22.0/api/envoy/config/filter/network/http_connection_manager/v2/http_connection_manager.proto#L127-L133 Either int or decimal represented as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#client DataK8SKumaIoMeshTraceV1Alpha1Manifest#client}
  */
  readonly client?: string;
  /**
  * Target percentage of requests will be traced after all other sampling checks have been applied (client, force tracing, random sampling). This field functions as an upper limit on the total configured sampling rate. For instance, setting client to 100 but overall to 1 will result in only 1% of client requests with the appropriate headers to be force traced. Mirror of overall_sampling in Envoy https://github.com/envoyproxy/envoy/blob/v1.22.0/api/envoy/config/filter/network/http_connection_manager/v2/http_connection_manager.proto#L142-L150 Either int or decimal represented as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#overall DataK8SKumaIoMeshTraceV1Alpha1Manifest#overall}
  */
  readonly overall?: string;
  /**
  * Target percentage of requests that will be randomly selected for trace generation, if not requested by the client or not forced. Mirror of random_sampling in Envoy https://github.com/envoyproxy/envoy/blob/v1.22.0/api/envoy/config/filter/network/http_connection_manager/v2/http_connection_manager.proto#L135-L140 Either int or decimal represented as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#random DataK8SKumaIoMeshTraceV1Alpha1Manifest#random}
  */
  readonly random?: string;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSamplingToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.stringToTerraform(struct!.client),
    overall: cdktf.stringToTerraform(struct!.overall),
    random: cdktf.stringToTerraform(struct!.random),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSamplingToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overall: {
      value: cdktf.stringToHclTerraform(struct!.overall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    random: {
      value: cdktf.stringToHclTerraform(struct!.random),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSamplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSampling | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSampling | cdktf.IResolvable | undefined) {
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
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
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
  private _overall?: string; 
  public get overall() {
    return this.getStringAttribute('overall');
  }
  public set overall(value: string) {
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
  private _random?: string; 
  public get random() {
    return this.getStringAttribute('random');
  }
  public set random(value: string) {
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
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeader {
  /**
  * Default value to use if header is missing. If the default is missing and there is no value the tag will not be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#default DataK8SKumaIoMeshTraceV1Alpha1Manifest#default}
  */
  readonly default?: string;
  /**
  * Name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#name DataK8SKumaIoMeshTraceV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeaderToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeaderToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._name = value.name;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTags {
  /**
  * Tag taken from a header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#header DataK8SKumaIoMeshTraceV1Alpha1Manifest#header}
  */
  readonly header?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeader;
  /**
  * Tag taken from literal value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#literal DataK8SKumaIoMeshTraceV1Alpha1Manifest#literal}
  */
  readonly literal?: string;
  /**
  * Name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#name DataK8SKumaIoMeshTraceV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeaderToTerraform(struct!.header),
    literal: cdktf.stringToTerraform(struct!.literal),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeader",
    },
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header.internalValue = undefined;
      this._literal = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header.internalValue = value.header;
      this._literal = value.literal;
      this._name = value.name;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsOutputReference {
    return new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefault {
  /**
  * A one element array of backend definition. Envoy allows configuring only 1 backend, so the natural way of representing that would be just one object. Unfortunately due to the reasons explained in MADR 009-tracing-policy this has to be a one element array for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#backends DataK8SKumaIoMeshTraceV1Alpha1Manifest#backends}
  */
  readonly backends?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackends[] | cdktf.IResolvable;
  /**
  * Sampling configuration. Sampling is the process by which a decision is made on whether to process/export a span or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#sampling DataK8SKumaIoMeshTraceV1Alpha1Manifest#sampling}
  */
  readonly sampling?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSampling;
  /**
  * Custom tags configuration. You can add custom tags to traces based on headers or literal values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#tags DataK8SKumaIoMeshTraceV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTags[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsToTerraform, false)(struct!.backends),
    sampling: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSamplingToTerraform(struct!.sampling),
    tags: cdktf.listMapper(dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backends: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsToHclTerraform, false)(struct!.backends),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsList",
    },
    sampling: {
      value: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSamplingToHclTerraform(struct!.sampling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSampling",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends?.internalValue;
    }
    if (this._sampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backends.internalValue = undefined;
      this._sampling.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backends.internalValue = value.backends;
      this._sampling.internalValue = value.sampling;
      this._tags.internalValue = value.tags;
    }
  }

  // backends - computed: false, optional: true, required: false
  private _backends = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackendsList(this, "backends", false);
  public get backends() {
    return this._backends;
  }
  public putBackends(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultBackends[] | cdktf.IResolvable) {
    this._backends.internalValue = value;
  }
  public resetBackends() {
    this._backends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends.internalValue;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSamplingOutputReference(this, "sampling");
  public get sampling() {
    return this._sampling;
  }
  public putSampling(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultSampling) {
    this._sampling.internalValue = value;
  }
  public resetSampling() {
    this._sampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#kind DataK8SKumaIoMeshTraceV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#labels DataK8SKumaIoMeshTraceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#mesh DataK8SKumaIoMeshTraceV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#name DataK8SKumaIoMeshTraceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#namespace DataK8SKumaIoMeshTraceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshTraceV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#section_name DataK8SKumaIoMeshTraceV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#tags DataK8SKumaIoMeshTraceV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
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

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SKumaIoMeshTraceV1Alpha1ManifestSpec {
  /**
  * MeshTrace configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#default DataK8SKumaIoMeshTraceV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefault;
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined inplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#target_ref DataK8SKumaIoMeshTraceV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRef;
}

export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshTraceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest k8s_kuma_io_mesh_trace_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshTraceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_trace_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshTraceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshTraceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshTraceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshTraceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_trace_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_trace_v1alpha1_manifest k8s_kuma_io_mesh_trace_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshTraceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshTraceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_trace_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshTraceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshTraceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshTraceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshTraceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshTraceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshTraceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
