// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#metadata DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshHTTPRoute resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#spec DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#annotations DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#labels DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#kind DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#labels DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#mesh DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#section_name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#tags DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#kind DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#labels DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#mesh DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port is only supported when this ref refers to a real MeshService object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#port DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#section_name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#tags DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#weight DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs | cdktf.IResolvable): any {
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
    port: cdktf.numberToTerraform(struct!.port),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
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
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
      this._weight = undefined;
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
      this._port = value.port;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
      this._weight = value.weight;
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#value DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#value DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#add DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#add}
  */
  readonly add?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#remove DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#set DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#set}
  */
  readonly set?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#kind DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#labels DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#mesh DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Port is only supported when this ref refers to a real MeshService object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#port DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#section_name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#tags DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#weight DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRefToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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
    port: cdktf.numberToTerraform(struct!.port),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRefToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRef | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
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
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
      this._weight = undefined;
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
      this._port = value.port;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
      this._weight = value.weight;
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirror {
  /**
  * BackendRef defines where to forward traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#backend_ref DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#backend_ref}
  */
  readonly backendRef: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRef;
  /**
  * Percentage of requests to mirror. If not specified, all requests to the target cluster will be mirrored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#percentage DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#percentage}
  */
  readonly percentage?: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ref: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRefToTerraform(struct!.backendRef),
    percentage: cdktf.stringToTerraform(struct!.percentage),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ref: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRefToHclTerraform(struct!.backendRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRef",
    },
    percentage: {
      value: cdktf.stringToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendRef = this._backendRef?.internalValue;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRef.internalValue = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendRef.internalValue = value.backendRef;
      this._percentage = value.percentage;
    }
  }

  // backend_ref - computed: false, optional: false, required: true
  private _backendRef = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRefOutputReference(this, "backend_ref");
  public get backendRef() {
    return this._backendRef;
  }
  public putBackendRef(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorBackendRef) {
    this._backendRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefInput() {
    return this._backendRef.internalValue;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: string; 
  public get percentage() {
    return this.getStringAttribute('percentage');
  }
  public set percentage(value: string) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#replace_full_path DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#replace_full_path}
  */
  readonly replaceFullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#replace_prefix_match DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#replace_prefix_match}
  */
  readonly replacePrefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#type DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPathToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPath | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPathToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPath | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPath | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirect {
  /**
  * PreciseHostname is the fully qualified domain name of a network host. This matches the RFC 1123 definition of a hostname with 1 notable exception that numeric IP addresses are not allowed. Note that as per RFC1035 and RFC1123, a *label* must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#hostname DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Path defines parameters used to modify the path of the incoming request. The modified path is then used to construct the location header. When empty, the request path is used as-is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#path DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#path}
  */
  readonly path?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPath;
  /**
  * Port is the port to be used in the value of the 'Location' header in the response. When empty, port (if specified) of the request is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#port DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#scheme DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * StatusCode is the HTTP status code to be used in response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#status_code DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#status_code}
  */
  readonly statusCode?: number;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPathToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirect | cdktf.IResolvable): any {
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
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPath",
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirect | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirect | cdktf.IResolvable | undefined) {
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
  private _path = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectPath) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#value DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAdd | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#value DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSet | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSet | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#add DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#add}
  */
  readonly add?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#remove DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#set DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#set}
  */
  readonly set?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSet[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddToTerraform, false)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddList",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifier | cdktf.IResolvable | undefined) {
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
  private _add = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierAdd[] | cdktf.IResolvable) {
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
  private _set = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierSet[] | cdktf.IResolvable) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#replace_full_path DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#replace_full_path}
  */
  readonly replaceFullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#replace_prefix_match DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#replace_prefix_match}
  */
  readonly replacePrefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#type DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePathToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePath | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePathToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePath | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePath | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewrite {
  /**
  * HostToBackendHostname rewrites the hostname to the hostname of the upstream host. This option is only available when targeting MeshGateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#host_to_backend_hostname DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#host_to_backend_hostname}
  */
  readonly hostToBackendHostname?: boolean | cdktf.IResolvable;
  /**
  * Hostname is the value to be used to replace the host header value during forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#hostname DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Path defines a path rewrite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#path DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#path}
  */
  readonly path?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePath;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewriteToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_to_backend_hostname: cdktf.booleanToTerraform(struct!.hostToBackendHostname),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePathToTerraform(struct!.path),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewriteToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_to_backend_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.hostToBackendHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePath",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostToBackendHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostToBackendHostname = this._hostToBackendHostname;
    }
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostToBackendHostname = undefined;
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
      this._hostToBackendHostname = value.hostToBackendHostname;
      this._hostname = value.hostname;
      this._path.internalValue = value.path;
    }
  }

  // host_to_backend_hostname - computed: false, optional: true, required: false
  private _hostToBackendHostname?: boolean | cdktf.IResolvable; 
  public get hostToBackendHostname() {
    return this.getBooleanAttribute('host_to_backend_hostname');
  }
  public set hostToBackendHostname(value: boolean | cdktf.IResolvable) {
    this._hostToBackendHostname = value;
  }
  public resetHostToBackendHostname() {
    this._hostToBackendHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostToBackendHostnameInput() {
    return this._hostToBackendHostname;
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
  private _path = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewritePath) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFilters {
  /**
  * Only one action is supported per header name. Configuration to set or add multiple values for a header must use RFC 7230 header value formatting, separating each value with a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#request_header_modifier DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#request_header_modifier}
  */
  readonly requestHeaderModifier?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifier;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#request_mirror DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#request_mirror}
  */
  readonly requestMirror?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirror;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#request_redirect DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#request_redirect}
  */
  readonly requestRedirect?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirect;
  /**
  * Only one action is supported per header name. Configuration to set or add multiple values for a header must use RFC 7230 header value formatting, separating each value with a comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#response_header_modifier DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#response_header_modifier}
  */
  readonly responseHeaderModifier?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifier;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#type DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#url_rewrite DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#url_rewrite}
  */
  readonly urlRewrite?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewrite;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header_modifier: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierToTerraform(struct!.requestHeaderModifier),
    request_mirror: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorToTerraform(struct!.requestMirror),
    request_redirect: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectToTerraform(struct!.requestRedirect),
    response_header_modifier: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierToTerraform(struct!.responseHeaderModifier),
    type: cdktf.stringToTerraform(struct!.type),
    url_rewrite: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewriteToTerraform(struct!.urlRewrite),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_header_modifier: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierToHclTerraform(struct!.requestHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifier",
    },
    request_mirror: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorToHclTerraform(struct!.requestMirror),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirror",
    },
    request_redirect: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectToHclTerraform(struct!.requestRedirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirect",
    },
    response_header_modifier: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierToHclTerraform(struct!.responseHeaderModifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifier",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_rewrite: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewrite",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._requestHeaderModifier.internalValue = value.requestHeaderModifier;
      this._requestMirror.internalValue = value.requestMirror;
      this._requestRedirect.internalValue = value.requestRedirect;
      this._responseHeaderModifier.internalValue = value.responseHeaderModifier;
      this._type = value.type;
      this._urlRewrite.internalValue = value.urlRewrite;
    }
  }

  // request_header_modifier - computed: false, optional: true, required: false
  private _requestHeaderModifier = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifierOutputReference(this, "request_header_modifier");
  public get requestHeaderModifier() {
    return this._requestHeaderModifier;
  }
  public putRequestHeaderModifier(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestHeaderModifier) {
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
  private _requestMirror = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirrorOutputReference(this, "request_mirror");
  public get requestMirror() {
    return this._requestMirror;
  }
  public putRequestMirror(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestMirror) {
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
  private _requestRedirect = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirectOutputReference(this, "request_redirect");
  public get requestRedirect() {
    return this._requestRedirect;
  }
  public putRequestRedirect(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersRequestRedirect) {
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
  private _responseHeaderModifier = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifierOutputReference(this, "response_header_modifier");
  public get responseHeaderModifier() {
    return this._responseHeaderModifier;
  }
  public putResponseHeaderModifier(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersResponseHeaderModifier) {
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
  private _urlRewrite = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersUrlRewrite) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#backend_refs DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#backend_refs}
  */
  readonly backendRefs?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#filters DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#filters}
  */
  readonly filters?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFilters[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_refs: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsToTerraform, false)(struct!.backendRefs),
    filters: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersToTerraform, false)(struct!.filters),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_refs: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsToHclTerraform, false)(struct!.backendRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsList",
    },
    filters: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefault | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRefs.internalValue = undefined;
      this._filters.internalValue = undefined;
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
    }
  }

  // backend_refs - computed: false, optional: true, required: false
  private _backendRefs = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefsList(this, "backend_refs", false);
  public get backendRefs() {
    return this._backendRefs;
  }
  public putBackendRefs(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultBackendRefs[] | cdktf.IResolvable) {
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
  private _filters = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeaders {
  /**
  * Name is the name of the HTTP Header to be matched. Name MUST be lower case as they will be handled with case insensitivity (See https://tools.ietf.org/html/rfc7230#section-3.2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#type DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#value DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeaders | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeaders | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#type DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Exact or prefix matches must be an absolute path. A prefix matches only if separated by a slash or the entire path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#value DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPathToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPathToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPath | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPath | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#type DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#value DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParams | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParams | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParams | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#headers DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#method DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#path DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#path}
  */
  readonly path?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPath;
  /**
  * QueryParams matches based on HTTP URL query parameters. Multiple matches are ANDed together such that all listed matches must succeed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#query_params DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#query_params}
  */
  readonly queryParams?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParams[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsToTerraform, false)(struct!.queryParams),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPath",
    },
    query_params: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsToHclTerraform, false)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatches | cdktf.IResolvable | undefined) {
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
  private _headers = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesHeaders[] | cdktf.IResolvable) {
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
  private _path = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesPath) {
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
  private _queryParams = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesQueryParams[] | cdktf.IResolvable) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRules {
  /**
  * Default holds routing rules that can be merged with rules from other policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#default DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#default}
  */
  readonly default: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefault;
  /**
  * Matches describes how to match HTTP requests this rule should be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#matches DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#matches}
  */
  readonly matches: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatches[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultToTerraform(struct!.default),
    matches: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesToTerraform, false)(struct!.matches),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefault",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._matches.internalValue = value.matches;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesDefault) {
    this._default.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // matches - computed: false, optional: false, required: true
  private _matches = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#kind DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#labels DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#mesh DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#namespace DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#section_name DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#tags DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRefToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTo {
  /**
  * Hostnames is only valid when targeting MeshGateway and limits the effects of the rules to requests to this hostname. Given hostnames must intersect with the hostname of the listeners the route attaches to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#hostnames DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Rules contains the routing rules applies to a combination of top-level targetRef and the targetRef in this entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#rules DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#rules}
  */
  readonly rules?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRules[] | cdktf.IResolvable;
  /**
  * TargetRef is a reference to the resource that represents a group of request destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#target_ref DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRef;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    rules: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesToTerraform, false)(struct!.rules),
    target_ref: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
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
    rules: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesList",
    },
    target_ref: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._rules.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._rules.internalValue = value.rules;
      this._targetRef.internalValue = value.targetRef;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTargetRef) {
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

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToOutputReference {
    return new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpec {
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined inplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#target_ref DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRef;
  /**
  * To matches destination services of requests and holds configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#to DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_ref: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    to: cdktf.listMapper(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_ref: {
      value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRef",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._targetRef.internalValue = value.targetRef;
      this._to.internalValue = value.to;
    }
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTargetRef) {
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
  private _to = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecTo[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest k8s_kuma_io_mesh_http_route_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_http_route_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshHttpRouteV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_http_route_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kuma_io_mesh_http_route_v1alpha1_manifest k8s_kuma_io_mesh_http_route_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_http_route_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshHttpRouteV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
