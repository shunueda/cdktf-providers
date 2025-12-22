// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#metadata DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadata;
  /**
  * Spec defines the desired state of GRPCRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#spec DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#spec}
  */
  readonly spec?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpec;
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#annotations DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#labels DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadataToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefs {
  /**
  * Group is the group of the referent. When unspecified, 'gateway.networking.k8s.io' is inferred. To set the core API group (such as for a 'Service' kind referent), Group must be explicitly set to '' (empty string). Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is kind of the referent. There are two kinds of parent resources with 'Core' support: * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, ClusterIP Services only) Support for other resources is Implementation-Specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route. Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource. When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set 'Port' unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values. Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted. For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#port DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#port}
  */
  readonly port?: number;
  /**
  * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following: * Gateway: Listener name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted. When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#section_name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#section_name}
  */
  readonly sectionName?: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._sectionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._port = value.port;
      this._sectionName = value.sectionName;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the referent. For example 'HTTPRoute' or 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#add DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#remove DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#set DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#port DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._port = value.port;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirror {
  /**
  * BackendRef references a resource where mirrored requests are sent. Mirrored requests must be sent only to a single destination endpoint within this BackendRef, irrespective of how many endpoints are present within this BackendRef. If the referent cannot be found, this BackendRef is invalid and must be dropped from the Gateway. The controller must ensure the 'ResolvedRefs' condition on the Route status is set to 'status: False' and not configure this backend in the underlying implementation. If there is a cross-namespace reference to an *existing* object that is not allowed by a ReferenceGrant, the controller must ensure the 'ResolvedRefs' condition on the Route is set to 'status: False', with the 'RefNotPermitted' reason and not configure this backend in the underlying implementation. In either error case, the Message of the 'ResolvedRefs' Condition should be used to provide more detail about the problem. Support: Extended for Kubernetes Service Support: Implementation-specific for any other resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#backend_ref DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#backend_ref}
  */
  readonly backendRef: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ref: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToTerraform(struct!.backendRef),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ref: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToHclTerraform(struct!.backendRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendRef = this._backendRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendRef.internalValue = value.backendRef;
    }
  }

  // backend_ref - computed: false, optional: false, required: true
  private _backendRef = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefOutputReference(this, "backend_ref");
  public get backendRef() {
    return this._backendRef;
  }
  public putBackendRef(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef) {
    this._backendRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefInput() {
    return this._backendRef.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#add DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#remove DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#set DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFilters {
  /**
  * ExtensionRef is an optional, implementation-specific extension to the 'filter' behavior. For example, resource 'myroutefilter' in group 'networking.example.net'). ExtensionRef MUST NOT be used for core and extended filters. Support: Implementation-specific This filter can be used multiple times within the same rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#extension_ref DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#extension_ref}
  */
  readonly extensionRef?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRef;
  /**
  * RequestHeaderModifier defines a schema for a filter that modifies request headers. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#request_header_modifier DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#request_header_modifier}
  */
  readonly requestHeaderModifier?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier;
  /**
  * RequestMirror defines a schema for a filter that mirrors requests. Requests are sent to the specified destination, but responses from that destination are ignored. This filter can be used multiple times within the same rule. Note that not all implementations will be able to support mirroring to multiple backends. Support: Extended 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#request_mirror DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#request_mirror}
  */
  readonly requestMirror?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirror;
  /**
  * ResponseHeaderModifier defines a schema for a filter that modifies response headers. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#response_header_modifier DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#response_header_modifier}
  */
  readonly responseHeaderModifier?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier;
  /**
  * Type identifies the type of filter to apply. As with other API fields, types are classified into three conformance levels: - Core: Filter types and their corresponding configuration defined by 'Support: Core' in this package, e.g. 'RequestHeaderModifier'. All implementations supporting GRPCRoute MUST support core filters. - Extended: Filter types and their corresponding configuration defined by 'Support: Extended' in this package, e.g. 'RequestMirror'. Implementers are encouraged to support extended filters. - Implementation-specific: Filters that are defined and supported by specific vendors. In the future, filters showing convergence in behavior across multiple implementations will be considered for inclusion in extended or core conformance levels. Filter-specific configuration for such filters is specified using the ExtensionRef field. 'Type' MUST be set to 'ExtensionRef' for custom filters. Implementers are encouraged to define custom implementation types to extend the core API with implementation-specific behavior. If a reference to a custom filter type cannot be resolved, the filter MUST NOT be skipped. Instead, requests that would have been processed by that filter MUST receive a HTTP error response. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#type DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_ref: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRefToTerraform(struct!.extensionRef),
    request_header_modifier: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToTerraform(struct!.requestHeaderModifier),
    request_mirror: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorToTerraform(struct!.requestMirror),
    response_header_modifier: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToTerraform(struct!.responseHeaderModifier),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_ref: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRefToHclTerraform(struct!.extensionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRef",
    },
    request_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToHclTerraform(struct!.requestHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier",
    },
    request_mirror: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorToHclTerraform(struct!.requestMirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirror",
    },
    response_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToHclTerraform(struct!.responseHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionRef = this._extensionRef?.internalValue;
    }
    if (this._requestHeaderModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderModifier = this._requestHeaderModifier?.internalValue;
    }
    if (this._requestMirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirror = this._requestMirror?.internalValue;
    }
    if (this._responseHeaderModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderModifier = this._responseHeaderModifier?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionRef.internalValue = undefined;
      this._requestHeaderModifier.internalValue = undefined;
      this._requestMirror.internalValue = undefined;
      this._responseHeaderModifier.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensionRef.internalValue = value.extensionRef;
      this._requestHeaderModifier.internalValue = value.requestHeaderModifier;
      this._requestMirror.internalValue = value.requestMirror;
      this._responseHeaderModifier.internalValue = value.responseHeaderModifier;
      this._type = value.type;
    }
  }

  // extension_ref - computed: false, optional: true, required: false
  private _extensionRef = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRefOutputReference(this, "extension_ref");
  public get extensionRef() {
    return this._extensionRef;
  }
  public putExtensionRef(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersExtensionRef) {
    this._extensionRef.internalValue = value;
  }
  public resetExtensionRef() {
    this._extensionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionRefInput() {
    return this._extensionRef.internalValue;
  }

  // request_header_modifier - computed: false, optional: true, required: false
  private _requestHeaderModifier = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierOutputReference(this, "request_header_modifier");
  public get requestHeaderModifier() {
    return this._requestHeaderModifier;
  }
  public putRequestHeaderModifier(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier) {
    this._requestHeaderModifier.internalValue = value;
  }
  public resetRequestHeaderModifier() {
    this._requestHeaderModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderModifierInput() {
    return this._requestHeaderModifier.internalValue;
  }

  // request_mirror - computed: false, optional: true, required: false
  private _requestMirror = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirrorOutputReference(this, "request_mirror");
  public get requestMirror() {
    return this._requestMirror;
  }
  public putRequestMirror(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersRequestMirror) {
    this._requestMirror.internalValue = value;
  }
  public resetRequestMirror() {
    this._requestMirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorInput() {
    return this._requestMirror.internalValue;
  }

  // response_header_modifier - computed: false, optional: true, required: false
  private _responseHeaderModifier = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierOutputReference(this, "response_header_modifier");
  public get responseHeaderModifier() {
    return this._responseHeaderModifier;
  }
  public putResponseHeaderModifier(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier) {
    this._responseHeaderModifier.internalValue = value;
  }
  public resetResponseHeaderModifier() {
    this._responseHeaderModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderModifierInput() {
    return this._responseHeaderModifier.internalValue;
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
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefs {
  /**
  * Filters defined at this level MUST be executed if and only if the request is being forwarded to the backend defined here. Support: Implementation-specific (For broader support of filters, use the Filters field in GRPCRouteRule.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#filters DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#filters}
  */
  readonly filters?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable;
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#port DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Weight specifies the proportion of requests forwarded to the referenced backend. This is computed as weight/(sum of all weights in this BackendRefs list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. Weight is not a percentage and the sum of weights does not need to equal 100. If only one backend is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weight is set to 0, no traffic should be forwarded for this entry. If unspecified, weight defaults to 1. Support for this field varies based on the context where used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#weight DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersToTerraform, false)(struct!.filters),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersList",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._filters.internalValue = value.filters;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the referent. For example 'HTTPRoute' or 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#add DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#remove DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#set DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#port DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._port = value.port;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirror {
  /**
  * BackendRef references a resource where mirrored requests are sent. Mirrored requests must be sent only to a single destination endpoint within this BackendRef, irrespective of how many endpoints are present within this BackendRef. If the referent cannot be found, this BackendRef is invalid and must be dropped from the Gateway. The controller must ensure the 'ResolvedRefs' condition on the Route status is set to 'status: False' and not configure this backend in the underlying implementation. If there is a cross-namespace reference to an *existing* object that is not allowed by a ReferenceGrant, the controller must ensure the 'ResolvedRefs' condition on the Route is set to 'status: False', with the 'RefNotPermitted' reason and not configure this backend in the underlying implementation. In either error case, the Message of the 'ResolvedRefs' Condition should be used to provide more detail about the problem. Support: Extended for Kubernetes Service Support: Implementation-specific for any other resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#backend_ref DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#backend_ref}
  */
  readonly backendRef: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRef;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ref: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRefToTerraform(struct!.backendRef),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ref: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRefToHclTerraform(struct!.backendRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendRef = this._backendRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendRef.internalValue = value.backendRef;
    }
  }

  // backend_ref - computed: false, optional: false, required: true
  private _backendRef = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRefOutputReference(this, "backend_ref");
  public get backendRef() {
    return this._backendRef;
  }
  public putBackendRef(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorBackendRef) {
    this._backendRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefInput() {
    return this._backendRef.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#add DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#remove DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#set DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFilters {
  /**
  * ExtensionRef is an optional, implementation-specific extension to the 'filter' behavior. For example, resource 'myroutefilter' in group 'networking.example.net'). ExtensionRef MUST NOT be used for core and extended filters. Support: Implementation-specific This filter can be used multiple times within the same rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#extension_ref DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#extension_ref}
  */
  readonly extensionRef?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRef;
  /**
  * RequestHeaderModifier defines a schema for a filter that modifies request headers. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#request_header_modifier DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#request_header_modifier}
  */
  readonly requestHeaderModifier?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifier;
  /**
  * RequestMirror defines a schema for a filter that mirrors requests. Requests are sent to the specified destination, but responses from that destination are ignored. This filter can be used multiple times within the same rule. Note that not all implementations will be able to support mirroring to multiple backends. Support: Extended 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#request_mirror DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#request_mirror}
  */
  readonly requestMirror?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirror;
  /**
  * ResponseHeaderModifier defines a schema for a filter that modifies response headers. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#response_header_modifier DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#response_header_modifier}
  */
  readonly responseHeaderModifier?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifier;
  /**
  * Type identifies the type of filter to apply. As with other API fields, types are classified into three conformance levels: - Core: Filter types and their corresponding configuration defined by 'Support: Core' in this package, e.g. 'RequestHeaderModifier'. All implementations supporting GRPCRoute MUST support core filters. - Extended: Filter types and their corresponding configuration defined by 'Support: Extended' in this package, e.g. 'RequestMirror'. Implementers are encouraged to support extended filters. - Implementation-specific: Filters that are defined and supported by specific vendors. In the future, filters showing convergence in behavior across multiple implementations will be considered for inclusion in extended or core conformance levels. Filter-specific configuration for such filters is specified using the ExtensionRef field. 'Type' MUST be set to 'ExtensionRef' for custom filters. Implementers are encouraged to define custom implementation types to extend the core API with implementation-specific behavior. If a reference to a custom filter type cannot be resolved, the filter MUST NOT be skipped. Instead, requests that would have been processed by that filter MUST receive a HTTP error response. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#type DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_ref: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRefToTerraform(struct!.extensionRef),
    request_header_modifier: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierToTerraform(struct!.requestHeaderModifier),
    request_mirror: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorToTerraform(struct!.requestMirror),
    response_header_modifier: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierToTerraform(struct!.responseHeaderModifier),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_ref: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRefToHclTerraform(struct!.extensionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRef",
    },
    request_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierToHclTerraform(struct!.requestHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifier",
    },
    request_mirror: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorToHclTerraform(struct!.requestMirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirror",
    },
    response_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierToHclTerraform(struct!.responseHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifier",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionRef = this._extensionRef?.internalValue;
    }
    if (this._requestHeaderModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderModifier = this._requestHeaderModifier?.internalValue;
    }
    if (this._requestMirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirror = this._requestMirror?.internalValue;
    }
    if (this._responseHeaderModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderModifier = this._responseHeaderModifier?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionRef.internalValue = undefined;
      this._requestHeaderModifier.internalValue = undefined;
      this._requestMirror.internalValue = undefined;
      this._responseHeaderModifier.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensionRef.internalValue = value.extensionRef;
      this._requestHeaderModifier.internalValue = value.requestHeaderModifier;
      this._requestMirror.internalValue = value.requestMirror;
      this._responseHeaderModifier.internalValue = value.responseHeaderModifier;
      this._type = value.type;
    }
  }

  // extension_ref - computed: false, optional: true, required: false
  private _extensionRef = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRefOutputReference(this, "extension_ref");
  public get extensionRef() {
    return this._extensionRef;
  }
  public putExtensionRef(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersExtensionRef) {
    this._extensionRef.internalValue = value;
  }
  public resetExtensionRef() {
    this._extensionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionRefInput() {
    return this._extensionRef.internalValue;
  }

  // request_header_modifier - computed: false, optional: true, required: false
  private _requestHeaderModifier = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifierOutputReference(this, "request_header_modifier");
  public get requestHeaderModifier() {
    return this._requestHeaderModifier;
  }
  public putRequestHeaderModifier(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestHeaderModifier) {
    this._requestHeaderModifier.internalValue = value;
  }
  public resetRequestHeaderModifier() {
    this._requestHeaderModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderModifierInput() {
    return this._requestHeaderModifier.internalValue;
  }

  // request_mirror - computed: false, optional: true, required: false
  private _requestMirror = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirrorOutputReference(this, "request_mirror");
  public get requestMirror() {
    return this._requestMirror;
  }
  public putRequestMirror(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersRequestMirror) {
    this._requestMirror.internalValue = value;
  }
  public resetRequestMirror() {
    this._requestMirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorInput() {
    return this._requestMirror.internalValue;
  }

  // response_header_modifier - computed: false, optional: true, required: false
  private _responseHeaderModifier = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifierOutputReference(this, "response_header_modifier");
  public get responseHeaderModifier() {
    return this._responseHeaderModifier;
  }
  public putResponseHeaderModifier(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersResponseHeaderModifier) {
    this._responseHeaderModifier.internalValue = value;
  }
  public resetResponseHeaderModifier() {
    this._responseHeaderModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderModifierInput() {
    return this._responseHeaderModifier.internalValue;
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
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeaders {
  /**
  * Name is the name of the gRPC Header to be matched. If multiple entries specify equivalent header names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#type DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of the gRPC Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeaders | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._type = value.type;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethod {
  /**
  * Value of the method to match against. If left empty or omitted, will match all services. At least one of Service and Method MUST be a non-empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#method DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#method}
  */
  readonly method?: string;
  /**
  * Value of the service to match against. If left empty or omitted, will match any service. At least one of Service and Method MUST be a non-empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#service DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#service}
  */
  readonly service?: string;
  /**
  * Type specifies how to match against the service and/or method. Support: Core (Exact with service and method specified) Support: Implementation-specific (Exact with method specified but no service specified) Support: Implementation-specific (RegularExpression)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#type DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethodToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    service: cdktf.stringToTerraform(struct!.service),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethodToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._service = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._service = value.service;
      this._type = value.type;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatches {
  /**
  * Headers specifies gRPC request header matchers. Multiple match values are ANDed together, meaning, a request MUST match all the specified headers to select the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#headers DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#headers}
  */
  readonly headers?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable;
  /**
  * Method specifies a gRPC request service/method matcher. If this field is not specified, all services and methods will match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#method DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#method}
  */
  readonly method?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethod;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersToTerraform, false)(struct!.headers),
    method: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethodToTerraform(struct!.method),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersList",
    },
    method: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._method.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._method.internalValue = value.method;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRules {
  /**
  * BackendRefs defines the backend(s) where matching requests should be sent. Failure behavior here depends on how many BackendRefs are specified and how many are invalid. If *all* entries in BackendRefs are invalid, and there are also no filters specified in this route rule, *all* traffic which matches this rule MUST receive an 'UNAVAILABLE' status. See the GRPCBackendRef definition for the rules about what makes a single GRPCBackendRef invalid. When a GRPCBackendRef is invalid, 'UNAVAILABLE' statuses MUST be returned for requests that would have otherwise been routed to an invalid backend. If multiple backends are specified, and some are invalid, the proportion of requests that would otherwise have been routed to an invalid backend MUST receive an 'UNAVAILABLE' status. For example, if two backends are specified with equal weights, and one is invalid, 50 percent of traffic MUST receive an 'UNAVAILABLE' status. Implementations may choose how that 50 percent is determined. Support: Core for Kubernetes Service Support: Implementation-specific for any other resource Support for weight: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#backend_refs DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#backend_refs}
  */
  readonly backendRefs?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefs[] | cdktf.IResolvable;
  /**
  * Filters define the filters that are applied to requests that match this rule. The effects of ordering of multiple behaviors are currently unspecified. This can change in the future based on feedback during the alpha stage. Conformance-levels at this level are defined based on the type of filter: - ALL core filters MUST be supported by all implementations that support GRPCRoute. - Implementers are encouraged to support extended filters. - Implementation-specific custom filters have no API guarantees across implementations. Specifying the same filter multiple times is not supported unless explicitly indicated in the filter. If an implementation can not support a combination of filters, it must clearly document that limitation. In cases where incompatible or unsupported filters are specified and cause the 'Accepted' condition to be set to status 'False', implementations may use the 'IncompatibleFilters' reason to specify this configuration error. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#filters DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#filters}
  */
  readonly filters?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFilters[] | cdktf.IResolvable;
  /**
  * Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if **any** one of the matches is satisfied. For example, take the following matches configuration: ``` matches: - method: service: foo.bar headers: values: version: 2 - method: service: foo.bar.v2 ``` For a request to match against this rule, it MUST satisfy EITHER of the two conditions: - service of foo.bar AND contains the header 'version: 2' - service of foo.bar.v2 See the documentation for GRPCRouteMatch on how to specify multiple match conditions to be ANDed together. If no matches are specified, the implementation MUST match every gRPC request. Proxy or Load Balancer routing configuration generated from GRPCRoutes MUST prioritize rules based on the following criteria, continuing on ties. Merging MUST not be done between GRPCRoutes and HTTPRoutes. Precedence MUST be given to the rule with the largest number of: * Characters in a matching non-wildcard hostname. * Characters in a matching hostname. * Characters in a matching service. * Characters in a matching method. * Header matches. If ties still exist across multiple Routes, matching precedence MUST be determined in order of the following criteria, continuing on ties: * The oldest Route based on creation timestamp. * The Route appearing first in alphabetical order by '{namespace}/{name}'. If ties still exist within the Route that has been given precedence, matching precedence MUST be granted to the first matching rule meeting the above criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#matches DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#matches}
  */
  readonly matches?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatches[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsToTerraform, false)(struct!.backendRefs),
    filters: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersToTerraform, false)(struct!.filters),
    matches: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesToTerraform, false)(struct!.matches),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsToHclTerraform, false)(struct!.backendRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsList",
    },
    filters: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersList",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendRefs = this._backendRefs?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRefs.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendRefs.internalValue = value.backendRefs;
      this._filters.internalValue = value.filters;
      this._matches.internalValue = value.matches;
    }
  }

  // backend_refs - computed: false, optional: true, required: false
  private _backendRefs = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefsList(this, "backend_refs", false);
  public get backendRefs() {
    return this._backendRefs;
  }
  public putBackendRefs(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesBackendRefs[] | cdktf.IResolvable) {
    this._backendRefs.internalValue = value;
  }
  public resetBackendRefs() {
    this._backendRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefsInput() {
    return this._backendRefs.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpec {
  /**
  * Hostnames defines a set of hostnames to match against the GRPC Host header to select a GRPCRoute to process the request. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: 1. IPs are not allowed. 2. A hostname may be prefixed with a wildcard label ('*.'). The wildcard label MUST appear by itself as the first label. If a hostname is specified by both the Listener and GRPCRoute, there MUST be at least one intersecting hostname for the GRPCRoute to be attached to the Listener. For example: * A Listener with 'test.example.com' as the hostname matches GRPCRoutes that have either not specified any hostnames, or have specified at least one of 'test.example.com' or '*.example.com'. * A Listener with '*.example.com' as the hostname matches GRPCRoutes that have either not specified any hostnames or have specified at least one hostname that matches the Listener hostname. For example, 'test.example.com' and '*.example.com' would both match. On the other hand, 'example.com' and 'test.example.net' would not match. Hostnames that are prefixed with a wildcard label ('*.') are interpreted as a suffix match. That means that a match for '*.example.com' would match both 'test.example.com', and 'foo.test.example.com', but not 'example.com'. If both the Listener and GRPCRoute have specified hostnames, any GRPCRoute hostnames that do not match the Listener hostname MUST be ignored. For example, if a Listener specified '*.example.com', and the GRPCRoute specified 'test.example.com' and 'test.example.net', 'test.example.net' MUST NOT be considered for a match. If both the Listener and GRPCRoute have specified hostnames, and none match with the criteria above, then the GRPCRoute MUST NOT be accepted by the implementation. The implementation MUST raise an 'Accepted' Condition with a status of 'False' in the corresponding RouteParentStatus. If a Route (A) of type HTTPRoute or GRPCRoute is attached to a Listener and that listener already has another Route (B) of the other type attached and the intersection of the hostnames of A and B is non-empty, then the implementation MUST accept exactly one of these two routes, determined by the following criteria, in order: * The oldest Route based on creation timestamp. * The Route appearing first in alphabetical order by '{namespace}/{name}'. The rejected Route MUST raise an 'Accepted' condition with a status of 'False' in the corresponding RouteParentStatus. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#hostnames DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * ParentRefs references the resources (usually Gateways) that a Route wants to be attached to. Note that the referenced parent resource needs to allow this for the attachment to be complete. For Gateways, that means the Gateway needs to allow attachment from Routes of this kind and namespace. For Services, that means the Service must either be in the same namespace for a 'producer' route, or the mesh implementation must support and allow 'consumer' routes for the referenced Service. ReferenceGrant is not applicable for governing ParentRefs to Services - it is not possible to create a 'producer' route for a Service in a different namespace from the Route. There are two kinds of parent resources with 'Core' support: * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, ClusterIP Services only) This API may be extended in the future to support additional kinds of parent resources. ParentRefs must be _distinct_. This means either that: * They select different objects. If this is the case, then parentRef entries are distinct. In terms of fields, this means that the multi-part key defined by 'group', 'kind', 'namespace', and 'name' must be unique across all parentRef entries in the Route. * They do not select different objects, but for each optional field used, each ParentRef that selects the same object must set the same set of optional fields to different values. If one ParentRef sets a combination of optional fields, all must set the same combination. Some examples: * If one ParentRef sets 'sectionName', all ParentRefs referencing the same object must also set 'sectionName'. * If one ParentRef sets 'port', all ParentRefs referencing the same object must also set 'port'. * If one ParentRef sets 'sectionName' and 'port', all ParentRefs referencing the same object must also set 'sectionName' and 'port'. It is possible to separately reference multiple distinct objects that may be collapsed by an implementation. For example, some implementations may choose to merge compatible Gateway Listeners together. If that is the case, the list of routes attached to those resources should also be merged. Note that for ParentRefs that cross namespace boundaries, there are specific rules. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example, Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable other kinds of cross-namespace reference. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#parent_refs DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#parent_refs}
  */
  readonly parentRefs?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefs[] | cdktf.IResolvable;
  /**
  * Rules are a list of GRPC matchers, filters and actions. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#rules DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest#rules}
  */
  readonly rules?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRules[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    parent_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsToTerraform, false)(struct!.parentRefs),
    rules: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parent_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsToHclTerraform, false)(struct!.parentRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsList",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._parentRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRefs = this._parentRefs?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._parentRefs.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._parentRefs.internalValue = value.parentRefs;
      this._rules.internalValue = value.rules;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // parent_refs - computed: false, optional: true, required: false
  private _parentRefs = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefsList(this, "parent_refs", false);
  public get parentRefs() {
    return this._parentRefs;
  }
  public putParentRefs(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecParentRefs[] | cdktf.IResolvable) {
    this._parentRefs.internalValue = value;
  }
  public resetParentRefs() {
    this._parentRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefsInput() {
    return this._parentRefs.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest k8s_gateway_networking_k8s_io_grpc_route_v1_manifest}
*/
export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_networking_k8s_io_grpc_route_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNetworkingK8SIoGrpcRouteV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_networking_k8s_io_grpc_route_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1_manifest k8s_gateway_networking_k8s_io_grpc_route_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_networking_k8s_io_grpc_route_v1_manifest',
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
  private _metadata = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpec) {
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
      metadata: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
