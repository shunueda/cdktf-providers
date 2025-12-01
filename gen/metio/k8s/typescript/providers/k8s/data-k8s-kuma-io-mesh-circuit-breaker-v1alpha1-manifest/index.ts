// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#metadata DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshCircuitBreaker resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#spec DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#annotations DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#labels DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#name DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#namespace DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimits {
  /**
  * The maximum number of connection pools per cluster that are concurrently supported at once. Set this for clusters which create a large number of connection pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_connection_pools DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_connection_pools}
  */
  readonly maxConnectionPools?: number;
  /**
  * The maximum number of connections allowed to be made to the upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_connections DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests that are allowed to the upstream cluster. This limit is applied as a connection limit for non-HTTP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_pending_requests DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum number of parallel requests that are allowed to be made to the upstream cluster. This limit does not apply to non-HTTP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_requests DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * The maximum number of parallel retries that will be allowed to the upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_retries DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_retries}
  */
  readonly maxRetries?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimitsToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connection_pools: cdktf.numberToTerraform(struct!.maxConnectionPools),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimitsToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connection_pools: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionPools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnectionPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionPools = this._maxConnectionPools;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnectionPools = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRetries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnectionPools = value.maxConnectionPools;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRetries = value.maxRetries;
    }
  }

  // max_connection_pools - computed: false, optional: true, required: false
  private _maxConnectionPools?: number; 
  public get maxConnectionPools() {
    return this.getNumberAttribute('max_connection_pools');
  }
  public set maxConnectionPools(value: number) {
    this._maxConnectionPools = value;
  }
  public resetMaxConnectionPools() {
    this._maxConnectionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionPoolsInput() {
    return this._maxConnectionPools;
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
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentage {
  /**
  * The minimum number of hosts in a cluster in order to perform failure percentage-based ejection. If the total number of hosts in the cluster is less than this value, failure percentage-based ejection will not be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#minimum_hosts DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#minimum_hosts}
  */
  readonly minimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to perform failure percentage-based ejection for this host. If the volume is lower than this setting, failure percentage-based ejection will not be performed for this host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#request_volume DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#request_volume}
  */
  readonly requestVolume?: number;
  /**
  * The failure percentage to use when determining failure percentage-based outlier detection. If the failure percentage of a given host is greater than or equal to this value, it will be ejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#threshold DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#threshold}
  */
  readonly threshold?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentageToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_hosts: cdktf.numberToTerraform(struct!.minimumHosts),
    request_volume: cdktf.numberToTerraform(struct!.requestVolume),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentageToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_hosts: {
      value: cdktf.numberToHclTerraform(struct!.minimumHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_volume: {
      value: cdktf.numberToHclTerraform(struct!.requestVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHosts = this._minimumHosts;
    }
    if (this._requestVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestVolume = this._requestVolume;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumHosts = undefined;
      this._requestVolume = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumHosts = value.minimumHosts;
      this._requestVolume = value.requestVolume;
      this._threshold = value.threshold;
    }
  }

  // minimum_hosts - computed: false, optional: true, required: false
  private _minimumHosts?: number; 
  public get minimumHosts() {
    return this.getNumberAttribute('minimum_hosts');
  }
  public set minimumHosts(value: number) {
    this._minimumHosts = value;
  }
  public resetMinimumHosts() {
    this._minimumHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHostsInput() {
    return this._minimumHosts;
  }

  // request_volume - computed: false, optional: true, required: false
  private _requestVolume?: number; 
  public get requestVolume() {
    return this.getNumberAttribute('request_volume');
  }
  public set requestVolume(value: number) {
    this._requestVolume = value;
  }
  public resetRequestVolume() {
    this._requestVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestVolumeInput() {
    return this._requestVolume;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailures {
  /**
  * The number of consecutive gateway failures (502, 503, 504 status codes) before a consecutive gateway failure ejection occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#consecutive DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#consecutive}
  */
  readonly consecutive?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailuresToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive: cdktf.numberToTerraform(struct!.consecutive),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailuresToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive: {
      value: cdktf.numberToHclTerraform(struct!.consecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive = this._consecutive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutive = value.consecutive;
    }
  }

  // consecutive - computed: false, optional: true, required: false
  private _consecutive?: number; 
  public get consecutive() {
    return this.getNumberAttribute('consecutive');
  }
  public set consecutive(value: number) {
    this._consecutive = value;
  }
  public resetConsecutive() {
    this._consecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveInput() {
    return this._consecutive;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailures {
  /**
  * The number of consecutive locally originated failures before ejection occurs. Parameter takes effect only when splitExternalAndLocalErrors is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#consecutive DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#consecutive}
  */
  readonly consecutive?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailuresToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive: cdktf.numberToTerraform(struct!.consecutive),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailuresToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive: {
      value: cdktf.numberToHclTerraform(struct!.consecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive = this._consecutive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutive = value.consecutive;
    }
  }

  // consecutive - computed: false, optional: true, required: false
  private _consecutive?: number; 
  public get consecutive() {
    return this.getNumberAttribute('consecutive');
  }
  public set consecutive(value: number) {
    this._consecutive = value;
  }
  public resetConsecutive() {
    this._consecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveInput() {
    return this._consecutive;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRate {
  /**
  * The number of hosts in a cluster that must have enough request volume to detect success rate outliers. If the number of hosts is less than this setting, outlier detection via success rate statistics is not performed for any host in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#minimum_hosts DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#minimum_hosts}
  */
  readonly minimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as defined by the interval duration configured in outlierDetection section) to include this host in success rate based outlier detection. If the volume is lower than this setting, outlier detection via success rate statistics is not performed for that host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#request_volume DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#request_volume}
  */
  readonly requestVolume?: number;
  /**
  * This factor is used to determine the ejection threshold for success rate outlier ejection. The ejection threshold is the difference between the mean success rate, and the product of this factor and the standard deviation of the mean success rate: mean - (standard_deviation * success_rate_standard_deviation_factor). Either int or decimal represented as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#standard_deviation_factor DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#standard_deviation_factor}
  */
  readonly standardDeviationFactor?: string;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRateToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_hosts: cdktf.numberToTerraform(struct!.minimumHosts),
    request_volume: cdktf.numberToTerraform(struct!.requestVolume),
    standard_deviation_factor: cdktf.stringToTerraform(struct!.standardDeviationFactor),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRateToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_hosts: {
      value: cdktf.numberToHclTerraform(struct!.minimumHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_volume: {
      value: cdktf.numberToHclTerraform(struct!.requestVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standard_deviation_factor: {
      value: cdktf.stringToHclTerraform(struct!.standardDeviationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHosts = this._minimumHosts;
    }
    if (this._requestVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestVolume = this._requestVolume;
    }
    if (this._standardDeviationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardDeviationFactor = this._standardDeviationFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumHosts = undefined;
      this._requestVolume = undefined;
      this._standardDeviationFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumHosts = value.minimumHosts;
      this._requestVolume = value.requestVolume;
      this._standardDeviationFactor = value.standardDeviationFactor;
    }
  }

  // minimum_hosts - computed: false, optional: true, required: false
  private _minimumHosts?: number; 
  public get minimumHosts() {
    return this.getNumberAttribute('minimum_hosts');
  }
  public set minimumHosts(value: number) {
    this._minimumHosts = value;
  }
  public resetMinimumHosts() {
    this._minimumHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHostsInput() {
    return this._minimumHosts;
  }

  // request_volume - computed: false, optional: true, required: false
  private _requestVolume?: number; 
  public get requestVolume() {
    return this.getNumberAttribute('request_volume');
  }
  public set requestVolume(value: number) {
    this._requestVolume = value;
  }
  public resetRequestVolume() {
    this._requestVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestVolumeInput() {
    return this._requestVolume;
  }

  // standard_deviation_factor - computed: false, optional: true, required: false
  private _standardDeviationFactor?: string; 
  public get standardDeviationFactor() {
    return this.getStringAttribute('standard_deviation_factor');
  }
  public set standardDeviationFactor(value: string) {
    this._standardDeviationFactor = value;
  }
  public resetStandardDeviationFactor() {
    this._standardDeviationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardDeviationFactorInput() {
    return this._standardDeviationFactor;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailures {
  /**
  * The number of consecutive server-side error responses (for HTTP traffic, 5xx responses; for TCP traffic, connection failures; for Redis, failure to respond PONG; etc.) before a consecutive total failure ejection occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#consecutive DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#consecutive}
  */
  readonly consecutive?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailuresToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive: cdktf.numberToTerraform(struct!.consecutive),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailuresToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive: {
      value: cdktf.numberToHclTerraform(struct!.consecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive = this._consecutive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutive = value.consecutive;
    }
  }

  // consecutive - computed: false, optional: true, required: false
  private _consecutive?: number; 
  public get consecutive() {
    return this.getNumberAttribute('consecutive');
  }
  public set consecutive(value: number) {
    this._consecutive = value;
  }
  public resetConsecutive() {
    this._consecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveInput() {
    return this._consecutive;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectors {
  /**
  * Failure Percentage based outlier detection functions similarly to success rate detection, in that it relies on success rate data from each host in a cluster. However, rather than compare those values to the mean success rate of the cluster as a whole, they are compared to a flat user-configured threshold. This threshold is configured via the outlierDetection.failurePercentageThreshold field. The other configuration fields for failure percentage based detection are similar to the fields for success rate detection. As with success rate detection, detection will not be performed for a host if its request volume over the aggregation interval is less than the outlierDetection.detectors.failurePercentage.requestVolume value. Detection also will not be performed for a cluster if the number of hosts with the minimum required request volume in an interval is less than the outlierDetection.detectors.failurePercentage.minimumHosts value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#failure_percentage DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#failure_percentage}
  */
  readonly failurePercentage?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentage;
  /**
  * In the default mode (outlierDetection.splitExternalLocalOriginErrors is false) this detection type takes into account a subset of 5xx errors, called 'gateway errors' (502, 503 or 504 status code) and local origin failures, such as timeout, TCP reset etc. In split mode (outlierDetection.splitExternalLocalOriginErrors is true) this detection type takes into account a subset of 5xx errors, called 'gateway errors' (502, 503 or 504 status code) and is supported only by the http router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#gateway_failures DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#gateway_failures}
  */
  readonly gatewayFailures?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailures;
  /**
  * This detection type is enabled only when outlierDetection.splitExternalLocalOriginErrors is true and takes into account only locally originated errors (timeout, reset, etc). If Envoy repeatedly cannot connect to an upstream host or communication with the upstream host is repeatedly interrupted, it will be ejected. Various locally originated problems are detected: timeout, TCP reset, ICMP errors, etc. This detection type is supported by http router and tcp proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#local_origin_failures DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#local_origin_failures}
  */
  readonly localOriginFailures?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailures;
  /**
  * Success Rate based outlier detection aggregates success rate data from every host in a cluster. Then at given intervals ejects hosts based on statistical outlier detection. Success Rate outlier detection will not be calculated for a host if its request volume over the aggregation interval is less than the outlierDetection.detectors.successRate.requestVolume value. Moreover, detection will not be performed for a cluster if the number of hosts with the minimum required request volume in an interval is less than the outlierDetection.detectors.successRate.minimumHosts value. In the default configuration mode (outlierDetection.splitExternalLocalOriginErrors is false) this detection type takes into account all types of errors: locally and externally originated. In split mode (outlierDetection.splitExternalLocalOriginErrors is true), locally originated errors and externally originated (transaction) errors are counted and treated separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#success_rate DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#success_rate}
  */
  readonly successRate?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRate;
  /**
  * In the default mode (outlierDetection.splitExternalAndLocalErrors is false) this detection type takes into account all generated errors: locally originated and externally originated (transaction) errors. In split mode (outlierDetection.splitExternalLocalOriginErrors is true) this detection type takes into account only externally originated (transaction) errors, ignoring locally originated errors. If an upstream host is an HTTP-server, only 5xx types of error are taken into account (see Consecutive Gateway Failure for exceptions). Properly formatted responses, even when they carry an operational error (like index not found, access denied) are not taken into account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#total_failures DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#total_failures}
  */
  readonly totalFailures?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailures;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_percentage: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentageToTerraform(struct!.failurePercentage),
    gateway_failures: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailuresToTerraform(struct!.gatewayFailures),
    local_origin_failures: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailuresToTerraform(struct!.localOriginFailures),
    success_rate: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRateToTerraform(struct!.successRate),
    total_failures: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailuresToTerraform(struct!.totalFailures),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_percentage: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentageToHclTerraform(struct!.failurePercentage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentage",
    },
    gateway_failures: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailuresToHclTerraform(struct!.gatewayFailures),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailures",
    },
    local_origin_failures: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailuresToHclTerraform(struct!.localOriginFailures),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailures",
    },
    success_rate: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRateToHclTerraform(struct!.successRate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRate",
    },
    total_failures: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailuresToHclTerraform(struct!.totalFailures),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailures",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failurePercentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePercentage = this._failurePercentage?.internalValue;
    }
    if (this._gatewayFailures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayFailures = this._gatewayFailures?.internalValue;
    }
    if (this._localOriginFailures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOriginFailures = this._localOriginFailures?.internalValue;
    }
    if (this._successRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successRate = this._successRate?.internalValue;
    }
    if (this._totalFailures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFailures = this._totalFailures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failurePercentage.internalValue = undefined;
      this._gatewayFailures.internalValue = undefined;
      this._localOriginFailures.internalValue = undefined;
      this._successRate.internalValue = undefined;
      this._totalFailures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failurePercentage.internalValue = value.failurePercentage;
      this._gatewayFailures.internalValue = value.gatewayFailures;
      this._localOriginFailures.internalValue = value.localOriginFailures;
      this._successRate.internalValue = value.successRate;
      this._totalFailures.internalValue = value.totalFailures;
    }
  }

  // failure_percentage - computed: false, optional: true, required: false
  private _failurePercentage = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentageOutputReference(this, "failure_percentage");
  public get failurePercentage() {
    return this._failurePercentage;
  }
  public putFailurePercentage(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsFailurePercentage) {
    this._failurePercentage.internalValue = value;
  }
  public resetFailurePercentage() {
    this._failurePercentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePercentageInput() {
    return this._failurePercentage.internalValue;
  }

  // gateway_failures - computed: false, optional: true, required: false
  private _gatewayFailures = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailuresOutputReference(this, "gateway_failures");
  public get gatewayFailures() {
    return this._gatewayFailures;
  }
  public putGatewayFailures(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsGatewayFailures) {
    this._gatewayFailures.internalValue = value;
  }
  public resetGatewayFailures() {
    this._gatewayFailures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayFailuresInput() {
    return this._gatewayFailures.internalValue;
  }

  // local_origin_failures - computed: false, optional: true, required: false
  private _localOriginFailures = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailuresOutputReference(this, "local_origin_failures");
  public get localOriginFailures() {
    return this._localOriginFailures;
  }
  public putLocalOriginFailures(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsLocalOriginFailures) {
    this._localOriginFailures.internalValue = value;
  }
  public resetLocalOriginFailures() {
    this._localOriginFailures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOriginFailuresInput() {
    return this._localOriginFailures.internalValue;
  }

  // success_rate - computed: false, optional: true, required: false
  private _successRate = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRateOutputReference(this, "success_rate");
  public get successRate() {
    return this._successRate;
  }
  public putSuccessRate(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsSuccessRate) {
    this._successRate.internalValue = value;
  }
  public resetSuccessRate() {
    this._successRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateInput() {
    return this._successRate.internalValue;
  }

  // total_failures - computed: false, optional: true, required: false
  private _totalFailures = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailuresOutputReference(this, "total_failures");
  public get totalFailures() {
    return this._totalFailures;
  }
  public putTotalFailures(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsTotalFailures) {
    this._totalFailures.internalValue = value;
  }
  public resetTotalFailures() {
    this._totalFailures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFailuresInput() {
    return this._totalFailures.internalValue;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetection {
  /**
  * The base time that a host is ejected for. The real time is equal to the base time multiplied by the number of times the host has been ejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#base_ejection_time DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Contains configuration for supported outlier detectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#detectors DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#detectors}
  */
  readonly detectors?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectors;
  /**
  * When set to true, outlierDetection configuration won't take any effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#disabled DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The time interval between ejection analysis sweeps. This can result in both new ejections and hosts being returned to service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#interval DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * The maximum % of an upstream cluster that can be ejected due to outlier detection. Defaults to 10% but will eject at least one host regardless of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_ejection_percent DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Determines whether to distinguish local origin failures from external errors. If set to true the following configuration parameters are taken into account: detectors.localOriginFailures.consecutive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#split_external_and_local_errors DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#split_external_and_local_errors}
  */
  readonly splitExternalAndLocalErrors?: boolean | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    detectors: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsToTerraform(struct!.detectors),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    split_external_and_local_errors: cdktf.booleanToTerraform(struct!.splitExternalAndLocalErrors),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.stringToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detectors: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsToHclTerraform(struct!.detectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectors",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_external_and_local_errors: {
      value: cdktf.booleanToHclTerraform(struct!.splitExternalAndLocalErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._detectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectors = this._detectors?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._splitExternalAndLocalErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitExternalAndLocalErrors = this._splitExternalAndLocalErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._detectors.internalValue = undefined;
      this._disabled = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._splitExternalAndLocalErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._detectors.internalValue = value.detectors;
      this._disabled = value.disabled;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._splitExternalAndLocalErrors = value.splitExternalAndLocalErrors;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // detectors - computed: false, optional: true, required: false
  private _detectors = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectorsOutputReference(this, "detectors");
  public get detectors() {
    return this._detectors;
  }
  public putDetectors(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionDetectors) {
    this._detectors.internalValue = value;
  }
  public resetDetectors() {
    this._detectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorsInput() {
    return this._detectors.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // split_external_and_local_errors - computed: false, optional: true, required: false
  private _splitExternalAndLocalErrors?: boolean | cdktf.IResolvable; 
  public get splitExternalAndLocalErrors() {
    return this.getBooleanAttribute('split_external_and_local_errors');
  }
  public set splitExternalAndLocalErrors(value: boolean | cdktf.IResolvable) {
    this._splitExternalAndLocalErrors = value;
  }
  public resetSplitExternalAndLocalErrors() {
    this._splitExternalAndLocalErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitExternalAndLocalErrorsInput() {
    return this._splitExternalAndLocalErrors;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefault {
  /**
  * ConnectionLimits contains configuration of each circuit breaking limit, which when exceeded makes the circuit breaker to become open (no traffic is allowed like no current is allowed in the circuits when physical circuit breaker ir open)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#connection_limits DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#connection_limits}
  */
  readonly connectionLimits?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimits;
  /**
  * OutlierDetection contains the configuration of the process of dynamically determining whether some number of hosts in an upstream cluster are performing unlike the others and removing them from the healthy load balancing set. Performance might be along different axes such as consecutive failures, temporal success rate, temporal latency, etc. Outlier detection is a form of passive health checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#outlier_detection DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetection;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_limits: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimitsToTerraform(struct!.connectionLimits),
    outlier_detection: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionToTerraform(struct!.outlierDetection),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_limits: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimitsToHclTerraform(struct!.connectionLimits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimits",
    },
    outlier_detection: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimits = this._connectionLimits?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionLimits.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionLimits.internalValue = value.connectionLimits;
      this._outlierDetection.internalValue = value.outlierDetection;
    }
  }

  // connection_limits - computed: false, optional: true, required: false
  private _connectionLimits = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimitsOutputReference(this, "connection_limits");
  public get connectionLimits() {
    return this._connectionLimits;
  }
  public putConnectionLimits(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultConnectionLimits) {
    this._connectionLimits.internalValue = value;
  }
  public resetConnectionLimits() {
    this._connectionLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitsInput() {
    return this._connectionLimits.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#kind DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#labels DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#mesh DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#name DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#namespace DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#section_name DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#tags DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRefToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFrom {
  /**
  * Default is a configuration specific to the group of destinations referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#default DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#target_ref DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRef;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFrom | cdktf.IResolvable | undefined) {
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
  private _default = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromOutputReference {
    return new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#kind DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#labels DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#mesh DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#name DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#namespace DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#section_name DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#tags DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimits {
  /**
  * The maximum number of connection pools per cluster that are concurrently supported at once. Set this for clusters which create a large number of connection pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_connection_pools DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_connection_pools}
  */
  readonly maxConnectionPools?: number;
  /**
  * The maximum number of connections allowed to be made to the upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_connections DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests that are allowed to the upstream cluster. This limit is applied as a connection limit for non-HTTP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_pending_requests DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum number of parallel requests that are allowed to be made to the upstream cluster. This limit does not apply to non-HTTP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_requests DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * The maximum number of parallel retries that will be allowed to the upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_retries DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_retries}
  */
  readonly maxRetries?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimitsToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connection_pools: cdktf.numberToTerraform(struct!.maxConnectionPools),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimitsToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connection_pools: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionPools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnectionPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionPools = this._maxConnectionPools;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnectionPools = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRetries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnectionPools = value.maxConnectionPools;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRetries = value.maxRetries;
    }
  }

  // max_connection_pools - computed: false, optional: true, required: false
  private _maxConnectionPools?: number; 
  public get maxConnectionPools() {
    return this.getNumberAttribute('max_connection_pools');
  }
  public set maxConnectionPools(value: number) {
    this._maxConnectionPools = value;
  }
  public resetMaxConnectionPools() {
    this._maxConnectionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionPoolsInput() {
    return this._maxConnectionPools;
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
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentage {
  /**
  * The minimum number of hosts in a cluster in order to perform failure percentage-based ejection. If the total number of hosts in the cluster is less than this value, failure percentage-based ejection will not be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#minimum_hosts DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#minimum_hosts}
  */
  readonly minimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to perform failure percentage-based ejection for this host. If the volume is lower than this setting, failure percentage-based ejection will not be performed for this host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#request_volume DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#request_volume}
  */
  readonly requestVolume?: number;
  /**
  * The failure percentage to use when determining failure percentage-based outlier detection. If the failure percentage of a given host is greater than or equal to this value, it will be ejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#threshold DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#threshold}
  */
  readonly threshold?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentageToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_hosts: cdktf.numberToTerraform(struct!.minimumHosts),
    request_volume: cdktf.numberToTerraform(struct!.requestVolume),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentageToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_hosts: {
      value: cdktf.numberToHclTerraform(struct!.minimumHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_volume: {
      value: cdktf.numberToHclTerraform(struct!.requestVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHosts = this._minimumHosts;
    }
    if (this._requestVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestVolume = this._requestVolume;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumHosts = undefined;
      this._requestVolume = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumHosts = value.minimumHosts;
      this._requestVolume = value.requestVolume;
      this._threshold = value.threshold;
    }
  }

  // minimum_hosts - computed: false, optional: true, required: false
  private _minimumHosts?: number; 
  public get minimumHosts() {
    return this.getNumberAttribute('minimum_hosts');
  }
  public set minimumHosts(value: number) {
    this._minimumHosts = value;
  }
  public resetMinimumHosts() {
    this._minimumHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHostsInput() {
    return this._minimumHosts;
  }

  // request_volume - computed: false, optional: true, required: false
  private _requestVolume?: number; 
  public get requestVolume() {
    return this.getNumberAttribute('request_volume');
  }
  public set requestVolume(value: number) {
    this._requestVolume = value;
  }
  public resetRequestVolume() {
    this._requestVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestVolumeInput() {
    return this._requestVolume;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailures {
  /**
  * The number of consecutive gateway failures (502, 503, 504 status codes) before a consecutive gateway failure ejection occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#consecutive DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#consecutive}
  */
  readonly consecutive?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailuresToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive: cdktf.numberToTerraform(struct!.consecutive),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailuresToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive: {
      value: cdktf.numberToHclTerraform(struct!.consecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive = this._consecutive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutive = value.consecutive;
    }
  }

  // consecutive - computed: false, optional: true, required: false
  private _consecutive?: number; 
  public get consecutive() {
    return this.getNumberAttribute('consecutive');
  }
  public set consecutive(value: number) {
    this._consecutive = value;
  }
  public resetConsecutive() {
    this._consecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveInput() {
    return this._consecutive;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailures {
  /**
  * The number of consecutive locally originated failures before ejection occurs. Parameter takes effect only when splitExternalAndLocalErrors is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#consecutive DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#consecutive}
  */
  readonly consecutive?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailuresToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive: cdktf.numberToTerraform(struct!.consecutive),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailuresToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive: {
      value: cdktf.numberToHclTerraform(struct!.consecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive = this._consecutive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutive = value.consecutive;
    }
  }

  // consecutive - computed: false, optional: true, required: false
  private _consecutive?: number; 
  public get consecutive() {
    return this.getNumberAttribute('consecutive');
  }
  public set consecutive(value: number) {
    this._consecutive = value;
  }
  public resetConsecutive() {
    this._consecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveInput() {
    return this._consecutive;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRate {
  /**
  * The number of hosts in a cluster that must have enough request volume to detect success rate outliers. If the number of hosts is less than this setting, outlier detection via success rate statistics is not performed for any host in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#minimum_hosts DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#minimum_hosts}
  */
  readonly minimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as defined by the interval duration configured in outlierDetection section) to include this host in success rate based outlier detection. If the volume is lower than this setting, outlier detection via success rate statistics is not performed for that host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#request_volume DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#request_volume}
  */
  readonly requestVolume?: number;
  /**
  * This factor is used to determine the ejection threshold for success rate outlier ejection. The ejection threshold is the difference between the mean success rate, and the product of this factor and the standard deviation of the mean success rate: mean - (standard_deviation * success_rate_standard_deviation_factor). Either int or decimal represented as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#standard_deviation_factor DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#standard_deviation_factor}
  */
  readonly standardDeviationFactor?: string;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRateToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_hosts: cdktf.numberToTerraform(struct!.minimumHosts),
    request_volume: cdktf.numberToTerraform(struct!.requestVolume),
    standard_deviation_factor: cdktf.stringToTerraform(struct!.standardDeviationFactor),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRateToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_hosts: {
      value: cdktf.numberToHclTerraform(struct!.minimumHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_volume: {
      value: cdktf.numberToHclTerraform(struct!.requestVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standard_deviation_factor: {
      value: cdktf.stringToHclTerraform(struct!.standardDeviationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHosts = this._minimumHosts;
    }
    if (this._requestVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestVolume = this._requestVolume;
    }
    if (this._standardDeviationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardDeviationFactor = this._standardDeviationFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumHosts = undefined;
      this._requestVolume = undefined;
      this._standardDeviationFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumHosts = value.minimumHosts;
      this._requestVolume = value.requestVolume;
      this._standardDeviationFactor = value.standardDeviationFactor;
    }
  }

  // minimum_hosts - computed: false, optional: true, required: false
  private _minimumHosts?: number; 
  public get minimumHosts() {
    return this.getNumberAttribute('minimum_hosts');
  }
  public set minimumHosts(value: number) {
    this._minimumHosts = value;
  }
  public resetMinimumHosts() {
    this._minimumHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHostsInput() {
    return this._minimumHosts;
  }

  // request_volume - computed: false, optional: true, required: false
  private _requestVolume?: number; 
  public get requestVolume() {
    return this.getNumberAttribute('request_volume');
  }
  public set requestVolume(value: number) {
    this._requestVolume = value;
  }
  public resetRequestVolume() {
    this._requestVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestVolumeInput() {
    return this._requestVolume;
  }

  // standard_deviation_factor - computed: false, optional: true, required: false
  private _standardDeviationFactor?: string; 
  public get standardDeviationFactor() {
    return this.getStringAttribute('standard_deviation_factor');
  }
  public set standardDeviationFactor(value: string) {
    this._standardDeviationFactor = value;
  }
  public resetStandardDeviationFactor() {
    this._standardDeviationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardDeviationFactorInput() {
    return this._standardDeviationFactor;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailures {
  /**
  * The number of consecutive server-side error responses (for HTTP traffic, 5xx responses; for TCP traffic, connection failures; for Redis, failure to respond PONG; etc.) before a consecutive total failure ejection occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#consecutive DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#consecutive}
  */
  readonly consecutive?: number;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailuresToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive: cdktf.numberToTerraform(struct!.consecutive),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailuresToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive: {
      value: cdktf.numberToHclTerraform(struct!.consecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive = this._consecutive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutive = value.consecutive;
    }
  }

  // consecutive - computed: false, optional: true, required: false
  private _consecutive?: number; 
  public get consecutive() {
    return this.getNumberAttribute('consecutive');
  }
  public set consecutive(value: number) {
    this._consecutive = value;
  }
  public resetConsecutive() {
    this._consecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveInput() {
    return this._consecutive;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectors {
  /**
  * Failure Percentage based outlier detection functions similarly to success rate detection, in that it relies on success rate data from each host in a cluster. However, rather than compare those values to the mean success rate of the cluster as a whole, they are compared to a flat user-configured threshold. This threshold is configured via the outlierDetection.failurePercentageThreshold field. The other configuration fields for failure percentage based detection are similar to the fields for success rate detection. As with success rate detection, detection will not be performed for a host if its request volume over the aggregation interval is less than the outlierDetection.detectors.failurePercentage.requestVolume value. Detection also will not be performed for a cluster if the number of hosts with the minimum required request volume in an interval is less than the outlierDetection.detectors.failurePercentage.minimumHosts value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#failure_percentage DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#failure_percentage}
  */
  readonly failurePercentage?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentage;
  /**
  * In the default mode (outlierDetection.splitExternalLocalOriginErrors is false) this detection type takes into account a subset of 5xx errors, called 'gateway errors' (502, 503 or 504 status code) and local origin failures, such as timeout, TCP reset etc. In split mode (outlierDetection.splitExternalLocalOriginErrors is true) this detection type takes into account a subset of 5xx errors, called 'gateway errors' (502, 503 or 504 status code) and is supported only by the http router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#gateway_failures DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#gateway_failures}
  */
  readonly gatewayFailures?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailures;
  /**
  * This detection type is enabled only when outlierDetection.splitExternalLocalOriginErrors is true and takes into account only locally originated errors (timeout, reset, etc). If Envoy repeatedly cannot connect to an upstream host or communication with the upstream host is repeatedly interrupted, it will be ejected. Various locally originated problems are detected: timeout, TCP reset, ICMP errors, etc. This detection type is supported by http router and tcp proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#local_origin_failures DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#local_origin_failures}
  */
  readonly localOriginFailures?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailures;
  /**
  * Success Rate based outlier detection aggregates success rate data from every host in a cluster. Then at given intervals ejects hosts based on statistical outlier detection. Success Rate outlier detection will not be calculated for a host if its request volume over the aggregation interval is less than the outlierDetection.detectors.successRate.requestVolume value. Moreover, detection will not be performed for a cluster if the number of hosts with the minimum required request volume in an interval is less than the outlierDetection.detectors.successRate.minimumHosts value. In the default configuration mode (outlierDetection.splitExternalLocalOriginErrors is false) this detection type takes into account all types of errors: locally and externally originated. In split mode (outlierDetection.splitExternalLocalOriginErrors is true), locally originated errors and externally originated (transaction) errors are counted and treated separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#success_rate DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#success_rate}
  */
  readonly successRate?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRate;
  /**
  * In the default mode (outlierDetection.splitExternalAndLocalErrors is false) this detection type takes into account all generated errors: locally originated and externally originated (transaction) errors. In split mode (outlierDetection.splitExternalLocalOriginErrors is true) this detection type takes into account only externally originated (transaction) errors, ignoring locally originated errors. If an upstream host is an HTTP-server, only 5xx types of error are taken into account (see Consecutive Gateway Failure for exceptions). Properly formatted responses, even when they carry an operational error (like index not found, access denied) are not taken into account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#total_failures DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#total_failures}
  */
  readonly totalFailures?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailures;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_percentage: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentageToTerraform(struct!.failurePercentage),
    gateway_failures: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailuresToTerraform(struct!.gatewayFailures),
    local_origin_failures: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailuresToTerraform(struct!.localOriginFailures),
    success_rate: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRateToTerraform(struct!.successRate),
    total_failures: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailuresToTerraform(struct!.totalFailures),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_percentage: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentageToHclTerraform(struct!.failurePercentage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentage",
    },
    gateway_failures: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailuresToHclTerraform(struct!.gatewayFailures),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailures",
    },
    local_origin_failures: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailuresToHclTerraform(struct!.localOriginFailures),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailures",
    },
    success_rate: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRateToHclTerraform(struct!.successRate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRate",
    },
    total_failures: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailuresToHclTerraform(struct!.totalFailures),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailures",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failurePercentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePercentage = this._failurePercentage?.internalValue;
    }
    if (this._gatewayFailures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayFailures = this._gatewayFailures?.internalValue;
    }
    if (this._localOriginFailures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOriginFailures = this._localOriginFailures?.internalValue;
    }
    if (this._successRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successRate = this._successRate?.internalValue;
    }
    if (this._totalFailures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFailures = this._totalFailures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failurePercentage.internalValue = undefined;
      this._gatewayFailures.internalValue = undefined;
      this._localOriginFailures.internalValue = undefined;
      this._successRate.internalValue = undefined;
      this._totalFailures.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failurePercentage.internalValue = value.failurePercentage;
      this._gatewayFailures.internalValue = value.gatewayFailures;
      this._localOriginFailures.internalValue = value.localOriginFailures;
      this._successRate.internalValue = value.successRate;
      this._totalFailures.internalValue = value.totalFailures;
    }
  }

  // failure_percentage - computed: false, optional: true, required: false
  private _failurePercentage = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentageOutputReference(this, "failure_percentage");
  public get failurePercentage() {
    return this._failurePercentage;
  }
  public putFailurePercentage(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsFailurePercentage) {
    this._failurePercentage.internalValue = value;
  }
  public resetFailurePercentage() {
    this._failurePercentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePercentageInput() {
    return this._failurePercentage.internalValue;
  }

  // gateway_failures - computed: false, optional: true, required: false
  private _gatewayFailures = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailuresOutputReference(this, "gateway_failures");
  public get gatewayFailures() {
    return this._gatewayFailures;
  }
  public putGatewayFailures(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsGatewayFailures) {
    this._gatewayFailures.internalValue = value;
  }
  public resetGatewayFailures() {
    this._gatewayFailures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayFailuresInput() {
    return this._gatewayFailures.internalValue;
  }

  // local_origin_failures - computed: false, optional: true, required: false
  private _localOriginFailures = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailuresOutputReference(this, "local_origin_failures");
  public get localOriginFailures() {
    return this._localOriginFailures;
  }
  public putLocalOriginFailures(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsLocalOriginFailures) {
    this._localOriginFailures.internalValue = value;
  }
  public resetLocalOriginFailures() {
    this._localOriginFailures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOriginFailuresInput() {
    return this._localOriginFailures.internalValue;
  }

  // success_rate - computed: false, optional: true, required: false
  private _successRate = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRateOutputReference(this, "success_rate");
  public get successRate() {
    return this._successRate;
  }
  public putSuccessRate(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsSuccessRate) {
    this._successRate.internalValue = value;
  }
  public resetSuccessRate() {
    this._successRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateInput() {
    return this._successRate.internalValue;
  }

  // total_failures - computed: false, optional: true, required: false
  private _totalFailures = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailuresOutputReference(this, "total_failures");
  public get totalFailures() {
    return this._totalFailures;
  }
  public putTotalFailures(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsTotalFailures) {
    this._totalFailures.internalValue = value;
  }
  public resetTotalFailures() {
    this._totalFailures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFailuresInput() {
    return this._totalFailures.internalValue;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetection {
  /**
  * The base time that a host is ejected for. The real time is equal to the base time multiplied by the number of times the host has been ejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#base_ejection_time DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Contains configuration for supported outlier detectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#detectors DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#detectors}
  */
  readonly detectors?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectors;
  /**
  * When set to true, outlierDetection configuration won't take any effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#disabled DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The time interval between ejection analysis sweeps. This can result in both new ejections and hosts being returned to service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#interval DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * The maximum % of an upstream cluster that can be ejected due to outlier detection. Defaults to 10% but will eject at least one host regardless of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#max_ejection_percent DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Determines whether to distinguish local origin failures from external errors. If set to true the following configuration parameters are taken into account: detectors.localOriginFailures.consecutive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#split_external_and_local_errors DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#split_external_and_local_errors}
  */
  readonly splitExternalAndLocalErrors?: boolean | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    detectors: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsToTerraform(struct!.detectors),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    split_external_and_local_errors: cdktf.booleanToTerraform(struct!.splitExternalAndLocalErrors),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.stringToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detectors: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsToHclTerraform(struct!.detectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectors",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_external_and_local_errors: {
      value: cdktf.booleanToHclTerraform(struct!.splitExternalAndLocalErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._detectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectors = this._detectors?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._splitExternalAndLocalErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitExternalAndLocalErrors = this._splitExternalAndLocalErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._detectors.internalValue = undefined;
      this._disabled = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._splitExternalAndLocalErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._detectors.internalValue = value.detectors;
      this._disabled = value.disabled;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._splitExternalAndLocalErrors = value.splitExternalAndLocalErrors;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // detectors - computed: false, optional: true, required: false
  private _detectors = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectorsOutputReference(this, "detectors");
  public get detectors() {
    return this._detectors;
  }
  public putDetectors(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionDetectors) {
    this._detectors.internalValue = value;
  }
  public resetDetectors() {
    this._detectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorsInput() {
    return this._detectors.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // split_external_and_local_errors - computed: false, optional: true, required: false
  private _splitExternalAndLocalErrors?: boolean | cdktf.IResolvable; 
  public get splitExternalAndLocalErrors() {
    return this.getBooleanAttribute('split_external_and_local_errors');
  }
  public set splitExternalAndLocalErrors(value: boolean | cdktf.IResolvable) {
    this._splitExternalAndLocalErrors = value;
  }
  public resetSplitExternalAndLocalErrors() {
    this._splitExternalAndLocalErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitExternalAndLocalErrorsInput() {
    return this._splitExternalAndLocalErrors;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefault {
  /**
  * ConnectionLimits contains configuration of each circuit breaking limit, which when exceeded makes the circuit breaker to become open (no traffic is allowed like no current is allowed in the circuits when physical circuit breaker ir open)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#connection_limits DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#connection_limits}
  */
  readonly connectionLimits?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimits;
  /**
  * OutlierDetection contains the configuration of the process of dynamically determining whether some number of hosts in an upstream cluster are performing unlike the others and removing them from the healthy load balancing set. Performance might be along different axes such as consecutive failures, temporal success rate, temporal latency, etc. Outlier detection is a form of passive health checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#outlier_detection DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetection;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_limits: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimitsToTerraform(struct!.connectionLimits),
    outlier_detection: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionToTerraform(struct!.outlierDetection),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_limits: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimitsToHclTerraform(struct!.connectionLimits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimits",
    },
    outlier_detection: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimits = this._connectionLimits?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionLimits.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionLimits.internalValue = value.connectionLimits;
      this._outlierDetection.internalValue = value.outlierDetection;
    }
  }

  // connection_limits - computed: false, optional: true, required: false
  private _connectionLimits = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimitsOutputReference(this, "connection_limits");
  public get connectionLimits() {
    return this._connectionLimits;
  }
  public putConnectionLimits(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultConnectionLimits) {
    this._connectionLimits.internalValue = value;
  }
  public resetConnectionLimits() {
    this._connectionLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitsInput() {
    return this._connectionLimits.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#kind DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#labels DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#mesh DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#name DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#namespace DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#section_name DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#tags DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRefToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTo {
  /**
  * Default is a configuration specific to the group of destinations referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#default DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#target_ref DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRef;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined) {
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
  private _default = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToOutputReference {
    return new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpec {
  /**
  * From list makes a match between clients and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#from DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable;
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined in place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#target_ref DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRef;
  /**
  * To list makes a match between the consumed services and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#to DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromToTerraform, false)(struct!.from),
    target_ref: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    to: cdktf.listMapper(dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromList",
    },
    target_ref: {
      value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRef",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._targetRef.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._targetRef.internalValue = value.targetRef;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest k8s_kuma_io_mesh_circuit_breaker_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_circuit_breaker_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshCircuitBreakerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_circuit_breaker_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_circuit_breaker_v1alpha1_manifest k8s_kuma_io_mesh_circuit_breaker_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_circuit_breaker_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshCircuitBreakerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
