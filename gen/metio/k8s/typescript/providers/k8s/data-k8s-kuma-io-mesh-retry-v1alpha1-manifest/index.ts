// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#metadata DataK8SKumaIoMeshRetryV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshRetry resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#spec DataK8SKumaIoMeshRetryV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#annotations DataK8SKumaIoMeshRetryV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#labels DataK8SKumaIoMeshRetryV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#name DataK8SKumaIoMeshRetryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#namespace DataK8SKumaIoMeshRetryV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#kind DataK8SKumaIoMeshRetryV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#labels DataK8SKumaIoMeshRetryV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#mesh DataK8SKumaIoMeshRetryV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#name DataK8SKumaIoMeshRetryV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#namespace DataK8SKumaIoMeshRetryV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshRetryV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#section_name DataK8SKumaIoMeshRetryV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#tags DataK8SKumaIoMeshRetryV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOff {
  /**
  * BaseInterval is an amount of time which should be taken between retries. Must be greater than zero. Values less than 1 ms are rounded up to 1 ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#base_interval DataK8SKumaIoMeshRetryV1Alpha1Manifest#base_interval}
  */
  readonly baseInterval?: string;
  /**
  * MaxInterval is a maximal amount of time which will be taken between retries. Default is 10 times the 'BaseInterval'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#max_interval DataK8SKumaIoMeshRetryV1Alpha1Manifest#max_interval}
  */
  readonly maxInterval?: string;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOffToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_interval: cdktf.stringToTerraform(struct!.baseInterval),
    max_interval: cdktf.stringToTerraform(struct!.maxInterval),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOffToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_interval: {
      value: cdktf.stringToHclTerraform(struct!.baseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInterval = this._baseInterval;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseInterval = undefined;
      this._maxInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseInterval = value.baseInterval;
      this._maxInterval = value.maxInterval;
    }
  }

  // base_interval - computed: false, optional: true, required: false
  private _baseInterval?: string; 
  public get baseInterval() {
    return this.getStringAttribute('base_interval');
  }
  public set baseInterval(value: string) {
    this._baseInterval = value;
  }
  public resetBaseInterval() {
    this._baseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseIntervalInput() {
    return this._baseInterval;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: string; 
  public get maxInterval() {
    return this.getStringAttribute('max_interval');
  }
  public set maxInterval(value: string) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeaders {
  /**
  * The format of the reset header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#format DataK8SKumaIoMeshRetryV1Alpha1Manifest#format}
  */
  readonly format: string;
  /**
  * The Name of the reset header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#name DataK8SKumaIoMeshRetryV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersOutputReference {
    return new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOff {
  /**
  * MaxInterval is a maximal amount of time which will be taken between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#max_interval DataK8SKumaIoMeshRetryV1Alpha1Manifest#max_interval}
  */
  readonly maxInterval?: string;
  /**
  * ResetHeaders specifies the list of headers (like Retry-After or X-RateLimit-Reset) to match against the response. Headers are tried in order, and matched case-insensitive. The first header to be parsed successfully is used. If no headers match the default exponential BackOff is used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#reset_headers DataK8SKumaIoMeshRetryV1Alpha1Manifest#reset_headers}
  */
  readonly resetHeaders?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeaders[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_interval: cdktf.stringToTerraform(struct!.maxInterval),
    reset_headers: cdktf.listMapper(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersToTerraform, false)(struct!.resetHeaders),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_headers: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersToHclTerraform, false)(struct!.resetHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._resetHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetHeaders = this._resetHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxInterval = undefined;
      this._resetHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxInterval = value.maxInterval;
      this._resetHeaders.internalValue = value.resetHeaders;
    }
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: string; 
  public get maxInterval() {
    return this.getStringAttribute('max_interval');
  }
  public set maxInterval(value: string) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // reset_headers - computed: false, optional: true, required: false
  private _resetHeaders = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeadersList(this, "reset_headers", false);
  public get resetHeaders() {
    return this._resetHeaders;
  }
  public putResetHeaders(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffResetHeaders[] | cdktf.IResolvable) {
    this._resetHeaders.internalValue = value;
  }
  public resetResetHeaders() {
    this._resetHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetHeadersInput() {
    return this._resetHeaders.internalValue;
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpc {
  /**
  * BackOff is a configuration of durations which will be used in an exponential backoff strategy between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#back_off DataK8SKumaIoMeshRetryV1Alpha1Manifest#back_off}
  */
  readonly backOff?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOff;
  /**
  * NumRetries is the number of attempts that will be made on failed (and retriable) requests. If not set, the default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#num_retries DataK8SKumaIoMeshRetryV1Alpha1Manifest#num_retries}
  */
  readonly numRetries?: number;
  /**
  * PerTryTimeout is the maximum amount of time each retry attempt can take before it times out. If not set, the global request timeout for the route will be used. Setting this value to 0 will disable the per-try timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#per_try_timeout DataK8SKumaIoMeshRetryV1Alpha1Manifest#per_try_timeout}
  */
  readonly perTryTimeout?: string;
  /**
  * RateLimitedBackOff is a configuration of backoff which will be used when the upstream returns one of the headers configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#rate_limited_back_off DataK8SKumaIoMeshRetryV1Alpha1Manifest#rate_limited_back_off}
  */
  readonly rateLimitedBackOff?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOff;
  /**
  * RetryOn is a list of conditions which will cause a retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#retry_on DataK8SKumaIoMeshRetryV1Alpha1Manifest#retry_on}
  */
  readonly retryOn?: string[];
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_off: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOffToTerraform(struct!.backOff),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    per_try_timeout: cdktf.stringToTerraform(struct!.perTryTimeout),
    rate_limited_back_off: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffToTerraform(struct!.rateLimitedBackOff),
    retry_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryOn),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_off: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOffToHclTerraform(struct!.backOff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOff",
    },
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.stringToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limited_back_off: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffToHclTerraform(struct!.rateLimitedBackOff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOff",
    },
    retry_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backOff = this._backOff?.internalValue;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._rateLimitedBackOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitedBackOff = this._rateLimitedBackOff?.internalValue;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backOff.internalValue = undefined;
      this._numRetries = undefined;
      this._perTryTimeout = undefined;
      this._rateLimitedBackOff.internalValue = undefined;
      this._retryOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backOff.internalValue = value.backOff;
      this._numRetries = value.numRetries;
      this._perTryTimeout = value.perTryTimeout;
      this._rateLimitedBackOff.internalValue = value.rateLimitedBackOff;
      this._retryOn = value.retryOn;
    }
  }

  // back_off - computed: false, optional: true, required: false
  private _backOff = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOffOutputReference(this, "back_off");
  public get backOff() {
    return this._backOff;
  }
  public putBackOff(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcBackOff) {
    this._backOff.internalValue = value;
  }
  public resetBackOff() {
    this._backOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backOffInput() {
    return this._backOff.internalValue;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: string; 
  public get perTryTimeout() {
    return this.getStringAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: string) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // rate_limited_back_off - computed: false, optional: true, required: false
  private _rateLimitedBackOff = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOffOutputReference(this, "rate_limited_back_off");
  public get rateLimitedBackOff() {
    return this._rateLimitedBackOff;
  }
  public putRateLimitedBackOff(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcRateLimitedBackOff) {
    this._rateLimitedBackOff.internalValue = value;
  }
  public resetRateLimitedBackOff() {
    this._rateLimitedBackOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitedBackOffInput() {
    return this._rateLimitedBackOff.internalValue;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string[]; 
  public get retryOn() {
    return this.getListAttribute('retry_on');
  }
  public set retryOn(value: string[]) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOff {
  /**
  * BaseInterval is an amount of time which should be taken between retries. Must be greater than zero. Values less than 1 ms are rounded up to 1 ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#base_interval DataK8SKumaIoMeshRetryV1Alpha1Manifest#base_interval}
  */
  readonly baseInterval?: string;
  /**
  * MaxInterval is a maximal amount of time which will be taken between retries. Default is 10 times the 'BaseInterval'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#max_interval DataK8SKumaIoMeshRetryV1Alpha1Manifest#max_interval}
  */
  readonly maxInterval?: string;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOffToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_interval: cdktf.stringToTerraform(struct!.baseInterval),
    max_interval: cdktf.stringToTerraform(struct!.maxInterval),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOffToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_interval: {
      value: cdktf.stringToHclTerraform(struct!.baseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInterval = this._baseInterval;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseInterval = undefined;
      this._maxInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseInterval = value.baseInterval;
      this._maxInterval = value.maxInterval;
    }
  }

  // base_interval - computed: false, optional: true, required: false
  private _baseInterval?: string; 
  public get baseInterval() {
    return this.getStringAttribute('base_interval');
  }
  public set baseInterval(value: string) {
    this._baseInterval = value;
  }
  public resetBaseInterval() {
    this._baseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseIntervalInput() {
    return this._baseInterval;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: string; 
  public get maxInterval() {
    return this.getStringAttribute('max_interval');
  }
  public set maxInterval(value: string) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelection {
  /**
  * Type is requested predicate mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#predicate DataK8SKumaIoMeshRetryV1Alpha1Manifest#predicate}
  */
  readonly predicate: string;
  /**
  * Tags is a map of metadata to match against for selecting the omitted hosts. Required if Type is OmitHostsWithTags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#tags DataK8SKumaIoMeshRetryV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * UpdateFrequency is how often the priority load should be updated based on previously attempted priorities. Used for OmitPreviousPriorities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#update_frequency DataK8SKumaIoMeshRetryV1Alpha1Manifest#update_frequency}
  */
  readonly updateFrequency?: number;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predicate: cdktf.stringToTerraform(struct!.predicate),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    update_frequency: cdktf.numberToTerraform(struct!.updateFrequency),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predicate: {
      value: cdktf.stringToHclTerraform(struct!.predicate),
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
    update_frequency: {
      value: cdktf.numberToHclTerraform(struct!.updateFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._updateFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateFrequency = this._updateFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predicate = undefined;
      this._tags = undefined;
      this._updateFrequency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predicate = value.predicate;
      this._tags = value.tags;
      this._updateFrequency = value.updateFrequency;
    }
  }

  // predicate - computed: false, optional: false, required: true
  private _predicate?: string; 
  public get predicate() {
    return this.getStringAttribute('predicate');
  }
  public set predicate(value: string) {
    this._predicate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate;
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

  // update_frequency - computed: false, optional: true, required: false
  private _updateFrequency?: number; 
  public get updateFrequency() {
    return this.getNumberAttribute('update_frequency');
  }
  public set updateFrequency(value: number) {
    this._updateFrequency = value;
  }
  public resetUpdateFrequency() {
    this._updateFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateFrequencyInput() {
    return this._updateFrequency;
  }
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelection[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionOutputReference {
    return new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeaders {
  /**
  * The format of the reset header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#format DataK8SKumaIoMeshRetryV1Alpha1Manifest#format}
  */
  readonly format: string;
  /**
  * The Name of the reset header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#name DataK8SKumaIoMeshRetryV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersOutputReference {
    return new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOff {
  /**
  * MaxInterval is a maximal amount of time which will be taken between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#max_interval DataK8SKumaIoMeshRetryV1Alpha1Manifest#max_interval}
  */
  readonly maxInterval?: string;
  /**
  * ResetHeaders specifies the list of headers (like Retry-After or X-RateLimit-Reset) to match against the response. Headers are tried in order, and matched case-insensitive. The first header to be parsed successfully is used. If no headers match the default exponential BackOff is used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#reset_headers DataK8SKumaIoMeshRetryV1Alpha1Manifest#reset_headers}
  */
  readonly resetHeaders?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeaders[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_interval: cdktf.stringToTerraform(struct!.maxInterval),
    reset_headers: cdktf.listMapper(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersToTerraform, false)(struct!.resetHeaders),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_headers: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersToHclTerraform, false)(struct!.resetHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._resetHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetHeaders = this._resetHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxInterval = undefined;
      this._resetHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxInterval = value.maxInterval;
      this._resetHeaders.internalValue = value.resetHeaders;
    }
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: string; 
  public get maxInterval() {
    return this.getStringAttribute('max_interval');
  }
  public set maxInterval(value: string) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // reset_headers - computed: false, optional: true, required: false
  private _resetHeaders = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeadersList(this, "reset_headers", false);
  public get resetHeaders() {
    return this._resetHeaders;
  }
  public putResetHeaders(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffResetHeaders[] | cdktf.IResolvable) {
    this._resetHeaders.internalValue = value;
  }
  public resetResetHeaders() {
    this._resetHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetHeadersInput() {
    return this._resetHeaders.internalValue;
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeaders {
  /**
  * Name is the name of the HTTP Header to be matched. Name MUST be lower case as they will be handled with case insensitivity (See https://tools.ietf.org/html/rfc7230#section-3.2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#name DataK8SKumaIoMeshRetryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#type DataK8SKumaIoMeshRetryV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#value DataK8SKumaIoMeshRetryV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeaders | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeaders | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersOutputReference {
    return new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeaders {
  /**
  * Name is the name of the HTTP Header to be matched. Name MUST be lower case as they will be handled with case insensitivity (See https://tools.ietf.org/html/rfc7230#section-3.2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#name DataK8SKumaIoMeshRetryV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#type DataK8SKumaIoMeshRetryV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#value DataK8SKumaIoMeshRetryV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeaders | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeaders | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersOutputReference {
    return new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttp {
  /**
  * BackOff is a configuration of durations which will be used in exponential backoff strategy between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#back_off DataK8SKumaIoMeshRetryV1Alpha1Manifest#back_off}
  */
  readonly backOff?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOff;
  /**
  * HostSelection is a list of predicates that dictate how hosts should be selected when requests are retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#host_selection DataK8SKumaIoMeshRetryV1Alpha1Manifest#host_selection}
  */
  readonly hostSelection?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelection[] | cdktf.IResolvable;
  /**
  * HostSelectionMaxAttempts is the maximum number of times host selection will be reattempted before giving up, at which point the host that was last selected will be routed to. If unspecified, this will default to retrying once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#host_selection_max_attempts DataK8SKumaIoMeshRetryV1Alpha1Manifest#host_selection_max_attempts}
  */
  readonly hostSelectionMaxAttempts?: number;
  /**
  * NumRetries is the number of attempts that will be made on failed (and retriable) requests. If not set, the default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#num_retries DataK8SKumaIoMeshRetryV1Alpha1Manifest#num_retries}
  */
  readonly numRetries?: number;
  /**
  * PerTryTimeout is the amount of time after which retry attempt should time out. If left unspecified, the global route timeout for the request will be used. Consequently, when using a 5xx based retry policy, a request that times out will not be retried as the total timeout budget would have been exhausted. Setting this timeout to 0 will disable it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#per_try_timeout DataK8SKumaIoMeshRetryV1Alpha1Manifest#per_try_timeout}
  */
  readonly perTryTimeout?: string;
  /**
  * RateLimitedBackOff is a configuration of backoff which will be used when the upstream returns one of the headers configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#rate_limited_back_off DataK8SKumaIoMeshRetryV1Alpha1Manifest#rate_limited_back_off}
  */
  readonly rateLimitedBackOff?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOff;
  /**
  * RetriableRequestHeaders is an HTTP headers which must be present in the request for retries to be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#retriable_request_headers DataK8SKumaIoMeshRetryV1Alpha1Manifest#retriable_request_headers}
  */
  readonly retriableRequestHeaders?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeaders[] | cdktf.IResolvable;
  /**
  * RetriableResponseHeaders is an HTTP response headers that trigger a retry if present in the response. A retry will be triggered if any of the header matches the upstream response headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#retriable_response_headers DataK8SKumaIoMeshRetryV1Alpha1Manifest#retriable_response_headers}
  */
  readonly retriableResponseHeaders?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeaders[] | cdktf.IResolvable;
  /**
  * RetryOn is a list of conditions which will cause a retry. Available values are: [5XX, GatewayError, Reset, Retriable4xx, ConnectFailure, EnvoyRatelimited, RefusedStream, Http3PostConnectFailure, HttpMethodConnect, HttpMethodDelete, HttpMethodGet, HttpMethodHead, HttpMethodOptions, HttpMethodPatch, HttpMethodPost, HttpMethodPut, HttpMethodTrace]. Also, any HTTP status code (500, 503, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#retry_on DataK8SKumaIoMeshRetryV1Alpha1Manifest#retry_on}
  */
  readonly retryOn?: string[];
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_off: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOffToTerraform(struct!.backOff),
    host_selection: cdktf.listMapper(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionToTerraform, false)(struct!.hostSelection),
    host_selection_max_attempts: cdktf.numberToTerraform(struct!.hostSelectionMaxAttempts),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    per_try_timeout: cdktf.stringToTerraform(struct!.perTryTimeout),
    rate_limited_back_off: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffToTerraform(struct!.rateLimitedBackOff),
    retriable_request_headers: cdktf.listMapper(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersToTerraform, false)(struct!.retriableRequestHeaders),
    retriable_response_headers: cdktf.listMapper(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersToTerraform, false)(struct!.retriableResponseHeaders),
    retry_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryOn),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_off: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOffToHclTerraform(struct!.backOff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOff",
    },
    host_selection: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionToHclTerraform, false)(struct!.hostSelection),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionList",
    },
    host_selection_max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.hostSelectionMaxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.stringToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limited_back_off: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffToHclTerraform(struct!.rateLimitedBackOff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOff",
    },
    retriable_request_headers: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersToHclTerraform, false)(struct!.retriableRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersList",
    },
    retriable_response_headers: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersToHclTerraform, false)(struct!.retriableResponseHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersList",
    },
    retry_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backOff = this._backOff?.internalValue;
    }
    if (this._hostSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSelection = this._hostSelection?.internalValue;
    }
    if (this._hostSelectionMaxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSelectionMaxAttempts = this._hostSelectionMaxAttempts;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._rateLimitedBackOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitedBackOff = this._rateLimitedBackOff?.internalValue;
    }
    if (this._retriableRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriableRequestHeaders = this._retriableRequestHeaders?.internalValue;
    }
    if (this._retriableResponseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriableResponseHeaders = this._retriableResponseHeaders?.internalValue;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backOff.internalValue = undefined;
      this._hostSelection.internalValue = undefined;
      this._hostSelectionMaxAttempts = undefined;
      this._numRetries = undefined;
      this._perTryTimeout = undefined;
      this._rateLimitedBackOff.internalValue = undefined;
      this._retriableRequestHeaders.internalValue = undefined;
      this._retriableResponseHeaders.internalValue = undefined;
      this._retryOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backOff.internalValue = value.backOff;
      this._hostSelection.internalValue = value.hostSelection;
      this._hostSelectionMaxAttempts = value.hostSelectionMaxAttempts;
      this._numRetries = value.numRetries;
      this._perTryTimeout = value.perTryTimeout;
      this._rateLimitedBackOff.internalValue = value.rateLimitedBackOff;
      this._retriableRequestHeaders.internalValue = value.retriableRequestHeaders;
      this._retriableResponseHeaders.internalValue = value.retriableResponseHeaders;
      this._retryOn = value.retryOn;
    }
  }

  // back_off - computed: false, optional: true, required: false
  private _backOff = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOffOutputReference(this, "back_off");
  public get backOff() {
    return this._backOff;
  }
  public putBackOff(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpBackOff) {
    this._backOff.internalValue = value;
  }
  public resetBackOff() {
    this._backOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backOffInput() {
    return this._backOff.internalValue;
  }

  // host_selection - computed: false, optional: true, required: false
  private _hostSelection = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelectionList(this, "host_selection", false);
  public get hostSelection() {
    return this._hostSelection;
  }
  public putHostSelection(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpHostSelection[] | cdktf.IResolvable) {
    this._hostSelection.internalValue = value;
  }
  public resetHostSelection() {
    this._hostSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSelectionInput() {
    return this._hostSelection.internalValue;
  }

  // host_selection_max_attempts - computed: false, optional: true, required: false
  private _hostSelectionMaxAttempts?: number; 
  public get hostSelectionMaxAttempts() {
    return this.getNumberAttribute('host_selection_max_attempts');
  }
  public set hostSelectionMaxAttempts(value: number) {
    this._hostSelectionMaxAttempts = value;
  }
  public resetHostSelectionMaxAttempts() {
    this._hostSelectionMaxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSelectionMaxAttemptsInput() {
    return this._hostSelectionMaxAttempts;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: string; 
  public get perTryTimeout() {
    return this.getStringAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: string) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // rate_limited_back_off - computed: false, optional: true, required: false
  private _rateLimitedBackOff = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOffOutputReference(this, "rate_limited_back_off");
  public get rateLimitedBackOff() {
    return this._rateLimitedBackOff;
  }
  public putRateLimitedBackOff(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRateLimitedBackOff) {
    this._rateLimitedBackOff.internalValue = value;
  }
  public resetRateLimitedBackOff() {
    this._rateLimitedBackOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitedBackOffInput() {
    return this._rateLimitedBackOff.internalValue;
  }

  // retriable_request_headers - computed: false, optional: true, required: false
  private _retriableRequestHeaders = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeadersList(this, "retriable_request_headers", false);
  public get retriableRequestHeaders() {
    return this._retriableRequestHeaders;
  }
  public putRetriableRequestHeaders(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableRequestHeaders[] | cdktf.IResolvable) {
    this._retriableRequestHeaders.internalValue = value;
  }
  public resetRetriableRequestHeaders() {
    this._retriableRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableRequestHeadersInput() {
    return this._retriableRequestHeaders.internalValue;
  }

  // retriable_response_headers - computed: false, optional: true, required: false
  private _retriableResponseHeaders = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeadersList(this, "retriable_response_headers", false);
  public get retriableResponseHeaders() {
    return this._retriableResponseHeaders;
  }
  public putRetriableResponseHeaders(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpRetriableResponseHeaders[] | cdktf.IResolvable) {
    this._retriableResponseHeaders.internalValue = value;
  }
  public resetRetriableResponseHeaders() {
    this._retriableResponseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableResponseHeadersInput() {
    return this._retriableResponseHeaders.internalValue;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string[]; 
  public get retryOn() {
    return this.getListAttribute('retry_on');
  }
  public set retryOn(value: string[]) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcp {
  /**
  * MaxConnectAttempt is a maximal amount of TCP connection attempts which will be made before giving up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#max_connect_attempt DataK8SKumaIoMeshRetryV1Alpha1Manifest#max_connect_attempt}
  */
  readonly maxConnectAttempt?: number;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcpToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connect_attempt: cdktf.numberToTerraform(struct!.maxConnectAttempt),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcpToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connect_attempt: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnectAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectAttempt = this._maxConnectAttempt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnectAttempt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnectAttempt = value.maxConnectAttempt;
    }
  }

  // max_connect_attempt - computed: false, optional: true, required: false
  private _maxConnectAttempt?: number; 
  public get maxConnectAttempt() {
    return this.getNumberAttribute('max_connect_attempt');
  }
  public set maxConnectAttempt(value: number) {
    this._maxConnectAttempt = value;
  }
  public resetMaxConnectAttempt() {
    this._maxConnectAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectAttemptInput() {
    return this._maxConnectAttempt;
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefault {
  /**
  * GRPC defines a configuration of retries for GRPC traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#grpc DataK8SKumaIoMeshRetryV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpc;
  /**
  * HTTP defines a configuration of retries for HTTP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#http DataK8SKumaIoMeshRetryV1Alpha1Manifest#http}
  */
  readonly http?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttp;
  /**
  * TCP defines a configuration of retries for TCP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#tcp DataK8SKumaIoMeshRetryV1Alpha1Manifest#tcp}
  */
  readonly tcp?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcp;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcToTerraform(struct!.grpc),
    http: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpToTerraform(struct!.http),
    tcp: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpc",
    },
    http: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttp",
    },
    tcp: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#kind DataK8SKumaIoMeshRetryV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#labels DataK8SKumaIoMeshRetryV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#mesh DataK8SKumaIoMeshRetryV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#name DataK8SKumaIoMeshRetryV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#namespace DataK8SKumaIoMeshRetryV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshRetryV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#section_name DataK8SKumaIoMeshRetryV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#tags DataK8SKumaIoMeshRetryV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRefToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTo {
  /**
  * Default is a configuration specific to the group of destinations referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#default DataK8SKumaIoMeshRetryV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#target_ref DataK8SKumaIoMeshRetryV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRef;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined) {
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
  private _default = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToDefault) {
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
  private _targetRef = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToOutputReference {
    return new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRetryV1Alpha1ManifestSpec {
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined inplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#target_ref DataK8SKumaIoMeshRetryV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRef;
  /**
  * To list makes a match between the consumed services and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#to DataK8SKumaIoMeshRetryV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_ref: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    to: cdktf.listMapper(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_ref: {
      value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRef",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRetryV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _targetRef = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTargetRef) {
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
  private _to = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecTo[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest k8s_kuma_io_mesh_retry_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshRetryV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_retry_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshRetryV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshRetryV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshRetryV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshRetryV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_retry_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuma_io_mesh_retry_v1alpha1_manifest k8s_kuma_io_mesh_retry_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshRetryV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshRetryV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_retry_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshRetryV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshRetryV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshRetryV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshRetryV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshRetryV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshRetryV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
