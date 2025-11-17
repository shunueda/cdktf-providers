// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#metadata DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadata;
  /**
  * Spec defines the desired state of HTTPRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#spec DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpec;
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#annotations DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#labels DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadataToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefs {
  /**
  * Group is the group of the referent. When unspecified, 'gateway.networking.k8s.io' is inferred. To set the core API group (such as for a 'Service' kind referent), Group must be explicitly set to '' (empty string). Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is kind of the referent. There are two kinds of parent resources with 'Core' support: * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, ClusterIP Services only) Support for other resources is Implementation-Specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the referent. When unspecified, this refers to the local namespace of the Route. Note that there are specific rules for ParentRefs which cross namespace boundaries. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example: Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable any other kind of cross-namespace reference. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port is the network port this Route targets. It can be interpreted differently based on the type of parent resource. When the parent resource is a Gateway, this targets all listeners listening on the specified port that also support this kind of Route(and select this Route). It's not recommended to set 'Port' unless the networking behaviors specified in a Route must apply to a specific port as opposed to a listener(s) whose port(s) may be changed. When both Port and SectionName are specified, the name and port of the selected listener must match both specified values. Implementations MAY choose to support other parent resources. Implementations supporting other types of parent resources MUST clearly document how/if Port is interpreted. For the purpose of status, an attachment is considered successful as long as the parent resource accepts it partially. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#port DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following: * Gateway: Listener name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. * Service: Port name. When both Port (experimental) and SectionName are specified, the name and port of the selected listener must match both specified values. Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted. When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#section_name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#section_name}
  */
  readonly sectionName?: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefs | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefs | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefs | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the referent. For example 'HTTPRoute' or 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#add DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#remove DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#set DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#port DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirror {
  /**
  * BackendRef references a resource where mirrored requests are sent. Mirrored requests must be sent only to a single destination endpoint within this BackendRef, irrespective of how many endpoints are present within this BackendRef. If the referent cannot be found, this BackendRef is invalid and must be dropped from the Gateway. The controller must ensure the 'ResolvedRefs' condition on the Route status is set to 'status: False' and not configure this backend in the underlying implementation. If there is a cross-namespace reference to an *existing* object that is not allowed by a ReferenceGrant, the controller must ensure the 'ResolvedRefs' condition on the Route is set to 'status: False', with the 'RefNotPermitted' reason and not configure this backend in the underlying implementation. In either error case, the Message of the 'ResolvedRefs' Condition should be used to provide more detail about the problem. Support: Extended for Kubernetes Service Support: Implementation-specific for any other resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#backend_ref DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#backend_ref}
  */
  readonly backendRef: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ref: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToTerraform(struct!.backendRef),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ref: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefToHclTerraform(struct!.backendRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirror | cdktf.IResolvable | undefined) {
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
  private _backendRef = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRefOutputReference(this, "backend_ref");
  public get backendRef() {
    return this._backendRef;
  }
  public putBackendRef(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorBackendRef) {
    this._backendRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefInput() {
    return this._backendRef.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPath {
  /**
  * ReplaceFullPath specifies the value with which to replace the full path of a request during a rewrite or redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#replace_full_path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#replace_full_path}
  */
  readonly replaceFullPath?: string;
  /**
  * ReplacePrefixMatch specifies the value with which to replace the prefix match of a request during a rewrite or redirect. For example, a request to '/foo/bar' with a prefix match of '/foo' and a ReplacePrefixMatch of '/xyz' would be modified to '/xyz/bar'. Note that this matches the behavior of the PathPrefix match type. This matches full path elements. A path element refers to the list of labels in the path split by the '/' separator. When specified, a trailing '/' is ignored. For example, the paths '/abc', '/abc/', and '/abc/def' would all match the prefix '/abc', but the path '/abcd' would not. ReplacePrefixMatch is only compatible with a 'PathPrefix' HTTPRouteMatch. Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in the implementation setting the Accepted Condition for the Route to 'status: False'. Request Path | Prefix Match | Replace Prefix | Modified Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#replace_prefix_match DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#replace_prefix_match}
  */
  readonly replacePrefixMatch?: string;
  /**
  * Type defines the type of path modifier. Additional types may be added in a future release of the API. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPathToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace_full_path: cdktf.stringToTerraform(struct!.replaceFullPath),
    replace_prefix_match: cdktf.stringToTerraform(struct!.replacePrefixMatch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPathToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace_full_path: {
      value: cdktf.stringToHclTerraform(struct!.replaceFullPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.replacePrefixMatch),
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceFullPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceFullPath = this._replaceFullPath;
    }
    if (this._replacePrefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrefixMatch = this._replacePrefixMatch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replaceFullPath = undefined;
      this._replacePrefixMatch = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replaceFullPath = value.replaceFullPath;
      this._replacePrefixMatch = value.replacePrefixMatch;
      this._type = value.type;
    }
  }

  // replace_full_path - computed: false, optional: true, required: false
  private _replaceFullPath?: string; 
  public get replaceFullPath() {
    return this.getStringAttribute('replace_full_path');
  }
  public set replaceFullPath(value: string) {
    this._replaceFullPath = value;
  }
  public resetReplaceFullPath() {
    this._replaceFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceFullPathInput() {
    return this._replaceFullPath;
  }

  // replace_prefix_match - computed: false, optional: true, required: false
  private _replacePrefixMatch?: string; 
  public get replacePrefixMatch() {
    return this.getStringAttribute('replace_prefix_match');
  }
  public set replacePrefixMatch(value: string) {
    this._replacePrefixMatch = value;
  }
  public resetReplacePrefixMatch() {
    this._replacePrefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrefixMatchInput() {
    return this._replacePrefixMatch;
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirect {
  /**
  * Hostname is the hostname to be used in the value of the 'Location' header in the response. When empty, the hostname in the 'Host' header of the request is used. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#hostname DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Path defines parameters used to modify the path of the incoming request. The modified path is then used to construct the 'Location' header. When empty, the request path is used as-is. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#path}
  */
  readonly path?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPath;
  /**
  * Port is the port to be used in the value of the 'Location' header in the response. If no port is specified, the redirect port MUST be derived using the following rules: * If redirect scheme is not-empty, the redirect port MUST be the well-known port associated with the redirect scheme. Specifically 'http' to port 80 and 'https' to port 443. If the redirect scheme does not have a well-known port, the listener port of the Gateway SHOULD be used. * If redirect scheme is empty, the redirect port MUST be the Gateway Listener port. Implementations SHOULD NOT add the port number in the 'Location' header in the following cases: * A Location header that will use HTTP (whether that is determined via the Listener protocol or the Scheme field) _and_ use port 80. * A Location header that will use HTTPS (whether that is determined via the Listener protocol or the Scheme field) _and_ use port 443. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#port DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Scheme is the scheme to be used in the value of the 'Location' header in the response. When empty, the scheme of the request is used. Scheme redirects can affect the port of the redirect, for more information, refer to the documentation for the port field of this filter. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#scheme DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * StatusCode is the HTTP status code to be used in response. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#status_code DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#status_code}
  */
  readonly statusCode?: number;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPathToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPath",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._path.internalValue = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._path.internalValue = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._statusCode = value.statusCode;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#add DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#remove DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#set DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePath {
  /**
  * ReplaceFullPath specifies the value with which to replace the full path of a request during a rewrite or redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#replace_full_path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#replace_full_path}
  */
  readonly replaceFullPath?: string;
  /**
  * ReplacePrefixMatch specifies the value with which to replace the prefix match of a request during a rewrite or redirect. For example, a request to '/foo/bar' with a prefix match of '/foo' and a ReplacePrefixMatch of '/xyz' would be modified to '/xyz/bar'. Note that this matches the behavior of the PathPrefix match type. This matches full path elements. A path element refers to the list of labels in the path split by the '/' separator. When specified, a trailing '/' is ignored. For example, the paths '/abc', '/abc/', and '/abc/def' would all match the prefix '/abc', but the path '/abcd' would not. ReplacePrefixMatch is only compatible with a 'PathPrefix' HTTPRouteMatch. Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in the implementation setting the Accepted Condition for the Route to 'status: False'. Request Path | Prefix Match | Replace Prefix | Modified Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#replace_prefix_match DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#replace_prefix_match}
  */
  readonly replacePrefixMatch?: string;
  /**
  * Type defines the type of path modifier. Additional types may be added in a future release of the API. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePathToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace_full_path: cdktf.stringToTerraform(struct!.replaceFullPath),
    replace_prefix_match: cdktf.stringToTerraform(struct!.replacePrefixMatch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePathToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace_full_path: {
      value: cdktf.stringToHclTerraform(struct!.replaceFullPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.replacePrefixMatch),
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceFullPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceFullPath = this._replaceFullPath;
    }
    if (this._replacePrefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrefixMatch = this._replacePrefixMatch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replaceFullPath = undefined;
      this._replacePrefixMatch = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replaceFullPath = value.replaceFullPath;
      this._replacePrefixMatch = value.replacePrefixMatch;
      this._type = value.type;
    }
  }

  // replace_full_path - computed: false, optional: true, required: false
  private _replaceFullPath?: string; 
  public get replaceFullPath() {
    return this.getStringAttribute('replace_full_path');
  }
  public set replaceFullPath(value: string) {
    this._replaceFullPath = value;
  }
  public resetReplaceFullPath() {
    this._replaceFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceFullPathInput() {
    return this._replaceFullPath;
  }

  // replace_prefix_match - computed: false, optional: true, required: false
  private _replacePrefixMatch?: string; 
  public get replacePrefixMatch() {
    return this.getStringAttribute('replace_prefix_match');
  }
  public set replacePrefixMatch(value: string) {
    this._replacePrefixMatch = value;
  }
  public resetReplacePrefixMatch() {
    this._replacePrefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrefixMatchInput() {
    return this._replacePrefixMatch;
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewrite {
  /**
  * Hostname is the value to be used to replace the Host header value during forwarding. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#hostname DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Path defines a path rewrite. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#path}
  */
  readonly path?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePath;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewriteToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePathToTerraform(struct!.path),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewriteToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePath",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._path.internalValue = value.path;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewritePath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFilters {
  /**
  * ExtensionRef is an optional, implementation-specific extension to the 'filter' behavior. For example, resource 'myroutefilter' in group 'networking.example.net'). ExtensionRef MUST NOT be used for core and extended filters. This filter can be used multiple times within the same rule. Support: Implementation-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#extension_ref DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#extension_ref}
  */
  readonly extensionRef?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRef;
  /**
  * RequestHeaderModifier defines a schema for a filter that modifies request headers. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#request_header_modifier DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#request_header_modifier}
  */
  readonly requestHeaderModifier?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier;
  /**
  * RequestMirror defines a schema for a filter that mirrors requests. Requests are sent to the specified destination, but responses from that destination are ignored. This filter can be used multiple times within the same rule. Note that not all implementations will be able to support mirroring to multiple backends. Support: Extended 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#request_mirror DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#request_mirror}
  */
  readonly requestMirror?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirror;
  /**
  * RequestRedirect defines a schema for a filter that responds to the request with an HTTP redirection. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#request_redirect DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#request_redirect}
  */
  readonly requestRedirect?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirect;
  /**
  * ResponseHeaderModifier defines a schema for a filter that modifies response headers. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#response_header_modifier DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#response_header_modifier}
  */
  readonly responseHeaderModifier?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier;
  /**
  * Type identifies the type of filter to apply. As with other API fields, types are classified into three conformance levels: - Core: Filter types and their corresponding configuration defined by 'Support: Core' in this package, e.g. 'RequestHeaderModifier'. All implementations must support core filters. - Extended: Filter types and their corresponding configuration defined by 'Support: Extended' in this package, e.g. 'RequestMirror'. Implementers are encouraged to support extended filters. - Implementation-specific: Filters that are defined and supported by specific vendors. In the future, filters showing convergence in behavior across multiple implementations will be considered for inclusion in extended or core conformance levels. Filter-specific configuration for such filters is specified using the ExtensionRef field. 'Type' should be set to 'ExtensionRef' for custom filters. Implementers are encouraged to define custom implementation types to extend the core API with implementation-specific behavior. If a reference to a custom filter type cannot be resolved, the filter MUST NOT be skipped. Instead, requests that would have been processed by that filter MUST receive a HTTP error response. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * URLRewrite defines a schema for a filter that modifies a request during forwarding. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#url_rewrite DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#url_rewrite}
  */
  readonly urlRewrite?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewrite;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_ref: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRefToTerraform(struct!.extensionRef),
    request_header_modifier: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToTerraform(struct!.requestHeaderModifier),
    request_mirror: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorToTerraform(struct!.requestMirror),
    request_redirect: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectToTerraform(struct!.requestRedirect),
    response_header_modifier: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToTerraform(struct!.responseHeaderModifier),
    type: cdktf.stringToTerraform(struct!.type),
    url_rewrite: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewriteToTerraform(struct!.urlRewrite),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_ref: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRefToHclTerraform(struct!.extensionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRef",
    },
    request_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierToHclTerraform(struct!.requestHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier",
    },
    request_mirror: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorToHclTerraform(struct!.requestMirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirror",
    },
    request_redirect: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectToHclTerraform(struct!.requestRedirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirect",
    },
    response_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierToHclTerraform(struct!.responseHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_rewrite: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewrite",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable | undefined {
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
    if (this._requestRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRedirect = this._requestRedirect?.internalValue;
    }
    if (this._responseHeaderModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderModifier = this._responseHeaderModifier?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionRef.internalValue = undefined;
      this._requestHeaderModifier.internalValue = undefined;
      this._requestMirror.internalValue = undefined;
      this._requestRedirect.internalValue = undefined;
      this._responseHeaderModifier.internalValue = undefined;
      this._type = undefined;
      this._urlRewrite.internalValue = undefined;
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
      this._requestRedirect.internalValue = value.requestRedirect;
      this._responseHeaderModifier.internalValue = value.responseHeaderModifier;
      this._type = value.type;
      this._urlRewrite.internalValue = value.urlRewrite;
    }
  }

  // extension_ref - computed: false, optional: true, required: false
  private _extensionRef = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRefOutputReference(this, "extension_ref");
  public get extensionRef() {
    return this._extensionRef;
  }
  public putExtensionRef(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersExtensionRef) {
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
  private _requestHeaderModifier = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifierOutputReference(this, "request_header_modifier");
  public get requestHeaderModifier() {
    return this._requestHeaderModifier;
  }
  public putRequestHeaderModifier(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestHeaderModifier) {
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
  private _requestMirror = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirrorOutputReference(this, "request_mirror");
  public get requestMirror() {
    return this._requestMirror;
  }
  public putRequestMirror(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestMirror) {
    this._requestMirror.internalValue = value;
  }
  public resetRequestMirror() {
    this._requestMirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorInput() {
    return this._requestMirror.internalValue;
  }

  // request_redirect - computed: false, optional: true, required: false
  private _requestRedirect = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirectOutputReference(this, "request_redirect");
  public get requestRedirect() {
    return this._requestRedirect;
  }
  public putRequestRedirect(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersRequestRedirect) {
    this._requestRedirect.internalValue = value;
  }
  public resetRequestRedirect() {
    this._requestRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRedirectInput() {
    return this._requestRedirect.internalValue;
  }

  // response_header_modifier - computed: false, optional: true, required: false
  private _responseHeaderModifier = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifierOutputReference(this, "response_header_modifier");
  public get responseHeaderModifier() {
    return this._responseHeaderModifier;
  }
  public putResponseHeaderModifier(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersResponseHeaderModifier) {
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

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefs {
  /**
  * Filters defined at this level should be executed if and only if the request is being forwarded to the backend defined here. Support: Implementation-specific (For broader support of filters, use the Filters field in HTTPRouteRule.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#filters DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#filters}
  */
  readonly filters?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable;
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#port DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Weight specifies the proportion of requests forwarded to the referenced backend. This is computed as weight/(sum of all weights in this BackendRefs list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. Weight is not a percentage and the sum of weights does not need to equal 100. If only one backend is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weight is set to 0, no traffic should be forwarded for this entry. If unspecified, weight defaults to 1. Support for this field varies based on the context where used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#weight DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersToTerraform, false)(struct!.filters),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersList",
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefs | cdktf.IResolvable | undefined) {
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
  private _filters = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsFilters[] | cdktf.IResolvable) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the referent. For example 'HTTPRoute' or 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#add DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#remove DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#set DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRef {
  /**
  * Group is the group of the referent. For example, 'gateway.networking.k8s.io'. When unspecified or empty string, core API group is inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind is the Kubernetes resource kind of the referent. For example 'Service'. Defaults to 'Service' when not specified. ExternalName services can refer to CNAME DNS records that may live outside of the cluster and as such are difficult to reason about in terms of conformance. They also may not be safe to forward to (see CVE-2021-25740 for more information). Implementations SHOULD NOT support ExternalName Services. Support: Core (Services with a type other than ExternalName) Support: Implementation-specific (Services with type ExternalName)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the backend. When unspecified, the local namespace is inferred. Note that when a namespace different than the local namespace is specified, a ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port specifies the destination port number to use for this resource. Port is required when the referent is a Kubernetes Service. In this case, the port number is the service port number, not the target port. For other resources, destination port might be derived from the referent resource or this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#port DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRefToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRefToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirror {
  /**
  * BackendRef references a resource where mirrored requests are sent. Mirrored requests must be sent only to a single destination endpoint within this BackendRef, irrespective of how many endpoints are present within this BackendRef. If the referent cannot be found, this BackendRef is invalid and must be dropped from the Gateway. The controller must ensure the 'ResolvedRefs' condition on the Route status is set to 'status: False' and not configure this backend in the underlying implementation. If there is a cross-namespace reference to an *existing* object that is not allowed by a ReferenceGrant, the controller must ensure the 'ResolvedRefs' condition on the Route is set to 'status: False', with the 'RefNotPermitted' reason and not configure this backend in the underlying implementation. In either error case, the Message of the 'ResolvedRefs' Condition should be used to provide more detail about the problem. Support: Extended for Kubernetes Service Support: Implementation-specific for any other resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#backend_ref DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#backend_ref}
  */
  readonly backendRef: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRef;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ref: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRefToTerraform(struct!.backendRef),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ref: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRefToHclTerraform(struct!.backendRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirror | cdktf.IResolvable | undefined) {
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
  private _backendRef = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRefOutputReference(this, "backend_ref");
  public get backendRef() {
    return this._backendRef;
  }
  public putBackendRef(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorBackendRef) {
    this._backendRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefInput() {
    return this._backendRef.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPath {
  /**
  * ReplaceFullPath specifies the value with which to replace the full path of a request during a rewrite or redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#replace_full_path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#replace_full_path}
  */
  readonly replaceFullPath?: string;
  /**
  * ReplacePrefixMatch specifies the value with which to replace the prefix match of a request during a rewrite or redirect. For example, a request to '/foo/bar' with a prefix match of '/foo' and a ReplacePrefixMatch of '/xyz' would be modified to '/xyz/bar'. Note that this matches the behavior of the PathPrefix match type. This matches full path elements. A path element refers to the list of labels in the path split by the '/' separator. When specified, a trailing '/' is ignored. For example, the paths '/abc', '/abc/', and '/abc/def' would all match the prefix '/abc', but the path '/abcd' would not. ReplacePrefixMatch is only compatible with a 'PathPrefix' HTTPRouteMatch. Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in the implementation setting the Accepted Condition for the Route to 'status: False'. Request Path | Prefix Match | Replace Prefix | Modified Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#replace_prefix_match DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#replace_prefix_match}
  */
  readonly replacePrefixMatch?: string;
  /**
  * Type defines the type of path modifier. Additional types may be added in a future release of the API. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPathToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace_full_path: cdktf.stringToTerraform(struct!.replaceFullPath),
    replace_prefix_match: cdktf.stringToTerraform(struct!.replacePrefixMatch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPathToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace_full_path: {
      value: cdktf.stringToHclTerraform(struct!.replaceFullPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.replacePrefixMatch),
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceFullPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceFullPath = this._replaceFullPath;
    }
    if (this._replacePrefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrefixMatch = this._replacePrefixMatch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replaceFullPath = undefined;
      this._replacePrefixMatch = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replaceFullPath = value.replaceFullPath;
      this._replacePrefixMatch = value.replacePrefixMatch;
      this._type = value.type;
    }
  }

  // replace_full_path - computed: false, optional: true, required: false
  private _replaceFullPath?: string; 
  public get replaceFullPath() {
    return this.getStringAttribute('replace_full_path');
  }
  public set replaceFullPath(value: string) {
    this._replaceFullPath = value;
  }
  public resetReplaceFullPath() {
    this._replaceFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceFullPathInput() {
    return this._replaceFullPath;
  }

  // replace_prefix_match - computed: false, optional: true, required: false
  private _replacePrefixMatch?: string; 
  public get replacePrefixMatch() {
    return this.getStringAttribute('replace_prefix_match');
  }
  public set replacePrefixMatch(value: string) {
    this._replacePrefixMatch = value;
  }
  public resetReplacePrefixMatch() {
    this._replacePrefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrefixMatchInput() {
    return this._replacePrefixMatch;
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirect {
  /**
  * Hostname is the hostname to be used in the value of the 'Location' header in the response. When empty, the hostname in the 'Host' header of the request is used. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#hostname DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Path defines parameters used to modify the path of the incoming request. The modified path is then used to construct the 'Location' header. When empty, the request path is used as-is. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#path}
  */
  readonly path?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPath;
  /**
  * Port is the port to be used in the value of the 'Location' header in the response. If no port is specified, the redirect port MUST be derived using the following rules: * If redirect scheme is not-empty, the redirect port MUST be the well-known port associated with the redirect scheme. Specifically 'http' to port 80 and 'https' to port 443. If the redirect scheme does not have a well-known port, the listener port of the Gateway SHOULD be used. * If redirect scheme is empty, the redirect port MUST be the Gateway Listener port. Implementations SHOULD NOT add the port number in the 'Location' header in the following cases: * A Location header that will use HTTP (whether that is determined via the Listener protocol or the Scheme field) _and_ use port 80. * A Location header that will use HTTPS (whether that is determined via the Listener protocol or the Scheme field) _and_ use port 443. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#port DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Scheme is the scheme to be used in the value of the 'Location' header in the response. When empty, the scheme of the request is used. Scheme redirects can affect the port of the redirect, for more information, refer to the documentation for the port field of this filter. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#scheme DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * StatusCode is the HTTP status code to be used in response. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#status_code DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#status_code}
  */
  readonly statusCode?: number;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPathToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPath",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._path.internalValue = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._path.internalValue = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._statusCode = value.statusCode;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAdd {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSet {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifier {
  /**
  * Add adds the given header(s) (name, value) to the request before the action. It appends to any existing values associated with the header name. Input: GET /foo HTTP/1.1 my-header: foo Config: add: - name: 'my-header' value: 'bar,baz' Output: GET /foo HTTP/1.1 my-header: foo,bar,baz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#add DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#add}
  */
  readonly add?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Remove the given header(s) from the HTTP request before the action. The value of Remove is a list of HTTP header names. Note that the header names are case-insensitive (see https://datatracker.ietf.org/doc/html/rfc2616#section-4.2). Input: GET /foo HTTP/1.1 my-header1: foo my-header2: bar my-header3: baz Config: remove: ['my-header1', 'my-header3'] Output: GET /foo HTTP/1.1 my-header2: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#remove DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set overwrites the request with the given header (name, value) before the action. Input: GET /foo HTTP/1.1 my-header: foo Config: set: - name: 'my-header' value: 'bar' Output: GET /foo HTTP/1.1 my-header: bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#set DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#set}
  */
  readonly set?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePath {
  /**
  * ReplaceFullPath specifies the value with which to replace the full path of a request during a rewrite or redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#replace_full_path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#replace_full_path}
  */
  readonly replaceFullPath?: string;
  /**
  * ReplacePrefixMatch specifies the value with which to replace the prefix match of a request during a rewrite or redirect. For example, a request to '/foo/bar' with a prefix match of '/foo' and a ReplacePrefixMatch of '/xyz' would be modified to '/xyz/bar'. Note that this matches the behavior of the PathPrefix match type. This matches full path elements. A path element refers to the list of labels in the path split by the '/' separator. When specified, a trailing '/' is ignored. For example, the paths '/abc', '/abc/', and '/abc/def' would all match the prefix '/abc', but the path '/abcd' would not. ReplacePrefixMatch is only compatible with a 'PathPrefix' HTTPRouteMatch. Using any other HTTPRouteMatch type on the same HTTPRouteRule will result in the implementation setting the Accepted Condition for the Route to 'status: False'. Request Path | Prefix Match | Replace Prefix | Modified Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#replace_prefix_match DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#replace_prefix_match}
  */
  readonly replacePrefixMatch?: string;
  /**
  * Type defines the type of path modifier. Additional types may be added in a future release of the API. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePathToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace_full_path: cdktf.stringToTerraform(struct!.replaceFullPath),
    replace_prefix_match: cdktf.stringToTerraform(struct!.replacePrefixMatch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePathToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace_full_path: {
      value: cdktf.stringToHclTerraform(struct!.replaceFullPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.replacePrefixMatch),
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceFullPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceFullPath = this._replaceFullPath;
    }
    if (this._replacePrefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrefixMatch = this._replacePrefixMatch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replaceFullPath = undefined;
      this._replacePrefixMatch = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replaceFullPath = value.replaceFullPath;
      this._replacePrefixMatch = value.replacePrefixMatch;
      this._type = value.type;
    }
  }

  // replace_full_path - computed: false, optional: true, required: false
  private _replaceFullPath?: string; 
  public get replaceFullPath() {
    return this.getStringAttribute('replace_full_path');
  }
  public set replaceFullPath(value: string) {
    this._replaceFullPath = value;
  }
  public resetReplaceFullPath() {
    this._replaceFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceFullPathInput() {
    return this._replaceFullPath;
  }

  // replace_prefix_match - computed: false, optional: true, required: false
  private _replacePrefixMatch?: string; 
  public get replacePrefixMatch() {
    return this.getStringAttribute('replace_prefix_match');
  }
  public set replacePrefixMatch(value: string) {
    this._replacePrefixMatch = value;
  }
  public resetReplacePrefixMatch() {
    this._replacePrefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrefixMatchInput() {
    return this._replacePrefixMatch;
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
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewrite {
  /**
  * Hostname is the value to be used to replace the Host header value during forwarding. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#hostname DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Path defines a path rewrite. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#path}
  */
  readonly path?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePath;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewriteToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePathToTerraform(struct!.path),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewriteToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePath",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._path.internalValue = value.path;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewritePath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFilters {
  /**
  * ExtensionRef is an optional, implementation-specific extension to the 'filter' behavior. For example, resource 'myroutefilter' in group 'networking.example.net'). ExtensionRef MUST NOT be used for core and extended filters. This filter can be used multiple times within the same rule. Support: Implementation-specific
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#extension_ref DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#extension_ref}
  */
  readonly extensionRef?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRef;
  /**
  * RequestHeaderModifier defines a schema for a filter that modifies request headers. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#request_header_modifier DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#request_header_modifier}
  */
  readonly requestHeaderModifier?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifier;
  /**
  * RequestMirror defines a schema for a filter that mirrors requests. Requests are sent to the specified destination, but responses from that destination are ignored. This filter can be used multiple times within the same rule. Note that not all implementations will be able to support mirroring to multiple backends. Support: Extended 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#request_mirror DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#request_mirror}
  */
  readonly requestMirror?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirror;
  /**
  * RequestRedirect defines a schema for a filter that responds to the request with an HTTP redirection. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#request_redirect DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#request_redirect}
  */
  readonly requestRedirect?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirect;
  /**
  * ResponseHeaderModifier defines a schema for a filter that modifies response headers. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#response_header_modifier DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#response_header_modifier}
  */
  readonly responseHeaderModifier?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifier;
  /**
  * Type identifies the type of filter to apply. As with other API fields, types are classified into three conformance levels: - Core: Filter types and their corresponding configuration defined by 'Support: Core' in this package, e.g. 'RequestHeaderModifier'. All implementations must support core filters. - Extended: Filter types and their corresponding configuration defined by 'Support: Extended' in this package, e.g. 'RequestMirror'. Implementers are encouraged to support extended filters. - Implementation-specific: Filters that are defined and supported by specific vendors. In the future, filters showing convergence in behavior across multiple implementations will be considered for inclusion in extended or core conformance levels. Filter-specific configuration for such filters is specified using the ExtensionRef field. 'Type' should be set to 'ExtensionRef' for custom filters. Implementers are encouraged to define custom implementation types to extend the core API with implementation-specific behavior. If a reference to a custom filter type cannot be resolved, the filter MUST NOT be skipped. Instead, requests that would have been processed by that filter MUST receive a HTTP error response. Note that values may be added to this enum, implementations must ensure that unknown values will not cause a crash. Unknown values here must result in the implementation setting the Accepted Condition for the Route to 'status: False', with a Reason of 'UnsupportedValue'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * URLRewrite defines a schema for a filter that modifies a request during forwarding. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#url_rewrite DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#url_rewrite}
  */
  readonly urlRewrite?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewrite;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_ref: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRefToTerraform(struct!.extensionRef),
    request_header_modifier: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierToTerraform(struct!.requestHeaderModifier),
    request_mirror: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorToTerraform(struct!.requestMirror),
    request_redirect: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectToTerraform(struct!.requestRedirect),
    response_header_modifier: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierToTerraform(struct!.responseHeaderModifier),
    type: cdktf.stringToTerraform(struct!.type),
    url_rewrite: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewriteToTerraform(struct!.urlRewrite),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extension_ref: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRefToHclTerraform(struct!.extensionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRef",
    },
    request_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierToHclTerraform(struct!.requestHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifier",
    },
    request_mirror: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorToHclTerraform(struct!.requestMirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirror",
    },
    request_redirect: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectToHclTerraform(struct!.requestRedirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirect",
    },
    response_header_modifier: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierToHclTerraform(struct!.responseHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifier",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_rewrite: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewrite",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFilters | cdktf.IResolvable | undefined {
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
    if (this._requestRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRedirect = this._requestRedirect?.internalValue;
    }
    if (this._responseHeaderModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderModifier = this._responseHeaderModifier?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionRef.internalValue = undefined;
      this._requestHeaderModifier.internalValue = undefined;
      this._requestMirror.internalValue = undefined;
      this._requestRedirect.internalValue = undefined;
      this._responseHeaderModifier.internalValue = undefined;
      this._type = undefined;
      this._urlRewrite.internalValue = undefined;
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
      this._requestRedirect.internalValue = value.requestRedirect;
      this._responseHeaderModifier.internalValue = value.responseHeaderModifier;
      this._type = value.type;
      this._urlRewrite.internalValue = value.urlRewrite;
    }
  }

  // extension_ref - computed: false, optional: true, required: false
  private _extensionRef = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRefOutputReference(this, "extension_ref");
  public get extensionRef() {
    return this._extensionRef;
  }
  public putExtensionRef(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersExtensionRef) {
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
  private _requestHeaderModifier = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifierOutputReference(this, "request_header_modifier");
  public get requestHeaderModifier() {
    return this._requestHeaderModifier;
  }
  public putRequestHeaderModifier(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestHeaderModifier) {
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
  private _requestMirror = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirrorOutputReference(this, "request_mirror");
  public get requestMirror() {
    return this._requestMirror;
  }
  public putRequestMirror(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestMirror) {
    this._requestMirror.internalValue = value;
  }
  public resetRequestMirror() {
    this._requestMirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorInput() {
    return this._requestMirror.internalValue;
  }

  // request_redirect - computed: false, optional: true, required: false
  private _requestRedirect = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirectOutputReference(this, "request_redirect");
  public get requestRedirect() {
    return this._requestRedirect;
  }
  public putRequestRedirect(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersRequestRedirect) {
    this._requestRedirect.internalValue = value;
  }
  public resetRequestRedirect() {
    this._requestRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRedirectInput() {
    return this._requestRedirect.internalValue;
  }

  // response_header_modifier - computed: false, optional: true, required: false
  private _responseHeaderModifier = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifierOutputReference(this, "response_header_modifier");
  public get responseHeaderModifier() {
    return this._responseHeaderModifier;
  }
  public putResponseHeaderModifier(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersResponseHeaderModifier) {
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

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeaders {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent. When a header is repeated in an HTTP request, it is implementation-specific behavior as to how this is represented. Generally, proxies should follow the guidance from the RFC: https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding processing a repeated header, with special handling for 'Set-Cookie'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header. Support: Core (Exact) Support: Implementation-specific (RegularExpression) Since RegularExpression HeaderMatchType has implementation-specific conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeaders | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeaders | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPath {
  /**
  * Type specifies how to match against the path Value. Support: Core (Exact, PathPrefix) Support: Implementation-specific (RegularExpression)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value of the HTTP path to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPathToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPathToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParams {
  /**
  * Name is the name of the HTTP query param to be matched. This must be an exact string match. (See https://tools.ietf.org/html/rfc7230#section-2.7.3). If multiple entries specify equivalent query param names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent query param name MUST be ignored. If a query param is repeated in an HTTP request, the behavior is purposely left undefined, since different data planes have different capabilities. However, it is *recommended* that implementations should match against the first value of the param if the data plane supports it, as this behavior is expected in other load balancing contexts outside of the Gateway API. Users SHOULD NOT route traffic based on repeated query params to guard themselves against potential differences in the implementations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the query parameter. Support: Extended (Exact) Support: Implementation-specific (RegularExpression) Since RegularExpression QueryParamMatchType has Implementation-specific conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#type DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP query param to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#value DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParams | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParams | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParams | cdktf.IResolvable | undefined) {
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

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatches {
  /**
  * Headers specifies HTTP request header matchers. Multiple match values are ANDed together, meaning, a request must match all the specified headers to select the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#headers DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#headers}
  */
  readonly headers?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable;
  /**
  * Method specifies HTTP method matcher. When specified, this route will be matched only if the request has the specified method. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#method DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#method}
  */
  readonly method?: string;
  /**
  * Path specifies a HTTP request path matcher. If this field is not specified, a default prefix match on the '/' path is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#path DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#path}
  */
  readonly path?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPath;
  /**
  * QueryParams specifies HTTP query parameter matchers. Multiple match values are ANDed together, meaning, a request must match all the specified query parameters to select the route. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#query_params DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#query_params}
  */
  readonly queryParams?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParams[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsToTerraform, false)(struct!.queryParams),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPath",
    },
    query_params: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsToHclTerraform, false)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._method = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._method = value.method;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesHeaders[] | cdktf.IResolvable) {
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

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeouts {
  /**
  * BackendRequest specifies a timeout for an individual request from the gateway to a backend. This covers the time from when the request first starts being sent from the gateway to when the full response has been received from the backend. Setting a timeout to the zero duration (e.g. '0s') SHOULD disable the timeout completely. Implementations that cannot completely disable the timeout MUST instead interpret the zero duration as the longest possible value to which the timeout can be set. An entire client HTTP transaction with a gateway, covered by the Request timeout, may result in more than one call from the gateway to the destination backend, for example, if automatic retries are supported. The value of BackendRequest must be a Gateway API Duration string as defined by GEP-2257. When this field is unspecified, its behavior is implementation-specific; when specified, the value of BackendRequest must be no more than the value of the Request timeout (since the Request timeout encompasses the BackendRequest timeout). Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#backend_request DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#backend_request}
  */
  readonly backendRequest?: string;
  /**
  * Request specifies the maximum duration for a gateway to respond to an HTTP request. If the gateway has not been able to respond before this deadline is met, the gateway MUST return a timeout error. For example, setting the 'rules.timeouts.request' field to the value '10s' in an 'HTTPRoute' will cause a timeout if a client request is taking longer than 10 seconds to complete. Setting a timeout to the zero duration (e.g. '0s') SHOULD disable the timeout completely. Implementations that cannot completely disable the timeout MUST instead interpret the zero duration as the longest possible value to which the timeout can be set. This timeout is intended to cover as close to the whole request-response transaction as possible although an implementation MAY choose to start the timeout after the entire request stream has been received instead of immediately after the transaction is initiated by the client. The value of Request is a Gateway API Duration string as defined by GEP-2257. When this field is unspecified, request timeout behavior is implementation-specific. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#request DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeoutsToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_request: cdktf.stringToTerraform(struct!.backendRequest),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeoutsToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_request: {
      value: cdktf.stringToHclTerraform(struct!.backendRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendRequest = this._backendRequest;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRequest = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendRequest = value.backendRequest;
      this._request = value.request;
    }
  }

  // backend_request - computed: false, optional: true, required: false
  private _backendRequest?: string; 
  public get backendRequest() {
    return this.getStringAttribute('backend_request');
  }
  public set backendRequest(value: string) {
    this._backendRequest = value;
  }
  public resetBackendRequest() {
    this._backendRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRequestInput() {
    return this._backendRequest;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRules {
  /**
  * BackendRefs defines the backend(s) where matching requests should be sent. Failure behavior here depends on how many BackendRefs are specified and how many are invalid. If *all* entries in BackendRefs are invalid, and there are also no filters specified in this route rule, *all* traffic which matches this rule MUST receive a 500 status code. See the HTTPBackendRef definition for the rules about what makes a single HTTPBackendRef invalid. When a HTTPBackendRef is invalid, 500 status codes MUST be returned for requests that would have otherwise been routed to an invalid backend. If multiple backends are specified, and some are invalid, the proportion of requests that would otherwise have been routed to an invalid backend MUST receive a 500 status code. For example, if two backends are specified with equal weights, and one is invalid, 50 percent of traffic must receive a 500. Implementations may choose how that 50 percent is determined. When a HTTPBackendRef refers to a Service that has no ready endpoints, implementations SHOULD return a 503 for requests to that backend instead. If an implementation chooses to do this, all of the above rules for 500 responses MUST also apply for responses that return a 503. Support: Core for Kubernetes Service Support: Extended for Kubernetes ServiceImport Support: Implementation-specific for any other resource Support for weight: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#backend_refs DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#backend_refs}
  */
  readonly backendRefs?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefs[] | cdktf.IResolvable;
  /**
  * Filters define the filters that are applied to requests that match this rule. Wherever possible, implementations SHOULD implement filters in the order they are specified. Implementations MAY choose to implement this ordering strictly, rejecting any combination or order of filters that can not be supported. If implementations choose a strict interpretation of filter ordering, they MUST clearly document that behavior. To reject an invalid combination or order of filters, implementations SHOULD consider the Route Rules with this configuration invalid. If all Route Rules in a Route are invalid, the entire Route would be considered invalid. If only a portion of Route Rules are invalid, implementations MUST set the 'PartiallyInvalid' condition for the Route. Conformance-levels at this level are defined based on the type of filter: - ALL core filters MUST be supported by all implementations. - Implementers are encouraged to support extended filters. - Implementation-specific custom filters have no API guarantees across implementations. Specifying the same filter multiple times is not supported unless explicitly indicated in the filter. All filters are expected to be compatible with each other except for the URLRewrite and RequestRedirect filters, which may not be combined. If an implementation can not support other combinations of filters, they must clearly document that limitation. In cases where incompatible or unsupported filters are specified and cause the 'Accepted' condition to be set to status 'False', implementations may use the 'IncompatibleFilters' reason to specify this configuration error. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#filters DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#filters}
  */
  readonly filters?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFilters[] | cdktf.IResolvable;
  /**
  * Matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if **any** one of the matches is satisfied. For example, take the following matches configuration: ``` matches: - path: value: '/foo' headers: - name: 'version' value: 'v2' - path: value: '/v2/foo' ``` For a request to match against this rule, a request must satisfy EITHER of the two conditions: - path prefixed with '/foo' AND contains the header 'version: v2' - path prefix of '/v2/foo' See the documentation for HTTPRouteMatch on how to specify multiple match conditions that should be ANDed together. If no matches are specified, the default is a prefix path match on '/', which has the effect of matching every HTTP request. Proxy or Load Balancer routing configuration generated from HTTPRoutes MUST prioritize matches based on the following criteria, continuing on ties. Across all rules specified on applicable Routes, precedence must be given to the match having: * 'Exact' path match. * 'Prefix' path match with largest number of characters. * Method match. * Largest number of header matches. * Largest number of query param matches. Note: The precedence of RegularExpression path matches are implementation-specific. If ties still exist across multiple Routes, matching precedence MUST be determined in order of the following criteria, continuing on ties: * The oldest Route based on creation timestamp. * The Route appearing first in alphabetical order by '{namespace}/{name}'. If ties still exist within an HTTPRoute, matching precedence MUST be granted to the FIRST matching rule (in list order) with a match meeting the above criteria. When no rules matching a request have been successfully attached to the parent a request is coming from, a HTTP 404 status code MUST be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#matches DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#matches}
  */
  readonly matches?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatches[] | cdktf.IResolvable;
  /**
  * Timeouts defines the timeouts that can be configured for an HTTP request. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#timeouts DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#timeouts}
  */
  readonly timeouts?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeouts;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsToTerraform, false)(struct!.backendRefs),
    filters: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersToTerraform, false)(struct!.filters),
    matches: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesToTerraform, false)(struct!.matches),
    timeouts: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeoutsToTerraform(struct!.timeouts),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_refs: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsToHclTerraform, false)(struct!.backendRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsList",
    },
    filters: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersList",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesList",
    },
    timeouts: {
      value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeouts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRules | cdktf.IResolvable | undefined {
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
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRefs.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._matches.internalValue = undefined;
      this._timeouts.internalValue = undefined;
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
      this._timeouts.internalValue = value.timeouts;
    }
  }

  // backend_refs - computed: false, optional: true, required: false
  private _backendRefs = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefsList(this, "backend_refs", false);
  public get backendRefs() {
    return this._backendRefs;
  }
  public putBackendRefs(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesBackendRefs[] | cdktf.IResolvable) {
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
  private _filters = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesFilters[] | cdktf.IResolvable) {
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
  private _matches = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesOutputReference {
    return new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpec {
  /**
  * Hostnames defines a set of hostnames that should match against the HTTP Host header to select a HTTPRoute used to process the request. Implementations MUST ignore any port value specified in the HTTP Host header while performing a match and (absent of any applicable header modification configuration) MUST forward this header unmodified to the backend. Valid values for Hostnames are determined by RFC 1123 definition of a hostname with 2 notable exceptions: 1. IPs are not allowed. 2. A hostname may be prefixed with a wildcard label ('*.'). The wildcard label must appear by itself as the first label. If a hostname is specified by both the Listener and HTTPRoute, there must be at least one intersecting hostname for the HTTPRoute to be attached to the Listener. For example: * A Listener with 'test.example.com' as the hostname matches HTTPRoutes that have either not specified any hostnames, or have specified at least one of 'test.example.com' or '*.example.com'. * A Listener with '*.example.com' as the hostname matches HTTPRoutes that have either not specified any hostnames or have specified at least one hostname that matches the Listener hostname. For example, '*.example.com', 'test.example.com', and 'foo.test.example.com' would all match. On the other hand, 'example.com' and 'test.example.net' would not match. Hostnames that are prefixed with a wildcard label ('*.') are interpreted as a suffix match. That means that a match for '*.example.com' would match both 'test.example.com', and 'foo.test.example.com', but not 'example.com'. If both the Listener and HTTPRoute have specified hostnames, any HTTPRoute hostnames that do not match the Listener hostname MUST be ignored. For example, if a Listener specified '*.example.com', and the HTTPRoute specified 'test.example.com' and 'test.example.net', 'test.example.net' must not be considered for a match. If both the Listener and HTTPRoute have specified hostnames, and none match with the criteria above, then the HTTPRoute is not accepted. The implementation must raise an 'Accepted' Condition with a status of 'False' in the corresponding RouteParentStatus. In the event that multiple HTTPRoutes specify intersecting hostnames (e.g. overlapping wildcard matching and exact matching hostnames), precedence must be given to rules from the HTTPRoute with the largest number of: * Characters in a matching non-wildcard hostname. * Characters in a matching hostname. If ties exist across multiple Routes, the matching precedence rules for HTTPRouteMatches takes over. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#hostnames DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * ParentRefs references the resources (usually Gateways) that a Route wants to be attached to. Note that the referenced parent resource needs to allow this for the attachment to be complete. For Gateways, that means the Gateway needs to allow attachment from Routes of this kind and namespace. For Services, that means the Service must either be in the same namespace for a 'producer' route, or the mesh implementation must support and allow 'consumer' routes for the referenced Service. ReferenceGrant is not applicable for governing ParentRefs to Services - it is not possible to create a 'producer' route for a Service in a different namespace from the Route. There are two kinds of parent resources with 'Core' support: * Gateway (Gateway conformance profile) * Service (Mesh conformance profile, ClusterIP Services only) This API may be extended in the future to support additional kinds of parent resources. ParentRefs must be _distinct_. This means either that: * They select different objects. If this is the case, then parentRef entries are distinct. In terms of fields, this means that the multi-part key defined by 'group', 'kind', 'namespace', and 'name' must be unique across all parentRef entries in the Route. * They do not select different objects, but for each optional field used, each ParentRef that selects the same object must set the same set of optional fields to different values. If one ParentRef sets a combination of optional fields, all must set the same combination. Some examples: * If one ParentRef sets 'sectionName', all ParentRefs referencing the same object must also set 'sectionName'. * If one ParentRef sets 'port', all ParentRefs referencing the same object must also set 'port'. * If one ParentRef sets 'sectionName' and 'port', all ParentRefs referencing the same object must also set 'sectionName' and 'port'. It is possible to separately reference multiple distinct objects that may be collapsed by an implementation. For example, some implementations may choose to merge compatible Gateway Listeners together. If that is the case, the list of routes attached to those resources should also be merged. Note that for ParentRefs that cross namespace boundaries, there are specific rules. Cross-namespace references are only valid if they are explicitly allowed by something in the namespace they are referring to. For example, Gateway has the AllowedRoutes field, and ReferenceGrant provides a generic way to enable other kinds of cross-namespace reference. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#parent_refs DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#parent_refs}
  */
  readonly parentRefs?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefs[] | cdktf.IResolvable;
  /**
  * Rules are a list of HTTP matchers, filters and actions. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#rules DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest#rules}
  */
  readonly rules?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRules[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecToTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    parent_refs: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsToTerraform, false)(struct!.parentRefs),
    rules: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpec | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsToHclTerraform, false)(struct!.parentRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsList",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _parentRefs = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefsList(this, "parent_refs", false);
  public get parentRefs() {
    return this._parentRefs;
  }
  public putParentRefs(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecParentRefs[] | cdktf.IResolvable) {
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
  private _rules = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecRules[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest k8s_gateway_networking_k8s_io_http_route_v1beta1_manifest}
*/
export class DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_networking_k8s_io_http_route_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_networking_k8s_io_http_route_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/gateway_networking_k8s_io_http_route_v1beta1_manifest k8s_gateway_networking_k8s_io_http_route_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_networking_k8s_io_http_route_v1beta1_manifest',
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
  private _metadata = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpec) {
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
      metadata: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoHttpRouteV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
