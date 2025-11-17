// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGetambassadorIoTcpMappingV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#metadata DataK8SGetambassadorIoTcpMappingV1Manifest#metadata}
  */
  readonly metadata: DataK8SGetambassadorIoTcpMappingV1ManifestMetadata;
  /**
  * TCPMappingSpec defines the desired state of TCPMapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#spec DataK8SGetambassadorIoTcpMappingV1Manifest#spec}
  */
  readonly spec?: DataK8SGetambassadorIoTcpMappingV1ManifestSpec;
}
export interface DataK8SGetambassadorIoTcpMappingV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#annotations DataK8SGetambassadorIoTcpMappingV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#labels DataK8SGetambassadorIoTcpMappingV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#name DataK8SGetambassadorIoTcpMappingV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#namespace DataK8SGetambassadorIoTcpMappingV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGetambassadorIoTcpMappingV1ManifestMetadataToTerraform(struct?: DataK8SGetambassadorIoTcpMappingV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGetambassadorIoTcpMappingV1ManifestMetadataToHclTerraform(struct?: DataK8SGetambassadorIoTcpMappingV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGetambassadorIoTcpMappingV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTcpMappingV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGetambassadorIoTcpMappingV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#max_connections DataK8SGetambassadorIoTcpMappingV1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#max_pending_requests DataK8SGetambassadorIoTcpMappingV1Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#max_requests DataK8SGetambassadorIoTcpMappingV1Manifest#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#max_retries DataK8SGetambassadorIoTcpMappingV1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#priority DataK8SGetambassadorIoTcpMappingV1Manifest#priority}
  */
  readonly priority?: string;
}

export function dataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersToTerraform(struct?: DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function dataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersToHclTerraform(struct?: DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakers | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakers | cdktf.IResolvable | undefined {
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
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRetries = undefined;
      this._priority = undefined;
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
      this._priority = value.priority;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersOutputReference {
    return new DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGetambassadorIoTcpMappingV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#address DataK8SGetambassadorIoTcpMappingV1Manifest#address}
  */
  readonly address?: string;
  /**
  * AmbassadorID declares which Ambassador instances should pay attention to this resource. May either be a string or a list of strings. If no value is provided, the default is: ambassador_id: - 'default'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#ambassador_id DataK8SGetambassadorIoTcpMappingV1Manifest#ambassador_id}
  */
  readonly ambassadorId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#circuit_breakers DataK8SGetambassadorIoTcpMappingV1Manifest#circuit_breakers}
  */
  readonly circuitBreakers?: DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#cluster_tag DataK8SGetambassadorIoTcpMappingV1Manifest#cluster_tag}
  */
  readonly clusterTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#enable_ipv4 DataK8SGetambassadorIoTcpMappingV1Manifest#enable_ipv4}
  */
  readonly enableIpv4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#enable_ipv6 DataK8SGetambassadorIoTcpMappingV1Manifest#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#host DataK8SGetambassadorIoTcpMappingV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#idle_timeout_ms DataK8SGetambassadorIoTcpMappingV1Manifest#idle_timeout_ms}
  */
  readonly idleTimeoutMs?: string;
  /**
  * Port isn't a pointer because it's required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#port DataK8SGetambassadorIoTcpMappingV1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#resolver DataK8SGetambassadorIoTcpMappingV1Manifest#resolver}
  */
  readonly resolver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#service DataK8SGetambassadorIoTcpMappingV1Manifest#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#tls DataK8SGetambassadorIoTcpMappingV1Manifest#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#v3_stats_name DataK8SGetambassadorIoTcpMappingV1Manifest#v3_stats_name}
  */
  readonly v3StatsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#weight DataK8SGetambassadorIoTcpMappingV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SGetambassadorIoTcpMappingV1ManifestSpecToTerraform(struct?: DataK8SGetambassadorIoTcpMappingV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ambassador_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ambassadorId),
    circuit_breakers: cdktf.listMapper(dataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersToTerraform, false)(struct!.circuitBreakers),
    cluster_tag: cdktf.stringToTerraform(struct!.clusterTag),
    enable_ipv4: cdktf.booleanToTerraform(struct!.enableIpv4),
    enable_ipv6: cdktf.booleanToTerraform(struct!.enableIpv6),
    host: cdktf.stringToTerraform(struct!.host),
    idle_timeout_ms: cdktf.stringToTerraform(struct!.idleTimeoutMs),
    port: cdktf.numberToTerraform(struct!.port),
    resolver: cdktf.stringToTerraform(struct!.resolver),
    service: cdktf.stringToTerraform(struct!.service),
    tls: cdktf.booleanToTerraform(struct!.tls),
    v3_stats_name: cdktf.stringToTerraform(struct!.v3StatsName),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGetambassadorIoTcpMappingV1ManifestSpecToHclTerraform(struct?: DataK8SGetambassadorIoTcpMappingV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ambassador_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ambassadorId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    circuit_breakers: {
      value: cdktf.listMapperHcl(dataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersToHclTerraform, false)(struct!.circuitBreakers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersList",
    },
    cluster_tag: {
      value: cdktf.stringToHclTerraform(struct!.clusterTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout_ms: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeoutMs),
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
    resolver: {
      value: cdktf.stringToHclTerraform(struct!.resolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    v3_stats_name: {
      value: cdktf.stringToHclTerraform(struct!.v3StatsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SGetambassadorIoTcpMappingV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGetambassadorIoTcpMappingV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._ambassadorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambassadorId = this._ambassadorId;
    }
    if (this._circuitBreakers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreakers = this._circuitBreakers?.internalValue;
    }
    if (this._clusterTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTag = this._clusterTag;
    }
    if (this._enableIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv4 = this._enableIpv4;
    }
    if (this._enableIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv6 = this._enableIpv6;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._idleTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutMs = this._idleTimeoutMs;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolver = this._resolver;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._v3StatsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3StatsName = this._v3StatsName;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGetambassadorIoTcpMappingV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._ambassadorId = undefined;
      this._circuitBreakers.internalValue = undefined;
      this._clusterTag = undefined;
      this._enableIpv4 = undefined;
      this._enableIpv6 = undefined;
      this._host = undefined;
      this._idleTimeoutMs = undefined;
      this._port = undefined;
      this._resolver = undefined;
      this._service = undefined;
      this._tls = undefined;
      this._v3StatsName = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._ambassadorId = value.ambassadorId;
      this._circuitBreakers.internalValue = value.circuitBreakers;
      this._clusterTag = value.clusterTag;
      this._enableIpv4 = value.enableIpv4;
      this._enableIpv6 = value.enableIpv6;
      this._host = value.host;
      this._idleTimeoutMs = value.idleTimeoutMs;
      this._port = value.port;
      this._resolver = value.resolver;
      this._service = value.service;
      this._tls = value.tls;
      this._v3StatsName = value.v3StatsName;
      this._weight = value.weight;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // circuit_breakers - computed: false, optional: true, required: false
  private _circuitBreakers = new DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakersList(this, "circuit_breakers", false);
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: DataK8SGetambassadorIoTcpMappingV1ManifestSpecCircuitBreakers[] | cdktf.IResolvable) {
    this._circuitBreakers.internalValue = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers.internalValue;
  }

  // cluster_tag - computed: false, optional: true, required: false
  private _clusterTag?: string; 
  public get clusterTag() {
    return this.getStringAttribute('cluster_tag');
  }
  public set clusterTag(value: string) {
    this._clusterTag = value;
  }
  public resetClusterTag() {
    this._clusterTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTagInput() {
    return this._clusterTag;
  }

  // enable_ipv4 - computed: false, optional: true, required: false
  private _enableIpv4?: boolean | cdktf.IResolvable; 
  public get enableIpv4() {
    return this.getBooleanAttribute('enable_ipv4');
  }
  public set enableIpv4(value: boolean | cdktf.IResolvable) {
    this._enableIpv4 = value;
  }
  public resetEnableIpv4() {
    this._enableIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4Input() {
    return this._enableIpv4;
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
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

  // idle_timeout_ms - computed: false, optional: true, required: false
  private _idleTimeoutMs?: string; 
  public get idleTimeoutMs() {
    return this.getStringAttribute('idle_timeout_ms');
  }
  public set idleTimeoutMs(value: string) {
    this._idleTimeoutMs = value;
  }
  public resetIdleTimeoutMs() {
    this._idleTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMsInput() {
    return this._idleTimeoutMs;
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

  // resolver - computed: false, optional: true, required: false
  private _resolver?: string; 
  public get resolver() {
    return this.getStringAttribute('resolver');
  }
  public set resolver(value: string) {
    this._resolver = value;
  }
  public resetResolver() {
    this._resolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverInput() {
    return this._resolver;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest k8s_getambassador_io_tcp_mapping_v1_manifest}
*/
export class DataK8SGetambassadorIoTcpMappingV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_getambassador_io_tcp_mapping_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGetambassadorIoTcpMappingV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGetambassadorIoTcpMappingV1Manifest to import
  * @param importFromId The id of the existing DataK8SGetambassadorIoTcpMappingV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGetambassadorIoTcpMappingV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_getambassador_io_tcp_mapping_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/getambassador_io_tcp_mapping_v1_manifest k8s_getambassador_io_tcp_mapping_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGetambassadorIoTcpMappingV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGetambassadorIoTcpMappingV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_getambassador_io_tcp_mapping_v1_manifest',
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
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SGetambassadorIoTcpMappingV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGetambassadorIoTcpMappingV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGetambassadorIoTcpMappingV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGetambassadorIoTcpMappingV1ManifestSpec) {
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
      metadata: dataK8SGetambassadorIoTcpMappingV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGetambassadorIoTcpMappingV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGetambassadorIoTcpMappingV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoTcpMappingV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGetambassadorIoTcpMappingV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGetambassadorIoTcpMappingV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
