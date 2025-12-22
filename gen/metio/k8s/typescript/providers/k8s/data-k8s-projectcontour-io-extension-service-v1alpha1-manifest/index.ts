// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#metadata DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadata;
  /**
  * ExtensionServiceSpec defines the desired state of an ExtensionService resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#spec DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpec;
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#annotations DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#labels DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#name DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#namespace DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicy {
  /**
  * The maximum number of connections that a single Envoy instance allows to the Kubernetes Service; defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#max_connections DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests that a single Envoy instance allows to the Kubernetes Service; defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#max_pending_requests DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum parallel requests a single Envoy instance allows to the Kubernetes Service; defaults to 1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#max_requests DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * The maximum number of parallel retries a single Envoy instance allows to the Kubernetes Service; defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#max_retries DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * PerHostMaxConnections is the maximum number of connections that Envoy will allow to each individual host in a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#per_host_max_connections DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#per_host_max_connections}
  */
  readonly perHostMaxConnections?: number;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicyToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    per_host_max_connections: cdktf.numberToTerraform(struct!.perHostMaxConnections),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicyToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_host_max_connections: {
      value: cdktf.numberToHclTerraform(struct!.perHostMaxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._perHostMaxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.perHostMaxConnections = this._perHostMaxConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRetries = undefined;
      this._perHostMaxConnections = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRetries = value.maxRetries;
      this._perHostMaxConnections = value.perHostMaxConnections;
    }
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // per_host_max_connections - computed: false, optional: true, required: false
  private _perHostMaxConnections?: number; 
  public get perHostMaxConnections() {
    return this.getNumberAttribute('per_host_max_connections');
  }
  public set perHostMaxConnections(value: number) {
    this._perHostMaxConnections = value;
  }
  public resetPerHostMaxConnections() {
    this._perHostMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perHostMaxConnectionsInput() {
    return this._perHostMaxConnections;
  }
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions {
  /**
  * HeaderName is the name of the HTTP request header that will be used to calculate the hash key. If the header specified is not present on a request, no hash will be produced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#header_name DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#header_name}
  */
  readonly headerName?: string;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions {
  /**
  * ParameterName is the name of the HTTP request query parameter that will be used to calculate the hash key. If the query parameter specified is not present on a request, no hash will be produced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#parameter_name DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#parameter_name}
  */
  readonly parameterName?: string;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
    }
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPolicies {
  /**
  * HashSourceIP should be set to true when request source IP hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#hash_source_ip DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#hash_source_ip}
  */
  readonly hashSourceIp?: boolean | cdktf.IResolvable;
  /**
  * HeaderHashOptions should be set when request header hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#header_hash_options DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#header_hash_options}
  */
  readonly headerHashOptions?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions;
  /**
  * QueryParameterHashOptions should be set when request query parameter hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#query_parameter_hash_options DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#query_parameter_hash_options}
  */
  readonly queryParameterHashOptions?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions;
  /**
  * Terminal is a flag that allows for short-circuiting computing of a hash for a given request. If set to true, and the request attribute specified in the attribute hash options is present, no further hash policies will be used to calculate a hash for the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#terminal DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_source_ip: cdktf.booleanToTerraform(struct!.hashSourceIp),
    header_hash_options: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToTerraform(struct!.headerHashOptions),
    query_parameter_hash_options: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToTerraform(struct!.queryParameterHashOptions),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.hashSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_hash_options: {
      value: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToHclTerraform(struct!.headerHashOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions",
    },
    query_parameter_hash_options: {
      value: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToHclTerraform(struct!.queryParameterHashOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions",
    },
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashSourceIp = this._hashSourceIp;
    }
    if (this._headerHashOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashOptions = this._headerHashOptions?.internalValue;
    }
    if (this._queryParameterHashOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterHashOptions = this._queryParameterHashOptions?.internalValue;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashSourceIp = undefined;
      this._headerHashOptions.internalValue = undefined;
      this._queryParameterHashOptions.internalValue = undefined;
      this._terminal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashSourceIp = value.hashSourceIp;
      this._headerHashOptions.internalValue = value.headerHashOptions;
      this._queryParameterHashOptions.internalValue = value.queryParameterHashOptions;
      this._terminal = value.terminal;
    }
  }

  // hash_source_ip - computed: false, optional: true, required: false
  private _hashSourceIp?: boolean | cdktf.IResolvable; 
  public get hashSourceIp() {
    return this.getBooleanAttribute('hash_source_ip');
  }
  public set hashSourceIp(value: boolean | cdktf.IResolvable) {
    this._hashSourceIp = value;
  }
  public resetHashSourceIp() {
    this._hashSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSourceIpInput() {
    return this._hashSourceIp;
  }

  // header_hash_options - computed: false, optional: true, required: false
  private _headerHashOptions = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsOutputReference(this, "header_hash_options");
  public get headerHashOptions() {
    return this._headerHashOptions;
  }
  public putHeaderHashOptions(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions) {
    this._headerHashOptions.internalValue = value;
  }
  public resetHeaderHashOptions() {
    this._headerHashOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHashOptionsInput() {
    return this._headerHashOptions.internalValue;
  }

  // query_parameter_hash_options - computed: false, optional: true, required: false
  private _queryParameterHashOptions = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsOutputReference(this, "query_parameter_hash_options");
  public get queryParameterHashOptions() {
    return this._queryParameterHashOptions;
  }
  public putQueryParameterHashOptions(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions) {
    this._queryParameterHashOptions.internalValue = value;
  }
  public resetQueryParameterHashOptions() {
    this._queryParameterHashOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterHashOptionsInput() {
    return this._queryParameterHashOptions.internalValue;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesOutputReference {
    return new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicy {
  /**
  * RequestHashPolicies contains a list of hash policies to apply when the 'RequestHash' load balancing strategy is chosen. If an element of the supplied list of hash policies is invalid, it will be ignored. If the list of hash policies is empty after validation, the load balancing strategy will fall back to the default 'RoundRobin'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#request_hash_policies DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#request_hash_policies}
  */
  readonly requestHashPolicies?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable;
  /**
  * Strategy specifies the policy used to balance requests across the pool of backend pods. Valid policy names are 'Random', 'RoundRobin', 'WeightedLeastRequest', 'Cookie', and 'RequestHash'. If an unknown strategy name is specified or no policy is supplied, the default 'RoundRobin' policy is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#strategy DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_hash_policies: cdktf.listMapper(dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesToTerraform, false)(struct!.requestHashPolicies),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_hash_policies: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesToHclTerraform, false)(struct!.requestHashPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesList",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHashPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHashPolicies = this._requestHashPolicies?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHashPolicies.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHashPolicies.internalValue = value.requestHashPolicies;
      this._strategy = value.strategy;
    }
  }

  // request_hash_policies - computed: false, optional: true, required: false
  private _requestHashPolicies = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPoliciesList(this, "request_hash_policies", false);
  public get requestHashPolicies() {
    return this._requestHashPolicies;
  }
  public putRequestHashPolicies(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable) {
    this._requestHashPolicies.internalValue = value;
  }
  public resetRequestHashPolicies() {
    this._requestHashPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHashPoliciesInput() {
    return this._requestHashPolicies.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServices {
  /**
  * Name is the name of Kubernetes service that will accept service traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#name DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Port (defined as Integer) to proxy traffic to since a service can have multiple defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#port DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Weight defines proportion of traffic to balance to the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#weight DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._weight = value.weight;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesOutputReference {
    return new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicy {
  /**
  * Timeout for how long the proxy should wait while there is no activity during single request/response (for HTTP/1.1) or stream (for HTTP/2). Timeout will not trigger while HTTP/1.1 connection is idle between two consecutive requests. If not specified, there is no per-route idle timeout, though a connection manager-wide stream_idle_timeout default of 5m still applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#idle DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#idle}
  */
  readonly idle?: string;
  /**
  * Timeout for how long connection from the proxy to the upstream service is kept when there are no active requests. If not supplied, Envoy's default value of 1h applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#idle_connection DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#idle_connection}
  */
  readonly idleConnection?: string;
  /**
  * Timeout for receiving a response from the server after processing a request from client. If not supplied, Envoy's default value of 15s applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#response DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#response}
  */
  readonly response?: string;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicyToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: cdktf.stringToTerraform(struct!.idle),
    idle_connection: cdktf.stringToTerraform(struct!.idleConnection),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicyToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: cdktf.stringToHclTerraform(struct!.idle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_connection: {
      value: cdktf.stringToHclTerraform(struct!.idleConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle;
    }
    if (this._idleConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleConnection = this._idleConnection;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle = undefined;
      this._idleConnection = undefined;
      this._response = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle = value.idle;
      this._idleConnection = value.idleConnection;
      this._response = value.response;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: string; 
  public get idle() {
    return this.getStringAttribute('idle');
  }
  public set idle(value: string) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle;
  }

  // idle_connection - computed: false, optional: true, required: false
  private _idleConnection?: string; 
  public get idleConnection() {
    return this.getStringAttribute('idle_connection');
  }
  public set idleConnection(value: string) {
    this._idleConnection = value;
  }
  public resetIdleConnection() {
    this._idleConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleConnectionInput() {
    return this._idleConnection;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidation {
  /**
  * Name or namespaced name of the Kubernetes secret used to validate the certificate presented by the backend. The secret must contain key named ca.crt. The name can be optionally prefixed with namespace 'namespace/name'. When cross-namespace reference is used, TLSCertificateDelegation resource must exist in the namespace to grant access to the secret. Max length should be the actual max possible length of a namespaced name (63 + 253 + 1 = 317)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#ca_secret DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#ca_secret}
  */
  readonly caSecret: string;
  /**
  * Key which is expected to be present in the 'subjectAltName' of the presented certificate. Deprecated: migrate to using the plural field subjectNames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#subject_name DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#subject_name}
  */
  readonly subjectName: string;
  /**
  * List of keys, of which at least one is expected to be present in the 'subjectAltName of the presented certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#subject_names DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#subject_names}
  */
  readonly subjectNames?: string[];
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidationToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secret: cdktf.stringToTerraform(struct!.caSecret),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
    subject_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectNames),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidationToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secret: {
      value: cdktf.stringToHclTerraform(struct!.caSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecret = this._caSecret;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    if (this._subjectNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectNames = this._subjectNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecret = undefined;
      this._subjectName = undefined;
      this._subjectNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecret = value.caSecret;
      this._subjectName = value.subjectName;
      this._subjectNames = value.subjectNames;
    }
  }

  // ca_secret - computed: false, optional: false, required: true
  private _caSecret?: string; 
  public get caSecret() {
    return this.getStringAttribute('ca_secret');
  }
  public set caSecret(value: string) {
    this._caSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretInput() {
    return this._caSecret;
  }

  // subject_name - computed: false, optional: false, required: true
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }

  // subject_names - computed: false, optional: true, required: false
  private _subjectNames?: string[]; 
  public get subjectNames() {
    return this.getListAttribute('subject_names');
  }
  public set subjectNames(value: string[]) {
    this._subjectNames = value;
  }
  public resetSubjectNames() {
    this._subjectNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNamesInput() {
    return this._subjectNames;
  }
}
export interface DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpec {
  /**
  * CircuitBreakerPolicy specifies the circuit breaker budget across the extension service. If defined this overrides the global circuit breaker budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#circuit_breaker_policy DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#circuit_breaker_policy}
  */
  readonly circuitBreakerPolicy?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicy;
  /**
  * The policy for load balancing GRPC service requests. Note that the 'Cookie' and 'RequestHash' load balancing strategies cannot be used here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#load_balancer_policy DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#load_balancer_policy}
  */
  readonly loadBalancerPolicy?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicy;
  /**
  * Protocol may be used to specify (or override) the protocol used to reach this Service. Values may be h2 or h2c. If omitted, protocol-selection falls back on Service annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#protocol DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * This field sets the version of the GRPC protocol that Envoy uses to send requests to the extension service. Since Contour always uses the v3 Envoy API, this is currently fixed at 'v3'. However, other protocol options will be available in future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#protocol_version DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * Services specifies the set of Kubernetes Service resources that receive GRPC extension API requests. If no weights are specified for any of the entries in this array, traffic will be spread evenly across all the services. Otherwise, traffic is balanced proportionally to the Weight field in each entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#services DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#services}
  */
  readonly services: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServices[] | cdktf.IResolvable;
  /**
  * The timeout policy for requests to the services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#timeout_policy DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#timeout_policy}
  */
  readonly timeoutPolicy?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicy;
  /**
  * UpstreamValidation defines how to verify the backend service's certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#validation DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest#validation}
  */
  readonly validation?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidation;
}

export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_breaker_policy: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicyToTerraform(struct!.circuitBreakerPolicy),
    load_balancer_policy: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyToTerraform(struct!.loadBalancerPolicy),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    services: cdktf.listMapper(dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesToTerraform, false)(struct!.services),
    timeout_policy: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicyToTerraform(struct!.timeoutPolicy),
    validation: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidationToTerraform(struct!.validation),
  }
}


export function dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_breaker_policy: {
      value: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicyToHclTerraform(struct!.circuitBreakerPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicy",
    },
    load_balancer_policy: {
      value: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyToHclTerraform(struct!.loadBalancerPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicy",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesList",
    },
    timeout_policy: {
      value: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicyToHclTerraform(struct!.timeoutPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicy",
    },
    validation: {
      value: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitBreakerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreakerPolicy = this._circuitBreakerPolicy?.internalValue;
    }
    if (this._loadBalancerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerPolicy = this._loadBalancerPolicy?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._timeoutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutPolicy = this._timeoutPolicy?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitBreakerPolicy.internalValue = undefined;
      this._loadBalancerPolicy.internalValue = undefined;
      this._protocol = undefined;
      this._protocolVersion = undefined;
      this._services.internalValue = undefined;
      this._timeoutPolicy.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitBreakerPolicy.internalValue = value.circuitBreakerPolicy;
      this._loadBalancerPolicy.internalValue = value.loadBalancerPolicy;
      this._protocol = value.protocol;
      this._protocolVersion = value.protocolVersion;
      this._services.internalValue = value.services;
      this._timeoutPolicy.internalValue = value.timeoutPolicy;
      this._validation.internalValue = value.validation;
    }
  }

  // circuit_breaker_policy - computed: false, optional: true, required: false
  private _circuitBreakerPolicy = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicyOutputReference(this, "circuit_breaker_policy");
  public get circuitBreakerPolicy() {
    return this._circuitBreakerPolicy;
  }
  public putCircuitBreakerPolicy(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecCircuitBreakerPolicy) {
    this._circuitBreakerPolicy.internalValue = value;
  }
  public resetCircuitBreakerPolicy() {
    this._circuitBreakerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakerPolicyInput() {
    return this._circuitBreakerPolicy.internalValue;
  }

  // load_balancer_policy - computed: false, optional: true, required: false
  private _loadBalancerPolicy = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicyOutputReference(this, "load_balancer_policy");
  public get loadBalancerPolicy() {
    return this._loadBalancerPolicy;
  }
  public putLoadBalancerPolicy(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecLoadBalancerPolicy) {
    this._loadBalancerPolicy.internalValue = value;
  }
  public resetLoadBalancerPolicy() {
    this._loadBalancerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPolicyInput() {
    return this._loadBalancerPolicy.internalValue;
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

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // timeout_policy - computed: false, optional: true, required: false
  private _timeoutPolicy = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicyOutputReference(this, "timeout_policy");
  public get timeoutPolicy() {
    return this._timeoutPolicy;
  }
  public putTimeoutPolicy(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecTimeoutPolicy) {
    this._timeoutPolicy.internalValue = value;
  }
  public resetTimeoutPolicy() {
    this._timeoutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutPolicyInput() {
    return this._timeoutPolicy.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest k8s_projectcontour_io_extension_service_v1alpha1_manifest}
*/
export class DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_projectcontour_io_extension_service_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SProjectcontourIoExtensionServiceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_projectcontour_io_extension_service_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_extension_service_v1alpha1_manifest k8s_projectcontour_io_extension_service_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_projectcontour_io_extension_service_v1alpha1_manifest',
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
  private _metadata = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SProjectcontourIoExtensionServiceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
