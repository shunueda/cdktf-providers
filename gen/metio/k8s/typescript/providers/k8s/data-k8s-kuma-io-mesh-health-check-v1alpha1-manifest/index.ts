// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#metadata DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshHealthCheck resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#spec DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#annotations DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#labels DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#name DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#namespace DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#kind DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#labels DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#mesh DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#name DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#namespace DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#section_name DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#tags DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpc {
  /**
  * The value of the :authority header in the gRPC health check request, by default name of the cluster this health check is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#authority DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#authority}
  */
  readonly authority?: string;
  /**
  * If true the GrpcHealthCheck is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#disabled DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Service name parameter which will be sent to gRPC service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#service_name DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpcToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpcToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._disabled = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._disabled = value.disabled;
      this._serviceName = value.serviceName;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
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

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#name DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#value DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAdd | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddOutputReference {
    return new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#name DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#value DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSet | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSet | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetOutputReference {
    return new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#add DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#add}
  */
  readonly add?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#set DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#set}
  */
  readonly set?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSet[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddToTerraform, false)(struct!.add),
    set: cdktf.listMapper(dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
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
      this._set.internalValue = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddSet[] | cdktf.IResolvable) {
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
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttp {
  /**
  * If true the HttpHealthCheck is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#disabled DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP response statuses which are considered healthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#expected_statuses DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#expected_statuses}
  */
  readonly expectedStatuses?: string[];
  /**
  * The HTTP path which will be requested during the health check (ie. /health)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#path DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The list of HTTP headers which should be added to each health check request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#request_headers_to_add DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAdd;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expected_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expectedStatuses),
    path: cdktf.stringToTerraform(struct!.path),
    request_headers_to_add: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddToTerraform(struct!.requestHeadersToAdd),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expected_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expectedStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers_to_add: {
      value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddToHclTerraform(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAdd",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._expectedStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatuses = this._expectedStatuses;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._expectedStatuses = undefined;
      this._path = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._expectedStatuses = value.expectedStatuses;
      this._path = value.path;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
    }
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

  // expected_statuses - computed: false, optional: true, required: false
  private _expectedStatuses?: string[]; 
  public get expectedStatuses() {
    return this.getListAttribute('expected_statuses');
  }
  public set expectedStatuses(value: string[]) {
    this._expectedStatuses = value;
  }
  public resetExpectedStatuses() {
    this._expectedStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusesInput() {
    return this._expectedStatuses;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAddOutputReference(this, "request_headers_to_add");
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpRequestHeadersToAdd) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }
}
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcp {
  /**
  * If true the TcpHealthCheck is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#disabled DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * List of Base64 encoded blocks of strings expected as a response. When checking the response, 'fuzzy' matching is performed such that each block must be found, and in the order specified, but not necessarily contiguous. If not provided or empty, checks will be performed as 'connect only' and be marked as successful when TCP connection is successfully established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#receive DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#receive}
  */
  readonly receive?: string[];
  /**
  * Base64 encoded content of the message which will be sent during the health check to the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#send DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#send}
  */
  readonly send?: string;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcpToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    receive: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcpToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    receive: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receive),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._receive = undefined;
      this._send = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._receive = value.receive;
      this._send = value.send;
    }
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

  // receive - computed: false, optional: true, required: false
  private _receive?: string[]; 
  public get receive() {
    return this.getListAttribute('receive');
  }
  public set receive(value: string[]) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefault {
  /**
  * If set to true, health check failure events will always be logged. If set to false, only the initial health check failure event will be logged. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#always_log_health_check_failures DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#always_log_health_check_failures}
  */
  readonly alwaysLogHealthCheckFailures?: boolean | cdktf.IResolvable;
  /**
  * Specifies the path to the file where Envoy can log health check events. If empty, no event log will be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#event_log_path DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#event_log_path}
  */
  readonly eventLogPath?: string;
  /**
  * If set to true, Envoy will not consider any hosts when the cluster is in 'panic mode'. Instead, the cluster will fail all requests as if all hosts are unhealthy. This can help avoid potentially overwhelming a failing service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#fail_traffic_on_panic DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#fail_traffic_on_panic}
  */
  readonly failTrafficOnPanic?: boolean | cdktf.IResolvable;
  /**
  * GrpcHealthCheck defines gRPC configuration which will instruct the service the health check will be made for is a gRPC service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#grpc DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpc;
  /**
  * Allows to configure panic threshold for Envoy cluster. If not specified, the default is 50%. To disable panic mode, set to 0%. Either int or decimal represented as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#healthy_panic_threshold DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#healthy_panic_threshold}
  */
  readonly healthyPanicThreshold?: string;
  /**
  * Number of consecutive healthy checks before considering a host healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#healthy_threshold DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * HttpHealthCheck defines HTTP configuration which will instruct the service the health check will be made for is an HTTP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#http DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#http}
  */
  readonly http?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttp;
  /**
  * If specified, Envoy will start health checking after a random time in ms between 0 and initialJitter. This only applies to the first health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#initial_jitter DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#initial_jitter}
  */
  readonly initialJitter?: string;
  /**
  * Interval between consecutive health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#interval DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * If specified, during every interval Envoy will add IntervalJitter to the wait time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#interval_jitter DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#interval_jitter}
  */
  readonly intervalJitter?: string;
  /**
  * If specified, during every interval Envoy will add IntervalJitter * IntervalJitterPercent / 100 to the wait time. If IntervalJitter and IntervalJitterPercent are both set, both of them will be used to increase the wait time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#interval_jitter_percent DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * The 'no traffic interval' is a special health check interval that is used when a cluster has never had traffic routed to it. This lower interval allows cluster information to be kept up to date, without sending a potentially large amount of active health checking traffic for no reason. Once a cluster has been used for traffic routing, Envoy will shift back to using the standard health check interval that is defined. Note that this interval takes precedence over any other. The default value for 'no traffic interval' is 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#no_traffic_interval DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#no_traffic_interval}
  */
  readonly noTrafficInterval?: string;
  /**
  * Reuse health check connection between health checks. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#reuse_connection DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#reuse_connection}
  */
  readonly reuseConnection?: boolean | cdktf.IResolvable;
  /**
  * TcpHealthCheck defines configuration for specifying bytes to send and expected response during the health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#tcp DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#tcp}
  */
  readonly tcp?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcp;
  /**
  * Maximum time to wait for a health check response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#timeout DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Number of consecutive unhealthy checks before considering a host unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#unhealthy_threshold DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_log_health_check_failures: cdktf.booleanToTerraform(struct!.alwaysLogHealthCheckFailures),
    event_log_path: cdktf.stringToTerraform(struct!.eventLogPath),
    fail_traffic_on_panic: cdktf.booleanToTerraform(struct!.failTrafficOnPanic),
    grpc: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpcToTerraform(struct!.grpc),
    healthy_panic_threshold: cdktf.stringToTerraform(struct!.healthyPanicThreshold),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    http: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpToTerraform(struct!.http),
    initial_jitter: cdktf.stringToTerraform(struct!.initialJitter),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_jitter: cdktf.stringToTerraform(struct!.intervalJitter),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    no_traffic_interval: cdktf.stringToTerraform(struct!.noTrafficInterval),
    reuse_connection: cdktf.booleanToTerraform(struct!.reuseConnection),
    tcp: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcpToTerraform(struct!.tcp),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_log_health_check_failures: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysLogHealthCheckFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_log_path: {
      value: cdktf.stringToHclTerraform(struct!.eventLogPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_traffic_on_panic: {
      value: cdktf.booleanToHclTerraform(struct!.failTrafficOnPanic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grpc: {
      value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpc",
    },
    healthy_panic_threshold: {
      value: cdktf.stringToHclTerraform(struct!.healthyPanicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http: {
      value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttp",
    },
    initial_jitter: {
      value: cdktf.stringToHclTerraform(struct!.initialJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_jitter: {
      value: cdktf.stringToHclTerraform(struct!.intervalJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_jitter_percent: {
      value: cdktf.numberToHclTerraform(struct!.intervalJitterPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_traffic_interval: {
      value: cdktf.stringToHclTerraform(struct!.noTrafficInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reuse_connection: {
      value: cdktf.booleanToHclTerraform(struct!.reuseConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp: {
      value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcp",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysLogHealthCheckFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysLogHealthCheckFailures = this._alwaysLogHealthCheckFailures;
    }
    if (this._eventLogPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventLogPath = this._eventLogPath;
    }
    if (this._failTrafficOnPanic !== undefined) {
      hasAnyValues = true;
      internalValueResult.failTrafficOnPanic = this._failTrafficOnPanic;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._healthyPanicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyPanicThreshold = this._healthyPanicThreshold;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._initialJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialJitter = this._initialJitter;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitter = this._intervalJitter;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._noTrafficInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTrafficInterval = this._noTrafficInterval;
    }
    if (this._reuseConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseConnection = this._reuseConnection;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysLogHealthCheckFailures = undefined;
      this._eventLogPath = undefined;
      this._failTrafficOnPanic = undefined;
      this._grpc.internalValue = undefined;
      this._healthyPanicThreshold = undefined;
      this._healthyThreshold = undefined;
      this._http.internalValue = undefined;
      this._initialJitter = undefined;
      this._interval = undefined;
      this._intervalJitter = undefined;
      this._intervalJitterPercent = undefined;
      this._noTrafficInterval = undefined;
      this._reuseConnection = undefined;
      this._tcp.internalValue = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysLogHealthCheckFailures = value.alwaysLogHealthCheckFailures;
      this._eventLogPath = value.eventLogPath;
      this._failTrafficOnPanic = value.failTrafficOnPanic;
      this._grpc.internalValue = value.grpc;
      this._healthyPanicThreshold = value.healthyPanicThreshold;
      this._healthyThreshold = value.healthyThreshold;
      this._http.internalValue = value.http;
      this._initialJitter = value.initialJitter;
      this._interval = value.interval;
      this._intervalJitter = value.intervalJitter;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._noTrafficInterval = value.noTrafficInterval;
      this._reuseConnection = value.reuseConnection;
      this._tcp.internalValue = value.tcp;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // always_log_health_check_failures - computed: false, optional: true, required: false
  private _alwaysLogHealthCheckFailures?: boolean | cdktf.IResolvable; 
  public get alwaysLogHealthCheckFailures() {
    return this.getBooleanAttribute('always_log_health_check_failures');
  }
  public set alwaysLogHealthCheckFailures(value: boolean | cdktf.IResolvable) {
    this._alwaysLogHealthCheckFailures = value;
  }
  public resetAlwaysLogHealthCheckFailures() {
    this._alwaysLogHealthCheckFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysLogHealthCheckFailuresInput() {
    return this._alwaysLogHealthCheckFailures;
  }

  // event_log_path - computed: false, optional: true, required: false
  private _eventLogPath?: string; 
  public get eventLogPath() {
    return this.getStringAttribute('event_log_path');
  }
  public set eventLogPath(value: string) {
    this._eventLogPath = value;
  }
  public resetEventLogPath() {
    this._eventLogPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogPathInput() {
    return this._eventLogPath;
  }

  // fail_traffic_on_panic - computed: false, optional: true, required: false
  private _failTrafficOnPanic?: boolean | cdktf.IResolvable; 
  public get failTrafficOnPanic() {
    return this.getBooleanAttribute('fail_traffic_on_panic');
  }
  public set failTrafficOnPanic(value: boolean | cdktf.IResolvable) {
    this._failTrafficOnPanic = value;
  }
  public resetFailTrafficOnPanic() {
    this._failTrafficOnPanic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTrafficOnPanicInput() {
    return this._failTrafficOnPanic;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // healthy_panic_threshold - computed: false, optional: true, required: false
  private _healthyPanicThreshold?: string; 
  public get healthyPanicThreshold() {
    return this.getStringAttribute('healthy_panic_threshold');
  }
  public set healthyPanicThreshold(value: string) {
    this._healthyPanicThreshold = value;
  }
  public resetHealthyPanicThreshold() {
    this._healthyPanicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyPanicThresholdInput() {
    return this._healthyPanicThreshold;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // initial_jitter - computed: false, optional: true, required: false
  private _initialJitter?: string; 
  public get initialJitter() {
    return this.getStringAttribute('initial_jitter');
  }
  public set initialJitter(value: string) {
    this._initialJitter = value;
  }
  public resetInitialJitter() {
    this._initialJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialJitterInput() {
    return this._initialJitter;
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

  // interval_jitter - computed: false, optional: true, required: false
  private _intervalJitter?: string; 
  public get intervalJitter() {
    return this.getStringAttribute('interval_jitter');
  }
  public set intervalJitter(value: string) {
    this._intervalJitter = value;
  }
  public resetIntervalJitter() {
    this._intervalJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterInput() {
    return this._intervalJitter;
  }

  // interval_jitter_percent - computed: false, optional: true, required: false
  private _intervalJitterPercent?: number; 
  public get intervalJitterPercent() {
    return this.getNumberAttribute('interval_jitter_percent');
  }
  public set intervalJitterPercent(value: number) {
    this._intervalJitterPercent = value;
  }
  public resetIntervalJitterPercent() {
    this._intervalJitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterPercentInput() {
    return this._intervalJitterPercent;
  }

  // no_traffic_interval - computed: false, optional: true, required: false
  private _noTrafficInterval?: string; 
  public get noTrafficInterval() {
    return this.getStringAttribute('no_traffic_interval');
  }
  public set noTrafficInterval(value: string) {
    this._noTrafficInterval = value;
  }
  public resetNoTrafficInterval() {
    this._noTrafficInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTrafficIntervalInput() {
    return this._noTrafficInterval;
  }

  // reuse_connection - computed: false, optional: true, required: false
  private _reuseConnection?: boolean | cdktf.IResolvable; 
  public get reuseConnection() {
    return this.getBooleanAttribute('reuse_connection');
  }
  public set reuseConnection(value: boolean | cdktf.IResolvable) {
    this._reuseConnection = value;
  }
  public resetReuseConnection() {
    this._reuseConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseConnectionInput() {
    return this._reuseConnection;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#kind DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#labels DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#mesh DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#name DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#namespace DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#section_name DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#tags DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRefToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTo {
  /**
  * Default is a configuration specific to the group of destinations referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#default DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#target_ref DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRef;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined) {
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
  private _default = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToDefault) {
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
  private _targetRef = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToOutputReference {
    return new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpec {
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined inplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#target_ref DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRef;
  /**
  * To list makes a match between the consumed services and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#to DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_ref: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    to: cdktf.listMapper(dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_ref: {
      value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRef",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _targetRef = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTargetRef) {
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
  private _to = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecTo[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest k8s_kuma_io_mesh_health_check_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_health_check_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshHealthCheckV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_health_check_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_health_check_v1alpha1_manifest k8s_kuma_io_mesh_health_check_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_health_check_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshHealthCheckV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
