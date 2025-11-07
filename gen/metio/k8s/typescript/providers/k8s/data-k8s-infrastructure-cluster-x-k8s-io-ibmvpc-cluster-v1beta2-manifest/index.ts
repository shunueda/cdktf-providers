// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadata;
  /**
  * IBMVPCClusterSpec defines the desired state of IBMVPCCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#namespace DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpoint {
  /**
  * The hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#host DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#host}
  */
  readonly host: string;
  /**
  * The port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#port}
  */
  readonly port: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpointToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListeners {
  /**
  * defaultPoolName defines the name of a VPC Load Balancer Backend Pool to use for the VPC Load Balancer Listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#default_pool_name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#default_pool_name}
  */
  readonly defaultPoolName?: string;
  /**
  * Port sets the port for the additional listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * protocol defines the protocol to use for the VPC Load Balancer Listener. Will default to TCP protocol if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_pool_name: cdktf.stringToTerraform(struct!.defaultPoolName),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultPoolName),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPoolName = this._defaultPoolName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPoolName = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPoolName = value.defaultPoolName;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // default_pool_name - computed: false, optional: true, required: false
  private _defaultPoolName?: string; 
  public get defaultPoolName() {
    return this.getStringAttribute('default_pool_name');
  }
  public set defaultPoolName(value: string) {
    this._defaultPoolName = value;
  }
  public resetDefaultPoolName() {
    this._defaultPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolNameInput() {
    return this._defaultPoolName;
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
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitor {
  /**
  * delay defines the seconds to wait between health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#delay DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#delay}
  */
  readonly delay: number;
  /**
  * port defines the port to perform health monitoring on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * retries defines the max retries for health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#retries DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#retries}
  */
  readonly retries: number;
  /**
  * timeout defines the seconds to wait for a health check response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#timeout DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#timeout}
  */
  readonly timeout: number;
  /**
  * type defines the protocol used for health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#type DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * urlPath defines the URL to use for health monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#url_path DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#url_path}
  */
  readonly urlPath?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitorToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitorToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
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
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._port = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._urlPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._port = value.port;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._type = value.type;
      this._urlPath = value.urlPath;
    }
  }

  // delay - computed: false, optional: false, required: true
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // retries - computed: false, optional: false, required: true
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPools {
  /**
  * algorithm defines the load balancing algorithm to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#algorithm DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#algorithm}
  */
  readonly algorithm: string;
  /**
  * healthMonitor defines the backend pool's health monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#health_monitor DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#health_monitor}
  */
  readonly healthMonitor: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitor;
  /**
  * name defines the name of the Backend Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * protocol defines the protocol to use for the Backend Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    health_monitor: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitorToTerraform(struct!.healthMonitor),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_monitor: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitorToHclTerraform(struct!.healthMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitor",
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._healthMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitor = this._healthMonitor?.internalValue;
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._healthMonitor.internalValue = undefined;
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
      this._algorithm = value.algorithm;
      this._healthMonitor.internalValue = value.healthMonitor;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // health_monitor - computed: false, optional: false, required: true
  private _healthMonitor = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitorOutputReference(this, "health_monitor");
  public get healthMonitor() {
    return this._healthMonitor;
  }
  public putHealthMonitor(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsHealthMonitor) {
    this._healthMonitor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInput() {
    return this._healthMonitor.internalValue;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPools[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroups {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnets {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancer {
  /**
  * AdditionalListeners sets the additional listeners for the control plane load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#additional_listeners DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#additional_listeners}
  */
  readonly additionalListeners?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListeners[] | cdktf.IResolvable;
  /**
  * backendPools defines the load balancer's backend pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#backend_pools DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#backend_pools}
  */
  readonly backendPools?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPools[] | cdktf.IResolvable;
  /**
  * id of the loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name sets the name of the VPC load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * public indicates that load balancer is public or private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#public DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * securityGroups defines the Security Groups to attach to the load balancer. Security Groups defined here are expected to already exist when the load balancer is reconciled (these do not get created when reconciling the load balancer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#security_groups DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#security_groups}
  */
  readonly securityGroups?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroups[] | cdktf.IResolvable;
  /**
  * subnets defines the VPC Subnets to attach to the load balancer. Subnets defiens here are expected to already exist when the load balancer is reconciled (these do not get created when reconciling the load balancer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#subnets DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#subnets}
  */
  readonly subnets?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnets[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_listeners: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersToTerraform, false)(struct!.additionalListeners),
    backend_pools: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsToTerraform, false)(struct!.backendPools),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    public: cdktf.booleanToTerraform(struct!.public),
    security_groups: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_listeners: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersToHclTerraform, false)(struct!.additionalListeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersList",
    },
    backend_pools: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsToHclTerraform, false)(struct!.backendPools),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsToHclTerraform, false)(struct!.securityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsList",
    },
    subnets: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsToHclTerraform, false)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalListeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalListeners = this._additionalListeners?.internalValue;
    }
    if (this._backendPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPools = this._backendPools?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    if (this._securityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalListeners.internalValue = undefined;
      this._backendPools.internalValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._public = undefined;
      this._securityGroups.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalListeners.internalValue = value.additionalListeners;
      this._backendPools.internalValue = value.backendPools;
      this._id = value.id;
      this._name = value.name;
      this._public = value.public;
      this._securityGroups.internalValue = value.securityGroups;
      this._subnets.internalValue = value.subnets;
    }
  }

  // additional_listeners - computed: false, optional: true, required: false
  private _additionalListeners = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListenersList(this, "additional_listeners", false);
  public get additionalListeners() {
    return this._additionalListeners;
  }
  public putAdditionalListeners(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerAdditionalListeners[] | cdktf.IResolvable) {
    this._additionalListeners.internalValue = value;
  }
  public resetAdditionalListeners() {
    this._additionalListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalListenersInput() {
    return this._additionalListeners.internalValue;
  }

  // backend_pools - computed: false, optional: true, required: false
  private _backendPools = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPoolsList(this, "backend_pools", false);
  public get backendPools() {
    return this._backendPools;
  }
  public putBackendPools(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerBackendPools[] | cdktf.IResolvable) {
    this._backendPools.internalValue = value;
  }
  public resetBackendPools() {
    this._backendPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolsInput() {
    return this._backendPools.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroup {
  /**
  * id defines the IBM Cloud Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * name defines the IBM Cloud Resource Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroupToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroupToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImage {
  /**
  * cosBucket is the name of the IBM Cloud COS Bucket containing the source of the image, if necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#cos_bucket DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#cos_bucket}
  */
  readonly cosBucket?: string;
  /**
  * cosBucketRegion is the COS region the bucket is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#cos_bucket_region DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#cos_bucket_region}
  */
  readonly cosBucketRegion?: string;
  /**
  * cosInstance is the name of the IBM Cloud COS Instance containing the source of the image, if necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#cos_instance DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#cos_instance}
  */
  readonly cosInstance?: string;
  /**
  * cosObject is the name of a IBM Cloud COS Object used as the source of the image, if necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#cos_object DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#cos_object}
  */
  readonly cosObject?: string;
  /**
  * crn is the IBM Cloud CRN of the existing VPC Custom Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#crn DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#crn}
  */
  readonly crn?: string;
  /**
  * name is the name of the desired VPC Custom Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * operatingSystem is the Custom Image's Operating System name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#operating_system DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * resourceGroup is the Resource Group to create the Custom Image in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#resource_group DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#resource_group}
  */
  readonly resourceGroup?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroup;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos_bucket: cdktf.stringToTerraform(struct!.cosBucket),
    cos_bucket_region: cdktf.stringToTerraform(struct!.cosBucketRegion),
    cos_instance: cdktf.stringToTerraform(struct!.cosInstance),
    cos_object: cdktf.stringToTerraform(struct!.cosObject),
    crn: cdktf.stringToTerraform(struct!.crn),
    name: cdktf.stringToTerraform(struct!.name),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    resource_group: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroupToTerraform(struct!.resourceGroup),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos_bucket: {
      value: cdktf.stringToHclTerraform(struct!.cosBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.cosBucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_instance: {
      value: cdktf.stringToHclTerraform(struct!.cosInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_object: {
      value: cdktf.stringToHclTerraform(struct!.cosObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crn: {
      value: cdktf.stringToHclTerraform(struct!.crn),
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
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroupToHclTerraform(struct!.resourceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosBucket = this._cosBucket;
    }
    if (this._cosBucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosBucketRegion = this._cosBucketRegion;
    }
    if (this._cosInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInstance = this._cosInstance;
    }
    if (this._cosObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosObject = this._cosObject;
    }
    if (this._crn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crn = this._crn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._resourceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cosBucket = undefined;
      this._cosBucketRegion = undefined;
      this._cosInstance = undefined;
      this._cosObject = undefined;
      this._crn = undefined;
      this._name = undefined;
      this._operatingSystem = undefined;
      this._resourceGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cosBucket = value.cosBucket;
      this._cosBucketRegion = value.cosBucketRegion;
      this._cosInstance = value.cosInstance;
      this._cosObject = value.cosObject;
      this._crn = value.crn;
      this._name = value.name;
      this._operatingSystem = value.operatingSystem;
      this._resourceGroup.internalValue = value.resourceGroup;
    }
  }

  // cos_bucket - computed: false, optional: true, required: false
  private _cosBucket?: string; 
  public get cosBucket() {
    return this.getStringAttribute('cos_bucket');
  }
  public set cosBucket(value: string) {
    this._cosBucket = value;
  }
  public resetCosBucket() {
    this._cosBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketInput() {
    return this._cosBucket;
  }

  // cos_bucket_region - computed: false, optional: true, required: false
  private _cosBucketRegion?: string; 
  public get cosBucketRegion() {
    return this.getStringAttribute('cos_bucket_region');
  }
  public set cosBucketRegion(value: string) {
    this._cosBucketRegion = value;
  }
  public resetCosBucketRegion() {
    this._cosBucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketRegionInput() {
    return this._cosBucketRegion;
  }

  // cos_instance - computed: false, optional: true, required: false
  private _cosInstance?: string; 
  public get cosInstance() {
    return this.getStringAttribute('cos_instance');
  }
  public set cosInstance(value: string) {
    this._cosInstance = value;
  }
  public resetCosInstance() {
    this._cosInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInstanceInput() {
    return this._cosInstance;
  }

  // cos_object - computed: false, optional: true, required: false
  private _cosObject?: string; 
  public get cosObject() {
    return this.getStringAttribute('cos_object');
  }
  public set cosObject(value: string) {
    this._cosObject = value;
  }
  public resetCosObject() {
    this._cosObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosObjectInput() {
    return this._cosObject;
  }

  // crn - computed: false, optional: true, required: false
  private _crn?: string; 
  public get crn() {
    return this.getStringAttribute('crn');
  }
  public set crn(value: string) {
    this._crn = value;
  }
  public resetCrn() {
    this._crn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crnInput() {
    return this._crn;
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroupOutputReference(this, "resource_group");
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public putResourceGroup(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageResourceGroup) {
    this._resourceGroup.internalValue = value;
  }
  public resetResourceGroup() {
    this._resourceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#cidr DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#zone DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._id = undefined;
      this._name = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._id = value.id;
      this._name = value.name;
      this._zone = value.zone;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListeners {
  /**
  * defaultPoolName defines the name of a VPC Load Balancer Backend Pool to use for the VPC Load Balancer Listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#default_pool_name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#default_pool_name}
  */
  readonly defaultPoolName?: string;
  /**
  * Port sets the port for the additional listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * protocol defines the protocol to use for the VPC Load Balancer Listener. Will default to TCP protocol if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_pool_name: cdktf.stringToTerraform(struct!.defaultPoolName),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultPoolName),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPoolName = this._defaultPoolName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultPoolName = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultPoolName = value.defaultPoolName;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // default_pool_name - computed: false, optional: true, required: false
  private _defaultPoolName?: string; 
  public get defaultPoolName() {
    return this.getStringAttribute('default_pool_name');
  }
  public set defaultPoolName(value: string) {
    this._defaultPoolName = value;
  }
  public resetDefaultPoolName() {
    this._defaultPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolNameInput() {
    return this._defaultPoolName;
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
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitor {
  /**
  * delay defines the seconds to wait between health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#delay DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#delay}
  */
  readonly delay: number;
  /**
  * port defines the port to perform health monitoring on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * retries defines the max retries for health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#retries DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#retries}
  */
  readonly retries: number;
  /**
  * timeout defines the seconds to wait for a health check response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#timeout DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#timeout}
  */
  readonly timeout: number;
  /**
  * type defines the protocol used for health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#type DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * urlPath defines the URL to use for health monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#url_path DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#url_path}
  */
  readonly urlPath?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitorToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitorToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
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
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._port = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._urlPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._port = value.port;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._type = value.type;
      this._urlPath = value.urlPath;
    }
  }

  // delay - computed: false, optional: false, required: true
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // retries - computed: false, optional: false, required: true
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPools {
  /**
  * algorithm defines the load balancing algorithm to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#algorithm DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#algorithm}
  */
  readonly algorithm: string;
  /**
  * healthMonitor defines the backend pool's health monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#health_monitor DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#health_monitor}
  */
  readonly healthMonitor: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitor;
  /**
  * name defines the name of the Backend Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * protocol defines the protocol to use for the Backend Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    health_monitor: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitorToTerraform(struct!.healthMonitor),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_monitor: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitorToHclTerraform(struct!.healthMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitor",
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._healthMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitor = this._healthMonitor?.internalValue;
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._healthMonitor.internalValue = undefined;
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
      this._algorithm = value.algorithm;
      this._healthMonitor.internalValue = value.healthMonitor;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // health_monitor - computed: false, optional: false, required: true
  private _healthMonitor = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitorOutputReference(this, "health_monitor");
  public get healthMonitor() {
    return this._healthMonitor;
  }
  public putHealthMonitor(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsHealthMonitor) {
    this._healthMonitor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInput() {
    return this._healthMonitor.internalValue;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPools[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroups {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnets {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancers {
  /**
  * AdditionalListeners sets the additional listeners for the control plane load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#additional_listeners DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#additional_listeners}
  */
  readonly additionalListeners?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListeners[] | cdktf.IResolvable;
  /**
  * backendPools defines the load balancer's backend pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#backend_pools DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#backend_pools}
  */
  readonly backendPools?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPools[] | cdktf.IResolvable;
  /**
  * id of the loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name sets the name of the VPC load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * public indicates that load balancer is public or private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#public DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * securityGroups defines the Security Groups to attach to the load balancer. Security Groups defined here are expected to already exist when the load balancer is reconciled (these do not get created when reconciling the load balancer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#security_groups DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#security_groups}
  */
  readonly securityGroups?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroups[] | cdktf.IResolvable;
  /**
  * subnets defines the VPC Subnets to attach to the load balancer. Subnets defiens here are expected to already exist when the load balancer is reconciled (these do not get created when reconciling the load balancer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#subnets DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#subnets}
  */
  readonly subnets?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnets[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_listeners: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersToTerraform, false)(struct!.additionalListeners),
    backend_pools: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsToTerraform, false)(struct!.backendPools),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    public: cdktf.booleanToTerraform(struct!.public),
    security_groups: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_listeners: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersToHclTerraform, false)(struct!.additionalListeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersList",
    },
    backend_pools: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsToHclTerraform, false)(struct!.backendPools),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsToHclTerraform, false)(struct!.securityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsList",
    },
    subnets: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsToHclTerraform, false)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalListeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalListeners = this._additionalListeners?.internalValue;
    }
    if (this._backendPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPools = this._backendPools?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    if (this._securityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalListeners.internalValue = undefined;
      this._backendPools.internalValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._public = undefined;
      this._securityGroups.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalListeners.internalValue = value.additionalListeners;
      this._backendPools.internalValue = value.backendPools;
      this._id = value.id;
      this._name = value.name;
      this._public = value.public;
      this._securityGroups.internalValue = value.securityGroups;
      this._subnets.internalValue = value.subnets;
    }
  }

  // additional_listeners - computed: false, optional: true, required: false
  private _additionalListeners = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListenersList(this, "additional_listeners", false);
  public get additionalListeners() {
    return this._additionalListeners;
  }
  public putAdditionalListeners(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersAdditionalListeners[] | cdktf.IResolvable) {
    this._additionalListeners.internalValue = value;
  }
  public resetAdditionalListeners() {
    this._additionalListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalListenersInput() {
    return this._additionalListeners.internalValue;
  }

  // backend_pools - computed: false, optional: true, required: false
  private _backendPools = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPoolsList(this, "backend_pools", false);
  public get backendPools() {
    return this._backendPools;
  }
  public putBackendPools(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersBackendPools[] | cdktf.IResolvable) {
    this._backendPools.internalValue = value;
  }
  public resetBackendPools() {
    this._backendPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolsInput() {
    return this._backendPools.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroup {
  /**
  * id defines the IBM Cloud Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * name defines the IBM Cloud Resource Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroupToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroupToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRange {
  /**
  * maximumPort is the inclusive upper range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#maximum_port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#maximum_port}
  */
  readonly maximumPort?: number;
  /**
  * minimumPort is the inclusive lower range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#minimum_port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#minimum_port}
  */
  readonly minimumPort?: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRangeToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_port: cdktf.numberToTerraform(struct!.maximumPort),
    minimum_port: cdktf.numberToTerraform(struct!.minimumPort),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRangeToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_port: {
      value: cdktf.numberToHclTerraform(struct!.maximumPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_port: {
      value: cdktf.numberToHclTerraform(struct!.minimumPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPort = this._maximumPort;
    }
    if (this._minimumPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPort = this._minimumPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumPort = undefined;
      this._minimumPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumPort = value.maximumPort;
      this._minimumPort = value.minimumPort;
    }
  }

  // maximum_port - computed: false, optional: true, required: false
  private _maximumPort?: number; 
  public get maximumPort() {
    return this.getNumberAttribute('maximum_port');
  }
  public set maximumPort(value: number) {
    this._maximumPort = value;
  }
  public resetMaximumPort() {
    this._maximumPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPortInput() {
    return this._maximumPort;
  }

  // minimum_port - computed: false, optional: true, required: false
  private _minimumPort?: number; 
  public get minimumPort() {
    return this.getNumberAttribute('minimum_port');
  }
  public set minimumPort(value: number) {
    this._minimumPort = value;
  }
  public resetMinimumPort() {
    this._minimumPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPortInput() {
    return this._minimumPort;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotes {
  /**
  *  address is the address to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#address DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#address}
  */
  readonly address?: string;
  /**
  * cidrSubnetName is the name of the VPC Subnet to retrieve the CIDR from, to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#cidr_subnet_name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#cidr_subnet_name}
  */
  readonly cidrSubnetName?: string;
  /**
  * remoteType defines the type of filter to define for the remote's destination/source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#remote_type DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#remote_type}
  */
  readonly remoteType: string;
  /**
  * securityGroupName is the name of the VPC Security Group to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeSG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#security_group_name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#security_group_name}
  */
  readonly securityGroupName?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cidr_subnet_name: cdktf.stringToTerraform(struct!.cidrSubnetName),
    remote_type: cdktf.stringToTerraform(struct!.remoteType),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotes | cdktf.IResolvable): any {
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
    cidr_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.cidrSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cidrSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrSubnetName = this._cidrSubnetName;
    }
    if (this._remoteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteType = this._remoteType;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cidrSubnetName = undefined;
      this._remoteType = undefined;
      this._securityGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cidrSubnetName = value.cidrSubnetName;
      this._remoteType = value.remoteType;
      this._securityGroupName = value.securityGroupName;
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

  // cidr_subnet_name - computed: false, optional: true, required: false
  private _cidrSubnetName?: string; 
  public get cidrSubnetName() {
    return this.getStringAttribute('cidr_subnet_name');
  }
  public set cidrSubnetName(value: string) {
    this._cidrSubnetName = value;
  }
  public resetCidrSubnetName() {
    this._cidrSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrSubnetNameInput() {
    return this._cidrSubnetName;
  }

  // remote_type - computed: false, optional: false, required: true
  private _remoteType?: string; 
  public get remoteType() {
    return this.getStringAttribute('remote_type');
  }
  public set remoteType(value: string) {
    this._remoteType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTypeInput() {
    return this._remoteType;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestination {
  /**
  * icmpCode is the ICMP code for the Rule. Only used when Protocol is VPCSecurityGroupRuleProtocolIcmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#icmp_code DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * icmpType is the ICMP type for the Rule. Only used when Protocol is VPCSecurityGroupRuleProtocolIcmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#icmp_type DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * portRange is a range of ports allowed for the Rule's remote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#port_range DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#port_range}
  */
  readonly portRange?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRange;
  /**
  * protocol defines the traffic protocol used for the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * remotes is a set of VPCSecurityGroupRuleRemote's that define the traffic allowed by the Rule's remote. Specifying multiple VPCSecurityGroupRuleRemote's creates a unique Security Group Rule with the shared Protocol, PortRange, etc. This allows for easier management of Security Group Rule's for sets of CIDR's, IP's, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#remotes DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#remotes}
  */
  readonly remotes: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotes[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    port_range: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remotes: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesToTerraform, false)(struct!.remotes),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRange",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remotes: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesToHclTerraform, false)(struct!.remotes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remotes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotes = this._remotes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._portRange.internalValue = undefined;
      this._protocol = undefined;
      this._remotes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._portRange.internalValue = value.portRange;
      this._protocol = value.protocol;
      this._remotes.internalValue = value.remotes;
    }
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationPortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remotes - computed: false, optional: false, required: true
  private _remotes = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotesList(this, "remotes", false);
  public get remotes() {
    return this._remotes;
  }
  public putRemotes(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationRemotes[] | cdktf.IResolvable) {
    this._remotes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotesInput() {
    return this._remotes.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRange {
  /**
  * maximumPort is the inclusive upper range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#maximum_port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#maximum_port}
  */
  readonly maximumPort?: number;
  /**
  * minimumPort is the inclusive lower range of ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#minimum_port DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#minimum_port}
  */
  readonly minimumPort?: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRangeToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_port: cdktf.numberToTerraform(struct!.maximumPort),
    minimum_port: cdktf.numberToTerraform(struct!.minimumPort),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRangeToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_port: {
      value: cdktf.numberToHclTerraform(struct!.maximumPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_port: {
      value: cdktf.numberToHclTerraform(struct!.minimumPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPort = this._maximumPort;
    }
    if (this._minimumPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPort = this._minimumPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumPort = undefined;
      this._minimumPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumPort = value.maximumPort;
      this._minimumPort = value.minimumPort;
    }
  }

  // maximum_port - computed: false, optional: true, required: false
  private _maximumPort?: number; 
  public get maximumPort() {
    return this.getNumberAttribute('maximum_port');
  }
  public set maximumPort(value: number) {
    this._maximumPort = value;
  }
  public resetMaximumPort() {
    this._maximumPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPortInput() {
    return this._maximumPort;
  }

  // minimum_port - computed: false, optional: true, required: false
  private _minimumPort?: number; 
  public get minimumPort() {
    return this.getNumberAttribute('minimum_port');
  }
  public set minimumPort(value: number) {
    this._minimumPort = value;
  }
  public resetMinimumPort() {
    this._minimumPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPortInput() {
    return this._minimumPort;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotes {
  /**
  *  address is the address to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#address DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#address}
  */
  readonly address?: string;
  /**
  * cidrSubnetName is the name of the VPC Subnet to retrieve the CIDR from, to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#cidr_subnet_name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#cidr_subnet_name}
  */
  readonly cidrSubnetName?: string;
  /**
  * remoteType defines the type of filter to define for the remote's destination/source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#remote_type DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#remote_type}
  */
  readonly remoteType: string;
  /**
  * securityGroupName is the name of the VPC Security Group to use for the remote's destination/source. Only used when remoteType is VPCSecurityGroupRuleRemoteTypeSG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#security_group_name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#security_group_name}
  */
  readonly securityGroupName?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cidr_subnet_name: cdktf.stringToTerraform(struct!.cidrSubnetName),
    remote_type: cdktf.stringToTerraform(struct!.remoteType),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotes | cdktf.IResolvable): any {
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
    cidr_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.cidrSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cidrSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrSubnetName = this._cidrSubnetName;
    }
    if (this._remoteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteType = this._remoteType;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cidrSubnetName = undefined;
      this._remoteType = undefined;
      this._securityGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cidrSubnetName = value.cidrSubnetName;
      this._remoteType = value.remoteType;
      this._securityGroupName = value.securityGroupName;
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

  // cidr_subnet_name - computed: false, optional: true, required: false
  private _cidrSubnetName?: string; 
  public get cidrSubnetName() {
    return this.getStringAttribute('cidr_subnet_name');
  }
  public set cidrSubnetName(value: string) {
    this._cidrSubnetName = value;
  }
  public resetCidrSubnetName() {
    this._cidrSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrSubnetNameInput() {
    return this._cidrSubnetName;
  }

  // remote_type - computed: false, optional: false, required: true
  private _remoteType?: string; 
  public get remoteType() {
    return this.getStringAttribute('remote_type');
  }
  public set remoteType(value: string) {
    this._remoteType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTypeInput() {
    return this._remoteType;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSource {
  /**
  * icmpCode is the ICMP code for the Rule. Only used when Protocol is VPCSecurityGroupRuleProtocolIcmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#icmp_code DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * icmpType is the ICMP type for the Rule. Only used when Protocol is VPCSecurityGroupRuleProtocolIcmp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#icmp_type DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * portRange is a range of ports allowed for the Rule's remote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#port_range DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#port_range}
  */
  readonly portRange?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRange;
  /**
  * protocol defines the traffic protocol used for the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#protocol DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * remotes is a set of VPCSecurityGroupRuleRemote's that define the traffic allowed by the Rule's remote. Specifying multiple VPCSecurityGroupRuleRemote's creates a unique Security Group Rule with the shared Protocol, PortRange, etc. This allows for easier management of Security Group Rule's for sets of CIDR's, IP's, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#remotes DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#remotes}
  */
  readonly remotes: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotes[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    port_range: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRangeToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remotes: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesToTerraform, false)(struct!.remotes),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRange",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remotes: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesToHclTerraform, false)(struct!.remotes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remotes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotes = this._remotes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._portRange.internalValue = undefined;
      this._protocol = undefined;
      this._remotes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._portRange.internalValue = value.portRange;
      this._protocol = value.protocol;
      this._remotes.internalValue = value.remotes;
    }
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourcePortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remotes - computed: false, optional: false, required: true
  private _remotes = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotesList(this, "remotes", false);
  public get remotes() {
    return this._remotes;
  }
  public putRemotes(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceRemotes[] | cdktf.IResolvable) {
    this._remotes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotesInput() {
    return this._remotes.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRules {
  /**
  * action defines whether to allow or deny traffic defined by the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#action DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#action}
  */
  readonly action: string;
  /**
  * destination is a VPCSecurityGroupRulePrototype which defines the destination of outbound traffic for the Security Group Rule. Only used when direction is VPCSecurityGroupRuleDirectionOutbound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#destination DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#destination}
  */
  readonly destination?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestination;
  /**
  * direction defines whether the traffic is inbound or outbound for the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#direction DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#direction}
  */
  readonly direction: string;
  /**
  * securityGroupID is the ID of the Security Group for the Security Group Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#security_group_id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * source is a VPCSecurityGroupRulePrototype which defines the source of inbound traffic for the Security Group Rule. Only used when direction is VPCSecurityGroupRuleDirectionInbound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#source DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#source}
  */
  readonly source?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSource;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationToTerraform(struct!.destination),
    direction: cdktf.stringToTerraform(struct!.direction),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    source: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceToTerraform(struct!.source),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestination",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destination.internalValue = undefined;
      this._direction = undefined;
      this._securityGroupId = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destination.internalValue = value.destination;
      this._direction = value.direction;
      this._securityGroupId = value.securityGroupId;
      this._source.internalValue = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroups {
  /**
  * id of the Security Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the Security Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * rules are the Security Group Rules for the Security Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#rules DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#rules}
  */
  readonly rules?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRules[] | cdktf.IResolvable;
  /**
  * tags are tags to add to the Security Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#tags DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#tags}
  */
  readonly tags?: string[];
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    rules: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesToTerraform, false)(struct!.rules),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    rules: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._rules.internalValue = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._rules.internalValue = value.rules;
      this._tags = value.tags;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpc {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpcToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpcToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#cidr DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#zone DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._id = undefined;
      this._name = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._id = value.id;
      this._name = value.name;
      this._zone = value.zone;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetwork {
  /**
  * controlPlaneSubnets is a set of Subnet's which define the Control Plane subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#control_plane_subnets DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#control_plane_subnets}
  */
  readonly controlPlaneSubnets?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnets[] | cdktf.IResolvable;
  /**
  * loadBalancers is a set of VPC Load Balancer definitions to use for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#load_balancers DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#load_balancers}
  */
  readonly loadBalancers?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancers[] | cdktf.IResolvable;
  /**
  * resourceGroup is the Resource Group containing all of the newtork resources. This can be different than the Resource Group containing the remaining cluster resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#resource_group DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#resource_group}
  */
  readonly resourceGroup?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroup;
  /**
  * securityGroups is a set of VPCSecurityGroup's which define the VPC Security Groups that manage traffic within and out of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#security_groups DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#security_groups}
  */
  readonly securityGroups?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroups[] | cdktf.IResolvable;
  /**
  * vpc defines the IBM Cloud VPC for extended VPC Infrastructure support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#vpc DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#vpc}
  */
  readonly vpc?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpc;
  /**
  * workerSubnets is a set of Subnet's which define the Worker subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#worker_subnets DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#worker_subnets}
  */
  readonly workerSubnets?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnets[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_subnets: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsToTerraform, false)(struct!.controlPlaneSubnets),
    load_balancers: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersToTerraform, false)(struct!.loadBalancers),
    resource_group: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroupToTerraform(struct!.resourceGroup),
    security_groups: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsToTerraform, false)(struct!.securityGroups),
    vpc: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpcToTerraform(struct!.vpc),
    worker_subnets: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsToTerraform, false)(struct!.workerSubnets),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_subnets: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsToHclTerraform, false)(struct!.controlPlaneSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsList",
    },
    load_balancers: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersToHclTerraform, false)(struct!.loadBalancers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersList",
    },
    resource_group: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroupToHclTerraform(struct!.resourceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroup",
    },
    security_groups: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsToHclTerraform, false)(struct!.securityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsList",
    },
    vpc: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpc",
    },
    worker_subnets: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsToHclTerraform, false)(struct!.workerSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneSubnets = this._controlPlaneSubnets?.internalValue;
    }
    if (this._loadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancers = this._loadBalancers?.internalValue;
    }
    if (this._resourceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup?.internalValue;
    }
    if (this._securityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    if (this._workerSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerSubnets = this._workerSubnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneSubnets.internalValue = undefined;
      this._loadBalancers.internalValue = undefined;
      this._resourceGroup.internalValue = undefined;
      this._securityGroups.internalValue = undefined;
      this._vpc.internalValue = undefined;
      this._workerSubnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneSubnets.internalValue = value.controlPlaneSubnets;
      this._loadBalancers.internalValue = value.loadBalancers;
      this._resourceGroup.internalValue = value.resourceGroup;
      this._securityGroups.internalValue = value.securityGroups;
      this._vpc.internalValue = value.vpc;
      this._workerSubnets.internalValue = value.workerSubnets;
    }
  }

  // control_plane_subnets - computed: false, optional: true, required: false
  private _controlPlaneSubnets = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnetsList(this, "control_plane_subnets", false);
  public get controlPlaneSubnets() {
    return this._controlPlaneSubnets;
  }
  public putControlPlaneSubnets(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkControlPlaneSubnets[] | cdktf.IResolvable) {
    this._controlPlaneSubnets.internalValue = value;
  }
  public resetControlPlaneSubnets() {
    this._controlPlaneSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneSubnetsInput() {
    return this._controlPlaneSubnets.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancersList(this, "load_balancers", false);
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public putLoadBalancers(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers.internalValue = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers.internalValue;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroupOutputReference(this, "resource_group");
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public putResourceGroup(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkResourceGroup) {
    this._resourceGroup.internalValue = value;
  }
  public resetResourceGroup() {
    this._resourceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }

  // worker_subnets - computed: false, optional: true, required: false
  private _workerSubnets = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnetsList(this, "worker_subnets", false);
  public get workerSubnets() {
    return this._workerSubnets;
  }
  public putWorkerSubnets(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkWorkerSubnets[] | cdktf.IResolvable) {
    this._workerSubnets.internalValue = value;
  }
  public resetWorkerSubnets() {
    this._workerSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerSubnetsInput() {
    return this._workerSubnets.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpec {
  /**
  * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#control_plane_endpoint DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpoint;
  /**
  * ControlPlaneLoadBalancer is optional configuration for customizing control plane behavior. Use this for legacy support, use Network.LoadBalancers for the extended VPC support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#control_plane_load_balancer DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#control_plane_load_balancer}
  */
  readonly controlPlaneLoadBalancer?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancer;
  /**
  * image represents the Image details used for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#image DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#image}
  */
  readonly image?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImage;
  /**
  * network represents the VPC network to use for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#network DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#network}
  */
  readonly network?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetwork;
  /**
  * The IBM Cloud Region the cluster lives in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#region DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#region}
  */
  readonly region: string;
  /**
  * The VPC resources should be created under the resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#resource_group DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * The Name of VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#vpc DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#vpc}
  */
  readonly vpc?: string;
  /**
  * The Name of availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#zone DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_endpoint: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    control_plane_load_balancer: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerToTerraform(struct!.controlPlaneLoadBalancer),
    image: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageToTerraform(struct!.image),
    network: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkToTerraform(struct!.network),
    region: cdktf.stringToTerraform(struct!.region),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_endpoint: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpoint",
    },
    control_plane_load_balancer: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerToHclTerraform(struct!.controlPlaneLoadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancer",
    },
    image: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImage",
    },
    network: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetwork",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._controlPlaneLoadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneLoadBalancer = this._controlPlaneLoadBalancer?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._controlPlaneLoadBalancer.internalValue = undefined;
      this._image.internalValue = undefined;
      this._network.internalValue = undefined;
      this._region = undefined;
      this._resourceGroup = undefined;
      this._vpc = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._controlPlaneLoadBalancer.internalValue = value.controlPlaneLoadBalancer;
      this._image.internalValue = value.image;
      this._network.internalValue = value.network;
      this._region = value.region;
      this._resourceGroup = value.resourceGroup;
      this._vpc = value.vpc;
      this._zone = value.zone;
    }
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // control_plane_load_balancer - computed: false, optional: true, required: false
  private _controlPlaneLoadBalancer = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancerOutputReference(this, "control_plane_load_balancer");
  public get controlPlaneLoadBalancer() {
    return this._controlPlaneLoadBalancer;
  }
  public putControlPlaneLoadBalancer(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecControlPlaneLoadBalancer) {
    this._controlPlaneLoadBalancer.internalValue = value;
  }
  public resetControlPlaneLoadBalancer() {
    this._controlPlaneLoadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneLoadBalancerInput() {
    return this._controlPlaneLoadBalancer.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_ibmvpc_cluster_v1beta2_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcClusterV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
