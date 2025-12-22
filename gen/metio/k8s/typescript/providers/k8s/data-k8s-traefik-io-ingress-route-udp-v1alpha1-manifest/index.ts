// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#metadata DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadata;
  /**
  * IngressRouteUDPSpec defines the desired state of a IngressRouteUDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#spec DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#annotations DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#labels DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#name DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServices {
  /**
  * Name defines the name of the referenced Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#name DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the referenced Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#namespace DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NativeLB controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. The Kubernetes Service itself does load-balance to the pods. By default, NativeLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#native_lb DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#native_lb}
  */
  readonly nativeLb?: boolean | cdktf.IResolvable;
  /**
  * NodePortLB controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes. By default, NodePortLB is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#node_port_lb DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#node_port_lb}
  */
  readonly nodePortLb?: boolean | cdktf.IResolvable;
  /**
  * Port defines the port of a Kubernetes Service. This can be a reference to a named port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#port DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Weight defines the weight used when balancing requests between multiple Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#weight DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesToTerraform(struct?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable): any {
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
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesToHclTerraform(struct?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable): any {
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

export class DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable | undefined {
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
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._nativeLb = undefined;
      this._nodePortLb = undefined;
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
      this._namespace = value.namespace;
      this._nativeLb = value.nativeLb;
      this._nodePortLb = value.nodePortLb;
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

export class DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesOutputReference {
    return new DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutes {
  /**
  * Services defines the list of UDP services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#services DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#services}
  */
  readonly services?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable;
}

export function dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesToTerraform(struct?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    services: cdktf.listMapper(dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesToTerraform, false)(struct!.services),
  }
}


export function dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesToHclTerraform(struct?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    services: {
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._services.internalValue = value.services;
    }
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}

export class DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesOutputReference {
    return new DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpec {
  /**
  * EntryPoints defines the list of entry point names to bind to. Entry points have to be configured in the static configuration. More info: https://doc.traefik.io/traefik/v3.2/routing/entrypoints/ Default: all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#entry_points DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#entry_points}
  */
  readonly entryPoints?: string[];
  /**
  * Routes defines the list of routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#routes DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest#routes}
  */
  readonly routes: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable;
}

export function dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_points: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entryPoints),
    routes: cdktf.listMapper(dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesToTerraform, false)(struct!.routes),
  }
}


export function dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryPoints = undefined;
      this._routes.internalValue = undefined;
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
  private _routes = new DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest k8s_traefik_io_ingress_route_udp_v1alpha1_manifest}
*/
export class DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_ingress_route_udp_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoIngressRouteUdpV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_ingress_route_udp_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/traefik_io_ingress_route_udp_v1alpha1_manifest k8s_traefik_io_ingress_route_udp_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_ingress_route_udp_v1alpha1_manifest',
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
  private _metadata = new DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpec) {
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
      metadata: dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoIngressRouteUdpV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
