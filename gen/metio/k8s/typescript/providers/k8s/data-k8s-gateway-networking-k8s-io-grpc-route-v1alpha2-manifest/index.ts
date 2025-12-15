// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#metadata DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadata;
  /**
  * Spec defines the desired state of GRPCRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#spec DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpec;
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#annotations DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#labels DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefs {
  /**
  * Group is the group of the referent. When unspecified, 'gateway.networking.k8s.io' is inferred. To set the core API group (such as for a 'Service' kind referent), Group must be explicitly set to '' (empty string). Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is kind of the referent. There are two kinds of parent resources with 'Core' support: * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, ClusterIP Services only) Support for other resources is Implementation-Specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route. Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource. When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set 'Port' unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values. Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted. For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#port DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following: * Gateway: Listener name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted. When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#section_name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#section_name}
  */
  readonly sectionName?: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefs | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefs | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefs | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the referent. For example 'HTTPRoute' or 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#add DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#remove DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#set DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#port DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirror {
  /**
  * BackendRef references a resource where mirrored requests are sent. Mirrored requests must be sent only to a single destination endpoint within this BackendRef, irrespective of how many endpoints are present within this BackendRef. If the referent cannot be found, this BackendRef is invalid and must be dropped from the Gateway. The controller must ensure the 'ResolvedRefs' condition on the Route status is set to 'status: False' and not configure this backend in the underlying implementation. If there is a cross-namespace reference to an *existing* object that is not allowed by a ReferenceGrant, the controller must ensure the 'ResolvedRefs' condition on the Route is set to 'status: False', with the 'RefNotPermitted' reason and not configure this backend in the underlying implementation. In either error case, the Message of the 'ResolvedRefs' Condition should be used to provide more detail about the problem. Support: Extended for Kubernetes Service Support: Implementation-specific for any other resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#backend_ref DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#backend_ref}
  */
  readonly backendRef: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ref: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToTerraform(struct!.backendRef),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ref: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToHclTerraform(struct!.backendRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable | undefined) {
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
  private _backendRef = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefOutputReference(this, "backend_ref");
  public get backendRef() {
    return this._backendRef;
  }
  public putBackendRef(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef) {
    this._backendRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefInput() {
    return this._backendRef.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#add DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#remove DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#set DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFilters {
  /**
  * ExtensionRef is an optional, implementation-specific extension to the 'filter' behavior. For example, resource 'myroutefilter' in group 'networking.example.net'). ExtensionRef MUST NOT be used for core and extended filters. Support: Implementation-specific This filter can be used multiple times within the same rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#extension_ref DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#extension_ref}
  */
  readonly extensionRef?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRef;
  /**
  * RequestHeaderModifier defines a schema for a filter that modifies request headers. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#request_header_modifier DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#request_header_modifier}
  */
  readonly requestHeaderModifier?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier;
  /**
  * RequestMirror defines a schema for a filter that mirrors requests. Requests are sent to the specified destination, but responses from that destination are ignored. This filter can be used multiple times within the same rule. Note that not all implementations will be able to support mirroring to multiple backends. Support: Extended 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#request_mirror DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#request_mirror}
  */
  readonly requestMirror?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirror;
  /**
  * ResponseHeaderModifier defines a schema for a filter that modifies response headers. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#response_header_modifier DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#response_header_modifier}
  */
  readonly responseHeaderModifier?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier;
  /**
  * Type identifies the type of filter to apply. As with other API fields, types are classified into three conformance levels: - Core: Filter types and their corresponding configuration defined by 'Support: Core' in this package, e.g. 'RequestHeaderModifier'. All implementations supporting GRPCRoute MUST support core filters. - Extended: Filter types and their corresponding configuration defined by 'Support: Extended' in this package, e.g. 'RequestMirror'. Implementers are encouraged to support extended filters. - Implementation-specific: Filters that are defined and supported by specific vendors. In the future, filters showing convergence in behavior across multiple implementations will be considered for inclusion in extended or core conformance levels. Filter-specific configuration for such filters is specified using the ExtensionRef field. 'Type' MUST be set to 'ExtensionRef' for custom filters. Implementers are encouraged to define custom implementation types to extend the core API with implementation-specific behavior. If a reference to a custom filter type cannot be resolved, the filter MUST NOT be skipped. Instead, requests that would have been processed by that filter MUST receive a HTTP error response. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#type DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_ref: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRefToTerraform(struct!.extensionRef),
    request_header_modifier: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToTerraform(struct!.requestHeaderModifier),
    request_mirror: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorToTerraform(struct!.requestMirror),
    response_header_modifier: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToTerraform(struct!.responseHeaderModifier),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_ref: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRefToHclTerraform(struct!.extensionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRef",
    },
    request_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToHclTerraform(struct!.requestHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier",
    },
    request_mirror: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorToHclTerraform(struct!.requestMirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirror",
    },
    response_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToHclTerraform(struct!.responseHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier",
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable | undefined) {
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
  private _extensionRef = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRefOutputReference(this, "extension_ref");
  public get extensionRef() {
    return this._extensionRef;
  }
  public putExtensionRef(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersExtensionRef) {
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
  private _requestHeaderModifier = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierOutputReference(this, "request_header_modifier");
  public get requestHeaderModifier() {
    return this._requestHeaderModifier;
  }
  public putRequestHeaderModifier(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier) {
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
  private _requestMirror = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirrorOutputReference(this, "request_mirror");
  public get requestMirror() {
    return this._requestMirror;
  }
  public putRequestMirror(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersRequestMirror) {
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
  private _responseHeaderModifier = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierOutputReference(this, "response_header_modifier");
  public get responseHeaderModifier() {
    return this._responseHeaderModifier;
  }
  public putResponseHeaderModifier(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefs {
  /**
  * Filters defined at this level MUST be executed if and only if the request is being forwarded to the backend defined here. Support: Implementation-specific (For broader support of filters, use the Filters field in GRPCRouteRule.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#filters DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#filters}
  */
  readonly filters?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable;
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#port DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * Weight specifies the proportion of requests forwarded to the referenced backend. This is computed as weight/(sum of all weights in this BackendRefs list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. Weight is not a percentage and the sum of weights does not need to equal 100. If only one backend is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weight is set to 0, no traffic should be forwarded for this entry. If unspecified, weight defaults to 1. Support for this field varies based on the context where used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#weight DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersToTerraform, false)(struct!.filters),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersList",
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefs | cdktf.IResolvable | undefined) {
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
  private _filters = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the referent. For example 'HTTPRoute' or 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#add DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#remove DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#set DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#group DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#kind DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#namespace DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#port DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirror {
  /**
  * BackendRef references a resource where mirrored requests are sent. Mirrored requests must be sent only to a single destination endpoint within this BackendRef, irrespective of how many endpoints are present within this BackendRef. If the referent cannot be found, this BackendRef is invalid and must be dropped from the Gateway. The controller must ensure the 'ResolvedRefs' condition on the Route status is set to 'status: False' and not configure this backend in the underlying implementation. If there is a cross-namespace reference to an *existing* object that is not allowed by a ReferenceGrant, the controller must ensure the 'ResolvedRefs' condition on the Route is set to 'status: False', with the 'RefNotPermitted' reason and not configure this backend in the underlying implementation. In either error case, the Message of the 'ResolvedRefs' Condition should be used to provide more detail about the problem. Support: Extended for Kubernetes Service Support: Implementation-specific for any other resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#backend_ref DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#backend_ref}
  */
  readonly backendRef: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRef;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ref: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRefToTerraform(struct!.backendRef),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ref: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRefToHclTerraform(struct!.backendRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable | undefined) {
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
  private _backendRef = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRefOutputReference(this, "backend_ref");
  public get backendRef() {
    return this._backendRef;
  }
  public putBackendRef(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorBackendRef) {
    this._backendRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefInput() {
    return this._backendRef.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#add DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#remove DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#set DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFilters {
  /**
  * ExtensionRef is an optional, implementation-specific extension to the 'filter' behavior. For example, resource 'myroutefilter' in group 'networking.example.net'). ExtensionRef MUST NOT be used for core and extended filters. Support: Implementation-specific This filter can be used multiple times within the same rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#extension_ref DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#extension_ref}
  */
  readonly extensionRef?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRef;
  /**
  * RequestHeaderModifier defines a schema for a filter that modifies request headers. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#request_header_modifier DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#request_header_modifier}
  */
  readonly requestHeaderModifier?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifier;
  /**
  * RequestMirror defines a schema for a filter that mirrors requests. Requests are sent to the specified destination, but responses from that destination are ignored. This filter can be used multiple times within the same rule. Note that not all implementations will be able to support mirroring to multiple backends. Support: Extended 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#request_mirror DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#request_mirror}
  */
  readonly requestMirror?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirror;
  /**
  * ResponseHeaderModifier defines a schema for a filter that modifies response headers. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#response_header_modifier DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#response_header_modifier}
  */
  readonly responseHeaderModifier?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifier;
  /**
  * Type identifies the type of filter to apply. As with other API fields, types are classified into three conformance levels: - Core: Filter types and their corresponding configuration defined by 'Support: Core' in this package, e.g. 'RequestHeaderModifier'. All implementations supporting GRPCRoute MUST support core filters. - Extended: Filter types and their corresponding configuration defined by 'Support: Extended' in this package, e.g. 'RequestMirror'. Implementers are encouraged to support extended filters. - Implementation-specific: Filters that are defined and supported by specific vendors. In the future, filters showing convergence in behavior across multiple implementations will be considered for inclusion in extended or core conformance levels. Filter-specific configuration for such filters is specified using the ExtensionRef field. 'Type' MUST be set to 'ExtensionRef' for custom filters. Implementers are encouraged to define custom implementation types to extend the core API with implementation-specific behavior. If a reference to a custom filter type cannot be resolved, the filter MUST NOT be skipped. Instead, requests that would have been processed by that filter MUST receive a HTTP error response. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#type DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_ref: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRefToTerraform(struct!.extensionRef),
    request_header_modifier: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierToTerraform(struct!.requestHeaderModifier),
    request_mirror: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorToTerraform(struct!.requestMirror),
    response_header_modifier: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierToTerraform(struct!.responseHeaderModifier),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_ref: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRefToHclTerraform(struct!.extensionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRef",
    },
    request_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierToHclTerraform(struct!.requestHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifier",
    },
    request_mirror: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorToHclTerraform(struct!.requestMirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirror",
    },
    response_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierToHclTerraform(struct!.responseHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifier",
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFilters | cdktf.IResolvable | undefined) {
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
  private _extensionRef = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRefOutputReference(this, "extension_ref");
  public get extensionRef() {
    return this._extensionRef;
  }
  public putExtensionRef(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersExtensionRef) {
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
  private _requestHeaderModifier = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifierOutputReference(this, "request_header_modifier");
  public get requestHeaderModifier() {
    return this._requestHeaderModifier;
  }
  public putRequestHeaderModifier(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestHeaderModifier) {
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
  private _requestMirror = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirrorOutputReference(this, "request_mirror");
  public get requestMirror() {
    return this._requestMirror;
  }
  public putRequestMirror(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersRequestMirror) {
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
  private _responseHeaderModifier = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifierOutputReference(this, "response_header_modifier");
  public get responseHeaderModifier() {
    return this._responseHeaderModifier;
  }
  public putResponseHeaderModifier(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersResponseHeaderModifier) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeaders {
  /**
  * Name is the name of the gRPC Header to be matched. If multiple entries specify equivalent header names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#name DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#type DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of the gRPC Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#value DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeaders | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeaders | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethod {
  /**
  * Value of the method to match against. If left empty or omitted, will match all services. At least one of Service and Method MUST be a non-empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#method DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#method}
  */
  readonly method?: string;
  /**
  * Value of the service to match against. If left empty or omitted, will match any service. At least one of Service and Method MUST be a non-empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#service DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#service}
  */
  readonly service?: string;
  /**
  * Type specifies how to match against the service and/or method. Support: Core (Exact with service and method specified) Support: Implementation-specific (Exact with method specified but no service specified) Support: Implementation-specific (RegularExpression)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#type DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethodToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethod | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethodToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethod | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethod | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatches {
  /**
  * Headers specifies gRPC request header matchers. Multiple match values are ANDed together, meaning, a request MUST match all the specified headers to select the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#headers DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#headers}
  */
  readonly headers?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable;
  /**
  * Method specifies a gRPC request service/method matcher. If this field is not specified, all services and methods will match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#method DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#method}
  */
  readonly method?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethod;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersToTerraform, false)(struct!.headers),
    method: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethodToTerraform(struct!.method),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersList",
    },
    method: {
      value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatches | cdktf.IResolvable | undefined) {
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
  private _headers = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable) {
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
  private _method = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesMethod) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRules {
  /**
  * BackendRefs defines the backend(s) where matching requests should be sent. Failure behavior here depends on how many BackendRefs are specified and how many are invalid. If *all* entries in BackendRefs are invalid, and there are also no filters specified in this route rule, *all* traffic which matches this rule MUST receive an 'UNAVAILABLE' status. See the GRPCBackendRef definition for the rules about what makes a single GRPCBackendRef invalid. When a GRPCBackendRef is invalid, 'UNAVAILABLE' statuses MUST be returned for requests that would have otherwise been routed to an invalid backend. If multiple backends are specified, and some are invalid, the proportion of requests that would otherwise have been routed to an invalid backend MUST receive an 'UNAVAILABLE' status. For example, if two backends are specified with equal weights, and one is invalid, 50 percent of traffic MUST receive an 'UNAVAILABLE' status. Implementations may choose how that 50 percent is determined. Support: Core for Kubernetes Service Support: Implementation-specific for any other resource Support for weight: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#backend_refs DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#backend_refs}
  */
  readonly backendRefs?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefs[] | cdktf.IResolvable;
  /**
  * Filters define the filters that are applied to requests that match this rule. The effects of ordering of multiple behaviors are currently unspecified. This can change in the future based on feedback during the alpha stage. Conformance-levels at this level are defined based on the type of filter: - ALL core filters MUST be supported by all implementations that support GRPCRoute. - Implementers are encouraged to support extended filters. - Implementation-specific custom filters have no API guarantees across implementations. Specifying the same filter multiple times is not supported unless explicitly indicated in the filter. If an implementation can not support a combination of filters, it must clearly document that limitation. In cases where incompatible or unsupported filters are specified and cause the 'Accepted' condition to be set to status 'False', implementations may use the 'IncompatibleFilters' reason to specify this configuration error. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#filters DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#filters}
  */
  readonly filters?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFilters[] | cdktf.IResolvable;
  /**
  * Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if **any** one of the matches is satisfied. For example, take the following matches configuration: ``` matches: - method: service: foo.bar headers: values: version: 2 - method: service: foo.bar.v2 ``` For a request to match against this rule, it MUST satisfy EITHER of the two conditions: - service of foo.bar AND contains the header 'version: 2' - service of foo.bar.v2 See the documentation for GRPCRouteMatch on how to specify multiple match conditions to be ANDed together. If no matches are specified, the implementation MUST match every gRPC request. Proxy or Load Balancer routing configuration generated from GRPCRoutes MUST prioritize rules based on the following criteria, continuing on ties. Merging MUST not be done between GRPCRoutes and HTTPRoutes. Precedence MUST be given to the rule with the largest number of: * Characters in a matching non-wildcard hostname. * Characters in a matching hostname. * Characters in a matching service. * Characters in a matching method. * Header matches. If ties still exist across multiple Routes, matching precedence MUST be determined in order of the following criteria, continuing on ties: * The oldest Route based on creation timestamp. * The Route appearing first in alphabetical order by '{namespace}/{name}'. If ties still exist within the Route that has been given precedence, matching precedence MUST be granted to the first matching rule meeting the above criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#matches DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#matches}
  */
  readonly matches?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatches[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsToTerraform, false)(struct!.backendRefs),
    filters: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersToTerraform, false)(struct!.filters),
    matches: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesToTerraform, false)(struct!.matches),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsToHclTerraform, false)(struct!.backendRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsList",
    },
    filters: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersList",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRules | cdktf.IResolvable | undefined) {
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
  private _backendRefs = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefsList(this, "backend_refs", false);
  public get backendRefs() {
    return this._backendRefs;
  }
  public putBackendRefs(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesBackendRefs[] | cdktf.IResolvable) {
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
  private _filters = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesFilters[] | cdktf.IResolvable) {
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
  private _matches = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesMatches[] | cdktf.IResolvable) {
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

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesOutputReference {
    return new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpec {
  /**
  * Hostnames defines a set of hostnames to match against the GRPC Host header to select a GRPCRoute to process the request. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: 1. IPs are not allowed. 2. A hostname may be prefixed with a wildcard label ('*.'). The wildcard label MUST appear by itself as the first label. If a hostname is specified by both the Listener and GRPCRoute, there MUST be at least one intersecting hostname for the GRPCRoute to be attached to the Listener. For example: * A Listener with 'test.example.com' as the hostname matches GRPCRoutes that have either not specified any hostnames, or have specified at least one of 'test.example.com' or '*.example.com'. * A Listener with '*.example.com' as the hostname matches GRPCRoutes that have either not specified any hostnames or have specified at least one hostname that matches the Listener hostname. For example, 'test.example.com' and '*.example.com' would both match. On the other hand, 'example.com' and 'test.example.net' would not match. Hostnames that are prefixed with a wildcard label ('*.') are interpreted as a suffix match. That means that a match for '*.example.com' would match both 'test.example.com', and 'foo.test.example.com', but not 'example.com'. If both the Listener and GRPCRoute have specified hostnames, any GRPCRoute hostnames that do not match the Listener hostname MUST be ignored. For example, if a Listener specified '*.example.com', and the GRPCRoute specified 'test.example.com' and 'test.example.net', 'test.example.net' MUST NOT be considered for a match. If both the Listener and GRPCRoute have specified hostnames, and none match with the criteria above, then the GRPCRoute MUST NOT be accepted by the implementation. The implementation MUST raise an 'Accepted' Condition with a status of 'False' in the corresponding RouteParentStatus. If a Route (A) of type HTTPRoute or GRPCRoute is attached to a Listener and that listener already has another Route (B) of the other type attached and the intersection of the hostnames of A and B is non-empty, then the implementation MUST accept exactly one of these two routes, determined by the following criteria, in order: * The oldest Route based on creation timestamp. * The Route appearing first in alphabetical order by '{namespace}/{name}'. The rejected Route MUST raise an 'Accepted' condition with a status of 'False' in the corresponding RouteParentStatus. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#hostnames DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * ParentRefs references the resources (usually Gateways) that a Route wants to be attached to. Note that the referenced parent resource needs to allow this for the attachment to be complete. For Gateways, that means the Gateway needs to allow attachment from Routes of this kind and namespace. For Services, that means the Service must either be in the same namespace for a 'producer' route, or the mesh implementation must support and allow 'consumer' routes for the referenced Service. ReferenceGrant is not applicable for governing ParentRefs to Services - it is not possible to create a 'producer' route for a Service in a different namespace from the Route. There are two kinds of parent resources with 'Core' support: * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, ClusterIP Services only) This API may be extended in the future to support additional kinds of parent resources. ParentRefs must be _distinct_. This means either that: * They select different objects. If this is the case, then parentRef entries are distinct. In terms of fields, this means that the multi-part key defined by 'group', 'kind', 'namespace', and 'name' must be unique across all parentRef entries in the Route. * They do not select different objects, but for each optional field used, each ParentRef that selects the same object must set the same set of optional fields to different values. If one ParentRef sets a combination of optional fields, all must set the same combination. Some examples: * If one ParentRef sets 'sectionName', all ParentRefs referencing the same object must also set 'sectionName'. * If one ParentRef sets 'port', all ParentRefs referencing the same object must also set 'port'. * If one ParentRef sets 'sectionName' and 'port', all ParentRefs referencing the same object must also set 'sectionName' and 'port'. It is possible to separately reference multiple distinct objects that may be collapsed by an implementation. For example, some implementations may choose to merge compatible Gateway Listeners together. If that is the case, the list of routes attached to those resources should also be merged. Note that for ParentRefs that cross namespace boundaries, there are specific rules. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example, Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable other kinds of cross-namespace reference. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#parent_refs DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#parent_refs}
  */
  readonly parentRefs?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefs[] | cdktf.IResolvable;
  /**
  * Rules are a list of GRPC matchers, filters and actions. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#rules DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest#rules}
  */
  readonly rules?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRules[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecToTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    parent_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsToTerraform, false)(struct!.parentRefs),
    rules: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpec | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsToHclTerraform, false)(struct!.parentRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsList",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _parentRefs = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefsList(this, "parent_refs", false);
  public get parentRefs() {
    return this._parentRefs;
  }
  public putParentRefs(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecParentRefs[] | cdktf.IResolvable) {
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
  private _rules = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecRules[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest k8s_gateway_networking_k8s_io_grpc_route_v1alpha2_manifest}
*/
export class DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_networking_k8s_io_grpc_route_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_networking_k8s_io_grpc_route_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_grpc_route_v1alpha2_manifest k8s_gateway_networking_k8s_io_grpc_route_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_networking_k8s_io_grpc_route_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpec) {
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
      metadata: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoGrpcRouteV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
