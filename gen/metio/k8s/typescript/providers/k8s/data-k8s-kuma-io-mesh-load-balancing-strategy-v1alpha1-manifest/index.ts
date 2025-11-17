// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#metadata DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshLoadBalancingStrategy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#spec DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#annotations DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#labels DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#namespace DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#kind DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#labels DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#mesh DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#namespace DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#section_name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#tags DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequest {
  /**
  * ActiveRequestBias refers to dynamic weights applied when hosts have varying load balancing weights. A higher value here aggressively reduces the weight of endpoints that are currently handling active requests. In essence, the higher the ActiveRequestBias value, the more forcefully it reduces the load balancing weight of endpoints that are actively serving requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#active_request_bias DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#active_request_bias}
  */
  readonly activeRequestBias?: string;
  /**
  * ChoiceCount is the number of random healthy hosts from which the host with the fewest active requests will be chosen. Defaults to 2 so that Envoy performs two-choice selection if the field is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#choice_count DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#choice_count}
  */
  readonly choiceCount?: number;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequestToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_request_bias: cdktf.stringToTerraform(struct!.activeRequestBias),
    choice_count: cdktf.numberToTerraform(struct!.choiceCount),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequestToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_request_bias: {
      value: cdktf.stringToHclTerraform(struct!.activeRequestBias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    choice_count: {
      value: cdktf.numberToHclTerraform(struct!.choiceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeRequestBias !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeRequestBias = this._activeRequestBias;
    }
    if (this._choiceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.choiceCount = this._choiceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeRequestBias = undefined;
      this._choiceCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeRequestBias = value.activeRequestBias;
      this._choiceCount = value.choiceCount;
    }
  }

  // active_request_bias - computed: false, optional: true, required: false
  private _activeRequestBias?: string; 
  public get activeRequestBias() {
    return this.getStringAttribute('active_request_bias');
  }
  public set activeRequestBias(value: string) {
    this._activeRequestBias = value;
  }
  public resetActiveRequestBias() {
    this._activeRequestBias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeRequestBiasInput() {
    return this._activeRequestBias;
  }

  // choice_count - computed: false, optional: true, required: false
  private _choiceCount?: number; 
  public get choiceCount() {
    return this.getNumberAttribute('choice_count');
  }
  public set choiceCount(value: number) {
    this._choiceCount = value;
  }
  public resetChoiceCount() {
    this._choiceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choiceCountInput() {
    return this._choiceCount;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnection {
  /**
  * Hash on source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#source_ip DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnectionToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnectionToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceIp = value.sourceIp;
    }
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookie {
  /**
  * The name of the cookie that will be used to obtain the hash key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The name of the path for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#path DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * If specified, a cookie with the TTL will be generated if the cookie is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#ttl DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookieToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookieToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookie | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._ttl = value.ttl;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterState {
  /**
  * The name of the Object in the per-request filterState, which is an Envoy::Hashable object. If there is no data associated with the key, or the stored object is not Envoy::Hashable, no hash will be produced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#key DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#key}
  */
  readonly key: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterStateToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterStateToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeader {
  /**
  * The name of the request header that will be used to obtain the hash key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeaderToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeaderToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeader | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameter {
  /**
  * The name of the URL query parameter that will be used to obtain the hash key. If the parameter is not present, no hash will be produced. Query parameter names are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameterToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameterToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameter | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#connection DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#connection}
  */
  readonly connection?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#cookie DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookie;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#filter_state DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#filter_state}
  */
  readonly filterState?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterState;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#header DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#header}
  */
  readonly header?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#query_parameter DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#query_parameter}
  */
  readonly queryParameter?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameter;
  /**
  * Terminal is a flag that short-circuits the hash computing. This field provides a ‘fallback’ style of configuration: “if a terminal policy doesn’t work, fallback to rest of the policy list”, it saves time when the terminal policy works. If true, and there is already a hash computed, ignore rest of the list of hash polices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#terminal DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#type DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnectionToTerraform(struct!.connection),
    cookie: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookieToTerraform(struct!.cookie),
    filter_state: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterStateToTerraform(struct!.filterState),
    header: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeaderToTerraform(struct!.header),
    query_parameter: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameterToTerraform(struct!.queryParameter),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnection",
    },
    cookie: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookie",
    },
    filter_state: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterStateToHclTerraform(struct!.filterState),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterState",
    },
    header: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeader",
    },
    query_parameter: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameterToHclTerraform(struct!.queryParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameter",
    },
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._filterState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterState = this._filterState?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter?.internalValue;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connection.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._filterState.internalValue = undefined;
      this._header.internalValue = undefined;
      this._queryParameter.internalValue = undefined;
      this._terminal = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connection.internalValue = value.connection;
      this._cookie.internalValue = value.cookie;
      this._filterState.internalValue = value.filterState;
      this._header.internalValue = value.header;
      this._queryParameter.internalValue = value.queryParameter;
      this._terminal = value.terminal;
      this._type = value.type;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // filter_state - computed: false, optional: true, required: false
  private _filterState = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterStateOutputReference(this, "filter_state");
  public get filterState() {
    return this._filterState;
  }
  public putFilterState(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesFilterState) {
    this._filterState.internalValue = value;
  }
  public resetFilterState() {
    this._filterState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStateInput() {
    return this._filterState.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameterOutputReference(this, "query_parameter");
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesQueryParameter) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesOutputReference {
    return new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglev {
  /**
  * HashPolicies specify a list of request/connection properties that are used to calculate a hash. These hash policies are executed in the specified order. If a hash policy has the “terminal” attribute set to true, and there is already a hash generated, the hash is returned immediately, ignoring the rest of the hash policy list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#hash_policies DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#hash_policies}
  */
  readonly hashPolicies?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPolicies[] | cdktf.IResolvable;
  /**
  * The table size for Maglev hashing. Maglev aims for “minimal disruption” rather than an absolute guarantee. Minimal disruption means that when the set of upstream hosts change, a connection will likely be sent to the same upstream as it was before. Increasing the table size reduces the amount of disruption. The table size must be prime number limited to 5000011. If it is not specified, the default is 65537.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#table_size DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#table_size}
  */
  readonly tableSize?: number;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_policies: cdktf.listMapper(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesToTerraform, false)(struct!.hashPolicies),
    table_size: cdktf.numberToTerraform(struct!.tableSize),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_policies: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesToHclTerraform, false)(struct!.hashPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesList",
    },
    table_size: {
      value: cdktf.numberToHclTerraform(struct!.tableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglev | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashPolicies = this._hashPolicies?.internalValue;
    }
    if (this._tableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableSize = this._tableSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglev | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashPolicies.internalValue = undefined;
      this._tableSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashPolicies.internalValue = value.hashPolicies;
      this._tableSize = value.tableSize;
    }
  }

  // hash_policies - computed: false, optional: true, required: false
  private _hashPolicies = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPoliciesList(this, "hash_policies", false);
  public get hashPolicies() {
    return this._hashPolicies;
  }
  public putHashPolicies(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevHashPolicies[] | cdktf.IResolvable) {
    this._hashPolicies.internalValue = value;
  }
  public resetHashPolicies() {
    this._hashPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPoliciesInput() {
    return this._hashPolicies.internalValue;
  }

  // table_size - computed: false, optional: true, required: false
  private _tableSize?: number; 
  public get tableSize() {
    return this.getNumberAttribute('table_size');
  }
  public set tableSize(value: number) {
    this._tableSize = value;
  }
  public resetTableSize() {
    this._tableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSizeInput() {
    return this._tableSize;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnection {
  /**
  * Hash on source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#source_ip DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnectionToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnectionToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceIp = value.sourceIp;
    }
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookie {
  /**
  * The name of the cookie that will be used to obtain the hash key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The name of the path for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#path DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * If specified, a cookie with the TTL will be generated if the cookie is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#ttl DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookieToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookieToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookie | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._ttl = value.ttl;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterState {
  /**
  * The name of the Object in the per-request filterState, which is an Envoy::Hashable object. If there is no data associated with the key, or the stored object is not Envoy::Hashable, no hash will be produced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#key DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#key}
  */
  readonly key: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterStateToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterStateToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeader {
  /**
  * The name of the request header that will be used to obtain the hash key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeaderToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeaderToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeader | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameter {
  /**
  * The name of the URL query parameter that will be used to obtain the hash key. If the parameter is not present, no hash will be produced. Query parameter names are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameterToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameterToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameter | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#connection DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#connection}
  */
  readonly connection?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#cookie DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#cookie}
  */
  readonly cookie?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookie;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#filter_state DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#filter_state}
  */
  readonly filterState?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterState;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#header DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#header}
  */
  readonly header?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#query_parameter DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#query_parameter}
  */
  readonly queryParameter?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameter;
  /**
  * Terminal is a flag that short-circuits the hash computing. This field provides a ‘fallback’ style of configuration: “if a terminal policy doesn’t work, fallback to rest of the policy list”, it saves time when the terminal policy works. If true, and there is already a hash computed, ignore rest of the list of hash polices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#terminal DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#type DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnectionToTerraform(struct!.connection),
    cookie: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookieToTerraform(struct!.cookie),
    filter_state: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterStateToTerraform(struct!.filterState),
    header: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeaderToTerraform(struct!.header),
    query_parameter: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameterToTerraform(struct!.queryParameter),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnection",
    },
    cookie: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookie",
    },
    filter_state: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterStateToHclTerraform(struct!.filterState),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterState",
    },
    header: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeader",
    },
    query_parameter: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameterToHclTerraform(struct!.queryParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameter",
    },
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._filterState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterState = this._filterState?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter?.internalValue;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connection.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._filterState.internalValue = undefined;
      this._header.internalValue = undefined;
      this._queryParameter.internalValue = undefined;
      this._terminal = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connection.internalValue = value.connection;
      this._cookie.internalValue = value.cookie;
      this._filterState.internalValue = value.filterState;
      this._header.internalValue = value.header;
      this._queryParameter.internalValue = value.queryParameter;
      this._terminal = value.terminal;
      this._type = value.type;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // filter_state - computed: false, optional: true, required: false
  private _filterState = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterStateOutputReference(this, "filter_state");
  public get filterState() {
    return this._filterState;
  }
  public putFilterState(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesFilterState) {
    this._filterState.internalValue = value;
  }
  public resetFilterState() {
    this._filterState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStateInput() {
    return this._filterState.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameterOutputReference(this, "query_parameter");
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesQueryParameter) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesOutputReference {
    return new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHash {
  /**
  * HashFunction is a function used to hash hosts onto the ketama ring. The value defaults to XX_HASH. Available values – XX_HASH, MURMUR_HASH_2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#hash_function DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#hash_function}
  */
  readonly hashFunction?: string;
  /**
  * HashPolicies specify a list of request/connection properties that are used to calculate a hash. These hash policies are executed in the specified order. If a hash policy has the “terminal” attribute set to true, and there is already a hash generated, the hash is returned immediately, ignoring the rest of the hash policy list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#hash_policies DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#hash_policies}
  */
  readonly hashPolicies?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPolicies[] | cdktf.IResolvable;
  /**
  * Maximum hash ring size. Defaults to 8M entries, and limited to 8M entries, but can be lowered to further constrain resource use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#max_ring_size DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#max_ring_size}
  */
  readonly maxRingSize?: number;
  /**
  * Minimum hash ring size. The larger the ring is (that is, the more hashes there are for each provided host) the better the request distribution will reflect the desired weights. Defaults to 1024 entries, and limited to 8M entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#min_ring_size DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#min_ring_size}
  */
  readonly minRingSize?: number;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_function: cdktf.stringToTerraform(struct!.hashFunction),
    hash_policies: cdktf.listMapper(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesToTerraform, false)(struct!.hashPolicies),
    max_ring_size: cdktf.numberToTerraform(struct!.maxRingSize),
    min_ring_size: cdktf.numberToTerraform(struct!.minRingSize),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_function: {
      value: cdktf.stringToHclTerraform(struct!.hashFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_policies: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesToHclTerraform, false)(struct!.hashPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesList",
    },
    max_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.maxRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashFunction = this._hashFunction;
    }
    if (this._hashPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashPolicies = this._hashPolicies?.internalValue;
    }
    if (this._maxRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRingSize = this._maxRingSize;
    }
    if (this._minRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRingSize = this._minRingSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashFunction = undefined;
      this._hashPolicies.internalValue = undefined;
      this._maxRingSize = undefined;
      this._minRingSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashFunction = value.hashFunction;
      this._hashPolicies.internalValue = value.hashPolicies;
      this._maxRingSize = value.maxRingSize;
      this._minRingSize = value.minRingSize;
    }
  }

  // hash_function - computed: false, optional: true, required: false
  private _hashFunction?: string; 
  public get hashFunction() {
    return this.getStringAttribute('hash_function');
  }
  public set hashFunction(value: string) {
    this._hashFunction = value;
  }
  public resetHashFunction() {
    this._hashFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFunctionInput() {
    return this._hashFunction;
  }

  // hash_policies - computed: false, optional: true, required: false
  private _hashPolicies = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPoliciesList(this, "hash_policies", false);
  public get hashPolicies() {
    return this._hashPolicies;
  }
  public putHashPolicies(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashHashPolicies[] | cdktf.IResolvable) {
    this._hashPolicies.internalValue = value;
  }
  public resetHashPolicies() {
    this._hashPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPoliciesInput() {
    return this._hashPolicies.internalValue;
  }

  // max_ring_size - computed: false, optional: true, required: false
  private _maxRingSize?: number; 
  public get maxRingSize() {
    return this.getNumberAttribute('max_ring_size');
  }
  public set maxRingSize(value: number) {
    this._maxRingSize = value;
  }
  public resetMaxRingSize() {
    this._maxRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRingSizeInput() {
    return this._maxRingSize;
  }

  // min_ring_size - computed: false, optional: true, required: false
  private _minRingSize?: number; 
  public get minRingSize() {
    return this.getNumberAttribute('min_ring_size');
  }
  public set minRingSize(value: number) {
    this._minRingSize = value;
  }
  public resetMinRingSize() {
    this._minRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRingSizeInput() {
    return this._minRingSize;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancer {
  /**
  * LeastRequest selects N random available hosts as specified in 'choiceCount' (2 by default) and picks the host which has the fewest active requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#least_request DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#least_request}
  */
  readonly leastRequest?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequest;
  /**
  * Maglev implements consistent hashing to upstream hosts. Maglev can be used as a drop in replacement for the ring hash load balancer any place in which consistent hashing is desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#maglev DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#maglev}
  */
  readonly maglev?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglev;
  /**
  * Random selects a random available host. The random load balancer generally performs better than round-robin if no health checking policy is configured. Random selection avoids bias towards the host in the set that comes after a failed host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#random DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#random}
  */
  readonly random?: { [key: string]: string };
  /**
  * RingHash implements consistent hashing to upstream hosts. Each host is mapped onto a circle (the “ring”) by hashing its address; each request is then routed to a host by hashing some property of the request, and finding the nearest corresponding host clockwise around the ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#ring_hash DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#ring_hash}
  */
  readonly ringHash?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHash;
  /**
  * RoundRobin is a load balancing algorithm that distributes requests across available upstream hosts in round-robin order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#round_robin DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#round_robin}
  */
  readonly roundRobin?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#type DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    least_request: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequestToTerraform(struct!.leastRequest),
    maglev: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevToTerraform(struct!.maglev),
    random: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.random),
    ring_hash: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashToTerraform(struct!.ringHash),
    round_robin: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.roundRobin),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    least_request: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequestToHclTerraform(struct!.leastRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequest",
    },
    maglev: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevToHclTerraform(struct!.maglev),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglev",
    },
    random: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.random),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ring_hash: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashToHclTerraform(struct!.ringHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHash",
    },
    round_robin: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.roundRobin),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leastRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leastRequest = this._leastRequest?.internalValue;
    }
    if (this._maglev?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maglev = this._maglev?.internalValue;
    }
    if (this._random !== undefined) {
      hasAnyValues = true;
      internalValueResult.random = this._random;
    }
    if (this._ringHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringHash = this._ringHash?.internalValue;
    }
    if (this._roundRobin !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobin = this._roundRobin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leastRequest.internalValue = undefined;
      this._maglev.internalValue = undefined;
      this._random = undefined;
      this._ringHash.internalValue = undefined;
      this._roundRobin = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leastRequest.internalValue = value.leastRequest;
      this._maglev.internalValue = value.maglev;
      this._random = value.random;
      this._ringHash.internalValue = value.ringHash;
      this._roundRobin = value.roundRobin;
      this._type = value.type;
    }
  }

  // least_request - computed: false, optional: true, required: false
  private _leastRequest = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequestOutputReference(this, "least_request");
  public get leastRequest() {
    return this._leastRequest;
  }
  public putLeastRequest(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerLeastRequest) {
    this._leastRequest.internalValue = value;
  }
  public resetLeastRequest() {
    this._leastRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leastRequestInput() {
    return this._leastRequest.internalValue;
  }

  // maglev - computed: false, optional: true, required: false
  private _maglev = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglevOutputReference(this, "maglev");
  public get maglev() {
    return this._maglev;
  }
  public putMaglev(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerMaglev) {
    this._maglev.internalValue = value;
  }
  public resetMaglev() {
    this._maglev.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maglevInput() {
    return this._maglev.internalValue;
  }

  // random - computed: false, optional: true, required: false
  private _random?: { [key: string]: string }; 
  public get random() {
    return this.getStringMapAttribute('random');
  }
  public set random(value: { [key: string]: string }) {
    this._random = value;
  }
  public resetRandom() {
    this._random = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomInput() {
    return this._random;
  }

  // ring_hash - computed: false, optional: true, required: false
  private _ringHash = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHashOutputReference(this, "ring_hash");
  public get ringHash() {
    return this._ringHash;
  }
  public putRingHash(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerRingHash) {
    this._ringHash.internalValue = value;
  }
  public resetRingHash() {
    this._ringHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringHashInput() {
    return this._ringHash.internalValue;
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin?: { [key: string]: string }; 
  public get roundRobin() {
    return this.getStringMapAttribute('round_robin');
  }
  public set roundRobin(value: { [key: string]: string }) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
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
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#zones DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#zones}
  */
  readonly zones: string[];
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFromToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFromToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zones = value.zones;
    }
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverTo {
  /**
  * Type defines how target zones will be picked from available zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#type DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#zones DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#zones}
  */
  readonly zones?: string[];
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverTo | cdktf.IResolvable): any {
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
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._zones = value.zones;
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailover {
  /**
  * From defines the list of zones to which the rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#from DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFrom;
  /**
  * To defines to which zones the traffic should be load balanced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#to DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#to}
  */
  readonly to: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverTo;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFromToTerraform(struct!.from),
    to: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToToTerraform(struct!.to),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFrom",
    },
    to: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToToHclTerraform(struct!.to),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverTo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: false, required: true
  private _to = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverTo) {
    this._to.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailover[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverOutputReference {
    return new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#percentage DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#percentage}
  */
  readonly percentage: string;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThresholdToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.stringToTerraform(struct!.percentage),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThresholdToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: string; 
  public get percentage() {
    return this.getStringAttribute('percentage');
  }
  public set percentage(value: string) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZone {
  /**
  * Failover defines list of load balancing rules in order of priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#failover DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#failover}
  */
  readonly failover?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailover[] | cdktf.IResolvable;
  /**
  * FailoverThreshold defines the percentage of live destination dataplane proxies below which load balancing to the next priority starts. Example: If you configure failoverThreshold to 70, and you have deployed 10 destination dataplane proxies. Load balancing to next priority will start when number of live destination dataplane proxies drops below 7. Default 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#failover_threshold DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#failover_threshold}
  */
  readonly failoverThreshold?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThreshold;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover: cdktf.listMapper(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToTerraform, false)(struct!.failover),
    failover_threshold: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThresholdToTerraform(struct!.failoverThreshold),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverToHclTerraform, false)(struct!.failover),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverList",
    },
    failover_threshold: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThresholdToHclTerraform(struct!.failoverThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThreshold",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._failoverThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverThreshold = this._failoverThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failover.internalValue = undefined;
      this._failoverThreshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failover.internalValue = value.failover;
      this._failoverThreshold.internalValue = value.failoverThreshold;
    }
  }

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverList(this, "failover", false);
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailover[] | cdktf.IResolvable) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // failover_threshold - computed: false, optional: true, required: false
  private _failoverThreshold = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThresholdOutputReference(this, "failover_threshold");
  public get failoverThreshold() {
    return this._failoverThreshold;
  }
  public putFailoverThreshold(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneFailoverThreshold) {
    this._failoverThreshold.internalValue = value;
  }
  public resetFailoverThreshold() {
    this._failoverThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverThresholdInput() {
    return this._failoverThreshold.internalValue;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTags {
  /**
  * Key defines tag for which affinity is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#key DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Weight of the tag used for load balancing. The bigger the weight the bigger the priority. Percentage of local traffic load balanced to tag is computed by dividing weight by sum of weights from all tags. For example with two affinity tags first with weight 80 and second with weight 20, then 80% of traffic will be redirected to the first tag, and 20% of traffic will be redirected to second one. Setting weights is not mandatory. When weights are not set control plane will compute default weight based on list order. Default: If you do not specify weight we will adjust them so that 90% traffic goes to first tag, 9% to next, and 1% to third and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#weight DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._weight = value.weight;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsOutputReference {
    return new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZone {
  /**
  * AffinityTags list of tags for local zone load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#affinity_tags DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#affinity_tags}
  */
  readonly affinityTags?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTags[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity_tags: cdktf.listMapper(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsToTerraform, false)(struct!.affinityTags),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity_tags: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsToHclTerraform, false)(struct!.affinityTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinityTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinityTags = this._affinityTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinityTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinityTags.internalValue = value.affinityTags;
    }
  }

  // affinity_tags - computed: false, optional: true, required: false
  private _affinityTags = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTagsList(this, "affinity_tags", false);
  public get affinityTags() {
    return this._affinityTags;
  }
  public putAffinityTags(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneAffinityTags[] | cdktf.IResolvable) {
    this._affinityTags.internalValue = value;
  }
  public resetAffinityTags() {
    this._affinityTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityTagsInput() {
    return this._affinityTags.internalValue;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwareness {
  /**
  * CrossZone defines locality aware load balancing priorities when dataplane proxies inside local zone are unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#cross_zone DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#cross_zone}
  */
  readonly crossZone?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZone;
  /**
  * Disabled allows to disable locality-aware load balancing. When disabled requests are distributed across all endpoints regardless of locality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#disabled DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * LocalZone defines locality aware load balancing priorities between dataplane proxies inside a zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#local_zone DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#local_zone}
  */
  readonly localZone?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZone;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwareness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_zone: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneToTerraform(struct!.crossZone),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    local_zone: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneToTerraform(struct!.localZone),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwareness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_zone: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneToHclTerraform(struct!.crossZone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZone",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_zone: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneToHclTerraform(struct!.localZone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZone",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwareness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossZone = this._crossZone?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._localZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localZone = this._localZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwareness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossZone.internalValue = undefined;
      this._disabled = undefined;
      this._localZone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossZone.internalValue = value.crossZone;
      this._disabled = value.disabled;
      this._localZone.internalValue = value.localZone;
    }
  }

  // cross_zone - computed: false, optional: true, required: false
  private _crossZone = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZoneOutputReference(this, "cross_zone");
  public get crossZone() {
    return this._crossZone;
  }
  public putCrossZone(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessCrossZone) {
    this._crossZone.internalValue = value;
  }
  public resetCrossZone() {
    this._crossZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossZoneInput() {
    return this._crossZone.internalValue;
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

  // local_zone - computed: false, optional: true, required: false
  private _localZone = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZoneOutputReference(this, "local_zone");
  public get localZone() {
    return this._localZone;
  }
  public putLocalZone(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessLocalZone) {
    this._localZone.internalValue = value;
  }
  public resetLocalZone() {
    this._localZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localZoneInput() {
    return this._localZone.internalValue;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefault {
  /**
  * LoadBalancer allows to specify load balancing algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#load_balancer DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancer;
  /**
  * LocalityAwareness contains configuration for locality aware load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#locality_awareness DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#locality_awareness}
  */
  readonly localityAwareness?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwareness;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerToTerraform(struct!.loadBalancer),
    locality_awareness: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessToTerraform(struct!.localityAwareness),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancer",
    },
    locality_awareness: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessToHclTerraform(struct!.localityAwareness),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwareness",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._localityAwareness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareness = this._localityAwareness?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._localityAwareness.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._localityAwareness.internalValue = value.localityAwareness;
    }
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // locality_awareness - computed: false, optional: true, required: false
  private _localityAwareness = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwarenessOutputReference(this, "locality_awareness");
  public get localityAwareness() {
    return this._localityAwareness;
  }
  public putLocalityAwareness(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultLocalityAwareness) {
    this._localityAwareness.internalValue = value;
  }
  public resetLocalityAwareness() {
    this._localityAwareness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityAwarenessInput() {
    return this._localityAwareness.internalValue;
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#kind DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#labels DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#mesh DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#namespace DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#section_name DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#tags DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRefToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTo {
  /**
  * Default is a configuration specific to the group of destinations referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#default DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#target_ref DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRef;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined) {
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
  private _default = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToDefault) {
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
  private _targetRef = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToOutputReference {
    return new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpec {
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined inplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#target_ref DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRef;
  /**
  * To list makes a match between the consumed services and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#to DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_ref: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    to: cdktf.listMapper(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_ref: {
      value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRef",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _targetRef = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTargetRef) {
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
  private _to = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecTo[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest k8s_kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest k8s_kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_load_balancing_strategy_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshLoadBalancingStrategyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
