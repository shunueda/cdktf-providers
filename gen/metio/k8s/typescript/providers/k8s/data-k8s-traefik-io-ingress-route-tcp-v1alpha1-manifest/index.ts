// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#metadata DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadata;
  /**
  * IngressRouteTCPSpec defines the desired state of IngressRouteTCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#spec DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#annotations DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#labels DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#name DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewares {
  /**
  * Name defines the name of the referenced Traefik resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#name DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Traefik resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewares | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewares | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewares | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewares[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresOutputReference {
    return new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocol {
  /**
  * Version defines the PROXY Protocol version to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#version DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#version}
  */
  readonly version?: number;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocolToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocolToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServices {
  /**
  * Name defines the name of the referenced Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#name DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#native_lb DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#native_lb}
  */
  readonly nativeLb?: boolean | cdktf.IResolvable;
  /**
  * NodePortLB controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes. By default, NodePortLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#node_port_lb DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#node_port_lb}
  */
  readonly nodePortLb?: boolean | cdktf.IResolvable;
  /**
  * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#port DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * ProxyProtocol defines the PROXY protocol configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/services/#proxy-protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#proxy_protocol DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#proxy_protocol}
  */
  readonly proxyProtocol?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocol;
  /**
  * ServersTransport defines the name of ServersTransportTCP resource to use. It allows to configure the transport between Traefik and your servers. Can only be used on a Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#servers_transport DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#servers_transport}
  */
  readonly serversTransport?: string;
  /**
  * TerminationDelay defines the deadline that the proxy sets, after one of its connected peers indicates it has closed the writing capability of its connection, to close the reading capability as well, hence fully terminating the connection. It is a duration in milliseconds, defaulting to 100. A negative value means an infinite deadline (i.e. the reading capability is never closed). Deprecated: TerminationDelay will not be supported in future APIVersions, please use ServersTransport to configure the TerminationDelay instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#termination_delay DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#termination_delay}
  */
  readonly terminationDelay?: number;
  /**
  * TLS determines whether to use TLS when dialing with the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#tls DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Weight defines the weight used when balancing requests between multiple Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#weight DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    native_lb: cdktf.booleanToTerraform(struct!.nativeLb),
    node_port_lb: cdktf.booleanToTerraform(struct!.nodePortLb),
    port: cdktf.stringToTerraform(struct!.port),
    proxy_protocol: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocolToTerraform(struct!.proxyProtocol),
    servers_transport: cdktf.stringToTerraform(struct!.serversTransport),
    termination_delay: cdktf.numberToTerraform(struct!.terminationDelay),
    tls: cdktf.booleanToTerraform(struct!.tls),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nativeLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_port_lb: {
      value: cdktf.booleanToHclTerraform(struct!.nodePortLb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_protocol: {
      value: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocolToHclTerraform(struct!.proxyProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocol",
    },
    servers_transport: {
      value: cdktf.stringToHclTerraform(struct!.serversTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_delay: {
      value: cdktf.numberToHclTerraform(struct!.terminationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nativeLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeLb = this._nativeLb;
    }
    if (this._nodePortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePortLb = this._nodePortLb;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol?.internalValue;
    }
    if (this._serversTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversTransport = this._serversTransport;
    }
    if (this._terminationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationDelay = this._terminationDelay;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._nativeLb = undefined;
      this._nodePortLb = undefined;
      this._port = undefined;
      this._proxyProtocol.internalValue = undefined;
      this._serversTransport = undefined;
      this._terminationDelay = undefined;
      this._tls = undefined;
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
      this._namespace = value.namespace;
      this._nativeLb = value.nativeLb;
      this._nodePortLb = value.nodePortLb;
      this._port = value.port;
      this._proxyProtocol.internalValue = value.proxyProtocol;
      this._serversTransport = value.serversTransport;
      this._terminationDelay = value.terminationDelay;
      this._tls = value.tls;
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

  // native_lb - computed: false, optional: true, required: false
  private _nativeLb?: boolean | cdktf.IResolvable; 
  public get nativeLb() {
    return this.getBooleanAttribute('native_lb');
  }
  public set nativeLb(value: boolean | cdktf.IResolvable) {
    this._nativeLb = value;
  }
  public resetNativeLb() {
    this._nativeLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeLbInput() {
    return this._nativeLb;
  }

  // node_port_lb - computed: false, optional: true, required: false
  private _nodePortLb?: boolean | cdktf.IResolvable; 
  public get nodePortLb() {
    return this.getBooleanAttribute('node_port_lb');
  }
  public set nodePortLb(value: boolean | cdktf.IResolvable) {
    this._nodePortLb = value;
  }
  public resetNodePortLb() {
    this._nodePortLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortLbInput() {
    return this._nodePortLb;
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

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocolOutputReference(this, "proxy_protocol");
  public get proxyProtocol() {
    return this._proxyProtocol;
  }
  public putProxyProtocol(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesProxyProtocol) {
    this._proxyProtocol.internalValue = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol.internalValue;
  }

  // servers_transport - computed: false, optional: true, required: false
  private _serversTransport?: string; 
  public get serversTransport() {
    return this.getStringAttribute('servers_transport');
  }
  public set serversTransport(value: string) {
    this._serversTransport = value;
  }
  public resetServersTransport() {
    this._serversTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversTransportInput() {
    return this._serversTransport;
  }

  // termination_delay - computed: false, optional: true, required: false
  private _terminationDelay?: number; 
  public get terminationDelay() {
    return this.getNumberAttribute('termination_delay');
  }
  public set terminationDelay(value: number) {
    this._terminationDelay = value;
  }
  public resetTerminationDelay() {
    this._terminationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationDelayInput() {
    return this._terminationDelay;
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

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesOutputReference {
    return new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutes {
  /**
  * Match defines the router's rule. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#rule_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#match DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#match}
  */
  readonly match: string;
  /**
  * Middlewares defines the list of references to MiddlewareTCP resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#middlewares DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#middlewares}
  */
  readonly middlewares?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewares[] | cdktf.IResolvable;
  /**
  * Priority defines the router's priority. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#priority_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#priority DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Services defines the list of TCP services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#services DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#services}
  */
  readonly services?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable;
  /**
  * Syntax defines the router's rule syntax. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#rulesyntax_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#syntax DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#syntax}
  */
  readonly syntax?: string;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    middlewares: cdktf.listMapper(dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresToTerraform, false)(struct!.middlewares),
    priority: cdktf.numberToTerraform(struct!.priority),
    services: cdktf.listMapper(dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesToTerraform, false)(struct!.services),
    syntax: cdktf.stringToTerraform(struct!.syntax),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middlewares: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresToHclTerraform, false)(struct!.middlewares),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesList",
    },
    syntax: {
      value: cdktf.stringToHclTerraform(struct!.syntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._middlewares?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.middlewares = this._middlewares?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._middlewares.internalValue = undefined;
      this._priority = undefined;
      this._services.internalValue = undefined;
      this._syntax = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._middlewares.internalValue = value.middlewares;
      this._priority = value.priority;
      this._services.internalValue = value.services;
      this._syntax = value.syntax;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // middlewares - computed: false, optional: true, required: false
  private _middlewares = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewaresList(this, "middlewares", false);
  public get middlewares() {
    return this._middlewares;
  }
  public putMiddlewares(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesMiddlewares[] | cdktf.IResolvable) {
    this._middlewares.internalValue = value;
  }
  public resetMiddlewares() {
    this._middlewares.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middlewaresInput() {
    return this._middlewares.internalValue;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // syntax - computed: false, optional: true, required: false
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  public resetSyntax() {
    this._syntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }
}

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesOutputReference {
    return new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomains {
  /**
  * Main defines the main domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#main DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#main}
  */
  readonly main?: string;
  /**
  * SANs defines the subject alternative domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#sans DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#sans}
  */
  readonly sans?: string[];
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main: cdktf.stringToTerraform(struct!.main),
    sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sans),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main: {
      value: cdktf.stringToHclTerraform(struct!.main),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._main !== undefined) {
      hasAnyValues = true;
      internalValueResult.main = this._main;
    }
    if (this._sans !== undefined) {
      hasAnyValues = true;
      internalValueResult.sans = this._sans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._main = undefined;
      this._sans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._main = value.main;
      this._sans = value.sans;
    }
  }

  // main - computed: false, optional: true, required: false
  private _main?: string; 
  public get main() {
    return this.getStringAttribute('main');
  }
  public set main(value: string) {
    this._main = value;
  }
  public resetMain() {
    this._main = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainInput() {
    return this._main;
  }

  // sans - computed: false, optional: true, required: false
  private _sans?: string[]; 
  public get sans() {
    return this.getListAttribute('sans');
  }
  public set sans(value: string[]) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }
}

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomains[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsOutputReference {
    return new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptions {
  /**
  * Name defines the name of the referenced Traefik resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#name DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Traefik resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptionsToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptionsToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptions | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStore {
  /**
  * Name defines the name of the referenced Traefik resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#name DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Traefik resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStoreToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStoreToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStore | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTls {
  /**
  * CertResolver defines the name of the certificate resolver to use. Cert resolvers have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v3.2/https/acme/#certificate-resolvers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#cert_resolver DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#cert_resolver}
  */
  readonly certResolver?: string;
  /**
  * Domains defines the list of domains that will be used to issue certificates. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#domains DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#domains}
  */
  readonly domains?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomains[] | cdktf.IResolvable;
  /**
  * Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection. If not defined, the 'default' TLSOption is used. More info: https://doc.traefik.io/traefik/v3.2/https/tls/#tls-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#options DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#options}
  */
  readonly options?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptions;
  /**
  * Passthrough defines whether a TLS router will terminate the TLS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#passthrough DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#passthrough}
  */
  readonly passthrough?: boolean | cdktf.IResolvable;
  /**
  * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#secret_name DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * Store defines the reference to the TLSStore, that will be used to store certificates. Please note that only 'default' TLSStore can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#store DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#store}
  */
  readonly store?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStore;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_resolver: cdktf.stringToTerraform(struct!.certResolver),
    domains: cdktf.listMapper(dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsToTerraform, false)(struct!.domains),
    options: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptionsToTerraform(struct!.options),
    passthrough: cdktf.booleanToTerraform(struct!.passthrough),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    store: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStoreToTerraform(struct!.store),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_resolver: {
      value: cdktf.stringToHclTerraform(struct!.certResolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domains: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsToHclTerraform, false)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsList",
    },
    options: {
      value: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptions",
    },
    passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.passthrough),
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
    store: {
      value: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStoreToHclTerraform(struct!.store),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certResolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.certResolver = this._certResolver;
    }
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._store?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certResolver = undefined;
      this._domains.internalValue = undefined;
      this._options.internalValue = undefined;
      this._passthrough = undefined;
      this._secretName = undefined;
      this._store.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certResolver = value.certResolver;
      this._domains.internalValue = value.domains;
      this._options.internalValue = value.options;
      this._passthrough = value.passthrough;
      this._secretName = value.secretName;
      this._store.internalValue = value.store;
    }
  }

  // cert_resolver - computed: false, optional: true, required: false
  private _certResolver?: string; 
  public get certResolver() {
    return this.getStringAttribute('cert_resolver');
  }
  public set certResolver(value: string) {
    this._certResolver = value;
  }
  public resetCertResolver() {
    this._certResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certResolverInput() {
    return this._certResolver;
  }

  // domains - computed: false, optional: true, required: false
  private _domains = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  public resetDomains() {
    this._domains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: boolean | cdktf.IResolvable; 
  public get passthrough() {
    return this.getBooleanAttribute('passthrough');
  }
  public set passthrough(value: boolean | cdktf.IResolvable) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
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

  // store - computed: false, optional: true, required: false
  private _store = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStoreOutputReference(this, "store");
  public get store() {
    return this._store;
  }
  public putStore(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsStore) {
    this._store.internalValue = value;
  }
  public resetStore() {
    this._store.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store.internalValue;
  }
}
export interface DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpec {
  /**
  * EntryPoints defines the list of entry point names to bind to. Entry points have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/entrypoints/ Default: all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#entry_points DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#entry_points}
  */
  readonly entryPoints?: string[];
  /**
  * Routes defines the list of routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#routes DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#routes}
  */
  readonly routes: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable;
  /**
  * TLS defines the TLS configuration on a layer 4 / TCP Route. More info: https://doc.traefik.io/traefik/v3.2/routing/routers/#tls_1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#tls DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTls;
}

export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_points: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entryPoints),
    routes: cdktf.listMapper(dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesToTerraform, false)(struct!.routes),
    tls: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsToTerraform(struct!.tls),
  }
}


export function dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_points: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entryPoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesList",
    },
    tls: {
      value: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoints = this._entryPoints;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryPoints = undefined;
      this._routes.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryPoints = value.entryPoints;
      this._routes.internalValue = value.routes;
      this._tls.internalValue = value.tls;
    }
  }

  // entry_points - computed: false, optional: true, required: false
  private _entryPoints?: string[]; 
  public get entryPoints() {
    return this.getListAttribute('entry_points');
  }
  public set entryPoints(value: string[]) {
    this._entryPoints = value;
  }
  public resetEntryPoints() {
    this._entryPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointsInput() {
    return this._entryPoints;
  }

  // routes - computed: false, optional: false, required: true
  private _routes = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest k8s_traefik_io_ingress_route_tcp_v1alpha1_manifest}
*/
export class DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_ingress_route_tcp_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoIngressRouteTcpV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_ingress_route_tcp_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/traefik_io_ingress_route_tcp_v1alpha1_manifest k8s_traefik_io_ingress_route_tcp_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_ingress_route_tcp_v1alpha1_manifest',
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
  private _metadata = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoIngressRouteTcpV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
